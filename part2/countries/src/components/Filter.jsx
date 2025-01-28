const Filter = ({ filterName, handleNewFilter }) => {
  return (
    <form>
      <div>
        Find countries:{" "}
        {<input value={filterName} onChange={handleNewFilter} />}
      </div>
    </form>
  );
};

export default Filter;
