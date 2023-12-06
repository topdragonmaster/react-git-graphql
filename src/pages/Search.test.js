import { render, screen } from '../test-utils';
import { usersMock } from '../test-utils/mocks';
import { useUsers }  from '../hooks/useUsers'

import Search from './Search';

jest.mock('../hooks/useUsers.ts');
const mockedUseUsers = useUsers

describe('Search', () => {
  
  it("should render initially", async () => {
    mockedUseUsers.mockImplementation(() => ({
      data: undefined,
      isFetching: true,
    }));
    render(
      <Search />
    );

    expect(screen.getByTestId("searchbar")).toBeVisible();
    expect(screen.getByTestId("categories")).toBeInTheDocument();
  });

  it("should render the user list", async () => {
    mockedUseUsers.mockImplementation(() => ({
      data: usersMock,
      isFetching: true,
    }));
    render(
      <Search />
    );

    expect(screen.getByTestId("searchbar")).toBeVisible();
    expect(screen.getByTestId("categories")).toBeInTheDocument();
    expect(screen.queryAllByTestId("name").length).toEqual(10);
  });
});
