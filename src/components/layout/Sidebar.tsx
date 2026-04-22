import "../styles/Sidebar.css";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">
      <img src="/logo.png" alt="avatar" width={45} />
      </Link>
    </div>
  );
}

export default Sidebar;