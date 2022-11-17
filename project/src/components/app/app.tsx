import {Route, Routes} from 'react-router-dom';
import { AppRoute} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login';
import Property from '../../pages/property';
import NotFound from '../../pages/not-found';
import {useAppSelector} from '../../hooks';
import { Reviews } from '../../types/review';
import HistoryRouter from '../history-route';
import browserHistory from '../../browser-history';

type AppProps = {
  reviews: Reviews;
};

function App({reviews}:AppProps): JSX.Element {
  const offers = useAppSelector((state) => state.offersList);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path = {AppRoute.Root}
        >
          <Route
            index element ={<MainPage offers={offers}/>}
          />
          <Route
            path ={AppRoute.Login}
            element = {<Login/>}
          />
          <Route
            path ={AppRoute.Property}
            element ={<Property offers={offers} reviews={reviews}/>}
          />
        </Route>
        <Route path = '*' element = {<NotFound/>}/>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
