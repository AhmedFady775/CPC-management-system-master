import Login from './pages/Login/Login.js'
import UserEntry from './pages/UserEntry/UserEntry.js'
import Resources from './pages/Resources/Resources.js'
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import { Route, Routes, useLocation } from 'react-router-dom';
import Transcript from './pages/Transcript/Transcript';
import { HOMEPAGE, TRANSCRIPT, USER_ENTRY, RESOURCES, PROFILE } from './frontend_urls'
import NavBar from './pages/NavBar/NavBar';
import ProtectedRoute from './components/ProtectedRoute.js';


function App() {
  const location = useLocation();

  if (
    location.pathname !== "/"
  ) {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path={HOMEPAGE} element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>}
          />
          <Route path={USER_ENTRY} element={
            <ProtectedRoute>
              <UserEntry />
            </ProtectedRoute>}
          />
          <Route path={RESOURCES} element={
            <ProtectedRoute>
              <Resources />
            </ProtectedRoute>}
          />
          <Route path={TRANSCRIPT} element={
            <ProtectedRoute>
              <Transcript />
            </ProtectedRoute>}
          />
          <Route path={PROFILE} element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>}
          />
        </Routes>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );

}

export default App;
