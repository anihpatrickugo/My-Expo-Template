import * as React from "react";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { useTheme } from "@/contexts/ThemeContext";
import { Clickable } from "../Clickable";
import { Text } from "../Text";
import styles from "./styles";
import { Icon } from "../Icon";
import { Box } from "../Box";

interface ItemType {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  openIndex?: number;
  items: ItemType[];
  onChange?: (index?: number) => void;
}

interface AccordionTitleProps {
  title: string;
  onChange: (value: boolean, index: number) => void;
  index: number;
  openIndex?: number;
}

const AccordionTitle = (props: AccordionTitleProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const animatedValue = useSharedValue(0);
  const { colors } = useTheme();

  React.useEffect(() => {
    if (props.openIndex === props.index) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [props.openIndex]);

  React.useEffect(() => {
    if (isOpen) {
      animatedValue.value = withSpring(0);
    } else {
      animatedValue.value = withSpring(180);
    }
  }, [isOpen]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${animatedValue.value}deg`,
      },
    ],
  }));

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    props.onChange(isOpen, props.index);
  };

  return (
    <Clickable onClick={toggleOpen}>
      <Box row style={{ ...styles.title, borderColor: colors.grey }} vAlign="middle" justify="space-between">
        <Text bold color={colors.main}>
          {props.title}
        </Text>
        <Animated.View style={animatedStyle}>
          <Icon name="chevron-up" />
        </Animated.View>
      </Box>
    </Clickable>
  );
};

const Accordion: React.FC<AccordionProps> = ({ items = [], ...props }) => {
  const { colors } = useTheme();
  const [openIndex, setOpenIndex] = React.useState<number>();

  const toggleOpen = (value: boolean, index: number) => {
    if (index === openIndex) {
      setOpenIndex(undefined);
      props.onChange && props.onChange(undefined);
    } else {
      setOpenIndex(index);
      props.onChange && props.onChange(index);
    }
  };

  React.useEffect(() => {
    if (props.openIndex !== undefined) {
      setOpenIndex(props.openIndex);
    }
  }, [props.openIndex]);

  return (
    <>
      <Box style={{ ...styles.background, borderColor: colors.grey }}>
        {items.map((item, i) => (
          <Box key={i} style={{ ...styles.container, borderColor: colors.grey }}>
            <AccordionTitle index={i} openIndex={openIndex} onChange={toggleOpen} title={item.title} />

            {openIndex === i && <Box>{item.content}</Box>}
          </Box>
        ))}
      </Box>
    </>
  );
};

export { Accordion };