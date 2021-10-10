var top_left = "0px";
var top_right = "0px";
var bottom_left = "0px";
var bottom_right = "0px";

function topLeft(val) {
    top_left = val + "px"
    implements(top_left, top_right, bottom_left, bottom_right)
}

function topRight(val) {
    top_right = val + "px"
    implements(top_left, top_right, bottom_left, bottom_right)
}

function bottomLeft(val){
    bottom_left = val + "px"
    implements(top_left, top_right, bottom_left, bottom_right)
}

function bottomRight(val){
    bottom_right = val + "px"
    implements(top_left, top_right, bottom_left, bottom_right)
}

function implements(x, y, z, a) {
    document.getElementById("div-shape").style.borderRadius = x + " " + y + " " + z + " " + a +" "
}

function copiar() {
    WebKit = document.getElementById("inp-WebKit").checked
    Gecko = document.getElementById("inp-Gecko").checked
    Css3 = document.getElementById("inp-CSS3").checked
    
    if(WebKit){
        if (Gecko) {
            if (Css3) {
                navigator.clipboard.writeText(copiarWebKit()+copiarGecko()+copiarCSS3());
            } else {
                navigator.clipboard.writeText(copiarWebKit()+copiarGecko());
            }
        } else{
            if (Css3) {
                navigator.clipboard.writeText(copiarWebKit()+copiarCSS3());
            } else {
                navigator.clipboard.writeText(copiarWebKit());
            }
        }
    } else {
        if (Gecko) {
            if (Css3) {
                navigator.clipboard.writeText(copiarGecko()+copiarCSS3());
            } else {
                navigator.clipboard.writeText(copiarGecko());
            }
        } else{
            if (Css3) {
                navigator.clipboard.writeText(copiarCSS3());
            } else {
                navigator.clipboard.writeText();
            }
        }
    }
}

function copiarCSS3() {
    return `border-top-left-radius: ${top_left};\nborder-top-right-radius: ${top_right};\nborder-bottom-right-radius: ${bottom_left};\nborder-bottom-left-radius: ${bottom_right};\n`
}

function copiarWebKit() {
    return `-webkit-border-top-left-radius: ${top_left};\n-webkit-border-top-right-radius: ${top_right};\n-webkit-border-bottom-right-radius: ${bottom_left};\n-webkit-border-bottom-left-radius: ${bottom_right};\n`
}

function copiarGecko() {
    return `-moz-border-radius-topleft: ${top_left};\n-moz-border-radius-topright: ${top_right};\n-moz-border-radius-bottomright: ${bottom_left};\n-moz-border-radius-bottomleft: ${bottom_right};\n`
}