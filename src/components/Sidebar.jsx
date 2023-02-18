import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as MenuIcon } from '../assets/images/icons/menu.svg';
import navigation from '../navigation';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className={`sidebar${isSidebarOpen ? ' active' : ''}`}>
        <div className='item menu'>
          <MenuIcon className='cursor-pointer' onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        </div>

        {navigation.map(navItem => (
          <NavLink key={navItem.id} className='cursor-pointer item' to={navItem.path}>
            {navItem.icons}

            <p>{navItem.title}</p>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
