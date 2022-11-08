import React from 'react'

export default function Footer() {
    return (
        <div className="text-white   bg-gray-900 md:flex py-14 justify-evenly mx-auto  px-8 ">
           <div className="w-80">
               <div><img src="/images/creativewebo-logo.svg" width="200px"/></div>
               <div className=" py-6 text-sm leading-6">CreativeWebo is a Mumbai based digital agency. We are equipped with cutting-edge technologies to empower businesses online. Our solutions ensure a comprehensive digital transformation of your brand. We use multiple channels are proven strategies 
               to provide you with the best in class digital solutions</div>

            </div> 

            <div>
                <div className="w-12 bg-green-500  p-0.5" />
                <div className="text-xl">Quick Links</div>
                <div>
                    <ul className="py-4 space-y-1 text-sm">
                        <li>Home</li>
                        <li>Solutions</li>
                        <li>Services</li>
                        <li>Case Studies</li>
                        <li>Contact Us</li>
                        <li>FAQs</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
            </div>
            <div className="py-4 md:py-0">
            <div className="w-12 bg-green-500  p-0.5" /> 
            <div className="text-xl">Let's Meet</div>
            <div className="py-10 space-y-6">
            <div class="flex space-x-4">
                <div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
</svg></div>
<div className="text-sm">+91-9579247793 / +91-9579247793</div>
            </div>
            <div class="flex space-x-6">
                <div><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg></div>
<div className="text-sm">Info@CreativeWebo.com</div>
            </div>
            <div class="flex space-x-4">
  <div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg></div>
<div className="w-60 text-sm">419/4, Reena Complex, Nathani Rd,
Vidyavihar(West), Mumbai, 400086</div>
            </div>
            </div>
            </div>

        <div className="">
        <div className="w-12 bg-green-500  p-0.5" />
        <div className="text-xl">Follow Us</div>
        <div class="py-7">
            <ul class="space-y-2 text-sm">
                <li>Linkedin</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
            </ul>
        </div>
        </div>
        </div>
    )
}
