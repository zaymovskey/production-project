import React from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider/ui/useTheme";
import {classNames} from "helpers/ClassNames/classNames";
import {AppRouter} from "app/providers/AppRouter";
import {Navbar} from "widgets/Navbar";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <button onClick={toggleTheme}>Изменить тему</button>
      <AppRouter/>
    </div>
  );
};

export default App;