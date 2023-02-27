
import * as React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../UI/social_media";

function Navbar() {
   
    return (
       
        <nav className="bg-white border border-blue-700 border-b-4 border-opacity-50 drop-shadow">
            <div className="flex items-center justify-items-stretch h-16 p-10">
            
                <img src="https://cdn-icons-png.flaticon.com/512/7792/7792148.png" alt="logo" className="w-24 pt-14" />
                <Link to="/" className="px-7 py-3 text-green-800 font-bold  font-inter text-3xl">KANBAN BOARD</Link> 
                <SocialMedia />
        </div>
        </nav>

    );
}
export default Navbar;