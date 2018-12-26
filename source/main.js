import React, { Component } from 'react'
import { Text, View, StatusBar, Dimensions, ScrollView, StyleSheet,TouchableOpacity,Platform } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {takeInput,removeInput} from './functions'

if (Platform.OS === 'ios')
    var {height,width} = Dimensions.get('screen')

if (Platform.OS === 'android'){
    var height = Dimensions.get('screen').height-30
    var width = Dimensions.get('screen').width;
}


export default class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            value:''
        }
    }

    takeInput(value){
        alert(value)
        this.setState({value:takeInput(this.state.value,value)});
    }

    removeInput(){
        this.setState({value:removeInput(this.state.value)});
    }

    clearAll(){
        this.setState({value:''})
    }

  render() {
    return (
      <View style={{backgroundColor:'#b861df',height:230,}}>
        <StatusBar
            backgroundColor={'#b861df'}
            barStyle={'light-content'}
        />
        <View style={{backgroundColor:'#b861df',marginTop:30}}>
            <ScrollView contentContainerStyle={{height:220}}>
                <View>
                    <Text style={styles.historyText}>History 1</Text>
                </View>
                <View>
                    <Text style={styles.historyText}>History 2</Text>
                </View>
                <View>
                    <Text style={styles.historyText}>History 3</Text>
                </View>
            </ScrollView>
            <View style={{bottom:0,position: 'absolute',width:width,borderBottomColor:'#aaa'}}>
                <TextInput
                    textContentType={'telephoneNumber'}
                    style={{fontSize:60,direction:'rtl',alignSelf:'flex-end',color:'white'}}
                    editable={true}
                    maxLength={12}
                    selectionColor={'transparent'}
                    value={this.state.value}
                />
            </View>
        </View>
        <View style={styles.mainbtnView}>
            <TouchableOpacity
                style={[styles.fnBtns,{borderBottomColor:'red'}]}
            >
                <Text style={styles.fnBtnTxt}>mc</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.fnBtns}
            >
                <Text style={styles.fnBtnTxt}>m+</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.fnBtns}
            >
                <Text style={styles.fnBtnTxt}>m-</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.fnBtns}
            >
                <Text style={styles.fnBtnTxt}>mr</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.mainbtnView}>
            <TouchableOpacity
                style={[styles.fnBtns]}
                onPress={()=>this.clearAll()}
            >
                <Text style={styles.fnBlBtnTxt}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.fnBtns}
            >
                <MaterialCommunityIcons name={'division'} size={30} color={'#b861df'} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.fnBtns}
            >
                <MaterialCommunityIcons name={'close'} size={30} color={'#b861df'} />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.fnBtns]}
                onPress={()=>this.removeInput()}
            >
                <MaterialCommunityIcons name={'backspace'} size={30} color={'#b861df'} />
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'column'}}>
                <View style={{width:(width*3/4),flexDirection:'row'}}>
                    <TouchableOpacity
                        style={[styles.numBtns,{borderBottomColor:'red'}]}
                        onPress={()=>this.takeInput('7')}
                    >
                        <Text style={styles.numBlBtnTxt}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numBtns}
                        onPress={()=>this.takeInput('8')}
                    >
                        <Text style={styles.numBlBtnTxt}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numBtns}
                        onPress={()=>this.takeInput('9')}
                    >
                        <Text style={styles.numBlBtnTxt}>9</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:(width*3/4),flexDirection:'row'}}>
                    <TouchableOpacity
                        style={[styles.numBtns,{borderBottomColor:'red'}]}
                        onPress={()=>this.takeInput('4')}
                    >
                        <Text style={styles.numBlBtnTxt}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numBtns}
                        onPress={()=>this.takeInput('5')}
                    >
                        <Text style={styles.numBlBtnTxt}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numBtns}
                        onPress={()=>this.takeInput('6')}
                    >
                        <Text style={styles.numBlBtnTxt}>6</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:(width*3/4),flexDirection:'row'}}>
                    <TouchableOpacity
                        style={[styles.numBtns,{borderBottomColor:'red'}]}
                        onPress={()=>this.takeInput('1')}
                    >
                        <Text style={styles.numBlBtnTxt}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numBtns}
                        onPress={()=>this.takeInput('2')}
                    >
                        <Text style={styles.numBlBtnTxt}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numBtns}
                        onPress={()=>this.takeInput('3')}
                    >
                        <Text style={styles.numBlBtnTxt}>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:(width*3/4),flexDirection:'row'}}>
                    <TouchableOpacity
                        style={[styles.numBtns,{borderBottomColor:'red'}]}
                    >
                        <Text style={styles.numBlBtnTxt}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numBtns}
                        onPress={()=>this.takeInput('0')}
                    >
                        <Text style={styles.numBlBtnTxt}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.numBtns}
                        onPress={()=>this.takeInput('.')}
                    >
                        <Text style={styles.numBlBtnTxt}>.</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={{width:width/4}}>
                <TouchableOpacity
                    style={[styles.fnBtns]}
                >
                    <MaterialCommunityIcons name={'minus'} color={'#b861df'} size={45} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.fnBtns]}
                >
                    <MaterialCommunityIcons name={'plus'} color={'#b861df'} size={45} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.numBtns2]}
                >
                    <Text style={styles.fnWtBtnTxt}>=</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    historyText:{
        textAlign:'right',
        fontSize:30,
        color:'#eee'
    },
    mainbtnView:{
        height:(height-230)/6,
        flexDirection:'row'
    },
    fnBtns:{
        width:width/4,
        height:(height-230)/6,
        backgroundColor:'#e4e4e2',
        justifyContent:'center',
        alignItems:'center'
    },
    fnBtnTxt:{
        fontSize:30,
        color:'#666'
    },
    fnBlBtnTxt:{
        fontSize:30,
        color:'#b861df'
    },
    fnVlBtnTxt:{
        fontSize:50,
        color:'#b861df'
    },
    fnWtBtnTxt:{
        fontSize:60,
        color:'#fff'
    },
    numBtns:{
        width:width/4,
        height:(height-230)/6,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    numBtns2:{
        width:width/4,
        height:((height-230)/6)*2,
        backgroundColor:'#b861df',
        justifyContent:'center',
        alignItems:'center'
    },
    numBlBtnTxt:{
        fontSize:35,
        color:'#111'
    },
})