import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteRow } from '../actions';

class Table extends Component {
  render() {
    const { expenses, buttonDelete } = this.props;
    return (
      <table className="table">
        <thead>
          <tr className="table-head">
            <th className="header-cell">Description</th>
            <th className="header-cell">Tag</th>
            <th className="header-cell">Payment method</th>
            <th className="header-cell">Value</th>
            <th className="header-cell">Currency</th>
            <th className="header-cell">Exchange used</th>
            <th className="header-cell">Converted value</th>
            <th className="header-cell">Conversion currency</th>
            <th className="header-cell"> </th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item) => (
            <tr key={ item.id } className="table-body">
              <td className="body-cell">{ item.description }</td>
              <td className="body-cell">{ item.tag }</td>
              <td className="body-cell">{ item.method }</td>
              <td className="body-cell">{ item.value }</td>
              <td className="body-cell">{ item.exchangeRates[item.currency].name }</td>
              <td className="body-cell">{ parseFloat(item.exchangeRates[item.currency].ask).toFixed(2) }</td>
              <td className="body-cell">
                {
                  parseFloat(item.value * item.exchangeRates[item.currency].ask)
                    .toFixed(2)
                }
              </td>
              <td className="body-cell">Real</td>
              <td className="body-cell">
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => buttonDelete(item.id) }
                  className="wallet-button"
                >
                  Delete
                </button>
              </td>
            </tr>))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf().isRequired,
  buttonDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  buttonDelete: (id) => dispatch(deleteRow(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
