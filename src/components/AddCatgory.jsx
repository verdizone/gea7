const AddCatgory = ({
  categories,
  setCategories,
  inputValue,
  setInputValue,
}) => {
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (inputValue.trim().length < 1) return;
    if (categories.includes(inputValue.trim())) return;
    setCategories([inputValue, ...categories]);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Ingresar Busqueda"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};

export default AddCatgory;
