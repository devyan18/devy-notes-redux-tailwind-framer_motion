import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getThemeFromLocalStorage, setThemeToLocalStorage } from '@utils/theme'
import { appWindow } from '@tauri-apps/api/window'

export interface ThemeState {
  theme: 'light' | 'dark'
}

const localTheme = await appWindow.theme()
if (localTheme) {
  setThemeToLocalStorage(localTheme)
}

const initialState: ThemeState = {
  theme: localTheme || 'light'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    getTheme: (state) => {
      state.theme = getThemeFromLocalStorage()
    },
    setTheme: (state, action: PayloadAction<'light'| 'dark'>) => {
      setThemeToLocalStorage(action.payload)
      state.theme = action.payload
    }
  }
})

export const { getTheme, setTheme } = themeSlice.actions

export default themeSlice.reducer
