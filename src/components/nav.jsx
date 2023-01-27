import React, { useState } from "react";
import { Link } from "react-router-dom"
import logo from '../images/logo.svg'
import Navlink from './navlink'
import Button from './button'

const Nav = () => {
    const [open, setOpen] = useState(false)
    const [up, setUp] = useState(false)
    const links = [
        {
            name: 'Feature', submenu: true, sublink: [
                { name: 'Todo List', icon: 'today' },
                { name: 'Calendar', icon: 'calendar' },
                { name: 'Reminder', icon: 'notifications' },
                { name: 'Planning', icon: 'time' },
            ]
        }, {
            name: 'Company', submenu: true, sublink: [
                { name: 'History', icon: 'book' },
                { name: 'Our Team', icon: 'accessibility'},
                { name: 'Blog', icon: 'chatbubble-ellipses'},
            ]
        },
    ]
    return (
        <nav className="bg-white">
            <div className="flex md:items-center font-medium justify-between mx-6">
                <div className="z-50 p-5 md:w-auto w-full flex justify-between">
                    <img src={logo} alt="" className="md:cursor-pointer  h-9" />
                    <div className="text-3xl md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
                        <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                    </div>
                </div>
                <ul className="md:flex hidden uppercase items-center  gap-8">
                    {
                        links.map((link) => (
                            <div>
                                <div className="px-3 text-left md:cursor-pointer group ">

                                    <h1 className="py-7" onClick={() => setUp(!up)}> <a href="/">{link.name}</a></h1>

                                    {link.submenu && (
                                        <div>
                                            <div className="absolute top-20 hidden hover:md:block group-hover:md:block">
                                                <div className="py-3">
                                                    <div className="w-5 h-5 left-3 absolute mt-1 bg-white rotate-45"></div>
                                                </div>
                                                <div className="bg-white rounded-xl shadow-2xl p-3.5">
                                                    {
                                                        link.sublink.map((mysub) => (
                                                            <div className="flex py-2 text-center">
                                                                <div className="flex-1">
                                                                    <ion-icon name={mysub.icon}></ion-icon>
                                                                </div>
                                                                <h1 className="text-md text-gray-500 font-semibold">{mysub.name}</h1>

                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>


                                    )}
                                </div>
                            </div>
                        ))
                    }
                    <Navlink />
                </ul>
                <div className="md:block hidden">
                    <Button />
                </div>

                {/* mobile nav */}
                <ul className={`md:hidden bg-white absolute w-2/3 right-0 h-full bottom-0 py-24 pl-24 duration-500 ${open ? 'right-0' : 'right-[-100%]'}`}>
                    <li>
                       {
                        links.map((Link) =>(
                            <h1 className="py-7" onClick={() => setUp(!up)}> <a href="/">{Link.name}</a></h1>
                        ) )
                       }
                    </li>
                    <Navlink />
                    <div className="py-5 grid mx-auto">
                        <Button />
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
