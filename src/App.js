import React from 'react';
import { Provider } from 'react-redux';

import RichEditor from './components/RichEditor';
import { StyledApp } from './styles';

import { store } from './store/index';

const App = () => {
  return (
    <Provider store={store}>
      <StyledApp>
        <RichEditor />
      </StyledApp>
    </Provider>
  );
}

export default App;
