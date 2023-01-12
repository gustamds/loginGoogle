import React, {useState, useEffect} from 'react';
import {Text, View, Button, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function UploadImage(){
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [image, setImage] = useState(null);

    useEffect( () => {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
        });

        console.log(result);

        if(!result.canceled){
            setImage(result.uri);
        }
    };

    if(hasGalleryPermission === false){
        return <Text>Sem aceso para a galeria</Text>
    }

    return( 
        <View>
            <Button title='Escolha uma imagem' onPress={ () => pickImage() } />
            { image && <Image source={{uri: image}} style={{flex:1/2}}  />}
        </View>
    );
}