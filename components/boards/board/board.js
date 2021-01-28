import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as appStyles from '../../styles/body.style';

export default function Board({item}) {

	return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.listing}>
        <Text style={styles.textColor}>
          {"/" + item?.board + "/"} - {item?.title}{" "}
          <Text style={styles.nsfw}>{!item.ws_board ? "NSFW" : ""}</Text>
		</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    padding: 3,
  },
  textColor: {
    color: appStyles.primaryFontColor,
  },
  listing: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: appStyles.OverlayColorDark,
    borderStyle: "solid",
    borderRadius: 4,
    backgroundColor: appStyles.SurfaceColor,
  },
  nsfw: {
    backgroundColor: appStyles.WarningColor,
	  color: "white",
	height: 40,
    borderColor: appStyles.WarningColorDark,
    borderWidth: 4,
    borderStyle: "solid",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
  },
});