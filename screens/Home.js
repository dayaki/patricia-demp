import React from "react";
import styled from "styled-components/native";

const Home = ({ navigation }) => {
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
      <Title>Hello, John</Title>
      <SubTitle>Select your meal for the day</SubTitle>

      <SearchWrapper>
        <SearchImg source={require("../assets/images/search.png")} />
        <Input
          placeholder="search for meals, dishes"
          placeholderTextColor="rgba(74, 74, 74, 0.521798)"
        />
      </SearchWrapper>

      <Menus>
        <Menu activeOpacity={0.8} onPress={() => navigation.navigate('Details')}>
          <MenuImage source={require("../assets/images/menu1.png")} />
          <MenuName>Cheese Burger</MenuName>
          <MenuDesc>Beef, Veggies & Chilli</MenuDesc>
          <Rating>
            <Star source={require("../assets/images/star.png")} />
            <Star source={require("../assets/images/star.png")} />
            <Star source={require("../assets/images/star.png")} />
            <Star source={require("../assets/images/star.png")} />
            <Star source={require("../assets/images/star.png")} />
          </Rating>
        </Menu>
        <Menu activeOpacity={0.8} onPress={() => navigation.navigate('Details')}>
          <MenuImage source={require("../assets/images/menu2.png")} />
          <MenuName>Jollof Rice</MenuName>
          <MenuDesc>Grilled Chicken, Veggies & Sauce</MenuDesc>
          <Rating>
            <Star source={require("../assets/images/star.png")} />
            <Star source={require("../assets/images/star.png")} />
            <Star source={require("../assets/images/star.png")} />
            <Star source={require("../assets/images/star.png")} />
            <Star source={require("../assets/images/star.png")} />
          </Rating>
        </Menu>
      </Menus>

      <Recomend>
        <TopNav>
          <TopNavTitle>Recommended</TopNavTitle>
          <TopNavBtn>
            <TopNavBtnText>View all</TopNavBtnText>
          </TopNavBtn>
        </TopNav>
        <Items horizontal showsHorizontalScrollIndicator={false}>
          <Item
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Details")}
          >
            <ItemImage source={require("../assets/images/order1.png")} />
          </Item>
          <Item
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Details")}
          >
            <ItemImage source={require("../assets/images/order2.png")} />
          </Item>
          <Item
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Details")}
          >
            <ItemImage source={require("../assets/images/order3.png")} />
          </Item>
          <Item
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Details")}
          >
            <ItemImage source={require("../assets/images/order4.png")} />
          </Item>
          <Item
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Details")}
          >
            <ItemImage source={require("../assets/images/order2.png")} />
          </Item>
        </Items>
      </Recomend>
    </Container>
  );
};

const Recomend = styled.View`
  width: 100%;
  margin-top: 20px;
`;
const TopNav = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const TopNavTitle = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.28px;
  color: #4a4a4a;
`;
const TopNavBtn = styled.TouchableOpacity``;
const TopNavBtnText = styled.Text`
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.28px;
  color: #4a4a4a;
`;
const Items = styled.ScrollView``;
const Item = styled.TouchableOpacity`
  margin-right: 20px;
`;
const ItemImage = styled.Image`
  resize-mode: cover;
  width: 100px;
  height: 80px;
  border-radius: 10px;
`;
const Menus = styled.View`
  width: 100%;
  margin-top: 40px;
`;
const Menu = styled.TouchableOpacity`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 35px rgba(141, 141, 141, 0.150677);
  border-radius: 9px;
  padding-bottom: 10px;
  margin-bottom: 30px;
`;
const MenuImage = styled.Image`
  width: 100%;
  resize-mode: cover;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
`;
const MenuName = styled.Text`
  margin-top: 20px;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.28px;
  color: #4a4a4a;
  padding-left: 15px;
`;
const MenuDesc = styled.Text`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.24px;
  color: #4a4a4a;
  padding-left: 15px;
  margin-top: 10px;
`;
const Rating = styled.View`
  padding-left: 15px;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`;
const Star = styled.Image`
  resize-mode: cover;
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
const Title = styled.Text`
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  letter-spacing: -0.52px;
  color: #4a4a4a;
`;
const SubTitle = styled.Text`
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.28px;
  color: #4a4a4a;
  margin-top: 10px;
`;
const SearchWrapper = styled.View`
  background: #f6f6f6;
  border-radius: 9px;
  margin-top: 30px;
  flex-direction: row;
  align-content: center;
  padding: 15px;
`;
const SearchImg = styled.Image`
resize-mode; cover;
`;
const Input = styled.TextInput`
  margin-left: 5px;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.28px;
  color: rgba(74, 74, 74, 0.521798);
`;

export default Home;
