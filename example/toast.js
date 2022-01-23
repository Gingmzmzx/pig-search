/*
 * @版本：1.0
 * @最后编辑者：Gingmzmzx
 * @描述：自定义toast
 * @运行方式：必须使用 “脚本引擎运行”
 *           建议使用 “复制到应用根目录执行”
 * @注意：本实例经测试可以正常运行，如果你运行起来报错，请检查运行配置！
 */

//引入自定义toast模块
var toastAt = require("./toast.js");

//调用自定义toast函数，需注意：
// toastAt([toast内容], [x坐标], [y坐标], [是否同时log输出]);
// 类型      string      float    float          bool
toastAt("eeeee", 500, 300.5, 1);
