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
        case "nodes":
            str = "节点";
            break;
        case "about":
            str = "关于";
            break;
        case "topic":
            str = "主题";
            break;
    }
    return str;
}
