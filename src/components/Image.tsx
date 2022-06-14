import { styled } from 'stitches.config';
import { HStack } from './Layout';

const StyledImage = styled('img', {
  w: '100%',
  maxW: 400,
  h: 200,
  objectFit: 'cover',
});

type Props = {
  src: string;
};

export const Image: React.FC<Props> = ({ src }) => (
  <HStack justify="center" css={{ backgroundColor: '$violet3' }}>
    <StyledImage src={src} />
  </HStack>
);
