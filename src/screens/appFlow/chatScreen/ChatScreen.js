import React, { useContext } from 'react'
import { View, StyleSheet, ScrollView, Text, FlatList, Image, TextInput, Pressable, TouchableOpacity, } from 'react-native'

import { appIcons, colors, hp, wp, } from '../../../services'


import themeContext from '../../../services/config/themeContext';
import { useState, useEffect } from 'react';
import io from "socket.io-client"
import { uploadImageOnS3 } from '../../../services/helpingMethods';
import ImageCropPicker from 'react-native-image-crop-picker';
import { BASE_URL } from '../../../network/routs';
let socket;


const ChatScreen = ({ navigation, route }) => {
    const theme = useContext(themeContext)
    // const user = useSelector(state => state.userData.userData);
    const user = {
        _id: "32984u98324u0932"
    }
    const partner = route.params.chatPartner
    const [message, setMessage] = useState("")

    const [imageLoading, setimageLoading] = useState(false)
    const [messages, setMessages] = useState([
        {
            "to": "893279847329847",
            "userId": "32984u98324u0932",
            "sender": {
                "_id": "32984u98324u0932",
                "name": "User self",
            },
            "message": "hello message",
            "messageTime": "12:00 AM",
            "messageImage": "",
            "messageVoice": "",
            "isGroup": false
        },
        {
            "to": "893279847329847",
            "sender": {
                "_id": "32984unjnjnjn98324u0932",
                "name": "Partner name",
            },
            "userId": "32984unjnjnjn98324u0932",
            "message": "hello message",
            "messageTime": "12:00 AM",
            "messageImage": "",
            "messageVoice": "",
            "isGroup": false
        },
        {
            "to": "893279847329847",
            "userId": "32984u98324u0932",
            "sender": {
                "_id": "32984u98324u0932",
                "name": "User self",
            },
            "message": "hello message",
            "messageTime": "12:00 AM",
            "messageImage": "",
            "messageVoice": "",
            "isGroup": false
        },
        {
            "to": "893279847329847",
            "sender": {
                "_id": "dkmcdkmckddmlkm",
                "name": "Partner name",
            },
            "userId": "dkmcdkmckddmlkm",
            "message": "hello message",
            "messageTime": "12:00 AM",
            "messageImage": "",
            "messageVoice": "",
            "isGroup": false
        }
    ])


    useEffect(() => {
        socket = io(BASE_URL);
        let data = {
            "inbox": partner._id,
            "userId": user?._id,
            "isGroup": partner.isGroup
        }
        socket.emit('get-messages', data);
        socket.emit('user-enter', { userId: user?._id });


        socket.on("messages", ({ data }) => {
            setMessages(data?.messages)

        })


        socket.on("error", (error) => {
            console.log(error)
        })
        return function cleanup() {
            socket.emit('user-leave', data);
        };
    }, [])

    // const sendImage = async (messageData) => {
    //     let imageObject = {
    //         path: image,
    //         mediaType: "photo"
    //     }
    //     await uploadImageOnS3F(imageObject, setimageLoading).then((imageUrl) => {

    //         messageData["message"] = imageUrl
    //         // console.log("first==>>  ", messageData, imageUrl)
    //         socket.emit('send-message', messageData)
    //         settypedMessages("")
    //         setimage("")
    //         setmessageType("text")
    //         setimageLoading(false)
    //     }).catch((err) => console.log("ChatScreen uploadImageOnS3F==> ", err))
    // }

    const onSend = async (Image) => {
        var data = {
            "to": partner._id,
            "userId": user._id,
            "message": message,
            "messageTime": new Date(),
            "messageImage": Image,
            "messageVoice": "",
            "isGroup": partner.isGroup
        };
        socket.emit('send-message', data)
        setMessage("")
        setimageLoading(false)

    }

    const openGall = async () => {
        setimageLoading(true)
        await ImageCropPicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
        }).then(async (image) => {
            await uploadImageOnS3(image, onSend)
        });
    }


    const openCamera = async () => {
        setimageLoading(true)
        await ImageCropPicker.openCamera({
            width: 400,
            height: 400,
            cropping: true
        }).then(async (image) => {
            await uploadImageOnS3(image, onSend)
        });
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]} >
            {/* <ChatHeader
                leftIcon={appIcons.backArrow}
                userImage={{ uri: partner.image }}
                leftPress={() => navigation.goBack()}
                title={partner.name}
                subTitle={partner.email}
            /> */}

            <FlatList showsVerticalScrollIndicator={false}
                data={messages}
                inverted
                renderItem={({ item, index }) =>
                    <View style={item.sender._id == user._id ? styles.rightChatView : styles.leftChatView}>
                        {
                            partner.isGroup && item.sender._id != user._id &&
                            <Text style={styles.name}>{item.sender.name}</Text>
                        }
                        {
                            item.messageImage != undefined && item.messageImage != "" &&
                            <Image source={{ uri: item.messageImage }} style={styles.messageImage} />
                        }
                        {
                            item.message.length > 0 &&
                            <Text style={styles.messageText}>{item.message}</Text>
                        }
                        <Text style={styles.timeText}>{item.messageTime}</Text>
                    </View>
                }
            />

            <View style={styles.messageContainer}>
                <TouchableOpacity onPress={() => { openCamera() }} >
                    <Image source={appIcons.notification} style={styles.cameraImgStyle} />
                </TouchableOpacity>
                <TextInput
                    placeholder='Message...'
                    value={message}
                    placeholderTextColor={colors.white}
                    onChangeText={(text) => { setMessage(text) }}
                    style={styles.textInputStyle} />
                {message.length > 0 ? <TouchableOpacity onPress={() => { onSend("") }} >
                    <Image source={appIcons.notification} style={styles.sendStyle} />
                </TouchableOpacity> : <>
                    <View style={styles.audioView}>
                        <TouchableOpacity onPress={() => { openGall() }} >
                            <Image source={appIcons.cross} style={styles.picImgStyle} />
                        </TouchableOpacity>
                    </View></>}
            </View>

        </View>
    )
}


