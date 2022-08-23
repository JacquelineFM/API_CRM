import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const ViewCustomer = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(true);

  /* This is a React hook that is called when the component mounts. It is used to fetch the customer data
from the API and set the state of the component to the customer data. */
  useEffect(() => {
    /**
     * When the component mounts, fetch the customer data from the API and set the state of the component
     * to the customer data.
     */
    const getCustomerAPI = async () => {
      try {
        const URL = `${import.meta.env.VITE_API_URL}/${id}`;
        const response = await fetch(URL);
        const result = await response.json();

        setCustomer(result);
      } catch (error) {
        console.log(error);
      }

      setLoading(!loading);
    };

    getCustomerAPI();
  }, []);

  return loading ? (
    <Spinner />
  ) : Object.keys(customer).length === 0 ? (
    <p>No results</p>
  ) : (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-xl border border-gray-200/80 bg-white md:p-8 p-6">
        <div className="flex md:flex-row flex-col items-start gap-4">
          <img
            className="md:w-28 w-full md:h-28 h-full rounded-lg"
            src="https://api.lorem.space/image/face?w=500&h=500"
            alt="User"
          />
          <div className="h-28 w-full flex flex-col justify-evenly">
            {customer.name && (
              <p className="text-gray-800 text-2xl font-bold">
                {customer.name}
              </p>
            )}
            <div className="flex flex-col space-y-1">
              {customer.company && (
                <div className="flex flex-row">
                  <svg
                    className="mr-2 h-4 w-4 fill-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z" />
                  </svg>
                  <div className="text-xs text-gray-400/80 hover:text-gray-400">
                    {customer.company}
                  </div>
                </div>
              )}
              {customer.email && (
                <div className="flex flex-row">
                  <svg
                    className="mr-2 h-4 w-4 fill-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z" />
                  </svg>
                  <div className="text-xs text-gray-400/80 hover:text-gray-400">
                    {customer.email}
                  </div>
                </div>
              )}
              {customer.phone && (
                <div className="flex flex-row">
                  <svg
                    className="mr-2 h-4 w-4 fill-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />
                  </svg>
                  <div className="text-xs text-gray-400/80 hover:text-gray-400">
                    {customer.phone}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {customer.notes && (
          <div className="mt-6">
            <div className="flex flex-row items-center mb-2">
              <svg
                className="mr-2 h-4 w-4 fill-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M21 10V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H11V19.13L19.39 10.74C19.83 10.3 20.39 10.06 21 10M14 4.5L19.5 10H14V4.5M22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19M19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83Z" />
              </svg>
              <div className="text-md font-semibold">Notes</div>
            </div>
            <div className="text-sm text-gray-800/80">{customer.notes}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCustomer;
