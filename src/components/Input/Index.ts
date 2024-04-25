import InputComponent from './Input';
import InputContainer from './InputContainer/InputContainer';

const Input = Object.assign(InputComponent, {
  Container: InputContainer,
});

export default Input;
