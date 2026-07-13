const fs = require('fs');
const path = require('path');

const stepsDir = '/Users/akulminocha/.gemini/antigravity/brain/0c570b84-99f5-4f8b-b3a9-09e6fe306dca/.system_generated/steps';
const outputDir = '/Users/akulminocha/Desktop/OS2/Manoj Website/scraped_original_content';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Clean HTML to Markdown/Text helper
function cleanHtml(html) {
  if (!html) return '';

  // Extract body or central content container
  let mainContent = html;
  
  // Try to find the central box
  const mainBoxRegex = /<div class="(aboutcontainer|box3middleabout|box3middle|container|content|main)"[^>]*>([\s\S]*?)<\/div>\s*<\/body>/i;
  const match = html.match(mainBoxRegex);
  if (match) {
    mainContent = match[2];
  } else {
    // If not found, try finding body
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
      mainContent = bodyMatch[1];
    }
  }

  // Remove navigation menus, sidebars, headers, and footers inside the content
  mainContent = mainContent
    .replace(/<div class="header"[\s\S]*?<\/div>\s*<\/div>/gi, '')
    .replace(/<div class="navigation"[\s\S]*?<\/div>/gi, '')
    .replace(/<div class="navigation2"[\s\S]*?<\/div>/gi, '')
    .replace(/<div class="box2"[\s\S]*?<\/div>\s*<\/div>/gi, '')
    .replace(/<div class="footer"[\s\S]*?<\/div>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/gi, '');

  let text = mainContent;

  // Formatting conversions
  text = text
    .replace(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi, (m, content) => `\n\n# ${content.replace(/<[^>]+>/g, '').trim()}\n\n`)
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (m, content) => `\n\n${content.trim()}\n\n`)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**')
    .replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**')
    .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*')
    .replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*')
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '\n* $1')
    .replace(/<tr[^>]*>([\s\S]*?)<\/tr>/gi, '\n| $1')
    .replace(/<td[^>]*>([\s\S]*?)<\/td>/gi, ' $1 |')
    .replace(/<th[^>]*>([\s\S]*?)<\/th>/gi, ' **$1** |')
    .replace(/<a\s+[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)');

  // Strip remaining tags
  text = text.replace(/<[^>]+>/g, '');

  // Decode standard HTML entities
  text = text
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'");

  // Clean double linebreaks
  text = text.replace(/\n\s*\n\s*\n+/g, '\n\n');

  return text.trim();
}

const folders = fs.readdirSync(stepsDir);

folders.forEach(folder => {
  const filePath = path.join(stepsDir, folder, 'content.md');
  if (fs.existsSync(filePath)) {
    const rawContent = fs.readFileSync(filePath, 'utf-8');
    
    // Parse Source URL
    const sourceMatch = rawContent.match(/Source:\s*([^\n]+)/);
    const source = sourceMatch ? sourceMatch[1].trim() : 'Unknown';
    
    // Parse name from source URL
    let name = source.split('/').pop() || 'Home';
    name = name.replace('.php', '').replace('.html', '').replace(/%20/g, '_') || 'Home';
    if (name === 'manalihikers.com' || name === 'index') {
      name = 'Home';
    }

    // Split at frontmatter marker ---
    const parts = rawContent.split('---');
    const htmlBody = parts.slice(1).join('---');

    const cleaned = cleanHtml(htmlBody);

    const outputFilePath = path.join(outputDir, `${name}.md`);
    const finalContent = `# Page Source: ${source}\n\n${cleaned}`;
    
    fs.writeFileSync(outputFilePath, finalContent, 'utf-8');
    console.log(`Extracted: ${name}.md`);
  }
});
