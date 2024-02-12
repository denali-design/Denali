import './assets/css/App.css';
import Heading from './components/Heading/Heading';
import denaliLogo from './assets/denali-logo.svg';

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-12">
      <div className="flex h-24 items-center justify-center">
        <img className="block h-24 w-auto" src={denaliLogo} alt="Denali" />
      </div>

      <Heading
        className="text-center"
        name="Denali"
        level="h1"
        style="h1"
        type="app"
      />
    </div>
  );
}

export default App;
