


import Input from './components/Input'
import Button from './components/Button'

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState ('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handeAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  };

  const handleSumNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
        setCurrentNumber(String(sum))
        setOperation('')
    }
  }
  

  const handleMinusNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    }else{
      const sum = Number(firstNumber) - Number(currentNumber);
        setCurrentNumber(String(sum))
        setOperation('')
    }
  }

  const handleMultNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')
    }else{
      const sum = Number(firstNumber) * Number(currentNumber);
        setCurrentNumber(String(sum))
        setOperation('')
    }
  }
  
  const handleDivNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    }else{
      const sum = Number(firstNumber) / Number(currentNumber);
        setCurrentNumber(String(sum))
        setOperation('')
    }
  }
  

  const handleEquals = () => {

    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handleMultNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;      
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
          <Row>
            <Button label="x" onClick={handleMultNumbers}/>
            <Button label="/" onClick={handleDivNumbers}/>
            <Button label="c" onClick={handleOnClear}/>
            <Button label="." onClick={() => handeAddNumber('.')}/>      
          </Row>
          <Row>
            <Button label="7" onClick={() => handeAddNumber('7')}/>
            <Button label="8" onClick={() => handeAddNumber('8')}/>
            <Button label="9" onClick={() => handeAddNumber('9')}/>
            <Button label="-" onClick={handleMinusNumbers}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => handeAddNumber('4')}/>
            <Button label="5" onClick={() => handeAddNumber('5')}/>
            <Button label="6" onClick={() => handeAddNumber('6')}/>
            <Button label="+" onClick={handleSumNumbers}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => handeAddNumber('1')}/>
            <Button label="2" onClick={() => handeAddNumber('2')}/>
            <Button label="3" onClick={() => handeAddNumber('3')}/>
            <Button label="=" onClick={handleEquals}/>      
          </Row>
      </Content>
    </Container>
  );
}

export default App;
