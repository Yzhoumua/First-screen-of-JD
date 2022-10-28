//创建li
function Lichuang(index) {
    var oli = $("<li><a href = #> " + index + " </a></li> ");
    return oli;
}
var toplftext = {
    arrTop3: ["北京", "上海", "天津", "重庆", "河北", "山西", "河南", "辽宁", "吉林", "黑龙江", "内蒙古", "江苏", "山东", "安徽", "浙江", "福建", "湖北", "湖南", "广东", "广西", "江西", "四川", "海南", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "港澳", "台湾", "钓鱼岛", "海外"],
    arrTop: ["地区版本专享", "Available Sites"],
    arrTop0: ["中國港澳", "中國台灣", "京东全球"],
    arrTop1: ["Global Site", "Сайт России", "Situs Indonesia", "Sitio de España", "เว็บไซต์ประเทศไทย"]
}

var toprgcontson3clone = {
    0: ["待处理订单", "我的问答", "反修退换货", "我的关注", "降价商品"],
    1: ["我的京豆", "我的优惠券", "我的白条", "我的理财"]
}

var toprgcontson5 = [
    "企业购", "公共频道", "工业品", "商用场景馆", "礼品卡", "微信企业购", "工品优选", "京东锦礼", "大中型客户采购"
]

var toprgcontson6name = [
    "客户", "商家"
]
var toprgcontson6clone = {
    0: ["帮助中心", "售后服务", "在线客服", "意见建议", "电话客服", "客服邮箱", "金融咨询", "全球售客服", "企业客服"],
    1: ["合作招商", "成长中心", "商家后台", "京麦工作台", "商家帮助", "规则平台"]
}

var toprgcontson7clone = {
    tesezhuti: {
        Name: "特色服务",
        text: [
            "新品首发", "京东金融", "全球售", "国际站", "京东会员", "台湾售", "俄语站", "装机大师", "港澳售", "优惠券",
            "秒杀", "闪购", "印尼站", "陪伴计划", "出海招商", "拍拍二手", "买什么"
        ]
    },
    hangyepingdao: {
        Name: "行业频道",
        text: [
            "手机", "智能数码", "电脑办公", "家用电器", "京东小家", "京东服饰", "京东生鲜", "家装城", "母婴", "食品",
            "农资频道", "整车", "图书", "劳动防护"
        ]
    },
    shenghuofuwu: {
        Name: "生活服务",
        text: [
            "白条", "京东众筹", "京东金融App", "京东小金库", "理财", "话费", "水电煤", "彩票", "旅行", "机票酒店",
            "电影票", "京东到家", "游戏", "拍拍回收"
        ]
    },
    gengduojingxuan: {
        Name: "更多精选",
        text: [
            "合作招商", "京东通信", "京东E卡", "企业采购", "服务市场", "办公生活馆", "校园加盟", "京东社区", "装机大师", "知识产权维权",
            "关于我们", "京东安联保险", "京东数科保险"
        ]
    }
}

var toprgcontson8clone = {
    shoujijingdong: {
        img: "./src/images/headertop/son8tu0.webp",
        text: "手机京东",
        hong: "新人专享大礼包",
        app:
            ["iphone", "android", "ipad"]

    },
    guanzhujingdong: {
        img: "./src/images/headertop/son8tu1.webp",
        text: "关注京东",
        nohong: "JD.COM",
        hong: "抢五元红包"
    },
    jingdongjinrong: {
        img: "./src/images/headertop/son8tu2.webp",
        text: "京东金融客户端",
        hong: "新人专享大礼包",
        app:
            ["iphone", "android",]

    },
    jingdongjiankang: {
        img: "./src/images/headertop/son8tu3.webp",
        text: "京东健康客户端",
        app:
            ["iphone", "android",]

    },
    jingdongxiao: {
        img: "./src/images/headertop/son8tu4.webp",
        text: "关注京东小程序",
        hong: "新人0.1元购"
    },
}


var isInputtext = [
    "罗技鼠标", "电脑", "衣服", "键盘", "周年庆", "秒杀活动", "优惠券"
]


var centerinputbom = [
    "防护清单", "0元试用", "moto手机", "配件节", "大额补贴", "88bra节", "京东京造"
]

var centerbom = [
    "秒杀", "优惠券", "PlUS会员", "品牌闪购", "拍卖", "京东家电", "京东超市", "京东生鲜 ", "进口好物 ", "京东云"
]


