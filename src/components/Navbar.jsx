import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" w-full bg-gradient-to-r from-green-900 via-emerald-700 to-sky-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Navbar Row */}
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Title */}
          <h1 className="font-extrabold text-2xl tracking-widest bg-gradient-to-r from-lime-300 via-emerald-400 to-cyan-300 bg-clip-text text-transparent
                            drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            MP Tourism
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 text-white font-semibold">
            <Link className="hover:text-yellow-300 transition" to="/">Home</Link>
            <Link className="hover:text-yellow-300 transition" to="/Explore">Explore</Link>
            <Link className="hover:text-yellow-300 transition" to="/about">About</Link>
            <Link className="hover:text-yellow-300 transition" to="/contact">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden flex flex-col items-center space-y-4 py-4 text-white font-semibold bg-black/30 rounded-lg">
            <Link onClick={() => setOpen(false)} to="/">Home</Link>
            <Link onClick={() => setOpen(false)} to="/Explore">Explore</Link>
            <Link onClick={() => setOpen(false)} to="/about">About</Link>
            <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;
