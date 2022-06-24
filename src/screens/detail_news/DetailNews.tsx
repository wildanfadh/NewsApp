import {View} from 'react-native';
import React from 'react';
import {
  ScrollView,
  Box,
  Image,
  HStack,
  VStack,
  Spinner,
  Text,
  Heading,
} from 'native-base';

const DetailNews = ({route}) => {
  // const [isLoading, setIsLoading] = React.useState(0);
  const [data, setData] = React.useState(null);

  const dataDetail = [
    {
      title: route.params.title,
      content: route.params.description,
      news_url: route.params.url,
      image_url: route.params.image,
      image_url_lg: route.params.imageLg,
      date: route.params.date,
    },
  ];

  console.log(data);

  React.useEffect(() => {
    if (data == null) {
      setData(dataDetail);
    }
  });

  // console.log(route.params.title);
  return data == null ? (
    <Box
      flex={1}
      backgroundColor="white"
      alignItems="center"
      justifyContent="center">
      <Spinner color="emerald.500" size="lg" />
    </Box>
  ) : (
    <ScrollView backgroundColor="#fff" p={2}>
      <Box mx={2}>
        <Image
          height={200}
          // style={{height: '100%'}}
          borderRadius={10}
          source={{uri: route.params.imageLg}}
          alt="image"
        />
        <VStack space={3} my={3}>
          <Heading size="md">{route.params.title}</Heading>
          <Text>{route.params.description}</Text>
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default DetailNews;
