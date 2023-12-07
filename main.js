import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions, ScrollView } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        mainPage: 'block',
        statePage: 'none',
        stateName: '',
        stateFlag: 'https://codehs.com/uploads/046d0ea4beca05ad381b41f4e74a4365',
        capital: '',
        bird: '',
        flower: '',
        fruit: '',
        famousPerson: '',
    }

    chooseState = (i) => {
        if (i == 'AL') {
            this.setState({ 
                stateName: 'Alabama',
                stateFlag: 'https://codehs.com/uploads/605d23ddedfc46f58b09bfc6bff310d4',
                capital: 'Montgomery',
                bird: 'Northern Flicker',
                flower: 'Camellia',
                fruit: 'Blackberry',
                famousPerson: 'Channing Tatum',
            })
        } else if (i == 'AK') {
            this.setState({ 
                stateName: 'Alaska',
                stateFlag: 'https://codehs.com/uploads/066dd2c10cf16e6cb3275a2cb1648d2d',
                capital: 'Juneau',
                bird: 'Willow Ptarmigans',
                flower: 'Alpine Forget-Me-Not',
                fruit: 'Avocado',
                famousPerson: 'Jewel',
            })
        } else if (i == 'AZ') {
            this.setState({ 
                stateName: 'Arizona',
                stateFlag: 'https://codehs.com/uploads/c313b06b504d12246575c036f526c2a2',
                capital: 'Phoenix',
                bird: 'Cactus Wren',
                flower: 'Saguaro',
                fruit: 'Cantaloupe',
                famousPerson: 'Emma Stone',
            })
        } else if (i == 'AR') {
            this.setState({ 
                stateName: 'Arkansas',
                stateFlag: 'https://codehs.com/uploads/076fdf5c9b985869e3ed30129feacc2f',
                capital: 'Little Rock',
                bird: 'Northern Mockingbird',
                flower: 'Apple Blossom',
                fruit: 'Tomato',
                famousPerson: 'Billy Bob Thornton',
            })
        } else if (i == 'CA') {
            this.setState({ 
                stateName: 'California',
                stateFlag: 'https://codehs.com/uploads/1941514e1fd1968036f13f5fe17afecb',
                capital: 'Sacramento',
                bird: 'California Quail',
                flower: 'California Poppy',
                fruit: 'Avocado',
                famousPerson: 'Leonardo DiCaprio',
            })
        } else if (i == 'CO') {
            this.setState({ 
                stateName: 'Colorado',
                stateFlag: 'https://codehs.com/uploads/59f29f18ae300d4488b5532df7f98599',
                capital: 'Denver',
                bird: 'Lark Bunting',
                flower: 'Colorado Blue Columbine',
                fruit: 'Strawberry',
                famousPerson: 'Tim Allen',
            })
        } else if (i == 'CT') {
            this.setState({ 
                stateName: 'Connecticut',
                stateFlag: 'https://codehs.com/uploads/f2e47ac5240bda2065607c1590c0e26a',
                capital: 'Hartford',
                bird: 'American Robin',
                flower: 'Mountain-Laurel',
                fruit: 'Pitaya',
                famousPerson: 'Seth MacFarlane',
            })
        } else if (i == 'DE') {
            this.setState({ 
                stateName: 'Delaware',
                stateFlag: 'https://codehs.com/uploads/ceee3c5b08717cf258db3a0bdb5188eb',
                capital: 'Dover',
                bird: 'Delaware Blue Hen',
                flower: 'Peach Blossom',
                fruit: 'Pineapple',
                famousPerson: 'Ryan Phillippe',
            })
        } else if (i == 'FL') {
            this.setState({ 
                stateName: 'Florida',
                stateFlag: 'https://codehs.com/uploads/bc01872354b2cceb249dcbd94bf1d1a1',
                capital: 'Tallahassee',
                bird: 'Northern Mockingbird',
                flower: 'Orange Blossom',
                fruit: 'Orange',
                famousPerson: 'Ariana Grande',
            })
        } else if (i == 'GA') {
            this.setState({ 
                stateName: 'Georgia',
                stateFlag: 'https://codehs.com/uploads/21e9b4ebd32023833e8ad8d902d072a1',
                capital: 'Atlanta',
                bird: 'Brown Thrasher',
                flower: 'Cherokee Rose',
                fruit: 'Peach',
                famousPerson: 'Julia Roberts',
            })
        } else if (i == 'HI') {
            this.setState({ 
                stateName: 'Hawaii',
                stateFlag: 'https://codehs.com/uploads/968a355701ea2ed30a20782aaa4bb451',
                capital: 'Honolulu',
                bird: 'The Nene Goose',
                flower: 'Yellow Hibiscus',
                fruit: 'Pineapple',
                famousPerson: 'Jason Momoa',
            })
        } else if (i == 'ID') {
            this.setState({ 
                stateName: 'Idaho',
                stateFlag: 'https://codehs.com/uploads/f577000f2e07e823f61e127acda03894',
                capital: 'Boise',
                bird: 'Mountain Bluebird',
                flower: 'Syringa',
                fruit: 'Huckleberry',
                famousPerson: 'Aaron Paul',
            })
        } else if (i == 'IL') {
            this.setState({ 
                stateName: 'Illinois',
                stateFlag: 'https://codehs.com/uploads/f8f6a586c5fb9e9162dab7f777256d42',
                capital: 'Springfield',
                bird: 'Northern Cardinal',
                flower: 'Common Blue Violet',
                fruit: 'GoldRush Apple',
                famousPerson: 'Harrison Ford',
            })
        } else if (i == 'IN') {
            this.setState({ 
                stateName: 'Indiana',
                stateFlag: 'https://codehs.com/uploads/1dea0223c76f2a17ed33dbb0e1a1a5ed',
                capital: 'Indianapolis',
                bird: 'Northern Cardinal',
                flower: 'Peony',
                fruit: 'Lychee',
                famousPerson: 'Michael Jackson',
            })
        } else if (i == 'IA') {
            this.setState({ 
                stateName: 'Iowa',
                stateFlag: 'https://codehs.com/uploads/d5382f5277cdb1a80a2e8247b9a43d8a',
                capital: 'Des Moines',
                bird: 'American Goldfinch',
                flower: 'Wild Praire Rose',
                fruit: 'Pear',
                famousPerson: 'Ashton Kutcher',
            })
        } else if (i == 'KS') {
            this.setState({ 
                stateName: 'Kansas',
                stateFlag: 'https://codehs.com/uploads/8adbe57ed903f3421afb53d54f512881',
                capital: 'Topeka',
                bird: 'Western Meadowlark',
                flower: 'Sunflower',
                fruit: 'Plum',
                famousPerson: 'Kirstie Alley',
            })
        } else if (i == 'KY') {
            this.setState({ 
                stateName: 'Kentucky',
                stateFlag: 'https://codehs.com/uploads/1d099eca1c2c501190e11bec63da10ec',
                capital: 'Frankfort',
                bird: 'Northern Cardinal',
                flower: 'Goldenrod',
                fruit: 'Fig',
                famousPerson: 'Johnny Depp',
            })
        } else if (i == 'LA') {
            this.setState({ 
                stateName: 'Louisiana',
                stateFlag: 'https://codehs.com/uploads/023a7616d83796e4c29819ed3f01b5a1',
                capital: 'Baton Rouge',
                bird: 'Brown Pelican',
                flower: 'Magnolia',
                fruit: 'Durian',
                famousPerson: 'Reese Witherspoon',
            })
        } else if (i == 'ME') {
            this.setState({ 
                stateName: 'Maine',
                stateFlag: 'https://codehs.com/uploads/d54af8a555be0ca691419cb60c37fc59',
                capital: 'Augusta',
                bird: 'Black-Capped Chickadee',
                flower: 'White Pine Cone and Tassel',
                fruit: 'Cranberry',
                famousPerson: 'Patrick Dempsey',
            })
        } else if (i == 'MD') {
            this.setState({ 
                stateName: 'Maryland',
                stateFlag: 'https://codehs.com/uploads/5da66ef151002962476a1eed8cf7848b',
                capital: 'Annapolis',
                bird: 'Baltimore Oriole',
                flower: 'Black-Eyed Susan',
                fruit: 'Longan Fruit',
                famousPerson: 'Anna Faris',
            })
        } else if (i == 'MA') {
            this.setState({ 
                stateName: 'Massachusetts',
                stateFlag: 'https://codehs.com/uploads/74b81653cc85e2a96bc713afcba13a75',
                capital: 'Boston',
                bird: 'Black-Capped Chickadee',
                flower: 'Mayflower',
                fruit: 'Apple',
                famousPerson: 'Mark Wahlberg',
            })
        } else if (i == 'MI') {
            this.setState({ 
                stateName: 'Michigan',
                stateFlag: 'https://codehs.com/uploads/03b88c96cb5641d457d8e5a40a005efc',
                capital: 'Lansing',
                bird: 'American Robin',
                flower: 'Apple Blossom',
                fruit: 'Grapes',
                famousPerson: 'Terry Crews',
            })
        } else if (i == 'MN') {
            this.setState({ 
                stateName: 'Minnesota',
                stateFlag: 'https://codehs.com/uploads/2fb46351761687fc863bd4297ae9c185',
                capital: 'St. Paul',
                bird: 'Common Loon',
                flower: 'Pink and White Ladys Slipper',
                fruit: 'Lime',
                famousPerson: 'Chris Pratt',
            })
        } else if (i == 'MS') {
            this.setState({ 
                stateName: 'Mississippi',
                stateFlag: 'https://codehs.com/uploads/1c92218284ec46f02fd556e9cb0d11b8',
                capital: 'Jackson',
                bird: 'Northern Mockingbird',
                flower: 'Magnolia',
                fruit: 'Papaya',
                famousPerson: 'Oprah Winfrey',
            })
        } else if (i == 'MO') {
            this.setState({ 
                stateName: 'Missouri',
                stateFlag: 'https://codehs.com/uploads/02618b1dae91b0895ab4ed3dbde465e5',
                capital: 'Jefferson City',
                bird: 'Eastern Bluebird',
                flower: 'Hawthorn blossom',
                fruit: 'Cashew Fruit',
                famousPerson: 'Brad Pitt',
            })
        } else if (i == 'MT') {
            this.setState({ 
                stateName: 'Montana',
                stateFlag: 'https://codehs.com/uploads/79f866d5ab7b01eedb1e747ca7bc67da',
                capital: 'Helena',
                bird: 'Western Meadowlark',
                flower: 'Bitteroot',
                fruit: 'Cherry',
                famousPerson: 'Michelle Williams',
            })
        } else if (i == 'NE') {
            this.setState({ 
                stateName: 'Nebraska',
                stateFlag: 'https://codehs.com/uploads/63d674b3ad9a9ea6482cf232eb4eabcb',
                capital: 'Lincoln',
                bird: 'Western Meadowlark',
                flower: 'Goldenrod',
                fruit: 'Apricot',
                famousPerson: 'Gabrielle Union',
            })
        } else if (i == 'NV') {
            this.setState({ 
                stateName: 'Nevada',
                stateFlag: 'https://codehs.com/uploads/80347e839fa1fce4d01cb340a60d7515',
                capital: 'Carson City',
                bird: 'Mountain Bluebird',
                flower: 'Sagebrush',
                fruit: 'Pomegranate',
                famousPerson: 'Matthew Gray Gubler',
            })
        } else if (i == 'NH') {
            this.setState({ 
                stateName: 'New Hampshire',
                stateFlag: 'https://codehs.com/uploads/dd9330930549839b70fa6aab92ad709a',
                capital: 'Concord',
                bird: 'Purple Finch',
                flower: 'Purple Lilac',
                fruit: 'Soursop',
                famousPerson: 'Mandy Moore',
            })
        } else if (i == 'NJ') {
            this.setState({ 
                stateName: 'New Jersey',
                stateFlag: 'https://codehs.com/uploads/cecfd300307d7e579b04a284bbe506af',
                capital: 'Trenton',
                bird: 'American Goldfinch',
                flower: 'Violet',
                fruit: 'Persimmon',
                famousPerson: 'Paul Rudd',
            })
        } else if (i == 'NM') {
            this.setState({ 
                stateName: 'New Mexico',
                stateFlag: 'https://codehs.com/uploads/1dc9ccce2a259640d535c5e1c3a6dd9e',
                capital: 'Santa Fe',
                bird: 'Greater Roadrunner',
                flower: 'Yucca Flower',
                fruit: 'Passion Fruit',
                famousPerson: 'Demi Lovato',
            })
        } else if (i == 'NY') {
            this.setState({ 
                stateName: 'New York',
                stateFlag: 'https://codehs.com/uploads/975b5741fcff92bf993a3f4584163724',
                capital: 'Albany',
                bird: 'Eastern Bluebird',
                flower: 'Rose',
                fruit: 'Apple',
                famousPerson: 'Robert Downey Jr.',
            })
        } else if (i == 'NC') {
            this.setState({ 
                stateName: 'North Carolina',
                stateFlag: 'https://codehs.com/uploads/70ec41ec02061c7e9a539dd16f6150c3',
                capital: 'Raleigh',
                bird: 'Northern Cardinal',
                flower: 'Flowering Dogwood',
                fruit: 'Quince Fruit',
                famousPerson: 'Julianne Moore',
            })
        } else if (i == 'ND') {
            this.setState({ 
                stateName: 'North Dakota',
                stateFlag: 'https://codehs.com/uploads/3ea1ea46af3b94d717b54f4ab4280935',
                capital: 'Bismarck',
                bird: 'Western Meadowlark',
                flower: 'Wild Prairie Rose',
                fruit: 'Kiwi',
                famousPerson: 'Josh Duhamel',
            })
        } else if (i == 'OH') {
            this.setState({ 
                stateName: 'Ohio',
                stateFlag: 'https://codehs.com/uploads/d9f71955da84e120189d53f2feb199f2',
                capital: 'Columbus',
                bird: 'Northern Cardinal',
                flower: 'Red Carnation',
                fruit: 'Blackberry',
                famousPerson: 'John Legend',
            })
        } else if (i == 'OK') {
            this.setState({ 
                stateName: 'Oklahoma',
                stateFlag: 'https://codehs.com/uploads/de6310b17b613adde4e67c742f44dc5b',
                capital: 'Oklahoma City',
                bird: 'Scissor-Tailed Flycatcher',
                flower: 'Oklahoma Rose',
                fruit: 'Raspberry',
                famousPerson: 'Blake Shelton',
            })
        } else if (i == 'OR') {
            this.setState({ 
                stateName: 'Oregon',
                stateFlag: 'https://codehs.com/uploads/5aadbce652fcb542afd68c5a6afaa4d0',
                capital: 'Salem',
                bird: 'Western Meadowlark',
                flower: 'Oregon Grape',
                fruit: 'Date',
                famousPerson: 'Ty Burrell',
            })
        } else if (i == 'PA') {
            this.setState({ 
                stateName: 'Pennsylvania',
                stateFlag: 'https://codehs.com/uploads/c948616dd244e563043295ffb6d20e51',
                capital: 'Harrisburg',
                bird: 'Ruffed Grouse',
                flower: 'Mountain Laurel',
                fruit: 'Guava',
                famousPerson: 'Taylor Swift',
            })
        } else if (i == 'RI') {
            this.setState({ 
                stateName: 'Rhode Island',
                stateFlag: 'https://codehs.com/uploads/23e5903db9d7b20c6d6bae6557c5f02f',
                capital: 'Providence',
                bird: 'Rhode Island Red Chicken',
                flower: 'Violet',
                fruit: 'Acai',
                famousPerson: 'Debra Messing',
            })
        } else if (i == 'SC') {
            this.setState({ 
                stateName: 'South Carolina',
                stateFlag: 'https://codehs.com/uploads/d317168e7c89b81ec02ee8960cb4f56d',
                capital: 'Columbia',
                bird: 'Carolina Wren',
                flower: 'Yellow Jessamine',
                fruit: 'Jackfruit',
                famousPerson: 'Chadwick Boseman',
            })
        } else if (i == 'SD') {
            this.setState({ 
                stateName: 'South Dakota',
                stateFlag: 'https://codehs.com/uploads/35473c9df22ef1fe3f938935bf2a26ff',
                capital: 'Pierre',
                bird: 'Ring-Necked Pheasant',
                flower: 'Pasque Flower',
                fruit: 'Star Fruit',
                famousPerson: 'Bob Barker',
            })
        } else if (i == 'TN') {
            this.setState({ 
                stateName: 'Tennessee',
                stateFlag: 'https://codehs.com/uploads/6559fa0de87a9e0a01a3c2382db9014c',
                capital: 'Nashville',
                bird: 'Northern Mockingbird',
                flower: 'Iris',
                fruit: 'Rambuten',
                famousPerson: 'Justin Timberlake',
            })
        } else if (i == 'TX') {
            this.setState({ 
                stateName: 'Texas',
                stateFlag: 'https://codehs.com/uploads/dcccfcf5349f2be61503da2b2a021b7a',
                capital: 'Austin',
                bird: 'Northern Mockingbird',
                flower: 'Bluebonnet',
                fruit: 'Lemon',
                famousPerson: 'Beyonce',
            })
        } else if (i == 'UT') {
            this.setState({ 
                stateName: 'Utah',
                stateFlag: 'https://codehs.com/uploads/dc59449a0beb1cd7bd61e165ac46d04d',
                capital: 'Salt Lake City',
                bird: 'California Gull',
                flower: 'Sego Lily',
                fruit: 'Honeydew Melon',
                famousPerson: 'Matthew Davis',
            })
        } else if (i == 'VT') {
            this.setState({ 
                stateName: 'Vermont',
                stateFlag: 'https://codehs.com/uploads/5967cfa5617236a118e1ab29ae1c0c5c',
                capital: 'Montpelier',
                bird: 'Hermit Thrush',
                flower: 'Red Clover',
                fruit: 'Watermelon',
                famousPerson: 'Damon Wayans Jr.',
            })
        } else if (i == 'VA') {
            this.setState({ 
                stateName: 'Virginia',
                stateFlag: 'https://codehs.com/uploads/bb2c09197b43f91ffa393d0b4757dc41',
                capital: 'Richmond',
                bird: 'Northern Cardinal',
                flower: 'Flowering Dogwood',
                fruit: 'Pomelo',
                famousPerson: 'Sandra Bullock',
            })
        } else if (i == 'WA') {
            this.setState({ 
                stateName: 'Washington',
                stateFlag: 'https://codehs.com/uploads/69de770434b57de34b77e83db4ad560c',
                capital: 'Olympia',
                bird: 'American Goldfinch',
                flower: 'Pacific Rhododendron',
                fruit: 'Olives',
                famousPerson: 'Jimi Hendrix,',
            })
        } else if (i == 'WV') {
            this.setState({ 
                stateName: 'West Virginia',
                stateFlag: 'https://codehs.com/uploads/0a8b9f68a99b6c2eeff0f096cf4c4622',
                capital: 'Charleston',
                bird: 'Northern Cardinal',
                flower: 'Rhododendron',
                fruit: 'Coconut',
                famousPerson: 'Brad Paisley',
            })
        } else if (i == 'WI') {
            this.setState({ 
                stateName: 'Wisconsin',
                stateFlag: 'https://codehs.com/uploads/157b55d81f8ec73eaa1217fa2204f1d8',
                capital: 'Madison',
                bird: 'American Robin',
                flower: 'Wood Violet',
                fruit: 'Cucumber',
                famousPerson: 'Mark Ruffalo',
            })
        } else if (i == 'WY') {
            this.setState({ 
                stateName: 'Wyoming',
                stateFlag: 'https://codehs.com/uploads/5ed5fe6bd2348bc000a3ef22cfa53265',
                capital: 'Cheyenne',
                bird: 'Western Meadowlark',
                flower: 'Indian Paintbrush',
                fruit: 'Banana',
                famousPerson: 'Jim Beaver',
            })
        } 
    }
    
    toStatePage = () => this.setState(state => ({
        mainPage: 'none',
        statePage: 'block',
    }));
    toMainPage = () => this.setState(state => ({
        mainPage: 'block',
        statePage: 'none',
    }));

    render() {
        return (
            <View style={styles.container}>
                <View style={{ display: this.state.mainPage }}>
                    <ImageBackground
                        style={{height: deviceHeight, width: deviceWidth}}
                        source={{ uri: 'https://codehs.com/uploads/9dc68a9346740ca39d7dc8ba43977a40' }}
                    >
                    <View style={styles.mainPageBG}>
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight
                                onPress={() => this.chooseState('AL')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConB}>
                                <Text style={styles.buttonTextB}>AL</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('AK')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConB}>
                                <Text style={styles.buttonTextB}>AK</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('AZ')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConB}>
                                <Text style={styles.buttonTextB}>AZ</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('AR')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConW}>
                                <Text style={styles.buttonText}>AR</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('CA')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConR}>
                                <Text style={styles.buttonText}>CA</Text>
                            </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight
                                onPress={() => this.chooseState('CO')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConB}>
                                <Text style={styles.buttonTextB}>CO</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('CT')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConB}>
                                <Text style={styles.buttonTextB}>CT</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('DE')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConB}>
                                <Text style={styles.buttonTextB}>DE</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('FL')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConW}>
                                <Text style={styles.buttonText}>FL</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('GA')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConR}>
                                <Text style={styles.buttonText}>GA</Text>
                            </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight
                                onPress={() => this.chooseState('HI')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConB}>
                                <Text style={styles.buttonTextB}>HI</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('ID')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConB}>
                                <Text style={styles.buttonTextB}>ID</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('IL')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConB}>
                                <Text style={styles.buttonTextB}>IL</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('IN')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConW}>
                                <Text style={styles.buttonText}>IN</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('IA')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConR}>
                                <Text style={styles.buttonText}>IA</Text>
                            </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight
                                onPress={() => this.chooseState('KS')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConB}>
                                <Text style={styles.buttonTextB}>KS</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('KY')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConB}>
                                <Text style={styles.buttonTextB}>KY</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('LA')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConB}>
                                <Text style={styles.buttonTextB}>LA</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('ME')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConW}>
                                <Text style={styles.buttonText}>ME</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('MD')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConR}>
                                <Text style={styles.buttonText}>MD</Text>
                            </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight
                                onPress={() => this.chooseState('MA')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConR}>
                                <Text style={styles.buttonText}>MA</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('MI')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConW}>
                                <Text style={styles.buttonText}>MI</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('MN')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConR}>
                                <Text style={styles.buttonText}>MN</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('MS')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConW}>
                                <Text style={styles.buttonText}>MS</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('MO')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConR}>
                                <Text style={styles.buttonText}>MO</Text>
                            </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight
                                onPress={() => this.chooseState('MT')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConR}>
                                <Text style={styles.buttonText}>MT</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('NE')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConW}>
                                <Text style={styles.buttonText}>NE</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('NV')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConR}>
                                <Text style={styles.buttonText}>NV</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('NH')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConW}>
                                <Text style={styles.buttonText}>NH</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('NJ')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConR}>
                                <Text style={styles.buttonText}>NJ</Text>
                            </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight
                                onPress={() => this.chooseState('NM')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConR}>
                                <Text style={styles.buttonText}>NM</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('NY')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConW}>
                                <Text style={styles.buttonText}>NY</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('NC')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConR}>
                                <Text style={styles.buttonText}>NC</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('ND')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConW}>
                                <Text style={styles.buttonText}>ND</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('OH')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConR}>
                                <Text style={styles.buttonText}>OH</Text>
                            </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight
                                onPress={() => this.chooseState('OK')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConR}>
                                <Text style={styles.buttonText}>OK</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('OR')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConW}>
                                <Text style={styles.buttonText}>OR</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('PA')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConR}>
                                <Text style={styles.buttonText}>PA</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('RI')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConW}>
                                <Text style={styles.buttonText}>RI</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('SC')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConR}>
                                <Text style={styles.buttonText}>SC</Text>
                            </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight
                                onPress={() => this.chooseState('SD')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConR}>
                                <Text style={styles.buttonText}>SD</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('TN')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConW}>
                                <Text style={styles.buttonText}>TN</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('TX')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConR}>
                                <Text style={styles.buttonText}>TX</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('UT')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConW}>
                                <Text style={styles.buttonText}>UT</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('VT')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConR}>
                                <Text style={styles.buttonText}>VT</Text>
                            </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableHighlight
                                onPress={() => this.chooseState('VA')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConR}>
                                <Text style={styles.buttonText}>VA</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('WA')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConW}>
                                <Text style={styles.buttonText}>WA</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('WV')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConR}>
                                <Text style={styles.buttonText}>WV</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('WI')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConW}>
                                <Text style={styles.buttonText}>WI</Text>
                            </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.chooseState('WY')} onPressIn={this.toStatePage}
                            >
                            <View style={styles.imgConR}>
                                <Text style={styles.buttonText}>WY</Text>
                            </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    </ImageBackground>
                </View>
                
                <View style={{ display: this.state.statePage }}>
                    <View style={styles.statePageBG}>
                        <Text style={styles.title}>
                            {this.state.stateName}
                        </Text>
                        <View style={styles.infoCon}>
                            <Image style={styles.flagImg}
                                source={{ uri: this.state.stateFlag }}
                            />
                            <Text style={styles.info}>
                                {this.state.stateName}'s capital is {this.state.capital}.
                            </Text>
                            <Text style={styles.info}>
                                The state bird is the {this.state.bird}.
                            </Text>
                            <Text style={styles.info}>
                                The state flower is the {this.state.flower}.
                            </Text>
                            <Text style={styles.info}>
                                The state fruit is the {this.state.fruit}.
                            </Text>
                            <Text style={styles.info}>
                                The most famous person from {this.state.stateName} is {this.state.famousPerson}.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.navBarCon}>
                        <View style={styles.buttonCon}>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/be122a503df6a9bad6e51d5f2a0f45b5' }}
                                style={{ height: deviceHeight/15, width: deviceHeight/15 }}
                            />
                            <TouchableHighlight style={styles.navButton}
                                onPress={this.toMainPage}
                            >
                                <Text style={styles.navButtonText}>
                                    Back
                                </Text>
                            </TouchableHighlight>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/be122a503df6a9bad6e51d5f2a0f45b5' }}
                                style={{ height: deviceHeight/15, width: deviceHeight/15 }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    mainPageBG: {
        height: deviceHeight,
        width: deviceWidth,
        alignItems: 'space-evenly',
        justifyContent: 'space-evenly',
    },
    title: {
        fontSize: deviceHeight/14,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
    },
    instructions: {
        fontSize: deviceHeight/25,
        textAlign: 'center',
        color: 'black',
    },
    buttonContainer: {
        alignItems: 'space-evenly',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    img: {
        height: deviceHeight/4,
        width: deviceHeight/4,
        borderColor: 'black',
        borderWidth: 3,
    },
    imgConB: {
        opacity: 0.8,
        height: deviceHeight/11,
        width: deviceWidth/6,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 15,
        backgroundColor: 'darkslateblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgConW: {
        opacity: 0.8,
        height: deviceHeight/11,
        width: deviceWidth/6,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgConR: {
        opacity: 0.8,
        height: deviceHeight/11,
        width: deviceWidth/6,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 15,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        opacity: 1,
        fontSize: deviceHeight/25,
        fontFamily: 'Helvetica',
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    buttonTextB: {
        opacity: 1,
        fontSize: deviceHeight/25,
        fontFamily: 'Helvetica',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    navBarCon: {
        height: 1*deviceHeight/8,
        width: deviceWidth,
        backgroundColor: 'darkslateblue',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navButton: {
        borderRadius: 10,
        height: deviceHeight/10,
        width: deviceWidth/2.5,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        textAlign: 'center',
    },
    navButtonText: {
        fontSize: deviceHeight/25,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    buttonCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    statePageBG: {
        height: 7*deviceHeight/8,
        width: deviceWidth,
        backgroundColor: 'firebrick',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderBottomWidth: 5,
        borderColor: 'black',
    },
    infoCon: {
        height: 6*deviceHeight/8,
        width: deviceWidth,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    flagImg: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 3*deviceHeight/10,
        width: 9*deviceWidth/10,
        borderColor: 'black',
        borderWidth: 1,
    },
    info: {
        fontSize: deviceHeight/30,
        fontFamily: 'Helvetica',
        textAlign: 'center',
        color: 'black',
        textAlign: 'center',
    },
});
