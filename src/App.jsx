import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-gray-900 text-white flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <Navbar />
      </main>
    </div>
  );
}

export default App;
