import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { faqs, faqsDescription } from "../../../data";

import FaqCard from "../../../components/Card/FaqCard";
import Header from "../../../components/Header";
import React from "react";
import { colors } from "../../../utils/colors";
import styles from "./styles";

export default function () {
  return (
    <SafeAreaView style={styles.main}>
      <Header title={"FAQs"} />
      <ScrollView>
        <View style={styles.container}>
          <View style={{ marginBottom: "5%" }}>
            <Text style={styles.title}>{`Frequently Asked Questions`}</Text>
            <Text style={styles.description}>{faqsDescription}</Text>
          </View>
          {faqs.map((faq, index) => {
            return (
              <FaqCard
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
