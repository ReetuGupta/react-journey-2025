import HPData from '../api/HPData.json';
import { SeriesCard } from './SeriesCard';

export const Series = () => {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-rows-auto place-content-center gap-8 p-4 w-4/5 mx-auto '>
      {HPData.map((currentElem) => (<SeriesCard key = {currentElem.id} data ={currentElem} />))}
    </div>
  );
};
