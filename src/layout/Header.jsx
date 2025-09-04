import { Facebook, Heart, Instagram, Mail, Phone, Search, ShoppingCart, Twitter, User, Youtube, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false); // shop dropdown
    const [mobileMenu, setMobileMenu] = useState(false); // hamburger menü

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

            <div className="flex justify-between items-center px-6 py-4 h-[8vh]">
                <p className="text-3xl font-bold text-[#252b42]">Bandage</p>
                <nav className="hidden lg:flex gap-6 text-xl text-[#737373] font-semibold">
                    <a href="">Home</a>
                    <div
                        className="relative"
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                    >
                        <button className="flex items-center gap-1">Shop ▼</button>
                        {open && (
                            <div className="absolute bg-white shadow-md p-4 top-full left-0 flex gap-30">
                                <div>
                                    <h3 className="font-semibold text-[#252b42] mb-10">Kadın</h3>
                                    <ul className="space-y-4">
                                        <li><a href="">Bags</a></li>
                                        <li><a href="">Belts</a></li>
                                        <li><a href="">Cosmetics</a></li>
                                        <li><a href="">Hats</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#252b42] mb-10">Erkek</h3>
                                    <ul className="space-y-4">
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
                        <User className="lg:text-[#23a6f0]" />
                        <a href="" className="max-lg:hidden text-[#23a6f0] font-semibold text-xl">Login/Register</a>
                    </div>
                    <Search className="lg:text-[#23a6f0]" />
                    <a href="" className="lg:text-[#23a6f0]"><ShoppingCart /></a>
                    <a href="" className="max-lg:hidden lg:text-[#23a6f0]"><Heart /></a>
                    <button
                        className="lg:hidden"
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
