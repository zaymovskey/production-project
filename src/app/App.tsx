import React, { Suspense } from "react";
import "./styles/index.scss";
import { useTheme } from "features/ThemeSwitcher/lib/useTheme";
import { classNames } from "shared/lib/ClassNames/classNames";
import { AppRouter } from "app/providers/AppRouter";
import { Navbar } from "widgets/Navbar";
import { SideBar } from "widgets/SideBar";
import { useTranslation } from "react-i18next";

const Component = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }

  return (
    <div>
      <button onClick={toggleLanguage}>{t("Перевод")}</button>
      <div>{t("Тестовый")}</div>
    </div>

  )
}

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <Component/>
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
