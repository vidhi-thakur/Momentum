import "./App.css";
import Appbar from "./components/layout/Appbar";
import Sidebar from "./components/layout/Sidebar";
import KanbanBoard from "./features/kanban-board/components/layout/KanbanBoard";

function App() {
  return (
    <>
      <section className="left-sidebar">
        <Sidebar />
      </section>
      <section className="main-content">
        <Appbar />
        <KanbanBoard />
      </section>
    </>
  );
}

export default App;
