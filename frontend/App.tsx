import React from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext.tsx';
import { AuthForm } from './components/AuthForm.tsx';
import { Dashboard } from './components/Dashboard.tsx';

// A wrapper component to handle the conditional rendering based on auth state
const AppContent: React.FC = () => {
  const { currentUser } = useAuth();

  // If we have a user, show the protected dashboard
  if (currentUser) {
    return <Dashboard />;
  }

  // Otherwise, show the login/signup form
  return <AuthForm />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
