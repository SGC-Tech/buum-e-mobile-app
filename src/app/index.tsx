import {Text, View} from 'react-native';

import {Link} from 'expo-router';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

export default function Home() {
  const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>burası buum-e home</Text>
      <Link href="/about">
        <Text style={styles.text}>buum-e about'a gidecek</Text>
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
    color: theme.colors.danger,
  },
}));
