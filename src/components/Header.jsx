import React from 'react';
import { Bookmark, Search, ShoppingBag } from 'tabler-icons-react';

const Header = () => {
    return (
        <div className="header flex items-center justify-between py-4">
            <div className="flex items-center">
                <div className="mr-16">
                    {/* prettier-ignore */}
                    <svg className='w-16 fill-red-500' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Nike</title><path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z"/></svg>
                </div>
                <div>
                    <ul className="nav-link flex items-center gap-8">
                        <li>New & Featured</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Sale</li>
                        <li>Gifts</li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="bg-[#3c3c3c] py-2 px-4 flex items-center rounded-full">
                    <input type="text" placeholder="Search here" className="bg-[#3c3c3c] outline-none placeholder:text-[#777777] text-[#999999]" />
                    <button>
                        <Search className="icon" />
                    </button>
                </div>
                <button className="circle hover:bg-[#333333] transition ease-out duration-300">
                    <Bookmark className="icon" />
                </button>
                <button className="circle hover:bg-[#333333] transition ease-out duration-300">
                    <ShoppingBag className="icon" />
                </button>
            </div>
        </div>
    );
};

export default Header;
