export const getThemeFromLocalStorage = (): 'light' | 'dark' => {
  const mode = localStorage.getItem('theme')
  if (mode === 'dark') {
    return 'dark'
  } else {
    return 'light'
  }
}

export const setThemeToLocalStorage = (mode: string): void => {
  localStorage.setItem('theme', mode)
}
