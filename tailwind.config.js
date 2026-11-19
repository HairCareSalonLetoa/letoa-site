// assets/tailwind.css の元になる設定。ページを追加・変更したら下のコマンドで作り直す:
//   npx tailwindcss@3.4.17 -i assets/tailwind.src.css -o assets/tailwind.css --minify
module.exports = {
  content: ['./**/*.html', '!./node_modules/**'],
  theme: { extend: {
    colors: { ink:'#33352f', sumi:'#52564c', sage:'#8a8f7e', moss:'#6f7861', haze:'#b7bcab', rice:'#fbfaf6', cloud:'#f1efe7', line:'#e3e0d4', clay:'#9c8f7a' },
    fontFamily: { mincho:['"Zen Old Mincho"','serif'], gothic:['"Zen Kaku Gothic New"','sans-serif'], corm:['"Cormorant Garamond"','serif'] },
    letterSpacing: { widejp:'0.28em' },
  }},
};
