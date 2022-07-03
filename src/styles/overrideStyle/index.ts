import styled, { css } from 'styled-components'
import { media } from '../media'
import { Colors } from '../theme'

export const BlockStyle = styled.section`
  margin-top: 16px;
  padding: 12px;
  background-color: ${Colors.white};
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  ${media.mobile(css`
      padding: 24px;
  `)}
`

export const PostBoxStyle = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  padding: 8px;
  background: ${Colors.white};
  border: 1px solid ${Colors.grey[300]};
  border-radius: 8px;
  overflow: hidden;
  transition: .3s box-shadow;
  box-shadow:  0 1px 2px 0 rgb(0 0 0 / 0.05);
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
`