# Payment Widget

## Getting Started

### Installation

```bash

npm install @ingdaeho/payments

yarn add @ingdaeho/payments

pnpm add @ingdaeho/payments

```

### Requirements

```bash
"node": ">=18"
```

```bash
"peerDependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

## Usage

```tsx
import { usePaymentWidget } from '@ingdaeho/payments';
import '@ingdaeho/payments/styles.css';

function Component() {
  const { PaymentWidget, initPayment } = usePaymentWidget();

  return (
    <div>
      <button onClick={initPayment}>start Payment</button>
      <PaymentWidget />
    </div>
  );
}
```
