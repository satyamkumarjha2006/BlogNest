import React from 'react';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';
import {useDispatch} from 'react-redux'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
    return ( 
        <div
        className='inline-block py-2 px-3 duration-200 hover:text-white rounded-full text-transparent bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text font-extrabold cursor-ponter'
        onClick={logoutHandler}
        >Logout</div>
     );
}

export default LogoutBtn;