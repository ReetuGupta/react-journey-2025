export default function App() {
  return (
  <>
    <NetflixCard/>
    <NetflixCard/>
    <NetflixCard/>
    <NetflixCard/>
  </>
  );
}

const NetflixCard = () => {
  return (
    <div>
      <img src="harry-potter1.jpg" alt="harry-potter1.jpg"/>
      <h2>Harry Potter and the Philosopher's Stone</h2>
      <h3>Rating: 8.2</h3>
      <p>
        Harry Potter, an eleven-year-old orphan, discovers that he is a wizard
        and is invited to study at Hogwarts. Even as he escapes a dreary life
        and enters a world of magic, he finds trouble awaiting him.
      </p>
    </div>
  );
}
