import { ENDPOINT, GITHUB_APIKEY } from "config";
import { useGetUserQuery } from "graphql/generated";

interface PaginationProps {
  after?: string | null;
  before?: string | null;
  count?: number;
}

export const useUser = ({ login, after, before, count = 10 }: { login: string } & PaginationProps) => {
  return useGetUserQuery(
    {
      endpoint: ENDPOINT,
      fetchParams: { headers: { Authorization: `Bearer ${GITHUB_APIKEY}` } },
    },
    { login, ...(!!before ? { before, last: count } : { after, first: count }) },
    { enabled: !!login }
  );
};
