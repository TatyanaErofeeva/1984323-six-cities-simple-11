import { AuthorizationStatus } from '../../const';
import {useAppSelector} from '../../hooks/index';
import { ReviewCard } from '../review-card/review-card';
import {ReviewForm} from '../review-form/review-form';
import { getAuthorizationStatus } from '../../store/selectors';
import {getComments} from '../../store/selectors';

type ReviewsSectionProps = {
  offerId: number;
}

function PropertyReview({offerId}: ReviewsSectionProps): JSX.Element{
  const authorisationStatus = useAppSelector(getAuthorizationStatus);
  const reviewsLoaded = useAppSelector(getComments);
  return(
    <section className="property__reviews reviews">
      <h2
        className="reviews__title"
      >
        Reviews &middot;
        <span
          className="reviews__amount"
        >
          {reviewsLoaded.length}
        </span>
      </h2>
      <ul className="reviews__list">
        {reviewsLoaded.map((item) => <ReviewCard key={item.id} review={item} />)}
      </ul>
      {authorisationStatus === AuthorizationStatus.Auth && (
        <ReviewForm offerId={offerId}/>
      )}
    </section>
  );
}

export {PropertyReview};
