import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="bg-cover bg-center h-screen w-screen" style={{ backgroundImage: "url('https://i.postimg.cc/Qxd0WXZH/tcf-Poster-11zon.png')" }}>
      <nav className="flex bg-transparent h-20 w-screen justify-center items-center">
        <ul className="flex ml-0 items-center mb-4 m-auto sm:mb-0 font-semibold my-6 text-2xl px-16">
          <li className="sm:mb-0 sm:ml-8 text-white transition duration-300 hover:text-red-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="sm:mb-0 sm:ml-8 text-white transition duration-300 hover:text-red-500">
            <Link to="/events">Events</Link>
          </li>
          <li className="sm:mb-0 sm:ml-8 text-white transition duration-300 hover:text-red-500">
            <Link to="/sponsors">Sponsors</Link>
          </li>
        </ul>
        <img className="w-30 ml-0 mr-80 sm:ml-60 mb-4 sm:mb-0" src="https://i.postimg.cc/mDMJTbCw/Screenshot-2023-10-01-114615-removebg-preview.png" alt="" />
      </nav>
      <div >
    <div className=" ml-20 mt-44 w-1/2 flex flex-col">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Experience The Fusion
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          of Technology and
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Culture
        </h1>

        <h3 className='text-white text-xl mt-8'>Join us for an unforgettable celebration of innovation and creativity</h3>

        <div>
          <button className='text-white text-md font-semibold border-white border-2 hover:border-red-500 px-3 mt-5 w-19 mr-60 h-10 rounded transition duration-300 ease-in-out hover:bg-red-500 hover:text-black'>
            Learn More
          </button>
        </div>
      </div>

      <div className='ml-50'></div>
    </div>
    </div>
  );
}

export default HomePage;
