            function newElement() {
                if (checkUserName() && checkNumber() && checkPassword()) {
                    alert("修改成功");
                }
                else {
                    alert("格式错误");
                }
            }
        function checkUserName() {
            var name = document.getElementById("name").value;
                var nameRegex = /^[^@#]{3,16}$/;
            if (nameRegex.test(name)) {
                console.log(name);
                    return true;
                } else {

                    return false;
                }
            }
            function checkPassword() {
                var password = document.getElementById("secret").value;
                //var password=$("#password").value;

                //密码长度在8个字符到16个字符，由字母、数字和".""-""_""@""#""$"组成
                //var passwordRegex=/^[0-9A-Za-z.\-\_\@\#\$]{8,16}$/;
                //密码长度在8个字符到16个字符，由字母、数字和"_"组成
                var passwordRegex = /(?=^.{9,15}$)(?=([0-9a-zA-Z#&\*\?@]*?\d){2})(?=[0-9a-zA-Z#&\*\?@]*?[a-z])(?=([0-9a-zA-Z#&\*\?@]*?[A-Z]))(?=([0-9a-zA-Z#&\*\?@]*?[#&\*\?@]){1})(^[a-zA-Z0-9]*[#&\*\?@][a-zA-Z0-9]*$)([0-9a-zA-Z#&\*\?@]*)$/;
                if (passwordRegex.test(password)) {
                    console.log(password);
                    return true;
                } else {

                    return false;
                }

            }

            function checkNumber() {
                var num = document.getElementById("number").value;

                var numv = /(13[^4]\d{8})|(134[^9]\d{7})|(14[78]\d{8})|(17[6789]\d{8})|(18\d{9})|(14[78]\d{8})|(15[^4]\d{8})/g;
                if (num.match(numv)==num) {
                    console.log(num);
                    return true;
                } else {

                    return false;
                }
            }    