import styled from 'styled-components'

const CharacterWrapper = styled.div`
  background: white;
  padding: 60px 10px;
  margin: 0 auto;
  text-align: center;
  width: 520px;

  &.umdaar-enter, &.umdaar-appear {
    h3 {
      color: ${props => props.theme.highlightColor};
      transform: scale(0,1);
      text-overflow: hidden;
    }
  }

  &.umdaar-enter.umdaar-enter-active, &.umdaar-appear.umdaar-appear-active {
    h3 {
      transform: scale(1,1);
      color: white;
      transition: transform 500ms ease-in, color 800ms ease-in;
      transform-origin: left;
    }
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
