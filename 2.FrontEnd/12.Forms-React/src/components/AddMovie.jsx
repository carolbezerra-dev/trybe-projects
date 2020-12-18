import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.initialState = this.initialState.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  initialState() {
    // recebe o onClick como props e o this.state representa o estado atual que será modificado
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <div>

        <form data-testid="add-movie-form" className="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title">
            Title
            <input
              type="text"
              value={this.state.title}
              data-testid="title-input"
              onChange={this.handleChange}
              name="title"
              className="title"
            />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitle">
            Subtitle
            <input
              type="text"
              value={this.state.subtitle}
              data-testid="subtitle-input"
              onChange={this.handleChange}
              name="subtitle"
              className="subtitle"
            />
          </label>
          <label data-testid="image-input-label" htmlFor="imagePath">
            Image
            <input
              type="text"
              value={this.state.imagePath}
              data-testid="image-input"
              onChange={this.handleChange}
              name="imagePath"
              className="imagePath"
            />
          </label>
          <label data-testid="storyline-input-label" htmlFor="storyline">
            Storyline
            <textarea
              value={this.state.storyline}
              data-testid="storyline-input"
              onChange={this.handleChange}
              name="storyline"
              className="storyline"
            />
          </label>
          <label data-testid="rating-input-label" htmlFor="rating">
            Rate
            <input
              type="number"
              value={this.state.rating}
              data-testid="rating-input"
              onChange={this.handleChange}
              name="rating"
              className="rating"
            />
          </label>
          <label data-testid="genre-input-label" htmlFor="genre">
            Genre
            <select
              value={this.state.genre}
              name="genre"
              data-testid="genre-input"
              onChange={this.handleChange}
              className="select"
            >
              <option data-testid="genre-option" value="action">Action</option>
              <option data-testid="genre-option" value="comedy">Comedy</option>
              <option data-testid="genre-option" value="Thriller">thriller</option>
            </select>
          </label>
        </form>
        <button
          data-testid="send-button"
          onClick={this.initialState}
          className="button"
        >
          Add movie
        </button>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
