
import prism from 'prismjs'
import consola from 'consola'
import chalk from 'chalk'
import loadLanguages from 'prismjs/components/index.js'
import escapeHtml from './escapeHtml'

function wrap(code: string, lang: string): string {
    if (lang === 'text') {
        code = escapeHtml(code)
    }
    return `<pre v-pre><code>${code}</code></pre>`
}
export const highlight = (str: string, lang: string) => {

    if (!lang) {
        return wrap(str, 'text')
    }

    lang = lang.toLowerCase()
    const rawLang = lang
    const langMappings = {
        'vue': 'markup',
        'html': 'markup',
        'md': 'markdown',
        'ts': 'typescript',
        'py': 'python'
    }  
    if (langMappings[lang]) {
        lang = langMappings[lang];
    }
    if (!prism.languages[lang]) {
        try {
            loadLanguages([lang])
        } catch {
            consola.warn(
                chalk.yellow(
                    `[vitepress] Syntax highlight for language "${lang}" is not supported.`
                )
            )
        }
    }else {
        const code = prism.highlight(str, prism.languages[lang], lang)
        return wrap(code, rawLang)
    }

    return wrap(str, 'text')
}