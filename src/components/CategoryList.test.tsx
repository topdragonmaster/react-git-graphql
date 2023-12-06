import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CategoryList from './CategoryList';

describe('RepositoryListItem', () => {
  const handleChange = jest.fn();
  const props = {
    categories: [
      { name: "user", label: "Users", count: 0 },
      { name: "repository", label: "Repositories", count: 0 }
    ],
    selected: 'user',
    onChange: handleChange
  }

  it("should render component", async () => {
    render(<CategoryList categories={props.categories} selected={props.selected} onChange={props.onChange} />);
    const { categories, onChange } = props

    categories.forEach((category) => {
      const liElement = screen.getByTestId(category.name);
      expect(liElement).toBeInTheDocument();
      
      // Click on the li element if needed (for example, to simulate user interaction)
      // userEvent.click(liElement);
  
      // Assert that the count is displayed correctly within the li element
      const countElement = screen.getByTestId(`${category.name}_count`);
      expect(countElement).toHaveTextContent(category.count.toString());
    });

    const tabElement = screen.getByTestId(categories[0].name);
    fireEvent.click(tabElement);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
