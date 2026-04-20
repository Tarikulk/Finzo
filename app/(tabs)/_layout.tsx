import { tabs } from "@/constants/data";
import { clsx } from "clsx";
import { Image } from "expo-image";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TabLayout = () => {
  const insets = useSafeAreaInsets();

  const TabIcon = ({ focused, icon }: TabIconProps) => {
    return (
      <View className="tabs-icon">
        <View className={clsx("tabs-pill", focused && "tabs-active")}>
          <Image source={icon} resizeMode="contain" className="tabs-glyph" />
        </View>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          Math.max(insets.bottom,)
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab?.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;
