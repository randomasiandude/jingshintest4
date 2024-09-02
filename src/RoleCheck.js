import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RoleCheck = () => {
    const [role, setRole] = useState(null);

    useEffect(() => {
        axios.get(`https://jingshin4-457d8aeb5d8c.herokuapp.com/check-auth`, { withCredentials: true })
            .then(response => {
                setRole('admin');
            })
            .catch(error => {
                setRole('user');
            });
    }, []);

    return (
        <div>
            <h1>User Role: {role}</h1>
        </div>
    );
};

export default RoleCheck;
