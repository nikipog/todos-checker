import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/NotFoundPage';
import { AppRoute } from '../../const';
import TodosPage from '../../pages/todos-page/todos-page';


function App(): JSX.Element {
  return (
    <BrowserRouter future={{
      v7_startTransition: true,
    }}>
      <Layout>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage />} />
          <Route path={AppRoute.CheckTodos} element={<TodosPage />} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

