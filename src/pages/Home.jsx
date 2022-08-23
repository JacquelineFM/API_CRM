import { useState, useEffect } from "react";
import Customer from "../components/Customer";

const Home = () => {
  const [customers, setCustomers] = useState([]);

  /* A React Hook that is used for data fetching, setting up a subscription, 
  or manually changing the DOM in React components. */
  useEffect(() => {
    /**
     * The getCustomersAPI function is an asynchronous function that fetches data from the URL, and then
     * sets the state of the customers array to the result of the fetch.
     */
    const getCustomersAPI = async () => {
      try {
        const URL = import.meta.env.VITE_API_URL;
        const response = await fetch(URL);
        const result = await response.json();

        setCustomers(result);
      } catch (error) {
        console.log(error);
      }
    };

    getCustomersAPI();
  }, []);

  /**
   * If the user confirms the deletion, then delete the customer from the database and remove the
   * customer from the customers array.
   */
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Do you want to delete this customer?");

    if (confirmDelete) {
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const response = await fetch(url, {
          method: "DELETE",
        });
        await response.json();
        const arrayCustomers = customers.filter(
          (customer) => customer.id !== id
        );

        setCustomers(arrayCustomers);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="container md:w-4/5 mx-auto py-8">
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-xl overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th
                  scope="col"
                  className="px-5 py-3 border-b border-gray-200 text-left text-sm uppercase font-bold"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 border-b border-gray-200 text-left text-sm uppercase font-bold"
                >
                  Contact
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 border-b border-gray-200 text-left text-sm uppercase font-bold"
                >
                  Company
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 border-b border-gray-200 text-left text-sm uppercase font-bold"
                ></th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <Customer
                  key={customer.id}
                  customer={customer}
                  handleDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
