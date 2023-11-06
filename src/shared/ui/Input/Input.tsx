import { type FC, type InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface IInputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input: FC<IInputProps> = memo((props) => {
  const {
    /* eslint-disable react/prop-types */
    className,
    value,
    onChange,
    ...defaultInputProps
    /* eslint-enable react/prop-types */
  } = props;

  return (
    <input
      className={classNames(cls.Input, {}, [className])}
      {...defaultInputProps}
    ></input>
  );
});

Input.displayName = 'Input';
