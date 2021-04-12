import React, { useState } from 'react';
import { Text, FlatList } from 'react-native';
import axios from "axios";
import { ListItem, Avatar } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import {cutLongText} from 'src/utils/textUtils';
import { Container, HeaderContainer, TitleContainer, Title, ActionsContainer, CenterContainer } from 'src/styles';
import { AnimatedFragement, BackButtonContainer, ResultsContainer, SearchBarContainer } from './styles';
import ClickableIcon from 'src/components/ClickableIcon';
import SearchBarCustom from 'src/components/SearchBarCustom';

/* App Component*/
export default function HomeScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSearch = () => {    
    const options = {
      method: 'GET',
      url: 'https://themealdb.p.rapidapi.com/search.php',
      params: {s: searchTerm},
      headers: {
        'x-rapidapi-key': '343dccfcefmshe3771705f66d4b2p14503fjsn8e939e581029',
        'x-rapidapi-host': 'themealdb.p.rapidapi.com'
      }
    };

    setLoading(true);
    
    axios.request(options).then(function (response) {
      setLoading(false);
      setRecipes(response.data.meals)
    }).catch(function (error) {
      console.error(error);
    });
  };  

  const renderRecipe = (item) => {    
    return (
      <Animatable.View animation="zoomIn" duration={1000}>
        <ListItem bottomDivider>
          <Avatar source={{uri: item.strMealThumb}} rounded />
          <ListItem.Content>
            <ListItem.Title>{item.strMeal}</ListItem.Title>
            <ListItem.Subtitle>{cutLongText(item.strInstructions)}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>        
      </Animatable.View>
    );
  }

  return (
      <Container>
        <HeaderContainer>
          {!searchOpen && 
            <>
              <TitleContainer>
                <Title>Recipe App</Title>
              </TitleContainer>
              <ActionsContainer>
                <ClickableIcon onPress={() => setSearchOpen(true)} name="search" />
              </ActionsContainer> 
            </>
          }
          {searchOpen && 
              <AnimatedFragement animation="fadeInRight" duration={500}>
                <BackButtonContainer>
                  <ClickableIcon onPress={() => setSearchOpen(false)} name="chevron-left" />                  
                </BackButtonContainer>
                <SearchBarContainer>
                  <SearchBarCustom
                    onClear={() => setRecipes([])} showLoading={loading} onSubmitEditing={onSearch}
                    placeholder="ex: Apples" value={searchTerm} onChangeText={setSearchTerm} />
                  </SearchBarContainer>
              </AnimatedFragement>
          }        
        </HeaderContainer>
        <ResultsContainer>
          {recipes ?
            <FlatList 
              data={recipes}
              renderItem={({item}) => renderRecipe(item)}
              keyExtractor={item => item.idMeal.toString()}
              /> : 
            <CenterContainer>
              <Text>Start by searching for a recipe...</Text>
            </CenterContainer>
          }
        </ResultsContainer>
      </Container>
  );
}
