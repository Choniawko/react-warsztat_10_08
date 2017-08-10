import * as React from 'react';
import './App.css';
import Header from './Header';
import { style } from 'typestyle';

export const intro = style({
  fontSize: 'large',
  color: 'tomato'
});

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <Header />
        <p className={intro}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
