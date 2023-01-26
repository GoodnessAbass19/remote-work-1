import React, { useState } from "react";


const Navlink = () => {
    // const [heading, setHeading] = useState("")
    // const [up, setUp] = useState(false)
    const links = [
       
        { name: 'Career', },
        { name: 'About', }
    ]
    return (
        <>
            {
                links.map((link) => (
                    <div>
                        <div className="px-3 text-left md:cursor-pointer group">
                            <h1 className="py-7"><a href="/">{link.name}</a></h1>
                            {link.submenu && (
                                <div>
                                    <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                                        <div className="py-3">
                                            <div className="w-5 h-5 left-3 absolute mt-1 bg-white rotate-45"></div>
                                        </div>
                                        <div className="bg-white rounded-xl shadow-2xl p-2.5">
                                            {
                                                link.sublink.map((mysub) => (
                                                    <div className="text-center py-2 px-4">

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
        </>

    );
}

export default Navlink;