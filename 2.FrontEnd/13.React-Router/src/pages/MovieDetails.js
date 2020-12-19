import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };
    this.deleteCard = this.deleteCard.bind(this);
  }

  componentDidMount() {
    // tem que buscar o caminho do id
    movieAPI.getMovie(this.props.match.params.id).then((movie) => this.setState({
      movie,
      loading: false,
    }));
  }

  async deleteCard() { // referência: Vanessa Bidinotto
    return await movieAPI.deleteMovie(this.props.match.params.id);
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { id } = this.props.match.params;
    
    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} className="movie-card-image-details" />
        <h5 className="movie-card-title-details">{`Title: ${title}`}</h5>
        <p className="movie-card-subtitle-details">{`Subtitle: ${subtitle}`}</p>
        <p className="movie-card-storyline-details">{`Storyline: ${storyline}`}</p>
        <p className="movie-card-genre-details">{`Genre: ${genre}`}</p>
        <p className="movie-card-genre-details">{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`} className="link-details">EDIT</Link>
        <Link to="/" onClick={this.deleteCard} className="link-details">DELETE</Link>
        <Link to="/" className="link-details">BACK</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
