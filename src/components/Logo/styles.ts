import styled, { css } from 'styled-components'

import { LogoProps } from '.'

export const Wrapper = styled.div<LogoProps>`
  color: red;
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
  `}
`
