import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/SideBar';
import { componentRender } from 'shared/lib/tests/componentRender';

describe('SideBar', () => {
  test('Test render', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toggle', () => {
    componentRender(<Sidebar />);
    const toggleButton = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('active');
  });
});
