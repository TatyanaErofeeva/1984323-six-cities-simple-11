import { AuthorizationStatus } from '../const';
import {useAppSelector} from '../hooks/index';
import { ReviewCard } from '../components/review-card';
import {ReviewForm} from '../components/review-form';

type ReviewsSectionProps = {
  offerId: number;
}

function PropertyReview({offerId}: ReviewsSectionProps): JSX.Element{
  const authorisationStatus = useAppSelector((state) => state.authorizationStatus);
  const reviewsLoaded = useAppSelector((state) => state.commentsList);
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
