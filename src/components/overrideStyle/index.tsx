import styled, { css } from 'styled-components'
import { media } from '../../styles/media'
import { Colors } from '../../styles/theme'

export const BlockStyle = styled.section`
  margin-top: 16px;
  padding: 12px;
  background-color: ${Colors.white};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 2px;
  ${media.mobile(css`
      padding: 24px;
  `)}
`