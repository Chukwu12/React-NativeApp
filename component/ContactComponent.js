import { ScrollView } from "react-native-web";





class Contact extends Component {
    render() {
        return (
            <ScrollView>
                 title={item.name}
            </ScrollView>
        );
    }
    }


    const HomeNavigator = createStackNavigator(
        {
            Home: { screen: ContactUs }
        },
        {
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#5637DD'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                }
            }
        }
    );



 export default Contact;