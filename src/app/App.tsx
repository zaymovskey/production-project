import { type FC, useEffect } from 'react';
import './styles/index.scss';
import { AppRouter } from 'app/providers/AppRouter';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { useAppDispatch } from 'app/store/lib/hooks';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/SideBar';
import { refresh } from 'features/Auth/model/services/refresh';
import { TOKEN_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

const App: FC = () => {
  const { theme } = useTheme();
  document.body.className = theme;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem(TOKEN_LOCALSTORAGE_KEY) != null) {
      void dispatch(refresh());
    }
  }, [dispatch]);

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
