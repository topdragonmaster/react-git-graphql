import { Repository } from "graphql/generated";

interface IProps {
  item: Pick<Repository, "nameWithOwner" | "updatedAt" | "stargazerCount" | "description" | "forkCount">;
}

const RepositoryListItem: React.FC<IProps> = ({ item } : IProps) => {
  return (
    <li data-testid="name" key={item.nameWithOwner} className="flex items-center justify-between gap-x-6 w-full  py-5 bg-secondary mb-4 rounded-md px-5 border-none">
      <div className="min-w-0">
        <div className="flex items-start gap-x-3">
          <p data-testid="nameWithOwner" className="text-sm font-semibold leading-6 text-white">{item.nameWithOwner}</p>
        </div>
        <div className="mt-1 w-full flex justify-between items-center gap-x-2 text-xs leading-5 text-white">
          <p className="whitespace-nowrap">
            Updated on <time dateTime={item.updatedAt}>{item.updatedAt}</time>
          </p>
          <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
            <circle cx={1} cy={1} r={1} />
          </svg>
        </div>
      </div>
      <div data-testid="fork-start" className="flex flex-none items-center gap-x-4 text-xs leading-5 text-white">
        Forks: {item.forkCount} Stars: {item.stargazerCount}
      </div>
    </li>
  );
};

export default RepositoryListItem;
