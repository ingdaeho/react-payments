import { CardInfo } from '../types/index.ts';

export const CARD_NUMBER_MAX_LENGTH = 4;
export const EXPIRATION_MAX_LENGTH = 2;
export const SECURITY_CODE_MAX_LENGTH = 3;
export const PASSWORD_INPUT_MAX_LENGTH = 1;

export const isCardNumber = (cardNumber: string) => {
  return Boolean(
    cardNumber.length === CARD_NUMBER_MAX_LENGTH &&
      Array.from(cardNumber).filter(
        (singleNumber) => !isNaN(Number(singleNumber))
      )
  );
};

export const isValidMonth = (month: string) => {
  if (Number(month) === 1) return false;
  return Boolean(Number(month) >= 1 && Number(month) <= 12);
};

export const isValidYear = (year: string) => {
  return Boolean(
    year.length === EXPIRATION_MAX_LENGTH &&
      Number(year) >= new Date().getFullYear() - 2000
  );
};

export const isValidSecurityCode = (securityCode: string) => {
  return Boolean(securityCode.length === SECURITY_CODE_MAX_LENGTH);
};

export const isValidPassword = (password: string) => {
  return Boolean(
    password.length === PASSWORD_INPUT_MAX_LENGTH &&
      Number(password) > 0 &&
      Number(password) <= 9
  );
};

export const isValidCardState = (cardState: CardInfo) => {
  const { numbers, expiration, password, securityCode } = cardState;

  const isValidCardNumbers = numbers.every(
    (num) => num.length === CARD_NUMBER_MAX_LENGTH
  );
  if (!isValidCardNumbers) return false;

  if (!isValidMonth(expiration[0]) || !isValidYear(expiration[1])) return false;

  if (!isValidPassword(password[0]) || !isValidPassword(password[1]))
    return false;

  if (!isValidSecurityCode(securityCode)) return false;

  return true;
};
