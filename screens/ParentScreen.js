import { Text, View } from "react-native"

const ParentScreen = (props) => {
    console.log(props)
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>{props.title}</Text>
            {props.children}
        </View>
    )
}

export default ParentScreen;