export default ChatScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chatContainer: {
        marginVertical: 10,
    },
    rightChatView: {
        alignSelf: "flex-end",
        width: wp(70),
        marginTop: 16,
        alignItems: "flex-start",
        marginRight: 16,
        paddingVertical: 10,
        backgroundColor: colors.grey,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 16,

    },
    messageText: {
        color: colors.white,
        fontSize: 14,
        marginHorizontal: 16
    },
    timeText: {
        textAlign: "right",
        color: colors.white,
        marginRight: 16,
        alignSelf: "flex-end",
        fontSize: 12

    },
    leftChatView: {
        width: wp(70),
        backgroundColor: colors.theme,
        alignItems: "flex-start",
        marginTop: 16,
        paddingVertical: 10,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        borderTopLeftRadius: 16,
        alignSelf: "flex-start",
        marginLeft: 16
    },
    messageContainer: {
        width: wp(90),
        height: 50,
        borderRadius: 70,
        backgroundColor: colors.lightBackground,
        alignSelf: "center",
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10
    },
    cameraImgStyle: {
        width: 36,
        height: 36,
        resizeMode: "contain"
    },
    textInputStyle: {
        marginLeft: 10,
        flex: 2,
        color: colors.white
    },
    sendStyle: {
        width: 24,
        height: 24,
        resizeMode: "contain",
        marginLeft: 8,
    },
    audioView: {
        flexDirection: "row",
        alignItems: "center",
    },

    picImgStyle: {
        width: 24,
        height: 24,
        resizeMode: "contain",
        marginLeft: 10,
    },
    messageImage: {
        width: wp(20),
        alignSelf: "center",
        height: hp(20),
        borderRadius: 5,
        marginBottom: 15
    },
    name: {
        marginLeft: 10,
        marginBottom: 10,
        color: colors.white,
        fontWeight: "bold"
    }


})