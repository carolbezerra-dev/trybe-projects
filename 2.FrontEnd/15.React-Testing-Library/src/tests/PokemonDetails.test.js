import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import App from '../App';

describe('Testing the PokemonDetails.js file', () => {
  test('whether detailed information is shown on the screen', () => {
    const history = createMemoryHistory();
    const { getByText, getAllByRole, queryByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    expect(getByText('Pikachu')).toBeInTheDocument();
    fireEvent.click(getByText('More details'));
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
    // The page must contain a text <name> Details, where <name> is the name of the Pokémon;
    expect(getByText('Pikachu Details')).toBeInTheDocument();
    // There should be no navigation link for the details of the selected Pokémon.
    expect(queryByText('More details')).not.toBeInTheDocument();
    // The details section should contain an heading h2 with the text Summary.
    const h2Tag = getAllByRole('heading');
    expect(h2Tag[2]).toHaveTextContent('Summary');
    expect(getByText('Summary').tagName).toBe('H2');
    // The details section should contain a paragraph with the summary of the specific Pokémon being viewed.
    const p1Part1 = 'This intelligent Pokémon roasts hard berries with electricity';
    const p1Part2 = ' to make them tender enough to eat.';
    const paragraph = getByText(p1Part1 + p1Part2);
    expect(paragraph.tagName).toBe('P');
  });

  test('if there is a section with the maps containing the locations of the pokémon', () => {
    const history = createMemoryHistory();
    const { getByText, getAllByRole, getByAltText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    expect(getByText('Pikachu')).toBeInTheDocument();
    fireEvent.click(getByText('Poison'));
    expect(getByText('Ekans')).toBeInTheDocument();
    fireEvent.click(getByText('More details'));
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/23');
    /* In the details section there should be a heading h2 with the text Game Locations of <name>; where <name> is the name of the Pokémon displayed. */
    const gameLocations = getByText('Game Locations of Ekans');
    expect(gameLocations).toBeInTheDocument();
    expect(gameLocations.tagName).toBe('H2');
    // All Pokémon locations must be shown in the details section;
    // Should be displayed, the name of the location and a map image at each location;
    expect(getByText('Goldenrod Game Corner')).toBeInTheDocument();
    // The location image must have an src attribute with the location URL;
    const images = getAllByRole('img');
    const DOIS = 2;
    expect(images.length).toBe(DOIS);
    expect(images[1].src).toBe(
      'https://cdn.bulbagarden.net/upload/e/ec/Johto_Goldenrod_City_Map.png',
    );
    /* The location image must have an alt attribute with the text <name> location, where <name> is the name of the Pokémon; */
    expect(getByAltText('Ekans location')).toBeInTheDocument();
  });

  test('if the user can favor a pokémon through the details page', () => {
    const history = createMemoryHistory();
    const { getByText, getByLabelText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    expect(getByText('Pikachu')).toBeInTheDocument();
    fireEvent.click(getByText('Normal'));
    expect(getByText('Snorlax')).toBeInTheDocument();
    fireEvent.click(getByText('More details'));
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/143');
    // The page should display a checkbox that allows you to favor the Pokémon;
    // Should the checkbox label contain the 'Pokémon favoritado?' text;
    const labelInput = getByLabelText('Pokémon favoritado?');
    expect(labelInput.type).toBe('checkbox');
    expect(labelInput).toBeInTheDocument();
    /* Alternating clicks in the checkbox should add and remove the Pokémon from the list of favorites, respectively; */
    userEvent.click(labelInput);
    expect(labelInput).toBeChecked();
    userEvent.click(labelInput);
    expect(labelInput).not.toBeChecked();
    userEvent.click(labelInput);
    expect(labelInput).toBeChecked();
  });
});
