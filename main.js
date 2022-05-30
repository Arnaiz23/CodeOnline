import './style.css'

const $ = selector => document.querySelector(selector)

const $js = $("#js textarea")
const $css = $("#css textarea")
const $html = $("#html textarea")

$js.addEventListener('input', update)
$html.addEventListener('input', update)
$css.addEventListener('input', update)

function update() {
  const html = createHTMl()
  $("iframe").setAttribute("srcdoc", html)
}

const createHTMl = () => {
  const html = $html.value
  console.log(html)
  const css = $css.value
  const js = $js.value

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <style>
          ${css}
        </style>
    </head>
    <body>
        ${html}
        <script>
          ${js}
        </script>
    </body>
    </html>
`
}