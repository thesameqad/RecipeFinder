import React from 'react';
import { Container, TitleContainer , HeaderContainer, Title, CenterContainer} from "../../styles";
import { Text, View } from 'react-native';
import { ContentContainer } from './styles';


export default function AboutScreen() {
    return (
        <Container>
            <HeaderContainer>
                <TitleContainer>
                    <Title>Recipe App</Title>
                </TitleContainer>
            </HeaderContainer>
            <ContentContainer>
                <CenterContainer>
                    <Text>Created by Anton Erman</Text>
                </CenterContainer>
            </ContentContainer>
        </Container>
    )
}