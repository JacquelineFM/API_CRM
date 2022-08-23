import { Outlet, Link, useLocation } from "react-router-dom";
import Customer from "../components/Customer";

const Layout = () => {
  const location = useLocation();
  const currentURL = location.pathname;

  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/5 bg-white">
        <div className="flex flex-col sm:flex-row sm:justify-around">
          <div className="md:w-72 md:min-h-screen">
            <div className="mx-6 mt-16 md:text-left text-center">
              <span className="text-2xl font-bold ">CRM - Customer</span>
            </div>
            <nav className="mt-10 px-6">
              <Link
                className={`${
                  currentURL === "/customers"
                    ? "bg-gray-50 text-gray-600"
                    : "bg-white text-gray-500"
                } hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-5 transition-colors duration-200 justify-start`}
                to="/customers"
              >
                <svg
                  className="fill-indigo-600"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2,3H22C23.05,3 24,3.95 24,5V19C24,20.05 23.05,21 22,21H2C0.95,21 0,20.05 0,19V5C0,3.95 0.95,3 2,3M14,6V7H22V6H14M14,8V9H21.5L22,9V8H14M14,10V11H21V10H14M8,13.91C6,13.91 2,15 2,17V18H14V17C14,15 10,13.91 8,13.91M8,6A3,3 0 0,0 5,9A3,3 0 0,0 8,12A3,3 0 0,0 11,9A3,3 0 0,0 8,6Z" />
                </svg>
                <span className="mx-4 text-md font-normal">Customers</span>
              </Link>
              <Link
                className={`${
                  currentURL === "/customers/new"
                    ? "bg-gray-50 text-gray-600"
                    : "bg-white text-gray-500"
                } hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-5 transition-colors duration-200 justify-start`}
                to="/customers/new"
              >
                <svg
                  className="fill-indigo-600"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z" />
                </svg>
                <span className="mx-4 text-md font-normal">New Customer</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="md:w-4/5 p-10 md:h-screen overflow-y-scroll bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
