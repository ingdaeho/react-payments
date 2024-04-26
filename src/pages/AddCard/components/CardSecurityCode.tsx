import { RefObject } from 'react';
import {
  SECURITY_CODE_MAX_LENGTH,
  isValidSecurityCode,
} from '../../../utils/validator';
import useCardSecurityCode from '../hooks/useCardSecurityCode';
import useFocus from '../../../hooks/useFocus';
import { Input } from '../../../components/Input/InputContainer/InputContainer';

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
    <Input.Container label='보안코드'>
      <Input.InputBase
        ref={ref}
        className='w-25'
        type='password'
        value={securityCode}
        onChange={handleSecurityCode}
        maxLength={SECURITY_CODE_MAX_LENGTH}
      />
    </Input.Container>
  );
};

export default CardSecurityCode;
