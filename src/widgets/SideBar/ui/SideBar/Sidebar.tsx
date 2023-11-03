import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'app/providers/AppRouter/lib/routeConfig';
import { LanguageSwitcher } from 'features/LanguageSwitcher/ui/LanguageSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, EnumAppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Hamburger } from 'shared/ui/Hamburger/Hamburger';
import cls from './Sidebar.module.scss';

interface ISideBarProps {
  className?: string;
}

export const Sidebar: FC<ISideBarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.SideBar, { [cls.active]: active }, [
        className
      ])}
    >
      <div className={cls.header}>
        <Hamburger
          active={active}
          setActive={setActive}
        />
      </div>

      <div className={cls.body}>
        <div className={cls.body__item}>
          <AppLink
            theme={EnumAppLinkTheme.SECONDARY}
            to={RoutePath.main}
            className={cls.appLink}
          >
            <div className={cls.body__itemIcon}>
              <HomeIcon/>
            </div>
            <div className={cls.body__itemText}>
              {t('Главная')}
            </div>
          </AppLink>
        </div>
        <div className={cls.body__item}>
          <AppLink
            theme={EnumAppLinkTheme.SECONDARY}
            to={RoutePath.about}
            className={cls.appLink}
          >
            <div className={cls.body__itemIcon}>
              <AboutIcon/>
            </div>
            <div className={cls.body__itemText}>
              {t('О сайте')}
            </div>
          </AppLink>
        </div>
      </div>

      <div className={cls.actions}>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
