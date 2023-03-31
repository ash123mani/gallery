import styled from 'styled-components'

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  padding: 4px 12px;
  border: 1px solid var(--border-color);
  ${({ removeBorder }) => `border-${removeBorder}: none`};
`

const StyledImage = styled.img`
  height: 32px;
  width: 32px;
  margin-left: 24px;
  cursor: pointer;
`

const View = styled.div`
  font-size: 1.8rem;
`
export { View, ImageContainer, StyledImage }
