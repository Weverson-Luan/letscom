/**
 * IMPORTS
 */

type ISelectPaginationProps = {
  itemsPerPage: number;
  handleItemsPerPageChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

export function SelectPagination({
  itemsPerPage,
  handleItemsPerPageChange,
}: ISelectPaginationProps) {
  return (
    <div className="mr-4">
      <label htmlFor="itemsPerPage" className="mr-2 text-gray-700">
        Itens por página:
      </label>
      <select
        id="itemsPerPage"
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
        className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-sm text-gray-700 bg-white"
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={30}>30</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
}
