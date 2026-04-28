import Separator from "../../../../components/ui/Separator";
import "../styles/KanbanCard.css";
import { GrAttachment } from "react-icons/gr";
import { MdOutlineInsertComment } from "react-icons/md";

function KanbanCard() {
  return (
    <div className="kanbanCard">
      <div>Heading</div>
      <Separator />
      <footer className="footer">
        <div className="lhs">
          <div>
            <GrAttachment /> <span>2</span>
          </div>
          <div>
            <MdOutlineInsertComment /> <span>2</span>
          </div>
        </div>

        <div className="assignedUser" />
      </footer>
    </div>
  );
}

export default KanbanCard;
