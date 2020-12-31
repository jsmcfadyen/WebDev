const Planet = ({ name, population }) => {
  return (
    <>
      <div className="p-2">
        <p>name: {name}</p>
        <p>population: {population}</p>
      </div>
    </>
  );
};
export default Planet;
