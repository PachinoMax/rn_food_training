import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style='auto'></StatusBar>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList
          results={filterResultsByPrice('$')}
          title={'Cost Effective'} />
        <ResultList
          results={filterResultsByPrice('$$')}
          title={'Bit Pricier'} />
        <ResultList
          results={filterResultsByPrice('$$$')}
          title={'Big Spender'} />
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({});

export default SearchScreen;