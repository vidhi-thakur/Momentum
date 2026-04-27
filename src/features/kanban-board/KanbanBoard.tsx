import React from "react";
import "./KanbanBoard.css";

function KanbanBoard() {
  return (
    <div className="kanbanBoard">
      <React.Fragment>
        {/* search */}

        {/* filter */}
      </React.Fragment>
      <section className="col-container">
        <div className="col">
          <p>To Do</p>
        </div>
        <div className="col">
          <p>In Progress</p>
        </div>
        <div className="col">
          <p>Done</p>
        </div>
      </section>
    </div>
  );
}

export default KanbanBoard;
