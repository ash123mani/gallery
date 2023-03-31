import styled from 'styled-components'

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  ${({ removeBorder }) => `border-${removeBorder}: none`};
`

const StyledImage = styled.img`
  margin-left: 24px;
  cursor: pointer;
`

const View = styled.div`
  font-size: 1.8rem;
`
export { View, ImageContainer, StyledImage }
