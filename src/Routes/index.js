

import {createAppContainer , createSwitchNavigator  , createStackNavigator} from 'react-navigation'


import HomeScreen from '../pages/HomeScreen'
import Login from '../pages/Login'
import Modal from '../pages/Modal'
// import Signup from '../pages/Signup'








const HomeStack = createStackNavigator(
    {
      HomeScreen:{screen :HomeScreen , },
      Modal:Modal
    },{
      defaultNavigationOptions:({navigation})=>{
        return{
          headerTransparent:true
        }
      }
    }
  )
  
  
  const AuthStack = createStackNavigator(
    {
      Login:Login,
     // Signup:Signup
    },{
      headerMode:'none'
    }
  )
  
  
  const AppStarterSwitch = createSwitchNavigator(
    {
      Auth:AuthStack,
      Home:HomeStack
    }
  )
  
  const AppContainer = createAppContainer(AppStarterSwitch)


  export default AppContainer
  
  