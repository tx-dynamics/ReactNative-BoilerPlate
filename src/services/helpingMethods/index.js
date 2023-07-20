import AsyncStorage from '@react-native-async-storage/async-storage'
import ImageCropPicker from 'react-native-image-crop-picker'
import NetInfo from "@react-native-community/netinfo";

export const storeDataToStorage = async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value))
}

export const removeDataFromStorage = async (key) => {
    await AsyncStorage.removeItem(key)
}

export const getDataFromStorage = async (value) => {
    let data = await AsyncStorage.getItem(value)
    let newData = JSON.parse(data)
    return newData
}
export default class NetworkUtils {
    static async isNetworkAvailable() {
        const response = await NetInfo.fetch();
        return response.isConnected;
    }
}



import { decode } from 'base64-arraybuffer'
import { S3 } from 'aws-sdk'

var fs = require('react-native-fs');
// upload to s3
export const uploadImageOnS3 = async (file, successPath) => {

    let fileName = new Date().getTime().toString()
    const s3bucket = new S3({
        region: 'eu-east-2',
        accessKeyId: 'AKIAUTZJXM37S6D4PYFU',
        secretAccessKey: 'YEYVCuyTeN19lWdemoq5XUb5KQD6vX+t9yHFIsdg',
        Bucket: "go-time",
        signatureVersion: 'v4',
    });
    let contentType = 'image/jpeg';
    let contentDeposition = 'inline;filename="' + fileName + '"';
    const base64 = await fs.readFile(file.path, 'base64');
    const arrayBuffer = decode(base64);
    s3bucket.createBucket(async () => {
        const params = {
            Bucket: "go-time",
            Key: fileName,
            Body: arrayBuffer,
            ContentDisposition: contentDeposition,
            ContentType: contentType,
        };
        await s3bucket.upload(params).promise()
            .then((data) => {
                console.log(data.Location)
                successPath(data.Location)
            })
            .catch((err) => {
                console.log(err)
            })
    });
}


export async function imagePicker(
    mediaType = 'photo',
    isMultiple = false,
    isCropping = false,
) {
    const image = await ImageCropPicker.openPicker({
        mediaType: mediaType,
        cropping: isCropping,
        multiple: isMultiple,
    });

    return image;
}