import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather city="Odesa" />
      </header>
      <div className="footer">
        <a
          className="link"
          href="https://github.com/lenagatseva79/weather-react"
          alt="GitHub Link"
          target="blank"
        >
          Open-source code
        </a>
        , by Lena Gatseva
      </div>
    </div>
  );
}

export default App;
