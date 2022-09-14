
const fs = require('fs/promises');
const path = require('path');
const process = require('process');

const src = './public';
const dest = path.join(process.env['USERPROFILE'], 'Documents', 'startpage');

const deploy = async () => {
	const recursive = { recursive: true };
	
	// empty dest folder
	await fs.rm(dest, recursive);

	// copy files
	await fs.cp(src, dest, recursive);
}

deploy();
