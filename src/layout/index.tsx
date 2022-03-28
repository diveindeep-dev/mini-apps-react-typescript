import React from 'react';
import Header from './header';

function Layout({ children }: any) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
    </>
  );
}

export default Layout;
