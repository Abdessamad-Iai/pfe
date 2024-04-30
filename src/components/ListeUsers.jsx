import { useState, useEffect } from 'react';

const ListeUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/users');
                const data = await response.json();
                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching users:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            {users.length === 0 ? (
                <div className="text-center">
                    <p className="text-lg font-bold">No Users Currently Registered</p>
                </div>
            ) : (
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-blue-500">First Name</th>
                            <th className="px-4 py-2 text-blue-500">Last Name</th>
                            <th className="px-4 py-2 text-blue-500">Email</th>
                            <th className="px-4 py-2 text-blue-500">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2 text-center">{user.firstName}</td>
                                <td className="border px-4 py-2 text-center">{user.lastName}</td>
                                <td className="border px-4 py-2 text-center">{user.email}</td>
                                <td className="border px-4 py-2 text-center">{user.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ListeUsers;
