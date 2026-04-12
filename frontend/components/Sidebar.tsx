'use client'
import React from 'react'
import {CircleDollarSign, LogOut} from "lucide-react";
import {SIDEBAR_CONSTANTS} from "@/utils/constants";
import {usePathname, useRouter} from "next/navigation";
import {SignOutButton} from "@clerk/react";

const Sidebar = () => {
    const path = usePathname()
    const router = useRouter();

    const handleSidebarClick = (id: string) => {
        router.push(id);
    };

    if (path === "/login" || path === "/signup"){
        return null;
    }

    return (
        <div className="bg-gray-700 w-1/6 h-full flex justify-between flex-col">
        <div className="flex flex-col">
            <div className="flex items-center gap-2">
                <CircleDollarSign size={24} className="text-blue-400"/>
                <span className="text-white font-russo text-base">MoneyMate</span>
            </div>

            <span className="text-gray-200 font-semibold text-base mt-10 pl-2">Menu</span>

            <div className="ml-2 cursor-pointer mt-4 flex flex-col">
                {SIDEBAR_CONSTANTS.map(( item ) => {
                    const itemSelectedClass = item.id === path ? "bg-purple-500 rounded-md border-gray-600": "";

                    return (
                        <div key={item.id}
                             className={`flex items-center gap-2 p-2 ${itemSelectedClass}`}
                             onClick={() => handleSidebarClick(item.id)}>
                            <item.icon size={24} className="text-blue-400"/>
                            <span className="text-white font-alata text-base">{item.title}</span>
                        </div>
                    );
                })}
            </div>
        </div>
            <SignOutButton  redirectUrl="/login">
                <button className="flex gap-2 cursor-pointer mb-8">
                    <LogOut className="h-6 w-6 text-red-400"/>
                    <span className="text-sm text-gray-200">Logout</span>
                </button>
            </SignOutButton>
    </div>)
}
export default Sidebar;
