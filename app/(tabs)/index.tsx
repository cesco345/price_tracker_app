import React, { useState } from 'react';
import { router, Stack } from 'expo-router';
import { Pressable, View, TextInput, Text } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  const [search, setSearch] = useState('123152');
  const performSearch = () => {
    console.warn('searching: ', search);
    // save this search to the database

    // navigate to the search results after saving the search

    router.push('/search');
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Search' }} />
      <View className="flex-row gap-3 p-3 ">
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search for a product"
          className="flex-1 rounded border border-gray-300 bg-white p-3"
        />
        <Pressable onPress={performSearch} className="rounded bg-teal-500 p-3">
          <Text>Search</Text>
        </Pressable>
      </View>
    </>
  );
}
