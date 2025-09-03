import { Facebook, Heart, Instagram, Mail, MoveDown, Phone, Search, ShoppingCart, Twitter, User, Youtube } from "lucide-react";
import { useState } from "react";


export default function Header() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div>
                <div className="hidden lg:block bg-[#252b42] text-white font-semibold">
                    <div className="lg:flex flex-row justify-between items-center h-[10vh] mx-10">
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

                <div>
                    <div>
                        <p>Bandage</p>
                        <nav>
                            <a href="">Home</a>
                            <div
                                className="relative"
                                onMouseEnter={() => setOpen(true)}
                                onMouseLeave={() => setOpen(false)}
                            >
                                <button>Shop ↓</button>
                                {open && (
                                    <>
                                        <div>
                                            <h3>Kadın</h3>
                                            <ul>
                                                <li><a href="">Bags</a></li>
                                                <li><a href="">Belts</a></li>
                                                <li><a href="">Cosmetics</a></li>
                                                <li><a href="">Hats</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3>Erkek</h3>
                                            <ul>
                                                <li><a href="">Bags</a></li>
                                                <li><a href="">Belts</a></li>
                                                <li><a href="">Cosmetics</a></li>
                                                <li><a href="">Hats</a></li>
                                            </ul>
                                        </div>
                                    </>
                                )}

                            </div>
                            <a href="">About</a>
                            <a href="">Blog</a>
                            <a href="">Contact</a>
                            <a href="">Pages</a>
                        </nav>
                    </div>
                    <div>
                        <div>
                            <User />
                            <a href="">Login/Register</a>
                        </div>
                        <Search />
                        <ShoppingCart />
                        <Heart />
                    </div>
                </div>
            </div>
        </>
    )
}