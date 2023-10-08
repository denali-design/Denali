import './App.css';
import { Button } from './components/atoms/Button';
import { Heading } from './components/atoms/Heading';
import { Icon } from './components/icon/Icon';
import { DescriptionItem, DescriptionList } from './components/DescriptionList';

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
      <DescriptionList>
        <DescriptionItem
          term="Serif"
          description="A font style characterized by small decorative lines (serifs) attached to the end of a letter or symbol. Common in print design for its traditional and readable appearance."
        />
      </DescriptionList>
    </>
  );
}

export default App;
