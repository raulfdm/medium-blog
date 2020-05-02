import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import { Container } from '../../Ui';

const Title = styled.h1`
  font-size: 34px;
  line-height: 40px;

  ${media.greaterThan('medium')`
    font-size: 42px;
  `}
`;

const Subtitle = styled.p`
  font-size: 24px;
  line-height: 1.22;
  letter-spacing: -0.012em;
  font-family: ${({ theme }) => theme.font.contentSans};
  opacity: 0.54;

  ${media.greaterThan('medium')`
    font-size: 28px;
  `}
`;

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <Container as="header" data-testid="header">
      <Title data-testid="header-title">{title}</Title>
      {subtitle && (
        <Subtitle data-testid="header-subtitle">{subtitle}</Subtitle>
      )}
    </Container>
  );
};
