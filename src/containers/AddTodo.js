import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

class AddTodo extends React.Component {

  state = {
    text: ''
  }

  addTodo(text){
    this.props.dispatch({
      type: 'ADD_TODO',
      text
    })
    this.setState({ text: '' });
  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput
            onChangeText={(text) => this.setState({ text })} 
            value={this.state.text}
            style={styles.input}
            placeholder="Eg; Video"
            />
        <TouchableOpacity onPress={this.addTodo.bind(this, this.state.text)}>
            <View style={styles.icon}>
                <Ionicons name="md-add" size={30} style={{ color: 'red', marginHorizontal: 10 }}/>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(AddTodo);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20
  },
  input: {
      backgroundColor: '#eaeaea',
      height: 50,
      flex: 1,
      paddingHorizontal: 10
  },
  icon: {
      height: 50,
      backgroundColor: '#eaeaea',
      alignItems: 'center',
      justifyContent: 'center'
  }
});