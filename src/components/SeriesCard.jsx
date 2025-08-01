export const SeriesCard = (props) => {
    console.log(props);
    return(
          <>
            <img 
                src= {props.currentElem.img_url} 
                alt={props.currentElem.name} 
                width="40%" 
                height= "40%" 
            />
            <h2>Name: {props.currentElem.name} </h2> 
            <h3>Rating: {props.currentElem.rating} </h3> 
            <p>Year: {props.currentElem.year} </p>
            <p>Summary: {props.currentElem.description} </p>
            <p>Genre: {props.currentElem.genre} </p> 
            <a href= {props.currentElem.watch_url} target="_blank">
                <button> Watch Now </button>
            </a>
            <br/>
          </>
        )
}