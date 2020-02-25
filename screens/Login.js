import React from "react";
import styled from "styled-components/native";
import Input from "../components/Input";

const Login = ({ navigation }) => {
  handleLogin = () => {
    // validation logic
    navigation.navigate("Home");
  };
  return (
    <Container>
      <Header>
        <HeaderTitle>Welcome Back!</HeaderTitle>
        <HeaderText>Login to your account</HeaderText>
      </Header>
      <Form>
        <Input label="Username" />
        <Input label="Password" />
        <FormNav>
          <RememberMe>Remember me</RememberMe>
          <ForgotPass activeOpacity={0.8}>
            <ForgotPassText>Forgot Password?</ForgotPassText>
          </ForgotPass>
        </FormNav>
        <LoginBtn activeOpacity={0.8} onPress={handleLogin}>
          <LoginBtnText>Login</LoginBtnText>
        </LoginBtn>
        <FooterForm>
          <FooterText>New user? </FooterText>
          <FooterBtn
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Register")}
          >
            <FooterBtnText>Signup</FooterBtnText>
          </FooterBtn>
        </FooterForm>
      </Form>
      {/* <Footer /> */}
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
`;
const Header = styled.View`
  padding: 0px 30px;
  margin-top: 200px;
`;
const HeaderTitle = styled.Text`
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  color: #4a4a4a;
`;
const HeaderText = styled.Text`
  color: #4a4a4a;
  font-size: 14px;
  line-height: 17px;
  margin-top: 10px;
`;
const Form = styled.View`
  padding: 30px;
`;
const FormNav = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const RememberMe = styled.Text``;
const ForgotPass = styled.TouchableOpacity``;
const ForgotPassText = styled.Text`
  color: #e25f38;
  font-size: 14px;
`;
const LoginBtn = styled.TouchableOpacity`
  background: #e25f38;
  border-radius: 9px;
  align-self: center;
  width: 70%;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-top: 80px;
`;
const LoginBtnText = styled.Text`
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
`;
const FooterForm = styled.View`
  width: 100%;
  padding: 30px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const FooterText = styled.Text``;
const FooterBtn = styled.TouchableOpacity`
  margin-left: 2px;
`;
const FooterBtnText = styled.Text`
  color: #e25f38;
  font-size: 14px;
`;
const Footer = styled.View`
  width: 100%;
  height: 57px;
  background: #fdf3f1;
  position: absolute;
  bottom: 0px;
`;

export default Login;
