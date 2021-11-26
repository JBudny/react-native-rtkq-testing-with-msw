/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';
import {renderWithProviders} from '../src/utils/testUtils';
import {mockedResponse} from '../src/mocks/mockedResponse';

const mockedName = mockedResponse[0].first_name;

test('App component should render name received from api', async () => {
  const {findByText} = renderWithProviders(<App />);
  const renderedName = await findByText(mockedName);
  expect(renderedName).toBeDefined();
});
