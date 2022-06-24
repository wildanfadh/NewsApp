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

const queryClient = new QueryClient();

// screens
import Dashboard from './screens/dashboard/Dashboard';
import BottomNavigation from './navigation';

const App = () => {
  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <BottomNavigation />
        </NavigationContainer>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
};

export default App;
