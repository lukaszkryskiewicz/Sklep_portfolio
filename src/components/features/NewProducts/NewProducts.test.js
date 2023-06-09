import React from 'react';
import { shallow } from 'enzyme';
import NewProducts from './NewProducts';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';

describe('Component NewProduct', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <NewProducts />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
