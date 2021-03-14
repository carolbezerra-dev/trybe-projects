import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import App from '../App';

describe('Testing the FavoritePokemons.js file', () => {
  test('if No favorite pokemon found is displayed, if you have no favorite pokemon', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const favorite = getByText('Favorite Pokémons');
    fireEvent.click(favorite);
    const noFavorite = getByText('No favorite pokemon found');
    expect(noFavorite).toBeInTheDocument();
  });

  test('whether all favorite Pokémon cards are displayed', () => {
    const history = createMemoryHistory();
    const { getByText, getByLabelText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const pikachuDetails = '/pokemons/25';
    history.push(pikachuDetails);
    const labelInput = getByLabelText('Pokémon favoritado?');
    userEvent.click(labelInput);
    expect(labelInput).toBeChecked();
    fireEvent.click(getByText('Favorite Pokémons'));
    const pokemonName = getByText('Pikachu');
    expect(pokemonName).toBeInTheDocument();
  });

  test('if no Pokémon card is displayed, if it is not favored', () => {
    const history = createMemoryHistory();
    const { getByText, getByLabelText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const pikachuDetails = '/pokemons/25';
    history.push(pikachuDetails);
    const labelInput = getByLabelText('Pokémon favoritado?');
    userEvent.click(labelInput);
    expect(labelInput).not.toBeChecked();
    fireEvent.click(getByText('Favorite Pokémons'));
    const noFavorite = getByText('No favorite pokemon found');
    expect(noFavorite).toBeInTheDocument();
  });
});
