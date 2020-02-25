import React from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";

const WalletModal = ({ visible, onClose, onCancel, onConfirm }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
  >
    <Container>
      <Content>
        <Handle />
        <Img source={require("../assets/images/illustration.png")} />
        <Title>Default Wallet Selection</Title>
        <Text>
          If you proceed, All cards transactions will be charged from the
          selected wallet.
        </Text>
        <ConfirmBtn activeOpacity={0.8} onPress={onConfirm}>
          <ConfirmBtnText>Confirm</ConfirmBtnText>
        </ConfirmBtn>
        <CancelBtn activeOpacity={0.8} onPress={onCancel}>
          <CancelBtnText>Click here to cancel</CancelBtnText>
        </CancelBtn>
      </Content>
    </Container>
  </Modal>
);

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  /* background: red; */
  opacity: 0.6;
`;
const Content = styled.View`
  background: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  align-items: center;
  padding: 15px 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
const Handle = styled.View`
  border-radius: 10px;
  background: #e0e6ed;
  width: 36px;
  height: 5px;
`;
const Img = styled.Image`
  width: 160.45px;
  height: 120px;
  resize-mode: cover;
  margin: 20px 0px 10px 0px;
`;
const Title = styled.Text`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #575a65;
`;
const Text = styled.Text`
  font-size: 14px;
  line-height: 25px;
  color: #9da8b6;
  opacity: 0.7;
  text-align: center;
  margin-top: 10px;
`;
const ConfirmBtn = styled.TouchableOpacity`
  height: 52px;
  background: #fdf3f1;
  border-radius: 4px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 15px;
`;
const ConfirmBtnText = styled.Text`
  font-size: 14px;
  color: #e25f38;
  text-transform: uppercase;
`;
const CancelBtn = styled.TouchableOpacity`
  margin-bottom: 20px;
`;
const CancelBtnText = styled(ConfirmBtnText)`
  font-size: 12px;
  text-transform: none;
`;

export default WalletModal;
