/**
 * Created by heqichang on 4/2/16.
 */

(function(global){

    var num_div_arr = [];

    var queueElement = document.getElementById("queue");
    var text = document.getElementById("number");
    var num_regex = /^\d+$/;

    function createNumDiv() {
        var content = text.value;
        var div = null;
        if (num_regex.test(content)) {
            var divContainer = document.createElement("div");
            var contentNode = document.createTextNode(content);
            divContainer.appendChild(contentNode);
            div = divContainer;
        }

        return div;
    }

    var unshift = function(event) {
        var div = createNumDiv();
        if (div) {
            num_div_arr.unshift(div);
            queueElement.insertBefore(div, queueElement.firstChild);
        }
    };

    var push = function(event) {
        var div = createNumDiv();
        if (div) {
            num_div_arr.push(div);
            queueElement.appendChild(div);
        }
    };

    var shift = function(event) {
        var node = num_div_arr.shift();
        if (node) {
            queueElement.removeChild(node);
        }

    };

    var pop = function(event) {
        var node = num_div_arr.pop();
        if (node) {
            queueElement.removeChild(node);
        }
    };

    document.getElementById("unshift").addEventListener("click", unshift);
    document.getElementById("push").addEventListener("click", push);
    document.getElementById("shift").addEventListener("click", shift);
    document.getElementById("pop").addEventListener("click", pop);

})(this);