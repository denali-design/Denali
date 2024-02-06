import './assets/css/App.css';
import Navbar from './example-app/Navbar';
import MainContent from './example-app/MainContent';
import ActivitySidebar from './example-app/ActivitySidebar';

function App() {
  return (
    <div className="">
      <div className="canvas type">
        <Navbar />
        <div className="flex">
          <MainContent />
          <ActivitySidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
