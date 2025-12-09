
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useToast } from '../components/Toast';
import { Users, FileText, Shield, Trash2, Activity } from 'lucide-react';
import Footer from '../components/Footer';

const AdminPage: React.FC = () => {
    const { showToast } = useToast();
    const [stats, setStats] = useState<any>(null);
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const token = JSON.parse(localStorage.getItem('userInfo') || '{}').token;
            const config = { headers: { Authorization: `Bearer ${token}` } };
            
            const [statsRes, usersRes] = await Promise.all([
                axios.get('/api/users/stats', config),
                axios.get('/api/users', config)
            ]);

            setStats(statsRes.data);
            setUsers(usersRes.data);
            setLoading(false);
        } catch (err: any) {
            showToast(err.response?.status === 403 ? "Access Denied: Admin only" : "Failed to load admin data", 'error');
            if (err.response?.status === 403) window.location.href = '/';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <header className="bg-gray-900 border-b border-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="font-bold text-xl text-white flex items-center gap-2">
                        <Shield className="h-5 w-5 text-brand-400" />
                        Admin Console
                    </div>
                    <a href="/" className="text-sm font-medium text-gray-400 hover:text-white">Exit</a>
                </div>
            </header>

            <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-8">
                {loading ? (
                    <div className="text-center py-12">Loading admin data...</div>
                ) : (
                    <>
                        {/* Stats Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                                <div className="flex items-center gap-3 mb-2 text-gray-500">
                                    <Users className="h-5 w-5" /> Total Users
                                </div>
                                <p className="text-3xl font-bold text-gray-900">{stats.userCount}</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                                <div className="flex items-center gap-3 mb-2 text-gray-500">
                                    <FileText className="h-5 w-5" /> Total Ideas
                                </div>
                                <p className="text-3xl font-bold text-gray-900">{stats.ideaCount}</p>
                            </div>
                             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                                <div className="flex items-center gap-3 mb-2 text-gray-500">
                                    <Activity className="h-5 w-5" /> Pro Subscribers
                                </div>
                                <p className="text-3xl font-bold text-brand-600">{stats.proCount}</p>
                            </div>
                        </div>

                        {/* Users Table */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                                <h3 className="font-bold text-gray-900">User Management</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits Used</th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {users.map((user) => (
                                            <tr key={user._id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.email}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}>
                                                        {user.role}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.plan}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.aiCreditsUsed}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button className="text-red-600 hover:text-red-900"><Trash2 className="h-4 w-4" /></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default AdminPage;
