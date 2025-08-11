import "./App.css";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/hero_1.jpg.webp";
import img3 from "./assets/slide_1.jpg.webp";
import img4 from "./assets/person_5.jpg.webp";
import img5 from "./assets/person_1.jpg.webp";
import img6 from "./assets/person_2.jpg.webp";
import img7 from "./assets/person_3.jpg.webp";
import img8 from "./assets/person_4.jpg.webp";
import img9 from "./assets/person_6.jpg.webp";
import img10 from "./assets/person_7.jpg.webp";
import img11 from "./assets/person_8.jpg.webp";
import img12 from "./assets/new1.jpg";
import img13 from "./assets/new2.jpg";
import img14 from "./assets/new3.jpg";
import img15 from "./assets/new4.jpg";
import img16 from "./assets/new5.jpg";
import img17 from "./assets/new6.jpg";
import img18 from "./assets/new7.jpg";
import img19 from "./assets/new8.jpg";
import img20 from "./assets/new9.jpg";
import img21 from "./assets/new10.jpg";
import img22 from "./assets/new11.jpg";
import img23 from "./assets/new12.jpg";
import img24 from "./assets/new13.jpg";
import img25 from "./assets/group.jpg";

function App() {
  return (
    <>
      <div className="w-full h-screen">
        {/* $HeroSection */}
        <div className="relative">
          <img
            src={img1}
            alt="img"
            className="h-lvh w-full absolute left-0 right-0 z-0 top-0"
          />
          <div className="nav absolute  top-0 h-24 w-full text-white flex items-center border-b-1">
            <div className="nitro text-3xl pl-52">Nitro.</div>
            <div className="nav-items flex w-fit ml-84 gap-12 text-base">
              <div className="items font-bold">Home</div>
              <div className="items opacity-50">About us</div>
              <div className="items opacity-50">Portfolio</div>
              <div className="items opacity-50">Services</div>
              <div className="items opacity-50">Testimonials</div>
              <div className="items opacity-50">Blog</div>
              <div className="items opacity-50">Contact</div>
            </div>
          </div>
        </div>
        <div className="img-text absolute gap-9 w-full h-full flex items-center justify-center flex-col">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="welcome text-5xl  text-white font-semibold">
              WELCOME
            </div>
            <div className="wel-text  text-white text-2xl font-light tracking-normal w-180 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              soluta eius error.
            </div>
          </div>
          <button className=" w-fit h-fit  bg-blue-500 text-white text-base py-3 px-8 rounded-3xl">
            Get in Touch
          </button>
        </div>
      </div>

      {/* $AboutSection */}

      <div className="h-screen">
        <div className="flex flex-col w-full mt-20 items-center">
          <div className="text-4xl font-bold text-blue-500">About us</div>
          <div className="flex mt-20 gap-25">
            <img src={img2} alt="Girl Image" className="h-84" />
            <div className="flex flex-col">
              <div className="text-3xl">For the next great business</div>
              <div className="w-110 mt-5 text-lg opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                tempora cumque eligendi in nostrum labore omnis quaerat.
              </div>
              <div className="opacity-60 mt-10 flex flex-col gap-3 text-base">
                <div className="">Officia quaerat eaque neque</div>
                <div className="">Possimus aut consequuntur incidunt</div>
                <div className="">Lorem ipsum dolor sit amet</div>
                <div className="">Consectetur adipisicing elit</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="h-screen">
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-blue-500">Our Features</div>
          <div className="text-xl mt-5 opacity-60 w-150 text-center font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            minima neque tempora reiciendis.
          </div>
          <div className="mt-20 flex gap-25">
            <img src={img3} alt="Girl" className="h-84" />
            <div className="flex flex-col">
              <div className="text-4xl font-bold w-100 text-blue-500">
                Take your Business Online
              </div>
              <div className="mt-5 text-xl w-100 font-light opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="w-110 mt-5 opacity-60">
                Est qui eos quasi ratione nostrum excepturi id recusandae fugit
                omnis ullam pariatur itaque nisi voluptas impedit Quo suscipit
                omnis iste velit maxime.
              </div>
              <button className=" w-fit h-fit  bg-blue-500 text-white text-base py-3 px-8 rounded-3xl mt-7">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* team section */}
      <div className="h-250 w-full">
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-blue-500">Our Team</div>
          <div className="text-xl mt-5 opacity-60 w-150 text-center font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            minima neque tempora reiciendis.
          </div>
          <div className="grid grid-cols-4 gap-10 mt-20">
            <div className="">
              <img src={img4} alt="member-1" className="h-64" />
              <div className="text-xl pl-5 mt-3">Kaiara Spencer</div>
              <div className="opacity-50 pl-5">Product Manager</div>
            </div>
            <div className="">
              <img src={img9} alt="member-1" className="h-64" />
              <div className="text-xl pl-5 mt-3">Dave Simpson</div>
              <div className="opacity-50 pl-5">Product Manager</div>
            </div>
            <div className="">
              <img src={img10} alt="member-1" className="h-64" />
              <div className="text-xl pl-5 mt-3">Ben Thompson</div>
              <div className="opacity-50 pl-5">Product Manager</div>
            </div>
            <div className="">
              <img src={img11} alt="member-1" className="h-64" />
              <div className="text-xl pl-5 mt-3">Kyla Stewart</div>
              <div className="opacity-50 pl-5">Product Manager</div>
            </div>
            <div className="">
              <img src={img5} alt="member-1" className="h-64" />
              <div className="text-xl pl-5 mt-3">Kaiara Spencer</div>
              <div className="opacity-50 pl-5">Product Manager</div>
            </div>
            <div className="">
              <img src={img6} alt="member-1" className="h-64" />
              <div className="text-xl pl-5 mt-3">Dave Simpson</div>
              <div className="opacity-50 pl-5">Product Manager</div>
            </div>
            <div className="">
              <img src={img7} alt="member-1" className="h-64" />
              <div className="text-xl pl-5 mt-3">Ben Thompson</div>
              <div className="opacity-50 pl-5">Product Manager</div>
            </div>
            <div className="">
              <img src={img8} alt="member-1" className="h-64" />
              <div className="text-xl pl-5 mt-3">Chris Stewart</div>
              <div className="opacity-50 pl-5">Product Manager</div>
            </div>
          </div>
        </div>
      </div>

      <hr className="opacity-20" />

      {/* portfolio-section */}
      <div className="h-350">
        <div className="flex flex-col items-center mt-20">
          <div className="text-4xl font-bold text-blue-500">Portfolio</div>
          <div className="flex mt-10 gap-4">
            <button className="bg-blue-500 px-5 py-2 rounded-3xl text-white">
              All
            </button>
            <button className="px-5 py-2 rounded-3xl bg-gray-100 opacity-80">
              Web
            </button>
            <button className="px-5 py-2 rounded-3xl bg-gray-100 opacity-80">
              Design
            </button>
            <button className="px-5 py-2 rounded-3xl bg-gray-100 opacity-80">
              Brand
            </button>
          </div>
        </div>
        <div className="mt-15 flex gap-8 justify-center">
          <div className="flex flex-col gap-5">
            <img src={img12} alt="" className="h-72 w-64" />
            <img src={img16} alt="" className="h-98 w-64" />
            <img src={img20} alt="" className="h-86 w-64" />
          </div>
          <div className="flex flex-col gap-8">
            <img src={img13} alt="" className="h-86 w-64" />
            <img src={img17} alt="" className="h-88 w-64" />
            <img src={img21} alt="" className="h-48 w-64" />
          </div>
          <div className="flex flex-col gap-8">
            <img src={img14} alt="" className="h-94 w-64" />
            <img src={img18} alt="" className="h-44 w-64" />
            <img src={img22} alt="" className="h-44 w-64" />
            <img src={img24} alt="" className="h-44 w-64" />
          </div>
          <div className="flex flex-col gap-8">
            <img src={img15} alt="" className="h-86 w-64" />
            <img src={img19} alt="" className="h-44 w-64" />
            <img src={img23} alt="" className="h-110 w-64" />
          </div>
        </div>
      </div>

      {/* services-section */}
      <div className="h-screen bg-gray-50">
        <div className="flex flex-col items-center  ">
          <div className="text-4xl font-bold text-blue-500 mt-20">
            Our Services
          </div>
          <div className="flex mt-15 gap-10">
            <div className="flex flex-col gap-5">
              <div className="text-2xl">Business Consulting</div>
              <div className="w-80 opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </div>
              <div className="text-blue-500">Learn More</div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-2xl">Market Analysis</div>
              <div className="w-80 opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </div>
              <div className="text-blue-500">Learn More</div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-2xl">User Monitoring</div>
              <div className="w-80 opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </div>
              <div className="text-blue-500">Learn More</div>
            </div>
          </div>
          <div className="flex mt-15 gap-10">
            <div className="flex flex-col  gap-5">
              <div className="text-2xl">Insurance Consulting</div>
              <div className="w-80 opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </div>
              <div className="text-blue-500">Learn More</div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-2xl">Financial Investment</div>
              <div className="w-80 opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </div>
              <div className="text-blue-500">Learn More</div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-2xl">Financial Management</div>
              <div className="w-80 opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </div>
              <div className="text-blue-500">Learn More</div>
            </div>
          </div>
        </div>
      </div>

      {/* testimonial-section */}

      <div className="h-screen">
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-blue-500 mt-20">
            Testimonials
          </div>
          <div className="text-2xl italic w-180 text-center opacity-50 mt-15">
            “Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae
            explicabo animi minima fuga beatae illum eligendi incidunt
            consequatur. Amet dolores excepturi earum unde iusto.”
          </div>
          <div className="flex mt-15 gap-5">
            <div className="bg-[url(assets/john.jpg)] h-15 w-15 rounded-b-full bg-cover"></div>
            <div className="mt-5 opacity-60">John Smith</div>
          </div>
        </div>
      </div>

      {/* FAQ section */}

      <div className="h-200 bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="text-blue-500 font-bold text-4xl mt-20">
            Frequently Ask Questions
          </div>
          <div className="mt-20 grid grid-cols-2 gap-20">
            <div className="">
              <div className="flex flex-col gap-5">
                <div className="text-2xl">
                  Can I accept both Paypal and Stripe?
                </div>
                <div className="w-120 opacity-60">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam assumenda eum blanditiis perferendis.
                </div>
              </div>
              <div className="flex flex-col gap-5 mt-10">
                <div className="text-2xl">What available is refund period?</div>
                <div className="w-120 opacity-60">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam assumenda eum blanditiis perferendis.
                </div>
              </div>
              <div className="flex flex-col gap-5 mt-10">
                <div className="text-2xl">
                  Can I accept both Paypal and Stripe?
                </div>
                <div className="w-120 opacity-60">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam assumenda eum blanditiis perferendis.
                </div>
              </div>
              <div className="flex flex-col gap-5 mt-10">
                <div className="text-2xl">What available is refund period?</div>
                <div className="w-120 opacity-60">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam assumenda eum blanditiis perferendis.
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col gap-5">
                <div className="text-2xl">Where are you from?</div>
                <div className="w-120 opacity-60">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam assumenda eum blanditiis perferendis.
                </div>
              </div>
              <div className="flex flex-col gap-5 mt-10">
                <div className="text-2xl">What is your opening time?</div>
                <div className="w-120 opacity-60">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam assumenda eum blanditiis perferendis.
                </div>
              </div>
              <div className="flex flex-col gap-5 mt-10">
                <div className="text-2xl">
                  Can I accept both Paypal and Stripe?
                </div>
                <div className="w-120 opacity-60">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam assumenda eum blanditiis perferendis.
                </div>
              </div>
              <div className="flex flex-col gap-5 mt-10">
                <div className="text-2xl">What available is refund period?</div>
                <div className="w-120 opacity-60">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam assumenda eum blanditiis perferendis.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* group-section */}

      <div className="h-100">
        <div className="flex mt-50 justify-center gap-20">
          <div className="flex flex-col">
            <div className="text-xl">Web and Mobile Specialities</div>
            <div className="w-65 mt-3 opacity-60 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis consect.
            </div>
            <div className="mt-7 text-lg text-blue-500">Learn More</div>
          </div>
          <div className="flex flex-col">
            <div className="text-xl">Intutive Thinkers</div>
            <div className="w-65 mt-3 opacity-60 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis consect.
            </div>
            <div className="mt-7 text-lg text-blue-500">Learn More</div>
          </div>
          <img src={img25} alt="" className="h-70 rounded-xl" />
        </div>
      </div>

      {/* blog-section */}

      <div className="h-300">
        <div className="flex flex-col items-center">
          <div className="text-blue-500 font-bold text-4xl mt-20">Our Blog</div>
          <div className="grid grid-cols-3 mt-15 gap-10">
            <div className="flex flex-col w-78">
              <img src={img12} alt="" className="h-86" />
              <div className="text-xl w-80 mt-5">
                Where Do You Learn HTML & CSS in 2019?
              </div>
              <div className="flex gap-5 text-[14px] mt-3">
                <div className="opacity-60">Ham Brook</div>
                <div className="opacity-60">Jan 18, 2019</div>
                <div className="text-blue-500">News</div>
              </div>
              <div className="mt-8 opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                eligendi nobis ea maiores sapiente veritatis reprehenderit
                suscipit quaerat rerum voluptatibus a eius.
              </div>
              <div className="text-blue-500 text-lg mt-5">
                Continue Reading ...
              </div>
            </div>
            <div className="flex flex-col w-78">
              <img src={img15} alt="" className="h-110" />
              <div className="text-xl w-80 mt-5">
                Where Do You Learn HTML & CSS in 2019?
              </div>
              <div className="flex gap-5 text-[14px] mt-3">
                <div className="opacity-60">Ham Brook</div>
                <div className="opacity-60">Jan 18, 2019</div>
                <div className="text-blue-500">News</div>
              </div>
              <div className="mt-8 opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                eligendi nobis ea maiores sapiente veritatis reprehenderit
                suscipit quaerat rerum voluptatibus a eius.
              </div>
              <div className="text-blue-500 text-lg mt-5">
                Continue Reading ...
              </div>
            </div>
            <div className="flex flex-col w-78">
              <img src={img14} alt="" className="h-120" />
              <div className="text-xl w-80 mt-5">
                Where Do You Learn HTML & CSS in 2019?
              </div>
              <div className="flex gap-5 text-[14px] mt-3">
                <div className="opacity-60">Ham Brook</div>
                <div className="opacity-60">Jan 18, 2019</div>
                <div className="text-blue-500">News</div>
              </div>
              <div className="mt-8 opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                eligendi nobis ea maiores sapiente veritatis reprehenderit
                suscipit quaerat rerum voluptatibus a eius.
              </div>
              <div className="text-blue-500 text-lg mt-5">
                Continue Reading ...
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact-section */}

      <div className="h-350 bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="text-blue-500 font-bold text-4xl mt-20">
            Contact Us
          </div>
          <div className="flex mt-20 gap-30 justify-center items-center w-full ">
            <div className="opacity-60 w-85 text-center text-lg">
              203 Fake St. Mountain View, San Francisco, California, USA
            </div>
            <div className="text-blue-500 text-lg pr-35">+1 232 3235 324</div>
            <div className="text-blue-500 text-lg">youremail@domain.com</div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-220 w-250 bg-white mt-20">
            <div className="flex flex-col ml-10">
              <div className="text-2xl mt-10">Contact Forms</div>
              <div className="mt-10 text-lg pl-1">Full Name</div>
              <input
                type="text"
                className="bg-gray-100 w-150 h-10 mt-5 rounded-4xl pl-5"
              />
              <div className="mt-10 text-lg pl-1">Email</div>
              <input
                type="text"
                className="bg-gray-100 w-150 h-10 mt-5 rounded-4xl pl-5"
              />
              <div className="mt-10 text-lg pl-1">Subject</div>
              <input
                type="text"
                className="bg-gray-100 w-150 h-10 mt-5 rounded-4xl pl-5"
              />
              <div className="mt-10 text-lg pl-1">Message</div>
              <textarea className="bg-gray-100 w-150 h-50 mt-5 rounded-4xl pl-5"></textarea>
              <div className="bg-blue-500 w-fit h-fit mt-10 text-white text-lg pt-3 pr-7 pb-3 pl-7 rounded-4xl">
                Send Message
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer-section */}

      <div className="h-11/12 bg-black text-white">
        <div className="flex gap-50 justify-center border-b-1 pb-30">
          <div className="flex flex-col mt-30 gap-3">
            <div className="text-lg">About us</div>
            <div className="opacity-60 w-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              facere laudantium magnam voluptatum autem. Amet aliquid nesciunt
              veritatis aliquam.
            </div>
          </div>
          <div className="flex flex-col mt-30 gap-3">
            <div className="text-lg">Quick Links</div>
            <div className="opacity-60">About us</div>
            <div className="opacity-60">Services</div>
            <div className="opacity-60">Testimonials</div>
            <div className="opacity-60">Contact us</div>
          </div>
          <div className="flex flex-col mt-30 gap-3">
            <div className="text-lg">Follow us</div>
            <div className="opacity-60">Facebook</div>
            <div className="opacity-60">Twitter</div>
            <div className="opacity-60">Instagram</div>
            <div className="opacity-60">Linkedin</div>
          </div>
          <div className="flex flex-col mt-30 gap-5">
            <div className="text-lg">Subscribe Newsletter</div>
            <input type="text" className="h-10 w-50 bg-gray-400 rounded-4xl pl-3 text-black" placeholder="Enter Email" />
            <div className="bg-white text-black h-fit w-fit pt-2 pl-8 pb-2 pr-8 rounded-xl">Send</div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="opacity-60 mt-30">Copyright ©2025 All rights reserved | This template is made with  by Colorlib</div>
        </div>
      </div>
    </>
  );
}

export default App;
