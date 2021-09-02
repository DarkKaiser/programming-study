import React from 'react';
import Counter from './Counter';
import MyComponent from './MyComponent';
import MyComponent2 from './MyComponent2';
import Say from './Say';

const App = () => {
  return (
    <div>
      <MyComponent name="React1" favoriteNumber={1}>리액트</MyComponent>
      <MyComponent2 name="React2" favoriteNumber={2}>리액트</MyComponent2>
      <Counter />
      <Say />
    </div>
  )
};

export default App;
