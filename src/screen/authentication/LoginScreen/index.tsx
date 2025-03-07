import { Formik } from "formik";
import * as yup from "yup";
import * as UI from "@/components/common";
import { useSession } from "@/contexts/AuthContext";
import { router } from "expo-router";
import { styles } from "./styles";
import { rHeight } from "@/src/utils";

let loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function LoginScreen() {
  const { signIn } = useSession();

  const handleLogin = (values: any) => {
    console.log(values);
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
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values) => handleLogin(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
              <UI.TextInput
                placeholder="email"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                containerStyle={styles.textContainner}
                error={!!errors.email}
                errorMessage={errors.email}
              />
              <UI.Spacer size={rHeight(1)} />
              <UI.TextInput
                placeholder="password"
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                containerStyle={styles.textContainner}
                error={!!errors.password}
                errorMessage={errors.password}
                password
              />
              <UI.Box boxed padded>
                <UI.Button text="Login" onClick={handleSubmit} />
              </UI.Box>
            </>
          )}
        </Formik>
      </UI.Box>
    </UI.Layout>
  );
}
