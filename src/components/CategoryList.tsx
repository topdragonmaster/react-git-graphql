import classNames from "classnames";

interface IProps {
  categories: Array<{
    label: string;
    count: number;
    name: string;
  }>;
  selected?: string;
  onChange?: (name: string) => void;
}

const CategoryList: React.FC<IProps> = ({ categories, selected, onChange }) => {
  return (
    <nav className="flex flex-1 flex-col" aria-label="Sidebar">
      <ul role="list" className="-mx-2 space-y-1">
        {categories.map((item) => (
          <li key={item.name}>
            <div
              data-testid={item.name}
              className={classNames(
                item.name === selected
                  ? "text-white"
                  : "text-white hover:text-indigo-600 hover:bg-gray-50",
                "group flex cursor-pointer flex-row space-between p-2 pl-3 text-sm leading-6 font-semibold"
              )}
              onClick={() => onChange && onChange(item.name)}
            >
              {item.label}

              <span
                data-testid={`${item.name}_count`}
                className="ml-auto w-9 min-w-max whitespace-nowrap rounded-md bg-blue px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200"
                aria-hidden="true"
              >
                {item.count}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryList;
