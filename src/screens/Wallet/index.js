// SETUP //
import React from 'react';
import {useSelector} from 'react-redux';

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
  Text,
  Title,
  Avatar,
  Chip,
  Caption,
  Headline,
  Subheading,
  Divider,
  Paragraph,
} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import colors from '@colors';

const Wallet = ({navigation}) => {
  const {User} = useSelector(state => ({...state}));

  return (
    <LinearGradient
      colors={[colors.primary, colors.tertiary, colors.quaternary]}
      style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 50}}>
          <Headline
            style={{
              textAlign: 'center',
              color: colors.white,
              fontWeight: 'bold',
              marginTop: '5%',
            }}>
            Wallet
          </Headline>

          <View style={[styles.row, {alignSelf: 'center'}]}>
            <Avatar.Image
              size={50}
              source={require('@assets/images/coin.png')}
            />
            <Text style={styles.balanceText}>{User.shsA.toFixed(2)}</Text>
            <Paragraph style={{color: colors.white, marginLeft: 10}}>
              SHS.A
            </Paragraph>
          </View>

          <Divider
            style={{
              backgroundColor: colors.white,
              marginHorizontal: '10%',
              marginVertical: 10,
            }}
          />

          <View style={[styles.row, {alignSelf: 'center'}]}>
            <Avatar.Image
              size={50}
              source={require('@assets/images/coin.png')}
            />
            <Text style={styles.balanceText}>{User.shsB.toFixed(2)}</Text>
            <Paragraph style={{color: colors.white, marginLeft: 10}}>
              SHS.B
            </Paragraph>
          </View>

          <Caption
            style={{
              textAlign: 'center',
              marginHorizontal: '5%',
              color: colors.white,
            }}>
            Balance
          </Caption>

          <View style={[styles.row, {marginTop: '5%'}]}>
            <Surface style={[styles.surface, {flex: 1}]}>
              <Subheading
                style={{
                  color: colors.white,
                  fontWeight: 'bold',
                }}>
                {`Challenge\nFriend`}
              </Subheading>
              <Chip
                mode="outlined"
                textStyle={{color: colors.white, fontWeight: 'bold'}}
                style={styles.chip}>
                Pick Out
              </Chip>
            </Surface>

            <View style={{marginHorizontal: 5}} />

            <Surface style={[styles.surface, {flex: 1}]}>
              <Subheading
                style={{
                  color: colors.white,
                  fontWeight: 'bold',
                }}>
                {`Claim\nRewards`}
              </Subheading>
              <Chip
                mode="outlined"
                textStyle={{color: colors.white, fontWeight: 'bold'}}
                style={styles.chip}>
                Go to Shop
              </Chip>
            </Surface>
          </View>

          <View style={{marginVertical: 20}} />

          <Headline
            style={{fontWeight: 'bold', color: colors.white, marginBottom: 10}}>
            Earning History
          </Headline>

          {User.shsA > 200 && (
            <Surface style={[styles.surface]}>
              <View style={[styles.row, {justifyContent: 'space-between'}]}>
                <Title style={{color: colors.white, fontWeight: 'bold'}}>
                  Group Challenge
                </Title>
                <View style={styles.row}>
                  <Caption
                    style={{
                      color: colors.white,
                      fontWeight: 'bold',
                      marginRight: 10,
                    }}>
                    Earned
                  </Caption>
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
                    250.00
                  </Title>
                </View>
              </View>

              <Paragraph style={{color: colors.white, marginTop: 10}}>
                You've finished the challenge successfully [Duration: 7 days]
              </Paragraph>
              <FlatList
                data={FRIENDS}
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
            </Surface>
          )}
          <View style={{marginVertical: 5}} />

          <Surface style={[styles.surface]}>
            <View style={[styles.row, {justifyContent: 'space-between'}]}>
              <Title style={{color: colors.white, fontWeight: 'bold'}}>
                Today
              </Title>
              <View style={styles.row}>
                <Caption
                  style={{
                    color: colors.white,
                    fontWeight: 'bold',
                    marginRight: 10,
                  }}>
                  Earned
                </Caption>
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
                  1.00
                </Title>
              </View>
            </View>

            <Paragraph style={{color: colors.white, marginTop: 10}}>
              You've slept 7:23 hours today with 93% sleep quality.
            </Paragraph>
          </Surface>

          <View style={{marginVertical: 5}} />

          <Surface style={[styles.surface]}>
            <View style={[styles.row, {justifyContent: 'space-between'}]}>
              <Title style={{color: colors.white, fontWeight: 'bold'}}>
                Yesterday
              </Title>
              <View style={styles.row}>
                <Caption
                  style={{
                    color: colors.white,
                    fontWeight: 'bold',
                    marginRight: 10,
                  }}>
                  Earned
                </Caption>
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
                  1.00
                </Title>
              </View>
            </View>

            <Paragraph style={{color: colors.white, marginTop: 10}}>
              You've slept 7:04 hours yesterday with 85% sleep quality.
            </Paragraph>
          </Surface>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chip: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: 40,
    paddingHorizontal: 5,
    alignSelf: 'flex-start',
    borderRadius: 20,
    marginTop: 20,
  },
  balanceText: {
    color: colors.white,
    fontSize: 50,
    marginLeft: 5,
  },
  surface: {
    backgroundColor: 'rgba(0,0,0.6,0.3)',
    borderRadius: 15,
    padding: 15,
  },
});

export default Wallet;

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
