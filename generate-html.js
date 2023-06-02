const fs = require('fs');
const { resumeToHtml } = require('jsonresume-theme-stackoverflow');

const resumeJson = JSON.parse(fs.readFileSync(process.env.JSONRESUME_FILE, 'utf-8'));
const html = resumeToHtml(resumeJson);

fs.writeFileSync(process.env.HTML_OUTPUT_FILE, html);
