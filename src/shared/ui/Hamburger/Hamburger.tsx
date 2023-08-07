import { classNames } from 'shared/lib/ClassNames/classNames'
import cls from './Hamburger.module.scss'
import { type Dispatch, type FC, type SetStateAction } from 'react'

interface HamburgerProps {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
  className?: string
}

export const Hamburger: FC<HamburgerProps> = ({ className, active, setActive }) => {
  return (
    <svg
      className={classNames(cls.Hamburger, { [cls.active]: active }, [
        className,
        cls.hamRotate
      ])}
      viewBox="0 0 100 100"
      width="80"
      onClick={() => {
        setActive(!active)
      }}
    >
      <path
        className={classNames(cls.line, {}, [cls.top])}
        d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
      />
      <path
        className={classNames(cls.line, {}, [cls.middle])}
        d="m 30,50 h 40"
      />
      <path
        className={classNames(cls.line, {}, [cls.bottom])}
        d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
      />
    </svg>
  )
}
