import {View} from 'react-native';
import React from 'react';
import {Box, ScrollView, Text, FlatList} from 'native-base';

// cardNews
import CardNews from '../../components/CardNews';

const Dashboard = () => {
  return (
    <ScrollView mx={5} my={2}>
      <Text>Top HeadLines</Text>
      <CardNews />
      <CardNews />
    </ScrollView>
  );
};

export default Dashboard;
