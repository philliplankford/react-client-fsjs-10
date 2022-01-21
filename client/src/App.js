import { Component, useEffect } from 'react';
import logo from './logo.svg';
import './styles/global.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
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
import { render } from 'react-dom';

function App () {

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
        <Header />
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Courses />} />
              <Route path="signin" element={<UserSignIn />} />
              <Route path="signup" element={<UserSignUp />} />
              <Route path="signout" element={<UserSignOut />} />
              <Route path="courses">
                <Route path=":id" element={<CourseDetail />} >
                  <Route path="update" element={<UpdateCourse />} />
                  <Route path="delete" element={<CourseDetail />} />
                </Route>
                <Route path="create" element={<CreateCourse />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </body>
  );
}

export default App;