import React from "react";
import Avatar from "./Avatar";
import { View, ScrollView } from 'react-native';
import styled from "styled-components/native";
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const Container = styled.View`
    flex: 1;
`

const Header = styled.View`
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 6px;
    padding: 0 11px;
`

const Row = styled.View`
    align-items: center;
    flex-direction: row;
`

const User = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #222121;
`

const Time = styled.Text`
    font-size: 12px;
    color: #747476;
`

const Post = styled.Text`
    font-size: 15px;
    text-align: justify;
    color: #222121;
    line-height: 16px;
    padding: 2px 11px;
`

const Photo = styled.Image`
    margin-top: 9px;
    width: 100%;
    height: 300px;
`

const Footer = styled.View`
    padding: 0 11px;
`

const FooterCount = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 9px 0;
`

const IconCount = styled.View`
    background: #1878f3;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
`

const TextCount = styled.Text`
    font-size: 12px;
    color: #424040;
`

const Separator = styled.View`
    width: 100%;
    height: 1px;
    background: #F9F9F9;
`

const FooterMenu = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 9px 0;
`

const Button = styled.TouchableOpacity`
    flex-direction: row;
`

const Icon = styled.View`
    margin-right: 6px;
`

const Text = styled.Text`
    font-size: 14px;
    color: #424040;
`

const BottomDivider = styled.View`
    width: 100%;
    height: 9px;
    background: #F0F2F5;
