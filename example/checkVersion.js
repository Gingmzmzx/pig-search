/*
 * @版本：1.0
 * @最后编辑者：Gingmzmzx
 * @描述：检查版本号
 * @运行方式：必须使用 “脚本引擎运行”
 *           建议使用 “复制到应用根目录执行”
 */

// 引入checkVersion模块
let checkVersion = require("./checkVersion.js");

// 检查2.0.5版本是否符合要求
log(checkVersion("2.0.5"));

// 检查2.0.1版本是否符合要求
log(checkVersion("2.0.1"));