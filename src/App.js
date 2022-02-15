import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AuthProvider, useAuth } from './hooks/useAuth';
import AuthenticatedRoutes from './routes/AuthenticatedRoutes';
import UnauthenticatedRoutes from './routes/UnauthenticatedRoutes';

// Create a client
const queryClient = new QueryClient();

function App() {
  const user = useAuth();

  console.log(user);
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
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AuthProvider>
  </BrowserRouter>
);
export default AppWithProvider;
