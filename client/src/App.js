import { useEffect } from 'react';
import logo from './logo.svg';
import './styles/global.css';
import axios from 'axios';

// import components
import Header from './components/Header';

import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';

import UserSignOut from './components/UserSignOut';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';

import Error from './components/Error';
import Forbidden from './components/Forbidden';
import NotFound from './components/NotFound';

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
    <body>
      <div id="root">
      {/** Header */}

      </div>
    </body>
  );
}

export default App;
