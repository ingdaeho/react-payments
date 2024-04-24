import { ChangeEvent, createRef, useCallback } from 'react';
import { CardContext } from '../../../App';

const useCardNumber = () => {
  const cardState = CardContext.useSelector(({ context }) => context.cardState);
  const { send } = CardContext.useActorRef();

  const refs = Array.from({ length: 4 }).map(createRef<HTMLInputElement>);

  const handleNumbers = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.currentTarget;

      send({
        type: 'UPDATE_CARD_NUMBER',
        payload: {
          key: 'numbers',
          value: { ...cardState.numbers, [name]: value },
        },
      });
    },
    [cardState.numbers, send]
  );

  return {
    cardNumbers: cardState.numbers,
    handleNumbers,
    refs,
  };
};

export default useCardNumber;
