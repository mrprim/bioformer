import styled from 'styled-components'

const CharacterWrapper = styled.div`
  background: white;
  padding: 60px 10px;
  margin: 0 auto;
  text-align: center;
  width: 520px;

  &.example-enter, &.example-appear {
    opacity: 0.01;
  }

  &.example-enter.example-enter-active, &.example-appear.example-appear-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .text-left {
    text-align: left;
  }

  h2 {
    color: ${props => props.theme.highlightColor};
    font-size: 1.2em;
    text-transform: uppercase;
  }
`

export default CharacterWrapper
