import { RefObject } from 'react';
import Input from '../../../components/Input/Input';
import InputContainer from '../../../components/InputContainer/InputContainer';
import {
  SECURITY_CODE_MAX_LENGTH,
  isValidSecurityCode,
} from '../../../utils/validator';
import useCardSecurityCode from '../hooks/useCardSecurityCode';
import useFocus from '../../../hooks/useFocus';

interface Props {
  nextFieldRef: RefObject<HTMLInputElement>;
}

const CardSecurityCode = ({ nextFieldRef }: Props) => {
  const { ref, securityCode, handleSecurityCode } = useCardSecurityCode();

  useFocus({
    isValid: isValidSecurityCode(securityCode),
    focusTargetRef: nextFieldRef,
  });

  return (
    <InputContainer label='보안코드'>
      <Input
        ref={ref}
        className='w-25'
        type='password'
        value={securityCode}
        onChange={handleSecurityCode}
        maxLength={SECURITY_CODE_MAX_LENGTH}
      />
    </InputContainer>
  );
};

export default CardSecurityCode;
