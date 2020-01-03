const fs = require('fs');
const walkFile = require('./walk-file');

/**
 * 获取sql目录下的文件目录数据
 * @return {object}
 */
function getSqlMap () {
  let basePath = __dirname;
  basePath = basePath.replace(/\\/g, '\/');

  let pathArr = basePath.split('\/');
  console.log(`1 ${pathArr}`);
  pathArr = pathArr.splice( 0, pathArr.length - 1 );
  console.log(`2 ${pathArr}`);
  basePath = pathArr.join('/') + '/sql/';
  console.log(basePath);

  let fileList = walkFile( basePath, 'sql' );
  return fileList;
}

module.exports = getSqlMap;
