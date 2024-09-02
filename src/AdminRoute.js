import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const AdminRoute = ({ element }) => {
    const [isAdmin, setIsAdmin] = useState(null);

    useEffect(() => {
        axios.get('https://jingshin4-457d8aeb5d8c.herokuapp.com/check-auth', { withCredentials: true })
            .then(response => {
                if (response.data.role === 'admin') {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            })
            .catch(error => {
                setIsAdmin(false);
            });
    }, []);

    if (isAdmin === null) {
        return <p>Loading...</p>; // Or a loading spinner
    }

    return isAdmin ? element : <Navigate to="/login" />;
};

export default AdminRoute;
