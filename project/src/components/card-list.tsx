import React, { HTMLAttributes } from 'react';
import CardInList from './card';
import { Offers } from '../types/offer';
import {CardPage} from '../const';
import cn from 'classnames';

type CardsProps = {
  offers: Offers;
  setSelectedOffer?: (pointId?: number|undefined) => void;
} & Pick < HTMLAttributes<HTMLDivElement>, 'className'>


function CardsList({offers, className: cardPage, setSelectedOffer} : CardsProps) : JSX.Element{

  return (
    <div
      className = {
        cn(
          'places__list',
          'tabs__content',
          {
            [`${cardPage ?? ''}__places-list`]: cardPage === CardPage.MainPage,
            'near-places__list': cardPage === CardPage.PropertyPage
          })
      }
    >
      {offers.map((offer) => (
        <CardInList
          key={offer.id}
          offer={offer}
          className={cardPage}
          onMouseOver={() => setSelectedOffer?.(offer.id)}
          onMouseLeave={() => setSelectedOffer?.()}
        />
      ))}
    </div>
  );
}

export default CardsList;
