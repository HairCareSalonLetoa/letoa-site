# letoa-site
## スタイル（Tailwind）

各ページは `assets/tailwind.css`（ビルド済み）を読み込みます。CDN版の Tailwind は使いません。
ページを追加したり、新しい Tailwind のクラスを使ったりしたら、リポジトリ直下で作り直してください。

```
npx tailwindcss@3.4.17 -i assets/tailwind.src.css -o assets/tailwind.css --minify
```

新しいページの `<head>` では、ページ独自の `<style>` のあとに
`<link rel="stylesheet" href="/assets/tailwind.css" />` を置きます（既存ページと同じ順番）。
