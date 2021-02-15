import myStyle, { css } from "styled-components";

export const MyH1 = myStyle.h1`
 color: ${(props) => props.color};
 font-size: 1em;
`;

export const BtnSecondary = myStyle.button`
  background-color: red;
  color: yellow;
  padding: 10px 20px;
  font-weight: 600;
  outline: none;
  border: none;
  margin: 10px;

  ${({ BtnPrimary }) =>
    BtnPrimary &&
    css`
      background-color: blue;
      color: #fff;
      border: 4px solid green;
    `}


${({ BtnPrimaryOutline }) =>
  BtnPrimaryOutline &&
  css`
    background-color: transparent;
    color: red;
    border: 4px solid green;
  `}
`;

export const Button = myStyle.a`
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 11rem;
background: orange;
text-align: center;
color:  black;
border: 2px solid white;
${({outsideLink}) => outsideLink && css`
 background: blue;
 color: yellow;
`}
`;
