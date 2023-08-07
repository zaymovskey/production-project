import { classNames } from 'shared/lib/ClassNames/classNames'
import cls from './SideBar.module.scss'
import React, { useState } from 'react'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { Hamburger } from 'shared/ui/Hamburger/Hamburger'
import { LanguageSwitcher } from 'features/LanguageSwitcher/ui/LanguageSwitcher'

interface SideBarProps {
  className?: string
}

export const SideBar = ({ className }: SideBarProps) => {
  const [active, setActive] = useState(false)

  return (
    <div
      className={classNames(cls.SideBar, { [cls.active]: active }, [
        className
      ])}
    >
      <div className={cls.header}>
        <Hamburger active={active} setActive={setActive} />
      </div>

      <div className={cls.actions}>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  )
}
