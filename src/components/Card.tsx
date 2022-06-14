import React from 'react';
import { Image, ImageContainer } from './Image';
import { Box } from './Layout';

type Props = {
  src: string;
  name: string;
};

export const Card: React.FC<Props> = ({ src, name }) => (
  <Box css={{ borderRadius: 6, boxShadow: '0 8px 16px 4px $colors$mauveA2' }}>
    <ImageContainer css={{ h: 200 }}>
      <Image src={src} />
    </ImageContainer>
    <Box
      css={{
        p: '$3',
        textAlign: 'center',
        fontSize: '$5',
        fontWeight: 900,
        textTransform: 'uppercase',
        color: '$mauve11'
      }}
    >
      {name}
    </Box>
  </Box>
);
