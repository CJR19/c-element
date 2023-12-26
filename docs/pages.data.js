import { createContentLoader } from 'vitepress'

// 导出文章数据
export default createContentLoader('./pages/**/*.md', {
    includeSrc: true, // include raw markdown source?
    render: true,     // include rendered full page HTML?
    excerpt: true,    // include excerpt?
    // transform(rawData) {
    //   // map, sort, or filter the raw data as you wish.
    //   // the final result is what will be shipped to the client.
    //   return rawData.sort((a, b) => {
    //     return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
    //   }).map((page) => {
    //     page.src     // raw markdown source
    //     page.html    // rendered full page HTML
    //     page.excerpt // rendered excerpt HTML (content above first `---`)
    //     return {/* ... */}
    //   })
    // }
  })