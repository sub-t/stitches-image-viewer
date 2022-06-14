import { Button } from './components/Button';
import { Card } from './components/Card';
import { DarkThemeButton } from './components/DarkThemeButton';
import { Box, Grid } from './components/Layout';
import { animalList } from './lib/animal';
import { globalStyles } from './styles/globalStyles';

const App = () => {
  globalStyles();

  return (
    <Box css={{ display: 'flex', justifyContent: 'center', m: '$4' }}>
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
        <Box>
          <Button variant="violet">Button</Button>
        </Box>
        <Grid columns={{ '@initial': '1', '@md': '2', '@lg': '3' }} gap="4">
          {animalList.map(({ id, src, name }) => (
            <Card key={id} src={src} name={name} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
