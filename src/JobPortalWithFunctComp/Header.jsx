import { Link } from "react-router-dom";

const HeaderView = () => {
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <Link to="/"><button>Home</button></Link>
      <Link to="/selected"><button>Selected Users</button></Link>
      <Link to="/rejected"><button>Rejected Users</button></Link>
    </div>
  );
};
export default HeaderView;