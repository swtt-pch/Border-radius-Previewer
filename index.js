var top_left = "0px";
var top_right = "0px";
var bottom_left = "0px";
var bottom_right = "0px";
var extra_top_left = "0px";
var extra_top_right = "0px";
var extra_bottom_left = "0px";
var extra_bottom_right = "0px";

function topLeft(val) {
    if (document.getElementById("inp-top-left").value.length == 0 || document.getElementById("inp-top-left").value == 0) {
        document.getElementById("inp-extra-top-left").style.display="none"
        document.getElementById("inp-extra-top-left").value = 0
        top_left = "0px"
        implements(top_left, top_right, bottom_right, bottom_left)
    } else {
        document.getElementById("inp-extra-top-left").style.display="block"
        top_left = val + "px"
        if (document.getElementById("inp-extra-top-left").value.length == 0 || document.getElementById("inp-extra-top-left").value == 0) {
            implements(top_left, top_right, bottom_right, bottom_left)
        } else {
            document.getElementById("div-shape").style.borderTopLeftRadius = top_left + " "+ extra_top_left
        }
    }
}

function  extraTopLeft(val) {
    if (document.getElementById("inp-extra-top-left").value.length == 0 || document.getElementById("inp-extra-top-left").value == 0) {
        implements(top_left, top_right, bottom_right, bottom_left)
        document.getElementById("inp-extra-top-left").value = 0
    } else {
        extra_top_left = val + "px"
        document.getElementById("div-shape").style.borderTopLeftRadius = top_left + " "+ extra_top_left
    }
}

function topRight(val) {
    if (document.getElementById("inp-top-right").value.length == 0 || document.getElementById("inp-top-right").value == 0) {
        document.getElementById("inp-extra-top-right").style.display="none"
        document.getElementById("inp-extra-top-right").value = 0
        top_right = "0px"
        implements(top_left, top_right, bottom_right, bottom_left)
    } else {
        document.getElementById("inp-extra-top-right").style.display="block"
        top_right = val + "px"
        if (document.getElementById("inp-extra-top-right").value.length == 0 || document.getElementById("inp-extra-top-right").value == 0) {
            implements(top_left, top_right, bottom_right, bottom_left)
        } else {
            document.getElementById("div-shape").style.borderTopRightRadius = top_right + " "+ extra_top_right  
        }
    }
}

function  extraTopRight(val) {
    if (document.getElementById("inp-extra-top-right").value.length == 0 || document.getElementById("inp-extra-top-right").value == 0) {
        implements(top_left, top_right, bottom_right, bottom_left)
        document.getElementById("inp-extra-top-right").value = 0
    } else {
        extra_top_right = val + "px"
        document.getElementById("div-shape").style.borderTopRightRadius = top_right + " "+ extra_top_right  
    }
}

function bottomLeft(val){
    if (document.getElementById("inp-bottom-left").value.length == 0 || document.getElementById("inp-bottom-left").value == 0) {
        document.getElementById("inp-extra-bottom-left").style.display="none"
        document.getElementById("inp-extra-bottom-left").value = 0
        bottom_left = "0px"
        implements(top_left, top_right, bottom_right, bottom_left)
    } else {
        document.getElementById("inp-extra-bottom-left").style.display="block"
        bottom_left = val + "px"
        if (document.getElementById("inp-extra-bottom-left").value.length == 0 || document.getElementById("inp-extra-bottom-left").value == 0) {
            implements(top_left, top_right, bottom_right, bottom_left)
        } else {
            document.getElementById("div-shape").style.borderBottomLeftRadius = bottom_left + " "+ extra_bottom_left
        }
        
    }
}

function extraBottomLeft(val) {
    if (document.getElementById("inp-extra-bottom-left").value.length == 0 || document.getElementById("inp-extra-bottom-left").value == 0) {
        implements(top_left, top_right, bottom_right, bottom_left)
        document.getElementById("inp-extra-bottom-left").value = 0
    } else {
        extra_bottom_left = val + "px"
        document.getElementById("div-shape").style.borderBottomLeftRadius = bottom_left + " "+ extra_bottom_left
    }
}

function bottomRight(val){
    if (document.getElementById("inp-bottom-right").value.length == 0 || document.getElementById("inp-bottom-right").value == 0) {
        document.getElementById("inp-extra-bottom-right").style.display="none"
        document.getElementById("inp-extra-bottom-right").value = 0
        bottom_right = "0px"
        implements(top_left, top_right, bottom_right, bottom_left)
    } else {
        document.getElementById("inp-extra-bottom-right").style.display="block"
        bottom_right = val + "px"
        if (document.getElementById("inp-extra-bottom-right").value.length == 0 || document.getElementById("inp-extra-bottom-right").value == 0) {
            implements(top_left, top_right, bottom_right, bottom_left)
        } else {
            document.getElementById("div-shape").style.borderBottomRightRadius = bottom_right + " "+ extra_bottom_right 
        }
        
    }
}

