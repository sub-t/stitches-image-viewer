import { styled } from 'stitches.config';
import { flexStyles } from './styles';

export const Box = styled('div', {});

export const HStack = styled(Box, flexStyles);

export const VStack = styled(Box, flexStyles, {
  flexDirection: 'column',
});

export const Grid = styled(Box, flexStyles, {
  display: 'grid',

  variants: {
    columns: {
      1: {
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
      2: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      4: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
    },
  },
});
