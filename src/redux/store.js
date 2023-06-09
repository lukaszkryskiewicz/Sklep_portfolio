import { combineReducers, createStore } from 'redux';
import initialState from './initialState';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import productsReducer from './productsRedux';
import viewportModeReducer from './viewportModeRedux';
import feedbacksReducer from './feedbacksRedux';
import blogReducer from './blogRedux';
import promotionReducer from './promotionRedux';
import brandsReducer from './brandsRedux';
import filtersReducer from './filterRedux';
import searchReducer from './searchRedux';
import currencyReducer from './currencyRedux';
import loggedUserReducer from './loggedUserRedux';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'products', 'currency', 'loggedUser', 'search'],
};
// define reducers
const reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  viewportMode: viewportModeReducer,
  feedbacks: feedbacksReducer,
  blog: blogReducer,
  promotion: promotionReducer,
  brands: brandsReducer,
  productFilters: filtersReducer,
  search: searchReducer,
  currency: currencyReducer,
  loggedUser: loggedUserReducer,
};

const persistedReducer = persistReducer(persistConfig, combineReducers(reducers));

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

//const combinedReducers = combineReducers(reducers);

// create store
export const store = createStore(
  persistedReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
