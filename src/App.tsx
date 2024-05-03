import { CardContext } from './machine/cardMachine';
import { CardStepper } from './pages/CardStepper/CardStepper';

function App() {
  return (
    <div className='app'>
      <CardContext.Provider>
        <CardStepper />
      </CardContext.Provider>
    </div>
  );
}

export default App;
