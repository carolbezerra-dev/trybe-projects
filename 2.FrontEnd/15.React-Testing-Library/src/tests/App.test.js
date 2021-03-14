import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import App from '../App';

describe('Testing the App.js file', () => {
  test('whether the main page is rendered in the URL / path', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('if the top of the application contains a fixed set of navigation links', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    // The first link must have the text Home.
    const home = getByText('Home');
    expect(home).toBeInTheDocument();
    // The second link must have the text About.
    const about = getByText('About');
    expect(about).toBeInTheDocument();
    // The third link must have the text Favorite Pokémons.
    const favorite = getByText('Favorite Pokémons');
    expect(favorite).toBeInTheDocument();
  });

  test('if you are redirected to the home, at the URL / by clicking on the Home link', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const home = getByText('Home');
    fireEvent.click(home);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('if you are redirected to About, at the URL / about, by clicking on the About link', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const about = getByText('About');
    fireEvent.click(about);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  test('if it is redirected to Favorites, in the URL / favorites when clicking on the link', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const favorites = getByText('Favorite Pokémons');
    fireEvent.click(favorites);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  test('if the application goes to the Not Found page when entering the unknown URL', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const notFound = '/xablau';
    history.push(notFound);
    expect(getByText('Page requested not found')).toBeInTheDocument();
  });
});
