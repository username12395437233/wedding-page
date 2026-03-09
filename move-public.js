// move-public.js
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Получаем __dirname в ES-модулях
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distPath = path.resolve(__dirname, 'dist') // путь к папке dist
const publicPath = path.join(distPath, 'public')

// Создаём папку public, если её нет
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath)
}

// Получаем все файлы в dist
const files = fs.readdirSync(distPath)

// Перемещаем все картинки в public
files.forEach((file) => {
  const ext = path.extname(file).toLowerCase()
  if (['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'].includes(ext)) {
    const oldPath = path.join(distPath, file)
    const newPath = path.join(publicPath, file)
    fs.renameSync(oldPath, newPath)
    console.log(`Moved ${file} → public/${file}`)
  }
})

console.log('✅ Все картинки перемещены в dist/public/')
