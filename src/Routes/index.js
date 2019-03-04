

import {createAppContainer , createSwitchNavigator  , createStackNavigator} from 'react-navigation'


import Home from '../pages/Home'
import Login from '../pages/Login'
// import Signup from '../pages/Signup'








// const HomeStack = createSwitchNavigator(
//     {
//       Home:Home
//     }
//   )
  
  
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
      Home:Home
    }
  )
  
  const AppContainer = createAppContainer(AppStarterSwitch)


  export default AppContainer
  
  