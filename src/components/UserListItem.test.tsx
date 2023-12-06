import React from 'react';
import { render, screen } from '@testing-library/react';
import UserListItem from './UserListItem';
import { MemoryRouter } from 'react-router-dom';


describe('UserListItem', () => {
  const item = {
    name: 'Kenny',
    avatarUrl: 'https://avatars.githubusercontent.com/u/12158001?u=0ba48a2b69f9a55650e434e608aa053d916eb900&v=4',
    bio: '',
    login: 'dev'
  }

  it("should render component", async () => {
    render(<MemoryRouter><UserListItem item={item} /></MemoryRouter>);
    const listElement = screen.getByTestId('name');
    const avatarElement = screen.getByTestId('avatar');
    const bioElement = screen.getByTestId('bio');
    expect(listElement).toBeInTheDocument();
    expect(avatarElement).toHaveAttribute('src', item.avatarUrl);
    expect(bioElement).toHaveTextContent(item.bio);
  });
});
