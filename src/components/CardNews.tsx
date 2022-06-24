import {View} from 'react-native';
import React from 'react';
import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  Button,
  IconButton,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TimeAgo from 'react-native-timeago';

const CardNews = ({
  id,
  author,
  image,
  imageLg,
  title,
  url,
  date,
  description,
}) => {
  // console.log(author);
  const navigation = useNavigation();
  let timestamp = date;

  const handleDetail = () => {
    // console.log('detail');
    navigation.navigate('DetailNews', {
      title,
      image,
      imageLg,
      url,
      date,
      description,
    });
  };
  return (
    <Box
      p={3}
      my={2}
      style={{width: '100%', backgroundColor: '#fff'}}
      borderRadius={10}>
      <VStack space={3}>
        <Image
          width="100%"
          height={200}
          borderRadius={10}
          // source={{uri: 'https://picsum.photos/200'}}
          source={{uri: image}}
          alt="image"
        />
        <VStack space={4}>
          <Text>{title}</Text>
          <HStack space={4} alignItems="center">
            <Text>
              <TimeAgo time={timestamp} />
            </Text>
            <Button
              size="sm"
              variant="ghost"
              colorScheme="primary"
              onPress={() => handleDetail()}>
              Detail
            </Button>
            <IconButton
              colorScheme="gray"
              _icon={{
                as: MaterialCommunityIcons,
                size: 5,
                name: 'bookmark-outline',
              }}
            />
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default CardNews;
