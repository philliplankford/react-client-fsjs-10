import React from 'react';
import './styles/global.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import withContext from './Context';

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

import PrivateRoute from './PrivateRoute';

/* === CONTEXT SUBSCRIPTIONS === */
// subscribe componenets to context 
// Context keeps track of the authenticated user at the top level
const HeaderWithContext = withContext(Header);

// User Forms
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);

// Course Actions
const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);

// Private Route 
const PrivateRouteWithContext = withContext(PrivateRoute);

/* === APP === */

function App () {

  return (
    <div id="root">
      <BrowserRouter>
        <HeaderWithContext />
        <main>
          <Routes>
            <Route path="/">
              <Route index element={<CoursesWithContext />} />
              <Route path="signin" element={<UserSignInWithContext />} />
              <Route path="signup" element={<UserSignUpWithContext />} />
              <Route path="signout" element={<UserSignOutWithContext />} />
              <Route path="courses">
                <Route index element={<CoursesWithContext/>} />
                <Route path=":id">
                  <Route index element={<CourseDetailWithContext />} />
                  <Route path="update" element={<UpdateCourseWithContext />} />
                  <Route path="delete" element={<CourseDetail />} />
                </Route>
                <Route path="create" element={
                  <PrivateRouteWithContext redirectTo={"/signin"}>
                    <CreateCourseWithContext />
                  </PrivateRouteWithContext>
                } />
              </Route>
              <Route path="error" element={<Error />} />
              <Route path="forbidden" element={<Forbidden />} />
              <Route path="*" element={<NotFound />} />
            </Route>
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