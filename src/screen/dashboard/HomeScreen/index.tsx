import { styles } from "./styles";
import * as UI from "@/components/common";
import { useTheme } from "@/src/hooks/useTheme";
import { rHeight } from "@/src/utils";

export default function HomeScreen() {
  const { color } = useTheme();
  return (
    <UI.Layout style={styles.container}>
      <UI.Box leftBorder rightBorder bottomBorder topBorder vAlign="middle" hAlign="center" >

        {/* <UI.LoadingComponent/> */}

        <UI.Clickable onClick={() => console.log("Home Screen")}>
          <UI.Spacer size={rHeight(1)} />
          <UI.Text color={color.primary()}>Home Screen</UI.Text>
          <UI.Spacer size={rHeight(1)} />
        </UI.Clickable>
        <UI.Radio selected checkStyle="check"/>
       
      </UI.Box>
        {/* <UI.SuccessModal title="done successfully"/> */}

      {/* <UI.LoadingScreen/> */}
    </UI.Layout>
  );
}
