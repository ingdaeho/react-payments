import { createRef, useCallback } from 'react';
import { CardContext } from '../../../App';

const useCardSecurityCode = () => {
  const cardState = CardContext.useSelector(({ context }) => context.cardState);
  const { send } = CardContext.useActorRef();

  const ref = createRef<HTMLInputElement>();

  const handleSecurityCode = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      send({
        type: 'UPDATE_SECURITY_CODE',
        payload: { key: 'securityCode', value },
      });
    },
    [send]
  );

  return {
    ref,
    securityCode: cardState.securityCode,
    handleSecurityCode,
  };
};

export default useCardSecurityCode;
