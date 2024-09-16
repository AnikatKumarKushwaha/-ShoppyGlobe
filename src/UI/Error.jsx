export default function Error() {
  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center">
      <div className="text-2xl text-slate-600">
        Oops! Something went wrong 😕
      </div>
      <p className="text-xl text-gray-400 mt-4">
        Please check your internet connection, or try again later. It might be
        an issue with our servers.
      </p>
    </div>
  );
}
