

// 顶部左边地区遍历
$(function () {
    toplftext.arrTop.forEach(function (ele, index) {
        var Odiv = $(".topleftclone2tpl").clone().removeClass("topleftclone2tpl")
        Odiv.find("h3").text(ele)
        toplftext[("arrTop" + index)].forEach(function (ele, index) {
            var Oli = Lichuang(ele);
            //  var Oli = $("<li><a href = #> " + ele + " </a></li> ");
            for (var i = 0; i < Oli.length; i++) {
                $(Oli[i]).on("click", function () {
                    $(".toplftextvalue").text($(this).find("a").text());
                    $(".topleftclone").css({ display: "none" })
                })
            }
            Odiv.find("ul").append(Oli)
        })
        $(".topleftclone").append(Odiv);
    })
    $(".topleftclone2").eq(2).find("ul").find("li").each(function (index, ele) {
        $(ele).addClass("guo  guo" + index + "")
    })
    toplftext.arrTop3.forEach(function (ele, index) {
        var Oli = Lichuang(ele);
        // var Oli = $("<li><a href = #> " + ele + " </a></li> ");
        for (var i = 0; i < Oli.length; i++) {
            $(Oli[i]).on("click", function () {
                $(".toplftextvalue").text($(this).find("a").text());
                $(".topleftclone").css({ display: "none" })
            })
        }
        $(".topleftclone1").find("ul").append(Oli)
    })
    $(".toplftext").on("mouseenter", function () {
        $(".topleftclone").css({ display: "block" })
    }).on("mouseleave", function () {
        $(".topleftclone").css({ display: "none" })
    })
    $(".topleftclone2tpl").remove();
}())


// 我的京东遍历

$(function () {
    for (var arr in toprgcontson3clone) {
        var Odiv = $('.toprgcontson3clonetlp').clone().removeClass("toprgcontson3clonetlp");
        for (var i = 0; i < arr; i++) {
            var xian = $("<div class = xian></div>");
            $(".toprgcontson3").append(xian);
        }
        toprgcontson3clone[arr].forEach(function (ele, index) {
            var Oli = Lichuang(ele);
            // var Oli = $("<li><a href = #> " + ele + " </a></li> ");
            Odiv.find("ul").append(Oli)
        })
        $(".toprgcontson3").append(Odiv);
    }
    $(".toprgcontson3clonetlp").remove()
}())


//企业购
$(function () {
    toprgcontson5.forEach(function (ele, index) {
        var Oli = Lichuang(ele);
        $(".toprgcontson5").find("ul").append(Oli)
    })
}())


//客户服务
$(function () {
    for (var arr in toprgcontson3clone) {
        var Odiv = $('.toprgcontson6clonetlp').clone().removeClass("toprgcontson6clonetlp");
        for (var i = 0; i < arr; i++) {
            var xian = $("<div class = xian></div>");
            $(".toprgcontson6").append(xian);
        }
        toprgcontson6clone[arr].forEach(function (ele, index) {
            var Oli = Lichuang(ele);
            // var Oli = $("<li><a href = #> " + ele + " </a></li> ");
            Odiv.find("ul").append(Oli)
        })
        $(".toprgcontson6").append(Odiv);
    }
    $(".toprgcontson6clonetlp").remove()
    toprgcontson6name.forEach(function (ele, index) {

        $($(".toprgcontson6clone")[index]).find("h3").text(ele)
    })
}())

//网站导航
$(function () {
    for (var arr in toprgcontson7clone) {
        var Odiv = $('.toprgcontson7clonetpl').clone().removeClass("toprgcontson7clonetpl");
        Odiv.find("h3").text(toprgcontson7clone[arr].Name);
        toprgcontson7clone[arr].text.forEach(function (ele, index) {
            var Oli = Lichuang(ele);
            Odiv.find("ul").append(Oli)
        })
        $(".toprgcontson7").append(Odiv);
    }
    $(".toprgcontson7clonetpl").remove()
}())


