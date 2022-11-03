import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT} from '../const';
import useMap from '../hooks/use-map';
import { OfferCity, Offers } from '../types/offer';


const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


type MapProps = {
  city: OfferCity;
  points: Offers;
};

function Map({city, points}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const {location} = point;
        leaflet
          .marker({
            lat: location.latitude,
            lng: location.longitude
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export {Map};
