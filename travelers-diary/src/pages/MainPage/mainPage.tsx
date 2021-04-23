import React from 'react';
import ContentBlock from '../../components/InfoBlock';
import NavBar from '../../components/NavBar';
import { FilterBox } from './components/FilterBox';
function MainPage() {
  return (
    <>
      <NavBar />
      <main>
        <FilterBox />
        <ContentBlock />
      </main>
    </>
  );
}

export default MainPage;
