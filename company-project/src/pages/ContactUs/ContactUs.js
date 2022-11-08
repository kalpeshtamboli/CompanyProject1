import React from "react";

export default function ContactUs() {
  return (
    <div className="">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04360432937!2d73.79292688275116!3d18.524603553440926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1627235161413!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ filter: "invert(90%)" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="bg-gray-300 py-4 w-80 h-center rounded-lg">
        <div className="justify-center items-center flex">
          <img
            src="/images/fortress-svgrepo-com.svg"
            width="120px"
            className=""
          />
        </div>
        <div className="items-center justify-center flex text-xl">Pune</div>
        <div>
          <div className="items-center flex justify-center text-sm">
            Reena Complex, 419/4, Nathani Rd,
          </div>
          <div className="items-center flex justify-center text-sm ">
            Vidyavihar Society, Mumbai, 400086
          </div>
        </div>
      </div>
      <div className=" md:flex justify-around  md:px-72 bg-gray-800 pt-56 pb-10 ">
        <div className="main text-white  bg-gray-700 px-10 py-4">
          <div>
            <div className=" py-4">
              <div className="w-12 my-1.5 p-0.5 bg-green-300" />
              <div className="text-lg">Contact Info</div>
            </div>
            <div>
              {" "}
              <div className="py-10 space-y-6">
                <div class="flex space-x-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="text-sm">+91-9579247793 / +91-9579247793</div>
                </div>
                <div class="flex space-x-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="text-sm">Info@CreativeWebo.com</div>
                </div>
                <div class="flex space-x-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="w-60 text-sm">
                    419/4, Reena Complex, Nathani Rd, Vidyavihar(West), Mumbai,
                    400086
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="my-1.5 w-12 p-0.5 bg-green-500" />
          <div>Follow us</div>
          <div className="flex space-x-4">
            <div>
              <img src="/icons/icons8-linkedin-circled.svg" width="30px" />
            </div>
            <div>
              <img src="/icons/icons8-linkedin-circled.svg" width="30px" />
            </div>
            <div>
              <img src="/icons/icons8-linkedin-circled.svg" width="30px" />
            </div>
            <div>
              <img src="/icons/icons8-linkedin-circled.svg" width="30px" />
            </div>
          </div>
        </div>
        <div className="bg-black text-white px-10 py-4">
          <div className="px-6 py-2">
            <div className="w-12 my-1.5 p-0.5 bg-green-500" />
            <div className="text-xl ">Lets Chat</div>
          </div>
          <div className="text-gray-400 space-y-4">
          <div class="md:flex md:space-x-4 px-6">
            <div className="">
              <div className="text-xl">First Name</div>
              <div className="">
                <input type="text" className="md:w-72 h-10 rounded resize-none  bg-gray-800 outline-none border-none px-2" />
              </div>
            </div>
            <div className="">
              <div className="text-xl" >Email Address</div>
              <div className="">
                <input type="text" className="md:w-72 h-10 rounded resize-none  bg-gray-800 outline-none border-none px-2" />
              </div>
            </div>
          </div>
          <div class="md:flex md:space-x-4 px-6 md:my-6">
            <div className="">
              <div className="text-xl">Phone Number</div>
              <div className="">
                <input type="text" className="md:w-72 h-10 rounded resize-none  bg-gray-800 outline-none border-none px-2" />
              </div>
            </div>
            <div className="">
              <div className="text-xl">Subject</div>
              <div className="">
                <input type="text" className="md:w-72 h-10 rounded resize-none  bg-gray-800 outline-none border-none px-2" />
              </div>
            </div>
          </div>
          <div className=" space-y-4">
          <div className="text-xl">Message</div>
          <div ><textarea className="w-full  rounded resize-none  bg-gray-800 outline-none border-none px-2"  /></div>
          </div>
          <div className="py-6 flex justify-center text-lg"><button className="text-green-400 border-b-2 border-green-400">SUBMIT</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}
