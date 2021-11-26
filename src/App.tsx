/**
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {useGetRandomNameQuery} from './services/api';

const App = () => {
  const {data, isLoading} = useGetRandomNameQuery(1);

  return (
    <SafeAreaView>
      <StatusBar />
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        data && data.map(name => <Text key={name.id}>{name.first_name}</Text>)
      )}
    </SafeAreaView>
  );
};

export default App;
