import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import App from '../App';

describe('Testing the Pokemon.js file', () => {
  test('if a card is rendered with the information of a certain Pokémon', () => {
    const history = createMemoryHistory();
    const {
      getByText,
      queryByText,
      queryByTestId,
      getByAltText,
      getByTestId,
      getByRole,
    } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    // The correct name of the Pokémon should be shown on the screen;
    expect(getByTestId('pokemon-name').tagName).toBe('P');
    expect(getByText('Pikachu')).toBeInTheDocument();
    expect(queryByText('Pikachuu')).not.toBeInTheDocument();
    // The correct type of pokémon should be shown on the screen.
    expect(getByTestId('pokemonType').tagName).toBe('P');
    expect(getByTestId('pokemonType')).toHaveTextContent('Electric');
    expect(queryByTestId('pokemonType')).not.toHaveTextContent('Fire');
    /* The average weight of the Pokémon must be displayed with text in the format Average weight: <value> <measurementUnit>; where <value> and <measurementUnit> are, respectively, the average weight of the pokémon and its unit of measurement. */
    expect(getByTestId('pokemon-weight').tagName).toBe('P');
    expect(getByTestId('pokemon-weight')).toHaveTextContent('Average weight: 6.0 kg');
    expect(queryByTestId('pokemon-weight')).not.toHaveTextContent('Average weight: 6 kg');
    /* The Pokémon image should be displayed. It must contain a src attribute with the image URL and an alt attribute with the text <name> sprite, where <name> is the name of the pokémon; */
    const imgSrc = 'https://cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    expect(getByRole('img').src).toBe(imgSrc);
    expect(getByAltText('Pikachu sprite')).toBeInTheDocument();
  });

  test('whether the card contains a navigation link to display details', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const moreDetailsLink = getByText('More details');
    expect(moreDetailsLink.tagName).toBe('A');
  });

  test('if clicking on the link redirects to the details page', () => {
    const history = createMemoryHistory();
    const { getByText, queryAllByRole } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    expect(getByText('More details')).toBeInTheDocument();
    fireEvent.click(getByText('More details'));
    const allHeadings = queryAllByRole('heading');
    const FOUR = 4;
    expect(allHeadings.length).toBe(FOUR);
    expect(allHeadings[0]).toHaveTextContent('Pokédex');
    expect(allHeadings[1]).toHaveTextContent('Pikachu Details');
    expect(allHeadings[2]).toHaveTextContent('Summary');
    expect(allHeadings[3]).toHaveTextContent('Game Locations of Pikachu');
  });

  test('if the URL displayed in the browser changes to / pokemon / <id>', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    expect(getByText('Pikachu')).toBeInTheDocument();
    fireEvent.click(getByText('Próximo pokémon'));
    expect(getByText('Charmander')).toBeInTheDocument();
    const moreDetailsLink = getByText('More details');
    expect(moreDetailsLink).toBeInTheDocument();
    fireEvent.click(moreDetailsLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/4');
  });

  test('if there is a star icon on favorite Pokémon.', () => {
    const history = createMemoryHistory();
    const { getByText, getByLabelText, getByAltText, getAllByRole } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    expect(getByText('Pikachu')).toBeInTheDocument();
    fireEvent.click(getByText('Bug'));
    const caterpiePokemon = getByText('Caterpie');
    expect(caterpiePokemon).toBeInTheDocument();
    fireEvent.click(getByText('More details'));
    const labelInput = getByLabelText('Pokémon favoritado?');
    expect(labelInput).toBeInTheDocument();
    userEvent.click(labelInput);
    expect(labelInput).toBeChecked();
    // The icon must be an image with the src attribute containing the /star-icon.svg path;
    expect(getAllByRole('img')[1].src).toBe('http://localhost/star-icon.svg');
    /* The image must have the alt attribute equal to <pokemon> is marked as favorite, where <pokemon> is the name of the displayed Pokémon. */
    expect(getByAltText('Caterpie is marked as favorite')).toBeInTheDocument();
  });
});
