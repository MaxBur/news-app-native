import { Text, View, ActivityIndicator } from "react-native";

export const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" />
      <Text
        style={{
          marginTop: 20,
        }}
      >
        Загрузка...
      </Text>
    </View>
  );
};
