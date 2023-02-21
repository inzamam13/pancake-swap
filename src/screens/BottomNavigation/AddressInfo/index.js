import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { currencyFormat, currencyFormatter, nFormatter } from "../../../utils";

import Header from "../../../components/Header";
import { SPINNER } from "../../../constants";
import TextInput from '../../../components/TextInput/index'
import { colors } from "../../../utils/colors";
import styles from "./styles";

export default function (props) {
  const [address, setAddress] = useState(null);
  // `738d145faabb1e00cf5a017588a9c0f998318012`
  const [data, setData] = useState(null);
  const [spinner, setSpinner] = useState(false);

  const _handleGetAddress = async () => {
    if (address) {
      setData(null);
      setSpinner(true);
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        `https://api.blockcypher.com/v1/eth/main/addrs/${address}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.error) {
            console.log(result);
            Alert.alert(result.error);
          } else {
            setData(result);
          }

          setSpinner(false);
        })
        .catch((error) => {
          console.log("error", error);
          Alert.alert("Alert", "Something went wrong! try again.");
          setSpinner(false);
        });
    } else {
      Alert.alert("Required", "The Field is Empty");
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={`Address`} />
      <View style={styles.container}>
        <View style={styles.rowView}>
          <View style={{ flex: 1 }}>
            <TextInput
              label={"Search Address"}
              placeholder={`Enter Address`}
              value={address}
              onChangeText={setAddress}
              length={40}
            />
          </View>

          <TouchableOpacity
            style={styles.searchButton}
            onPress={_handleGetAddress}
          >
            <Text style={styles.buttonText}>{"Search"}</Text>
          </TouchableOpacity>
        </View>

        {data && (
          //TODO
          <ScrollView style={{ paddingHorizontal: "2.5%" }}>
            <Text style={styles.heading}>{`Address`.toUpperCase()}</Text>
            <Text style={[styles.text, { fontSize: 13 }]}>{data.address}</Text>
            <Text style={styles.heading}>{`Total Recieved`.toUpperCase()}</Text>
            <Text style={[styles.text]}>
              {`$ ${nFormatter(data.total_received, 1)}`}
            </Text>
            <Text style={[styles.heading]}>{`Total Sent`.toUpperCase()}</Text>
            <Text style={[styles.text]}>
              {`$ ${nFormatter(data.total_sent, 1)}`}
            </Text>
            <Text style={[styles.heading]}>{`Balance`.toUpperCase()}</Text>
            <Text style={[styles.text]}>
              {`$ ${nFormatter(data.balance, 1)}`}
            </Text>
            <Text style={[styles.heading]}>
              {`Unconfirmed Balance`.toUpperCase()}
            </Text>
            <Text style={[styles.text]}>
              {`$ ${nFormatter(data.unconfirmed_balance, 1)}`}
            </Text>
            <Text style={[styles.heading]}>
              {`Final Balance`.toUpperCase()}
            </Text>
            <Text style={[styles.text]}>
              {`$ ${nFormatter(data.final_balance, 1)}`}
            </Text>
            <Text style={[styles.heading]}>{`NTX`}</Text>
            <Text style={[styles.text]}>{data.n_tx}</Text>
            <Text style={[styles.heading]}>
              {`UnConfirmed NTX`.toUpperCase()}
            </Text>
            <Text style={[styles.text]}>{data.unconfirmed_n_tx}</Text>
            <Text style={[styles.heading]}>{`Final NTX`.toUpperCase()}</Text>
            <Text style={[styles.text]}>{data.final_n_tx}</Text>
            <Text style={[styles.heading]}>{`Nonce`.toUpperCase()}</Text>
            <Text style={[styles.text]}>{data.nonce}</Text>
            <Text style={[styles.heading]}>{`Pool Nonse`.toUpperCase()}</Text>
            <Text style={[styles.text]}>{data.pool_nonce}</Text>
          </ScrollView>
        )}
        {spinner && (
          <View style={styles.spinnerContainer}>
            <Image source={SPINNER} style={styles.spinner} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
