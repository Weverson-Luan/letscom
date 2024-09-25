/**
 * IMPORTS
 */

type IOptionProps = {
  title: string;
  value: string;
};

const Options = ({ title, value }: IOptionProps) => {
  return (
    <div className="w-[240px] bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 cursor-pointer hover:bg-slate-100">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full border-4 border-yellow-500 flex items-center justify-center">
          <i className="fas fa-arrow-up text-yellow-500"></i>
        </div>
      </div>
      <div>
        <div className="text-gray-500">{title}</div>
        <div className="text-black font-bold">{value}</div>
      </div>
    </div>
  );
};

/**
 * EXPORTS
 */
export { Options };
