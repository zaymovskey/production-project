import { type FC } from 'react';
import './styles/index.scss';
import { AppRouter } from 'app/providers/AppRouter';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/SideBar';

const App: FC = () => {
  const { theme } = useTheme();
  document.body.className = theme;

  return (
    <div className='app'>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
