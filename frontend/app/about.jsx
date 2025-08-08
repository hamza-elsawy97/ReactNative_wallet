import { View, Text } from 'react-native'
import { Link } from 'expo-router';
import React from 'react'
import { Image } from 'expo-image';

const about = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>hi hamza.</Text>
      
      <Link href={"/"}>Go back</Link>
      <Image
        source="https://imgs.search.brave.com/zSMKplss6D22k8P4v6J5wtNuoB1XJcNETeyXEhPOw9Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y29kZWRldnNlcnZp/Y2VzLmNvbS9hYm91/dDIucG5n"
        contentFit="cover"
        transition={1000}
        style={{
          width: 200,
          height: 200,
          borderRadius: 25,
          marginTop: 20,
          backgroundColor: 'lightgray',
        }}
      />
    </View>
  )
}

export default about