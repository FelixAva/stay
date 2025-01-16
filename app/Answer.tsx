import React from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";

interface Props {
  option: string;
  value: number;
  checked: string;
  setChecked: (value: string) => void;
}

export default function Answer( { option, value, checked, setChecked }: Props ) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <RadioButton
        value={'' + value}
        color="#000"
        status={checked === `${value}` ? "checked" : "unchecked"}
        onPress={() => setChecked(`${value}`)}
      />
      <Text>{ option }</Text>
    </View>
  )
};
