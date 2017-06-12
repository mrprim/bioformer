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
  background-color: ${props => props.theme.highlightColor};
  color: ${props => props.theme.lightTextColor};
  cursor: pointer;
  border: 4px solid white;
  box-shadow: 0 0 0 6px  ${props => props.theme.highlightColor};

  &:hover, &:focus {
    background-color: palevioletred;
    box-shadow: 0 0 0 6px  palevioletred;
    outline: none;
  }

  &:active {
    background-color: ${props => props.theme.highlightColor};
    color: palevioletred;
    border: 4px solid palevioletred;
    box-shadow: none;
  }





`

export default GiantGoogleButton
