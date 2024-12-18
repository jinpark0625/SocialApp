import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "../common";
import { HeroProps } from "@/types/components";

const Hero = ({ content, style }: HeroProps) => {
  return (
    <Text variant="hero" weight="bold" style={[styles.padding, style]}>
      {content}
    </Text>
  );
};

export default Hero;

const styles = StyleSheet.create({
  padding: {
    paddingBottom: 24,
  },
});
