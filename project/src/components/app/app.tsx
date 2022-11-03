import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login';
import Property from '../../pages/property';
import NotFound from '../../pages/not-found';
import { Offers } from '../../types/offer';
import { Reviews } from '../../types/review';


type AppCardsProps = {
  offers: Offers;
  reviews: Reviews;
}
function App({offers, reviews}: AppCardsProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Root}
        >
          <Route
            index element ={<MainPage offers ={offers} />}
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
