import styled from 'styled-components'

const CharacterWrapper = styled.div`
  padding: 60px 0;
  margin: 0 auto;
  text-align: center;
  width: 500px;

  .text-left {
    text-align: left;
  }

  .summary {
    color: ${props => props.theme.highlightColor};
    font-size: 1.5em;
  }

  h3 {
    color: ${props => props.theme.lightTextColor};
    background-color: ${props => props.theme.highlightColor};
    height: 38px;
    line-height: 44px;
    vertical-align: bottom;
    padding:0;
    margin-bottom: 4px;
    &:before {
      content: '';
      display: block;
      float:left;
      border-left:19px solid white;
      border-top: 19px solid white;
      border-bottom: 19px solid transparent;
      border-right: 19px solid transparent;
    }

    &:after {
      content: '';
      float: right;
      display: block;
      border-right:19px solid white;
      border-bottom: 19px solid white;
      border-top: 19px solid transparent;
      border-left: 19px solid transparent;
    }

  }
`

export default CharacterWrapper
