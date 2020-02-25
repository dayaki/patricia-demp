import React from "react";
import styled from "styled-components/native";

const Input = ({ label }) => (
  <Wrapper>
    <Label>{label}</Label>
    <TextInput placeholder={label} />
  </Wrapper>
);

const Wrapper = styled.View`
  width: 100%;
  margin: 20px 0px;
`;
const Label = styled.Text`
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.28px;
  color: #4a4a4a;
  margin-bottom: 10px;
`;
const TextInput = styled.TextInput`
  border-bottom-color: #eaeaea;
  border-bottom-width: 1.5px;
  padding-bottom: 10px;
`;

export default Input;
