export const YM_TRACKING_ID = 73747243

export const hit = (url: string) => {
  if (!window.ym) {
    return
  }

  window.ym(YM_TRACKING_ID, 'hit', url)
}
