import React, { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet, Image,TouchableOpacity } from "react-native";
import axios from "axios";
import DT_Action from '../redux/actions/DT_Action';
import { useDispatch,useSelector } from "react-redux";



export function Sepet() {
  const favorites=useSelector(state=>state.Reducer1.data)

 return(
<>
<Text>dsa</Text>
</>
 )
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
});
