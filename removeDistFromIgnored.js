const fs = require('fs');
const gitIgnore = fs.readFileSync('./.gitignore','utf-8');

fs.writeFileSync('./.gitignore',gitIgnore.replace('/dist',''));