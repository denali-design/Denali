import './App.css';
import { Button } from './components/atoms/Button';

function App() {
  return (
    <>
      <h1 className="text-brand-primary mb-8 text-5xl font-bold">Denali</h1>
      <Button
        label="Well"
        onPress={() => alert("What's the latest?")}
        aria-pressed
      />
    </>
  );
}

export default App;
