import {Link} from 'expo-router';
import {Text, View} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

export default function Home() {
  const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>burası buum-e about</Text>

      <Link href="/">
        <Text style={styles.text}>buum-e home'a gidecek</Text>
      </Link>
    </View>
  );
}
const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
}));
