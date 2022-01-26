import React from 'react';
import './styles/global.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import withContext from './Context';
import withNavigation from './Router';

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

/* === CONTEXT SUBSCRIPTIONS === */
// subscribe componenets to context 
// Context keeps track of the authenticated user at the top level
const HeaderWithContext = withContext(Header);

// User Forms
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withNavigation(withContext(UserSignIn));
const UserSignOutWithContext = withContext(UserSignOut);

// Course Actions
const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);

/* === APP === */

function App () {

  return (
    <div id="root">
      <BrowserRouter>
        <HeaderWithContext />
        <main>
          <Routes>
            <Route path="/" element={<CoursesWithContext />} />
            <Route path="signin" element={<UserSignInWithContext />} />
            <Route path="signup" element={<UserSignUpWithContext />} />
            <Route path="signout" element={<UserSignOutWithContext />} />
            <Route path="courses">
              <Route path=":id" element={<CourseDetailWithContext />} >
                <Route path="update" element={<UpdateCourseWithContext />} />
                <Route path="delete" element={<CourseDetail />} />
              </Route>
              <Route path="create" element={<CreateCourseWithContext />} />
            </Route>
            <Route path="error" element={<Error />} />
            <Route path="forbidden" element={<Forbidden />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
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