import React from 'react';
import CardInList from './card';
import { Offers } from '../types/offer';
import {CardClassName} from '../const';

type CardsProps = {
  offers: Offers;
  cardClassName: string;
}

function CardsList({offers, cardClassName} : CardsProps) : JSX.Element{
  const [selected, setSelected] = React.useState(0);
  const listClassName = () => cardClassName === CardClassName.MainPage ? `${cardClassName}__places-list` : 'near-places__list';
  return (
    <div className={`${listClassName()} places__list tabs__content`}>
      {offers.map((offer) => (
        <CardInList
          key={offer.id}
          offer={offer}
          cardClassName={cardClassName}
          onMouseOver={() => {
            if(selected !== offer.id) {setSelected(offer.id);}
          }}
          onMouseLeave={() => setSelected(0)}
        />
      ))}
    </div>
  );
}


export default CardsList;
