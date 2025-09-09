import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <>
            <div className="flex flex-col bg-[#fafafa] h-[25vh] items-start justify-center pl-12 gap-8 lg:flex-row lg:justify-between lg:items-center lg:px-80">
                <p className="font-bold text-4xl text-[#252b42]">Bandage</p>
                <div className="flex flex-row gap-6">
                    <Facebook className="text-[#23a6f0] w-8 h-8" />
                    <Instagram className="text-[#23a6f0] w-8 h-8" />
                    <Twitter className="text-[#23a6f0] w-8 h-8" />
                </div>
            </div>
            <div className="flex flex-col py-20 gap-12 px-12 lg:flex-row lg:justify-center lg:gap-22">
                <div className="flex flex-col gap-8">
                    <h5 className="text-[#252b42] font-bold text-2xl">Company Info</h5>
                    <ul className="flex flex-col gap-4 text-[#737373] font-bold text-xl">
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-8">
                    <h5 className="text-[#252b42] font-bold text-2xl">Legal</h5>
                    <ul className="flex flex-col gap-4 text-[#737373] font-bold text-xl">
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-8">
                    <h5 className="text-[#252b42] font-bold text-2xl">Features</h5>
                    <ul className="flex flex-col gap-4 text-[#737373] font-bold text-xl">
                        <li>Business Marketing</li>
                        <li>User Analytic</li>
                        <li>Live Chat</li>
                        <li>Unlimited Support</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-8">
                    <h5 className="text-[#252b42] font-bold text-2xl">Resources</h5>
                    <ul className="flex flex-col gap-4 text-[#737373] font-bold text-xl">
                        <li>IOS & Android</li>
                        <li>Watch a demo</li>
                        <li>Customers</li>
                        <li>API</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-8">
                    <h5 className="text-[#252b42] font-bold text-2xl ">Get In Touch</h5>
                    <div className="flex flex-row">
                        <input type="text" placeholder="Your Email" className="rounded-l-md bg-[#F5F5F5] text-black border border-[#DADADA] p-2" />
                        <button className="bg-[#23a6f0] py-4 px-6 border border-[#DADADA] rounded-r-md text-white">Subscribe</button>
                    </div>
                    <p className="text-[#737373] font-semibold">Lore imp sum dolor Amit</p>
                </div>
            </div>
            <div className="bg-[#fafafa] h-[15vh] flex items-center justify-center lg:justify-start lg:pl-72">
                <p className="text-[#737373] font-bold text-l text-center w-[12.5rem] lg:w-[25rem]">Made With Love By Finland All Right Reserved </p>
            </div>
        </>
    )
}