import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import {
  Container,
  Title,
  Header,
  TitleWrapper,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";

import { SignInSocialButton } from "../../components/SignInSocialButton";

import LogoSvg from "../../assets/logo.svg";
import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import { useAuth } from "../../hooks/auth";
import { Alert, Platform } from "react-native";

export function SignIn() {
  const { signIn, signInWithApple } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signIn();
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Erro ao realizar login! Não foi possivel conectar à conta Google."
      );
    }
  }

  async function handleSignInWithApple() {
    try {
      await signInWithApple();
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Erro ao realizar login! Não foi possivel conectar à conta Apple."
      );
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(190)} height={RFValue(48)} />

          <Title>
            Controle suas{"\n"}finanças de forma{"\n"}muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça seu login com{"\n"} uma das contas abaixo{" "}
        </SignInTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />
          {Platform.OS === "ios" && (
            <SignInSocialButton
              title="Entrar com Apple"
              svg={AppleSvg}
              onPress={handleSignInWithApple}
            />
          )}
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
