import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Task = props => {
  return (
    <View style={styles.item}>
      <View style={styles.itemsLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#051953',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    shadowColor: '#051953',
  },
  itemsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#E504FB',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    color: 'white',
    fontStyle: 'italic',
    fontSize: 20,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#E504FB',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
