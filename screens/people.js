import { Component } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import people from "../assets/people.json"
import CardVisit from "../components/cardvisit";

export default class People extends Component {
    render() {
        console.log(people);
        return <ScrollView contentContainerStyle={styles.container}>
            {people.map((item, index) => (
                <CardVisit
                    key={index}
                    profilFoto={item['profile_picture']}
                    adSoyad={item['first_name'] + " " + item['last_name']}
                    email={item["email"]}
                />))}
        </ScrollView>
    }
}

const styles = StyleSheet.create({
    container: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start"
    }
})