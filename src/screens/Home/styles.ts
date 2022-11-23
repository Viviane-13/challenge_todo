import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    width: '100%'
  },
  header: {
    backgroundColor: '#0D0D0D',
    height: 160
  },
  logo: {
    height: 32,
    width: 112,
    marginTop: "15%",
    alignSelf: "center",
  },
  containerInput: {
    flexDirection: 'row',
    position: 'absolute',
    marginTop: '32%',
    marginHorizontal: 24,
  },
  input: {
    backgroundColor: '#262626',

    color: '#fffD',
    padding: 16,
    borderRadius: 6,
    flex: 1,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#0d0d0d'

  },
  buttonAdd: {
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    padding: 18

  },
  containerTask: {
    marginTop: 56,
    flexDirection: 'row',
    marginHorizontal: 24,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#808080',
    marginBottom: 20,
    paddingBottom: 20
  },
  containerTitles: {
    flexDirection: 'row',

  },
  title: {
    color: '#4ea8de',
    fontWeight: 'bold',
    fontSize: 14
  },
  containerNumberTasks: {
    backgroundColor: '#333333',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 20,
    marginLeft: 9
  },
  numberTasks: {
    color: '#d9d9d9',
    fontWeight: 'bold'
  }
})