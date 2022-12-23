import React from "react";
import {
  StatusBar,
  Alert,
  View,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Pressable,
  Text,
} from "react-native";
import axios from "axios";

import Post from "../components/Post";
import { Loading } from "../components/Loading";

import { ButtonTo } from "../components/ButtonTo";

export function HomeScreen({ navigation }) {
  const [items, setItems] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get("https://62cfcf291cc14f8c087dce6a.mockapi.io/article")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Не удалось получить статьи");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(fetchPosts, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Loading/>  
      </View>
    );
  }

  return (
    <View>
      <Pressable onPress={() => navigation.navigate('TestScreen')}>
          <ButtonTo title={'Перейти на тестовую'} />
      </Pressable>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('FullPost', {id: item.id, title: item.title})}>
            <Post
              title={item.title}
              imageUrl={item.imageUrl}
              createdAt={item.createdAt}
            />
          </TouchableOpacity>
        )}
      />
      <StatusBar />
    </View>
  );
}
