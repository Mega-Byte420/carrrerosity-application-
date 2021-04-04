import React from 'react';
import { View, Image, ScrollView, Dimensions, StyleSheet, Text } from 'react-native';


const { width } = Dimensions.get("window")
const height = (width * 0.6)

const Images = [require('./images/degree.jpg'), require('./images/2.jpg'), require('./images/1.jpg')];

export default class Image_Slider extends React.Component {
 state={
     active:0
 }
  change=({nativeEvent})=>{
      const slide=Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurment.width);
      if (slide!==this.state.active)
      {
          this.setState({active:slide})
      }
  }
    render() {
        return (
            <View style={style.container}>

                <ScrollView
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    onScroll={this.change}
                    style={{ width, height }}

                >
                    {
                        Images.map((Images, index) => (

                            <Image
                                key={index}
                                source={{ uri: Images }}
                                style={style.image}
                            >

                            </Image>

                        ))}

                </ScrollView>
                <View style={style.pagination}>
                    {
                    Images.map((i,k)=>(
                        <Text style={k==this.state.active ? style.pagingActiveText :style.pagingText} key={k}>⬤</Text>
                    ))
                     }
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    container: { marginTop: 50, width, height },
    scroll: { width, height },
    image: { width, height, resizeMode: 'cover' },
    pagination: { flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' },
    pagingText: { margin: 3, color: '#888' },
    pagingActiveText: { margin: 3, color: '#888' }
})