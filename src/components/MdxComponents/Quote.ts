import styled from 'styled-components';
import media from 'styled-media-query';

export const Quote = styled.blockquote`
  /* Resetting global blockquote style  */
  && {
    margin: 0;
    box-shadow: none;
  }

  text-rendering: optimizelegibility;
  padding-left: 30px;
  font-size: 26px;
  line-height: 44px;
  color: ${({ theme }) => theme.color.font};
  opacity: 0.6;
  font-family: ${({ theme }) => theme.font.contentTitle};
  letter-spacing: -0.33px;
  font-weight: 400;

  ${media.greaterThan('medium')`
    font-size: 30px;
  `}
`;
