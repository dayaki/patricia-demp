import React from "react";
import styled from "styled-components/native";

const Details = () => {
  return (
    <Container>
      <Header>
        <HeaderBtn
          activeOpacity={0.8}
          onPress={() => navigation.navigate("orders")}
        >
          <HeaderBtnImg source={require("../assets/images/basket.png")} />
        </HeaderBtn>
      </Header>
      <TitlesWrapper>
        <Titles>
          <Title>Cheese</Title>
          <Title>Burger</Title>
        </Titles>
        <Titles>
          <SubTitle>NGN</SubTitle>
          <Title>2000</Title>
        </Titles>
      </TitlesWrapper>
      <Product>
        <ProductImage source={require("../assets/images/burger.png")} />
        <ProductDesc>
          Our Medium Cheeze burger is packed with just the right the amount of
          nutrition including veggies you need to kickstart your day. Perfect
          for breakfast choice!
        </ProductDesc>
      </Product>
    </Container>
  );
};
const Product = styled.View`
  margin: 60px 0px 30px 0px;
  align-self: center;
`;
const ProductImage = styled.Image`
  resize-mode: cover;
`;
const ProductDesc = styled.Text`
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.28px;
  color: #4a4a4a;
  -webkit-margin-bottom-collapse
`;
const Container = styled.ScrollView`
  flex: 1;
  padding: 30px;
  background: #fff;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 50px;
`;
const HeaderBtn = styled.TouchableOpacity``;
const HeaderBtnImg = styled.Image`
  resize-mode: cover;
`;
const TitlesWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;
const Titles = styled.View`
  text-align: right;
`;
const Title = styled.Text`
  font-weight: bold;
  font-size: 26px;
  line-height: 29px;
  letter-spacing: -0.52px;
  color: #4a4a4a;
`;
const SubTitle = styled.Text`
  text-align: right;
  font-weight: 300;
  font-size: 15px;
  line-height: 33px;
  letter-spacing: -0.3px;
  color: #4a4a4a;
  margin-bottom: -10px;
`;

export default Details;
