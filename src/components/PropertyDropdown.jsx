import { Menu } from "@headlessui/react";
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { useHouseContext } from "../HouseContext/HouseContext";
import { useState } from "react";



const PropertyDropdown = () => {
  const { property, properties, setProperty } = useHouseContext()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Menu as='div' className='dropdown relative '>
      <Menu.Button
      onClick={() => setIsOpen(prev => !prev)}
      className='dropdown-btn w-full text-left'>
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          <div className="text-[15px] font-medium leading-tight">{property}</div>
          <div className="text-[13px]" >Select your place</div>
        </div>
        {
          isOpen ? 
          <RiArrowUpSLine className="dropdown-icon-secondary" /> :
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        }
      </Menu.Button>
      

      <Menu.Items className='dropdown-menu'>
        {
          properties.map((property, i) => (
            <Menu.Item as='li'
            className='cursor-pointer hover:text-violet-700 transition'
            onClick={() => setProperty(property)}
            key={i}>
              {property}
            </Menu.Item>
          ))
        }
      </Menu.Items>
    </Menu>
  )
};

export default PropertyDropdown;
