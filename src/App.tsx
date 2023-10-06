import './App.css';
import { Button } from './components/atoms/Button';
import { Heading } from './components/atoms/Heading';
import { Icon } from './components/icon/Icon';

function App() {
  return (
    <>
      <Heading level={1}>Denali</Heading>
      <Button
        label="Well"
        onPress={() => alert("What's the latest?")}
        aria-pressed
      />

      <Icon name="icon-action-arrowhead-down" />

      <Icon
        name="icon-action-merge"
        size="md"
        color="primary"
        overrideTitle="Merge me"
      />
    </>
  );
}

export default App;
