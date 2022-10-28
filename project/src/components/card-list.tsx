import React, { HTMLAttributes } from 'react';
import CardInList from './card';
import { Offers } from '../types/offer';
import {CardClassName} from '../const';
import classNames from 'classnames';

type CardsProps = {
  offers: Offers;
} & Pick < HTMLAttributes<HTMLDivElement>, 'className'>

function CardsList({offers, className} : CardsProps) : JSX.Element{
  const [selected, setSelected] = React.useState(0);
  const a = '__places-list';
  const b = 'near-places__list';


  return (
    /*<div className={`${className === CardClassName.MainPage ? `${className}__places-list` : 'near-places__list'} places__list tabs__content`}>*/
    <div className={`${className === CardClassName.MainPage ? classNames(`${className}`, a) : classNames(`${className ?? ''}`, b)} places__list tabs__content`}>
      {offers.map((offer) => (
        <CardInList
          key={offer.id}
          offer={offer}
          className={className}
          onMouseOver={() => {
            if(selected !== offer.id)
            {setSelected(offer.id);}
          }}
          onMouseLeave={() => setSelected(0)}
        />
      ))}
    </div>
  );
}


export default CardsList;
