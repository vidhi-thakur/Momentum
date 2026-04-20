import "./App.css";
import Appbar from "./components/layout/Appbar";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <>
      <section id="left-sidebar">
        <Sidebar />
      </section>
      <section id="main-content">
        <Appbar />
      </section>
    </>
  );
}

export default App;