//手机京东
$(function () {
    for (var arr in toprgcontson8clone) {
        var Odiv = $('.toprgcontson8clonetpl').clone().removeClass("toprgcontson8clonetpl");
        Odiv.find(".son8tu").find("img").attr("src", toprgcontson8clone[arr].img);
        Odiv.find(".son8text").find(".son8texth").text(toprgcontson8clone[arr].text);
        Odiv.find(".son8text").find(".son8textjs").text(toprgcontson8clone[arr].hong);
        if (toprgcontson8clone[arr].app) {
            var sonOdiv = $("<div class = 'clearFix son8texticon' ></div");
            toprgcontson8clone[arr].app.forEach(function (ele, index) {
                var i = $("<i class = " + ele + "><a href=#></a>");
                sonOdiv.append(i);
            })
            Odiv.find(".son8text").append(sonOdiv)
        }
        $(".toprgcontson8").append(Odiv)
    }
    $(".toprgcontson8clonetpl").remove()
}())

// 顶部结束

//搜索框中间区域

// logo
$(".centerlf").on("mouseenter", function () {
    $(".logo").find("a").addClass("active")

}).on("mouseleave", function () {
    $(".logo").find("a").removeClass("active")
})

// 搜索框变化字

$(function () {
    var len = isInputtext.length;
    var i = 0;
    var timer = setInterval(function () {
        $(".isInput").find("input").attr("placeholder", isInputtext[i])
        i++;
        if (i >= len) {
            i = 0;
        }
    }, 5000)
}())

//搜索框下面的li
$(function () {
    centerinputbom.forEach(function (ele, index) {
        var Odiv = Lichuang(ele);
        $(".centerinputbom").find("ul").append(Odiv)
    })
}())

//秒杀优惠券
$(function () {
    centerbom.forEach(function (ele, index) {
        var Odiv = Lichuang(ele);
        $(".centerbom").find("ul").append(Odiv)
    })
})

// 中间左边切换
$(function () {
    for (var arr in contlfhover) {
        var contponent = contlfhover[arr].father;
        var Odiv = $(".contclonetpl").clone().removeClass("contclonetpl");
        contlfhover[arr].img.forEach(function (ele, index) {
            var aImg = $("<a href=$><img src=" + ele + " alt=></a>");
            Odiv.find(".contlfhover2lf").append(aImg)
        })
        contlfhover[arr].contlfhover1lftop.forEach(function (ele, index) {
            var A = $("<a  href= #>" + ele + "<span></span><i class='iconfont icon-xiangyou1'></i></a>");
            Odiv.find(".contlfhover1lf").find(".contlfhover1lftop").append(A);
        })
        for (var arr1 in contponent) {
            var Dl = $("<dl class = 'clearFix'><dt><a  class = 'clearFix'href=#><span class = 'lf'>" + contponent[arr1].Name + "</span><i class='iconfont icon-xiangyou1 rg'></i></a>");
            var A = $("<dd> </dd>");
            if (contponent[arr1].son) {
                contponent[arr1].son.forEach(function (ele, index) {
                    var AA = $("<a href = #>" + ele + "</a>");
                    A.append(AA)
                })
            }
            Dl.append(A);
            Odiv.find('.contlfhover1lf').find('.contlfhover1lfcont').append(Dl);
        }
        $(".contlfhover").append(Odiv);
    }

    $(".contclonetpl").remove()
}())


// 中间左边tabel
$(function () {
    var last = ""
    var frist = ""
    $(".contlf1").find("li").on("mouseenter", function () {
        last = frist;
        $(".contlfhover").find(".contlfhover1").eq(last).removeClass("active");
        $(".contlfhover").addClass("active");
        frist = $(this).attr("date")
        $(".contlfhover").find(".contlfhover1").eq(frist).addClass("active");
    })
    $(".cont").on("mouseleave", function () {
        $(".contlfhover").removeClass("active");
    })
})


