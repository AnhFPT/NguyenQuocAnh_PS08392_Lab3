import Bai1 from './Bai1'
import Bai2 from './Bai2'
import Bai3 from './Bai3'
import Bai4 from './Bai4'
import Home from './Home'
import { createStackNavigator, createAppContainer } from 'react-navigation'
const AppNavigator = createStackNavigator({
    //Screens
    Bai1: {
        screen: Bai1
    },
    Bai2: {
        screen: Bai2
    },
    Bai3: {
        screen: Bai3
    },
    Bai4: {
        screen: Bai4
    },
    Home: {
        screen: Home
    },
}, {
    //settings
    initialRouteName: 'Home'
})
export default createAppContainer(AppNavigator)