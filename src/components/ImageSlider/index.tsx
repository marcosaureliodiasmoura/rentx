import React from 'react';

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from './styles';

interface Props {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: Props) {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage
          source={{
            uri: 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmpczoxb6Q1ie_4YL9JfQa7Q5rXiA262qxkQ&usqp=CAU'
          }}
          resizeMode="contain"
        />
      </CarImageWrapper>
    </Container>
  );
}
