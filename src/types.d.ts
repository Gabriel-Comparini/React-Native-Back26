type ScreenTypes = {
  EditScreen: { id: number };
  MainScreen: undefined;
};

type EditScreenParams = NativeStackScreenProps<ScreenTypes, "EditScreen">;
type MainScreenParams = NativeStackScreenProps<"MainScreen">;