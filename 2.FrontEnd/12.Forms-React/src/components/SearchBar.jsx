import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form" className="search-bar-form">
        <label data-testid="text-input-label" htmlFor="input-text">
          Includes the text:
          <input
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
            data-testid="text-input"
            name="input-text"
            className="text-input"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="input-checkbox">
          Show only favorites
          <input
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
            name="input-checkbox"
            className="input-checkbox"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="select">
          Filter by genre
          <select
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            data-testid="select-input"
            name="select"
            className="select"
          >
            <option data-testid="select-option" value="">All</option>
            <option data-testid="select-option" value="action">Action</option>
            <option data-testid="select-option" value="comedy">Comedy</option>
            <option data-testid="select-option" value="thriller">Thriller</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
