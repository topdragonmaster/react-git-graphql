import CategoryList from "components/CategoryList";
import SearchBar from "components/SearchBar";
import RepositoryListItem from "components/RepositoryListItem";
import UserListItem from "components/UserListItem";
import type { Repository, User } from "graphql/generated";
import { useRepositories } from "hooks/useRepositories";
import { useUsers } from "hooks/useUsers";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface PageInfo {
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  endCursor?: string;
  startCursor?: string;
}

const Search: React.FC = () => {
  const [search] = useSearchParams();

  const query = useMemo(() => {
    return search.get("q") || "";
  }, [search]);

  const [pageInfo, setPageInfo] = useState<PageInfo>();

  const [searchType, setSearchType] = useState("user");
  const [after, setAfter] = useState<string | null>(null);
  const [before, setBefore] = useState<string | null>(null);

  const { data: searchReposData } = useRepositories({
    query,
    type: searchType,
    after,
    before,
    count: 10,
  });
  const { data: searchUsersData } = useUsers({
    query,
    type: searchType,
    after,
    before,
    count: 10,
  });

  const {
    categories = [],
    users,
    repositories,
  } = useMemo(() => {
    let userCount = 0;
    let repositoryCount = 0;

    if (searchType === "repository") {
      userCount = searchReposData?.search.userCount || 0;
      repositoryCount = searchReposData?.search.repositoryCount || 0;

      setPageInfo({ ...(searchReposData?.search.pageInfo as PageInfo) });
    } else {
      userCount = searchUsersData?.search.userCount || 0;
      repositoryCount = searchUsersData?.search.repositoryCount || 0;
      console.log(searchUsersData)
      setPageInfo({ ...(searchUsersData?.search.pageInfo as PageInfo) });
    }

    const categories = [
      { name: "user", label: "Users", count: userCount },
      { name: "repository", label: "Repositories", count: repositoryCount },
    ];

    return { categories, users: searchUsersData?.search.nodes, repositories: searchReposData?.search.nodes };
  }, [searchReposData, searchUsersData, searchType]);

  const handleGotoNextPage = () => {
    setAfter(pageInfo?.endCursor || "");
    setBefore("");
  };

  const handleGotoPreviousPage = () => {
    setAfter("");
    setBefore(pageInfo?.startCursor || "");
  };

  console.log(repositories, users)
  return (
    <div data-testid="searchbar" className="max-w-screen-lg flex flex-1 flex-col mt-16 min-h-screen">
      <h1 className="text-white text-base">Search GitHub username...</h1>
      <SearchBar />
      <div className="flex flex-row space-x-8 mt-3">
        <div data-testid="categories" className="w-48 p-2 h-fit rounded-md bg-secondary">
          <CategoryList categories={categories} selected={searchType} onChange={(name) => setSearchType(name)} />
        </div>
        {
          categories.filter(item => item.name === searchType)[0].count !== 0 ?
            <div className="flex flex-1 flex-col items-center">
              <ul role="list" className="divide-y divide-gray-100 w-full">
                {searchType === "user"
                  ? users?.map((item, index) => <UserListItem item={item as Partial<User>} key={index} />)
                  : repositories?.map((item, index) => (
                    <RepositoryListItem item={item as Repository} key={index}></RepositoryListItem>
                  ))}
              </ul>

              <div className="flex flex-row space-x-6 my-7">
                <button
                  className="rounded-md bg-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-secondary disabled:border disabled:border-gray-500 disabled:text-white"
                  onClick={handleGotoPreviousPage}
                  disabled={!pageInfo?.hasPreviousPage}
                >
                  Previous
                </button>
                <button
                  className="rounded-md bg-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-white disabled:border disabled:border-gray-500 disabled:text-gray-500"
                  onClick={handleGotoNextPage}
                  disabled={!pageInfo?.hasNextPage}
                >
                  Next
                </button>
              </div>
            </div> 
            : <h1>No data</h1>
        }
      </div>
    </div>
  );
};

export default Search;
