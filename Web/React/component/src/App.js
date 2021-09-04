import React from 'react';
import ClassTypeComponent from './ClassTypeComponent';
import FunctionalComponent from './FunctionalComponent';
import SayComponentWithState from './SayComponentWithState';
import CounterComponentWithState from './CounterComponentWithState';

const App = () => {
  return (
    <div>
      <FunctionalComponent name="React1" favoriteNumber={1}>리액트(함수형 컴포넌트)</FunctionalComponent>
      <br />
      <ClassTypeComponent name="React2" favoriteNumber={2}>리액트(클래스형 컴포넌트)</ClassTypeComponent>
      <br />
      <CounterComponentWithState />
      <br />
      <SayComponentWithState />
    </div>
  )
};

export default App;
