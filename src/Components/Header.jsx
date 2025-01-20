import React, { useState } from 'react'
import {images} from '../Constants'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {MdKeyboardArrowDown} from 'react-icons/md'


    const navItemInfo =[
        {
            name:"Home", type: "link"
        },
        {
            name:"Articles", type: "link"
        },
        {
            name:"Pages", type: "dropdown", items: ["About Us","Contact Us"]
        },
        {
            name:"Pricing", type: "link"
        },
        {
            name:"Faq", type: "link"
        },
    ];


 const NavItem = ({item})=>{
    const [dropDown, setDropDown]= useState(false);

    const toggleDropdownHandler =()=>{
        setDropDown((curState) => {
            return !curState;
        })
    }

    return(
       <li className='relative group'>
            {item.type === "link"
             ? (
            <>
            <a href="/" className='px-2 py-2'>{item.name}</a>

              <span className='absolute text-blue-500 transition-all duration-500 font-bold 
                  right-0 top-0 opacity-0 group-hover:right-[90%] group-hover:opacity-100 text-lg cursor-pointer'>/</span>
            </>

            ) : (
           
           <div className='flex flex-col items-center'>
            <button onClick={toggleDropdownHandler} className='flex items-center px-4 py-2 gap-x-1'>
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
            </button>
            <div className= {`${dropDown ? "block" : "hidden"}
             lg:absolute lg:bottom-0 lg:right-0 lg:hidden pt-4 transition-all duration-500 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
            <ul className="flex flex-col overflow-hidden text-center rounded-lg shadow-lg bg-dark-soft lg:bg-transparent">
                {
                    item.items.map((page, index)=>(
                        <a key={index} href="/" className='px-4 py-2 text-white hover:bg-dark-hard hover:text-white lg:text-dark-soft '
                        >{page}</a>
                    ))
                }
            </ul>
            </div>
            </div>
        )}
    </li>
    )
 }

const Header = () => {
    const [navIsVisible,setNavIsVisible] = useState(false);

    const navVisibilityHandler = () =>{
        setNavIsVisible((curState)=>{
            return !curState
        })
    }


  return (
    <section className='sticky top-0 left-0 right-0 z-50 bg-white'>
        <header className='container flex items-center justify-between px-5 py-4 mx-auto '>
            <div>
                <img src={images.Logo} alt="" className='w-16'/>
            </div>

            <div className='z-50 lg:hidden'>
                {navIsVisible ?(
                    <AiOutlineClose  onClick={navVisibilityHandler} className='w-6 h-6'/>
                ):( 
                <AiOutlineMenu onClick={navVisibilityHandler}  className='w-6 h-6'/>
                )}
                </div>
            <div className={`${navIsVisible ? "right-0" : "-right-full"}
             bg-dark-hard lg:bg-transparent transition-all duration-300 mt-[56px] lg:mt-0 z-[49] fixed top-0 bottom-0 flex flex-col items-center justify-center w-full gap-x-9  lg:static lg:flex-row lg:justify-end lg:w-auto`}>
                <ul className='flex flex-col items-center mr-10 text-white gap-y-5 lg:text-dark-soft lg:flex-row'>
                {
                    navItemInfo.map((item)=>(
                        <NavItem key={item.name} item={item}/>
                    ))
                }
                </ul>
                <button className='px-6 py-2 mt-10 mr-10 font-semibold text-blue-700 transition-all duration-300 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white'>Sign In</button>
            </div>
        </header>
    </section>
  )
}

export default Header