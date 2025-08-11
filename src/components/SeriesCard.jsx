export const SeriesCard = (props) => {
  //console.log(props);
  const { img_url, name, rating, year, description, genre, watch_url } =
    props.data;
  return (
    <div className="rounded-md shadow-sm shadow-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105 relative">
      <img src={img_url} alt={name} className="rounded-t-md" />

      <div className="p-4 tracking-wide">
        <h2 className="text-center font-semibold text-2xl pb-4">{name} </h2>
        <div className="flex justify-evenly pb-2 italic font-medium">
          <h3
            className={`px-2 py-1 rounded-md
            ${rating > 7.5 ? "bg-green-500 text-white" : "bg-yellow-300 text-black"}`}>
            Rating: {rating}
          </h3>
          <p>Year: {year} </p>
        </div>
        <p className="text-justify pb-2">{description} </p>
        <p className="">
          <span className="font-medium italic pb-2">Genre:</span> {genre.join(", ")}
        </p>
      </div>

      <a href={watch_url} target="_blank" rel="noopener noreferrer" className="w-full text-center absolute bottom-0 cursor-pointer bg-gray-400 hover:bg-gray-300 text-black font-bold px-4 py-2 transition-all duration-100">
        <button className="">
        Watch Now
        </button>
      </a>
    </div>
  );
};
