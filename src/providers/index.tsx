import { SafeAreaProvider } from "react-native-safe-area-context"
import { ThemeProvider } from "./theme.provider"

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </SafeAreaProvider>
  )
}