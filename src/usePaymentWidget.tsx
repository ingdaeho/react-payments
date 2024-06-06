import { createPortal } from 'react-dom';
import { CardContext } from './machine/cardMachine';
import { CardStepper } from './pages/CardStepper/CardStepper';
import { useDisclosure } from '@hooks/useDisclosure';
import './styles/index.css';

export function usePaymentWidget() {
  const [opened, handler] = useDisclosure(false);

  const initPayment = () => handler.open();

  const PaymentWidget = () => {
    if (!opened) return <></>;

    return createPortal(
      <div className='widget'>
        <CardContext.Provider>
          <CardStepper />
        </CardContext.Provider>
      </div>,
      document.body
    );
  };

  return { PaymentWidget, initPayment };
}
