import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from '../container/Product/ProductList';
import ProductDetails from '../container/Product/ProductDetails';
import Contact from '../container/Contact/Contact';
import ContactDetails from '../container/Contact/ContactDetails';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

const CustomHeaderButton = ({ icon, onAcion }) => {
    return (
        <TouchableOpacity onPress={onAcion}>
            <MaterialCommunityIcons name={icon} size={25} color={'black'} />
        </TouchableOpacity>
    )
}

const ProductStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
            }}>
            <Stack.Screen
                name="ProductList"
                component={ProductList}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='ProductDetails'
                component={ProductDetails}
                options={{
                    headerLeft: () => (
                        <CustomHeaderButton
                            icon='chevron-left'
                            onAcion={() => {
                                navigation.goBack()
                            }}
                        />
                    ),
                    headerRight: () => (
                        <CustomHeaderButton
                            icon='share-variant'
                            onAcion={() => {
                                console.log("Share product");
                            }}
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    )
}

const ContactStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center', // Align the header title in the center
            }}
        >
            <Stack.Screen name='Contact' component={Contact} />
            <Stack.Screen name='ContactDetails' component={ContactDetails} />
        </Stack.Navigator>
    )
}

export { ProductStack, ContactStack }
