import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route,  Routes} from "react-router-dom";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/ClassNames/classNames";



const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <button onClick={toggleTheme}>Изменить тему</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageLazy/>}/>
          <Route path={'/about'} element={<AboutPageLazy/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;