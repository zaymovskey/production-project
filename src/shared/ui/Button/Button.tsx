import { classNames } from 'shared/lib/ClassNames/classNames'
import cls from './Button.module.scss'

interface ButtonProps {
  className?: string
}

export const Button = ({ className }: ButtonProps) => {
  return <button className={classNames(cls.Button, {}, [className])}></button>
}
