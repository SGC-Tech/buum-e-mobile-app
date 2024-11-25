import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          {/* <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              Gorhom Bottom Sheet: "@gorhom/bottom-sheet": "^4.6.4"
            </Text>
            <Text style={styles.codetText}>npm i @gorhom/bottom-sheet</Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              Gorham Portal: "@gorhom/portal": "^1.0.14"
            </Text>
            <Text style={styles.codetText}>npm i @gorhom/portal</Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              React Native Gesture Handler: "react-native-gesture-handler":
              "^2.18.1"
            </Text>
            <Text style={styles.codetText}>
              npx expo install react-native-gesture-handler
            </Text>
          </View>

          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              React Native Reanimated:"react-native-reanimated": "^3.15.0"
            </Text>
            <Text style={styles.codetText}>
              npx expo install react-native-reanimated
            </Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              Clipboard : "@react-native-clipboard/clipboard": "^1.14.3"
            </Text>
            <Text style={styles.codetText}>
              npx expo install expo-clipboard
            </Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              Usehooks : "@uidotdev/usehooks": "^2.4.1"
            </Text>
            <Text style={styles.codetText}>npm i @uidotdev/usehooks</Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>axios : "axios": "^1.7.4"</Text>
            <Text style={styles.codetText}>npm i axios</Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>jotai : "jotai": "^2.10.0"</Text>
            <Text style={styles.codetText}>npm i jotai</Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              React Hook Form : "react-hook-form": "^7.53.0"
            </Text>
            <Text style={styles.codetText}>npm install react-hook-form</Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              Expo Image: "expo-image": "~1.12.15"
            </Text>
            <Text style={styles.codetText}>npx expo install expo-image</Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              Localization: "react-native-localize": "^3.2.1","i18next":
              "23.6.0"
            </Text>
            <Text style={styles.codetText}>
              npx expo install expo-localization, npx expo install i18n-js
            </Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              Device Info: "react-native-device-info": "^11.1.0"
            </Text>
            <Text style={styles.codetText}>npx expo install expo-device</Text>
          </View> 
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              React Native Dialog: "react-native-dialog": "^9.3.0"
            </Text>
            <Text style={styles.codetText}>
              npm install react-native-dialog
            </Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              Image Picker: "react-native-image-picker": "^7.1.2"
            </Text>
            <Text style={styles.codetText}>
              npx expo install expo-image-picker
            </Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              Keyboard Controller: "react-native-keyboard-controller":
              "^1.14.1",
            </Text>
            <Text style={styles.codetText}>
              npx expo install react-native-keyboard-controller
            </Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              React Native Keyboard Manager: "react-native-keyboard-manager":
              "^6.5.16-0"
            </Text>
            <Text style={styles.noText}>
              Keyboard manager için yükleme henüz olmadı
            </Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              Keychain: "react-native-keychain": "^8.2.0",
            </Text>
            <Text style={styles.codetText}>
              npx expo install expo-secure-store
            </Text>
          </View>
          
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              {" "}
              PDF + Blog Util :"react-native-blob-util":
              "^0.19.11","react-native-pdf": "^6.7.5"
            </Text>
            <Text style={styles.noText}>
              Expo 51 sürümünde çalışıyolarmış biz expo 52 sürümündeyiz..
            </Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              Safe Area Context : "react-native-safe-area-context": "^4.10.9",
            </Text>
            <Text style={styles.codetText}>
              {" "}
              npx expo install react-native-safe-area-context
            </Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              Screens : "react-native-screens": "^3.34.0",
            </Text>
            <Text style={styles.codetText}>
              npx expo install react-native-screens
            </Text>
          </View>
          */}
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              Masked Text: "react-native-mask-text": "^0.14.2",
            </Text>
            <Text style={styles.codetText}>
              yarn add react-native-mask-text
            </Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              Pager View: "react-native-pager-view": "^6.5.1",
            </Text>
            <Text style={styles.codetText}>
              npx expo install react-native-pager-view
            </Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              Reanimated Carousel: "react-native-reanimated-carousel": "^3.5.1"
            </Text>
            <Text style={styles.codetText}>
              npm i react-native-reanimated-carousel
            </Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              SVG: "react-native-svg": "^15.5.0"
            </Text>
            <Text style={styles.codetText}>
              npx expo install react-native-svg
            </Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              Toast Message: "react-native-toast-message": "^2.2.1"
            </Text>
            <Text style={styles.codetText}>
              yarn add react-native-toast-message
            </Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}>
              Webview: "react-native-webview": "^13.10.5"
            </Text>
            <Text style={styles.codetText}>
              npx expo install react-native-webview
            </Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.titleText}></Text>
            <Text style={styles.codetText}></Text>
          </View>
          <StatusBar style="auto" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
  },
  innerContainer: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 12,
    marginBottom: 12,
    padding: 8,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  codetText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "green",
    marginTop: 4,
  },
  noText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "red",
  },
});
