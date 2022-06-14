import React from 'react';
import { Image } from './Image';
import { Box, HStack } from './Layout';
import { Text } from './Text';

type Props = {
  src: string;
  name: string;
};

export const Card: React.FC<Props> = ({ src, name }) => (
  <Box
    css={{
      userSelect: 'none',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: '$mauve1',
      '&:hover': {
        boxShadow: '0 8px 16px 4px $colors$mauveA3',
      },
    }}
  >
    <Image src={src} />
    <HStack
      justify="center"
      css={{
        p: '$3',
      }}
    >
      <Text size="4" css={{ fontWeight: 900, textTransform: 'uppercase' }}>
        {name}
      </Text>
    </HStack>
  </Box>
);
