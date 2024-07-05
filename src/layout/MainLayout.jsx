import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

function MainLayout() {
  return (
    <div>
      <header className="m-2 shadow-lg rounded-2xl">
        {" "}
        <Navbar />
      </header>

      <main className="px-10">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
