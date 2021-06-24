import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import { CarList, Container, Header, HeaderContent, TotalCars } from './styles';

export function Home() {
  const carData = {
    brand: 'audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'ao dia',
      price: 120,
    },
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBdAFjt6czwTPrRymHxjjmYGT1YOZpWJcLDQ&usqp=CAU',
  };

  const carDataTwo = {
    brand: 'chevrolet',
    name: 'Couvette Z06',
    rent: {
      period: 'ao dia',
      price: 620,
    },
    thumbnail:
      'https://mychiptuningfiles.com/br/image/models/mNcwjh52sfjcC22h0BlwhlULvwBOSu.webp',
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />

          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={carData} />}
      />
    </Container>
  );
}
