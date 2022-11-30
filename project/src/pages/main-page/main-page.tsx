import CardsList from '../../components/card-list';
import MainHeader from '../../components/main-header';
import { Offers } from '../../types/offer';
import {Map} from '../../components/map';
import {CardPage} from '../../const';
import { cityChange } from '../../store/app-process';
import CityList from '../../components/city-list';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import SortCardsForm from '../../components/sort-form';
import {LoadingScreen} from '../../pages/loading-screen';
import {getOffersLoadingStatus, getCity, getSelectedOfferId, selectCurrentOffers} from '../../store/selectors';
import {MainEmpty} from '../../components/main-empty';

type MainPageProps = {
  offers: Offers;
}

function MainPage({offers}: MainPageProps): JSX.Element {
  const currentCityName = useAppSelector(getCity);
  const selectedOfferId = useAppSelector(getSelectedOfferId);
  const dispatch = useAppDispatch();
  const isOffersListLoaded = useAppSelector(getOffersLoadingStatus);
  const currentOffers = useAppSelector(selectCurrentOffers);

  if (isOffersListLoaded) {
    return (
      <LoadingScreen />
    );
  }
  const onCityChageHandler = (city: string) => {
    dispatch(cityChange(city));
  };

  return (
    <>
      < MainHeader/>
      <main className={`page__main page__main--index${currentOffers.length > 0 ? '' : ' page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CityList selectedCity={currentCityName.name} onCityChange={onCityChageHandler}/>
        <div className="cities" style={{height: '700px'}}>
          {currentOffers.length ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b
                  className="places__found"
                >
                  {currentOffers.length} places to stay in {currentCityName.name}
                </b>
                <SortCardsForm/>
                <CardsList offers = {currentOffers} className={CardPage.MainPage}/>
              </section>
              <div className="cities__right-section" style={{maxHeight:800}}>
                <Map
                  classMap={CardPage.MainPage}
                  city={currentCityName}
                  points={currentOffers}
                  selectedPointId = {selectedOfferId}
                />
              </div>
            </div>
            : <MainEmpty cityName= {currentCityName.name}/>}
        </div>
      </main>
    </>
  );
}

export default MainPage;


