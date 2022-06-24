import {View} from 'react-native';
import React from 'react';
import {Box, HStack, VStack, Image, Text} from 'native-base';

const CardNews = ({props}) => {
  return (
    <Box
      p={3}
      my={2}
      style={{width: '100%', backgroundColor: '#fff'}}
      borderRadius={10}>
      <HStack space={3}>
        <Image
          width={100}
          height={100}
          borderRadius={10}
          source={{uri: 'https://picsum.photos/200'}}
          alt="image"
        />
        <VStack space={4} width={100} height={100}>
          <Text>Judul</Text>
          <Text>Tanggal</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default CardNews;
