import React, { useState } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import Toggle from './Toggle';
import Side from './Side';
import styled from 'styled-components';
import { DesktopScreen, media, TabletScreen } from '@shared/styles/Mixin';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;

  ${media.tablet} {
    padding: 2rem;
  }
  ${media.mobile} {
    padding: 1rem;
  }
`;

function Header() {
  const [side, setSide] = useState<boolean>(false);

  const handleSide: HandleToggle = () => {
    setSide(!side);
  };

  return (
    <HeaderStyle>
      <Logo />
      <DesktopScreen>
        <Nav />
      </DesktopScreen>
      <TabletScreen>
        <Toggle isChecked={side} handleToggle={handleSide} />
        <Side handleToggle={handleSide} />
      </TabletScreen>
    </HeaderStyle>
  );
}

export default Header;
