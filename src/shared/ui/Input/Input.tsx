import {
  type ChangeEvent,
  type HTMLInputTypeAttribute,
  type InputHTMLAttributes,
  memo,
  useState
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { type IValidationSettings, validate } from 'shared/ui/Input/lib/validate';
import { EnumTextTheme, Text } from 'shared/ui/Text/Text';
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
  validationSettings?: IValidationSettings;
}

export const Input = memo<IInputProps>(
  ({
    className,
    value,
    onChange,
    type = 'text',
    theme = EnumInputTheme.PRIMARY,
    validationSettings,
    ...defaultInputProps
  }: IInputProps) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [inputIsChanged, setInputIsChanged] = useState(false);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
      onChange?.(e.target.value);
      setInputIsChanged(true);

      if (validationSettings == null || !inputIsChanged) return;
      const errorMessage = validate(validationSettings, e.target.value);
      setErrorMessage(errorMessage);
    };

    return (
      <div className={cls.inputWrapper}>
        <input
          className={classNames(cls.Input, {}, [className, cls[theme]])}
          type={type}
          value={value}
          onChange={onChangeHandler}
          {...defaultInputProps}
        ></input>
        {errorMessage !== '' && (
          <div className={cls.error}>
            <Text text={errorMessage} theme={EnumTextTheme.ERROR} />
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
