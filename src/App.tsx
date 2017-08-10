import * as React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { style } from 'typestyle';
import TaskContainer from './containers/TaskContainer';

export const intro = style({
  fontSize: 'large',
  color: 'tomato'
});

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <Header />
        <TaskContainer />
      </div>
    );
  }
}

export default App;
