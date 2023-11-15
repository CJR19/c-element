

import markdownItContainer from 'markdown-it-container'
import MarkdownIt from 'markdown-it'
import Token from 'markdown-it/lib/token'
import fs from 'fs'
import path from 'path'
import { resolve } from 'node:path'
const projRoot = resolve(__dirname, '../../')
const docRoot = resolve(projRoot, 'docs')


const demoContainer = (md: MarkdownIt) => {
  md.use(markdownItContainer, 'demo', {
    validate(params: string) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens: Token[], idx: number) {

      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      console.log(m)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {

        const descriptionRegex = /description="([^"]*)"/;
        const githubRegex = /github="([^"]*)"/;

        const descriptionMatch = m && m[1].match(descriptionRegex);
        const githubMatch = m && m[1].match(githubRegex);

        const description = descriptionMatch ? descriptionMatch[1] : '';
        const github = githubMatch ? githubMatch[1] : '';

        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''
        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(
            path.resolve(docRoot, 'examples', `${sourceFile}.vue`),
            'utf-8'
          )
        }

        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)

        const comp =
          `<Demo 
              path="${sourceFile}" 
              raw-source="${encodeURIComponent(source)}" 
              description="${encodeURIComponent(description)}"
              github="${encodeURIComponent(github)}"
            >`
        return comp
      } else {
        return '</Demo>'
      }
    },
  })
}

export default demoContainer

