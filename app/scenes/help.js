import React, { Component } from 'react';

import {
  Text,
  View,
  Image
} from 'react-native';

import styles from '../styles/commonStyle';

const Help = () =>
  <View style={[styles.container, { justifyContent: 'center', padding: 30 }]}>
    <Text style={styles.header}>
      Giới thiệu app
    </Text>
    <Text style={{lineHeight: 15, marginTop: 10}}>
      Bạn muốn mua sắm đồ đẹp nhưng không biết lựa? {"\n\n"}
      Bạn muốn tiết kiệm thời gian mua đồ, chọn được sản phẩm một cách nhanh nhất?{"\n\n"}
      PhotoShop hỗ trợ bạn mua sắm qua hình ảnh, chỉ cần chọn hình ảnh có sẵn trong máy hoặc chụp ảnh. Hệ thống sẽ tìm kiếm và hiển thị sản phẩm trên mạng.
    </Text>

    <Text style={styles.header}>
      Đơn vị thực hiện
    </Text>
    <Image
      resizeMode="contain"
      style={styles.loadingImage}
      source={ require('./../image/code-dao.jpg') }
    />

    <Text style={styles.header}>
      Đơn vị tài trợ
    </Text>
    <Image
      resizeMode="contain"
      style={styles.loadingImage}
      source={ require('./../image/logo-sendo.jpg') }
    />

  </View>;

export default Help;
