
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div >
      <Header></Header>
      <Shop></Shop>
      <div className='qASession' >
        <h1>Question: How React Works?</h1>
        <p > Answer: React is a JavaScript library and it creates user interfaces in a predictable and efficient way using declarative code. We can use it to help build single page applications and mobile apps, or to build complex apps if we want to utilise it with other libraries.
          React works as a declarative paradigm that makes it easier to reason about the application and aims to be both efficient and flexible. It is designed simple views for each state in the application, and React will be efficiently updating and rendering just the right component when the data is changed.React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM then it will use the virtual representation of it. Then the virtual DOM will be trying to find the most efficient way to update the browser's DOM.React does not commit state changes one after the other if there are multiple state changes. Instead, React goes through its virtual DOM ,creates a list of those changes that is needed to be made to the actual DOM and then does it all in one single process. Therefore, React internally creates, updates, and destroys instances to figure out the DOM elements tree that needs to be rendered to the browser. When working with class components, it's common to refer to their browser-rendered DOM elements as component instances. </p>
        <h1>Question: How UseState() Works?</h1>
        <p >Answer: useState is a Hook (function).It allows  to have state variables in functional components.For that, we have to pass the initial state to this function and it returns a variable with the current state value and another function to update this value. Therefore, we have to create a functional component and throw some React hook at it that tracks state, can also update it, and it just works. On this way, useState works.</p>
      </div>
    </div>
  );
}

export default App;
