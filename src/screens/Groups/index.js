// SETUP //
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// UI //
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  Surface,
  Appbar,
  Chip,
  Caption,
  Headline,
  Subheading,
  Button,
  Modal,
  TextInput,
  Title,
  Avatar,
  Text,
  Paragraph,
  Badge,
  ActivityIndicator,
} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {showMessage} from 'react-native-flash-message';
import colors from '@colors';

// ACTIONS
import {onCompleteChallenge} from '@actions/UserActions';

const Groups = () => {
  const [search, setSearch] = useState('');
  const [visible, setVisible] = useState(false);
  const [selectedFriends, setSelectedFriends] = useState({});
  const [challenges, setChallenges] = useState([]);
  const [shsA, setShsA] = useState('');
  const [shsB, setShsB] = useState('');
  const [totalDays, setTotalDays] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const initiate = () => {
    let newChallenge = {shsA, shsB, totalDays, selectedFriends};
    setLoading(true);
    setTimeout(() => {
      setChallenges([...challenges, newChallenge]);
      setSelectedFriends({});
      setShsA('');
      setShsB('');
      setTotalDays('');
      setVisible(false);
      setLoading(false);
    }, 5000);
  };

  const skip = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showMessage({
        message: 'Challenge Complete',
        description:
          "You've earned 250 SHS.A & 25 SHS.B. You're the only member who completed the challenge!",
        type: 'success',
      });
      setChallenges([]);
      dispatch(onCompleteChallenge());
    }, 5000);
  };

  const renderFriend = f => {
    const {profilePicture, name, tokens, address} = f.item;
    let isChosen = selectedFriends[name] !== undefined;
    return (
      <Surface style={[styles.surface, {marginBottom: 10, padding: 7}]}>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <View style={styles.row}>
            <Avatar.Image source={{uri: profilePicture}} size={30} />
            <View style={{marginLeft: 10}}>
              <View style={[styles.row]}>
                <Text style={{color: colors.white}}>{name}</Text>
              </View>
              <View style={[styles.row]}>
                <Avatar.Image
                  source={require('@assets/images/coin.png')}
                  size={15}
                />
                <Text style={{color: colors.white, marginLeft: 7}}>
                  {tokens.toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
          {isChosen ? (
            <MaterialCommunityIcons
              name="close-circle"
              color={colors.tertiary}
              size={25}
              onPress={() => null}
            />
          ) : (
            <MaterialCommunityIcons
              name="plus-circle"
              color={colors.white}
              size={25}
              onPress={() =>
                setSelectedFriends({...selectedFriends, [name]: f.item})
              }
            />
          )}
        </View>
        <Caption
          style={{color: colors.white, fontStyle: 'italic', marginTop: 5}}>
          {address.substring(0, 30)}...
        </Caption>
      </Surface>
    );
  };

  const renderChallenge = c => {
    const {shsA: sa, shsB: sb, totalDays: td, selectedFriends: sf} = c.item;
    return (
      <Surface style={[styles.surface, {marginTop: 10}]}>
        <View
          style={[
            styles.row,
            {justifyContent: 'space-between', alignItems: 'flex-start'},
          ]}>
          <View>
            <Subheading style={{color: colors.white, fontWeight: 'bold'}}>
              Group
            </Subheading>
            <FlatList
              data={Object.values(sf)}
              renderItem={f => (
                <Avatar.Image
                  style={{marginRight: 5}}
                  source={{uri: f.item.profilePicture}}
                  size={25}
                />
              )}
              horizontal
              style={{marginVertical: 10}}
            />
          </View>

          <View>
            <View style={styles.row}>
              <Avatar.Image
                size={15}
                source={require('@assets/images/coin.png')}
              />
              <Title
                style={{
                  color: colors.white,
                  fontWeight: 'bold',
                  marginLeft: 5,
                }}>
                {sa}.00
              </Title>
              <Caption
                style={{
                  color: colors.white,
                  fontWeight: 'bold',
                  marginLeft: 5,
                }}>
                SHS.A
              </Caption>
            </View>
            <View style={styles.row}>
              <Avatar.Image
                size={15}
                source={require('@assets/images/coin.png')}
              />
              <Title
                style={{
                  color: colors.white,
                  fontWeight: 'bold',
                  marginLeft: 5,
                }}>
                {sb}.00
              </Title>
              <Caption
                style={{
                  color: colors.white,
                  fontWeight: 'bold',
                  marginLeft: 5,
                }}>
                SHS.B
              </Caption>
            </View>
          </View>
        </View>

        <Paragraph style={{color: colors.white, marginTop: 10}}>
          Maintain sleep quality above 80% for 7 days!
        </Paragraph>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <Badge
            style={{
              paddingHorizontal: 10,
              fontWeight: 'bold',
              marginTop: 10,
              alignSelf: 'flex-start',
              backgroundColor: colors.tertiary,
              color: colors.white,
            }}
            size={25}>
            Day 1 out of 7
          </Badge>
          {loading ? (
            <ActivityIndicator animating={true} color={colors.white} />
          ) : (
            <Badge
              style={{
                paddingHorizontal: 10,
                fontWeight: 'bold',
                marginTop: 10,
                alignSelf: 'flex-start',
                backgroundColor: colors.tertiary,
                color: colors.white,
              }}
              onPress={skip}
              size={25}>
              SKIP
            </Badge>
          )}
        </View>
      </Surface>
    );
  };

  return (
    <LinearGradient
      colors={[colors.primary, colors.tertiary, colors.quaternary]}
      style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50, flex: 1}}>
        <Appbar.Header style={{backgroundColor: 'transparent'}}>
          <Appbar.Action
            icon="account-circle"
            color={colors.background}
            size={30}
          />
        </Appbar.Header>
        <View style={[styles.row, {paddingHorizontal: '5%'}]}>
          <Chip
            mode="outlined"
            textStyle={{color: colors.white, fontWeight: 'bold'}}
            style={[styles.chip, {backgroundColor: colors.primary}]}>
            Challenges
          </Chip>
          <Chip
            mode="outlined"
            textStyle={{color: colors.white, fontWeight: 'bold'}}
            style={styles.chip}>
            Friends
          </Chip>
        </View>
        <Headline
          style={{
            fontWeight: 'bold',
            color: colors.white,
            marginTop: '5%',
            marginLeft: '5%',
          }}>
          My Challenges
        </Headline>

        <Surface
          style={[styles.surface, {marginTop: 10, marginHorizontal: '5%'}]}>
          <Subheading
            style={{
              color: colors.white,
              fontWeight: 'bold',
              flex: 7,
            }}>
            Challenge Friends
          </Subheading>
          <Caption style={{color: colors.white}}>
            Select a group of friends to begin the challenge!
          </Caption>
          <Button
            mode="contained"
            color={colors.tertiary}
            labelStyle={{color: colors.background, fontWeight: 'bold'}}
            style={{borderRadius: 20, marginTop: 10}}
            onPress={() => setVisible(true)}>
            Start
          </Button>
        </Surface>

        <FlatList
          data={challenges}
          renderItem={renderChallenge}
          style={{marginHorizontal: '5%'}}
        />

        <Modal visible={visible} onDismiss={() => setVisible(false)}>
          <LinearGradient
            style={styles.modal}
            colors={[colors.primary, colors.tertiary, colors.quaternary]}>
            <Title
              style={{
                color: colors.white,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Create Challenge
            </Title>
            <TextInput
              label="Find friend..."
              value={search}
              onChangeText={text => setSearch(text)}
              mode="outlined"
              dense
            />
            <FlatList
              data={FRIENDS}
              renderItem={renderFriend}
              style={{maxHeight: 150, marginVertical: 10}}
            />
            <Paragraph style={{color: colors.white}}>
              Everyone bets this amount...
            </Paragraph>
            <View style={styles.row}>
              <TextInput
                label="SHS.A 50.00"
                value={shsA}
                onChangeText={text => setShsA(text)}
                mode="outlined"
                keyboardType="decimal-pad"
                dense
                style={{flex: 1}}
              />
              <TextInput
                label="SHS.B 5.00"
                value={shsB}
                onChangeText={text => setShsB(text)}
                mode="outlined"
                keyboardType="decimal-pad"
                dense
                style={{flex: 1}}
              />
            </View>
            <Paragraph style={{color: colors.white, marginTop: 10}}>
              Total days for challenge
            </Paragraph>
            <TextInput
              label="E.g: 7 days"
              value={totalDays}
              onChangeText={text => setTotalDays(text)}
              mode="outlined"
              dense
              keyboardType="number-pad"
              activeOutlineColor={colors.tertiary}
              style={{width: '45%'}}
            />
            <FlatList
              data={Object.values(selectedFriends)}
              renderItem={f => (
                <Avatar.Image
                  style={{marginRight: 5}}
                  source={{uri: f.item.profilePicture}}
                  size={25}
                />
              )}
              horizontal
              style={{marginVertical: 10}}
            />
            {loading ? (
              <ActivityIndicator animating={true} color={colors.white} />
            ) : (
              <Button
                mode="contained"
                color={colors.tertiary}
                labelStyle={{color: colors.background, fontWeight: 'bold'}}
                style={{borderRadius: 20}}
                onPress={initiate}>
                Initiate
              </Button>
            )}
          </LinearGradient>
        </Modal>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chip: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: 35,
    paddingHorizontal: 3,
    alignSelf: 'flex-start',
    marginRight: 5,
  },
  surface: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 15,
    padding: 15,
  },
  modal: {
    borderRadius: 15,
    padding: 15,
    backgroundColor: colors.primary,
    marginHorizontal: '10%',
  },
});

