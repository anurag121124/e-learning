import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import SubHeading from '../SubHeading';
import { getAllProducts } from '../../Services/Index';


export default function CourseList() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetchProductList();
    }, []);

    const fetchProductList = async () => {
        try {
            const products = await getAllProducts();
            setProductList(products);
        } catch (error) {
            console.error('Error fetching product list:', error);
            // Handle error here (e.g., show a message to the user)
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <SubHeading text={'Product'} />
            <FlatList
                data={productList}
                keyExtractor={(item) => item.id.toString()} // Correct keyExtractor
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
}