var contlfhover = {
    0 : {
        contlfhover1lftop: ["家电馆", "开店设备一站购"],
        father: {
            0 : {
                Name: "电视",
                son: [
                    "全面屏电视", "教育电视", "OLED电视", "智慧屏","4K超清电视","55英寸","65英寸","电视配件"
                ]
            },
            1 : {
                Name: "空调",
                son: [
                    "新风空调", "以旧换新", "空调挂机", "空调柜机","空调套装","新一级能效","挂机1.5匹","柜机3匹","变频空调","中央空调","移动空调"
                ]
            },
            2 : {
                Name: "洗衣机",
                son: [
                    "滚筒洗衣机", "洗烘一体机", "波轮洗衣机", "洗烘套装","迷你洗衣机","洗衣机配件","烘干机"
                ]
            },
            3: {
                Name: "冰箱",
                son: [
                    "多门", "对开门", "三门", "双门","冰洗套装","冷柜/冰吧","酒柜","冰箱配件"
                ]
            },
            
            4: {
                Name: "厨房大电",
                son: [
                    "油烟机", "灶具", "烟灶套装", "集成灶","集成水槽","消毒柜","洗碗机","电热水器","燃气热水器","壁挂炉","空气能热水器","嵌入式厨电","烟机灶具配件","太阳能热水器"
                ]
            },
            5: {
                Name: "厨房小电",
                son: [
                    "破壁机", "咖啡机", "榨汁机", "电炖锅","果蔬净化清洗机","三明治机/早餐机","电烤箱","厨师机/和面机","料理机","电饼铛","电水壶/热水瓶","面包机","电火锅","空气炸锅","养生壶","电磁炉","电饭煲","电压力锅","面条机","电陶炉","电烧烤炉","煮蛋器","电热饭盒","豆浆机"
                ]
            },
            6: {
                Name: "生活电器",
                son: [
                    "电风扇", "冷风扇", "空气净化器", "加湿器","净水器","饮水机","吸尘器","扫地机器人","茶吧机", "蒸汽/电动拖把", "除螨仪", "洗地机","挂烫机/熨斗","干衣机","除湿机","电话机","擦地/擦窗机器人","取暖器","毛球修剪器"
                ]
            },
            7: {
                Name: "个护健康",
                son: [
                    "剃须刀", "电动牙刷", "冲牙器", "电吹风","卷/直发器","理发器","美容仪","剃/脱毛器","洁面仪", "按摩器", "按摩椅"
                ]
            },
              8 : {
                Name: "视听音影",
                son: [
                    "家庭影院", "KTV音响", "迷你音响", "DVD","功放","回音壁","麦克风"
                ]
            },
        },
        img :[
            "./src/images/cont/contlf/1/1.webp",
            "./src/images/cont/contlf/1/2.webp",
            "./src/images/cont/contlf/1/3.webp",
            "./src/images/cont/contlf/1/4.webp",
            "./src/images/cont/contlf/1/5.webp",
            "./src/images/cont/contlf/1/6.webp",
            "./src/images/cont/contlf/1/7.webp",
            "./src/images/cont/contlf/1/8.webp",
            "./src/images/cont/contlf/1/9.webp",
            "./src/images/cont/contlf/1/10.webp",
    ]
    },
    1 : {
        contlfhover1lftop: ["手机频道", "网上营业厅","网上营业厅","配件频道","智能数码","影像Club"],
        father: {
            0 : {
                Name: "电视",
                son: [
                    "全面屏电视", "教育电视", "OLED电视", "智慧屏","4K超清电视","55英寸","65英寸","电视配件"
                ]
            },
            1 : {
                Name: "空调",
                son: [
                    "新风空调", "以旧换新", "空调挂机", "空调柜机","空调套装","新一级能效","挂机1.5匹","柜机3匹","变频空调","中央空调","移动空调"
                ]
            },
            2 : {
                Name: "空调",
                son: [
                    "新风空调", "以旧换新", "空调挂机", "空调柜机","空调套装","新一级能效","挂机1.5匹","柜机3匹","变频空调","中央空调","移动空调"
                ]
            },
            3 : {
                Name: "洗衣机",
                son: [
                    "滚筒洗衣机", "洗烘一体机", "波轮洗衣机", "洗烘套装","迷你洗衣机","洗衣机配件","烘干机"
                ]
            },
            4: {
                Name: "冰箱",
                son: [
                    "多门", "对开门", "三门", "双门","冰洗套装","冷柜/冰吧","酒柜","冰箱配件"
                ]
            },
            5: {
                Name: "厨房大电",
                son: [
                    "油烟机", "灶具", "烟灶套装", "集成灶","集成水槽","消毒柜","洗碗机","电热水器","燃气热水器","壁挂炉","空气能热水器","嵌入式厨电","烟机灶具配件","太阳能热水器"
                ]
            },
            6: {
                Name: "厨房小电",
                son: [
                    "破壁机", "咖啡机", "榨汁机", "电炖锅","果蔬净化清洗机","三明治机/早餐机","电烤箱","厨师机/和面机","料理机","电饼铛","电水壶/热水瓶","面包机","电火锅","空气炸锅","养生壶","电磁炉","电饭煲","电压力锅","面条机","电陶炉","电烧烤炉","煮蛋器","电热饭盒","豆浆机"
                ]
            },
            7: {
                Name: "生活电器",
                son: [
                    "电风扇", "冷风扇", "空气净化器", "加湿器","净水器","饮水机","吸尘器","扫地机器人","茶吧机", "蒸汽/电动拖把", "除螨仪", "洗地机","挂烫机/熨斗","干衣机","除湿机","电话机","擦地/擦窗机器人","取暖器","毛球修剪器"
                ]
            },
            8: {
                Name: "个护健康",
                son: [
                    "剃须刀", "电动牙刷", "冲牙器", "电吹风","卷/直发器","理发器","美容仪","剃/脱毛器","洁面仪", "按摩器", "按摩椅"
                ]
            },
              9 : {
                Name: "视听音影",
                son: [
                    "家庭影院", "KTV音响", "迷你音响", "DVD","功放","回音壁","麦克风"
                ]
            },
        },
        img :[
            "./src/images/cont/contlf/2/1.webp",
            "./src/images/cont/contlf/2/2.webp",
            "./src/images/cont/contlf/2/3.webp",
            "./src/images/cont/contlf/2/4.webp",
            "./src/images/cont/contlf/2/5.webp",
            "./src/images/cont/contlf/2/6.webp",
            "./src/images/cont/contlf/2/7.webp",
            "./src/images/cont/contlf/2/8.webp",
            "./src/images/cont/contlf/2/9.webp",
    ]
    },
   2 : {
        contlfhover1lftop: ["电脑办公", "企业采购","GAME+","装机大师","企业租赁","影像Club"],
        father: {
            0 : {
                Name: "电视",
                son: [
                    "全面屏电视", "教育电视", "OLED电视", "智慧屏","4K超清电视","55英寸","65英寸","电视配件"
                ]
            },
            1 : {
                Name: "空调",
                son: [
                    "新风空调", "以旧换新", "空调挂机", "空调柜机","空调套装","新一级能效","挂机1.5匹","柜机3匹","变频空调","中央空调","移动空调"
                ]
            },
            2 : {
                Name: "空调",
                son: [
                    "新风空调", "以旧换新", "空调挂机", "空调柜机","空调套装","新一级能效","挂机1.5匹","柜机3匹","变频空调","中央空调","移动空调"
                ]
            },
            3 : {
                Name: "洗衣机",
                son: [
                    "滚筒洗衣机", "洗烘一体机", "波轮洗衣机", "洗烘套装","迷你洗衣机","洗衣机配件","烘干机"
                ]
            },
            4: {
                Name: "冰箱",
                son: [
                    "多门", "对开门", "三门", "双门","冰洗套装","冷柜/冰吧","酒柜","冰箱配件"
                ]
            },
            5: {
                Name: "厨房大电",
                son: [
                    "油烟机", "灶具", "烟灶套装", "集成灶","集成水槽","消毒柜","洗碗机","电热水器","燃气热水器","壁挂炉","空气能热水器","嵌入式厨电","烟机灶具配件","太阳能热水器"
                ]
            },
            6: {
                Name: "厨房小电",
                son: [
                    "破壁机", "咖啡机", "榨汁机", "电炖锅","果蔬净化清洗机","三明治机/早餐机","电烤箱","厨师机/和面机","料理机","电饼铛","电水壶/热水瓶","面包机","电火锅","空气炸锅","养生壶","电磁炉","电饭煲","电压力锅","面条机","电陶炉","电烧烤炉","煮蛋器","电热饭盒","豆浆机"
                ]
            },
            7: {
                Name: "生活电器",
                son: [
                    "电风扇", "冷风扇", "空气净化器", "加湿器","净水器","饮水机","吸尘器","扫地机器人","茶吧机", "蒸汽/电动拖把", "除螨仪", "洗地机","挂烫机/熨斗","干衣机","除湿机","电话机","擦地/擦窗机器人","取暖器","毛球修剪器"
                ]
            },         
        },
        img :[
            "./src/images/cont/contlf/3/1.webp",
            "./src/images/cont/contlf/3/2.webp",
            "./src/images/cont/contlf/3/3.webp",
            "./src/images/cont/contlf/3/4.webp",
            "./src/images/cont/contlf/3/5.webp",
            "./src/images/cont/contlf/3/6.webp",
            "./src/images/cont/contlf/3/7.webp",
            "./src/images/cont/contlf/3/8.webp",
            "./src/images/cont/contlf/3/9.webp",
            "./src/images/cont/contlf/3/10.webp",
    ]
    },
    3 : {
        contlfhover1lftop: ["电脑办公", "企业采购","GAME+","装机大师","企业租赁","影像Club"],
        father: {
            0 : {
                Name: "电视",
                son: [
                    "全面屏电视", "教育电视", "OLED电视", "智慧屏","4K超清电视","55英寸","65英寸","电视配件"
                ]
            },
            1 : {
                Name: "空调",
                son: [
                    "新风空调", "以旧换新", "空调挂机", "空调柜机","空调套装","新一级能效","挂机1.5匹","柜机3匹","变频空调","中央空调","移动空调"
                ]
            },
            2 : {
                Name: "空调",
                son: [
                    "新风空调", "以旧换新", "空调挂机", "空调柜机","空调套装","新一级能效","挂机1.5匹","柜机3匹","变频空调","中央空调","移动空调"
                ]
            },
            3 : {
                Name: "洗衣机",
                son: [
                    "滚筒洗衣机", "洗烘一体机", "波轮洗衣机", "洗烘套装","迷你洗衣机","洗衣机配件","烘干机"
                ]
            },
            4: {
                Name: "冰箱",
                son: [
                    "多门", "对开门", "三门", "双门","冰洗套装","冷柜/冰吧","酒柜","冰箱配件"
                ]
            },
            5: {
                Name: "厨房大电",
                son: [
                    "油烟机", "灶具", "烟灶套装", "集成灶","集成水槽","消毒柜","洗碗机","电热水器","燃气热水器","壁挂炉","空气能热水器","嵌入式厨电","烟机灶具配件","太阳能热水器"
                ]
            },
            6: {
                Name: "厨房小电",
                son: [
                    "破壁机", "咖啡机", "榨汁机", "电炖锅","果蔬净化清洗机","三明治机/早餐机","电烤箱","厨师机/和面机","料理机","电饼铛","电水壶/热水瓶","面包机","电火锅","空气炸锅","养生壶","电磁炉","电饭煲","电压力锅","面条机","电陶炉","电烧烤炉","煮蛋器","电热饭盒","豆浆机"
                ]
            },
            7: {
                Name: "生活电器",
                son: [
                    "电风扇", "冷风扇", "空气净化器", "加湿器","净水器","饮水机","吸尘器","扫地机器人","茶吧机", "蒸汽/电动拖把", "除螨仪", "洗地机","挂烫机/熨斗","干衣机","除湿机","电话机","擦地/擦窗机器人","取暖器","毛球修剪器"
                ]
            },   
            8: {
                Name: "厨房小电",
                son: [
                    "破壁机", "咖啡机", "榨汁机", "电炖锅","果蔬净化清洗机","三明治机/早餐机","电烤箱","厨师机/和面机","料理机","电饼铛","电水壶/热水瓶","面包机","电火锅","空气炸锅","养生壶","电磁炉","电饭煲","电压力锅","面条机","电陶炉","电烧烤炉","煮蛋器","电热饭盒","豆浆机"
                ]
            },      
        },
        img :[
            "./src/images/cont/contlf/3/1.webp",
            "./src/images/cont/contlf/3/2.webp",
            "./src/images/cont/contlf/3/3.webp",
            "./src/images/cont/contlf/3/4.webp",
            "./src/images/cont/contlf/3/5.webp",
            "./src/images/cont/contlf/3/6.webp",
            "./src/images/cont/contlf/3/7.webp",
            "./src/images/cont/contlf/3/8.webp",
    ]
    },
    4 : {
        contlfhover1lftop: ["家电馆", "开店设备一站购"],
        father: {
            0 : {
                Name: "电视",
                son: [
                    "全面屏电视", "教育电视", "OLED电视", "智慧屏","4K超清电视","55英寸","65英寸","电视配件"
                ]
            },
            1 : {
                Name: "空调",
                son: [
                    "新风空调", "以旧换新", "空调挂机", "空调柜机","空调套装","新一级能效","挂机1.5匹","柜机3匹","变频空调","中央空调","移动空调"
                ]
            },
            2 : {
                Name: "空调",
                son: [
                    "新风空调", "以旧换新", "空调挂机", "空调柜机","空调套装","新一级能效","挂机1.5匹","柜机3匹","变频空调","中央空调","移动空调"
                ]
            },
            3 : {
                Name: "洗衣机",
                son: [
                    "滚筒洗衣机", "洗烘一体机", "波轮洗衣机", "洗烘套装","迷你洗衣机","洗衣机配件","烘干机"
                ]
            },
            4: {
                Name: "冰箱",
                son: [
                    "多门", "对开门", "三门", "双门","冰洗套装","冷柜/冰吧","酒柜","冰箱配件"
                ]
            },
            5: {
                Name: "厨房大电",
                son: [
                    "油烟机", "灶具", "烟灶套装", "集成灶","集成水槽","消毒柜","洗碗机","电热水器","燃气热水器","壁挂炉","空气能热水器","嵌入式厨电","烟机灶具配件","太阳能热水器"
                ]
            },
            6: {
                Name: "厨房小电",
                son: [
                    "破壁机", "咖啡机", "榨汁机", "电炖锅","果蔬净化清洗机","三明治机/早餐机","电烤箱","厨师机/和面机","料理机","电饼铛","电水壶/热水瓶","面包机","电火锅","空气炸锅","养生壶","电磁炉","电饭煲","电压力锅","面条机","电陶炉","电烧烤炉","煮蛋器","电热饭盒","豆浆机"
                ]
            },
            7: {
                Name: "生活电器",
                son: [
                    "电风扇", "冷风扇", "空气净化器", "加湿器","净水器","饮水机","吸尘器","扫地机器人","茶吧机", "蒸汽/电动拖把", "除螨仪", "洗地机","挂烫机/熨斗","干衣机","除湿机","电话机","擦地/擦窗机器人","取暖器","毛球修剪器"
                ]
            },
            8: {
                Name: "个护健康",
                son: [
                    "剃须刀", "电动牙刷", "冲牙器", "电吹风","卷/直发器","理发器","美容仪","剃/脱毛器","洁面仪", "按摩器", "按摩椅"
                ]
            },
              9 : {
                Name: "视听音影",
                son: [
                    "家庭影院", "KTV音响", "迷你音响", "DVD","功放","回音壁","麦克风"
                ]
            },
        },
        img :[
            "./src/images/cont/contlf/1/1.webp",
            "./src/images/cont/contlf/1/2.webp",
            "./src/images/cont/contlf/1/3.webp",
            "./src/images/cont/contlf/1/4.webp",
            "./src/images/cont/contlf/1/5.webp",
            "./src/images/cont/contlf/1/6.webp",
            "./src/images/cont/contlf/1/7.webp",
            "./src/images/cont/contlf/1/8.webp",
            "./src/images/cont/contlf/1/9.webp",
            "./src/images/cont/contlf/1/10.webp",
    ]
    },
    5 : {
        contlfhover1lftop: ["电脑办公", "企业采购","GAME+","装机大师","企业租赁","影像Club"],
        father: {
            0 : {
                Name: "电视",
                son: [
                    "全面屏电视", "教育电视", "OLED电视", "智慧屏","4K超清电视","55英寸","65英寸","电视配件"
                ]
            },
            1 : {
                Name: "空调",
                son: [
                    "新风空调", "以旧换新", "空调挂机", "空调柜机","空调套装","新一级能效","挂机1.5匹","柜机3匹","变频空调","中央空调","移动空调"
                ]
            },
            2 : {
                Name: "空调",
                son: [
                    "新风空调", "以旧换新", "空调挂机", "空调柜机","空调套装","新一级能效","挂机1.5匹","柜机3匹","变频空调","中央空调","移动空调"
                ]
            },
            3 : {
                Name: "洗衣机",
                son: [
                    "滚筒洗衣机", "洗烘一体机", "波轮洗衣机", "洗烘套装","迷你洗衣机","洗衣机配件","烘干机"
                ]
            },
            4: {
                Name: "冰箱",
                son: [
                    "多门", "对开门", "三门", "双门","冰洗套装","冷柜/冰吧","酒柜","冰箱配件"
                ]
            },
            5: {
                Name: "厨房大电",
                son: [
                    "油烟机", "灶具", "烟灶套装", "集成灶","集成水槽","消毒柜","洗碗机","电热水器","燃气热水器","壁挂炉","空气能热水器","嵌入式厨电","烟机灶具配件","太阳能热水器"
                ]
            },
            6: {
                Name: "厨房小电",
                son: [
                    "破壁机", "咖啡机", "榨汁机", "电炖锅","果蔬净化清洗机","三明治机/早餐机","电烤箱","厨师机/和面机","料理机","电饼铛","电水壶/热水瓶","面包机","电火锅","空气炸锅","养生壶","电磁炉","电饭煲","电压力锅","面条机","电陶炉","电烧烤炉","煮蛋器","电热饭盒","豆浆机"
                ]
            },
            7: {
                Name: "生活电器",
                son: [
                    "电风扇", "冷风扇", "空气净化器", "加湿器","净水器","饮水机","吸尘器","扫地机器人","茶吧机", "蒸汽/电动拖把", "除螨仪", "洗地机","挂烫机/熨斗","干衣机","除湿机","电话机","擦地/擦窗机器人","取暖器","毛球修剪器"
                ]
            },   
            8: {
                Name: "厨房小电",
                son: [
                    "破壁机", "咖啡机", "榨汁机", "电炖锅","果蔬净化清洗机","三明治机/早餐机","电烤箱","厨师机/和面机","料理机","电饼铛","电水壶/热水瓶","面包机","电火锅","空气炸锅","养生壶","电磁炉","电饭煲","电压力锅","面条机","电陶炉","电烧烤炉","煮蛋器","电热饭盒","豆浆机"
                ]
            },      
        },
        img :[
            "./src/images/cont/contlf/3/1.webp",
            "./src/images/cont/contlf/3/2.webp",
            "./src/images/cont/contlf/3/3.webp",
            "./src/images/cont/contlf/3/4.webp",
            "./src/images/cont/contlf/3/5.webp",
            "./src/images/cont/contlf/3/6.webp",
            "./src/images/cont/contlf/3/7.webp",
            "./src/images/cont/contlf/3/8.webp",
    ]
    },
    6 : {
        contlfhover1lftop: ["手机频道", "网上营业厅","网上营业厅","配件频道","智能数码","影像Club"],
        father: {
            0 : {
                Name: "电视",
                son: [
                    "全面屏电视", "教育电视", "OLED电视", "智慧屏","4K超清电视","55英寸","65英寸","电视配件"
                ]
            },
            1 : {
                Name: "空调",
                son: [
                    "新风空调", "以旧换新", "空调挂机", "空调柜机","空调套装","新一级能效","挂机1.5匹","柜机3匹","变频空调","中央空调","移动空调"
                ]
            },
            2 : {
                Name: "空调",
                son: [
                    "新风空调", "以旧换新", "空调挂机", "空调柜机","空调套装","新一级能效","挂机1.5匹","柜机3匹","变频空调","中央空调","移动空调"
                ]
            },
            3 : {
                Name: "洗衣机",
                son: [
                    "滚筒洗衣机", "洗烘一体机", "波轮洗衣机", "洗烘套装","迷你洗衣机","洗衣机配件","烘干机"
                ]
            },
            4: {
                Name: "冰箱",
                son: [
                    "多门", "对开门", "三门", "双门","冰洗套装","冷柜/冰吧","酒柜","冰箱配件"
                ]
            },
            5: {
                Name: "厨房大电",
                son: [
                    "油烟机", "灶具", "烟灶套装", "集成灶","集成水槽","消毒柜","洗碗机","电热水器","燃气热水器","壁挂炉","空气能热水器","嵌入式厨电","烟机灶具配件","太阳能热水器"
                ]
            },
            6: {
                Name: "厨房小电",
                son: [
                    "破壁机", "咖啡机", "榨汁机", "电炖锅","果蔬净化清洗机","三明治机/早餐机","电烤箱","厨师机/和面机","料理机","电饼铛","电水壶/热水瓶","面包机","电火锅","空气炸锅","养生壶","电磁炉","电饭煲","电压力锅","面条机","电陶炉","电烧烤炉","煮蛋器","电热饭盒","豆浆机"
                ]
            },
            7: {
                Name: "生活电器",
                son: [
                    "电风扇", "冷风扇", "空气净化器", "加湿器","净水器","饮水机","吸尘器","扫地机器人","茶吧机", "蒸汽/电动拖把", "除螨仪", "洗地机","挂烫机/熨斗","干衣机","除湿机","电话机","擦地/擦窗机器人","取暖器","毛球修剪器"
                ]
            },
            8: {
                Name: "个护健康",
                son: [
                    "剃须刀", "电动牙刷", "冲牙器", "电吹风","卷/直发器","理发器","美容仪","剃/脱毛器","洁面仪", "按摩器", "按摩椅"
                ]
            },
              9 : {
                Name: "视听音影",
                son: [
                    "家庭影院", "KTV音响", "迷你音响", "DVD","功放","回音壁","麦克风"
                ]
            },
        },
        img :[
            "./src/images/cont/contlf/2/1.webp",
            "./src/images/cont/contlf/2/2.webp",
            "./src/images/cont/contlf/2/3.webp",
            "./src/images/cont/contlf/2/4.webp",
            "./src/images/cont/contlf/2/5.webp",
            "./src/images/cont/contlf/2/6.webp",
            "./src/images/cont/contlf/2/7.webp",
            "./src/images/cont/contlf/2/8.webp",
            "./src/images/cont/contlf/2/9.webp",
    ]
    },
    7 : {
        contlfhover1lftop: ["电脑办公", "企业采购","GAME+","装机大师","企业租赁","影像Club"],
        father: {
            0 : {
                Name: "电视",
                son: [
                    "全面屏电视", "教育电视", "OLED电视", "智慧屏","4K超清电视","55英寸","65英寸","电视配件"
                ]
            },
            1 : {
                Name: "空调",
                son: [
                    "新风空调", "以旧换新", "空调挂机", "空调柜机","空调套装","新一级能效","挂机1.5匹","柜机3匹","变频空调","中央空调","移动空调"
                ]
            },
            2 : {
                Name: "空调",
                son: [
                    "新风空调", "以旧换新", "空调挂机", "空调柜机","空调套装","新一级能效","挂机1.5匹","柜机3匹","变频空调","中央空调","移动空调"
                ]
            },
            3 : {
                Name: "洗衣机",
                son: [
                    "滚筒洗衣机", "洗烘一体机", "波轮洗衣机", "洗烘套装","迷你洗衣机","洗衣机配件","烘干机"
                ]
            },
            4: {
                Name: "冰箱",
                son: [
                    "多门", "对开门", "三门", "双门","冰洗套装","冷柜/冰吧","酒柜","冰箱配件"
                ]
            },
            5: {
                Name: "厨房大电",
                son: [
                    "油烟机", "灶具", "烟灶套装", "集成灶","集成水槽","消毒柜","洗碗机","电热水器","燃气热水器","壁挂炉","空气能热水器","嵌入式厨电","烟机灶具配件","太阳能热水器"
                ]
            },
            6: {
                Name: "厨房小电",
                son: [
                    "破壁机", "咖啡机", "榨汁机", "电炖锅","果蔬净化清洗机","三明治机/早餐机","电烤箱","厨师机/和面机","料理机","电饼铛","电水壶/热水瓶","面包机","电火锅","空气炸锅","养生壶","电磁炉","电饭煲","电压力锅","面条机","电陶炉","电烧烤炉","煮蛋器","电热饭盒","豆浆机"
                ]
            },
            7: {
                Name: "生活电器",
                son: [
                    "电风扇", "冷风扇", "空气净化器", "加湿器","净水器","饮水机","吸尘器","扫地机器人","茶吧机", "蒸汽/电动拖把", "除螨仪", "洗地机","挂烫机/熨斗","干衣机","除湿机","电话机","擦地/擦窗机器人","取暖器","毛球修剪器"
                ]
            },   
            8: {
                Name: "厨房小电",
                son: [
                    "破壁机", "咖啡机", "榨汁机", "电炖锅","果蔬净化清洗机","三明治机/早餐机","电烤箱","厨师机/和面机","料理机","电饼铛","电水壶/热水瓶","面包机","电火锅","空气炸锅","养生壶","电磁炉","电饭煲","电压力锅","面条机","电陶炉","电烧烤炉","煮蛋器","电热饭盒","豆浆机"
                ]
            },      
        },
        img :[
            "./src/images/cont/contlf/3/1.webp",
            "./src/images/cont/contlf/3/2.webp",
            "./src/images/cont/contlf/3/3.webp",
            "./src/images/cont/contlf/3/4.webp",
            "./src/images/cont/contlf/3/5.webp",
            "./src/images/cont/contlf/3/6.webp",
            "./src/images/cont/contlf/3/7.webp",
            "./src/images/cont/contlf/3/8.webp",
    ]
    },
    8 : {
        contlfhover1lftop: ["电脑办公", "企业采购","GAME+","装机大师","企业租赁","影像Club"],
        father: {
            0 : {
                Name: "电视",
                son: [
                    "全面屏电视", "教育电视", "OLED电视", "智慧屏","4K超清电视","55英寸","65英寸","电视配件"
                ]
            },
            1 : {
                Name: "空调",
                son: [
                    "新风空调", "以旧换新", "空调挂机", "空调柜机","空调套装","新一级能效","挂机1.5匹","柜机3匹","变频空调","中央空调","移动空调"
                ]
            },
            2 : {
                Name: "空调",
                son: [
                    "新风空调", "以旧换新", "空调挂机", "空调柜机","空调套装","新一级能效","挂机1.5匹","柜机3匹","变频空调","中央空调","移动空调"
                ]
            },
            3 : {
                Name: "洗衣机",
                son: [
                    "滚筒洗衣机", "洗烘一体机", "波轮洗衣机", "洗烘套装","迷你洗衣机","洗衣机配件","烘干机"
                ]
            },
            4: {
                Name: "冰箱",
                son: [
                    "多门", "对开门", "三门", "双门","冰洗套装","冷柜/冰吧","酒柜","冰箱配件"
                ]
            },
            5: {
                Name: "厨房大电",
                son: [
                    "油烟机", "灶具", "烟灶套装", "集成灶","集成水槽","消毒柜","洗碗机","电热水器","燃气热水器","壁挂炉","空气能热水器","嵌入式厨电","烟机灶具配件","太阳能热水器"
                ]
            },
            6: {
                Name: "厨房小电",
                son: [
                    "破壁机", "咖啡机", "榨汁机", "电炖锅","果蔬净化清洗机","三明治机/早餐机","电烤箱","厨师机/和面机","料理机","电饼铛","电水壶/热水瓶","面包机","电火锅","空气炸锅","养生壶","电磁炉","电饭煲","电压力锅","面条机","电陶炉","电烧烤炉","煮蛋器","电热饭盒","豆浆机"
                ]
            },
            7: {
                Name: "生活电器",
                son: [
                    "电风扇", "冷风扇", "空气净化器", "加湿器","净水器","饮水机","吸尘器","扫地机器人","茶吧机", "蒸汽/电动拖把", "除螨仪", "洗地机","挂烫机/熨斗","干衣机","除湿机","电话机","擦地/擦窗机器人","取暖器","毛球修剪器"
                ]
            },         
        },
        img :[
            "./src/images/cont/contlf/3/1.webp",
            "./src/images/cont/contlf/3/2.webp",
            "./src/images/cont/contlf/3/3.webp",
            "./src/images/cont/contlf/3/4.webp",
            "./src/images/cont/contlf/3/5.webp",
            "./src/images/cont/contlf/3/6.webp",
            "./src/images/cont/contlf/3/7.webp",
            "./src/images/cont/contlf/3/8.webp",
            "./src/images/cont/contlf/3/9.webp",
            "./src/images/cont/contlf/3/10.webp",
    ]
    },
}

