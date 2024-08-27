
import fsp from 'node:fs/promises'
import path from 'path'

//const fs = require('fs')

//const fsp = fs.promises

//const path = require('path')

const dirPath = 'src/assets/icons/components'

async function processFile(filePath) {
  const fileContent = await fsp.readFile(filePath, 'utf-8')
  let newContent = fileContent

  // Найти все строки импорта из 'react'

  const importLines = newContent.match(/import.*from\s+['"]react['"]/g) || []

  if (importLines.length > 1) {
    const uniqueImports = new Set()

    importLines.forEach(line => {
      const matches = line.match(/\{([^}]+)\}/)

      if (matches) {
        matches[1].split(',').forEach(item => {
          uniqueImports.add(item.trim())
        })
      }
    })
    const newImportLine = `import { ${Array.from(uniqueImports).join(', ')} } from 'react'`

    newContent = newContent.replace(/import.*from\s+['"]react['"]\n/g, '')
    newContent = newImportLine + '\n' + newContent
  }

  // Заменить 'import type { SVGProps } from 'react'' на новый импорт

  newContent = newContent.replace(
    `import type { SVGProps } from 'react'`,
    `import { Ref, SVGProps, forwardRef, memo } from 'react'`
  )

  // Удалить дублирующиеся импорты 'react'

  const importRegex = /import\s+\{([^}]+)\}\s+from\s+['"]react['"]/g
  const imports = []
  let match

  while ((match = importRegex.exec(newContent)) !== null) {
    imports.push(match[1].split(',').map(item => item.trim()))
  }
  const uniqueImports = [...new Set(imports.flat())]
  const consolidatedImport = `import { ${uniqueImports.join(', ')} } from 'react'`

  newContent = newContent.replace(importRegex, '')
  newContent = consolidatedImport + '\n' + newContent

  await fsp.writeFile(filePath, newContent)
}

async function main() {
  const files = await fsp.readdir(dirPath)

  for (const file of files) {
    if (file.endsWith('.tsx')) {
      await processFile(path.join(dirPath, file))
    }
  }
}

void main()
