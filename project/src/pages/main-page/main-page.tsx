import CardsList from '../../components/card-list';
import MainHeader from '../../components/main-header';
import { Offers } from '../../types/offer';
import {Map} from '../../components/map';
import {CardPage, CitiesList} from '../../const';
import CityList from '../../components/city-list';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { cityChange } from '../../store/action';
import SortCardsForm from '../../components/sort-form';
import {getSortedCards} from '../../util';
import {LoadingScreen} from '../../pages/loading-screen';


type MainPageProps = {
  offers: Offers;
}

function MainPage({offers}: MainPageProps): JSX.Element {
  const currentCityName = useAppSelector((state) => state.city);
  const selectedOfferId = useAppSelector((state) => state.selectedOfferId);
  const selectedSortType = useAppSelector((state) => state.sortType);
  const offersByFilteredCity = offers ? offers.filter((offer) => offer.city.name === currentCityName) : [];
  const dispatch = useAppDispatch();
  const isOffersListLoaded = useAppSelector((state) => state.isOffersListLoaded);

  if (isOffersListLoaded) {
    return (
      <LoadingScreen />
    );
  }
  const onCityChageHandler = (city: string) => {
    dispatch(cityChange(city));
  };
  const sortedOffers: Offers = offersByFilteredCity.length > 0 ? getSortedCards(offersByFilteredCity, selectedSortType) : [];
  const cityName = CitiesList.find((city) => city.name === currentCityName) || offers[0].city;

  return (
    <>
      < MainHeader/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList selectedCity={currentCityName} onCityChange={onCityChageHandler}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b
                className="places__found"
              >
                {offersByFilteredCity.length} places to stay in {currentCityName}
              </b>
              <SortCardsForm/>
              <CardsList offers = {sortedOffers} className={CardPage.MainPage}/>
            </section>
            <div className="cities__right-section">
              <Map
                classMap={CardPage.MainPage}
                city={cityName}
                points={offersByFilteredCity}
                selectedPointId = {selectedOfferId}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainPage;


