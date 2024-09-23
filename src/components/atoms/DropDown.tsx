import React, { useState } from "react";
import { StyleSheet, Platform } from "react-native";
import { navigate, onBack } from "../../navigation/RootNavigation";
import { useNavigation } from "@react-navigation/native";
import { IMAGES, theme } from "../../constants";
import { Calendar } from "react-native-calendars";
import { Dropdown } from "react-native-element-dropdown";
export const DropDown = (props: any) => {
  const { data } = props;
  // const data = [
  //   { label: "01", value: "1" },
  //   { label: "02", value: "2" },
  //   { label: "03", value: "3" },
  //   { label: "04", value: "4" },
  //   { label: "05", value: "5" },
  // ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Dropdown
      style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? "Select item" : "..."}
      searchPlaceholder="Search..."
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={(item) => {
        setValue(item.value);
        setIsFocus(false);
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    width: 150,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});