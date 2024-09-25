/**
 * IMPORTS
 */

const SubNavs = () => {
  return (
    <div className="flex space-x-4 h-18 w-18">
      <button className="px-4 py-2 text-sm font-medium text-yellow-600 border border-yellow-600 rounded-full bg-yellow-50 hover:bg-yellow-100">
        Baixar Cargas
      </button>
      <button className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-full bg-gray-50 hover:bg-gray-100">
        Minhas Tarefas
      </button>
    </div>
  );
};

/**
 * EXPORTS
 */
export { SubNavs };
