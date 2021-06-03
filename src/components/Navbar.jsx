import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <ul>
      <Link to="/">
        <li>HomePage</li>
      </Link>

      <Link to="/tools">
        <li>Tools</li>
      </Link>

      <Link to="/mychoices">
        <li>My Choices</li>
      </Link>

      <Link to="/websites">
        <li>Website to follow</li>
      </Link>

      <a href="http://seytech.co" target="_blank" rel="norefferer">
        <li>Seytech</li>
      </a>
    </ul>
  );
};
export default Navbar;
