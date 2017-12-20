React Native Platform Stylesheet
===

Seperated out the [F8StyleSheet](https://github.com/fbsamples/f8app/blob/master/js/common/F8StyleSheet.js) to a module.

### Get started

1. `npm install react-native-platform-stylesheet`

2. Use it in your project:

  ```js
  import { create } from 'react-native-platform-stylesheet';
  
  
  const Profile = () => (
    <View style={styles.container}>
      {/* ... */}
    </View>
  );
  
  const styles = create({
    container: {
      flex: 1,
      ios: {
        backgroundColor: 'salmon'
      },
      iosx: { //for the iphone x
        backgroundColor: 'salmon'
      },
      android: {
        backgroundColor: 'tomato'
      }
    }
  });
  ```
  
  or
  
  ```js
  import { create } from 'react-native-platform-stylesheet';
  
  
  const Profile = () => (
    <View style={styles.container}>
      {/* ... */}
    </View>
  );
  
  const styles = create({
    container: {
      flex: 1
    },
    ios: {
      container: {
        backgroundColor: 'salmon'
      }
    },
    iosx: { //for the iphone x
      container: {
        backgroundColor: 'salmon'
      }
    },
    android: {
      container: {
        backgroundColor: 'tomato'
      }
    }
  });
  ```
  
  *Note: in the second example, make sure that `ios`, `iosx` and `android` styles are defined in the end of the object.*
