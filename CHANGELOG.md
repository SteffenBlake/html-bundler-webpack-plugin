# Change log

## 0.4.0 (2023-01-20)
- feat: added support for `<input>` `<audio>` `<video>` `<track>` tags
- fix: automatic publicPath must be empty string when used HMR
- fix: corrupted inline JS code when code contains '$$' chars chain

## 0.3.1 (2023-01-19)
- refactor: optimize parsing of source
- chore: update dev packages
- docs: update readme

## 0.3.0 (2023-01-18)
- feat: inline binary images, e.g. PNG
- feat: inline SVG images
- fix: resolve href in the `<link>` tag with the attribute `type="text/css"` as the style file

## 0.2.1 (2023-01-16)
- fix: resolving inlined styles on windows

## 0.2.0 (2023-01-14)
- feat: add supports for the inline CSS in HTML
- feat: add supports for the inline JS in HTML
- test: add test for new features
- docs: update readme

## 0.1.0 (2023-01-12)
First release:
- feat: handles HTML files from webpack entry
- feat: resolving the Webpack alias in the source file name
- feat: option `js` to extract JavaScript files from source scripts loaded in HTML via a `<script>` tag and generates a separate file for it
- feat: option `css` to extract CSS files from source styles loaded in HTML via a `<link>` tag and generates a separate file for it
- feat: processes the images, fonts from sources loaded via `<link>`, `<img>` or `<source>` tags and generates a separate file for it
- feat: resolves and extracts images from sources loaded via `url()` in a style (css, scss)

## 0.0.1-beta.0 (2023-01-07)
- docs: announcement of the plugin