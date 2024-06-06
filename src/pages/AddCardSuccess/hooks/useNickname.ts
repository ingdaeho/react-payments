import { ChangeEvent, useCallback } from 'react';
import { CardContext } from '@machine/cardMachine';

const useCardNickname = () => {
  const { nickname } = CardContext.useSelector(
    ({ context }) => context.cardState
  );
  const { send } = CardContext.useActorRef();

  const handleNickname = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      send({ type: 'UPDATE_NICKNAME', payload: { key: 'nickname', value } });
    },
    [send]
  );

  return {
    nickname,
    handleNickname,
  };
};

export default useCardNickname;
