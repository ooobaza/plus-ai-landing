export const TELEGRAM_BOT_URL = 'https://t.me/plus_ai_robot'

export function botUrl(source: string) {
  return `${TELEGRAM_BOT_URL}?start=${source}`
}
