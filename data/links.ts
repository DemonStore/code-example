export type Link = [string, string]

export const MAIN: Link = ['Главная', '/']
export const ABOUT: Link = ['О компании', '/about']
export const COLLECTION1: Link = ['Коллекция 1', '/collection1']
export const COLLECTION2: Link = ['Коллекция 2', '/collection2']
export const SUBCOLLECTION1: Link = ['Подколлекция 1', '/collection2/collection1']
export const SUBCOLLECTION2: Link = ['Подколлекция 2', '/collection2/collection2']
export const COLLECTION3: Link = ['Коллекция 3', '/collection3']
export const COLLECTION4: Link = ['Коллекция 4', '/collection4']
export const COLLECTION5: Link = ['Коллекция 5', '/collection5']
export const BLOG: Link = ['Блог', '/blog']
export const CONTACTS: Link = ['Контакты', '/contacts']

export default [
  MAIN,
  ABOUT,
  SUBCOLLECTION2,
  SUBCOLLECTION1,
  COLLECTION5,
  COLLECTION3,
  COLLECTION2,
  BLOG,
  COLLECTION4,
  CONTACTS,
  MAIN
]
