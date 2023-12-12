import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";

const Bikes2 = () => {
    const [isLoading, setLoading] = useState(true) //isLoading => veri okur, setLoading => veri yazar
    const [data, setData] = useState([]) //boş dizin tanımladık içine veriler gelecek

    useEffect(() => {
        const getStations = () => {
            url = "https://api.ibb.gov.tr/ispark-bike/GetAllStationStatus"
            fetch(url)
                .then(res => res.json()) //url içerisindeki dosyayı json'a dönüştürür.
                .then(json => {
                    setLoading(false)
                    setData(json.dataList)
                }) //json içerisindeki dosyaları durumunu kontrol eder. Data başarılı gelirse false olduğu için ekrana yazdırılır.
                .catch(err => console.log(err)) //hata varsa eğer console'a yazdırır.
        }
        getStations()
    }, [])

    return isLoading ? <Text>Loading...</Text> : 
    <ScrollView>
        {data.map((x, i) => <Text key={i}>{x.adi}</Text>)}
    </ScrollView>
}

export default Bikes2;