import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Alert from "./Alert";
import Spinner from "./Spinner";

const FormCustomer = ({ customer, loading }) => {
  const navigate = useNavigate();

  /* A validation schema for the form. */
  const newCustomerSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "The name is very short")
      .max(20, "The name is very long")
      .required("Customer name is required!"),
    company: Yup.string().required("Company name is required!"),
    email: Yup.string()
      .email("Email is invalid")
      .required("Email is required!"),
    phone: Yup.number()
      .positive("Number is invalid")
      .integer("Number is invalid")
      .typeError("Number is invalid"),
  });

  /**
   * If the customer has an id, then update the customer, otherwise create a new customer.
   */
  const handleSubmit = async (values) => {
    try {
      let response;

      if (customer.id) {
        // Edit customer
        const URL = `http://localhost:4000/customers/${customer.id}`;
        response = await fetch(URL, {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        // New customer
        const URL = "http://localhost:4000/customers";
        response = await fetch(URL, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      await response.json();
      navigate("/customers");
    } catch (error) {
      console.log(error);
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className="bg-white mt-8 px-5 py-12 rounded-xl shadow-md md:w-4/5 mx-auto">
      <div className="mb-10 text-2xl font-bold text-center text-gray-800 uppercase">
        {customer?.name ? "Edit customer" : "Create a new customer"}
      </div>
      <Formik
        initialValues={{
          name: customer?.name ?? "",
          company: customer?.company ?? "",
          email: customer?.email ?? "",
          phone: customer?.phone ?? "",
          notes: customer?.notes ?? "",
        }}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={newCustomerSchema}
      >
        {({ errors, touched }) => (
          <Form className="mt-6">
            <div className="grid max-w-2xl grid-cols-2 gap-6 m-auto">
              <div className="col-span-2 lg:col-span-1">
                <div className="relative">
                  <Field
                    id="name"
                    type="text"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    placeholder="Name"
                    name="name"
                  />
                  {errors.name && touched.name && <Alert>{errors.name}</Alert>}
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className="relative">
                  <Field
                    id="company"
                    type="text"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    placeholder="Company"
                    name="company"
                  />
                  {errors.company && touched.company && (
                    <Alert>{errors.company}</Alert>
                  )}
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <Field
                    id="email"
                    type="email"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    placeholder="Email"
                    name="email"
                  />
                  {errors.email && touched.email && (
                    <Alert>{errors.email}</Alert>
                  )}
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className="relative">
                  <Field
                    id="phone"
                    type="tel"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    placeholder="Phone"
                    name="phone"
                  />
                  {errors.phone && touched.phone && (
                    <Alert>{errors.phone}</Alert>
                  )}
                </div>
              </div>
              <div className="col-span-2">
                <div className="relative">
                  <Field
                    as="textarea"
                    id="notes"
                    type="text"
                    className="flex-1 appearance-none border border-gray-300 w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent h-40"
                    placeholder="Notes..."
                    name="notes"
                  />
                </div>
              </div>
              <div className="col-span-2 text-right">
                <input
                  type="submit"
                  value={customer?.name ? "Edit" : "Add Customer"}
                  className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg uppercase cursor-pointer"
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

FormCustomer.defaultProps = {
  customer: {},
  loading: false,
};

export default FormCustomer;
