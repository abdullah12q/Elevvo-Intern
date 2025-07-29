import { useField } from "formik";

export default function CustomInput({ label, textArea, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={field.name} className="text-gray-300 font-semibold">
        {label}
      </label>
      {textArea ? (
        <textarea
          id={field.name}
          {...field}
          {...props}
          rows="1"
          className={`px-4 py-2 text-white bg-purple-950 rounded-md border placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-all duration-500 resize-none focus:h-32 h-12 ${
            meta.touched && meta.error
              ? "border-red-500 focus:ring-red-500"
              : "border-purple-400 focus:ring-purple-500"
          }`}
        />
      ) : (
        <input
          id={field.name}
          {...field}
          {...props}
          className={`px-4 py-2 text-white bg-purple-950 rounded-md border placeholder:text-gray-500 focus:outline-none focus:ring transition-all duration-500 ${
            meta.touched && meta.error
              ? "border-red-500 focus:ring-red-500"
              : "border-purple-400 focus:ring-purple-500"
          }`}
        />
      )}
      {meta.touched && meta.error && (
        <p className="text-red-500 text-sm">{meta.error}</p>
      )}
    </>
  );
}
