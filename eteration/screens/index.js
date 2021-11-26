import React, { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet, Image,TouchableOpacity } from "react-native";
import axios from "axios";
import DT_Action from '../redux/actions/DT_Action';
import { useDispatch,useSelector } from "react-redux";

import { useNavigation } from '@react-navigation/native'



export function Home() {
  const favorites=useSelector(state=>state.Reducer1.data)
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const {navigate}=useNavigation()


  const getSimpson = async () => {
    try {
      axios
        .get("https://5fc9346b2af77700165ae514.mockapi.io/simpsons")
        .then((response) => {
          console.log("getting data from axios", response.data);
          const myData = response.data;
          setData(myData);
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
useEffect(() => {
  console.log('---------------------')
  console.log(favorites)
  console.log('---------------------')
  
 
  }, [favorites]);
  useEffect(() => {
   if(data.length<1) 
   getSimpson();
  }, []);
  return (
    <View style={styles.mainView}>
      <View style={styles.header}>
        <Text>Simpson Dataset</Text>
      </View>
      <TouchableOpacity  style={styles.fav}
      onPress={()=>{
        navigate('Sepet')
      }}>
    <Text>Sepet</Text>
  </TouchableOpacity>
      {data ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={(item) => {
            return (
              <View style={styles.listItem}>
                <Image
                  style={styles.logo}
                  source={{
                    uri: item?.item?.avatar,
                  }}
                />
                <View style={styles.itemText}>
                  <Text>{item?.item?.name}</Text>
                </View>
                <TouchableOpacity
                onPress={()=>{
                  let x = favorites.includes(item.item.name)
                  if(!x)
                   dispatch(DT_Action([...favorites,item.item]))


                }}>
                  <Text>
                    Add Favorite
                    </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      ) : null}
    </View>
 
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  mainText: {
    color: "red",
    marginTop: 10,
  },
  header: {
    justifyContent: "center",
    textAlignVertical: "center",
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "stretch",
  },
  listItem: {
    marginTop: 5,
    borderWidth: 1,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:5
  },
  itemText: {
    justifyContent: "center",
  },
  fav:{
    position:'absolute',
    bottom:30,
    right:10,
    backgroundColor:'yellow',
    width:50,
    height:50,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center',
    opacity:1
  }
});
