import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LanguageSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import React, { type FC, useId } from 'react';

interface ILanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC = ({ className }: ILanguageSwitcherProps) => {
  const { i18n } = useTranslation();
  const checkboxId = useId();

  const toggleLanguage = (): void => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div className={classNames(cls.LanguageSwitcher, {}, [className])}>
      <input
        type="checkbox"
        id={checkboxId}
        className={cls.checkbox}
        checked={i18n.language === 'en'}
        onChange={toggleLanguage}
      />
      <label htmlFor={checkboxId} className={cls.button} />
      <div className={classNames(cls.languageName, {}, [cls.off])}>RU</div>
      <div className={classNames(cls.languageName, {}, [cls.on])}>EN</div>
    </div>
  );
};
