import { AppRoute, CitiesList } from '../const';
import { Link } from 'react-router-dom';
import { Offers } from '../types/offer';
import cn from 'classnames';

type CityListProps = {
  selectedCity: string;
  onCityChange: (currentCity: string) => void;
  offers: Offers;
}

function CityList({selectedCity, onCityChange, offers} : CityListProps) : JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CitiesList.map((city) => (
            <li key={city.name} className="locations__item">
              <Link
                className = {
                  cn(
                    'locations__item-link',
                    'tabs__item',
                    {
                      'tabs__item--active': selectedCity === city.name
                    })
                }
                onClick={() => onCityChange(city.name)}
                to={AppRoute.Root}
              >
                <span>
                  {city.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityList;
