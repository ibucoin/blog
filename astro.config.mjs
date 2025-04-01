import { defineConfig } from 'astro/config'

import UnoCSS from 'unocss/astro'
import mdx from '@astrojs/mdx'
import rehypePrettyCode from 'rehype-pretty-code'
import moonlightTheme from './public/theme/moonlight-ii.json'

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
      extendDefaultPlugins: true,
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: moonlightTheme,
            defaultLang: 'javascript',
            onVisitLine(node) {
              // 防止空行折叠
              if (node.children.length === 0) {
                node.children = [{ type: 'text', value: ' ' }]
              }
            },
            onVisitHighlightedLine(node) {
              // 添加类名到高亮的行
              node.properties.className.push('highlighted')
            },
            onVisitHighlightedWord(node) {
              // 添加类名到高亮的词
              node.properties.className = ['word']
            },
          },
        ],
      ],
    },
  },
)
