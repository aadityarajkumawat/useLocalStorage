<center><h1>useLocalStorage</h1></center>
useLocalStorage is a small hook which can be use to persist local state of a component, by storing it in local storage of browser, it could be field inputs in a form, theme type (light or dark), save user data to avoid refetching on page reload and a lot more.
<br><br/>

## Installation

```bash
#npm

npm install use-local-storage-easy

#yarn

yarn add use-local-storage-easy
```

## Usage

It takes two parameters which are required,

```jsx
// initial state can be: string, number, object, array
// key: it is a string, which is used as key for key name in local storage of browser.
const [state, setState] = useLocalStorage(initialState, key);
```

It returns an array of state and setState which is a function, very similar to the useState hook.

## Example

```jsx
import "./App.css";
import { useLocalStorage } from "use-local-storage-easy";

function App() {
  const [counter, setCounter] = useLocalStorage(0, "count");
  return (
    <div className="App">
      <div>Count: {counter}</div>
      <button onClick={() => setCounter((count) => count + 1)}>
        increment
      </button>
    </div>
  );
}

export default App;
```

Increase count and on reload it should persist its value
