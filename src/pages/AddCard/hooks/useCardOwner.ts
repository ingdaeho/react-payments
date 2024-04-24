import { createRef, useCallback } from 'react';
import { CardContext } from '../../../App';

export const OWNER_NAME_MAX_LENGTH = 30;

const useCardOwner = () => {
  const cardState = CardContext.useSelector(({ context }) => context.cardState);
  const { send } = CardContext.useActorRef();

  const ref = createRef<HTMLInputElement>();

  const handleOwner = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      send({
        type: 'UPDATE_OWNER',
        payload: { key: 'owner', value },
      });
    },
    [send]
  );

  return {
    ref,
    owner: cardState.owner,
    handleOwner,
  };
};

export default useCardOwner;
