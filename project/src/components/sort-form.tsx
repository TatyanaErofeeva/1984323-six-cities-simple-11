import { SortCards } from './sort-list/sort-list';
import { useState } from 'react';
import {useAppSelector, useAppDispatch} from '../hooks/index';
import { OffersTypesOfSort } from '../const';
import { getSortType } from '../store/selectors';
import { sortCards } from '../store/app-process/app-process';


function SortCardsForm(){
  const [isSortingOpened, setSortingOpened] = useState(false);
  const selectedSortType = useAppSelector(getSortType);
  const selectingStartedByClick = () => {
    setSortingOpened(!isSortingOpened);
  };
  const dispatch = useAppDispatch();
  const onCardSortHandler = (sortType: OffersTypesOfSort) => {
    dispatch(sortCards(sortType));
    setSortingOpened(false);
  };
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={selectingStartedByClick}>
        {selectedSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortCards selectedSortType={selectedSortType} onChangeSortType={onCardSortHandler} isSortingOpened = {isSortingOpened}/>
    </form>
  );
}

export default SortCardsForm;

