import i18n from '../../../../../config/i18n/i18n';

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
    return i18n.t('Это поле обязательно для заполнения');
  }

  if (
    validationSettings.minLength != null &&
    value.length < validationSettings.minLength
  ) {
    return i18n.t('Минимальная длинна: ') + validationSettings.minLength.toString();
  }

  if (validationSettings.isEmail === true && !emailRegex.test(value)) {
    return i18n.t('Некорректный email');
  }

  return '';
}
