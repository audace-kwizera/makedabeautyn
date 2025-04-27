import { Menu } from 'lucide-react'
import React from 'react'
import MenuItems from './menu-items';
import usersGlobalStore, { IUsersGlobalStore } from '@/store/users-global-store';

const Header = () => {
  const { user } = usersGlobalStore() as IUsersGlobalStore;
  const [openMenuItems, setOpenMenuItems] = React.useState(false);
  return (
    <div className='bg-primary p-5 text-white flex justify-between items-center'>
        {/* Titre */}
        <h1 className='font-bold! text-white text-2xl'>MAKEDA BEAUTY</h1>

        <div className="flex gap-5">
            {/* Username */}
            <h1 className="text-sm!">{user?.name}</h1>

            {/* Menu */}
            <Menu 
              className="text-orange-500 cursor-pointer" 
              size={15} 
              onClick={() => setOpenMenuItems(true)}
            />

            {openMenuItems && (
              <MenuItems 
                openMenuItems={openMenuItems} 
                setOpenMenuItems={setOpenMenuItems} 
              />
            )}
        </div>
    </div>
  )
}

export default Header