import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity, FlatList } from 'react-native';
import * as appStyles from "../styles/body.style";
import { FontAwesome } from "@expo/vector-icons";

export default function Boards(props) {

	const renderItem = ({ item }) => {
		return (
      <View style={styles.renderItemContainer}>
        <View style={styles.listing}>
          <View style={styles.listItem}>
            <Text style={styles.textColor}>
              {"/" + item?.board + "/"} - {item?.title}{" "}
              <Text style={styles.nsfw}>{!item.ws_board ? "NSFW" : ""}</Text>
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                props.favoriteBoard(item.board);
              }}
            >
              <FontAwesome name="star" size={24} color={styles.WarningColor} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
	 };
	

	return (
    <View style={styles.boardsContainer}>
      <FlatList
        data={props.boards}
        renderItem={renderItem}
        keyExtractor={(item) => item.board}
        extraData={props.favoriteBoard}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  boardsContainer: {
    width: "100%",
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: appStyles.BaseColor,
  },
  renderItemContainer: {
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
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nsfw: {
    backgroundColor: appStyles.WarningColor,
    color: "white",
    borderColor: appStyles.WarningColorDark,
    borderWidth: 4,
    borderStyle: "solid",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
  },
  button: {
    paddingRight: 20,
  },
  buttonText: {
    padding: 10,
    backgroundColor: appStyles.WarningColor,
  },
});