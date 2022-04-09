// SETUP //
import React, {useEffect} from 'react';

// UI //
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {
  Surface,
  Text,
  Appbar,
  Chip,
  Caption,
  Headline,
  Subheading,
  Button,
} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '@colors';

const Home = () => {
  return (
    <LinearGradient
      colors={[colors.primary, colors.tertiary, colors.quaternary]}
      style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Appbar.Header
          style={{
            backgroundColor: 'transparent',
            justifyContent: 'space-between',
          }}>
          <Appbar.Action
            icon="account-circle"
            color={colors.background}
            size={30}
          />
          <Chip
            avatar={<FastImage source={require('@assets/images/coin.png')} />}
            mode="outlined"
            textStyle={{color: colors.white, fontWeight: 'bold'}}
            style={styles.chip}>
            SHS 2.00
          </Chip>
        </Appbar.Header>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 50}}>
          <Text style={styles.timeText}>7:23</Text>
          <Headline style={{textAlign: 'center', color: colors.white}}>
            hours slept
          </Headline>
          <Caption
            style={{
              textAlign: 'center',
              marginHorizontal: '5%',
              color: colors.white,
            }}>
            Every well rested day generates 1 SHS coin. Keep your watch on at
            all times!
          </Caption>

          <Chip
            icon={() => (
              <MaterialCommunityIcons
                name="lightbulb-on"
                color={colors.white}
                size={15}
              />
            )}
            mode="outlined"
            color={colors.white}
            textStyle={{color: colors.white, fontWeight: 'bold'}}
            style={[
              styles.chip,
              {
                borderColor: 'red',
                alignSelf: 'center',
                marginTop: '10%',
                marginBottom: '25%',
              },
            ]}>
            Insights
          </Chip>

          <Surface style={[styles.surface, styles.row]}>
            <Subheading
              style={{
                color: colors.white,
                fontWeight: 'bold',
                flex: 7,
              }}>
              Invite a friend, get 5 SHS coins!
            </Subheading>
            <Button
              mode="contained"
              color={colors.tertiary}
              labelStyle={{color: colors.background, fontWeight: 'bold'}}
              style={{flex: 3, borderRadius: 20}}
              onPress={() => console.log('Pressed')}>
              Get 5 SHS
            </Button>
          </Surface>

          <View style={{marginVertical: 5}} />

          <Surface style={styles.surface}>
            <Subheading
              style={{
                color: colors.white,
                fontWeight: 'bold',
                flex: 7,
              }}>
              Next Milestone
            </Subheading>
            <Caption style={{color: colors.white}}>
              Your body will love you for this. Keep up it for another 5 days
              champ!
            </Caption>
            <FastImage
              source={require('@assets/images/girl-sleeping.png')}
              style={{width: '100%', aspectRatio: 1}}
            />
            <Text
              style={{color: colors.white, fontSize: 40, textAlign: 'center'}}>
              1 Week
            </Text>
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
  },
  timeText: {
    color: colors.white,
    fontSize: 60,
    textAlign: 'center',
    marginTop: '20%',
  },
  surface: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 15,
    padding: 15,
  },
});

export default Home;
