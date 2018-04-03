import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
  StatusBar,
  ActivityIndicator
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const LogInScreen = props => (
  <View style={styles.container}>
    <StatusBar barStyle={"light-content"} />
    <View style={styles.header}>
      <Image
        source={require("../../assets/images/logo-white.png")}
        resizeMode="stretch"
        style={styles.logo}
      />
    </View>
    <View style={styles.content}>
      <TextInput
        placeholder="Username"
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={props.username}
        onChangeText={props.changeUsername}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        secureTextEntry={true}
        autoCaptialize={"none"}
        autoCorrect={false}
        value={props.password}
        onChangeText={props.changePassword}
        returnKeyType="send"
        onEndEditing={props.submit}
      />
      <TouchableOpacity style={styles.touchable} onPressOut={props.submit}>
        <View style={styles.button}>
          {props.isSubmitting ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.btnText}>Log In</Text>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.fbContainer}>
        <View style={styles.fbVeiw}>
          <Ionicons name="logo-facebook" size={22} color="#3e99ee" />
          <Text style={styles.fbText}>Log in with facebook</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

LogInScreen.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeUsername: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    backgroundColor: "#4e65b4",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    flex: 4,
    backgroundColor: "white",
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  logo: {
    width: 180,
    height: 65
  },
  fbContainer: {
    marginTop: 50
  },
  fbVeiw: {
    flexDirection: "row",
    alignItems: "center"
  },
  fbText: {
    color: "#3e99ee",
    marginLeft: 10,
    fontWeight: "600",
    fontSize: 14
  },
  textInput: {
    height: 50,
    borderColor: "#bbb",
    borderWidth: 1, //hairlineWidth 선중에 가장 얇은 선을 사용할때
    width: width - 80,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FAFAFA",
    fontSize: 14
  },
  touchable: {
    borderRadius: 3,
    backgroundColor: "#3e99ee",
    width: width - 80
  },
  button: {
    paddingHorizontal: 7,
    paddingVertical: 20
  },
  btnText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 14
  }
});

export default LogInScreen;
