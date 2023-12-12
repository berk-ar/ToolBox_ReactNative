import { Component } from "react";
import { ScrollView, Text } from "react-native";

export default class Bikes extends Component {

    state = {
        isLoading: true,
        data: []
    }

    componentDidMount() {
        url = "https://api.ibb.gov.tr/ispark-bike/GetAllStationStatus"
        fetch(url)
            .then(res => res.json()) //url içerisindeki dosyayı json'a dönüştürür.
            .then(json => this.setState({ ...this.state, isLoading: false, data: json.dataList })) //json içerisindeki dosyaları durumunu kontrol eder. Data başarılı gelirse false olduğu için ekrana yazdırılır.
            .catch(err => console.log(err)) //hata varsa eğer console'a yazdırır.
    }

    render() { //return => ekranı oluşturma anlamına geliyor.
        return (
            this.state.isLoading ? <Text>Loading...</Text> :
            <ScrollView>
                {this.state.data.map((x, i) => <Text key={i}>{x.adi}</Text>)}
            </ScrollView>
        )
    }

}