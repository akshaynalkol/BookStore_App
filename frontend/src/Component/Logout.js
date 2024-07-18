import React from 'react';
import { useAuth } from '../Context/AuthProvider';
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser, setAuthUser] = useAuth();
    // console.log(authUser);

    const handleLogout = () => {
        try {
            // setAuthUser({
            //     ...authUser,
            //     user: null,
            // });
            localStorage.removeItem("User");
            toast.success("Logout successfully");
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
        catch (error) {
            toast.error("Error: " + error);
        }
    }

    return (
        <>
            <button className='btn btn-danger order-5' onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Logout;