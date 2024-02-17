function convert() {
    // 获取用户输入值和选择的进制
    var number = document.getElementById("numberInput").value;
    var baseInput = parseInt(document.getElementById("baseInput").value);
    var baseOutput = parseInt(document.getElementById("baseOutput").value);

    // 检查输入是否为空
    if (number === "") {
        alert("请输入一个数字");
        return;
    }

    // 将输入值从原始进制转换为十进制
    var decimal = parseInt(number, baseInput);
    if (isNaN(decimal)) {
        alert("无效的输入，请确保数字与选定的进制匹配。");
        return;
    }

    // 将十进制数转换为目标进制
    var result = decimal.toString(baseOutput).toUpperCase();

    // 显示转换结果
    document.getElementById("result").innerText = "结果: " + result;
}
