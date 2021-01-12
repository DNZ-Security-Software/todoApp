import { StyleSheet, Dimensions } from 'react-native';

const AddTodoStyles = StyleSheet.create({
  input: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 2,
    borderBottomColor: '#00a8ff',
    color: '#e2e2e2',
    textDecorationColor: '#e2e2e2',
  },
  button: {
    margin: 20,
    padding: 10,
    backgroundColor: '#ff3f34',
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    color: '#e2e2e2',
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  complete: {
    backgroundColor: '#27ae60',
    color: '#e2e2e2',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    width: Dimensions.get('window').width * 0.4,
    borderRadius: 5,
    marginLeft: 20,
    marginBottom: 20,
  },
  remain: {
    backgroundColor: '#3498db',
    color: '#e2e2e2',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    width: Dimensions.get('window').width * 0.4,
    marginRight: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export { AddTodoStyles };


