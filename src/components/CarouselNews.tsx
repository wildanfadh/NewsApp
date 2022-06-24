import {View, Text} from 'react-native';
import React from 'react';
import Carousel from '@types/react-native-snap-carousel';
import {Box, Image} from 'native-base';

const CarouselNews = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const data = [
    {
      title: 'Item 1',
      text: 'Text 1',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 4',
      text: 'Text 4',
    },
    {
      title: 'Item 5',
      text: 'Text 5',
    },
  ];

  const _renderItem = ({item, index}) => {
    return (
      <Box width={100} height={100} backgroundColor="primary">
        <Image
          borderRadius={10}
          width={100}
          height={100}
          source={{uri: item.title}}
          alt="image"
        />
      </Box>
    );
  };

  return (
    <Carousel
      layout={'default'}
      // ref={ref => (carousel = ref)}
      data={data}
      sliderWidth={300}
      itemWidth={300}
      renderItem={_renderItem}
      onSnapToItem={index => setActiveIndex({activeIndex: index})}
    />
  );
};

export default CarouselNews;
