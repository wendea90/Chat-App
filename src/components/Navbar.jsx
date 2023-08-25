import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

    //to update new photo user in every sign in
    const { currentUser } = useContext(AuthContext)

    return (
        <div className='navbar'>

            <span className='logo'>Wendea Chat</span>

            <div className='user'>

                <img src={currentUser.photoURL} alt="" />

                <span>{currentUser.displayName}</span>

                <button onClick={() => signOut(auth)}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar