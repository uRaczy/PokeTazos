import styled from 'styled-components';

import LogoSrc from 'assets/pokemon-logo.png';

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
`;

export const StyledLogo = styled.div`
  background-image: url(${LogoSrc});
`;

export const StyledMenu = styled.ul`
`;

export const StyledMenuItem = styled.li`
`;
