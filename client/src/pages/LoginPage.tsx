import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToast } from '../components/Toast';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { showToast } = useToast();
    const { login } = useAuth();

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/auth/login', { email, password });
            login(data);
            showToast('Login successful!', 'success');
            navigate('/');
        } catch (error) {
            showToast('Invalid email or password', 'error');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
                <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">Sign in to whateverFi</h2>
                <form onSubmit={submitHandler}>
                     <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                     <div className="text-right mb-6">
                        <Link to="/forgot-password" className="text-sm font-medium text-brand-600 hover:text-brand-500">
                            Forgot password?
                        </Link>
                    </div>
                    <button type="submit" className="w-full rounded-md border border-transparent bg-brand-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2">
                        Sign In
                    </button>
                </form>
                 <div className="mt-4 text-center">
                    <Link to="/magic-login" className="text-sm font-medium text-gray-600 hover:text-brand-500">
                        Sign in with Magic Link
                    </Link>
                </div>
                <p className="mt-4 text-center text-sm text-gray-600">
                    New to whateverFi?{' '}
                    <Link to="/signup" className="font-medium text-brand-600 hover:text-brand-500">
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
