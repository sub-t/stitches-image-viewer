import { styled } from 'stitches.config';
import { textStyles } from './styles';

export const Text = styled('p', textStyles, {
  defaultVariants: {
    variant: 'mauve',
    size: 1,
  },
});

export const Heading = styled('h1', textStyles, {
  userSelect: 'none',
  fontWeight: 900,
  defaultVariants: {
    variant: 'mauve',
    size: 7,
  },
});
