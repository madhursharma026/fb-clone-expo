import React from "react";
import Avatar from './Avatar';
import styled from "styled-components";
import { ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Container = styled.SafeAreaView`
    width: 100%;
    height: 192px;
    flex-direction: row;
    align-items: center;
`

const Card = styled.View`
    width: 106px;
    height: 170px;
    position: relative;
    margin-right: 8px;
`

const CardStory = styled.Image`
    width: 100%;
    height: 170px;
    border-radius: 12px;
`

const CardUser = styled.View`
    position: absolute;
    top: 8px;
    left: 8px;
    background: #FFFFFF;
    border-radius: 20px;
    width: 39px;
    height: 39px;
    align-items: center;
    justify-content: center;
`

const CardFooter = styled.View`
    width: 100%;
    position: absolute;
    bottom: 12px;
    left: 9px;
`

const Text = styled.Text`
    font-size: 13px;
    font-weight: bold;
    color: #FFFFFF;
    text-shadow: 1px 1px 1px rgba(0,0,0,0);
`

const BottomDivider = styled.View`
    width: 100%;
    height: 9px;
    background: #F0F2F5;
`

export default function Story() {
    return (
        <>
            <Container>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 11 }}>
                    <Card>
                        <CardStory source={require('../assets/story.jpeg')} />
                        <CardUser>
                            <AntDesign name="plus" size={24} color={'#1777f2'} />
                        </CardUser>
                        <CardFooter>
                            <Text>Add To Story</Text>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardStory source={require('../assets/story.jpeg')} />
                        <CardUser>
                            <Avatar source={require('../assets/user.png')} story={true} />
                        </CardUser>
                        <CardFooter>
                            <Text>Wanessa J</Text>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardStory source={require('../assets/story.jpeg')} />
                        <CardUser>
                            <Avatar source={require('../assets/user.png')} story={true} />
                        </CardUser>
                        <CardFooter>
                            <Text>Wanessa J</Text>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardStory source={require('../assets/story.jpeg')} />
                        <CardUser>
                            <Avatar source={require('../assets/user.png')} story={true} />
                        </CardUser>
                        <CardFooter>
                            <Text>Wanessa J</Text>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardStory source={require('../assets/story.jpeg')} />
                        <CardUser>
                            <Avatar source={require('../assets/user.png')} story={true} />
                        </CardUser>
                        <CardFooter>
                            <Text>Wanessa J</Text>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardStory source={require('../assets/story.jpeg')} />
                        <CardUser>
                            <Avatar source={require('../assets/user.png')} story={true} />
                        </CardUser>
                        <CardFooter>
                            <Text>Wanessa J</Text>
                        </CardFooter>
                    </Card>
                </ScrollView>
            </Container>
            <BottomDivider />
        </>
    );
}

