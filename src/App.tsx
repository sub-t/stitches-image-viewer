import { Card } from './components/Card';
import { DarkThemeButton } from './components/DarkThemeButton';
import { Grid, HStack } from './components/Layout';
import { Heading } from './components/Text';
import { animalList } from './lib/animal';
import { globalStyles } from './styles/globalStyles';

const App = () => {
  globalStyles();

  return (
    <HStack justify="center" css={{ m: '$7' }}>
      <DarkThemeButton />
      <Grid
        gap="6"
        css={{
          gridTemplateRows: 'auto 1fr',
          w: '100%',
          maxW: 1200,
          minH: '100vh',
        }}
      >
        <Heading variant="violet">Image Viewer</Heading>
        <Grid as="ul" columns={{ '@initial': '1', '@md': '2', '@lg': '3' }} gap="4">
          {animalList.map(({ id, src, name }) => (
            <Card key={id} as="li" src={src} name={name} />
          ))}
        </Grid>
      </Grid>
    </HStack>
  );
};

export default App;
