import "./App.css";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/hero_1.jpg.webp";
import img3 from "./assets/slide_1.jpg.webp";

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
    </>
  );
}

export default App;
