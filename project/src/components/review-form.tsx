import React from 'react';
import {FormEvent, ChangeEvent} from 'react';
import { ReviewFormRating } from './review-form-rating';

function ReviewForm(): JSX.Element{
  const [reviewForm, setReviewForm] = React.useState({rating: 0, review: '' });

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  const handleInputTextAreaChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;

    setReviewForm({
      ...reviewForm,
      [name]: value
    });
  };

  const getRatingStars = () => {
    const ratingIndexes = [];
    for (let i = 5; i > 0; i--) {
      ratingIndexes.push(<ReviewFormRating key={i} index={i} onChange={handleInputTextAreaChange}/>);
    }
    return ratingIndexes;
  };

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
        onChange={handleInputTextAreaChange}
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
          disabled = {!reviewForm.review || !reviewForm.rating}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export {ReviewForm};

