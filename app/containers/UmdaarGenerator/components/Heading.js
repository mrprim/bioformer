import styled from 'styled-components'

const Heading = styled.h3`
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.main};
  height: 46px;
  line-height: 60px;
  vertical-align: bottom;
  font-size: 1em;
  padding:0;
  margin-top: 17px;
  margin-bottom: 8px;
  text-transform: uppercase;

  &:before {
    content: '';
    display: block;
    float:left;
    border-left:7px solid ${props => props.theme.white};
    border-top: 7px solid ${props => props.theme.white};
    border-bottom: 7px solid transparent;
    border-right: 7px solid transparent;
  }

  &:after {
    content: '';
    margin-top: 32px;
    float: right;
    display: block;
    border-right:7px solid ${props => props.theme.white};
    border-bottom: 7px solid ${props => props.theme.white};
    border-top: 7px solid transparent;
    border-left: 7px solid transparent;
  }
`

export default Heading
