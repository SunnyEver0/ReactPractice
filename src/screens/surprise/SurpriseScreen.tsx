import * as React from "react";
import { View, Text } from 'react-native';

export interface Props {

}

interface State {

}

class SurpriseScreen extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Surprise Screen</Text>
            </View>
        );
    }
}

export default SurpriseScreen;
