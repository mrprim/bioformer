import styled from 'styled-components'

const GiantGoogleButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  height:160px;
  width:160px;
  font-size: 100px;
  line-height: 152px;
  border-radius:160px;
  text-align: center;
  text-overflow: hidden;
  background-color: ${props => props.theme.main};
  color: ${props => props.theme.white};
  cursor: pointer;
  border: 4px solid ${props => props.theme.white};
  box-shadow: 0 0 0 6px  ${props => props.theme.main};

  &:hover, &:focus {
    background-color: ${props => props.theme.highlight};
    box-shadow: 0 0 0 6px  ${props => props.theme.highlight};
    outline: none;
  }

  &:active {
    background-color: ${props => props.theme.main};
    color: ${props => props.theme.highlight};
    border: 4px solid ${props => props.theme.highlight};
    box-shadow: none;
  }
`

export default GiantGoogleButton
