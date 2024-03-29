import { type FC, useId } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LanguageSwitcher.module.scss';

interface ILanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC<ILanguageSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();
  const checkboxId = useId();

  const toggleLanguage = (): void => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div className={classNames(cls.LanguageSwitcher, {}, [className])}>
      <input
        type='checkbox'
        id={checkboxId}
        className={cls.checkbox}
        checked={i18n.language === 'en'}
        onChange={toggleLanguage}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={checkboxId} className={cls.button}></label>
      {/* eslint-disable i18next/no-literal-string */}
      <div className={classNames(cls.languageName, {}, [cls.off])}>ru</div>
      <div className={classNames(cls.languageName, {}, [cls.on])}>en</div>
      {/* eslint-enable i18next/no-literal-string */}
    </div>
  );
};
