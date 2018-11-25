import React, { Component } from "react";
import { View, Text,  } from "react-native";
import GlobalStyles from "../../setup/style";

class Auth extends Component {
  render() {
    return (
      <View style={[GlobalStyles.container, GlobalStyles.center]}>
        <Text>Auth</Text>
      </View>
    );
  }
}

export default Auth;