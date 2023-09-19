import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Matuco</h1>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
