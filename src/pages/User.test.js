import { render, screen } from '../test-utils';
import { userMock } from '../test-utils/mocks';
import { useUser }  from '../hooks/useUser'

import User from './User';

jest.mock('../hooks/useUser.ts');
const mockedUseUser = useUser

describe('User', () => {
  
  it("should render the user info", async () => {
    mockedUseUser.mockImplementation(() => ({
      data: userMock,
      isFetching: true,
    }));
    render(
      <User />
    );

    expect(screen.getByTestId("user_avatar")).toHaveAttribute('src', userMock.user.avatarUrl);
    expect(screen.getByTestId("user_name")).toHaveTextContent(userMock.user.login);
    expect(screen.getByTestId("user_followers")).toHaveTextContent(userMock.user.followers.totalCount.toString());
    expect(screen.getByTestId("user_following")).toHaveTextContent(userMock.user.following.totalCount.toString());
    expect(screen.getByTestId("user_repository_count")).toHaveTextContent(userMock.user.following.totalCount.toString());
  });

  it("should render the user's repositories", async () => {
    mockedUseUser.mockImplementation(() => ({
      data: userMock,
      isFetching: true,
    }));
    render(
      <User />
    );

    expect(screen.getByTestId("user_repository_count")).toHaveTextContent(userMock.user.repositories.totalCount.toString());
    expect(screen.queryAllByTestId("name").length).toEqual(10);
  });

  it("should render the pagination button", async () => {
    mockedUseUser.mockImplementation(() => ({
      data: userMock,
      isFetching: true,
    }));
    render(
      <User />
    );

    expect(screen.getByTestId("user_next_button")).toBeInTheDocument();
    expect(screen.getByTestId("user_prev_button")).toBeInTheDocument();
  });

});
