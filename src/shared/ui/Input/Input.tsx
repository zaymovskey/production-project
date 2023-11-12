import {
  type ChangeEvent,
  type FC,
  type HTMLInputTypeAttribute,
  type InputHTMLAttributes,
  memo
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

export enum EnumInputTheme {
  PRIMARY = 'primary',
  BOTTOM_BORDER = 'bottomBorder'
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface IInputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: HTMLInputTypeAttribute;
  theme?: EnumInputTheme;
}

export const Input: FC<IInputProps> = memo((props) => {
  const {
    /* eslint-disable react/prop-types */
    className,
    value,
    onChange,
    type = 'text',
    theme = EnumInputTheme.PRIMARY,
    ...defaultInputProps
    /* eslint-enable react/prop-types */
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value);
  };

  return (
    <input
      className={classNames(cls.Input, {}, [className, cls[theme]])}
      type={type}
      value={value}
      onChange={onChangeHandler}
      {...defaultInputProps}
    ></input>
  );
});

Input.displayName = 'Input';
