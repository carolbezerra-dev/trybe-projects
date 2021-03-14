import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import App from '../App';

describe('Testing the About.js file', () => {
  test('whether the page contains information about Pokédex', () => {
    const history = createMemoryHistory();
    const { getByText, getAllByRole } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const about = getByText('About');
    fireEvent.click(about);
    const h1Tag = getAllByRole('heading', { level: 1 });
    const h1Text = getByText('Pokédex');
    expect(h1Tag[0]).toBeInTheDocument();
    expect(h1Text).toBeInTheDocument();
  });

  test('if the page contains an h2 heading with the text About Pokédex', () => {
    const history = createMemoryHistory();
    const { getByText, getAllByRole } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const about = getByText('About');
    fireEvent.click(about);
    const h2Tag = getAllByRole('heading', { level: 2 });
    const h2Text = getByText('About Pokédex');
    expect(h2Tag[1]).toBeInTheDocument();
    expect(h2Text).toBeInTheDocument();
  });

  test('if the page contains two paragraphs with text about Pokédex', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const about = getByText('About');
    fireEvent.click(about);
    const p1Part1 = 'This application simulates a Pokédex, a';
    const p1Part2 = ' digital encliclopedia containing all Pokémons';
    const p2 = getByText(
      'One can filter Pokémons by type, and see more details for each one of them',
    );
    expect(getByText(p1Part1 + p1Part2).tagName).toBe('P');
    expect(getByText(p1Part1 + p1Part2)).toBeInTheDocument();
    expect(p2.tagName).toBe('P');
    expect(p2).toBeInTheDocument();
  });

  test('if the page contains the following image of a Pokédex', () => {
    const history = createMemoryHistory();
    const { getByText, getByAltText, getByRole } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const about = getByText('About');
    fireEvent.click(about);
    const imgAlt = getByAltText('Pokédex');
    const imgSrc = 'https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(imgAlt).toBeInTheDocument();
    expect(getByRole('img').src).toBe(imgSrc);
  });
});
