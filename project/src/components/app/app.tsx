import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login';
import Property from '../../pages/property';
import NotFound from '../../pages/not-found';


type AppCardsProps = {
  cardsCount: number;
}
function App({ cardsCount }: AppCardsProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/'>
          <Route index element ={<MainPage cardsCount={cardsCount} />}/>
          <Route path ='/login' element = {<Login/>} />
          <Route path ='/offer/:id' element ={<Property/>} />
        </Route>
        <Route path = '*' element = {<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
