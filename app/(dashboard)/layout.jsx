'use client'
import SideNav from "@/app/ui/sidenav";
import { useContext } from "react"
import { Context } from "@/app/lib/ContextProvider"
import { Bars3Icon, BellIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Layout({children}){
    let [showMenu, setShowMenu] = useState(false);
    let {User} = useContext(Context);

    return(
        <div className="flex h-lvh">
        <div className={`h-lvh fixed z-40 bg-white ${showMenu?'-translate-x-0':'-translate-x-96'} lg:translate-x-0`}>
            <SideNav control={setShowMenu}/>
        </div>
        <div onClick={e=>{showMenu?setShowMenu(false):null}} className="w-[100%] lg:mx-12 lg:ml-64">
            <header className="flex justify-between right-0 py-6">
                <div>
                    <Bars3Icon onClick={e=>setShowMenu(true)} className="w-6 h-6 lg:hidden block"/>
                </div>
                <div className="flex">
                    <BellIcon className="w-6 h-6"/>
                    <span className="min-w-[2px] min-h-6 h-max bg-tertiary mx-4"></span>
                    <div className="flex items-center">
                        <span className="mx-4">{User[0].role}</span>
                        <ChevronDownIcon className="w-6 h-6"/>
                    </div>
                </div>
            </header>

            {children}
        </div>
        </div>
    )
}