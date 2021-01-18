import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const { userEmail, totalSum = 0 } = this.props;
    return (
      <div className="header-div">
        <h1 className="welcome">Welcome to your TrybeWallet!</h1>
        <p data-testid="email-field" className="email-header">{ userEmail }</p>
        <p data-testid="total-field" className="total-header">{ totalSum.toFixed(2) }</p>
        <p data-testid="header-currency-field" className="total-header">BRL</p>
        <Link to="/" className="signout">Sign Out</Link>
      </div>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  totalSum: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  totalSum: state.wallet.total,
});

export default connect(mapStateToProps)(Header);
