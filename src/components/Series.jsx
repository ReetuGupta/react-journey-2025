import HPData from '../api/HPData.json';
import { SeriesCard } from './SeriesCard';

export const Series = () => {
  return (
    <>
      {HPData.map((currentElem) => (<SeriesCard key = {currentElem.id} currentElem ={currentElem} />))}
    </>
  );
};
