# react-mercure

This React library gives you the possibility to integrate Mercure in your React applications. To do that you have two possibilities : integrate it either with an HOF given by this library or with a common component also given by this library.

## `MercureSubscriber` component

You can use the given `MercureSubscriber` component by doing the following :

```js
function App() {
  const [data, setData] = React.useState({ name: 'Boris' });

  return (
    <div>
      <MercureSubscriber
        hub="http://localhost/hub"
        topics={['http://localhost/user']}
        update={setData}
        json
      >
        <h1>Hello {data.name}</h1>
      </MercureSubscriber>
    </div>
  );
}

export default App;
```

The `MercureSubscriber` React Component require these props :

- `hub`: a string representing the URL of the Mercure hub ;
- `topics`: an array of string reprensenting the topics we want to subscribe ;
- `update`: a callback executed when a new message is pushed on the hub in the given topics.

Some additionnals props can be passed :

- `json`: a boolean. If set as `true`, the data will be parse with the `JSON.parse` function before passing them the the callback ;
- `children`: can be other components passed as childrend.

## With the HOF

TODO : this part of the doc needs to be written!

```js
import React from 'react';
import { withMercure } from '@cerati/react-mercure';

function App({ mercureData }) {
  return (
    <React.Fragment>
      <h1>Hello {mercureData.name}</h1>
    </React.Fragment>
  );
}

const config = {
  hub: 'http://localhost/hub',
  topics: ['http://localhost/user'],
  json: true,
};

export default withMercure(config, {
  name: 'Boris',
})(App);
```