// 轮播图 banner
$(function () {
    var len = 0;
   
    contcenterLun.forEach(function (ele, index) {
        var Span = $("<span></span");
        var aImg = $("<a href=#><img src =" + ele + " /></a>")
        $(".contcenterLunan").append(Span);
        $(".contcenterLun").append(aImg);
    })
    var len1 = $(".contcenterLun a").size();
    $(".contcenterLun a").eq(0).css({ zIndex: "2", opacity: "1" });
    $(".contcenterLunan span").eq(0).addClass("active")
    $(".contcenterLunan span").on("mouseenter", function () {
        $(".contcenterLun a").css({ zIndex: "1", opacity: "0" });
        var index = $(this).index();
        $(".contcenterLun a").eq(index).animate({ zIndex: "2", opacity: "1" }, "1000", "swing", function () {
            len = index;
            $(".contcenterLunan span").removeClass("active");
            $(".contcenterLunan span").eq(len).addClass("active");
        })
    })

    $(".contcenterlf").on("click", function () {
        len--;
        if (len < 0) {
            len = len1 - 1;
            $(".contcenterLun a").css({ zIndex: "1", opacity: "0" });
            $(".contcenterLun a").eq(len).animate({ zIndex: "2", opacity: "1" }, "1000", "swing", function () {
                $(".contcenterLunan span").removeClass("active");
                $(".contcenterLunan span").eq(len).addClass("active");

            });
        } else {
            $(".contcenterLun a").css({ zIndex: "1", opacity: "0" });
            $(".contcenterLun a").eq(len).animate({ zIndex: "2", opacity: "1" }, "1000", "swing", function () {
                $(".contcenterLunan span").removeClass("active");
                $(".contcenterLunan span").eq(len).addClass("active");

            });
        }
    })

    $(".contcenterrg").on("click", function () {
        len++;
        if (len > len1 - 1) {
            len = 0;
            $(".contcenterLun a").css({ zIndex: "1", opacity: "0" })
            $(".contcenterLun a").eq(len).animate({ zIndex: "2", opacity: "1" }, "1000", "swing", function () {
                $(".contcenterLunan span").removeClass("active");
                $(".contcenterLunan span").eq(len).addClass("active");

            })
        } else {
            $(".contcenterLun a").css({ zIndex: "1", opacity: "0" })
            $(".contcenterLun a").eq(len).animate({ zIndex: "2", opacity: "1" }, "1000", "swing", function () {
                $(".contcenterLunan span").removeClass("active");
                $(".contcenterLunan span").eq(len).addClass("active");

            })
        }
    })

    function statr() {
        var timer = setInterval(function () {
         
            len++;
            if (len > len1 - 1) {
                len = 0;
                $(".contcenterLun a").css({ zIndex: "1", opacity: "0" })
                $(".contcenterLun a").eq(len).animate({ zIndex: "2", opacity: "1" }, "1000", "swing", function () {
                    $(".contcenterLunan span").removeClass("active");
                    $(".contcenterLunan span").eq(len).addClass("active");

                })
            } else {
                $(".contcenterLun a").css({ zIndex: "1", opacity: "0" })
                $(".contcenterLun a").eq(len).animate({ zIndex: "2", opacity: "1" }, "1000", "swing", function () {
                    $(".contcenterLunan span").removeClass("active");
                    $(".contcenterLunan span").eq(len).addClass("active");

                })
            }

        }, 3000)
       
        function stop() {
            clearInterval(timer)
        }
        $(".contcenterLun").on("mouseenter", function () {
            stop()
        })
    }
    statr()
    $(".contcenterLun").on("mouseleave", function () {
        statr()
    })
}())

// 小banner

