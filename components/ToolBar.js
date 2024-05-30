import React from "react";
import Avatar from "./Avatar";
import styled from "styled-components";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const Container = styled.View`
    height: 92px;
    width: 100%;
`

const Row = styled.View`
    flex-direction: row;
    background: #ffffff;
    width: 100%;
    padding: 0 11px;
    align-items: center;
`

const Input = styled.TextInput`
    height: 50px;
    width: 100%;
    padding: 0 8px;
`

const Divider = styled.View`
    width: 100%;
    height: 0.5px;
    background: #F0F0F0;
`

const Menu = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 42px;
`

const MenuText = styled.Text`
    padding-left: 11px;
    font-weight: 500;
    font-size: 12px;
`

const Separator = styled.View`
    width: 1px;
    height: 26px;
    background: #F0F0F0;
`

const BottomDivider = styled.View`
    width: 100%;
    height: 9px;
    background: #F0F2F5;
`
  

export default function ToolBar() {
    return (
        <>
            <Container>
                <Row>
                    <Avatar source={require('../assets/user.png')} />
                    <Input placeholder="What's on your mind?" />
                </Row>
                <Divider />
                <Row>
                    <Menu>
                        <Ionicons name='videocam' size={22} color={'#F44337'} />
                        <MenuText>
                            Live
                        </MenuText>
                    </Menu>
                    <Separator />
                    <Menu>
                        <MaterialIcons name='photo-size-select-actual' size={20} color={'#4CAF50'} />
                        <MenuText>
                            Photo
                        </MenuText>
                    </Menu>
                    <Separator />
                    <Menu>
                        <MaterialCommunityIcons name='video-plus' size={22} color={'#E141FC'} />
                        <MenuText>
                            Room
                        </MenuText>
                    </Menu>
                </Row>
            </Container>
            <BottomDivider />
        </>
    );
}

