# hexo-theme-h 氢

[中文](https://github.com/0x2E/hexo-theme-h/blob/main/README.md) | English

Theme-h is a sincere and pure Hexo theme. Just as H is the lightest element in the periodic table, theme-h does not have complicated colors and decorations, it just wants to provide a simple container for your content. The design is inspired by [@khatabwedaa](https://tailwindcomponents.com/u/khatabwedaa).

Due to busy schedule, this project is only maintained irregularly and does not accept new functional requirements. Welcome to fork and develop new version.

![demo](demo.png)

## Necessary configuration

Modify the configuration of site's `_config.yml` as follows:

- Close highlight

```yaml
highlight:
  enable: false
```

- Enable prismjs and close line_number

```yaml
prismjs:
  enable: true
  line_number: false
```

## Other configuration

### Comment

Set `comment: true` in the configuration, then fill in the code required for the comment. Choose one of the following methods:

- Save to `layout\_widgets\comments.ejs`

- If your comment code is implemented by JS by directional insertion of HTML code through selector, you can set the selector to `#comments`, and then use [Hexo injector](https://hexo.io/api/injector.html) to insert JS code into the page

### Website analytics

No configuration items are reserved, it is recommended to use [Hexo injector](https://hexo.io/api/injector.html) to insert the code into the page.

## 开发

1. Use yarn or npm to install dependencies

2. Change the property of `purge.enabled` in `tailwind.config.js` to `false`, which will turn off the purging function of tailwindcss, which is convenient for development

3. Run `yarn run css`, if you have turned off the purging function in the previous step, this command will compile a huge CSS file, which contains all the styles of tailwindcss. After that, you don’t need to compile when you modify the style of the ejs file, but you still need to compile after modifying `src/main.css`

4. Turn on the purging function closed in step 2, run `yarn run css` to compile the final CSS file
