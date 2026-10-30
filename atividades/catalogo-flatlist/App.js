import { StatusBar } from "expo-status-bar";
import { StyleSheet, FlatList, Text, View } from "react-native";

const produtos = [
  { id: "1", nome: "Blusa home Atletico", preco: 400.0 },
  { id: "2", nome: "Perfume Old Blader", preco: 180.0 },
  { id: "3", nome: "Blusa Armani", preco: 200.0 },
  { id: "4", nome: "Tênis Esportivo", preco: 259.9 },
  { id: "5", nome: "Boné Aba Reta", preco: 89.9 },
  { id: "6", nome: "Mochila Escolar", preco: 149.0 },
  { id: "7", nome: "Óculos de Sol", preco: 120.5 },
  { id: "8", nome: "Relógio Digital", preco: 219.9 },
  { id: "9", nome: "Carteira de Couro", preco: 79.9 },
  { id: "10", nome: "Meia Esportiva (kit 3)", preco: 45.0 },
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nome}</Text>
            <Text>R$ {item.preco.toFixed(2)}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Separador}
        ListEmptyComponent={<Text>Nenhum produto cadastrado</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

function Separador() {
  return <View style={{ height: 1, backgroundColor: "#ccc" }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
});
