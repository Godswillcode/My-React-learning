import styled from 'styled-components'

export const BtnPrimary = styled.button`
color: #eee;
background-color: lightblue;
padding: 10px 15px;
`;

export const BtnSecondary = styled.button`
  color: #eee;
  background-color: ${(props) => props.color};
  padding: 10px 15px;
`