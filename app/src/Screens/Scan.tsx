import React, { useState, useEffect, useRef, useCallback } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import { Camera, requestCameraPermissionsAsync, CameraType } from "expo-camera";
import LoadingAnimation from "./LoadingAnimation";
import * as ImagePicker from "expo-image-picker";
import { useAppStore } from "../store/app-store";
import Modal from "../components/Modal";
import { LABELS } from "../components/Trash";
import { IResponse } from "../data/api";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParams } from "../Main";
import SplashScreen from "./SplashScreen";

type Props = StackScreenProps<MainStackParams, "Scan">;

const { height, width } = Dimensions.get("window");
const aspectRatio = width / height;

const Scan = ({ navigation }: Props) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState<number | CameraType | undefined>(CameraType.back);
  const [cameraReady, setCameraReady] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [ratio, setRatio] = useState(aspectRatio);

  const [modal, setModal] = useState(false);
  const [label, setLabel] = useState<LABELS | null>(null);

  const { sendImage } = useAppStore();

  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    const getCameraPermission = async () => {
      const { status } = await requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getCameraPermission();
  }, []);

  const flipCamera = () => {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
  };

  const takePicture = async () => {
    setLoading(true);
    if (cameraRef.current && cameraReady) {
      const photo = await cameraRef.current.takePictureAsync();
      // api call
    }
    setLoading(false);
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.05,
      base64: true,
    });

    if (!result.canceled) {
      let base64Img = null;
      try {
        base64Img = `${result.assets[0].base64}`;
        setLoading(true);
        const { ok, label } = (await sendImage({ image: base64Img })) as IResponse;
        setLoading(false);
        if (ok) {
          setLabel(label);
          setModal(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleCameraReady = () => {
    setCameraReady(true);
  };

  const handleCameraLayout = useCallback((event: any) => {
    const { height: screenHeight, width: screenWidth } = event.nativeEvent.layout;
    const screenRatio = screenHeight / screenWidth;
    setRatio(screenRatio);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <View style={styles.container}>
      {modal && (
        <Modal
          labels={label}
          modalVisible={modal}
          setModalVisible={() => {
            setModal(false);
            navigation.navigate("Home");
          }}
        />
      )}
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={type}
        onLayout={handleCameraLayout}
        onCameraReady={handleCameraReady}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={flipCamera}>
            <Text style={styles.buttonText}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={pickImage}>
            <Text style={styles.buttonText}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: cameraReady ? "white" : "grey" }]}
            onPress={takePicture}
            disabled={!cameraReady}>
            <Text style={styles.buttonText}>Capture</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    // aspectRatio,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 32,
    paddingVertical: 8,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  loadingContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingAnimation: {
    width: 100,
    height: 100,
  },
});

export default Scan;
