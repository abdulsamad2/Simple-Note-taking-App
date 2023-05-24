import Link from "next/link";
import React from "react";
import Modal from "./Modal";
import Loginform from "./Loginform";
import RegisterForm from "./RegisterForm";
import {signOut, useSession} from "next-auth/react";

const Header = () => {
  const {data: session} = useSession();
  return (
    <div className='py-4 flex-wrap flex justify-around px-4 bg-green-600 text-white'>
      <p className=' text-center text-lg font-bold'>Simple Note Taking App</p>
      <nav className='flex space-x-4 list-none'>
        {session && (
          <li>
            <Link href='#'>Profile</Link>
          </li>
        )}
        <li>{!session && <Link href={"/login"}>Login</Link>}</li>
        <li>{!session && <Link href={"/register"}>Register</Link>}</li>
        {session && (
          <li>
            <button onClick={() => signOut()}>Logout</button>
          </li>
        )}
      </nav>
    </div>
  );
};

export default Header;
