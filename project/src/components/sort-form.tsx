import { SortCards } from './sort-list';
import { useState } from 'react';
import {useAppSelector, useAppDispatch} from '../hooks/index';
import { sortCards } from '../store/action';
import { OffersTypesOfSort } from '../const';


function SortCardsForm(){
  const [isSortingOpened, setSortingOpened] = useState(false);
  const selectedSortType = useAppSelector((state) => state.sortType);
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

