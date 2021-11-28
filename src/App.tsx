/**
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {api} from './services/api';
import {useTypedDispatch, useTypedSelector} from './storeHooks';

const App = () => {
  const dispatch = useTypedDispatch();

  // Manual dispatch and selector as a workaround to avoid the jest warning
  // message while testing the components that use the useQuery hook.
  // Warning: "Jest did not exit one second after the test run has completed."
  const selectRandomName = api.endpoints.getRandomName.select(2);
  const {data, isLoading, isError} = useTypedSelector(selectRandomName);

  useEffect(() => {
    dispatch(api.endpoints.getRandomName.initiate(2));
  }, [dispatch]);

  return (
    <SafeAreaView>
      <StatusBar />
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        data && data.map(name => <Text key={name.id}>{name.first_name}</Text>)
      )}
      {isError && <Text>Error</Text>}
    </SafeAreaView>
  );
};

export default App;
