import React from "react";
import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider/ui/useTheme";
import { classNames } from "shared/lib/ClassNames/classNames";
import { AppRouter } from "app/providers/AppRouter";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;