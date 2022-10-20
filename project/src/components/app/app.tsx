import MainPage from '../../pages/main-page/main-page';

type AppCardsProps = {
  cardsCount: number;
}

function App({cardsCount}: AppCardsProps): JSX.Element {
  return (
    <MainPage cardsCount={cardsCount}/>
  );
}

export default App;
