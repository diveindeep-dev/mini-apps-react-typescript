import React from 'react';
import Nav from './Nav';

function Layout({ children }: any) {
  return (
    <>
      <header>
        <div>MART</div>
        <Nav />
      </header>
      <main id="main">{children}</main>
    </>
  );
}

export default Layout;
