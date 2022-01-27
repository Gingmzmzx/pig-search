/*
 * @版本：1.1
 * @最后编辑者：Gingmzmzx
 * @描述：ocr使用百度免费的安卓app-easyedge
 * @运行方式：必须使用 “脚本引擎运行”
 *           建议使用 “复制到应用根目录执行”
 * @猪比版本：1.2.3以上
 * @注意：本实例经测试可以正常运行，如果你运行起来报错，请检查运行配置！
 */

// 引入easyedge模块
let easyedge = require("./easyedge");

// 请修改你的图片路径
let imgPath = "/sdcard/脚本/demo/new.jpg";

// 读取图片生成图片对象
var imgFile = images.read(imgPath);

// 调用easyedge进行OCR
// 请注意easyedge的使用，参数只有一个是转base64后的图片
let obj = easyedge.ocr(images.toBase64(imgFile));

// 输出ocr结果
log(obj);

// 千万不要忘记销毁模型
easyedge.destroy();
