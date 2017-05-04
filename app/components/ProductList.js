import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import groupByEveryN from 'groupByEveryN';
import styles, { mainColor, secondaryColor } from '../styles/commonStyle';

const ProductRow = ({ rowData }) => {
  return <View style={[styles.listViewRow, { marginBottom: 10 }]}>
  {rowData.item.map(item =>
  <TouchableOpacity
    onPress={() => Linking.openURL(`https://www.sendo.vn/${item.cat_path}`)}
    key={item.product_id} style={{ flex:1, paddingLeft: 12, paddingRight: 12 }}>
    <Image
      resizeMode="contain"
      style={styles.product}
      source={{uri: item.img_url}}/>
    <Text style={{fontWeight: 'bold', fontSize: 15}}>{item.name}</Text>
    <Text style={{color: mainColor, marginTop: 2, marginBottom: 2}}>{item.price.toLocaleString('vi-VN')} đ</Text>
    <Text style={{color: secondaryColor, fontSize:12}}>{item.shop_name}</Text>
  </TouchableOpacity>)}
</View>};

ProductRow.propTypes = {
  rowData: PropTypes.array.isRequired,
};

const ProductList = ({ products, itemPerRow }) =>
  <FlatList
    style={[styles.listView, { margin: 10, marginTop: 0 }]}
    renderItem={(row) => <ProductRow key={ row.index } rowData={ row } />}
    data={groupByEveryN(products, itemPerRow)}
  />;

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  itemPerRow: PropTypes.number.isRequired,
};

export default ProductList;
