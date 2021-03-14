import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import App from '../App';

describe('Testing the Pokedex.js file', () => {
  test('if page contains an h2 heading with the text Encountered Pokémon', () => {
    const history = createMemoryHistory();
    const { getByText, getAllByRole } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const h2Tag = getAllByRole('heading', { level: 2 });
    const h2Text = getByText('Encountered pokémons');
    expect(h2Tag[1]).toBeInTheDocument();
    expect(h2Text).toBeInTheDocument();
  });

  test('whether the next Pokémon in the list is displayed when the button is clicked', () => {
    const history = createMemoryHistory();
    const { getByText, getByTestId } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    // The button should contain the text Next pokémon;
    const buttonToNext = getByTestId('next-pokemon');
    expect(buttonToNext).toBeInTheDocument();
    expect(buttonToNext).toHaveTextContent('Próximo pokémon');
    // The next Pokémon in the list must be shown, one by one, when you successively click on the button;
    expect(getByText('Pikachu')).toBeInTheDocument();
    fireEvent.click(buttonToNext);
    expect(getByText('Charmander')).toBeInTheDocument();
    fireEvent.click(buttonToNext);
    expect(getByText('Caterpie')).toBeInTheDocument();
    fireEvent.click(buttonToNext);
    expect(getByText('Ekans')).toBeInTheDocument();
    fireEvent.click(buttonToNext);
    expect(getByText('Alakazam')).toBeInTheDocument();
    fireEvent.click(buttonToNext);
    expect(getByText('Mew')).toBeInTheDocument();
    fireEvent.click(buttonToNext);
    expect(getByText('Rapidash')).toBeInTheDocument();
    fireEvent.click(buttonToNext);
    expect(getByText('Snorlax')).toBeInTheDocument();
    fireEvent.click(buttonToNext);
    expect(getByText('Dragonair')).toBeInTheDocument();
    // The first Pokémon on the list should be shown when clicking the button, if it is on the last Pokémon on the list;
    fireEvent.click(buttonToNext);
    expect(getByText('Pikachu')).toBeInTheDocument();
  });

  test('if only one Pokémon is shown at a time', () => {
    const history = createMemoryHistory();
    const { getByText, queryByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    expect(getByText('Pikachu')).toBeInTheDocument();
    expect(queryByText('Charmander')).not.toBeInTheDocument();
    // reference to the use of 'queryBy' https://testing-library.com/docs/guide-disappearance#nottobeinthedocument
  });

  test('if Pokédex has the filter buttons', () => {
    const history = createMemoryHistory();
    const { getByText, getByTestId, getAllByTestId } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const SEVEN = 7;
    const buttonToFilter = getAllByTestId('pokemon-type-button');
    expect(buttonToFilter.length).toBe(SEVEN);
    // The button text must match the type name, eg. Psychic;
    expect(buttonToFilter[4]).toHaveTextContent('Psychic');
    fireEvent.click(buttonToFilter[4]);
    expect(getByTestId('pokemonType')).toHaveTextContent('Psychic');
    // From the selection of a type button, the Pokédex should only circulate through Pokémon of that type;
    expect(getByText('Alakazam')).toBeInTheDocument();
    const buttonToNext = getByTestId('next-pokemon');
    fireEvent.click(buttonToNext);
    expect(getByText('Mew')).toBeInTheDocument();
    fireEvent.click(buttonToNext);
    expect(getByText('Alakazam')).toBeInTheDocument();
  });

  test('if the Pokédex contains a button to reset the filter', () => {
    const history = createMemoryHistory();
    const { getByText, getByRole, getByTestId } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    // The button text must be All;
    const buttonToReset = getByRole('button', { name: 'All' });
    expect(buttonToReset).toBeInTheDocument();
    expect(buttonToReset).toHaveTextContent('All');
    // Pokedéx should show Pokémon normally (without filters) when the All button is clicked;
    // When loading the page, the selected filter must be All;
    expect(getByText('Pikachu')).toBeInTheDocument();
    const buttonToFire = getByRole('button', { name: 'Fire' });
    fireEvent.click(buttonToFire);
    expect(getByText('Charmander')).toBeInTheDocument();
    const buttonToNext = getByTestId('next-pokemon');
    fireEvent.click(buttonToNext);
    expect(getByText('Rapidash')).toBeInTheDocument();
    fireEvent.click(buttonToReset);
    expect(getByText('Pikachu')).toBeInTheDocument();
    fireEvent.click(buttonToNext);
    expect(getByText('Charmander')).toBeInTheDocument();
  });

  test('if a filter button is created for each type of Pokémon', () => {
    const history = createMemoryHistory();
    const { getAllByRole, getAllByTestId } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    // The filter buttons must be dynamic;
    // There must be a filter button for each type of Pokémon available in the data, without repetition. That is, your Pokédex must have Pokémon of the type Fire, Psychic, Electric and Normal;
    // A button for each type should be shown as a filter option. In addition, the All button must always be visible.
    const NINE = 9;
    const allButtons = getAllByRole('button');
    expect(allButtons.length).toBe(NINE);
    expect(allButtons[0]).toHaveTextContent('All');
    expect(allButtons[8]).toHaveTextContent('Próximo pokémon');
    const SEVEN = 7;
    const allFilteredButtons = getAllByTestId('pokemon-type-button');
    expect(allFilteredButtons.length).toBe(SEVEN);
    expect(allFilteredButtons[0]).toHaveTextContent('Electric');
    expect(allFilteredButtons[1]).toHaveTextContent('Fire');
    expect(allFilteredButtons[2]).toHaveTextContent('Bug');
    expect(allFilteredButtons[3]).toHaveTextContent('Poison');
    expect(allFilteredButtons[4]).toHaveTextContent('Psychic');
    expect(allFilteredButtons[5]).toHaveTextContent('Normal');
    expect(allFilteredButtons[6]).toHaveTextContent('Dragon');
  });

  test('The Next button should be disabled when the list has only 1 Pokémon', () => {
    const history = createMemoryHistory();
    const { getByText, getByRole, getByTestId } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    expect(getByText('Pikachu')).toBeInTheDocument();
    const buttonToNext = getByTestId('next-pokemon');
    expect(buttonToNext).toBeInTheDocument();
    expect(buttonToNext).toHaveTextContent('Próximo pokémon');
    expect(buttonToNext).not.toHaveAttribute('disabled');
    const buttonToNormal = getByRole('button', { name: 'Normal' });
    fireEvent.click(buttonToNormal);
    expect(getByText('Snorlax')).toBeInTheDocument();
    expect(buttonToNext).toHaveAttribute('disabled');
  });
});
