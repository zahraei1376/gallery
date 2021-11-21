import cookie from "cookie"

export async function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}