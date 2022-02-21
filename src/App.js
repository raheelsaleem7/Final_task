import './App.css';
import Center from './Components/Center/Center';
import Feedback from './Components/Feedback/Feedback';
import Footer from './Components/Footer/Footer';
import Map from './Components/Map/Map';
import Nav from './Components/Nav/Nav';
import Productive from './Components/Productive/Productive';

function App() {
  return (
    <div className="App">
      <div className='bg'>
      <Nav />
      <Center />
    </div>
    <Productive />
    <Feedback />
    <Footer />
    <Map />
    </div>
  );
}

export default App;
