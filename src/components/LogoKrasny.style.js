import styled from 'styled-components';
import icon from '../../assets/icons/pk.svg';

export const StyledWrap = styled.div`
  font-family: 'Ubuntu', sans-serif;
  ${({ white }) => white && `color: white`}
`;

export const StyledP = styled.p`
  ${({ white }) => white && `color: white`}
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 30px;
  letter-spacing: -2px;
  display: block;
  position: relative;
  margin-left: 50px;

  ::before {
    ${({ theme }) => theme.media.smAbove} {
      content: '';
      position: absolute;
      top: 0;
      left: -50px;
      width: 44px;
      height: 44px;
      border: 3.8px solid ${({ white }) => (white ? `white;` : `#313548;`)};
      background-image: url(${icon}) ${({ white }) => white && `white;`};
      background-position: center;
      background-repeat: no-repeat;
      color: black;
    }
  }
`;

export const StyledSpan = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 12px;
  letter-spacing: -0.2px;
  margin-left: 50px;
  margin-top: -10px;
  display: block;
`;
