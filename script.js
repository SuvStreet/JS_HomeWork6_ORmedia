
function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function clear() {
    document.form.textview.value = "";
}

function back() {
    let str = document.form.textview.value;
    document.form.textview.value = str.substring(0, str.length - 1);
}

function equal() {
    let result = document.form.textview.value;
    if (result){
        if(eval(result) !== 'infinity'){
            document.form.textview.value = eval(result);
        }
        else{
            document.form.textview.value = "Деление на ноль невозможно!";
        }
        
        //console.log(eval(result));
        
    }
}

document.addEventListener('click', (event) => {
    //console.log(event.target);
    if (event.target.classList.contains("item")) {
        //console.log(event.target.dataset.id);
        switch (event.target.dataset.id) {
            case "plus":
                insert("+");
                break;
            case "minus":
                insert("-");
                break;
            case "multiply":
                insert("*");
                break;
            case "share":
                insert("/");
                break;
            case "openParenthesis":
                insert("(");
                break;
            case "closedParenthesis":
                insert(")");
                break;
            case "dot":
                insert(".");
                break;
            case "zero":
                insert("0");
                break;
            case "one":
                insert("1");
                break;
            case "one":
                insert("1");
                break;
            case "two":
                insert("2");
                break;
            case "three":
                insert("3");
                break;
            case "four":
                insert("4");
                break;
            case "five":
                insert("5");
                break;
            case "six":
                insert("6");
                break;
            case "seven":
                insert("7");
                break;
            case "eight":
                insert("8");
                break;
            case "nine":
                insert("9");
                break;
            case "clear":
                clear();
                break;
            case "back":
                back();
                break;
            case "equal":
                equal();
                break;












        }
    }
})
