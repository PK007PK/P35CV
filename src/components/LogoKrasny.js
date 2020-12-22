import React from 'react';
import { StyledWrap, StyledP, StyledSpan } from './LogoKrasny.style';

const Logo = ({ className, white }) => (
  <StyledWrap className={className} white={white}>
    <StyledP white={white}>Piotr Krasny</StyledP>
    <StyledSpan white={white}>web development and design</StyledSpan>
  </StyledWrap>
);

export default Logo;
