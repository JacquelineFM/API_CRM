import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormCustomer from "../components/FormCustomer";
import Logo from "../assets/img/Error.svg";

const EditCustomer = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(true);

  /* This is a hook that is called when the component is mounted. It is used to fetch data from an API. */
  useEffect(() => {
    /**
     * This function is an asynchronous function that fetches data from a URL and sets the data to a
     * state variable.
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

  return customer?.name ? (
    <FormCustomer customer={customer} loading={loading} />
  ) : (
    <div className="bg-white mt-8 px-5 pt-12 rounded-xl shadow-md md:w-4/5 mx-auto">
      <div className="container mx-auto px-6 flex flex-col justify-between items-center">
        <div className="w-full md:mb-4">
          <h1 className="font-bold text-center md:text-5xl text-3xl text-gray-800">
            Invalid customer!
          </h1>
        </div>
        <div className="block w-full mx-auto mt-4 md:mt-0">
          <img className="max-w-lg mx-auto" src={Logo} alt="Error" />
        </div>
      </div>
    </div>
  );
};

export default EditCustomer;
