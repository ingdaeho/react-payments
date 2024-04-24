import { forwardRef, useImperativeHandle } from 'react';
import InputContainer from '../../../components/InputContainer/InputContainer';
import useCardPassword from '../hooks/useCardPassword';
import {
  PASSWORD_INPUT_MAX_LENGTH,
  isValidPassword,
} from '../../../utils/validator';
import Input from '../../../components/Input/Input';
import useFocus from '../../../hooks/useFocus';

const CardPassword = forwardRef<HTMLInputElement>((_, forwardedRef) => {
  const { refs, password, handlePassword } = useCardPassword();
  const [firstInput] = refs;

  useFocus({
    isValid: isValidPassword(password.first),
    focusTargetRef: refs[1],
  });

  useImperativeHandle(forwardedRef, () => firstInput.current!);

  return (
    <InputContainer label='카드 비밀번호'>
      <div style={{ display: 'flex', gap: 6 }}>
        <Input
          ref={refs[0]}
          name={'first'}
          onChange={handlePassword}
          value={password.first}
          maxLength={PASSWORD_INPUT_MAX_LENGTH}
        />
        <Input
          ref={refs[1]}
          name={'second'}
          onChange={handlePassword}
          value={password.second}
          maxLength={PASSWORD_INPUT_MAX_LENGTH}
        />
        <div className='flex-center w-15'>•</div>
        <div className='flex-center w-15'>•</div>
      </div>
    </InputContainer>
  );
});

export default CardPassword;