export default Groups;

const FRIENDS = [
  {
    profilePicture:
      'https://crimecheckaustralia.com.au/wp-content/uploads/2021/06/smiling-woman-shirt-making-selfie-studio.jpg',
    name: 'Angela M',
    tokens: 67,
    address: '0x797E4A088282A79909C9191D2AA02A44FAE51219',
  },
  {
    profilePicture:
      'https://www.thesun.co.uk/wp-content/uploads/2021/03/NINTCHDBPICT000626846130.jpg',
    name: 'Joey',
    tokens: 53,
    address: '0x736AA7B9F358EC953BA3949E23EA721FC12C7C60',
  },
  {
    profilePicture:
      'https://www.gannett-cdn.com/presto/2020/02/21/PWIL/dc997c3e-8840-497d-8fbb-4f7259db4022-021820_021820_WILSNEAKERS_JC0434n.jpg',
    name: 'Chris J',
    tokens: 101,
    address: '0xFF2EE6A94B20E55EBFEFEB877341346604CF2E22',
  },
  {
    profilePicture:
      'https://www.standinguptopots.org/sites/default/files/styles/portrait/public/profiles/2022-02/Jodi.jpg?itok=Z_XtRWqS',
    name: 'Julie',
    tokens: 320,
    address: '0x755DF5AF23442EA90C7E95309974BED225D754D8',
  },
  {
    profilePicture:
      'https://i0.wp.com/community.theta.tv/wp-content/uploads/2018/12/hypebeast.jpg?ssl=1',
    name: 'Chad Morris',
    tokens: 453,
    address: '0x9F41486A53DABA9227D550FE30464FE13EB43508',
  },
];
