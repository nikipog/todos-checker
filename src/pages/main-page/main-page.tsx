import { Link } from 'react-router-dom';

function MainPage(): JSX.Element {
  return (
    <div className="main-page">
      <h1 className="main-page__title">Welcome to the Main Page</h1>

      <Link to="/check-todos" className="button-round">
        <span className="main-page__button-go">GO</span>
        <span className="main-page__button-text">To Check Todos</span>
      </Link>
    </div>
  );
}

export default MainPage;
