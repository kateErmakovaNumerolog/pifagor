export const SubmitButton = ({ onSubmit, value }) => {
  return (
    <button
      type="submit"
      onClick={onSubmit}
      disabled={!value}
      placeholder="дд.мм.рррр"
      className="ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-blue-400"
    >
      Розрахувати
    </button>
  );
};
