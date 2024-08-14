import * as fs from 'fs';
import * as path from 'path';

/**
 * Renames SVG files in the specified directory by removing spaces, parentheses,
 * and converting the filename to lowercase.
 *
 * @async
 * @function main
 * @throws {Error} If there's an issue reading the directory or renaming files
 */

const fsp=fs.promises;
const dirPath='src/assets/icons/svg'

async function main() {
const files=await fsp.readdir(dirPath)

files.forEach(file=>{
const newName=file.replaceAll(' ','-').replaceAll(')','').replaceAll('(','').toLowerCase();

 fsp.rename(path.join(dirPath,file),path.join(dirPath,newName));

})
}
void main();