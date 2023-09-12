import './App.css';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>Matuco</h1>
      <Home/>
    </div>
  );
}

export default App;
