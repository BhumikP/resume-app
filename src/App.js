import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AuthProvider, useAuth } from './hooks/useAuth';
import AuthenticatedRoutes from './routes/AuthenticatedRoutes';
import UnauthenticatedRoutes from './routes/UnauthenticatedRoutes';

function App() {
  const user = useAuth();

  return (
    <Suspense fallback={<h4>loading.....</h4>}>
      {user.isLoggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
      <Toaster />
    </Suspense>
  );
}

const AppWithProvider = () => (
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
export default AppWithProvider;
