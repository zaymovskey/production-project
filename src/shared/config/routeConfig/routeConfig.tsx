import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum EnumAppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<EnumAppRoutes, string> = {
  [EnumAppRoutes.MAIN]: '/',
  [EnumAppRoutes.ABOUT]: '/about',

  [EnumAppRoutes.NOT_FOUND]: '*'
};

export const RouteConfig: Record<EnumAppRoutes, RouteProps> = {
  [EnumAppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [EnumAppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },

  [EnumAppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
};
