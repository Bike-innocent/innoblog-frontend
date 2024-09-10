

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import MainLayout from './layouts/MainLayout';
import CreatePost from './pages/CreatePost';
import AllPosts from './pages/all-posts/AllPosts';
import AllUsers from './pages/AllUsers';
import Settings from './pages/Settings';
import Unauthorized from './pages/Unauthorized';
import NotFound from './pages/NotFound';
import Index from './pages/home/Index';
import SinglePost from './pages/singlePost/SinglePost';
import IndexCategory from './pages/categories/IndexCategory';
import EditPost from './pages/my-post/EditPost';
import ViewPost from './pages/ViewPost';
import Dashboard from './pages/Dasboard';
import Profile from './pages/profile/partials/Profile';
import ProfileUserName from './pages/profile/profileUserName/ProfileUserName';
import EditProfile from './pages/profile/partials/EditProfile';
import SavedPost from './pages/savedpost/SavedPost';
import Reports from './pages/reports/Reports';
import SearchResults from './pages/search-result/SearchResults';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AppProvider from './AppProvider';

// Define the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Index /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'search', element: <SearchResults /> },
      { path: 'home', element: <Index /> },
      { path: 'posts/:slug', element: <SinglePost /> },
      { path: 'profile', element: <Profile /> },
      { path: 'profile/edit', element: <EditProfile /> },
      { path: '/:username', element: <ProfileUserName /> },
      { path: 'create-post', element: <CreatePost /> },
      { path: 'saved', element: <SavedPost /> },
      { path: 'all-posts', element: <AllPosts /> },
      { path: 'reports', element: <Reports /> },
      { path: 'all-users', element: <AllUsers /> },
      { path: 'settings', element: <Settings /> },
      { path: 'edit-post/:slug', element: <EditPost /> },
      { path: 'view-post/:slug', element: <ViewPost /> },
      { path: 'manage-category', element: <IndexCategory /> },
      { path: 'unauthorized', element: <Unauthorized /> },
      { path: '*', element: <NotFound /> },
      { path: '/not-found', element: <NotFound /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
      { path: 'reset-password', element: <ResetPassword /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms-of-service', element: <TermsOfService /> },
    ],
  },
 
]);

function App() {
    return (
        <AppProvider>
            <RouterProvider router={router} />
        </AppProvider>
    );
}

export default App;
