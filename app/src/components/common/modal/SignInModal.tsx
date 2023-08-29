import { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { TextFont } from "../text-fonts/TextFont";

interface Props {
  showModal: boolean;
  onRequestClose: (payload: boolean) => void;
}

export const SignInModal = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { showModal, onRequestClose } = props;

  useEffect(() => {
    setModalVisible(showModal);
  }, [showModal]);

  const kakaoLogin = () => {
    onRequestClose(false);
  };

  return (
    <View onTouchEnd={() => onRequestClose(false)}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={styles.ModalContainer}
      >
        <View style={styles.ModalBody}>
          <View style={styles.modalView}>
            <View style={styles.modalTextContainer}>
              <TextFont size={20} color="black" weight={500}>
                Dotto Login
              </TextFont>
              <TextFont size={16} weight={400} color="gray">
                Hello World!
              </TextFont>
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={kakaoLogin}
            >
              <Text style={styles.textStyle}>카카오 로그인</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  ModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  ModalBody: {
    flex: 1,
    backgroundColor: "rgba(69,69,69,0.4)",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTextContainer: {
    alignItems: "flex-start",
    marginBottom: 16,
  },
  button: {
    borderRadius: 4,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
