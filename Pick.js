import React from 'react';
import {Picker} from '@react-native-community/picker';
import {Text, View} from 'react-native';

export default class Pick extends React.Component {
    state = {user: ''}
    updateUser = (user) => {
        this.setState({ user: user })
    }
    render() {
        return (
            <View>
                <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser} itemStyle={{textAlign: 'left', color: 'blue'}}>
                    <Picker.Item label = "Steve" value = "steve" />
                    <Picker.Item label = "Ellen" value = "ellen" />
                    <Picker.Item label = "Maria" value = "maria" />
                </Picker>
                <Text>{this.state.user}</Text>
            </View>
        )
    }
  }
