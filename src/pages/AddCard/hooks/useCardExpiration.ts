import { createRef, useCallback } from 'react';
import { CardContext } from '../../../App';

const useCardExpiration = () => {
  const cardState = CardContext.useSelector(({ context }) => context.cardState);
  const { send } = CardContext.useActorRef();

  const refs = Array.from({ length: 2 }).map(createRef<HTMLInputElement>);

  const handleExpirationDate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;

      send({
        type: 'UPDATE_EXPIRATION_DATE',
        payload: {
          key: 'expiration',
          value: { ...cardState.expiration, [name]: value },
        },
      });
    },
    [cardState.expiration, send]
  );

  return {
    expiration: cardState.expiration,
    handleExpirationDate,
    refs,
  };
};

export default useCardExpiration;
