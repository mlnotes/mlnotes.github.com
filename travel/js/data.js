ALL_PROVINCES = {
    "上海": {id: "shanghai", cities: {"黄浦区": 1, "徐汇区": 1, "长宁区": 1, "静安区": 1, "普陀区": 1, "虹口区": 1, "杨浦区": 1, "闵行区": 1, "宝山区": 1, "嘉定区": 1, "浦东新区": 1, "金山区": 1, "松江区": 1, "青浦区": 1, "奉贤区": 1, "崇明区": 1}},
    "河北": {id: "hebei", cities: {"石家庄市": 0, "唐山市": 0, "秦皇岛市": 0, "邯郸市": 0, "邢台市": 0, "保定市": 0, "张家口市": 0, "承德市": 0, "沧州市": 0, "廊坊市": 0, "衡水市": 0}},
    "内蒙古": {id: "neimenggu", cities: {"呼和浩特市": 0, "包头市": 0, "乌海市": 0, "赤峰市": 0, "通辽市": 0, "鄂尔多斯市": 0, "呼伦贝尔市": 0, "巴彦淖尔市": 0, "乌兰察布市": 0, "兴安盟": 0, "锡林郭勒盟": 0, "阿拉善盟": 1}},
    "辽宁": {id: "liaoning", cities: {"沈阳市": 0, "大连市": 0, "鞍山市": 0, "抚顺市": 0, "本溪市": 0, "丹东市": 0, "锦州市": 0, "营口市": 0, "阜新市": 0, "辽阳市": 0, "盘锦市": 0, "铁岭市": 0, "朝阳市": 0, "葫芦岛市": 0}},
    "吉林": {id: "jilin", cities: {"长春市": 0, "吉林市": 0, "四平市": 0, "辽源市": 0, "通化市": 0, "白山市": 0, "松原市": 0, "白城市": 0, "延边朝鲜族自治州": 0}},
    "山西": {id: "shanxi", cities: {"太原市": 0, "大同市": 0, "阳泉市": 0, "长治市": 0, "晋城市": 0, "朔州市": 0, "晋中市": 0, "运城市": 0, "忻州市": 0, "临汾市": 0, "吕梁市": 0}},
    "江苏": {id: "jiangsu", cities: {"南京市": 1, "无锡市": 1, "徐州市": 0, "常州市": 0, "苏州市": 1, "南通市": 1, "连云港市": 0, "淮安市": 0, "盐城市": 1, "扬州市": 0, "镇江市": 1, "泰州市": 1, "宿迁市": 0}},
    "浙江": {id: "zhejiang", cities: {"杭州市": 1, "宁波市": 1, "温州市": 1, "嘉兴市": 0, "湖州市": 1, "绍兴市": 0, "金华市": 0, "衢州市": 0, "舟山市": 1, "台州市": 0, "丽水市": 0}},
    "安徽": {id: "anhui", cities: {"合肥市": 1, "芜湖市": 0, "蚌埠市": 0, "淮南市": 0, "马鞍山市": 0, "淮北市": 0, "铜陵市": 0, "安庆市": 0, "黄山市": 0, "滁州市": 0, "阜阳市": 0, "宿州市": 0, "六安市": 0, "亳州市": 0, "池州市": 0, "宣城市": 0}},
    "福建": {id: "fujian", cities: {"福州市": 0, "厦门市": 1, "莆田市": 0, "三明市": 0, "泉州市": 0, "漳州市": 0, "南平市": 0, "龙岩市": 0, "宁德市": 0}},
    "江西": {id: "jiangxi", cities: {"南昌市": 0, "景德镇市": 0, "萍乡市": 0, "九江市": 0, "新余市": 0, "鹰潭市": 0, "赣州市": 0, "吉安市": 0, "宜春市": 0, "抚州市": 0, "上饶市": 0}},
    "山东": {id: "shandong", cities: {"济南市": 0, "青岛市": 1, "淄博市": 0, "枣庄市": 0, "东营市": 0, "烟台市": 0, "潍坊市": 0, "济宁市": 0, "泰安市": 0, "威海市": 0, "日照市": 0, "莱芜市": 0, "临沂市": 0, "德州市": 0, "聊城市": 0, "滨州市": 0, "菏泽市": 0}},
    "河南": {id: "henan", cities: {"郑州市": 1, "开封市": 0, "洛阳市": 1, "平顶山市": 0, "安阳市": 0, "鹤壁市": 0, "新乡市": 0, "焦作市": 0, "濮阳市": 0, "许昌市": 0, "漯河市": 0, "三门峡市": 0, "南阳市": 0, "商丘市": 0, "信阳市": 0, "周口市": 0, "驻马店市": 0, "济源市": 0}},
    "湖北": {id: "hubei", cities: {"武汉市": 0, "黄石市": 0, "十堰市": 0, "宜昌市": 0, "襄阳市": 0, "鄂州市": 0, "荆门市": 0, "孝感市": 0, "荆州市": 0, "黄冈市": 0, "咸宁市": 0, "随州市": 0, "恩施土家族苗族自治州": 1, "仙桃市": 0, "潜江市": 0, "天门市": 0, "神农架林区": 0}},
    "湖南": {id: "hunan", cities: {"长沙市": 1, "株洲市": 0, "湘潭市": 0, "衡阳市": 1, "邵阳市": 0, "岳阳市": 0, "常德市": 0, "张家界市": 0, "益阳市": 0, "郴州市": 0, "永州市": 0, "怀化市": 0, "娄底市": 0, "湘西土家族苗族自治州": 1}},
    "广西": {id: "guangxi", cities: {"南宁市": 0, "柳州市": 0, "桂林市": 0, "梧州市": 0, "北海市": 0, "防城港市": 0, "钦州市": 0, "贵港市": 0, "玉林市": 0, "百色市": 0, "贺州市": 0, "河池市": 0, "来宾市": 0, "崇左市": 0}},
    "海南": {id: "hainan", cities: {"海口市": 0, "三亚市": 1, "三沙市": 0, "儋州市": 0, "五指山市": 0, "琼海市": 0, "文昌市": 0, "万宁市": 0, "东方市": 0, "定安县": 0, "屯昌县": 0, "澄迈县": 0, "临高县": 0, "白沙黎族自治县": 0, "昌江黎族自治县": 0, "乐东黎族自治县": 0, "陵水黎族自治县": 0, "保亭黎族苗族自治县": 0, "琼中黎族苗族自治县": 0}},
    "贵州": {id: "guizhou", cities: {"贵阳市": 1, "六盘水市": 0, "遵义市": 0, "安顺市": 1, "毕节市": 0, "铜仁市": 0, "黔西南布依族苗族自治州": 0, "黔东南苗族侗族自治州": 0, "黔南布依族苗族自治州": 0}},
    "云南": {id: "yunnan", cities: {"昆明市": 0, "曲靖市": 0, "玉溪市": 0, "保山市": 0, "昭通市": 0, "丽江市": 0, "普洱市": 0, "临沧市": 0, "楚雄彝族自治州": 0, "红河哈尼族彝族自治州": 0, "文山壮族苗族自治州": 0, "西双版纳傣族自治州": 0, "大理白族自治州": 0, "德宏傣族景颇族自治州": 0, "怒江傈僳族自治州": 0, "迪庆藏族自治州": 0}},
    "西藏": {id: "xizang", cities: {"拉萨市": 0, "日喀则市": 0, "昌都市": 0, "山南市": 0, "那曲地区": 0, "阿里地区": 0, "林芝市": 0, "山南市": 0}},
    "陕西": {id: "shaanxi", cities: {"西安市": 1, "铜川市": 0, "宝鸡市": 0, "咸阳市": 0, "渭南市": 0, "延安市": 0, "汉中市": 0, "榆林市": 0, "安康市": 0, "商洛市": 0}},
    "甘肃": {id: "gansu", cities: {"兰州市": 0, "嘉峪关市": 1, "金昌市": 0, "白银市": 0, "天水市": 0, "武威市": 0, "张掖市": 1, "平凉市": 0, "酒泉市": 1, "庆阳市": 0, "定西市": 0, "陇南市": 0, "临夏回族自治州": 0, "甘南藏族自治州": 0}},
    "青海": {id: "qinghai", cities: {"西宁市": 1, "海东市": 0, "海北藏族自治州": 1, "黄南藏族自治州": 0, "海南藏族自治州": 1, "果洛藏族自治州": 0, "玉树藏族自治州": 0, "海西蒙古族藏族自治州": 1}},
    "宁夏": {id: "ningxia", cities: {"银川市": 1, "石嘴山市": 0, "吴忠市": 0, "固原市": 0, "中卫市": 1}},
    "北京": {id: "beijing", cities: {"东城区": 1, "西城区": 1, "朝阳区": 1, "丰台区": 0, "石景山区": 0, "海淀区": 1, "门头沟区": 0, "房山区": 0, "通州区": 0, "顺义区": 0, "昌平区": 0, "大兴区": 0, "怀柔区": 0, "平谷区": 0, "密云区": 0, "延庆区": 0}},
    "天津": {id: "tianjin", cities: {"和平区": 0, "河东区": 0, "河西区": 0, "南开区": 0, "河北区": 0, "红桥区": 0, "东丽区": 0, "西青区": 0, "津南区": 0, "北辰区": 0, "武清区": 0, "宝坻区": 0, "滨海新区": 0, "宁河区": 0, "静海区": 0, "蓟州区": 0}},
    "重庆": {id: "chongqing", cities: {"万州区": 0, "涪陵区": 0, "渝中区": 0, "大渡口区": 0, "江北区": 0, "沙坪坝区": 0, "九龙坡区": 0, "南岸区": 0, "北碚区": 0, "綦江区": 0, "大足区": 0, "渝北区": 0, "巴南区": 0, "黔江区": 0, "长寿区": 0, "江津区": 0, "合川区": 0, "永川区": 0, "南川区": 0, "璧山区": 0, "铜梁区": 0, "潼南区": 0, "荣昌区": 0, "梁平县": 0, "城口县": 0, "丰都县": 0, "垫江县": 0, "武隆县": 0, "忠县": 0, "云阳县": 0, "奉节县": 0, "巫山县": 0, "巫溪县": 0, "石柱土家族自治县": 0, "秀山土家族苗族自治县": 0, "酉阳土家族苗族自治县": 0, "彭水苗族土家族自治县": 0, "开州区": 0}},
    "香港": {id: "xianggang", cities: {"中西区": 0, "湾仔区": 0, "东区": 0, "南区": 0, "油尖旺区": 0, "深水埗区": 0, "九龙城区": 0, "黄大仙区": 0, "观塘区": 0, "荃湾区": 0, "屯门区": 0, "元朗区": 0, "北区": 0, "大埔区": 0, "西贡区": 0, "沙田区": 0, "葵青区": 0, "离岛区": 0}},
    "澳门": {id: "aomen", cities: {"花地玛堂区": 0, "花王堂区": 0, "望德堂区": 0, "大堂区": 0, "风顺堂区": 0, "嘉模堂区": 0, "路凼填海区": 0, "圣方济各堂区": 0}},
    "黑龙江": {id: "heilongjiang", cities: {"哈尔滨市": 0, "齐齐哈尔市": 0, "鸡西市": 0, "鹤岗市": 0, "双鸭山市": 0, "大庆市": 0, "伊春市": 0, "佳木斯市": 0, "七台河市": 0, "牡丹江市": 0, "黑河市": 0, "绥化市": 0, "大兴安岭地区": 0}},
    "广东": {id: "guangdong", cities: {"广州市": 0, "韶关市": 0, "深圳市": 0, "珠海市": 0, "汕头市": 0, "佛山市": 0, "江门市": 0, "湛江市": 0, "茂名市": 0, "肇庆市": 0, "惠州市": 0, "梅州市": 0, "汕尾市": 0, "河源市": 0, "阳江市": 0, "清远市": 0, "东莞市": 0, "中山市": 0, "潮州市": 0, "揭阳市": 0, "云浮市": 0}},
    "四川": {id: "sichuan", cities: {"成都市": 0, "自贡市": 0, "攀枝花市": 0, "泸州市": 0, "德阳市": 0, "绵阳市": 0, "广元市": 0, "遂宁市": 0, "内江市": 0, "乐山市": 0, "南充市": 0, "眉山市": 0, "宜宾市": 0, "广安市": 0, "达州市": 0, "雅安市": 0, "巴中市": 0, "资阳市": 0, "阿坝藏族羌族自治州": 0, "甘孜藏族自治州": 0, "凉山彝族自治州": 0}},
    "新疆": {id: "xinjiang", cities: {"乌鲁木齐市": 0, "克拉玛依市": 0, "吐鲁番市": 0, "昌吉回族自治州": 0, "博尔塔拉蒙古自治州": 0, "巴音郭楞蒙古自治州": 0, "阿克苏地区": 0, "克孜勒苏柯尔克孜自治州": 0, "喀什地区": 0, "和田地区": 0, "伊犁哈萨克自治州": 0, "塔城地区": 0, "阿勒泰地区": 0, "石河子市": 0, "阿拉尔市": 0, "图木舒克市": 0, "五家渠市": 0, "北屯市": 0, "铁门关市": 0, "双河市": 0, "可克达拉市": 0, "昆玉市": 0, "哈密市": 0}},
    "台湾": {id: "taiwan", cities: {"高雄市": 0, "屏东县": 0, "台南市": 0, "新竹市": 0, "新竹县": 0, "宜兰县": 0, "基隆市": 0, "苗栗县": 0, "台北市": 1, "新北市": 1, "桃园市": 0, "彰化县": 0, "嘉义县": 0, "嘉义市": 0, "花莲县": 0, "南投县": 0, "台中市": 0, "云林县": 0, "台东县": 0, "澎湖县": 0, "金门县": 0, "连江县": 0, "中国属钓鱼岛": 0}},
}