import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      
      <div className='container'>
      <Weather defaultCity="Vienna" />

      <footer>
    This project was coded by <a href='https://github.com/oezlemcelik?tab=repositories'>Özlem Celik</a> and is <a href="https://github.com/oezlemcelik/weather-react-appjs" 
      target='_blank' rel='noreferrer'> open-sourced on Github</a>
      </footer>
      </div>
    </div>
  );
}


