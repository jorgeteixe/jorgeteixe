#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const mdxPath = path.join(process.cwd(), 'src/pages/index.mdx')
const readmePath = path.join(process.cwd(), 'README.md')
const distIndexPath = path.join(process.cwd(), 'dist/index.html')

function extractNotesSection(htmlContent) {
  const notesStartRegex = /<h2 id="-notes">📝 notes<\/h2>/
  const nextH2Regex = /<h2[^>]*>/g

  const startMatch = htmlContent.match(notesStartRegex)

  const startIndex = startMatch.index + startMatch[0].length

  // Find the next h2 tag after the notes section
  nextH2Regex.lastIndex = startIndex
  const nextH2Match = nextH2Regex.exec(htmlContent)

  if (!nextH2Match) {
    // If no next h2, take everything to the end
    return htmlContent.substring(startIndex).trim()
  }

  const endIndex = nextH2Match.index

  return htmlContent.substring(startIndex, endIndex).trim()
}

try {
  // Build the project to get the rendered HTML
  console.log('🔨 Building project...')
  execSync('pnpm build', { stdio: 'pipe' })

  // Read the built HTML file
  const htmlContent = fs.readFileSync(distIndexPath, 'utf8')

  // Extract the notes section
  const notesHtml = extractNotesSection(htmlContent)

  // Read the MDX file
  const content = fs.readFileSync(mdxPath, 'utf8')

  // Remove frontmatter (everything between --- and ---)
  let cleanContent = content.replace(/^---[\s\S]*?---\n/, '')

  // Remove import statements
  cleanContent = cleanContent.replace(/^import .*/gm, '')

  // Replace <NotesList /> with actual rendered HTML
  cleanContent = cleanContent.replace(/<NotesList\s*\/?>/, notesHtml)

  // Remove any other JSX/Astro components (but preserve regular HTML)
  // This targets components that start with uppercase letters (JSX/Astro convention)
  cleanContent = cleanContent.replace(/<[A-Z][^>]*\/?>/g, '')

  // Clean up extra newlines
  cleanContent = cleanContent.replace(/\n\n+/g, '\n\n').trim()

  // Fix relative links to absolute links
  cleanContent = cleanContent.replace(
    /href="\/([^"]+)"/g,
    'href="https://teixe.es/$1"'
  )

  // Add newline at the end
  cleanContent += '\n'

  // Write to README.md
  fs.writeFileSync(readmePath, cleanContent)

  console.log('✅ README.md updated successfully from src/pages/index.mdx')
} catch (error) {
  console.error('❌ Error updating README.md:', error.message)
  process.exit(1)
}
