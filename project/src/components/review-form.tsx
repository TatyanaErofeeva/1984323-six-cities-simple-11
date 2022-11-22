import React from 'react';
import {FormEvent, ChangeEvent} from 'react';
import { ReviewFormRating} from './review-form-rating';
import { STARS_MAX } from '../util';
import {commentPostAction} from '../store/api-actions';
import { useAppDispatch} from '../hooks';
import {useAppSelector} from '../hooks/index';

type ReviewFormProps = {
  offerId: number;
}

function ReviewForm({offerId} : ReviewFormProps): JSX.Element{
  const isCommentLoading = useAppSelector((state) => state.loaders['comment-post']);
  const [reviewForm, setReviewForm] = React.useState({rating: 0, review: '' });
  const dispatch = useAppDispatch();
  const resetFormData = () => setReviewForm({...reviewForm, rating: 0, review: '' });

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(commentPostAction({hotelId: offerId, comment: reviewForm.review, rating: reviewForm.rating, resetFormData: resetFormData }));
  };
  const handleFormChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;

    setReviewForm({
      ...reviewForm,
      [name]: value
    });
  };

  const getRatingStars = () => {
    const ratingIndexes = [];
    for (let i = STARS_MAX; i > 0; i--) {
      ratingIndexes.push(<ReviewFormRating key={i} index={i} onChange={handleFormChange}/>);
    }
    return ratingIndexes;
  };
  const canSubmitForm = reviewForm.review && reviewForm.rating;

  return (
    <form onSubmit={handleFormSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {getRatingStars()}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFormChange}
        disabled = {isCommentLoading}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">
            rating
          </span>
            and describe your stay with at least
          <b className="reviews__text-amount">
            50 characters
          </b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled = {isCommentLoading || !canSubmitForm}
        >
          Submit
        </button>

      </div>
    </form>
  );
}

export {ReviewForm};

