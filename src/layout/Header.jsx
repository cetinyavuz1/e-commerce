import { Facebook, Heart, Instagram, Mail, Phone, Search, ShoppingCart, Twitter, User, Youtube, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [search, setSearch] = useState(false);

    return (
        <>
            <div className="hidden lg:block bg-[#252b42] text-white font-semibold">
                <div className="lg:flex flex-row justify-between items-center h-[8vh] mx-10">
                    <div className="flex flex-row gap-10 ">
                        <div className="flex flex-row gap-2">
                            <Phone />
                            <p>(225) 555-0118</p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Mail />
                            <p>cetinyavuz1@hotmail.com</p>
                        </div>
                    </div>
                    <p>Follow Us and get a chance to win 80% off</p>
                    <div className="flex flex-row gap-5">
                        <p>Follow Us :</p>
                        <Instagram />
                        <Youtube />
                        <Facebook />
                        <Twitter />
                    </div>
                </div>
            </div>

            <div className={`${search ? "max-lg:flex max-lg:justify-center flex justify-between items-center px-6 py-4 h-[8vh]" : "flex justify-between items-center px-6 py-4 h-[8vh]"}`}>
                <p className={`${search ? "max-lg:hidden" : ""} text-3xl font-bold text-[#252b42]`}>Bandage</p>
                <nav className="hidden lg:flex gap-6 text-xl text-[#737373] font-semibold">
                    <Link to="/">Home</Link>
                    <div
                        className="relative"
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                    >
                        <button className="flex items-center gap-1">Shop ▼</button>
                        {open && (
                            <div className="absolute bg-white shadow-md p-4 top-full left-0 flex gap-[9rem] z-50">
                                <div>
                                    <h3 className="font-bold text-[#252b42] mb-[2rem] mt-[1.5rem] ml-[1rem] underline">Kadın</h3>
                                    <ul className="space-y-7  ml-[1rem] mb-[1.5rem]">
                                        <li><a href="">Bags</a></li>
                                        <li><a href="">Belts</a></li>
                                        <li><a href="">Cosmetics</a></li>
                                        <li><a href="">Hats</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#252b42] mb-[2rem] mt-[1.5rem] mr-[10rem] underline">Erkek</h3>
                                    <ul className="space-y-7">
                                        <li><a href="">Bags</a></li>
                                        <li><a href="">Belts</a></li>
                                        <li><a href="">Cosmetics</a></li>
                                        <li><a href="">Hats</a></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    <a href="">About</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                    <a href="">Pages</a>
                </nav>

                <div className="flex lg:flex gap-7 items-center">
                    <div className="flex gap-1 items-center">
                        <User className={`${search ? "hidden" : ""} lg:text-[#23a6f0]`} />
                        <a href="" className={`${search ? "hidden" : ""} max-lg:hidden text-[#23a6f0] font-semibold text-xl`}>Login/Register</a>
                    </div>
                    <div className="flex">
                        {search && (
                            <input
                                type="text"
                                placeholder="Ara..."
                                className="border border-[#DADADA] rounded-md bg-[#F5F5F5] text-black p-2 sm:w-72"
                            />
                        )}
                        <button onClick={() => setSearch(!search)}>
                            <Search className="lg:text-[#23a6f0]" />
                        </button>
                    </div>
                    <a href="" className={`${search ? "hidden" : ""} lg:text-[#23a6f0]`}><ShoppingCart /></a>
                    <a href="" className={`${search ? "hidden" : ""} max-lg:hidden lg:text-[#23a6f0]`}><Heart /></a>
                    <button
                        className={`${search ? "hidden" : ""} lg:hidden`}
                        onClick={() => setMobileMenu(!mobileMenu)}
                    >
                        {mobileMenu ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {mobileMenu && (
                <div className="lg:hidden flex flex-col items-center gap-6 py-6 text-lg font-medium text-[#737373]">
                    <a href="">Home</a>
                    <a href="">Product</a>
                    <a href="">Pricing</a>
                    <a href="">Contact</a>
                </div>
            )}
        </>
    )
}
