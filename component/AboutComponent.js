import { ScrollView } from "react-native-web";





class About extends Component {
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
            Home: { screen: AboutUs }
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



 export default About;