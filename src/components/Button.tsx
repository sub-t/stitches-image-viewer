import { styled } from 'stitches.config';

export const Button = styled('button', {
  all: 'unset',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',

  height: '$5',
  p: '$2 $3',
  borderRadius: 6,
  fontSize: '$2',
  fontWeight: 900,

  variants: {
    variant: {
      mauve: {
        color: '$mauve11',
        backgroundColor: '$mauve5',
      },
      violet: {
        color: '$violet11',
        backgroundColor: '$violet5',
      },
    },
  },
  defaultVariants: {
    variant: 'mauve',
  },
});
