import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="h-[calc(100vh-4rem)] sm:mx-4 md:mx-6 lg:mx-10 bg-slate-300 overflow-auto">
        <div className="lg:px-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
