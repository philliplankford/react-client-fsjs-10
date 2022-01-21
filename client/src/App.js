import { useEffect } from 'react';
import logo from './logo.svg';
import './styles/global.css';
import axios from 'axios';

function App() {

  const apiUrl = 'http://localhost:5000/api/courses';

  useEffect(() => {
    getAllCourses();
  }, [])

  const getAllCourses = () => {
    axios.get(apiUrl)
    .then( (res) => {
      console.log(res);
      // const allCourses = response.data;
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
