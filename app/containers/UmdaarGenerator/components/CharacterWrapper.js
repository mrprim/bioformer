import styled from 'styled-components'

const CharacterWrapper = styled.div`
  background: white;
  padding: 60px 10px;
  margin: 0 auto;
  text-align: center;
  width: 520px;

  .text-left {
    text-align: left;
  }

  h2 {
    color: ${props => props.theme.highlightColor};
    font-size: 1.2em;
    text-transform: uppercase;
  }

  h3 {
    color: ${props => props.theme.lightTextColor};
    background-color: ${props => props.theme.highlightColor};
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
      border-left:7px solid white;
      border-top: 7px solid white;
      border-bottom: 7px solid transparent;
      border-right: 7px solid transparent;
    }

    &:after {
      content: '';
      margin-top: 32px;
      float: right;
      display: block;
      border-right:7px solid white;
      border-bottom: 7px solid white;
      border-top: 7px solid transparent;
      border-left: 7px solid transparent;
    }

  }
`

export default CharacterWrapper
