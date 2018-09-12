import * as React from "react";

import { Text, View } from 'react-native';

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
                
            </View>
        );
    }
}

export default SurpriseScreen;
