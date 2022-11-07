import React, { HTMLAttributes } from 'react';
import CardInList from './card';
import { Offers } from '../types/offer';
import {CardPage} from '../const';
import cn from 'classnames';

type CardsProps = {
  offers: Offers;
  onPointHover?: (PointId: number|undefined) => void;
} & Pick < HTMLAttributes<HTMLDivElement>, 'className'>

function CardsList({offers, className: cardPage, onPointHover} : CardsProps) : JSX.Element{
  const [selected, setSelected] = React.useState(0);

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
          onMouseOver={() => {
            if(selected !== offer.id)
            {setSelected(offer.id);}
          }}
          onMouseLeave={() => setSelected(0)}
          onPointHover = {onPointHover}
        />
      ))}
    </div>
  );
}

export default CardsList;
