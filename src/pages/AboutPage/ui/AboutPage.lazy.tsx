// Благодаря lazy loading'у мы подгружаем страницы только, когда они нужны

import { lazy } from 'react'

export const AboutPageLazy = lazy(async () => await import('./AboutPage'))
