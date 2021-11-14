import fs from 'fs'
import path from 'path'

import { snippetGenerator } from './snippet-generator'

void (function main() {
  const snippet = snippetGenerator()
  fs.writeFileSync(
    path.join(__dirname, '../.vscode/typescript.code-snippets'),
    JSON.stringify(snippet, null, 2),
  )
})()
