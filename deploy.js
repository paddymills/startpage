
const fs = require('fs/promises');
const path = require('path');
const process = require('process');

const src = './public/';
const dest = path.join(process.env['USERPROFILE'], 'Documents', 'startpage');

const recursive = { recursive: true };
const emptyDir = async () => {
	try {
		const files = await fs.readdir(dest);
		for (const file of files) {
			await fs.rm( path.resolve(dest, file), recursive );
		}
	} catch (err) {
		console.log("error emptying dest", err);
	}
}
const deploy = async () => {
	fs.cp(src, dest, recursive);
}

// empty dest folder
emptyDir();

// copy files
deploy();
