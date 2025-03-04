import { TextInput } from "react-native";
import * as UI from "@/components/common";
import { useSession } from "@/contexts/AuthContext";
import { router } from "expo-router";
import { styles } from "./styles";
export default function LoginScreen() {
  const { signIn } = useSession();
  const handleLogin = () => {
    //Adicione sua lógica de login aqui
    signIn();
    //Antes de navegar, tenha certeza de que o usuário está autenticado
    router.replace("/");
  };

  return (
    <UI.Layout>
      <UI.Box style={styles.container}>
        <UI.Text variant="header-1">Welcome! 🌈 </UI.Text>

        <UI.Spacer size={10} />
        <TextInput placeholder="Username(not required)" style={styles.input} />
        <TextInput placeholder="Password(not required)" secureTextEntry style={styles.input} />
        <UI.Button text="Login" onClick={handleLogin} />
      </UI.Box>
    </UI.Layout>
  );
}
