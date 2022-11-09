import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsFillHeartFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <Wrapper>
      <LinkContainer>
        <Link to='/'>
          <button>Home</button>
        </Link>
        <Link to='/about'>
          <button>About</button>
        </Link>
      </LinkContainer>

      <IconContainer>
        <Link to='/favorites'>
          <button>
            <BsFillHeartFill />
          </button>
        </Link>
      </IconContainer>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  background-color: #fff;
  color: #000;
  height: fit-content;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const LinkContainer = styled.div``;

const IconContainer = styled.div``;