$(function () {
    var len = Math.floor($(contcenter1).size() / 3);
    var ii = 0;
    for (var i = 0; i < len; i++) {
        var Odiv = $(".contcenter1tpl").clone().removeClass("contcenter1tpl");
        $(".contcenter1").append(Odiv);
    }
    $(".contcenter1tpl").remove()
    contcenter1.forEach(function (ele, index) {
        var odiv = $("<a class='position' href=# ><img src = " + ele + "></a>");
        $(".contcenter1img").eq(index).append(odiv);
    })
    $(".xiaobanner").eq(0).css({ opacity: "1", zIndex: "2" })
    $(".contcenter1").on("mouseenter", function () {
        $(".contcenter1lf").add(".contcenter1rg").animate({ opacity: 1 }, "1000", "swing");
    }).on("mouseleave", function () {
        $(".contcenter1lf").add(".contcenter1rg").animate({ opacity: 0 }, "1000", "swing");
    })
    $(".contcenter1lf").on("click", function () {
        ii--;
        $(".xiaobanner").css({ zIndex: 1, opacity: 0 })
        if (ii < 0) {
            ii = len - 1;
            $(".xiaobanner").eq(ii).animate({ opacity: "1", zIndex: "2" }, "1000", "swing")
        } else {
            $(".xiaobanner").eq(ii).animate({ opacity: "1", zIndex: "2" }, "1000", "swing")
        }
    })
    $(".contcenter1rg").on("click", function () {
        ii++;
        $(".xiaobanner").css({ zIndex: 1, opacity: 0 })
        if (ii > len - 1) {
            ii = 0
            $(".xiaobanner").eq(ii).animate({ opacity: "1", zIndex: "2" }, "1000", "swing")
        } else {
            $(".xiaobanner").eq(ii).animate({ opacity: "1", zIndex: "2" }, "1000", "swing")
        }
    })
}())

// Viphover
$(function () {
    $(".Vip .lf").on("mouseenter", function () {
      
        $(this).find("a").css({ backgroundColor: "#bb160d" })
    }).on("mouseleave", function () {
        $(this).find("a").css({ backgroundColor: "#e1251b" })
    })
    $(".Vip .rg").on("mouseenter", function () {
      
        $(this).find("a").css({ backgroundColor: "#bb160d", color: "#fff" })
    }).on("mouseleave", function () {
        $(this).find("a").css({ background: " #363634", color: "#e5d790" })
    })
}())


//京东快报
$(function () {
    for (var arr in jdkb) {
        var Odiv = $("<div class = 'clearFix newspaper'> <h4 class = 'lf'> " + jdkb[arr].new + "</h4><p class='rg'><a href = #>" + jdkb[arr].text + "</a></p>");
        $(".jdkb").append(Odiv);
    }
    // $(".jdkb").append(Odiv);
    $(".newspapertpl").remove()
}())


