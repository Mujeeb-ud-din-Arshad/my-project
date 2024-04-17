
import React from "react";
import Link from "next/link";



function Header(){


    return <div className="flex bg-blue-200 p-3 gap-5">
        <Link href='/'>  Home</Link>
        <Link href='/profile'>  Profile</Link> 
        <Link href='/blog'>  Blog</Link> 
        <Link href='/contact'>  Contact Us</Link> 
        <Link href='/profile/compeny_profile'> Compeny_Profile</Link> 
        <Link href='/profile/compeny_profile/ceo_profile'>  CEO_Profile</Link> 


        </div>
}

export default Header





