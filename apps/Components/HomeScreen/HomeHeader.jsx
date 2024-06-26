import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { AntDesign } from '@expo/vector-icons';

const CoinSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
<defs>
</defs>
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
	<path d="M 45.761 3.293 c 6.679 0 12.959 2.601 17.682 7.324 s 7.324 11.003 7.324 17.682 c 0 6.679 -2.601 12.959 -7.324 17.682 c -4.723 4.723 -11.002 7.324 -17.682 7.324 c -6.679 0 -12.959 -2.601 -17.682 -7.324 c -9.75 -9.75 -9.75 -25.614 0 -35.364 C 32.802 5.894 39.082 3.293 45.761 3.293" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(252,198,45); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 87 47.922 H 73.388 c -4.597 0 -8.337 3.74 -8.337 8.337 v 3.155 c 0 4.597 3.74 8.337 8.337 8.337 H 87 v 15.328 c 0 1.449 -1.179 2.628 -2.628 2.628 H 5.628 C 4.179 85.707 3 84.528 3 83.079 V 32.594 c 0 -1.449 1.179 -2.627 2.628 -2.627 h 78.745 c 1.449 0 2.628 1.179 2.628 2.627 V 47.922 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(110,140,97); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 87 64.751 H 73.388 c -2.942 0 -5.337 -2.395 -5.337 -5.337 v -3.155 c 0 -2.942 2.395 -5.337 5.337 -5.337 H 87 V 64.751 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(69,86,60); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 84.373 26.966 h -11.82 C 72.003 12.718 60.245 1.293 45.864 1.293 c -14.382 0 -26.139 11.424 -26.688 25.673 H 5.628 C 2.525 26.966 0 29.491 0 32.594 v 50.485 c 0 3.104 2.525 5.628 5.628 5.628 h 78.745 c 3.104 0 5.628 -2.524 5.628 -5.628 V 67.751 V 47.922 V 32.594 C 90 29.491 87.476 26.966 84.373 26.966 z M 45.864 4.293 c 12.727 0 23.141 10.079 23.688 22.673 H 38.869 v -4.861 c 0 -1.368 0.891 -2.524 1.944 -2.524 h 10.103 c 1.054 0 1.943 1.156 1.943 2.524 c 0 0.829 0.672 1.5 1.5 1.5 s 1.5 -0.671 1.5 -1.5 c 0 -3.046 -2.218 -5.524 -4.943 -5.524 h -3.551 v -2.582 c 0 -0.829 -0.672 -1.5 -1.5 -1.5 s -1.5 0.671 -1.5 1.5 v 2.582 h -3.551 c -2.727 0 -4.944 2.478 -4.944 5.524 v 4.861 H 22.176 C 22.723 14.372 33.137 4.293 45.864 4.293 z M 87 64.751 H 73.388 c -2.942 0 -5.337 -2.395 -5.337 -5.337 v -3.155 c 0 -2.942 2.395 -5.337 5.337 -5.337 H 87 V 64.751 z M 87 47.922 H 73.388 c -4.597 0 -8.337 3.74 -8.337 8.337 v 3.155 c 0 4.597 3.74 8.337 8.337 8.337 H 87 v 15.328 c 0 1.449 -1.179 2.628 -2.628 2.628 H 5.628 C 4.179 85.707 3 84.528 3 83.079 V 32.594 c 0 -1.449 1.179 -2.627 2.628 -2.627 h 78.745 c 1.449 0 2.628 1.179 2.628 2.627 V 47.922 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(69,86,60); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 79.987 59.337 h -5.641 c -0.828 0 -1.5 -0.672 -1.5 -1.5 s 0.672 -1.5 1.5 -1.5 h 5.641 c 0.828 0 1.5 0.672 1.5 1.5 S 80.815 59.337 79.987 59.337 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(110,140,97); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 8.943 38.981 h -1 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 1 c 0.829 0 1.5 0.671 1.5 1.5 S 9.771 38.981 8.943 38.981 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(69,86,60); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 76.009 38.981 h -1.916 c -0.828 0 -1.5 -0.671 -1.5 -1.5 s 0.672 -1.5 1.5 -1.5 h 1.916 c 0.828 0 1.5 0.671 1.5 1.5 S 76.837 38.981 76.009 38.981 z M 69.303 38.981 h -1.916 c -0.828 0 -1.5 -0.671 -1.5 -1.5 s 0.672 -1.5 1.5 -1.5 h 1.916 c 0.828 0 1.5 0.671 1.5 1.5 S 70.131 38.981 69.303 38.981 z M 62.596 38.981 H 60.68 c -0.828 0 -1.5 -0.671 -1.5 -1.5 s 0.672 -1.5 1.5 -1.5 h 1.916 c 0.828 0 1.5 0.671 1.5 1.5 S 63.424 38.981 62.596 38.981 z M 55.889 38.981 h -1.916 c -0.828 0 -1.5 -0.671 -1.5 -1.5 s 0.672 -1.5 1.5 -1.5 h 1.916 c 0.828 0 1.5 0.671 1.5 1.5 S 56.717 38.981 55.889 38.981 z M 49.183 38.981 h -1.916 c -0.828 0 -1.5 -0.671 -1.5 -1.5 s 0.672 -1.5 1.5 -1.5 h 1.916 c 0.828 0 1.5 0.671 1.5 1.5 S 50.011 38.981 49.183 38.981 z M 42.476 38.981 H 40.56 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 1.916 c 0.829 0 1.5 0.671 1.5 1.5 S 43.305 38.981 42.476 38.981 z M 35.77 38.981 h -1.916 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 1.916 c 0.829 0 1.5 0.671 1.5 1.5 S 36.598 38.981 35.77 38.981 z M 29.063 38.981 h -1.916 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 1.916 c 0.829 0 1.5 0.671 1.5 1.5 S 29.892 38.981 29.063 38.981 z M 22.356 38.981 H 20.44 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 1.917 c 0.829 0 1.5 0.671 1.5 1.5 S 23.185 38.981 22.356 38.981 z M 15.649 38.981 h -1.916 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 1.916 c 0.829 0 1.5 0.671 1.5 1.5 S 16.478 38.981 15.649 38.981 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(69,86,60); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 81.8 38.981 h -1 c -0.828 0 -1.5 -0.671 -1.5 -1.5 s 0.672 -1.5 1.5 -1.5 h 1 c 0.828 0 1.5 0.671 1.5 1.5 S 82.628 38.981 81.8 38.981 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(69,86,60); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
</g>
</svg>`;

export default function HomeHeader() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <View style={{ padding: 10 }} >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: user.imageUrl }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text>Welcome</Text>
          <Text style={styles.textWelcome}>{user.fullName}</Text>
        </View>
        <View style={styles.coinContainer}>
          <SvgXml xml={CoinSvg} width={40} height={40} style={styles.coinSvg} />
          <Text style={styles.coinText}>200</Text>
        </View>
      </View>
      <View style={{ backgroundColor: 'white', padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', 
            borderRadius: 99, paddingLeft: 20, paddingRight: 20, marginTop: 10 }}>
        <TextInput placeholder="Search Courses" style={{ fontFamily: 'outfit', fontSize: 18, padding: 5 }} />
        <AntDesign name="search1" size={30} color='44B877' />
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flexDirection: "column",
  },
  textWelcome: {
    fontSize: 20,
    fontWeight: "bold",
  },
  coinContainer: {
    marginLeft: 'auto', // Pushes the coin container to the right
    alignItems: 'center',
    display: 'flex'
  },
  coinSvg: {
    marginBottom: 5, // Adjust this to add space between the coin and the text
    display: 'flex'

  },
  coinText: {
    fontSize: 18,
    textAlign: 'center',
    display: 'flex'

  },
});