import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const OrderItem = ({ image, name, desc, amount, onDelete }) => (
  <Container>
    <Order>
      <Image source={image} />
      <View>
        <OrderName>{name}</OrderName>
        <OrderDesc>{desc}</OrderDesc>
      </View>
    </Order>
    <OrderAmount>NGN {amount}</OrderAmount>
    <DeleteOrder activeOpacity={0.8} onPress={onDelete}>
      <DeleteImg source={require("../assets/images/delete.png")} />
    </DeleteOrder>
  </Container>
);

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;
const Order = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Image = styled.Image`
  resize-mode: cover;
  width: 50px;
  height: 48px;
  border-radius: 10px;
  margin-right: 10px;
`;
const OrderName = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #4a4a4a;
`;
const OrderDesc = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: #4a4a4a;
  margin-top: 10px;
`;
const OrderAmount = styled.Text`
  color: #4a4a4a;
  font-size: 12px;
`;
const DeleteOrder = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background: #f9e1da;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;
const DeleteImg = styled.Image``;

export default OrderItem;
