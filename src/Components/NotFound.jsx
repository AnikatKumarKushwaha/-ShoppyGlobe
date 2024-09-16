import { Link, useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError(); // Access the error

  return (
    <div className="h-[100vh] flex justify-center items-center flex-col">
      <h1 className="text-2xl text-slate-600">
        Oops! Something went wrong 🥲.
      </h1>
      {/* Display the error specifically */}
      <p className="text-xl text-gray-400 mt-4">
        {error?.statusText || error?.message || "Page not found."}
      </p>
      <Link
        to="/"
        className="px-5 py-2 bg-green-500 text-green-50 rounded-md shadow-md mt-5"
      >
        Home
      </Link>
    </div>
  );
}
