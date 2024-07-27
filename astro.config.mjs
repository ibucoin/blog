import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import mdx from '@astrojs/mdx'
import rehypePrettyCode from 'rehype-pretty-code'
import moonlightTheme from './src/assets/moonlight-ii.json'

export default defineConfig(
  {
    integrations: [
      UnoCSS({
        injectReset: true,
      }),
      mdx(),
    ],
    markdown: {
      syntaxHighlight: false,
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: moonlightTheme,
          },
        ],
      ],
    },
  },
)
