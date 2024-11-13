import { Link } from 'react-router-dom';

function Header(): JSX.Element {
  return (
    <header>
      <nav>
        <Link to="../">Home</Link> | <Link to="../check-todos">Check Todos</Link>
      </nav>
    </header>
  );
}

export default Header;
