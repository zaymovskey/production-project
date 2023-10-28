import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';

describe('SideBar', () => {
  test('Test render', () => {
    renderWithTranslation(<SideBar/>);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toggle', () => {
    renderWithTranslation(<SideBar/>);
    const toggleButton = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('active');
  });
});
