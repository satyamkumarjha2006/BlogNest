import React from 'react';
import {Container , Logo , LogoutBtn} from '../index'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

    return ( 
        <header className='py-3 shadow bg-slate-900'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4 text-transparent bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text font-extrabold'>
                        <Link to='/'>
                        <Logo width='70px'/>
                        </Link>
                    </div>

                    <ul className='flex ml-auto text-transparent bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text font-extrabold hover:cursor-pointer '>
                        {navItems.map((item) => 
                        item.active ? (
                            <li key={item.name}>
                                <button 
                                onClick={() => navigate(item.slug)}
                                className='inline-bock px-6 py-2 duration-200 rounded-full hover:text-white hover:cursor-pointer'
                                >{item.name}</button>
                            </li>
                        ) : null
                        )}

                        {authStatus && (
                            <li>
                                <LogoutBtn/>
                            </li>
                        )}

                    </ul>

                </nav>
            </Container>
        </header>
     );
}

export default Header;