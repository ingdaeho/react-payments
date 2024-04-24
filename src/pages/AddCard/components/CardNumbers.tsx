import { RefObject } from 'react';
import InputContainer from '../../../components/InputContainer/InputContainer';
import useCardNumber from '../hooks/useCardNumber';
import { CARD_NUMBER_MAX_LENGTH, isCardNumber } from '../../../utils/validator';
import useFocus from '../../../hooks/useFocus';
import Input from '../../../components/Input/Input';

interface Props {
  nextFieldRef: RefObject<HTMLInputElement>;
}

const CardNumbers = ({ nextFieldRef }: Props) => {
  const { refs, cardNumbers, handleNumbers } = useCardNumber();

  useFocus({
    isValid: isCardNumber(cardNumbers.first),
    focusTargetRef: refs[1],
  });

  useFocus({
    isValid: isCardNumber(cardNumbers.second),
    focusTargetRef: refs[2],
  });

  useFocus({
    isValid: isCardNumber(cardNumbers.third),
    focusTargetRef: refs[3],
  });

  useFocus({
    isValid: isCardNumber(cardNumbers.fourth),
    focusTargetRef: nextFieldRef,
  });

  return (
    <InputContainer label='카드 번호'>
      <div className='input-box'>
        <Input
          ref={refs[0]}
          name={'first'}
          onChange={handleNumbers}
          value={cardNumbers.first}
          maxLength={CARD_NUMBER_MAX_LENGTH}
        />
        <span>-</span>
        <Input
          ref={refs[1]}
          name={'second'}
          onChange={handleNumbers}
          value={cardNumbers.second}
          maxLength={CARD_NUMBER_MAX_LENGTH}
        />
        <span>-</span>
        <Input
          ref={refs[2]}
          type='password'
          name={'third'}
          onChange={handleNumbers}
          value={cardNumbers.third}
          maxLength={CARD_NUMBER_MAX_LENGTH}
        />
        <span>-</span>
        <Input
          ref={refs[3]}
          name={'fourth'}
          onChange={handleNumbers}
          value={cardNumbers.fourth}
          maxLength={CARD_NUMBER_MAX_LENGTH}
        />
      </div>
    </InputContainer>
  );
};

export default CardNumbers;