`


export default function Feed() {
    return (
        <>
            <Container>
                <Header>
                    <Row>
                        <Avatar source={require('../assets/user.png')} story={true} />
                        <View style={{ paddingLeft: 10 }}>
                            <User>Wanessa J</User>
                            <Row>
                                <Time> 9am </Time>
                                <Entypo name='dot-single' size={12} color={'#747476'} />
                                <Entypo name='globe' size={10} color={'#747476'} />
                            </Row>
                        </View>
                    </Row>
                    <Entypo name='dots-three-horizontal' size={15} color={'#222121'} />
                </Header>
                <Post>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus ea repellat laborum consequatur, temporibus magni at corrupti nostrum. Blanditiis, architecto dolores, nihil, nisi in repudiandae asperiores id sequi saepe porro illum tenetur! Nihil sequi neque corporis fuga eaque, excepturi, qui facilis velit necessitatibus nam molestiae eos nemo? Quibusdam aliquid deserunt totam illo voluptas ratione ex voluptatum ad nobis animi placeat qui, distinctio optio ducimus assumenda labore nesciunt inventore temporibus minus dicta consequatur libero! Ab, nesciunt eius exercitationem harum ratione a temporibus sit asperiores consequuntur animi laboriosam ipsam eum facere enim similique cupiditate. Atque, neque eveniet tempore deleniti aperiam adipisci.
                </Post>
                <Photo source={require('../assets/photo.jpeg')} />
                <Footer>
                    <FooterCount>
                        <Row>
                            <IconCount>
                                <AntDesign name="like2" size={12} color={'#FFFFFFF'} />
                            </IconCount>
                            <TextCount>99 likes</TextCount>
                        </Row>
                        <TextCount>2K Comments</TextCount>
                    </FooterCount>
                    <Separator />
                    <FooterMenu>
                        <Button>
                            <Icon>
                                <AntDesign name="like2" size={20} color={'#424040'} />
                            </Icon>
                            <Text>Like</Text>
                        </Button>
                        <Button>
                            <Icon>
                                <MaterialCommunityIcons name="comment-outline" size={20} color={'#424040'} />
                            </Icon>
                            <Text>Comment</Text>
                        </Button>
                        <Button>
                            <Icon>
                                <MaterialCommunityIcons name="share-outline" size={20} color={'#424040'} />
                            </Icon>
                            <Text>Share</Text>
                        </Button>
                    </FooterMenu>
                </Footer>
                <BottomDivider />
            </Container>

            <Container>
                <Header>
                    <Row>
                        <Avatar source={require('../assets/user.png')} story={true} />
                        <View style={{ paddingLeft: 10 }}>
                            <User>Wanessa J</User>
                            <Row>
                                <Time> 9am </Time>
                                <Entypo name='dot-single' size={12} color={'#747476'} />
                                <Entypo name='globe' size={10} color={'#747476'} />
                            </Row>
                        </View>
                    </Row>
                    <Entypo name='dots-three-horizontal' size={15} color={'#222121'} />
                </Header>
                <Post>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus ea repellat laborum consequatur, temporibus magni at corrupti nostrum. Blanditiis, architecto dolores, nihil, nisi in repudiandae asperiores id sequi saepe porro illum tenetur! Nihil sequi neque corporis fuga eaque, excepturi, qui facilis velit necessitatibus nam molestiae eos nemo? Quibusdam aliquid deserunt totam illo voluptas ratione ex voluptatum ad nobis animi placeat qui, distinctio optio ducimus assumenda labore nesciunt inventore temporibus minus dicta consequatur libero! Ab, nesciunt eius exercitationem harum ratione a temporibus sit asperiores consequuntur animi laboriosam ipsam eum facere enim similique cupiditate. Atque, neque eveniet tempore deleniti aperiam adipisci.
                </Post>
                <Photo source={require('../assets/photo.jpeg')} />
                <Footer>
                    <FooterCount>
                        <Row>
                            <IconCount>
                                <AntDesign name="like2" size={12} color={'#FFFFFFF'} />
                            </IconCount>
                            <TextCount>99 likes</TextCount>
                        </Row>
                        <TextCount>2K Comments</TextCount>
                    </FooterCount>
                    <Separator />
                    <FooterMenu>
                        <Button>
                            <Icon>
                                <AntDesign name="like2" size={20} color={'#424040'} />
                            </Icon>
                            <Text>Like</Text>
                        </Button>
                        <Button>
                            <Icon>
                                <MaterialCommunityIcons name="comment-outline" size={20} color={'#424040'} />
                            </Icon>
                            <Text>Comment</Text>
                        </Button>
                        <Button>
                            <Icon>
                                <MaterialCommunityIcons name="share-outline" size={20} color={'#424040'} />
                            </Icon>
                            <Text>Share</Text>
                        </Button>
                    </FooterMenu>
                </Footer>
                <BottomDivider />
            </Container>

            <Container>
                <Header>
                    <Row>
                        <Avatar source={require('../assets/user.png')} story={true} />
                        <View style={{ paddingLeft: 10 }}>
                            <User>Wanessa J</User>
                            <Row>
                                <Time> 9am </Time>
                                <Entypo name='dot-single' size={12} color={'#747476'} />
                                <Entypo name='globe' size={10} color={'#747476'} />
                            </Row>
                        </View>
                    </Row>
                    <Entypo name='dots-three-horizontal' size={15} color={'#222121'} />
                </Header>
                <Post>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus ea repellat laborum consequatur, temporibus magni at corrupti nostrum. Blanditiis, architecto dolores, nihil, nisi in repudiandae asperiores id sequi saepe porro illum tenetur! Nihil sequi neque corporis fuga eaque, excepturi, qui facilis velit necessitatibus nam molestiae eos nemo? Quibusdam aliquid deserunt totam illo voluptas ratione ex voluptatum ad nobis animi placeat qui, distinctio optio ducimus assumenda labore nesciunt inventore temporibus minus dicta consequatur libero! Ab, nesciunt eius exercitationem harum ratione a temporibus sit asperiores consequuntur animi laboriosam ipsam eum facere enim similique cupiditate. Atque, neque eveniet tempore deleniti aperiam adipisci.
                </Post>
                <Photo source={require('../assets/photo.jpeg')} />
                <Footer>
                    <FooterCount>
                        <Row>
                            <IconCount>
                                <AntDesign name="like2" size={12} color={'#FFFFFFF'} />
                            </IconCount>
                            <TextCount>99 likes</TextCount>
                        </Row>
                        <TextCount>2K Comments</TextCount>
                    </FooterCount>
                    <Separator />
                    <FooterMenu>
                        <Button>
                            <Icon>
                                <AntDesign name="like2" size={20} color={'#424040'} />
                            </Icon>
                            <Text>Like</Text>
                        </Button>
                        <Button>
                            <Icon>
                                <MaterialCommunityIcons name="comment-outline" size={20} color={'#424040'} />
                            </Icon>
                            <Text>Comment</Text>
                        </Button>
                        <Button>
                            <Icon>
                                <MaterialCommunityIcons name="share-outline" size={20} color={'#424040'} />
                            </Icon>
                            <Text>Share</Text>
                        </Button>
                    </FooterMenu>
                </Footer>
                <BottomDivider />
            </Container>

            <Container>
                <Header>
                    <Row>
                        <Avatar source={require('../assets/user.png')} story={true} />
                        <View style={{ paddingLeft: 10 }}>
                            <User>Wanessa J</User>
                            <Row>
                                <Time> 9am </Time>
                                <Entypo name='dot-single' size={12} color={'#747476'} />
                                <Entypo name='globe' size={10} color={'#747476'} />
                            </Row>
                        </View>
                    </Row>
                    <Entypo name='dots-three-horizontal' size={15} color={'#222121'} />
                </Header>
                <Post>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus ea repellat laborum consequatur, temporibus magni at corrupti nostrum. Blanditiis, architecto dolores, nihil, nisi in repudiandae asperiores id sequi saepe porro illum tenetur! Nihil sequi neque corporis fuga eaque, excepturi, qui facilis velit necessitatibus nam molestiae eos nemo? Quibusdam aliquid deserunt totam illo voluptas ratione ex voluptatum ad nobis animi placeat qui, distinctio optio ducimus assumenda labore nesciunt inventore temporibus minus dicta consequatur libero! Ab, nesciunt eius exercitationem harum ratione a temporibus sit asperiores consequuntur animi laboriosam ipsam eum facere enim similique cupiditate. Atque, neque eveniet tempore deleniti aperiam adipisci.
                </Post>
                <Photo source={require('../assets/photo.jpeg')} />
                <Footer>
                    <FooterCount>
                        <Row>
                            <IconCount>
                                <AntDesign name="like2" size={12} color={'#FFFFFFF'} />
                            </IconCount>
                            <TextCount>99 likes</TextCount>
                        </Row>
                        <TextCount>2K Comments</TextCount>
                    </FooterCount>
                    <Separator />
                    <FooterMenu>
                        <Button>
                            <Icon>
                                <AntDesign name="like2" size={20} color={'#424040'} />
                            </Icon>
                            <Text>Like</Text>
                        </Button>
                        <Button>
                            <Icon>
                                <MaterialCommunityIcons name="comment-outline" size={20} color={'#424040'} />
                            </Icon>
                            <Text>Comment</Text>
                        </Button>
                        <Button>
                            <Icon>
                                <MaterialCommunityIcons name="share-outline" size={20} color={'#424040'} />
                            </Icon>
                            <Text>Share</Text>
                        </Button>
                    </FooterMenu>
                </Footer>
                <BottomDivider />
            </Container>
        </>
    );
}
