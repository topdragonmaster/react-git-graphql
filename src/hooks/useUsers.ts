import { ENDPOINT, GITHUB_APIKEY } from "config";
import { useSearchUsersQuery } from "graphql/generated";

interface PaginationProps {
  after?: string | null;
  before?: string | null;
  count?: number;
}


export const useUsers = ({
  query = "",
  type,
  after,
  before,
  count = 10,
}: { query?: string; type: string } & PaginationProps) => {
  return useSearchUsersQuery(
    { endpoint: ENDPOINT, fetchParams: { headers: { Authorization: `Bearer ${GITHUB_APIKEY}` } } },
    { query, ...(!!before ? { before, last: count } : { after, first: count }) },
    { enabled: type === "user" && !!query }
  );
};
