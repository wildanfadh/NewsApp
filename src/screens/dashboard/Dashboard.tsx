import {View} from 'react-native';
import React from 'react';
import {
  Box,
  ScrollView,
  Heading,
  FlatList,
  Divider,
  Text,
  Spinner,
} from 'native-base';
import {useQuery} from 'react-query';

// components
import CardNews from '../../components/CardNews';
import CarouselNews from '../../components/CarouselNews';

const Dashboard = () => {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  const getNews = async () => {
    try {
      const response = await fetch(
        'https://berita-indo-api.vercel.app/v1/cnn-news',
      );
      const json = await response.json();
      // console.log(json);
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getNews();
  }, []);

  // console.log(data);
  return isLoading ? (
    <Box
      flex={1}
      backgroundColor="white"
      alignItems="center"
      justifyContent="center">
      <Text>Loading...</Text>
      <Spinner color="emerald.500" size="lg" />
    </Box>
  ) : (
    <Box mx={5} my={2}>
      {/* <CarouselNews /> */}
      <Heading size="lg" mb={5}>
        Top HeadLines
      </Heading>
      <Divider my="2" />
      <FlatList
        containerStyle={{
          width: '100%',
        }}
        // data={data}
        data={data}
        renderItem={({item}) => (
          <CardNews
            // id={item.source.id}
            // author={item.author}
            image={item.image.small}
            title={item.title}
            url={item.link}
            date={item.isoDate}
            description={item.contentSnippet}
          />
        )}
      />
    </Box>
  );
};

export default Dashboard;