var contcenterLun = [
    "./src/images/cont/center1/1.webp",
    "./src/images/cont/center1/2.webp",
    "./src/images/cont/center1/3.webp",
    "./src/images/cont/center1/4.jpg",
    "./src/images/cont/center1/5.webp",
    "./src/images/cont/center1/6.jpg",
    "./src/images/cont/center1/7.jpg",
    "./src/images/cont/center1/8.jpg",
]
var contcenter1 = [
    "./src/images/cont/center1/center1.1.webp",
    "./src/images/cont/center1/center1.2.webp",
    "./src/images/cont/center1/center1.3.webp",
    "./src/images/cont/center1/center1.4.webp",
    "./src/images/cont/center1/center1.5.webp",
    "./src/images/cont/center1/center1.6.webp",
    "./src/images/cont/center1/center1.7.webp",
    "./src/images/cont/center1/center1.8.webp",
    "./src/images/cont/center1/center1.9.webp",
]


var jdkb = {
    0 : {
        new : "热评",
        text : "气质蓝白蓝白条纹连衣裙"
    },
    1 : {
        new : "推荐",
        text : "拎出来的优雅，丢不了的自信"
    },
    2 : {
        new : "热评",
        text : "你用的扫地机器人够智能吗？"
    },
    3 : {
        new : "热议",
        text : "徕卡新机宣传照穿帮！照片出自佳能"
    },
}


 var footboxlf1tabclone = [
    {
    title : "海尔（Haier）13升燃气热水器天然气水伺服恒温多点用水无干扰智护自洁家用JSQ25-13JM6(12T)U1 京东小家智能",
                money : "¥1469.00",
                backgroundImage : "url(src/images/foot/b1.webp)"
    },
    {
      title : "海尔（Haier）13升燃气热水器天然气水伺服恒温多点用水无干扰智护自洁家用JSQ25-13JM6(12T)U1 京东小家智能",
      money : "¥1469.00",
      backgroundImage : "url(src/images/foot/b2.webp)"
    },
    {
        title : "海尔（Haier）13升燃气热水器天然气水伺服恒温多点用水无干扰智护自洁家用JSQ25-13JM6(12T)U1 京东小家智能",
        money : "¥1469.00",
        backgroundImage : "url(src/images/foot/b3.webp)"
      },
      {
        title : "海尔（Haier）13升燃气热水器天然气水伺服恒温多点用水无干扰智护自洁家用JSQ25-13JM6(12T)U1 京东小家智能",
        money : "¥1469.00",
        backgroundImage : "url(src/images/foot/b4.webp)"
      },
      {
        title : "海尔（Haier）13升燃气热水器天然气水伺服恒温多点用水无干扰智护自洁家用JSQ25-13JM6(12T)U1 京东小家智能",
        money : "¥1469.00",
        backgroundImage : "url(src/images/foot/b5.webp)"
      },
      {
        title : "海尔（Haier）13升燃气热水器天然气水伺服恒温多点用水无干扰智护自洁家用JSQ25-13JM6(12T)U1 京东小家智能",
        money : "¥1469.00",
        backgroundImage : "url(src/images/foot/b6.webp)"
      },
      {
        title : "海尔（Haier）13升燃气热水器天然气水伺服恒温多点用水无干扰智护自洁家用JSQ25-13JM6(12T)U1 京东小家智能",
        money : "¥1469.00",
        backgroundImage : "url(src/images/foot/b7.webp)"
      },
      {
        title : "海尔（Haier）13升燃气热水器天然气水伺服恒温多点用水无干扰智护自洁家用JSQ25-13JM6(12T)U1 京东小家智能",
        money : "¥1469.00",
        backgroundImage : "url(src/images/foot/b8.webp)"
      },
      {
        title : "海尔（Haier）13升燃气热水器天然气水伺服恒温多点用水无干扰智护自洁家用JSQ25-13JM6(12T)U1 京东小家智能",
        money : "¥1469.00",
        backgroundImage : "url(src/images/foot/b9.webp)"
      },
      {
        title : "海尔（Haier）13升燃气热水器天然气水伺服恒温多点用水无干扰智护自洁家用JSQ25-13JM6(12T)U1 京东小家智能",
        money : "¥1469.00",
        backgroundImage : "url(src/images/foot/b10.webp)"
      },
      {
        title : "海尔（Haier）13升燃气热水器天然气水伺服恒温多点用水无干扰智护自洁家用JSQ25-13JM6(12T)U1 京东小家智能",
        money : "¥1469.00",
        backgroundImage : "url(src/images/foot/b11.webp)"
      },
      {
        title : "海尔（Haier）13升燃气热水器天然气水伺服恒温多点用水无干扰智护自洁家用JSQ25-13JM6(12T)U1 京东小家智能",
        money : "¥1469.00",
        backgroundImage : "url(src/images/foot/b12.webp)"
      },
 ]