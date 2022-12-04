import {Route, Routes} from 'react-router-dom';
import { AppRoute} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login';
import Property from '../../pages/property';
import NotFound from '../../pages/not-found/not-found';
import {useAppSelector} from '../../hooks';
import { getOffers } from '../../store/selectors';

function App(): JSX.Element {
  const offers = useAppSelector(getOffers);

  return (
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
          element ={<Property/>}
        />
      </Route>
      <Route path = '*' element = {<NotFound/>}/>
    </Routes>
  );
}

export default App;
