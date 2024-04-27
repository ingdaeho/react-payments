import { RefObject } from 'react';
import { Input } from '@components/Input';
import useFocus from '@hooks/useFocus';
import { CardContext } from '../../../App';
import { CARD_NUMBER_MAX_LENGTH, isCardNumber } from '@utils/validator';
import useCardNumber from '../hooks/useCardNumber';

interface Props {
  nextFieldRef: RefObject<HTMLInputElement>;
}

const CardNumbers = ({ nextFieldRef }: Props) => {
  const { refs, cardNumbers, handleNumbers } = useCardNumber();
  const { brand } = CardContext.useSelector(({ context }) => context.cardState);

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
    isValid: isCardNumber(cardNumbers.fourth) && Boolean(brand.label),
    focusTargetRef: nextFieldRef,
  });

  return (
    <Input.Container label='카드 번호' className='input-box'>
      <Input.InputBase
        ref={refs[0]}
        name={'first'}
        error={!isCardNumber(cardNumbers.first)}
        onChange={handleNumbers}
        value={cardNumbers.first}
        maxLength={CARD_NUMBER_MAX_LENGTH}
      />
      <span>-</span>
      <Input.InputBase
        ref={refs[1]}
        name={'second'}
        error={!isCardNumber(cardNumbers.second)}
        onChange={handleNumbers}
        value={cardNumbers.second}
        maxLength={CARD_NUMBER_MAX_LENGTH}
      />
      <span>-</span>
      <Input.InputBase
        ref={refs[2]}
        type='password'
        name={'third'}
        error={!isCardNumber(cardNumbers.third)}
        onChange={handleNumbers}
        value={cardNumbers.third}
        maxLength={CARD_NUMBER_MAX_LENGTH}
      />
      <span>-</span>
      <Input.InputBase
        ref={refs[3]}
        name={'fourth'}
        error={!isCardNumber(cardNumbers.fourth)}
        onChange={handleNumbers}
        value={cardNumbers.fourth}
        maxLength={CARD_NUMBER_MAX_LENGTH}
      />
    </Input.Container>
  );
};

export default CardNumbers;
