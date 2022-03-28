import React from 'react';
import { Link } from 'react-router-dom';
import { navs } from '../../config';
import styled from 'styled-components';
import { colorAll, fontAll } from '@shared/styles/Variables';
import { highlighter, media } from '@shared/styles/Mixin';

const NavStyle = styled.nav`
  font-family: ${fontAll.logo};
  font-size: 1.1rem;

  ul {
    display: flex;
    li {
      margin-right: 10px;
      a {
        &:hover {
          ${highlighter(colorAll.yellow)}
        }
      }
    }
  }

  ${media.tablet} {
    ul {
      flex-direction: column;
      li {
        margin: 10px;
        a {
          &:hover {
            ${highlighter('#ffffff')}
          }
        }
      }
    }
  }
`;

function Nav() {
  return (
    <NavStyle>
      <ul>
        {navs.map((nav, i) => (
          <li key={i}>
            <Link to={nav.link}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </NavStyle>
  );
}

export default Nav;
