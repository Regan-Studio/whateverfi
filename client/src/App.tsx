import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastProvider } from './components/Toast';
import { AuthProvider } from './context/AuthContext';
import { Loader2 } from 'lucide-react';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const SignupPage = React.lazy(() => import('./pages/SignupPage'));
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));
const UpgradePage = React.lazy(() => import('./pages/UpgradePage'));
const SettingsPage = React.lazy(() => import('./pages/SettingsPage'));
const AdminPage = React.lazy(() => import('./pages/AdminPage'));
const ProfilePage = React.lazy(() => import('./pages/ProfilePage'));
const MagicLoginPage = React.lazy(() => import('./pages/MagicLoginPage'));
const VerifyMagicPage = React.lazy(() => import('./pages/VerifyMagicPage'));
const ForgotPasswordPage = React.lazy(() => import('./pages/ForgotPasswordPage'));
const ResetPasswordPage = React.lazy(() => import('./pages/ResetPasswordPage'));


const LoadingFallback = () => (
  <div className="flex h-screen w-full items-center justify-center bg-gray-50">
    <div className="flex flex-col items-center gap-4">
      <div className="h-12 w-12 rounded-xl bg-brand-100 flex items-center justify-center animate-pulse">
        <Loader2 className="h-6 w-6 text-brand-600 animate-spin" />
      </div>
      <p className="text-sm font-medium text-gray-500">Loading whateverFi...</p>
    </div>
  </div>
);

const App: React.FC = () => {
    return (
      <ErrorBoundary>
        <ToastProvider>
            <AuthProvider>
                <Router>
                    <Suspense fallback={<LoadingFallback />}>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/signup" element={<SignupPage />} />
                            <Route path="/magic-login" element={<MagicLoginPage />} />
                            <Route path="/verify-magic/:token" element={<VerifyMagicPage />} />
                            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                            <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
                            <Route path="/dashboard" element={<DashboardPage />} />
                            <Route path="/upgrade" element={<UpgradePage />} />
                            <Route path="/settings" element={<SettingsPage />} />
                            <Route path="/admin" element={<AdminPage />} />
                            <Route path="/profile/:id" element={<ProfilePage />} />
                        </Routes>
                    </Suspense>
                </Router>
            </AuthProvider>
        </ToastProvider>
      </ErrorBoundary>
    );
}

export default App;
