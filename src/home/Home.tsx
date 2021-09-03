import React from 'react';
import {StyleSheet} from 'react-native';
import Card from '../@shared/components/Card';
import Header from '../@shared/components/Header';
import Container from '../@shared/styled/Container';
import FlatList from '../@shared/styled/FlatList';
import getMockNotes from '../__testUtils__/input';

interface Props {}

const Home: React.FC<Props> = () => {
  const data = getMockNotes();
  return (
    <Container>
      <Header title={'Notes'} />
      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={columnWrapperStyle}
        renderItem={({item}) => <Card item={item} />}
      />
    </Container>
  );
};

const columnWrapperStyle = StyleSheet.create({
  columnWrapperStyle: {justifyContent: 'space-between'},
}).columnWrapperStyle;

export default Home;
