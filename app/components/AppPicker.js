import { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItme from "./PickerItme";
import {
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";
import colors from "../config/colors";

function AppPicker({
  icon,
  data,
  placeholder,
  label,
  width,
  setCategory,
  PickerItmeComponent = PickerItme,
}) {
  const [visibility, setVisibility] = useState(false);
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => setVisibility(true)}>
        <View style={[styles.input, { width: width }]}>
          {icon && (
            <MaterialCommunityIcons name={icon} size={24} color="#555" />
          )}

          <AppText placeholder={placeholder} label={label} />
          <MaterialCommunityIcons name="chevron-down" size={20} color="#555" />
        </View>
      </TouchableWithoutFeedback>
      {visibility && (
        <Screen>
          <Modal visible={visibility}>
            <Button title="close" onPress={() => setVisibility(false)} />
            <FlatList
              data={data}
              keyExtractor={(item) => item.value.toString()}
              numColumns={3}
              renderItem={({ item }) => (
                <PickerItmeComponent
                  category={item.label}
                  icon={item.icon}
                  backgroundColor={item.bgcolor}
                  onpress={() => {
                    setCategory(item);
                    setVisibility(false);
                  }}
                />
              )}
            />
          </Modal>
        </Screen>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    backgroundColor: colors.light,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 15,

    height: 45,
  },
  text: {
    width: "100%",
    fontSize: 16,
    color: "#333",
    fontFamily: "roboto",
  },
  button: {
    backgroundColor: "red",
  },
});

export default AppPicker;
