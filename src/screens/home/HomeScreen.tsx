import * as React from "react";

import { Text, View } from "react-native";

export interface Props {}

interface State {}

class HomeScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default HomeScreen;
