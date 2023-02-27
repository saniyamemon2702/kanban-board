import React from 'react';
import SocialMedia from "../UI/social_media";

function Footer() {
    return (
        <div className="flex align-center bg-white  p-3  bottom-0 w-full border border-blue-700 border-t-4 border-opacity-50 drop-shadow">
        <h3 className='p-2 text-green-800 font-bold  font-inter text-center'>    &copy; {new Date().getFullYear() } Saniya's Kanban Board- All rights reserved</h3>
        {/* <h3>
            Credits:
            <a href="https://www.youtube.com/watch?v=U9T6YkEDkMo" target="_blank" rel="noreferrer" className="underline hover:text-gray-400"> Icon </a>
        </h3> */}
        <SocialMedia />
        </div>
    );
    }
    export default Footer;