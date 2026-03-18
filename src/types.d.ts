type ScreenTypes = {
  EditScreen: { id: string };
  MainScreen: undefined;
};

type UserTypes = {
  firstname: string,
  lastname: string,
  email: string
}

type EditScreenParams = NativeStackScreenProps<ScreenTypes, "EditScreen">;
type MainScreenParams = NativeStackScreenProps<"MainScreen">;