import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {

    width: '91%',
    marginHorizontal: '5%',
    backgroundColor: '#333333',
    marginBottom: 8,
    borderRadius: 8,
    paddingVertical: 15

  },
  containerTasks: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',

  },
  containerTextTask: {
    flex: 1,
  },
  task: {
    color: '#F2F2F2',
    textAlign: 'auto',
    //textDecorationLine: 'line-through'
  },
  taskLineThrough: {
    color: '#808080',
    textAlign: 'auto',
    textDecorationLine: 'line-through'
  },
  buttonIcon: {
    width: '10%',

    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  }
})