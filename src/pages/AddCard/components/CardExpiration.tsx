import { RefObject, forwardRef, useImperativeHandle } from 'react';
import useCardExpiration from '../hooks/useCardExpiration';
import {
  EXPIRATION_MAX_LENGTH,
  isValidMonth,
  isValidYear,
} from '../../../utils/validator';
import useFocus from '../../../hooks/useFocus';
import Input from '../../../components/Input/Index';

interface Props {
  nextFieldRef: RefObject<HTMLInputElement>;
}

const CardExpiration = forwardRef<HTMLInputElement, Props>(
  ({ nextFieldRef }, forwardedRef) => {
    const { refs, expiration, handleExpirationDate } = useCardExpiration();
    const monthInputRef = refs[0];

    useImperativeHandle(forwardedRef, () => monthInputRef.current!);

    useFocus({
      isValid: isValidMonth(expiration.month),
      focusTargetRef: refs[1],
    });

    useFocus({
      isValid: isValidYear(expiration.year),
      focusTargetRef: nextFieldRef,
    });

    return (
      <Input.Container label='만료일' className='w-50'>
        <div className='input-box'>
          <Input
            ref={refs[0]}
            name='month'
            placeholder='MM'
            value={expiration.month}
            onChange={handleExpirationDate}
            maxLength={EXPIRATION_MAX_LENGTH}
          />
          <span>/</span>
          <Input
            ref={refs[1]}
            name='year'
            placeholder='YY'
            value={expiration.year}
            onChange={handleExpirationDate}
            maxLength={EXPIRATION_MAX_LENGTH}
          />
        </div>
      </Input.Container>
    );
  }
);

export default CardExpiration;
