import { Component } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default class Parks extends Component {

    state = { //state => Durumlar
        isLoading: true,
        data: [],
        src_term: ""
    }

    getPark = (park, key) => {
        return (
            <View key={key} style={styles.box}>
                <Text style={styles.boxName}>{park.parkName}</Text>

                <View style={{
                    flex: 1,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    padding: 10
                }}>
                    <Text>Kapasite durumu (Boş/Dolu) : {park.emptyCapacity} / {park.capacity}</Text>
                </View>
            </View>
        )
    }

    getParks = () => {
        if (this.state.isLoading) {
            return <Text style={styles.loadingText}>Loading...</Text>
        } else {
            return this.state.data
                .filter(x => x.parkName.toLowerCase().includes(this.state.src_term.toLowerCase()))
                .map((item, index) => this.getPark(item, index))
        }
    }

    //Component kalıtımı ile birlikte gelir, tüm komponent yüklendikten sonra işletilir. Asenkron çalışır.
    componentDidMount() {
        url = "https://api.ibb.gov.tr/ispark/Park"
        fetch(url) //url yakalar 
            .then(res => res.json()) //url içerisindeki dosyayı json'a dönüştürür.
            .then(json => this.setState({ ...this.state, isLoading: false, data: json })) //json içerisindeki dosyaları durumunu kontrol eder. Data başarılı gelirse false olduğu için ekrana yazdırılır.
            .catch(err => console.log(err)) //hata varsa eğer console'a yazdırır.
    }

    handleSearch = (text) => {
        this.setState({ ...this.state, src_term: text })
    }

    render() {
        return (
            <View contentContainerStyle={styles.container}>
                <Text style={styles.title}>İBB İspark's</Text>
                <TextInput
                    style={styles.searchInput}
                    placeholder="IsPark Ara"
                    onChangeText={this.handleSearch}
                />
                <ScrollView>
                    <this.getParks />
                    {/* Aşağı ve yukarı hareket ettirebilmek için ScroolView içerisine getParks'ı aldık. */}
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    title: {
        backgroundColor: '#0078d4',
        color: 'white',
        paddingHorizontal: 30,
        paddingVertical: 15,
        width: '100%',
        textAlign: "center",
        borderBottomColor: "darkblue",
        borderBottomWidth: 2,
        fontSize: 18 * 2.25
    },
    searchInput: {
        width: '80%',
        height: 48,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    box: {
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        width: "auto",
        alignItems: "center",
        elevation: 4
    },
    loadingText: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        width: '100%',
        textAlign: "center",
        color: '#6c757d',
        fontSize: 18 * 2.25
    },
    boxName: {
        textAlign: "center",
        borderBottomColor: "blue",
        borderBottomWidth: 1,
        fontSize: 18,
        padding: 10
    }
})