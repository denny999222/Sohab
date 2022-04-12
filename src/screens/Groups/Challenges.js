// SETUP //
import React, {useEffect} from 'react';

// UI //
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {
  Surface,
  Appbar,
  Chip,
  Caption,
  Headline,
  Subheading,
  Button,
} from 'react-native-paper';
import colors from '@colors';

const Challenges = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Appbar.Header style={{backgroundColor: 'transparent'}}>
        <Appbar.Action
          icon="account-circle"
          color={colors.background}
          size={30}
        />
      </Appbar.Header>
      <View style={styles.row}>
        <Chip
          mode="outlined"
          textStyle={{color: colors.white, fontWeight: 'bold'}}
          style={styles.chip}>
          Challenges
        </Chip>
        <Chip
          mode="outlined"
          textStyle={{color: colors.white, fontWeight: 'bold'}}
          style={styles.chip}>
          Friends
        </Chip>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}>
        <Headline
          style={{fontWeight: 'bold', color: colors.white, marginTop: '5%'}}>
          No Current Challenges
        </Headline>

        <Surface style={[styles.surface, {marginTop: 10}]}>
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
            onPress={() => console.log('Pressed')}>
            Start
          </Button>
        </Surface>

        <View style={{marginVertical: 5}} />
      </ScrollView>
    </SafeAreaView>
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
});

export default Challenges;
