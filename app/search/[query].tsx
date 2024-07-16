import EmptyState from "@/components/EmptyState";
import SearchInput from "@/components/SearchInput";
import VideoCard from "@/components/VideoCard";
import { searchPosts } from "@/lib/appwrite";
import useAppwrite from "@/lib/useAppwrite";
import { Post } from "@/types/post.type";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  const { query } = useLocalSearchParams();
  const {
    data: posts,
    isLoading,
    refetch,
  } = useAppwrite(() => searchPosts(query as string));

  useEffect(() => {
    refetch();
  }, [query]);

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts as Post[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard data={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View className="w-full">
                <Text className="font-pmedium text-sm text-gray-100">
                  Search Results
                </Text>
                <Text className="text-2xl text-white font-psemibold">
                  {query}
                </Text>
                <View className="mt-6 mb-8 w-full">
                  <SearchInput initialQuery={query as string} />
                </View>
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={() =>
          isLoading ? (
            <View className="justify-center items-center flex-1">
              <ActivityIndicator size="large" />
            </View>
          ) : (
            <EmptyState
              title="No Videos Found"
              subtitle="No videos found for this search query"
            />
          )
        }
      />
    </SafeAreaView>
  );
};

export default Search;
