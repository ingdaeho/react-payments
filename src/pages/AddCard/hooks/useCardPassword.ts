import { createRef, useCallback } from 'react';
import { CardContext } from '../../../App';
import { PASSWORD_INPUT_MAX_LENGTH } from '../../../utils/validator';

const useCardPassword = () => {
  const cardState = CardContext.useSelector(({ context }) => context.cardState);
  const { send } = CardContext.useActorRef();

  const refs = Array.from({ length: 2 }).map(createRef<HTMLInputElement>);

  const handlePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;

      const isNumber = !Number.isNaN(Number(value));
      if (!isNumber || value.length > PASSWORD_INPUT_MAX_LENGTH) return;

      send({
        type: 'UPDATE_PASSWORD',
        payload: {
          key: 'password',
          value: { ...cardState.password, [name]: value },
        },
      });
    },
    [cardState.password, send]
  );

  return {
    refs,
    password: cardState.password,
    handlePassword,
  };
};

export default useCardPassword;
