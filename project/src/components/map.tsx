import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../const';
import useMap from '../hooks/use-map';
import { OfferCity, Offers } from '../types/offer';


const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [20, 40]
});


type MapProps = {
  classMap: string;
  city: OfferCity;
  points: Offers;
  selectedPointId: number |undefined;
}

function Map({classMap, city, points, selectedPointId}: MapProps): JSX.Element {
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
          })
          .setIcon(
            point.id === selectedPointId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPointId, city]);

  return (
    <section className={`${classMap}__map map`} ref={mapRef}></section>
  );
}

export {Map};
