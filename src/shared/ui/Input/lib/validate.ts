export interface IValidationSettings {
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  isEmail?: boolean;
}

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export function validate(
  validationSettings: IValidationSettings,
  value: string
): string {
  console.log(emailRegex.test(value));

  if (validationSettings.required === true && value.length === 0) {
    return 'Это поле обязательно для заполнения';
  }

  if (validationSettings.isEmail === true && !emailRegex.test(value)) {
    return 'Некорректный email';
  }

  return '';
}
