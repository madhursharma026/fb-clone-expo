import React from "react";
import Avatar from "./Avatar";
import styled from "styled-components";
import { ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Container = styled.View`
    width: 100%;
    height: 58px;
    flex-direction: row;
    align-items: center;
`

const Room = styled.TouchableOpacity`
    width: 135px;
    height: 40px;
    flex-direction: row;
    align-items: center;
    border-radius: 20px;
    border-width: 1px;
    border-color: #82b1ff;
    padding: 0 15px;
    margin-right: 12px;
`

const Text = styled.Text`
    color: #1777f2;
    font-size: 12px;
    padding-left: 6px;
`

const User = styled.View`
    margin-right: 13px;
`

const BottomDivider = styled.View`
    width: 100%;
    height: 9px;
    background: #F0F2F5;
`

export default function Users() {
    return (
        <>
            <Container>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 11 }}>
                    <Room>
                        <MaterialCommunityIcons name="video-plus" size={26} color={'#E141FC'} />
                        <Text>Create Room</Text>
                    </Room>
                    <User>
                        <Avatar source={require('../assets/user.png')} online={true} />
                    </User>
                    <User>
                        <Avatar source={require('../assets/user.png')} online={true} />
                    </User>
                    <User>
                        <Avatar source={require('../assets/user.png')} online={true} />
                    </User>
                    <User>
                        <Avatar source={require('../assets/user.png')} online={true} />
                    </User>
                    <User>
                        <Avatar source={require('../assets/user.png')} online={true} />
                    </User>
                    <User>
                        <Avatar source={require('../assets/user.png')} online={true} />
                    </User>
                </ScrollView>
            </Container>
            <BottomDivider />
        </>
    );
}

