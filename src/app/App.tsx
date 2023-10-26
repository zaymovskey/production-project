import React, { type FC } from 'react';
import './styles/index.scss';
import { useTheme } from 'features/ThemeSwitcher/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
