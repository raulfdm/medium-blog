import media from 'styled-media-query';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

import { styled } from 'styles/emotion';
import { Container } from 'components/Ui';

export const MenuBarWrapper = styled(motion.nav)`
  box-shadow: 0 4px 12px 0 ${({ theme }) => theme.color.shadowMenu};

  border-bottom: ${({ theme }) =>
    theme.isDarkTheme ? `1px solid ${theme.color.border}` : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 65px;
  z-index: 500;

  background-color: ${({ theme }) => theme.color.background};
  transition: background-color 0.2s ease;

  a {
    color: inherit;
  }
`;

export const TextLink = styled(Link)`
  font-weight: bold;
  font-family: ${({ theme }) => theme.font.contentSerif};
  margin-right: 8px;
  font-size: 14px;
`;

export const CustomContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.greaterThan('medium')`
    max-width: 90%;
    padding: 0;
  `}

  ${media.greaterThan('large')`
    max-width: 80%;
  `}
`;

export const DummySpace = styled.div`
  height: 65px;
  margin-bottom: 35px;

  ${media.greaterThan('medium')`
    margin-bottom: 65px;
  `}
`;

export const LogoWrapper = styled.div`
  flex: 1;
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  outline: ${({ theme }) => theme.color.background};
  cursor: pointer;
  width: 45px;

  svg {
    color: ${({ theme }) => theme.color.font};
  }
`;
