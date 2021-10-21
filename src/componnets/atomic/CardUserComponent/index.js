import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  Image,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import VectorIcon from 'react-native-vector-icons/Ionicons';

const CardUserComponent = ({data, handleClicked, handleDeleteUser}) => {
  const showAlertDelete = id => {
    Alert.alert('Konfirmasi', 'Yakin Hapus Data ?', [
      {
        text: 'Batal',
      },
      {
        text: 'Hapus',
        onPress: () => handleDeleteUser(data.id),
      },
    ]);
  };
  return (
    <TouchableOpacity style={styles.card} onPress={() => handleClicked(data)}>
      <VectorIcon
        name="trash-bin-outline"
        size={20}
        style={{top: 35, left: 320}}
        color={'red'}
        // onPress={() => handleDeleteUser(data.id)}
        onPress={() => showAlertDelete(data.id)}
      />

      <Image style={styles.image} source={{uri: data.photo}} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{`${data.firstName} ${data.lastName}`}</Text>
        <Text style={styles.age}>{data.age}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardUserComponent;

const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  name: {
    fontSize: 20,
    flex: 1,
    color: '#3399ff',
    fontWeight: 'bold',
  },
  age: {
    fontSize: 20,
    flex: 1,
    color: '#3399ff',
    fontWeight: 'bold',
    alignSelf: 'auto',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#ebf0f7',
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 70,
  },
});
