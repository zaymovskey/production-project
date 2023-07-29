import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route,  Routes} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {useTheme} from "shared/hooks/useTheme";
import {classNames} from "helpers/ClassNames/classNames";
import {AppRouter} from "app/providers/AppRouter";



const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <button onClick={toggleTheme}>Изменить тему</button>
      <AppRouter/>
    </div>
  );
};

export default App;