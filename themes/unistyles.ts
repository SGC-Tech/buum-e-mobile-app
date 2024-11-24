import { UnistylesRegistry } from "react-native-unistyles";

import breakpoints from "./atoms/breakpoints";
import lightTheme from "./light";

// if you defined breakpoints
type AppBreakpoints = typeof breakpoints;

// if you defined themes
type AppThemes = {
  light: typeof lightTheme;
};

// override library types
declare module "react-native-unistyles" {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}
UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
  })
  .addConfig({
    adaptiveThemes: true,
  });
