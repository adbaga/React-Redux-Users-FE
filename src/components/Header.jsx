import React, {useState} from 'react'
import DropDown from './DropDown';

function Header() {

    const [toggle, setToggle] = useState(false);

    function handleToggle() {
        setToggle(!toggle);
      }


    return (

        <div data-testid="Header-1" className="header">
            <header className="flex flex-wrap flex-row md:flex-row justify-between md:items-center md:space-x-4 bg-white py-6 px-6 sticky">
                <a href="#" className="flex flex-wrap flex-inline font-bold text-4xl logo">
                    NACHO!
                </a>

                <button className="inline-block md:hidden w-8 h-8 bg-gray-200 text-white p-1 hamburger" onClick={handleToggle}>
                        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>

                    <nav className={`absolute md:relative ${toggle? 'block' : 'hidden'}  md:inline-flex top-16 left-0 md:top-0 z-20 flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0 menu`}>
                        <a href="#" className="block p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-500 transform hover:-translate-y-1 hover:scale-70">Home</a>
                        <a href="#" className="block p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-500 transform hover:-translate-y-1 hover:scale-70">Services</a>
                        <a href="#" className="block p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-500 transform hover:-translate-y-1 hover:scale-70">Blog</a>
                        <DropDown/>
                    </nav>

                    

            
            </header>

            



  </div>






    )
}

export default Header
