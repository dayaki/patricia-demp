import React, { useState } from "react";
import styled from "styled-components/native";
import MyOrder from "../components/OrderItem";

const MyOrders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      image: require("../assets/images/order1.png"),
      name: "Cheese Burger",
      desc: "Beef, Veggies & Chilli",
      amount: "2,000"
    },
    {
      id: 2,
      image: require("../assets/images/order2.png"),
      name: "Large Pizza",
      desc: "Extra Cheese & Toppings",
      amount: "2,070"
    },
    {
      id: 3,
      image: require("../assets/images/order3.png"),
      name: "Grilled Turkey",
      desc: "Sauce and Pepper",
      amount: "3,500"
    },
    {
      id: 4,
      image: require("../assets/images/order4.png"),
      name: "Peppersoup",
      desc: "Extra Cheese & Toppings",
      amount: "4,000"
    }
  ]);

  getOrderAmount = () => {
    return orders.reduce((i, e) => i + e);
  };
  deleteOrder = order => {
    const temp = [...orders];
    const newOrders = temp.filter(el => el.id !== order.id);
    setOrders(newOrders);
  };
  return (
    <Container>
      <Title>My Orders</Title>
      <SubTitle>Welcome to your cart, preview items below.</SubTitle>

      <Orders>
        {orders.length > 0 &&
          orders.map(order => (
            <MyOrder
              key={order.id}
              image={order.image}
              name={order.name}
              amount={order.amount}
              desc={order.desc}
              onDelete={() => deleteOrder(order)}
            />
          ))}
        {orders.length < 1 && (
          <NoContent>Sorry, you have no orders yet.</NoContent>
        )}
      </Orders>

      <Total>
        <TotalText>Total:</TotalText>
        <TotalAmount>NGN {"20,000"}</TotalAmount>
      </Total>
      <CheckoutBtn activeOpacity={0.8}>
        <CheckoutBtnText>Checkout</CheckoutBtnText>
      </CheckoutBtn>
    </Container>
  );
};
const Total = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;
const TotalText = styled.Text`
  font-size: 14px;
  color: #4a4a4a;
`;
const TotalAmount = styled.Text`
  font-weight: bold;
  font-size: 23px;
  line-height: 27px;
  color: #4a4a4a;
`;
const CheckoutBtn = styled.TouchableOpacity`
  background: #e25f38;
  border-radius: 9px;
  width: 100%;
  height: 50px;
  justify-content: center;
  margin-top: 50px;
`;
const CheckoutBtnText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
`;
const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
  padding: 50px 20px;
`;
const Title = styled.Text`
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  letter-spacing: -0.52px;
  color: #4a4a4a;
  margin-top: 70px;
`;
const SubTitle = styled.Text`
  font-size: 14px;
  line-height: 17px;
  color: #4a4a4a;
  margin-top: 5px;
`;
const Orders = styled.View`
  margin-top: 40px;
`;
const NoContent = styled.Text`
  font-size: 15px;
  line-height: 17px;
  color: #4a4a4a;
  margin-top: 5px;
  text-align: center;
  font-weight: bold;
`;

export default MyOrders;
