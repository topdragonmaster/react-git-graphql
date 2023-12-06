import React from 'react';
import { render, screen } from '@testing-library/react';
import RepositoryListItem from './RepositoryListItem';
import { MemoryRouter } from 'react-router-dom';


describe('RepositoryListItem', () => {
  const item = {
    "nameWithOwner": "codemirror/dev",
    "description": "Development repository for the CodeMirror editor project",
    "forkCount": 335,
    "updatedAt": "2023-12-05T08:32:44Z",
    "stargazerCount": 4656
  }

  it("should render component", async () => {
    render(<MemoryRouter><RepositoryListItem item={item} /></MemoryRouter>);

    const listElement = screen.getByTestId('name');
    const nameWithOwnerElement = screen.getByTestId('nameWithOwner');
    const fork_startElement = screen.getByTestId('fork-start');
    expect(listElement).toBeInTheDocument();
    expect(nameWithOwnerElement).toHaveTextContent(item.nameWithOwner);
    expect(fork_startElement).toHaveTextContent(item.forkCount.toString());
    expect(fork_startElement).toHaveTextContent(item.stargazerCount.toString());
  });
});
