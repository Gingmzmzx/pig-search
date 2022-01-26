/*
 * @版本：1.0
 * @最后编辑者：Gingmzmzx
 * @描述：自定义floating
 * @运行方式：必须使用 “脚本引擎运行”
 *           建议使用 “复制到应用根目录执行”
 * @猪比版本：1.2.2以上
 * @注意：本实例还没有经过测试，如有报错，请联系最后编辑者！
 */

// 引入floating模块
let floating = require("./Floating.js");

// 显示悬浮窗
floating.floating();

// 设置浮窗内容为 A
floating.edit("A");

// 等待三秒
sleep(3000);

// 修改浮窗内容为 B
floating.edit("B");
