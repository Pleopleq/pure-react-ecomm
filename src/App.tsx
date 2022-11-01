import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./styles/app.css";

function App() {
  return (
    <main>
      <div className='App'>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
      </div>
    </main>
  );
}

export default App;
