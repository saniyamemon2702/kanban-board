import React from 'react';

function Footer() {
    return (
        <div className="bg-black text-white text-center text-s p-3 absolute bottom-0 w-full">
        <h3>    &copy; {new Date().getFullYear() } Saniya's Kanban Board- All rights reserved</h3>
        {/* <h3>
            Credits:
            <a href="https://www.youtube.com/watch?v=U9T6YkEDkMo" target="_blank" rel="noreferrer" className="underline hover:text-gray-400"> Icon </a>
        </h3> */}
        </div>
    );
    }
    export default Footer;