//工具
$(function () {
  
        $(".animate1").on("mouseenter",debounce(function () {
            $(".gongjus").animate({ marginTop: "-36px" }, "500", "swing");
            var len = $(this).index();
            $(".donghua1").removeClass("active");
            $(".donghua1").eq(len - 1).addClass("active");
            $(".animate1").find("span").removeClass("active");
            $(this).find("span").addClass("active");
            $(".huafeiandjipiaoandjiudian").animate({ top: "-175px" }, "500", "swing");
           
        },100))
       
       
      
    
    $(".huafeiliuliang a").on("mouseenter", function () {
        var len = $(this).index();
        $(".huafeiliuliang a").removeClass("active");
        $(this).addClass("active");
        $(".huafeidonghua").removeClass("active")
        $(".huafeidonghua").eq(len).addClass("active")
    })
    $(".jipiaotop1").find("a").on("mouseenter", function () {
        var len = $(this).index();
        var chang = $(".jipiaotab1").width();
        $(".jipiaotop1 a").removeClass("active");
        $(this).addClass("active");
        $(".jipiaotab").animate({ marginLeft: -chang * len + "px" }, "100", "swing");
    })
    $(".jiudianboxtop a").on("mouseenter", function () {
        var len = $(this).index();
        var chang = $(".jiudiandong").width();
        $(".jiudianboxtop a").removeClass("active");
        $(this).addClass("active");
        $(".jiudianboxtab").animate({ marginLeft: -chang * len + "px" }, "100", "swing");
    })
   

    $(".gongju4").on("mouseenter",function(){
            $(".gongju1").animate({ marginTop: "-37px" });
            $(this).animate({ marginTop: "-58px" }, "500", "swing");
            $(".gongjus").animate({ marginTop: "-36px" }, "500", "swing");
            $(".huafeiandjipiaoandjiudian").animate({ top: "-175px" }, "500", "swing");
    })
   

    $(".animate2").on("mouseenter", debounce(function () {
        $(".donghua1").eq(0).removeClass("active");
        var len = $(this).index();
        $(".donghua2").removeClass("active");
        $(".animate2").find("span").removeClass("active");
        $(this).find("span").addClass("active");
        $(".donghua2").eq(len - 1).addClass("active");
       
    },100))
    $(".gameboxtop a").on("mouseenter", function () {
        var len = $(this).index();
        var chang = $(".gameboxtab1").width();
        $(".gameboxtop a").removeClass("active");
        $(this).addClass("active");
        $(".gameboxtab").animate({ marginLeft: -chang * len + "px" }, "100", "swing")
    })
    $(".stop").on("click", function () {
        $(".huafeiandjipiaoandjiudian").animate({ top: "0px" }, "500", "swing");
        $(".donghua1").removeClass("active")
        $(".donghua2").removeClass("active")
        $(".animate1").find("span").removeClass("active")
        $(".animate2").find("span").removeClass("active")
        $(".gongju4").animate({ marginTop: "0px" });
        $(".gongju1").animate({ marginTop: "0px" });
        $(".gongjus").animate({ marginTop: "0px" }, "500", "swing");
        $(".huafeiandjipiaoandjiudian").animate({ top: "0px" }, "500", "swing");
        $(this).animate({ marginTop: "0px" });
        $(".gamebox").removeClass("active");
    })
}())


// 秒杀倒计时
$(function () {
    var miao = 0;
    var fen = 60;
    var shi = 23;
    var timer = setInterval(function () {
        miao--;
        if (miao < 0) {
            fen--;
            miao = 60;
        }
        if (fen < 0) {
            shi--;
            fen = 60;
        }
        if (shi < 0) {
            alert("秒杀结束")
        }
        $(".miao").text(miao);
        $(".fen").text(fen)
        $(".shi").text(shi)
    }, 1000)
}())


//尾部轮播
$(function () {


    var len1 = 0;
    var chang = $(".footboxlf1tab").width();
    footboxlf1tabclone.forEach(function (ele, index) {
        var Oa = $(".footboxlf1tabclonetpl").clone().removeClass("footboxlf1tabclonetpl");
        Oa.find(".footboxlf1img1").css({ backgroundImage: ele.backgroundImage });
        Oa.find(".title").text(ele.title);
        Oa.find(".titlemoney").text(ele.money)
        $(".footboxlf1tabclone").append(Oa);


    })
    $(".footboxlf1tabclonetpl").remove()
    var len = Math.floor($(".footboxlf1tabclone").find("a").size() / 4);
    $(".footboxlf1anlf").on("click", function () {
        len1--;

        if (len1 < 0) {
            len1 = len - 1;

            $(".footboxlf1tab").animate({ marginLeft: -chang * len1 + "px" }, "500", "swing")
        } else {

            $(".footboxlf1tab").animate({ marginLeft: -chang * len1 + "px" }, "500", "swing")
        }
    })
    $(".footboxlf1anrg").on("click", function () {
        len1++;
        if (len1 > len - 1) {
            len1 = 0;

            $(".footboxlf1tab").animate({ marginLeft: -chang * len1 + "px" }, "500", "swing")
        } else {
            $(".footboxlf1tab").animate({ marginLeft: -chang * len1 + "px" }, "500", "swing")
        }
    })
})
