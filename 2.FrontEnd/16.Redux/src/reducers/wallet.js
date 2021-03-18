// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WAITING_FETCH, GET_FETCHED, UPDATE_EXPENSES, DELETE_ROW } from '../actions';

const initialState = {
  currencies: ['currency'],
  isFetching: false,
  exchangeRates: {},
  expenses: [],
  total: 0,
};

const reduceTotal = (total, atual) => parseFloat(atual.value)
  * atual.exchangeRates[atual.currency].ask + total;

function wallet(state = initialState, action) {
  let newExpenses;

  switch (action.type) {
  case WAITING_FETCH:
    return { ...state, isFetching: true };
  case GET_FETCHED:
    delete action.payload.USDT;
    return {
      ...state,
      isFetching: false,
      currencies: Object.keys(action.payload),
      exchangeRates: { ...action.payload },
    };
  case UPDATE_EXPENSES:
    newExpenses = [
      ...state.expenses,
      {
        id: state.expenses.length,
        ...action.payload,
        exchangeRates: state.exchangeRates,
      },
    ];
    return {
      ...state,
      expenses: newExpenses,
      total: newExpenses.reduce(reduceTotal, 0),
    };
  case DELETE_ROW:
    newExpenses = [...state.expenses.filter(({ id }) => id !== action.id)];
    return {
      ...state,
      expenses: newExpenses,
      total: newExpenses.reduce(reduceTotal, 0),
    };
  default:
    return state;
  }
}

export default wallet;
