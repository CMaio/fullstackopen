const Filter = ({ filterName, handleNewFilter }) => {
  return (
    <form>
      <div>
        filter shown with:{" "}
        {<input value={filterName} onChange={handleNewFilter} />}
      </div>
    </form>
  );
};

export default Filter;
