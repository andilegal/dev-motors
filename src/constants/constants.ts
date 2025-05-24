
export const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/objects`
export const COSMIC_URL = `${BASE_URL}/6831057ac60b6921b0202807?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`

export const MENU_URL = `${BASE_URL}?pretty=true&query=%7B%22type%22%3A%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug%2Ctitle&sort=-order`


export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '#services', label: 'Serviços' },
  { href: '#contacts', label: 'Contatos' },
];