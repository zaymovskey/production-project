import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/SideBar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';

describe('SideBar', () => {
  test('Test render', () => {
    renderWithTranslation(<Sidebar/>);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toggle', () => {
    renderWithTranslation(<Sidebar/>);
    const toggleButton = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('active');
  });
});
