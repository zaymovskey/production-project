import React from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { AppRoutes, RoutePath } from "shared/config/routeConfig/routeConfig";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
        Main
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
        About
      </AppLink>
    </div>
  );
};
