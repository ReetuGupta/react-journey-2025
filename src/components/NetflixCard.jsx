import HPData from '../api/HPData.json'

export const NetflixCard = () => {
  return (
    <div>
      {HPData.map((currentElem) => {
        return(
          <div key={currentElem.id}>
          <img 
            src= {currentElem.img_url} 
            alt={currentElem.name} 
            width="40%" 
            height= "40%" 
          />
          <h2>Name: {currentElem.name} </h2> 
          <h3>Rating: {currentElem.rating} </h3> 
          <p>Year: {currentElem.year} </p>
          <p>Summary: {currentElem.description} </p>
          <p>Genre: {currentElem.genre} </p> 
          <a href= {currentElem.watch_url} target="_blank">
            <button> Watch Now </button>
          </a>
          </div>
        )
        })
      }
    </div>
  );
};
