import { View, Text, FlatList } from "react-native";
import { List, Divider } from "react-native-paper";
import { useSelector } from "react-redux";
import shortid from "shortid";

const MyList = () => {
  const budgets = useSelector((state) => state.reducers.budgets);

  const renderItem = ({ item }) => (
    <View>
      <List.Item key={shortid.generate()} title={item.name} />
      <Divider />
    </View>
  );

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 25, paddingBottom: 15 }}>List of Items 📃</Text>
      <Divider />
      <FlatList
        data={budgets}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MyList;
