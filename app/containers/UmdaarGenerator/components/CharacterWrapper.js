import styled from 'styled-components'

// background: url('/assets/alien-mountain.png')
const CharacterWrapper = styled.div`
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
  padding: 40px 10px;
  margin: 0 auto;
  text-align: center;
  width: 520px;
  min-height: 100%;
  font-family: 'Montserrat', sans serif;

  .text-left {
    text-align: left;
  }

  h2 {
    color: ${props => props.theme.main};
    font-size: 1.2em;
    font-variant: small-caps;

  }

  &.umdaar-enter, &.umdaar-appear {
    & > div {
      label, span {
        transform: scale(1,0);
      }

      h3 {
        color: transparent;
        width: 0;
        overflow: hidden;
      }
    }
  }

  &.umdaar-enter.umdaar-enter-active, &.umdaar-appear.umdaar-appear-active {
    & > div {
      label, span {
        transform: scale(1,1);
        transition: transform 500ms ease-in;
        transform-origin: top;
      }

      h3 {
        color: ${props => props.theme.white};
        width: 100%;
        transition: width 500ms ease-in, color 800ms ease-in;
        transform-origin: left;
      }
    }
  }
`

export default CharacterWrapper
