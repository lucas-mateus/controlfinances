import React, {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import * as AppleAuthentication from "expo-apple-authentication";

import AsyncStorage from "@react-native-async-storage/async-storage";
WebBrowser.maybeCompleteAuthSession();

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  picture?: string;
}

interface IAuthContextData {
  user: User;
  signIn(): Promise<void>;
  signInWithApple(): Promise<void>;
  userIsLoading: boolean;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [userIsLoading, setUserIsLoading] = useState(false);
  const [user, setUser] = useState<User>({} as User);
  const [accessToken, setAccessToken] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      "707328803442-n0v9ovf25r15orgvr168nlmlddcga6po.apps.googleusercontent.com",
    androidClientId:
      "707328803442-0elvb1s74q76snhjd9urvglarfqhotuq.apps.googleusercontent.com",
    iosClientId:
      "707328803442-v235qidh91mi0338j563ds1f6n90hd1e.apps.googleusercontent.com",
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
  });

  async function signIn() {
    try {
      setUserIsLoading(true);
      await promptAsync();
    } catch (error) {
      throw new Error(error);
      console.log(error);
    } finally {
      setUserIsLoading(false);
    }
  }

  async function signInWithGoogle() {
    try {
      const userResponse = await fetch(
        "https://www.googleapis.com/oauth2/v2/userinfo",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const userData = await userResponse.json();

      const userDataFormatted = {
        id: String(userData.id),
        name: userData.name,
        email: userData.email,
        picture: userData?.picture,
      };
      setUser(userDataFormatted);
      await AsyncStorage.setItem(
        "@controlfinances:user",
        JSON.stringify(userDataFormatted)
      );
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async function signInWithApple() {
    try {
      const credentials = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        ],
      });

      if (credentials) {
        const userDataFormatted = {
          id: String(credentials.user),
          name: credentials.fullName!.givenName!,
          email: credentials.email,
          picture: undefined,
        };
        setUser(userDataFormatted);
        await AsyncStorage.setItem(
          "@controlfinances:user",
          JSON.stringify(userDataFormatted)
        );
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  useEffect(() => {
    if (response?.type === "success" && response.authentication?.accessToken) {
      setAccessToken(response.authentication.accessToken);
      signInWithGoogle();
    }
  }, [accessToken]);

  return (
    <AuthContext.Provider
      value={{ user, signIn, signInWithApple, userIsLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
