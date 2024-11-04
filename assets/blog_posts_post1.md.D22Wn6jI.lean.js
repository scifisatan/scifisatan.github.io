import{_ as t,c as i,G as s,a2 as n,B as r,o}from"./chunks/framework.DPuwY6B9.js";const b=JSON.parse('{"title":"Basic Markdown Formatting","description":"","frontmatter":{"date":"2022-08-10T00:00:00.000Z","title":"Basic Markdown Formatting","lastUpdated":false},"headers":[],"relativePath":"blog/posts/post1.md","filePath":"blog/posts/post1.md"}'),l={name:"blog/posts/post1.md"};function d(h,e,p,c,u,g){const a=r("PostDetail");return o(),i("div",null,[s(a),e[0]||(e[0]=n(`<h2 id="markdown-formatting" tabindex="-1">Markdown Formatting <a class="header-anchor" href="#markdown-formatting" aria-label="Permalink to &quot;Markdown Formatting&quot;">​</a></h2><h3 id="headings" tabindex="-1">Headings <a class="header-anchor" href="#headings" aria-label="Permalink to &quot;Headings&quot;">​</a></h3><pre><code># This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
### This is an &lt;h3&gt; tag
#### This is an &lt;h4&gt; tag
##### This is an &lt;h5&gt; tag
###### This is an &lt;h6&gt; tag
</code></pre><h3 id="emphasis" tabindex="-1">Emphasis <a class="header-anchor" href="#emphasis" aria-label="Permalink to &quot;Emphasis&quot;">​</a></h3><pre><code>*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_
</code></pre><p>Result:</p><p><em>This text will be italic</em></p><p><em>This will also be italic</em></p><p><strong>This text will be bold</strong></p><p><strong>This will also be bold</strong></p><p><em>You <strong>can</strong> combine them</em></p><h3 id="lists" tabindex="-1">Lists <a class="header-anchor" href="#lists" aria-label="Permalink to &quot;Lists&quot;">​</a></h3><p><strong>Inordered:</strong></p><pre><code>* Milk
* Bread
    * Wholegrain
* Butter
</code></pre><p>Result:</p><ul><li>Milk</li><li>Bread <ul><li>Wholegrain</li></ul></li><li>Butter</li></ul><p><strong>Ordered:</strong></p><pre><code>1. Tidy the kitchen  
2. Prepare ingredients  
3. Cook delicious things
</code></pre><p>Result:</p><ol><li>Tidy the kitchen</li><li>Prepare ingredients</li><li>Cook delicious things</li></ol><h3 id="images" tabindex="-1">Images <a class="header-anchor" href="#images" aria-label="Permalink to &quot;Images&quot;">​</a></h3><pre><code>![Alt Text](url)
</code></pre><p>Result:</p><p><img src="https://i.imgur.com/v8IVDka.jpg" alt="m&#39;lady"></p><h3 id="links" tabindex="-1">Links <a class="header-anchor" href="#links" aria-label="Permalink to &quot;Links&quot;">​</a></h3><pre><code>[link](https://github.com/sfxcode/vitepress-blog-starter)
</code></pre><p>Result:</p><p><a href="https://www.github.com" target="_blank" rel="noreferrer">link</a></p><h3 id="blockquotes" tabindex="-1">Blockquotes <a class="header-anchor" href="#blockquotes" aria-label="Permalink to &quot;Blockquotes&quot;">​</a></h3><pre><code>As Kanye West said:

&gt; We&#39;re living the future so
&gt; the present is our past.
</code></pre><p>Result:</p><p>As Kanye West said:</p><blockquote><p>We&#39;re living the future so the present is our past.</p></blockquote><h3 id="horizontal-rules" tabindex="-1">Horizontal Rules <a class="header-anchor" href="#horizontal-rules" aria-label="Permalink to &quot;Horizontal Rules&quot;">​</a></h3><pre><code>---
</code></pre><p>Result:</p><hr><h3 id="code-snippets" tabindex="-1">Code Snippets <a class="header-anchor" href="#code-snippets" aria-label="Permalink to &quot;Code Snippets&quot;">​</a></h3><pre><code>Indenting by 4 spaces will turn an entire paragraph into a code-block.
</code></pre><p>Result:</p><pre><code>.my-link {
    text-decoration: underline;
}
</code></pre><h3 id="reference-lists-titles" tabindex="-1">Reference Lists &amp; Titles <a class="header-anchor" href="#reference-lists-titles" aria-label="Permalink to &quot;Reference Lists &amp; Titles&quot;">​</a></h3><pre><code>**The quick brown [fox][1], jumped over the lazy [dog][2].**

[1]: https://en.wikipedia.org/wiki/Fox &quot;Wikipedia: Fox&quot;
[2]: https://en.wikipedia.org/wiki/Dog &quot;Wikipedia: Dog&quot;
</code></pre><p>Result:</p><p><strong>The quick brown <a href="https://en.wikipedia.org/wiki/Fox" title="Wikipedia: Fox" target="_blank" rel="noreferrer">fox</a>, jumped over the lazy <a href="https://en.wikipedia.org/wiki/Dog" title="Wikipedia: Dog" target="_blank" rel="noreferrer">dog</a>.</strong></p><h3 id="escaping" tabindex="-1">Escaping <a class="header-anchor" href="#escaping" aria-label="Permalink to &quot;Escaping&quot;">​</a></h3><pre><code>\\*literally\\*
</code></pre><p>Result:</p><p>*literally*</p><h3 id="embedding-html" tabindex="-1">Embedding HTML <a class="header-anchor" href="#embedding-html" aria-label="Permalink to &quot;Embedding HTML&quot;">​</a></h3><pre><code>&lt;button class=&quot;button-save large&quot;&gt;Big Fat Button&lt;/button&gt;
</code></pre><p>Result:</p><p><button class="button-save large">Big Fat Button</button></p><h2 id="advanced-markdown" tabindex="-1">Advanced Markdown <a class="header-anchor" href="#advanced-markdown" aria-label="Permalink to &quot;Advanced Markdown&quot;">​</a></h2><p>Note: Some syntax which is not standard to native Markdown. They&#39;re extensions of the language.</p><h3 id="strike-throughs" tabindex="-1">Strike-throughs <a class="header-anchor" href="#strike-throughs" aria-label="Permalink to &quot;Strike-throughs&quot;">​</a></h3><pre><code>~~deleted words~~
</code></pre><p>Result:</p><p><s>deleted words</s></p><h2 id="github-flavored-markdown" tabindex="-1">GitHub Flavored Markdown <a class="header-anchor" href="#github-flavored-markdown" aria-label="Permalink to &quot;GitHub Flavored Markdown&quot;">​</a></h2><h3 id="syntax-highlighting" tabindex="-1">Syntax Highlighting <a class="header-anchor" href="#syntax-highlighting" aria-label="Permalink to &quot;Syntax Highlighting&quot;">​</a></h3><pre><code>\`\`\`javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:&#39;#foo&#39;})
  }
}
\`\`\`
</code></pre><p>Result:</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fancyAlert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (arg) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        $.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">facebox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({div: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="task-lists" tabindex="-1">Task Lists <a class="header-anchor" href="#task-lists" aria-label="Permalink to &quot;Task Lists&quot;">​</a></h3><pre><code>- [x] @mentions, #refs, [links](), **formatting**, and &lt;del&gt;tags&lt;/del&gt; supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
</code></pre><p>Result:</p><ul><li>[x] @mentions, #refs, <a href="https://www.github.com" target="_blank" rel="noreferrer">links</a>, <strong>formatting</strong>, and <del>tags</del> supported</li><li>[x] list syntax required (any unordered or ordered list supported)</li><li>[x] this is a complete item</li><li>[ ] this is an incomplete item</li></ul><h3 id="tables" tabindex="-1">Tables <a class="header-anchor" href="#tables" aria-label="Permalink to &quot;Tables&quot;">​</a></h3><p>You can create tables by assembling a list of words and dividing them with hyphens <code>-</code> (for the first row), and then separating each column with a pipe <code>|</code>:</p><table tabindex="0"><thead><tr><th>First Header</th><th>Second Header</th></tr></thead><tbody><tr><td>Content from cell 1</td><td>Content from cell 2</td></tr><tr><td>Content in the first column</td><td>Content in the second column</td></tr></tbody></table><h3 id="sha-references" tabindex="-1">SHA references <a class="header-anchor" href="#sha-references" aria-label="Permalink to &quot;SHA references&quot;">​</a></h3><p>Any reference to a commit’s SHA-1 hash will be automatically converted into a link to that commit on GitHub.</p><pre><code>16c999e8c71134401a78d4d46435517b2271d6ac
mojombo@16c999e8c71134401a78d4d46435517b2271d6ac
mojombo/github-flavored-markdown@16c999e8c71134401a78d4d46435517b2271d6ac
</code></pre><h3 id="issue-references-within-a-repository" tabindex="-1">Issue references within a repository <a class="header-anchor" href="#issue-references-within-a-repository" aria-label="Permalink to &quot;Issue references within a repository&quot;">​</a></h3><p>Any number that refers to an Issue or Pull Request will be automatically converted into a link.</p><pre><code>#1
mojombo#1
mojombo/github-flavored-markdown#1
</code></pre><h3 id="username-mentions" tabindex="-1">Username @mentions <a class="header-anchor" href="#username-mentions" aria-label="Permalink to &quot;Username @mentions&quot;">​</a></h3><p>Typing an <code>@</code> symbol, followed by a username, will notify that person to come and view the comment. This is called an “@mention”, because you’re mentioning the individual. You can also @mention teams within an organization.</p><h3 id="emoji" tabindex="-1">Emoji <a class="header-anchor" href="#emoji" aria-label="Permalink to &quot;Emoji&quot;">​</a></h3><p>GitHub supports emoji! Check out the <a href="https://github.com/sfxcode/vitepress-blog-starter" target="_blank" rel="noreferrer">Emoji Cheat Sheet</a>.</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://guides.github.com/features/mastering-markdown/" target="_blank" rel="noreferrer">https://guides.github.com/features/mastering-markdown/</a></li></ul>`,83))])}const k=t(l,[["render",d]]);export{b as __pageData,k as default};
