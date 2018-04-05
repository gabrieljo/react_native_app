import { StackNavigator } from 'react-navigation'
import TakePhotoScreen from '../screen/TakePhotoScreen';

const RootNavigation = StackNavigator(
  {

    TakePhoto:{
      screen: TakePhotoScreen,
      navigationOptions:{
        header:null
      }
    }

  },
  {
    mode:"modal"
  }
)

export default RootNavigation;
