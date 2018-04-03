import { StackNavigator } from "react-navigation";
import LogInScreen from "../screen/LoginScreen";

const LoggedOutNavigation = StackNavigator({
  LogIn: {
    screen: LogInScreen,
    navigationOptions: {
      header: null
    }
  }
});

export default LoggedOutNavigation;
