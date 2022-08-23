const Alert = ({ children }) => {
  return (
    <div
      class="bg-red-200 border-red-600 text-red-600 border-l-4 p-4 my-4 text-sm"
      role="alert"
    >
      <p class="font-bold">{children}</p>
    </div>
  );
};

export default Alert;
