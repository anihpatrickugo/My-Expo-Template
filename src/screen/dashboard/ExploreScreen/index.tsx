import { styles } from "./styles";
import * as UI from "@/components/common";
import { useTheme } from "@/src/hooks/useTheme";
import { rHeight } from "@/src/utils";

export default function ExploreScreen() {
  const { color } = useTheme();
  return (
    <>
    <UI.Header title="Explore Screen"/>
      <UI.Layout style={styles.container}>
        <UI.Text>Explore Screen</UI.Text>
        <UI.TextInput containerStyle={styles.textContainnner} />
        <UI.Spacer size={rHeight(2)} />
        <UI.Box boxed padded>
          <UI.Button text="submit" />
          <UI.Icon name="eye" color="black" size={24}/>
        </UI.Box>
      </UI.Layout>
    </>
  );
}
