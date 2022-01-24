import { Component, useEffect } from 'react';
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

// import { render } from 'react-dom'; unnecessary import?
import Data from './Data';
const data = new Data();

function App () {

  useEffect(() => {
    getAllCourses();
  }, [])

  const getAllCourses = async () => {
    const courses = await data.api('/courses');
    console.log(courses);
  }

  return (
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
            <Route path="error" element={<Error />} />
            <Route path="forbidden" element={<Forbidden />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;

/* 
 // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
  // This will set an `Authorization` header, overwriting any existing
  // `Authorization` custom headers you have set using `headers`.
  // Please note that only HTTP Basic auth is configurable through this parameter.
  // For Bearer tokens and such, use `Authorization` custom headers instead.
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },
*/