type ScreenTypes = {
  EditScreen: { id: string };
  MainScreen: undefined;
};

type EditScreenParams = NativeStackScreenProps<ScreenTypes, "EditScreen">;
type MainScreenParams = NativeStackScreenProps<"MainScreen">;