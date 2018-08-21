window.onload = function () {
    myClick("btn01", function () {
        var li = document.createElement("li");
        var gzText = document.createTextNode("广州");
        li.appendChild(gzText);
        var city = document.getElementById("city");
        city.appendChild(li);
    });
    myClick("btn02", function () {
        var li = document.createElement("li");
        var gzText = document.createTextNode("广州");
        li.appendChild(gzText);
        var bj = document.getElementById("bj");
        var city = document.getElementById("city");
        city.insertBefore(li, bj);
        
    });
    myClick("btn03", function () {
        var li = document.createElement("li");
        var gzText = document.createTextNode("广州");
        li.appendChild(gzText);
        var bj = document.getElementById("bj");
        var city = document.getElementById("city");
        if (!bj) {
            alert("没有北京");
        } else {
            city.replaceChild(li, bj);
        }
    });
    myClick("btn04", function () {
        var bj = document.getElementById("bj");
        //var city=document.getElementById("city");
        if (!bj) {
            alert("没有北京")
        } else {
            bj.parentNode.removeChild(bj);
        }
    });
    myClick("btn05", function () {
        var city = document.getElementById("city");
        alert(city.innerHTML);
    });
    myClick("btn06", function () {
        var bj = document.getElementById("bj");
        if (!bj) {
            alert("没有北京");
        } else {
            bj.innerHTML = "成都";
        }
        
    });
    myClick("btn07", function () {
        var city = document.getElementById("city");
        var li = document.createElement("li");
        li.innerHTML = "广州";
        city.appendChild(li);
    });
};

function myClick (idStr, fun) {
    var btn = document.getElementById(idStr);
    btn.onclick = fun;
}