function extraBottomRight(val) {
    if (document.getElementById("inp-extra-bottom-right").value.length == 0 || document.getElementById("inp-extra-bottom-right").value == 0) {
        implements(top_left, top_right, bottom_right, bottom_left)
        document.getElementById("inp-extra-bottom-right").value = 0
    } else {
        extra_bottom_right = val + "px"
        document.getElementById("div-shape").style.borderBottomRightRadius = bottom_right + " "+ extra_bottom_right  
    }
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
            } 
        }
    }
}

function copiarCSS3() {
    var cssText = ""
    if (document.getElementById("inp-extra-top-right").value.length == 0 || document.getElementById("inp-extra-top-right").value == 0) {
        cssText += `border-top-right-radius: ${top_right};\n`
    } else {
        cssText += `border-top-right-radius: ${top_right} ${extra_top_right};\n`
    }
    if (document.getElementById("inp-extra-bottom-right").value.length == 0 || document.getElementById("inp-extra-bottom-right").value == 0) {
        cssText += `border-bottom-right-radius: ${bottom_right};\n`
    } else {
        cssText += `border-bottom-right-radius: ${extra_bottom_right} ${bottom_right};\n`
    }
    if (document.getElementById("inp-extra-top-left").value.length == 0 || document.getElementById("inp-extra-top-left").value == 0) {
        cssText += `border-top-left-radius: ${top_left};\n`
    } else {
        cssText += `border-top-left-radius: ${top_left} ${extra_top_left};\n`
    }
    if (document.getElementById("inp-extra-bottom-left").value.length == 0 || document.getElementById("inp-extra-bottom-left").value == 0) {
        cssText += `border-bottom-left-radius: ${bottom_left};\n`
    } else {
        cssText += `border-bottom-left-radius: ${bottom_left} ${extra_bottom_left};\n`
    }
    return cssText
}

function copiarWebKit() {
    var webkitText = ""
    if (document.getElementById("inp-extra-top-right").value.length == 0 || document.getElementById("inp-extra-top-right").value == 0) {
        webkitText += `-webkit-border-top-right-radius: ${top_right};\n`
    } else {
        webkitText += `-webkit-border-top-right-radius: ${top_right} ${extra_top_right};\n`
    }
    if (document.getElementById("inp-extra-bottom-right").value.length == 0 || document.getElementById("inp-extra-bottom-right").value == 0) {
        webkitText += `-webkit-border-bottom-right-radius: ${bottom_right};\n`
    } else {
        webkitText += `-webkit-border-bottom-right-radius: ${extra_bottom_right} ${bottom_right};\n`
    }
    if (document.getElementById("inp-extra-top-left").value.length == 0 || document.getElementById("inp-extra-top-left").value == 0) {
        webkitText += `-webkit-border-top-left-radius: ${top_left};\n`
    } else {
        webkitText += `-webkit-border-top-left-radius: ${top_left} ${extra_top_left};\n`
    }
    if (document.getElementById("inp-extra-bottom-left").value.length == 0 || document.getElementById("inp-extra-bottom-left").value == 0) {
        webkitText += `-webkit-border-bottom-left-radius: ${bottom_left};\n`
    } else {
        webkitText += `-webkit-border-bottom-left-radius: ${bottom_left} ${extra_bottom_left};\n`
    }
    return webkitText
}

function copiarGecko() {

    var geckoText = ""
    if (document.getElementById("inp-extra-top-right").value.length == 0 || document.getElementById("inp-extra-top-right").value == 0) {
        geckoText += `-moz-border-radius-topright: ${top_right};\n`
    } else {
        geckoText += `-moz-border-radius-topright: ${top_right} ${extra_top_right};\n`
    }
    if (document.getElementById("inp-extra-bottom-right").value.length == 0 || document.getElementById("inp-extra-bottom-right").value == 0) {
        geckoText += `-moz-border-radius-bottomright: ${bottom_right};\n`
    } else {
        geckoText += `-moz-border-radius-bottomright: ${extra_bottom_right} ${bottom_right};\n`
    }
    if (document.getElementById("inp-extra-top-left").value.length == 0 || document.getElementById("inp-extra-top-left").value == 0) {
        geckoText += `-moz-border-radius-topleft: ${top_left};\n`
    } else {
        geckoText += `-moz-border-radius-topleft: ${top_left} ${extra_top_left};\n`
    }
    if (document.getElementById("inp-extra-bottom-left").value.length == 0 || document.getElementById("inp-extra-bottom-left").value == 0) {
        geckoText += `-moz-border-radius-bottomleft: ${bottom_left};\n`
    } else {
        geckoText += `-moz-border-radius-bottomleft: ${bottom_left} ${extra_bottom_left};\n`
    }
    return geckoText

   
}