import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import Table from './Table';
import fetchCurrency, { updateExpenses } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.clickBoth = this.clickBoth.bind(this);
  }

  componentDidMount() {
    const { fetchHere } = this.props;
    fetchHere();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async clickBoth() {
    const { updatingExpenses, fetchHere } = this.props;
    const { value, description, currency, method, tag } = this.state;
    await fetchHere();
    updatingExpenses(value, description, currency, method, tag);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencyArray } = this.props;
    return (
      <div>
        <Header />
        <div className="wallet-div">
          <label htmlFor="wallet-value">
            <input
              type="number"
              data-testid="value-input"
              name="value"
              value={ value }
              onChange={ this.handleChange }
              id="wallet-value"
              className="wallet-value"
            />
          </label>
          <label htmlFor="wallet-description">
            <input
              type="text"
              data-testid="description-input"
              name="description"
              value={ description }
              onChange={ this.handleChange }
              id="wallet-description"
              className="wallet-description"
              autoComplete="off"
            />
          </label>
          <select
            data-testid="currency-input"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
            className="wallet-currency"
          >
            { currencyArray.map((item) => (
              <option data-testid={ item } key={ item }>
                { item }
              </option>)) }
          </select>
          <select
            data-testid="method-input"
            name="method"
            value={ method }
            onChange={ this.handleChange }
            className="wallet-method"
          >
            <option value="" selected disabled>Method</option>
            <option>Cash</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
          </select>
          <select
            data-testid="tag-input"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
            className="wallet-tag"
          >
            <option value="" disabled selected>Tag</option>
            <option>Food</option>
            <option>Recreation</option>
            <option>Job</option>
            <option>Transport</option>
            <option>Health</option>
          </select>
          <button
            type="button"
            onClick={ () => this.clickBoth() }
            className="wallet-button"
          >
            Add expense
          </button>
        </div>
        <Table />
      </div>
    );
  }
}

Wallet.propTypes = {
  fetchHere: PropTypes.func.isRequired,
  updatingExpenses: PropTypes.func.isRequired,
  currencyArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencyArray: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchHere: () => dispatch(fetchCurrency()),
  updatingExpenses:
    (value, description, currency, method, tag) => dispatch(
      updateExpenses(value, description, currency, method, tag),
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
