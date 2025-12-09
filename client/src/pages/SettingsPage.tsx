
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useToast } from '../components/Toast';
import { User, Save, Lock, Mail } from 'lucide-react';

const SettingsPage: React.FC = () => {
    const { showToast } = useToast();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [userInfo, setUserInfo] = useState<any>(null);

    useEffect(() => {
        const stored = localStorage.getItem('userInfo');
        if (stored) {
            const parsed = JSON.parse(stored);
            setUserInfo(parsed);
            setFormData(prev => ({ ...prev, email: parsed.email }));
        } else {
            window.location.href = '/login';
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (formData.password && formData.password !== formData.confirmPassword) {
            showToast("Passwords do not match", 'error');
            return;
        }

        try {
            const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
            const payload: any = { email: formData.email };
            if (formData.password) payload.password = formData.password;

            const { data } = await axios.put('/api/users/profile', payload, config);
            
            // Update local storage but keep token
            localStorage.setItem('userInfo', JSON.stringify({ ...data, token: userInfo.token }));
            setUserInfo({ ...data, token: userInfo.token });
            setFormData(prev => ({ ...prev, password: '', confirmPassword: '' }));
            
            showToast("Profile updated successfully", 'success');
        } catch (err: any) {
            showToast(err.response?.data?.message || "Failed to update profile", 'error');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
             <header className="bg-white border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="font-bold text-xl text-gray-900 cursor-pointer" onClick={() => window.location.href = '/'}>
                        whateverFi
                    </div>
                </div>
            </header>

            <main className="flex-1 mx-auto w-full max-w-3xl px-4 py-12">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="px-6 py-8 border-b border-gray-200">
                        <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
                        <p className="text-gray-500 mt-1">Manage your profile and security preferences.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="block w-full pl-10 rounded-lg border-gray-300 shadow-sm focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-100">
                                <h3 className="text-sm font-medium text-gray-900 mb-4 flex items-center gap-2">
                                    <Lock className="h-4 w-4 text-gray-500" /> Change Password
                                </h3>
                                <div className="grid gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                                        <input
                                            type="password"
                                            value={formData.password}
                                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                                            placeholder="Leave blank to keep current"
                                            className="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                                        <input
                                            type="password"
                                            value={formData.confirmPassword}
                                            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                                            className="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 flex justify-end">
                            <button
                                type="submit"
                                className="flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                            >
                                <Save className="h-4 w-4" /> Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SettingsPage;
