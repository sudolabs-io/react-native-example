import React from 'react';
import { ScrollView } from 'react-native';
import { Searchbar, List, ActivityIndicator, Colors } from 'react-native-paper';
import styled from 'styled-components/native';
import request from '../../utils/network';
import { format } from '../../utils/date';
import transactionsData from './transactionsData';

const LoadingWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Amount = styled.Text`
  color: ${({ isNegative }) => (isNegative ? 'red' : 'green')};
`;

const Transactions = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isFetching, setIsFetching] = React.useState(true);
  const [transactions, setTransactions] = React.useState([]);
  React.useEffect(() => {
    setIsFetching(true);
    const fetchData = async () => {
      const response = await request('/transactions', {
        mockData: transactionsData
      });
      setTransactions(response);
      setIsFetching(false);
    };
    fetchData();
  }, []);
  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={(query) => setSearchQuery(query)}
        value={searchQuery}
      />
      {isFetching ? (
        <LoadingWrapper>
          <ActivityIndicator animating color={Colors.red800} size="large" />
        </LoadingWrapper>
      ) : (
        <ScrollView>
          <List.Section>
            {transactions.map(({ date, items }) => (
              <React.Fragment key={date}>
                <List.Subheader>{format(date)}</List.Subheader>
                {items.map(({ title, type, isNegative, amount, currency }) => (
                  <React.Fragment key={title}>
                    <List.Item
                      title={title}
                      description={type}
                      left={() => {
                        if (isNegative) {
                          return <List.Icon icon="minus" color="red" />;
                        }
                        return <List.Icon icon="plus" color="green" />;
                      }}
                      right={() => (
                        <Amount $isNegative={isNegative}>
                          {amount} {currency}
                        </Amount>
                      )}
                    />
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </List.Section>
        </ScrollView>
      )}
    </>
  );
};

export default Transactions;
