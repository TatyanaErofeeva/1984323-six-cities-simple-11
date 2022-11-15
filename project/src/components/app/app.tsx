import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login';
import Property from '../../pages/property';
import NotFound from '../../pages/not-found';
import {useAppSelector} from '../../hooks';
import { Reviews } from '../../types/review';
import {LoadingScreen} from '../../pages/loading-screen';

type AppProps = {
  reviews: Reviews;
};

function App({reviews}:AppProps): JSX.Element {
  const offers = useAppSelector((state) => state.offersList);

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
