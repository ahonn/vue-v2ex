/** 获取title文字
 *  @param {string} tab Tab分类
 */
exports.getTitleStr = tab => {
    let str = "";
    switch (tab) {
        case "latest":
            str = "全部";
            break;
        case "hot":
            str = "最热";
            break;
    }
    return str;
}
