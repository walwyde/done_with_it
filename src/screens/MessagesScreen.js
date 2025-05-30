import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import AppScreen from "../components/AppScreen";
import ListItem from "../components/ListItem";

import ListItemSeperator from "../components/ListItemSeperator";
import IconComponent from "../components/IconComponent";
import SwipeActionMenu from "../components/SwipeActionMenu";
import AppText from "../components/AppText";
import { colors } from "../config/colors";

const initMessages = [
  {
    id: 1,
    text: "random text message 1",
    desc: "random description 1",
  },
  {
    id: 2,
    text: "random text message 2",
    desc: "random description 2",
  },
  {
    id: 3,
    text: "random text message 3",
    desc: "random description 3",
  },
];
const MessagesScreen = () => {
  const [messages, setMessages] = useState(initMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <AppScreen>
      {messages && messages.length > 0 ? (
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id}
          renderItem={({ item }) => (
            <ListItem
              title={item.text}
              subTitle={item.desc}
              IconComponent={() => (
                <IconComponent
                  name="email"
                  iconColor="orange"
                  size={35}
                  backgroundColor={"green"}
                />
              )}
              onPress={() => console.log(item.text)}
              renderRightActions={() => (
                <SwipeActionMenu
                  onPress={() => handleDelete(item)}
                  iconName={"trash-can"}
                  backgroundColor={"tomato"}
                  color={"white"}
                />
              )}
            />
          )}
          ItemSeparatorComponent={ListItemSeperator}
          refreshing={refreshing}
          onRefresh={() => {
            setMessages(initMessages);
          }}
        />
      ) : (
        <View
          style={{
            textAlign: "center",
            fontSize: 30,
            color: colors.medium,
            padding: 10,
            fontWeight: "bold",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            backgroundColor: colors.light,
          }}
          refreshing={refreshing}
          onRefresh={() => {
            setMessages(initMessages);
          }}
        >
          <AppText
            style={{
              textAlign: "center",
              fontSize: 30,
              color: colors.medium,
              fontWeight: "bold",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            No messages
          </AppText>
        </View>
      )}
    </AppScreen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
