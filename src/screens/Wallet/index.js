// SETUP //
import React from 'react';

// UI //
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {
  Surface,
  Text,
  Title,
  Avatar,
  Chip,
  Caption,
  Headline,
  Subheading,
  Button,
  Paragraph,
} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '@colors';

const Wallet = () => {
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
            <Text style={styles.balanceText}>2.00</Text>
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
    fontSize: 60,
    marginLeft: 5,
  },
  surface: {
    backgroundColor: 'rgba(0,0,0.6,0.3)',
    borderRadius: 15,
    padding: 15,
  },
});

export default Wallet;
