import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import wolf from '../../img/wolf.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="shadow-md w-full fixed top-0 left-0 bg-teal">
      <div className="tablet:flex items-center justify-between bg-teal py-4 tablet:px-10 px-7 tablet:w-10/12 tablet:mx-auto">
        <div className="font-bold text-2xl cursor-pointer flex items-center   text-grey">
          <span className="text-3xl text-white mr-1 pt-2">
            <img src={wolf} alt="wolf" className="w-10 tablet:w-12" />
          </span>
          Coin Geass
        </div>

        <div
          className="text-3xl absolute right-8 top-6 cursor-pointer tablet:hidden"
          onClick={() => setOpen(!open)}
        >
          <i className={open ? 'far fa-window-close' : 'fas fa-bars'}></i>
        </div>

        <ul
          className={`tablet:flex tablet:items-center tablet:pb-0 pb-12 absolute tablet:static bg-teal tablet:z-auto z-[-1] left-0 w-full tablet:w-auto tablet:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 opacity-100' : 'top-[-490px]'
          }`}
        >
          <li className="tablet:ml-8 text-xl text-white hover:text-navy tablet:my-0 my-7">
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li className="tablet:ml-8 text-xl text-white hover:text-navy tablet:my-0 my-7">
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/resume"
            >
              Resume
            </NavLink>
          </li>

          <li className="tablet:ml-8 text-xl text-white hover:text-navy tablet:my-0 my-7">
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
