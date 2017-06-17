import styled from 'styled-components'

const Button = styled.button`
  font-size: 1.5em;
  text-align: center;
  background-color: ${props => props.theme.highlight};
  border-radius: 5px;
  cursor: pointer;
`

export default Button
