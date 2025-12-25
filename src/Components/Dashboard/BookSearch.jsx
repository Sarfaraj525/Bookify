'use client';
import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { MdOutlineKeyboardVoice } from 'react-icons/md';
import { useSearchContext } from '../context/SearchProvider'; 

const BookSearch = () => {
    const { setSearchQuery } = useSearchContext();  

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);  
    };

    return (
        <div className="hidden md:flex items-center">
            <input
                className="bg-[#EFEEE9CC] border-0 rounded-md pr-16"
                type="text"
                placeholder="Search..."
                onChange={handleSearch}  
            />
            <div className="flex items-center gap-1 -ml-[65px]">
                <IoIosSearch className="text-xl" />
                <div className="bg-[#0000001A] p-2.5 rounded-bl-3xl rounded-md rounded-tl-none">
                    <MdOutlineKeyboardVoice className="text-xl text-black" />
                </div>
            </div>
        </div>
    );
};

export default BookSearch;
