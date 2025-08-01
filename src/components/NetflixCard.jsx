export const NetflixCard = () => {
  const name = "Harry Potter and the Philosopher's Stone";
  const summary =
    "Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary lif and enters a world of magic, he finds trouble awaiting him.";
  const seriesGenre = () => {
    const genre = "Adventure";
    return genre;
  }
  let age = 25;

  return (
    <div>
      <img src="harry-potter1.jpg" alt="harry-potter1.jpg" />
      <h2>Name: {name} </h2> {/*dynamic values in jsx*/}
      <h3>Rating: {6 + 2.2} </h3> {/*expression*/}
      <p>Summary: {summary} </p>
      <p>Genre: {seriesGenre()} </p> {/*function*/}
      <button> {(age>=18) ? "Watch Now" : "Not Available"} </button>
    </div>
  );
};
