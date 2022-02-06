import { observer } from 'mobx-react';
import React from 'react';
import Footer from './ui/footer';
import Header from './ui/header';
import Main from './ui/main';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default observer(App);
