import './App.css';
import { Button } from './components/atoms/Button';
import { Heading } from './components/atoms/Heading';

function App() {
  return (
    <>
      <Heading level={1}>Denali</Heading>
      <Button
        label="Well"
        onPress={() => alert("What's the latest?")}
        aria-pressed
      />
    </>
  );
}

export default App;
