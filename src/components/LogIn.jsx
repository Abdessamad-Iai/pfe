import { useState } from 'react';

const LoginForm = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
};

return (
        <div className="flex items-center justify-center min-h-screen">
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                Email
                </label>
                <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                Password
                </label>
                <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
                <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                >
                Login
                </button>
            </div>
            </div>
        </form>
        </div>
);
};

export default LoginForm;
