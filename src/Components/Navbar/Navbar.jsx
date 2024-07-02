import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import BannerUi from "../BannerUi/BannerUi";

const Navbar = () => {
  return (
    <div  className="bg-blue-50 shadow-md">
      <nav>
        <div className="flex justify-between items-center  py-4 px-16">
          <Logo />
          <ul className="flex gap-7 text-2xl font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 underline"
                    : "text-gray-700 hover:text-red-500"
                }
              >
                Why choose us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/howitwork"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 underline"
                    : "text-gray-700 hover:text-red-500"
                }
              >
                How it works?
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/howtorent"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 underline"
                    : "text-gray-700 hover:text-red-500"
                }
              >
                How to Rent ?
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catchourdeals"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 underline"
                    : "text-gray-700 hover:text-red-500"
                }
              >
                Catch Our Deals
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 underline"
                    : "text-gray-700 hover:text-red-500"
                }
              >
                Login{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* banner */}
      <BannerUi></BannerUi>
    </div>
  );
};

export default Navbar;
