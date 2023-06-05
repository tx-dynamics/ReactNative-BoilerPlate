import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { routes } from "../../constants";
import { TabNavigator } from "../tabFlow";
import { ChatScreen, DrawerScreen } from "../../../screens/appFlow";
import PaginationList from "../../../screens/appFlow/paginationList/PaginationList";
import MapExample from "../../../screens/appFlow/mapExample/MapExample";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerScreen {...props} />}
            screenOptions={{ gestureEnabled: true, headerShown: false }}>
            <Drawer.Screen name={routes.tab} component={TabNavigator} />
            <Drawer.Screen name={routes.chat} component={ChatScreen} />
            <Drawer.Screen name={routes.pagination} component={PaginationList} />
            <Drawer.Screen name={routes.mapExample} component={MapExample} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;