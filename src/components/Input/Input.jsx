export const Input = ({ onChange, value }) => {
  return (
    <form className="flex max-w-sm" onChange={onChange}>
      <input
        type="text"
        placeholder="ДД.MM.РРРР"
        id="date"
        value={value}
        style={{ width: 110 }}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                   placeholder-gray-500 dark:placeholder-gray-400"
        data-date-format="DD MMMM YYYY"
        required
      />
    </form>
  );
};
