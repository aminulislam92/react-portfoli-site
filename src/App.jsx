import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">
      <Navbar />
      <main className="mt-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
