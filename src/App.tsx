import {View, Text} from 'react-native';
import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import {NavigationContainer} from '@react-navigation/native';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchInterval: 60000,
      refetchIntervalInBackground: true,
    },
  },
});

// screens
import Dashboard from './screens/dashboard/Dashboard';
import Navigation from './navigation';

const App = () => {
  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </NativeBaseProvider>
  );
};

export default App;
