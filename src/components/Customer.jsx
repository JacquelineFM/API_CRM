import { useNavigate } from "react-router-dom";

const Customer = ({ customer, handleDelete }) => {
  const navigate = useNavigate();
  const { name, company, email, phone, notes, id } = customer;

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{name}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          <span className="uppercase font-bold">Email: </span>
          {email}
        </p>
        <p className="text-gray-900 whitespace-no-wrap">
          <span className="uppercase font-bold">Tel: </span>
          {phone}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{company}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex flex-row items-center space-x-5">
          <button
            type="button"
            className="p-2 text-yellow-600 hover:text-yellow-800 w-full text-center font-bold uppercase"
            onClick={() => navigate(`/customers/${id}`)}
          >
            View
          </button>
          <button
            type="button"
            className="p-2 text-blue-600 hover:text-blue-800 w-full text-center font-bold uppercase"
            onClick={() => navigate(`/customers/edit/${id}`)}
          >
            Edit
          </button>
          <button
            type="button"
            className="p-2 text-red-600 hover:text-red-800 w-full text-center font-bold uppercase"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Customer;
