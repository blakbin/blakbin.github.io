var blakInsertSidebarBlocks = function(t) {
    return function() {
        if (t("body#layout").length > 0)
            return !0;
        t("div.widget").each(function(e, o) {
            if (t(this).parent("#header").length)
                return t(this).hasClass("Header") || t(this).addClass("blak-header-widget"),
                !0;
            if (t(this).children(".blak-no-change").length)
                return !0;
            if ("Navbar1" == o.id)
                return !0;
            if ("Header1" == o.id)
                return !0;
            if ("Blog1" == o.id)
                return !0;
            if ("LinkList99" == o.id)
                return !0;
            if ("LinkList98" == o.id)
                return !0;
            if ("LinkList97" == o.id)
                return !0;
            if ("PageList98" == o.id)
                return !0;
            if ("PageList99" == o.id)
                return !0;
            if ("Text99" == o.id)
                return !0;
            if ("BlogArchive99" == o.id)
                return !0;
            var i = t(o);
            if ((i.hasClass("Gadget") || i.hasClass("Followers")) && browser.opera)
                return !0;
            var n = t("h2", i).text();
            t("h2", i).remove();
            var a = i.html();
            if (a.indexOf("googlesyndication.com") > -1)
                return !0;
            if (a.indexOf("statcounter.com/counter/counter_xhtml.js") > -1)
                return !0;
            if (a.indexOf("bravenet.com/counter/code.php") > -1)
                return !0;
            var s = '<div class="blak-block clearfix" id="blak-block-' + o.id + '">';
            a = '<div class="blak-blockcontent">' + a + "</div>",
            n && (a = '<div class="blak-blockheader">            <h3 class="t">' + n + "</h3>        </div>" + a),
            t(i).html(s + a + "</div>"),
            i.hasClass("Subscribe") && i.css({
                position: "relative",
                "z-index": "2"
            })
        })
    }
}(jQuery);
function cse_head() {
    !function(t, e, o, i) {
        "use strict";
        var n = "search_header--hidden"
          , a = t(".search_header");
        if (!a.length)
            return !0;
        var s, l, r, c, d = t(e), p = 0, f = 0, u = 0, m = 0, h = t(o), v = 0;
        d.on("scroll", (s = 250,
        l = function() {
            v = h.height(),
            p = d.height(),
            f = d.scrollTop(),
            m = u - f,
            f <= 0 ? a.addClass(n) : m > 0 && a.hasClass(n) ? a.removeClass(n) : m < 0 && (f + p >= v && a.hasClass(n) ? a.removeClass(n) : a.addClass(n)),
            u = f
        }
        ,
        function() {
            var t = this
              , e = arguments
              , o = +new Date;
            r && o < r + s ? (clearTimeout(c),
            c = setTimeout(function() {
                r = o,
                l.apply(t, e)
            }, s)) : (r = o,
            l.apply(t, e))
        }
        ))
    }(jQuery, window, document)
}
function going_up() {
    !function(t) {
        function e(e, o) {
            var i, n, a, s, l, r = this, c = 5e3, d = 96;
            function p() {
                s = setTimeout(function() {
                    r.btnElement.removeClass(r.revealClass),
                    r.btnElement.removeClass(r.revealClassDown)
                }, c)
            }
            r.btnClass = ".goup",
            r.revealClass = "reveal",
            r.revealClassDown = "reveal_down",
            r.btnElement = t(r.btnClass),
            r.initial = {
                revealElement: "head",
                revealPosition: "top",
                padding: 0,
                duration: 600,
                easing: "swing",
                onScrollEnd: !1
            },
            r.options = t.extend({}, r.initial, o),
            r.revealElement = t(r.options.revealElement),
            i = "bottom" !== r.options.revealPosition ? r.revealElement.offset().top : r.revealElement.offset().top + r.revealElement.height(),
            n = e.offsetTop + r.options.padding,
            t(document).scroll(function() {
                clearTimeout(s);
                var e = t(this).scrollTop();
                if (ScrollCurrent = t(document).scrollTop(),
                l = d - ScrollCurrent,
                i < t(document).scrollTop() ? l < 0 ? (r.btnElement.removeClass(r.revealClass),
                r.btnElement.addClass(r.revealClassDown),
                p()) : (r.btnElement.addClass(r.revealClass),
                r.btnElement.removeClass(r.revealClassDown),
                p()) : r.btnElement.removeClass(r.revealClass),
                e + t(window).height() > .99 * t(document).height())
                    return r.btnElement.removeClass(r.revealClass),
                    void r.btnElement.removeClass(r.revealClassDown);
                d = ScrollCurrent
            }),
            t("html").click(function() {
                clearTimeout(s),
                l < 0 ? 0 == d ? event.stopPropagation() : (r.btnElement.removeClass(r.revealClass),
                r.btnElement.addClass(r.revealClassDown),
                p()) : 0 == d ? event.stopPropagation() : (r.btnElement.addClass(r.revealClass),
                r.btnElement.removeClass(r.revealClassDown),
                p())
            }),
            r.btnElement.hover(function() {
                clearTimeout(s),
                r.btnElement.css("background-color", "#ec0b25")
            }, function() {
                p(),
                r.btnElement.css("background-color", "#ff811a")
            }),
            r.btnElement.click(function() {
                window.addEventListener("scroll", f, !0),
                r.btnElement.css("background-color", "#ec0b25");
                var e = !0;
                return l < 0 ? (t("html,body").animate({
                    scrollTop: t(window).scrollTop() + 550
                }, r.options.duration, r.options.easing, function() {
                    if (e) {
                        e = !1;
                        var t = r.options.onScrollEnd;
                        "function" == typeof t && t()
                    }
                }),
                !1) : (t("html, body").animate({
                    scrollTop: n
                }, r.options.duration, r.options.easing, function() {
                    if (e) {
                        e = !1;
                        var t = r.options.onScrollEnd;
                        "function" == typeof t && t()
                    }
                }),
                !1)
            });
            var f = function() {
                window.clearTimeout(a),
                a = setTimeout(function() {
                    "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? r.btnElement.css("background-color", "#ff811a") : window.clearTimeout(s),
                    window.removeEventListener("scroll", f, !0)
                }, 66)
            }
        }
        t.fn.BlakBinGoUp = function() {
            var t = arguments[0];
            this.length;
            return "object" != typeof t && void 0 !== t || (this[0].BlakBinGoUp = new e(this[0],t)),
            this
        }
    }(jQuery)
}
function blakbin_navi() {
    var t = document.querySelector(".blakbin-top-logo-row")
      , e = document.querySelector(".blakbin-nav-responsive")
      , o = !1;
    $("#hamburger_menu").click(function() {
        e.classList.add("blakbin-nav-responsive-open"),
        $(".blakbin-site-mask").css({
            display: "block",
            opacity: "0.5",
            transition: "opacity 200ms ease 0s"
        }),
        document.body.style.overflow = "hidden"
    }),
    $(".blakbin-site-mask, .blakbin-nav-responsive-back").click(function() {
        e.classList.remove("blakbin-nav-responsive-open"),
        $(".blakbin-site-mask").css({
            display: "none",
            opacity: "0",
            transition: "opacity 600ms ease 0s"
        }),
        document.body.style.overflow = ""
    }),
    $("#cse_button").click(function() {
        if (o)
            return t.classList.remove("blakbin-responsive-search-open"),
            void (o = !1);
        t.classList.add("blakbin-responsive-search-open"),
        $(".blakbin-search-field").focus(),
        o = !0
    })
}
jQuery(function() {
    blakInsertSidebarBlocks()
}),
function(t) {
    t.fn.plok = function(e) {
        var o, i, n, a, s, l;
        function r(e, o) {
            return !0 === e.initialized || !(t("body").width() < e.minWidth) && (function(e, o) {
                e.initialized = !0,
                0 === t("#blak-magic-bar-stylesheet-" + e.namespace).length && t("head").append(t('<style id="blak-magic-bar-stylesheet-' + e.namespace + '">.plok:after {content: ""; display: table; clear: both;}</style>'));
                o.each(function() {
                    var o = {};
                    if (o.flea = t(this),
                    o.options = e || {},
                    o.container = t(o.options.containerSelector),
                    0 == o.container.length && (o.container = o.flea.parent()),
                    o.flea.parents().css("-webkit-transform", "none"),
                    o.flea.css({
                        position: o.options.defaultPosition,
                        overflow: "visible",
                        "-webkit-box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "box-sizing": "border-box"
                    }),
                    o.tick = o.flea.find(".plok"),
                    0 == o.tick.length) {
                        var i = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                        o.flea.find("script").filter(function(t, e) {
                            return 0 === e.type.length || e.type.match(i)
                        }).remove(),
                        o.tick = t("<div>").addClass("plok").append(o.flea.children()),
                        o.flea.append(o.tick)
                    }
                    o.marginBottom = parseInt(o.flea.css("margin-bottom")),
                    o.paddingTop = parseInt(o.flea.css("padding-top")),
                    o.paddingBottom = parseInt(o.flea.css("padding-bottom"));
                    var n, a, s, l = o.tick.offset().top, r = o.tick.outerHeight();
                    function d() {
                        o.fixedScrollTop = 0,
                        o.flea.css({
                            "min-height": "1px"
                        }),
                        o.tick.css({
                            position: "static",
                            width: "",
                            transform: "none"
                        })
                    }
                    o.tick.css("padding-top", 1),
                    o.tick.css("padding-bottom", 1),
                    l -= o.tick.offset().top,
                    r = o.tick.outerHeight() - r - l,
                    0 == l ? (o.tick.css("padding-top", 0),
                    o.tickPaddingTop = 0) : o.tickPaddingTop = 1,
                    0 == r ? (o.tick.css("padding-bottom", 0),
                    o.tickPaddingBottom = 0) : o.tickPaddingBottom = 1,
                    o.previousScrollTop = null,
                    o.fixedScrollTop = 0,
                    d(),
                    o.onScroll = function(o) {
                        if (o.tick.is(":visible"))
                            if (t("body").width() < o.options.minWidth)
                                d();
                            else {
                                if (o.options.disableOnResponsiveLayouts) {
                                    var i = o.flea.outerWidth("none" == o.flea.css("float"));
                                    if (i + 50 > o.container.width())
                                        return void d()
                                }
                                var n, a, s = t(document).scrollTop(), l = "static";
                                if (s >= o.flea.offset().top + (o.paddingTop - o.options.additionalMarginTop)) {
                                    var r, p = o.paddingTop + e.additionalMarginTop, f = o.paddingBottom + o.marginBottom + e.additionalMarginBottom, u = o.flea.offset().top, m = o.flea.offset().top + (n = o.container,
                                    a = n.height(),
                                    n.children().each(function() {
                                        a = Math.max(a, t(this).height())
                                    }),
                                    a), h = 0 + e.additionalMarginTop, v = o.tick.outerHeight() + p + f < t(window).height();
                                    r = v ? h + o.tick.outerHeight() : t(window).height() - o.marginBottom - o.paddingBottom - e.additionalMarginBottom;
                                    var b = u - s + o.paddingTop
                                      , g = m - s - o.paddingBottom - o.marginBottom
                                      , k = o.tick.offset().top - s
                                      , w = o.previousScrollTop - s;
                                    "fixed" == o.tick.css("position") && "modern" == o.options.fleaBehavior && (k += w),
                                    "stick-to-top" == o.options.fleaBehavior && (k = e.additionalMarginTop),
                                    "stick-to-bottom" == o.options.fleaBehavior && (k = r - o.tick.outerHeight()),
                                    k = w > 0 ? Math.min(k, h) : Math.max(k, r - o.tick.outerHeight()),
                                    k = Math.max(k, b),
                                    k = Math.min(k, g - o.tick.outerHeight());
                                    var C = o.container.height() == o.tick.outerHeight();
                                    l = (C || k != h) && (C || k != r - o.tick.outerHeight()) ? s + k - o.flea.offset().top - o.paddingTop <= e.additionalMarginTop ? "static" : "absolute" : "fixed"
                                }
                                if ("fixed" == l) {
									document.getElementById("main").style.width = "calc(100% - 310px)";
                                    var T = t(document).scrollLeft();
                                    o.tick.css({
                                        position: "fixed",
                                        width: c(o.tick) + "px",
                                        transform: "translateY(" + k + "px)",
                                        left: o.flea.offset().left + parseInt(o.flea.css("padding-left")) - T + "px",
                                        top: "0px"
                                    })
                                } else if ("absolute" == l) {
                                    var y = {};
                                    "absolute" != o.tick.css("position") && (y.position = "absolute",
                                    y.transform = "translateY(" + (s + k - o.flea.offset().top - o.tickPaddingTop - o.tickPaddingBottom) + "px)",
                                    y.top = "0px"),
                                    y.width = c(o.tick) + "px",
                                    y.left = "",
                                    o.tick.css(y)
                                } else
                                    "static" == l && d();
                                "static" != l && 1 == o.options.updatefleaHeight && o.flea.css({
                                    "min-height": o.tick.outerHeight() + o.tick.offset().top - o.flea.offset().top + o.paddingBottom
                                }),
                                o.previousScrollTop = s
                            }
                    }
                    ,
                    o.onScroll(o),
                    t(document).on("scroll." + o.options.namespace, (n = o,
                    function() {
                        n.onScroll(n)
                    }
                    )),
                    t(window).on("resize." + o.options.namespace, (a = o,
                    function() {
                        a.tick.css({
                            position: "static"
                        }),
                        a.onScroll(a)
                    }
                    )),
                    "undefined" != typeof ResizeSensor && new ResizeSensor(o.tick[0],(s = o,
                    function() {
                        s.onScroll(s)
                    }
                    ))
                })
            }(e, o),
            !0)
        }
        function c(t) {
            var e;
            try {
                e = t[0].getBoundingClientRect().width
            } catch (t) {}
            return void 0 === e && (e = t.width()),
            e
        }
        return (e = t.extend({
            containerSelector: "",
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            updatefleaHeight: !0,
            minWidth: 0,
            disableOnResponsiveLayouts: !0,
            fleaBehavior: "modern",
            defaultPosition: "relative",
            namespace: "TSS"
        }, e)).additionalMarginTop = parseInt(e.additionalMarginTop) || 0,
        e.additionalMarginBottom = parseInt(e.additionalMarginBottom) || 0,
        r(o = e, i = this) || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),
        t(document).on("scroll." + o.namespace, (s = o,
        l = i,
        function(e) {
            var o = r(s, l);
            o && t(this).unbind(e)
        }
        )),
        t(window).on("resize." + o.namespace, (n = o,
        a = i,
        function(e) {
            var o = r(n, a);
            o && t(this).unbind(e)
        }
        ))),
        this
    }
}(jQuery);
