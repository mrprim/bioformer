import styled from 'styled-components'

const LabelValueItem = styled.div`
  > label {
    display: inline-block;
    width:100px;
    margin-right: 10px;
    text-align: right;
    font-weight: bolder;
    color: ${props => props.theme.main};
    font-family: 'Tangerine', sans serif;
  }

  > span {
    font-family: 'Tangerine', serif;
  }
`

export default LabelValueItem
