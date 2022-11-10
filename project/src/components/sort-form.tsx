import { SortCards } from './sort-list';
import {useAppSelector, useAppDispatch} from '../hooks/index';
import { sortCards } from '../store/action';


function SortCardsForm(){
  const selectedSortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();
  const onCardSortHandler = (sortType: string) => {
    dispatch(sortCards(sortType));
  };
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {selectedSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortCards selectedSortType={selectedSortType} onChangeSortType={onCardSortHandler}/>
    </form>
  );
}

export default SortCardsForm;

