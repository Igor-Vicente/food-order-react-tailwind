const Input = ({ label, id, ...props }) => {
  return (
    <p className="my-2 flex flex-col">
      <label htmlFor={id} className="font-semibold mb-2">
        {label}
      </label>
      <input id={id} name={id} required {...props} className="max-w-80 p-1 rounded" />
    </p>
  );
};

export default Input;
