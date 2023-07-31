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
      <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath[AppRoutes.MAIN]}>
        Main
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath[AppRoutes.ABOUT]}>
        About
      </AppLink>
    </div>
  );
};
