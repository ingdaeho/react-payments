import { RefObject } from 'react';
import {
  SECURITY_CODE_MAX_LENGTH,
  isValidSecurityCode,
} from '../../../utils/validator';
import useCardSecurityCode from '../hooks/useCardSecurityCode';
import useFocus from '../../../hooks/useFocus';
import { Input } from '../../../components/Input/InputContainer/InputContainer';
import Tooltip from '@components/Tooltip/Tooltip';
import HelpIcon from '@assets/svgs/help.svg?react';

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
    <div>
      <Input.Container label='보안코드' className='flex'>
        <Input.InputBase
          ref={ref}
          className='w-25'
          type='password'
          error={!isValidSecurityCode(securityCode)}
          value={securityCode}
          onChange={handleSecurityCode}
          maxLength={SECURITY_CODE_MAX_LENGTH}
        />
        <Tooltip icon={<HelpIcon />} message='보안코드 3자리' />
      </Input.Container>
    </div>
  );
};

export default CardSecurityCode;
