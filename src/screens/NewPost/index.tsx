import React from "react";
import UploadImage from "../../components/UploadImage";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
} from 'react-native';



export function NewPost() {
  return (
    <View>
      <UploadImage />
    </View>

  );
}
