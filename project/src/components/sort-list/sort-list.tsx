import { OffersTypesOfSort } from '../../const';
import cn from 'classnames';

type SortCardsProps = {
  selectedSortType: string;
  onChangeSortType: (currentCity: OffersTypesOfSort) => void;
  isSortingOpened: boolean;
}

function SortCards({selectedSortType, onChangeSortType, isSortingOpened}: SortCardsProps): JSX.Element {
  return (
    <ul
      className= {
        cn(
          'places__options',
          'places__options--custom',
          {
            'places__options--opened': isSortingOpened,
          })
      }
    >
      {
        Object.values(OffersTypesOfSort).map((sortType) => (
          <li
            key = {sortType}
            className = {
              cn(
                'places__option',
                {
                  'places__option--active': sortType === selectedSortType
                }
              )
            }
            tabIndex = {0}
            onClick={() => onChangeSortType(sortType)}
          >
            {sortType}
          </li>
        ))
      }
    </ul>
  );
}

export {SortCards};


