import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';

export interface ITab {
  id: number;
  title: string;
}

interface ITabsProps {
  className?: string;
  selectedId: string | number;
  tabs: ITab[];
  onClick: (id: number) => void;
}

export const Tabs: FC<ITabsProps> = ({ className, tabs, selectedId, onClick }) => {
  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={classNames(cls.tab, { [cls.selected]: tab.id === selectedId })}
          onClick={() => {
            onClick(tab.id);
          }}
        >
          {tab.title}
        </div>
      ))}
    </div>
  );
};
