// [Fate Stay Everyday]

/*
 * 注意：本程序中的“随机”都是伪随机概念，以当前的天为种子。
 */

function random(dayseed, indexseed) {
	var n = dayseed % 11117;
	for (var i = 0; i < 100 + indexseed; i++) {
		n = n * n;
		n = n % 11117;   // 11117 是个质数
	}
	return n;
}

var today = new Date();

var iday = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

//var idate = iday.substring(3,7);
//var idate = (today.getMonth() + 1) * 100 + today.getDate();

//var idate = new String(iday);
//idate = idate.substr(3,7);

//var idate = String(today.getMonth()).join(String(today.getDate()));

//var idate_orig = new String(iday);
//var idate = idate_orig.substr(3,4);

var iday_str = iday.toString();
idate=iday_str.substr(4);

//document.write(idate);

// 一周有几天
var weeks = [
	"日",
	"一",
	"二",
	"三",
	"四",
	"五",
	"六"
];

// 推荐网址
var web_urls = [
	
	// 购物网站
	"<a href='https://www.taobao.com/'>www.taobao.com</a><sup>[淘]你喜欢</sup>",
	"<a href='https://www.amazon.cn/'>www.amazon.cn</a><sup>亚马逊</sup>",
	
	// 英语学习相关
	"<a href='http://www.iciba.com/'>www.iciba.com</a><sup>爱词霸·金山</sup>",
	
	// 小说
	"<a href='https://www.qidian.com/'>www.qidian.com</a><sup>起点中文网</sup>",
	
	// 知识
	"<a href='https://www.zhihu.com/'>www.zhihu.com</a><sup>有问题，上知乎</sup>",
	
	// 搜索引擎
	"<a href='http://www.baidu.com'>www.baidu.com</a><sup>百度一下，你就知道</sup>",
	"<a href='http://www.google.com'>www.google.com</a><sup>谷歌</sup>",
	
	// 监控
	"<a href='https://www.zabbix.com/'>www.zabbix.com</a><sup>zabbix</sup>",
	
	// 大数据 / Cloudera
	"<a href='https://www.cloudera.com/'>www.cloudera.com</a><sup>The enterrise data cloud company</sup>",
	
	// Oracle
	"<a href='https://www.oracle.com/index.html'>www.oracle.com</a><sup>甲骨文：全球最大独立软件服务商</sup>",
	
	// MySQL
	"<a href='https://dev.mysql.com/'>dev.mysql.com</a><sup>数据库：MySQL</sup>",
	
	// Percona
	"<a href='https://www.percona.com/'>www.percona.com</a><sup>Percona</sup>",
	
	// Python
	"<a href='https://www.python.org/'>www.python.org</a><sup>Python</sup>",
	
	// Git
	"<a href='https://github.com/'>www.github.com</a><sup>Github</sup>",
	
	// Hadoop
	"<a href='http://hadoop.apache.org/'>hadoop.apache.org</a><sup>Hadoop</sup>",
	
	// 二次元
	"<a href='https://www.bilibili.com/'>www.bilibili.com</a><sup>哔哩哔哩</sup>",
	"<a href='https://zh.moegirl.org/Mainpage'>zh.moegirl.org</a><sup>萌娘[moegirl]百科</sup>",
	
	// 默认
	"天高任鸟飞,海阔任鱼游,网络很大,随意浏览吧."
	
];

// 方位几何
var directions = [
	// 正常方位
	"北方","东北方","东方","东南方","南方","西南方","西方","西北方",
	
	// 狙击手
	"零点钟方向",
	"一点钟方向",
	"两点钟方向",
	"三点钟方向",
	"四点钟方向",
	"五点钟方向",
	"六点钟方向",
	"七点钟方向",
	"八点钟方向",
	"九点钟方向",
	"十点钟方向",
	"十一点钟方向",
	"十二点钟方向",
	
	// 神秘主义
	"不可知之地",
	
	// 游戏：原神
	"稻妻<sup>米哈游·原神</sup>",
	
	// 天文方位
	"半人马座α星（Alpha Centauri）",
	
	// 未分类
	//"[and so on.]"
	
];

// 特别的日子 - 按日期先后排序
var specials = [
	{date:'0214', type:'bad', name:'情人节', description:'2（二得）1（要）4（死）/ 傻的可爱，.. 大概就是这么个节日'},
	
	{date:'0307', type:'bad', name:'按运势行事咯', description:'上年纪了，就不那么理智了，就信命了。'},
	
	{date:'0308', type:'good', name:'女生节 / 女王节', description:'你的钱包还好嘛？'},
	
	{date:'0308', type:'good', name:'Captain Marvel', description:'更高、更远、更快，.. [在【2019年】的这天，惊奇队长第一次走到了历史的舞台上，在漫威宇宙中打响了自己的名号]'},
	
	{date:'0308', type:'bad', name:'熊猫TV/破产清算<sup>2019</sup>', description:'不知什么时候开始不努力的人有了一个很洋气的说法：很佛，于是很佛的人最后真的上了西天。'},
	
	{date:'0314',type:'bad',name:'白色情人节',description:'为了秀恩爱，情侣们什么都做得出来'},
	
	{date:'0311', type:'good', name:'F5收购Nginx', description:'F5加Nginx为客户提供了新的端到端的应用服务。[Gus Robertson/Nginx CEO]'},
	
	{date:'0315', type:'good', name:'消费者维权日', description:'这一天消费者们才真正感受到了【做上帝】的快乐'},
	
	{date:'0501', type:'good', name:'劳动节', description:'劳动人民最光荣。'},
	
	{date:'0601', type:'good', name:'儿童节', description:'没有什么比上了年纪，但是还有一颗童心更幸运的了。'},
	
	{date:'0901', type:'good', name:'一年一度开学日', description:'以前上学的时候真的是无忧无虑啊。'},
	
	{date:'0910', type:'good', name:'教师节', description:'你还记得教过你的那些老师吗？'},
	
	{date:'0910', type:'good', name:'马云卸任阿里巴巴', description:'一个时代的传奇。'},
	
	{date:'1001', type:'good', name:'国庆节', description:'我爱北京天安门，天安门前太阳升。'},
	
	{date:'1111', type:'good', name:'双十一', description:'阿里巴巴<sup>马云[Jack Ma]</sup>全球购物盛典。'}
	
];

// 趋势
var trends = [
	
	// 基础科学
	"逻辑学",
	"控制论<sup>(旧)三论 / 边缘科学</sup>",
	"系统论<sup>(旧)三论 / 边缘科学</sup>",
	"信息论<sup>(旧)三论 / 边缘科学</sup>",
	"耗散结构论<sup>(新)三论 / DSC论 / 边缘科学</sup>",
	"协同论<sup>(新)三论 / DSC论 / 边缘科学</sup>",
	"突变论<sup>(新)三论 / DSC论 / 边缘科学</sup>",
	
	// 谷歌的人工智能
	"AlphaGo<sup>击败人类顶尖[围棋]选手</sup>",
	"AlphaStar<sup>击败人类顶尖[电竞]选手</sup>",
	"OpenAI / GPT-2<sup>人工智能[作家]</sup>",
	"Google Gmail / Smart Compose<sup>谷歌智能写作工具</sup>",
	
	// 宗教 / 佛
	"中阴",
	"藏密",
	"八识心王",
	
	// 变局
	"范式转移",
	
	// 计算机 - 开发
	"递归选择",
	"正则表达式",
	"lambda expression",
	"lambda abstraction / Lambda抽象",
	
	// 生命科学领域
	"酸味感受器",
	"人体味觉拼图",
	"人类基因组计划",
	"蛋白质【OTOP1】",
	"基因组",
	"氢离子感受器",
	"味觉系统",
	"嗅觉系统",
	"脂肪肝",
	"非酒精性脂肪肝",
	"抗生素【亚胺培南】",
	"克雷伯氏肺炎菌（HiAlc Kpn）",
	"肿瘤劫持神经系统",
	"神经系统",
	"肿瘤细胞的复制能力",
	"肿瘤细胞的生存能力",
	"血管系统",
	"免疫系统",
	"肿瘤细胞的分裂",
	"肿瘤细胞的繁殖",
	"肿瘤细胞的转移",
	"神经突触",
	"100万亿个计算节点的三维信号网络",
	"神经信号传递",
	"神经细胞的接触界面",
	"化学信号",
	"电信号",
	"突触结构",
	"劫持神经信号",
	
	// 合成生物学
	"合成生物学",
	"人造牛肉",
	"Impossible Foods<sup>不可能食物</sup>",
	"Beyond Meat<sup>超越肉</sup>",
	"基因元件",
	"资源稀缺",
	"Living Foundry<sup>生命铸造厂计划</sup>",
	"通用生物反应器",
	
	// 规范伦理学 - 价值取向
	"功利主义<sup>规范伦理学の价值趋向</sup>",
	"义务论<sup>规范伦理学の价值趋向</sup>",
	"利己主义<sup>规范伦理学の价值趋向</sup>",
	"情感主义<sup>规范伦理学の价值趋向</sup>",
	"直觉主义<sup>规范伦理学の价值趋向</sup>",
	"德性论<sup>规范伦理学の价值趋向</sup>",
	"契约论<sup>规范伦理学の价值趋向</sup>",
	"神圣命令论<sup>规范伦理学の价值趋向</sup>",
	"电车难题<sup>思维实验</sup>",
	
	// 天文学
	"科洛7b<sup>令人恐惧的宇宙天体</sup>",
	"半人马座α星（Alpha Centauri）<sup>令人恐惧的宇宙天体</sup>",
	"比邻星<sup>令人恐惧的宇宙天体</sup>",
	"格利泽436b<sup>令人恐惧的宇宙天体</sup>",
	"巨蟹座55e<sup>令人恐惧的宇宙天体</sup>",
	"WASP-12b<sup>令人恐惧的宇宙天体</sup>",
	"TRAPPIST-1b<sup>令人恐惧的宇宙天体</sup>",
	"磁星（Magnetar）<sup>令人恐惧的宇宙天体 / 人类已知宇宙最强大的磁场</sup>",
	"磁星<sup>中子星的一种特殊形态</sup>星震（starquake）<sup>令人恐惧的宇宙天体</sup>",
	"[磁星]SGR 0418+5729<sup>令人恐惧的宇宙天体</sup>",
	
	// 宇宙现象
	"KBC大空洞(KBC Void)",
	"柯伊伯带",
	"星际介质(Voyager - Mission Status)",
	"奥尔特云内侧(Catalog Page for PIA17046)",
	"死亡的古老星系-【ZF-COSMOS-20115】",
	"矩形星系-【LEDA 74886】",
	"五体恒星系统",
	"高光度蓝变星【海山二】",
	"理论的盲区【HD 87646】",
	"红方块星云【MWC922】",
	"活跃的雪茄星系【M82星系】",
	"光之中子星【磁星】<sup>Magnetar</sup>",
	"三核怪物星系【COSMOS-AzTEC-1】",
	"史隆长城（Sloan Great Wall）<sup>直径达可观测宇宙的[1/60]的星系巨墙[Roughly spans 1/60th the diameter of the observable universe.]</sup>",
	"巨引源（The Great Attractor）",
	"『冷焊』（Cold Welding）",
	"光锥",
	"室女座超星系团",
	"拉尼亚凯亚超星系团",
	"双鱼-鲸鱼座超星系团复合体",
	"牧夫空洞",
	"武仙-北冥座长城",
	
	// 科幻
	
	// 流浪地球
	"行星发动机",
	"“流浪地球”计划",
	
	// 三体 文明
	"歌者文明",
	"归零者文明",
	"四维文明",
	"三体文明",
	"魔眼文明",
	
	// 三体 术语
	"低维展开<sup>三体</sup>",
	"微观蚀刻<sup>三体</sup>",
	"降维打击<sup>三体</sup>",
	"二向箔<sup>三体</sup>",
	"光粒<sup>三体</sup>",
	"三向箔<sup>三体</sup>",
	"黑暗森林法则<sup>三体</sup>",
	"智子<sup>三体</sup>",
	"水滴<sup>三体</sup>",
	"规则战争<sup>三体</sup>",
	"曲翘点<sup>三体</sup>",
	"魔戒<sup>三体</sup>",
	
	// 文明 / 社会
	"第七等级宇宙文明",
	"卡尔达舍夫等级<sup>Kardashev scale</sup>",
	"母星文明",
	"行星系文明",
	"恒星系文明",
	
	// 猜想 / 悖论
	"费米悖论<sup></sup>",
	"霍奇猜想",
	
	// 时间
	"时间晶体",
	"时间对称性",
	
	// 等离子
	"等离子场",
	
	// 材料科学
	"超导体",
	
	// 科技
	// -- 计算机科学
	"生物计算",
	"光子计算机",
	"质子计算机",
	
	// -- 生命科学
	"人类基因图谱",
	"基因<sup>Gene</sup>",
	"模因<sup>Meme</sup>",
	"自私的Meme",
	
	// -- 神经学 / 脑科学
	"边缘系统",
	"爬行脑",
	
	// -- 理论物理学
	"曲速引擎<sup>Warp Drive</sup>",
	"宇宙墙<sub>关于空间与宇宙，你所知的一切可能都是假的，你正位于一个巨大的谜团（可能是阴谋）之中。</sub>",
	"暗物质",
	"瞎搅和的系统熵",
	
	// 博弈论
	"纳什均衡（Nash equilibrium）",
	
	// 人工智能
	"AI<sup>人工智能</sup>",
	"NLP：自然语言编程",
	"人工生命",
	"细胞自动机",
	"遗传算法",
	"句法归纳",
	"Hopfield网络",
	"图模型",
	"科德尔不完备定理",
	"低维嵌入",
	"心智扩展",
	"元认知",
	"元逻辑",
	"社会机器",
	"外记忆",
	"Kolmogorov-Chaitin复杂性",
	"不可计算实数神经网络",
	"无免费午餐定理",
	"马尔科夫决策过程MDP",
	"循环神经网络",
	"自动定理证明",
	"卷积滤波",
	"LDA",
	"感知器",
	"KNN学习",
	"随机森林",
	"核方法",
	"高斯分布",
	"分布式学习",
	"自然语言处理",
	"图灵测试",
	"奇点",
	"向量机",
	
	// 计算方法
	"量子计算",
	"超递归可枚举计算",
	"边缘计算",
	
	// 量子力学
	"本征矢",
	
	// 状态
	"逐渐远离人类",
	
	// 物质的形态
	"固态",
	"液态",
	"气态",
	"等离子态",
	"夸克胶子混合态",
	"超流态",
	"费米子凝聚态",
	"波色爱因斯坦凝聚态",
	"超固态",
	"简并态",
	"中子态",
	"超导态",
	"凝聚态",
	"非晶态",
	"辐射场态",
	"液晶态",
	"量子态",
	"超离子态",
	"反物质态",
	
	// 冰的形态
	"普通冰（Ice I）<sup>六角冰 / 冰的固态阶段</sup>",
	"冰二<sup>冰的固态阶段</sup>",
	"冰三<sup>冰的固态阶段</sup>",
	"冰四<sup>冰的固态阶段</sup>",
	"冰五<sup>冰的固态阶段</sup>",
	"冰六<sup>冰的固态阶段</sup>",
	"冰七（Ice VII）<sup>冰的立方晶系结晶 / 冰的固态阶段</sup>",
	"冰八<sup>冰的固态阶段</sup>",
	"冰九<sup>冰的固态阶段</sup>",
	"冰十<sup>冰的固态阶段</sup>",
	"冰十一<sup>冰的固态阶段</sup>",
	"冰十二<sup>冰的固态阶段</sup>",
	"冰十三<sup>冰的固态阶段</sup>",
	"冰十四<sup>冰的固态阶段</sup>",
	"冰十五<sup>冰的固态阶段</sup>",
	"冰十六<sup>冰的固态阶段</sup>",
	"冰十八<sup>冰的固态阶段</sup>",
	"冰十八<sup>超离子冰 / 18冰晶结构 / 冰的固态阶段</sup>",
	"刚性的氧笼",
	"氢原子自由溢出",
	
	// 科学 - 常量与定量
	
	// -- 时间单位
	"太阳纪",
	
	// -- 温度
	"绝对零度",
	
	// -- 速度
	"第一宇宙速度<sup>近地面轨道的环行速度</sup>",
	"第二宇宙速度<sup>脱离地球引力的初速度</sup>",
	"第三宇宙速度<sup>脱离太阳系的速度</sup>",
	"第四宇宙速度<sup>以太阳系为起点脱离银河系的速度</sup>",
	
	// 硅基生命
	"硅基生命",
	"欢迎加入【硅基】",
	
	// 碳基生命
	"碳基生命",
	"欢迎加入【碳基】",
	
	// 空间
	"完美空间",
	
	// 数学
	"费马大定理",
	"群论",
	"拉普拉斯变换",
	"多变量微积分",
	"离群性",
	
	// 区块链
	"Block Chain<sup>区块链</sup>",
	
	// 元宇宙
	"Metaverse<sup>元宇宙</sup>",
	
	// 未分类
	"[and so on.]"
	
];

// 轮值神主
var god = [
    
    // Bilibili，UP主播
    "优颖酱<sup>Bilibili（B站）UP主</sup>",
    "椭奇<sup>Bilibili（B站）UP主</sup>",
    "小巫<sup>Bilibili（B站）UP主</sup>",
    "糖小V<sup>Bilibili（B站）UP主</sup>",
	
	// 圣杯战争
	"卫宫切嗣（圣杯战争）",
	"伊莉雅（圣杯战争）",
	"赫拉克勒斯（圣杯战争·七从者）<sup>Berserker/十二试炼（God Hands）</sup>",
	"哈桑·萨巴赫（圣杯战争·七从者）<sup>Assassin/妄想心音（Zabarneya）</sup>",
	"美狄亚（圣杯战争·七从者）<sup>Caster/可破万法之符（Rule Breaker）</sup>",
	"美杜莎（圣杯战争·七从者）<sup>Rider/自我封印·暗黑神殿（Break Gorgon）/骑英之僵（Bellerophon）/他者封印·鲜血神殿（Blood Fort · Andromeda）</sup>",
	"库丘林（圣杯战争·七从者）<sup>Lancer/刺穿死棘之枪（Gea Blog）</sup>",
	"吉尔伽美什（圣杯战争·七从者）<sup>Archer/王之财宝（Gate of Babylon）/天地开辟乖离之星（Enuma Elish）</sup>",
	"阿尔托利亚·潘德拉贡（圣杯战争·七从者）<sup>Saber/风王结界（Invisible Air）/遥远的理想乡（Avalon）/誓约胜利之剑（Excalibur）</sup>",
	"言峰绮礼（圣杯战争）",
	"间桐樱（圣杯战争）",
	"伊利亚斯菲尔·冯·爱因斯贝伦（圣杯战争）",
	"远坂凛（圣杯战争）",
	"卫宫士郎（圣杯战争）",
	
	// （动漫）哪吒：魔童降临
	"敖丙（龙王三太子）",
	"哪吒",
	
	// 小说，将夜
	"屠夫<sup>将夜：永夜幸存者</sup>",
	"酒徒<sup>将夜：永夜幸存者</sup>",
	"颜瑟<sup>将夜：[南门]天下第一神符师/惊神阵主人</sup>",
	"陈某<sup>将夜：[道门]知守观·观主</sup>",
	"昊天<sup>将夜：[道门]昊天世界·唯一神</sup>",
	"陈皮皮<sup>将夜：[书院]十二先生/天下溪神指</sup>",
	"王持<sup>将夜：[书院]十一先生</sup>",
	"西门不惑<sup>将夜：[书院]十先生</sup>",
	"北宫未央<sup>将夜：[书院]八先生</sup>",
	"木柚<sup>将夜：[书院]七先生</sup>",
	"铁匠<sup>将夜：[书院]六先生</sup>",
	"宋镰<sup>将夜：[书院]五先生</sup>",
	"范悦<sup>将夜：[书院]四先生</sup>",
	"余帘<sup>将夜：[书院]三先生[魔宗]宗主·二十三年蝉</sup>",
	"君陌<sup>将夜：[书院]二先生</sup>",
	"李慢慢<sup>将夜：[书院]大先生</sup>",
	"轲浩然<sup>将夜：[书院]浩然气</sup>",
	"夫子<sup>将夜：[书院]无矩</sup>",
	"桑桑<sup>将夜：昊天/冥王之女</sup>",
	"宁缺<sup>将夜：[书院]十三先生/天下行走</sup>",
	
	// 脱口秀
	"池子<sup>脱口秀</sup>",
	"李诞<sup>脱口秀</sup>",
	"张博洋<sup>脱口秀</sup>",
	"呼兰<sup>脱口秀</sup>",
	"思文<sup>脱口秀</sup>",
	"王建国<sup>脱口秀</sup>",
	
	// 动物 - 狗
	"哈士奇<sup>狗</sup>",
	"拉斯维加<sup>狗</sup>",
	"边境牧羊犬<sup>狗</sup>",
	"泰迪<sup>狗</sup>",
	
	// 动漫 - 其他人物、角色
	"多啦A梦",
	"Hello Kitty",
	"米老鼠",
	"唐老鸭",
	"史努比",
	
	// 演艺圈 - 中国
	
	// 男
	"沈腾<sup>喜剧之王</sup>",
	"潘玮柏",
	"周杰伦",
	"金志文",
	"王力宏",
	"林俊杰",
	"张杰",
	"胡彦斌",
	"郭富城（Aaron Kwok）",
	"黄立行",
	"苏有朋",
	"胡歌",
	"黄秋生",
	"张鲁一",
	"王劲松",
	"邓超",
	"成龙",
	
	// 女
	"双笙（古风歌手）",
	"迪丽热巴（Dilraba）",
	"杨超越",
	"赵丽颖",
	"林逸欣[Shara Lin]",
	"李一桐<sup>偶像 / 女神 / 完美女友</sup>",
	"佟亚丽",
	"王丽坤",
	"戚薇",
	"江疏影",
	"唐嫣",
	
	// -- 火箭少女101 / 创造101
	"傅菁",
	"徐梦洁",
	"李紫婷",
	"杨芸晴",
	"张紫宁",
	"赖美云",
	"吴宣仪",
	
	// 鬼灭之刃
	
	// -- 鬼杀队
	"灶门炭治郎[灶门 炭治郎/Kamado Tanjirou]<sup>水之呼吸</sup>",
	"灶门祢豆子[灶门 祢豆子/Kamado Nezuko]<sup>血鬼术·爆血</sup>",
	"我妻善逸[我妻 善逸/Agatsuma Zenitsu]<sup>雷之呼吸</sup>",
	"嘴平伊之助[嘴平 伊之助/Hashibira Inosuke]<sup>兽之呼吸</sup>",
	"富冈义勇[冨冈 义勇/Tomioka Giyuu]<sup>水之呼吸 / 水柱</sup>",
	"蝴蝶忍[胡蝶 しのぶ/Kochou Shinobu]<sup>虫之呼吸 / 虫柱</sup>",
	"炼狱杏寿郎[炼狱 杏寿郎/Rengoku Kyoujurou]<sup>炎之呼吸 / 炎柱</sup>",
	"宇髄天元[宇髄 天元/Uzui Tengen]<sup>音之呼吸 / 音柱</sup>",
	"甘露寺蜜璃[甘露寺 蜜璃/Kanroji Mitsuri]<sup>恋柱</sup>",
	"悲鸣屿行冥[悲鸣屿 行冥/Himejima Kyoumei]<sup>岩柱</sup>",
	"时透无一郎[时透 无一郎/Tokitou Muichirou]<sup>霞柱</sup>",
	"伊黑小芭内[伊黒 小芭内/Iguro Obanai]<sup>蛇柱</sup>",
	"不死川实弥[不死川 実弥/Shinazugawa Sanemi]<sup>风柱</sup>",
	"锖兔（锖兎/Sabito）",
	"真菰（真菰/Makomo）",
	
	// -- 鬼
	"鬼舞辻无惨（鬼舞辻 无惨/Kibutsuji Muzan）<sup>鬼灭之刃·初鬼</sup>",
	"猗窝座（猗窝座/Akaza）[破坏]<sup>鬼灭之刃·十二鬼月（上弦之参）</sup>",
	"妓夫太郎（妓夫太郎/Gyuutarou)<sup>鬼灭之刃·十二鬼月</sup>",
	"堕姬（堕姫/Daki）<sup>鬼灭之刃·十二鬼月（上弦之陆）</sup>",
	"魇梦（魇梦/Enmu）<sup>鬼灭之刃·十二鬼月（下弦之壱）</sup>",
	"累（累/Rui）<sup>鬼灭之刃·十二鬼月（下弦之伍）</sup>",
	"响凯（响凯/Kyougai）<sup>鬼灭之刃·十二鬼月（前下弦之六）</sup>",
	
	// 斗破苍穹
	"玄黄炎<sup>斗破苍穹：[异火]</sup>",
	"万兽灵火<sup>斗破苍穹：[异火]</sup>",
	"六道轮回炎<sup>斗破苍穹：[异火]</sup>",
	"龙凤焱<sup>斗破苍穹：[异火]</sup>",
	"青莲地心火<sup>斗破苍穹：[异火]</sup>",
	"风雷怒焱<sup>斗破苍穹：[异火]</sup>",
	"火山石焰<sup>斗破苍穹：[异火]</sup>",
	"火云水焱<sup>斗破苍穹：[异火]</sup>",
	"陨落心炎<sup>斗破苍穹：[异火]</sup>",
	"龟灵地火<sup>斗破苍穹：[异火]</sup>",
	"九龙雷罡火<sup>斗破苍穹：[异火]</sup>",
	"骨灵冷火<sup>斗破苍穹：[异火]</sup>",
	"九幽风炎<sup>斗破苍穹：[异火]</sup>",
	"三千焱炎火<sup>斗破苍穹：[异火]</sup>",
	"红莲业火<sup>斗破苍穹：[异火]</sup>",
	"九幽金祖火<sup>斗破苍穹：[异火]</sup>",
	"八荒破灭焱<sup>斗破苍穹：[异火]</sup>",
	"生灵之焱<sup>斗破苍穹：[异火]</sup>",
	"金帝焚天炎<sup>斗破苍穹：[异火]</sup>",
	"净莲妖火<sup>斗破苍穹：[异火]</sup>",
	"虚无吞炎<sup>斗破苍穹：[异火]</sup>",
	"帝炎<sup>斗破苍穹：[异火]</sup>",
	"萧炎<sup>斗破苍穹：炎帝</sup>",
	
	// 一人之下
	"陆瑾<sup>一人之下：[八绝技]通天箓</sup>",
	"张之维（号：天通）<sup>一人之下：十佬·天师 | 绝顶</sup>",
	"窦梅<sup>一人之下：全性·四张狂/穿肠毒</sup>",
	"高宁<sup>一人之下：全性·四张狂/雷烟炮</sup>",
	"沈冲<sup>一人之下：全性·四张狂/祸根苗</sup>",
	"夏禾<sup>一人之下：全性·四张狂/刮骨刀</sup>",
	"龚庆<sup>一人之下：全性·代掌门</sup>",
	"端木瑛<sup>一人之下：[八绝技]双全手</sup>",
	"谷畸亭<sup>一人之下：[八绝技]大罗洞观</sup>",
	"阮丰<sup>一人之下：[八绝技]六库仙贼</sup>",
	"马本在<sup>一人之下：[八绝技]神机百炼</sup>",
	"周圣<sup>一人之下：[八绝技]风后奇门</sup>",
	"郑子布<sup>一人之下：[八绝技]通天箓</sup>",
	"风天养<sup>一人之下：[八绝技]拘灵遣将</sup>",
	"无根生<sup>一人之下：全性·掌门</sup>",
	"张怀义（张锡林）<sup>一人之下：[八绝技]炁体源流</sup>",
	"冯宝宝<sup>一人之下：[八绝技]永生</sup>",
	"张楚岚<sup>一人之下：[八绝技]炁体源流 | 雷法[阳]</sup>",
	
	// 火影忍者
	"漩涡鸣人<sup>火影忍者</sup>",
	"宇智波 鼬<sup>火影忍者</sup>",
	"宇智波 佐助<sup>火影忍者</sup>",
	"宇智波 斑<sup>火影忍者</sup>",
	"旗木 卡卡西<sup>火影忍者</sup>",
	"我爱罗<sup>火影忍者</sup>",
	
	// 甲铁城的卡巴内瑞
	"生驹<sup>甲铁城的卡巴内瑞</sup>",
	"无名<sup>甲铁城的卡巴内瑞</sup>",
	"四方川菖蒲<sup>甲铁城的卡巴内瑞</sup>",
	"九智来栖<sup>甲铁城的卡巴内瑞</sup>",
	"逞生<sup>甲铁城的卡巴内瑞</sup>",
	"鳅<sup>甲铁城的卡巴内瑞</sup>",
	"侑那<sup>甲铁城的卡巴内瑞</sup>",
	"天鸟美马<sup>甲铁城的卡巴内瑞</sup>",
	"荒河吉备土<sup>甲铁城的卡巴内瑞</sup>",
	"巢刈<sup>甲铁城的卡巴内瑞</sup>",
	
	// 腾讯
	"张小龙<sup>[微信]之父</sup>",
	"姚晓光<sup>[王者荣耀]之父</sup>",
	"马化腾",
	
	// 小米
	"雷军",
	
	// 阿里
	"马云<sup>财神</sup>",
	
	// 经济学
	"狄更斯",
	"黑格尔",
	"亚当斯密",
	"巴菲特<sup>股神</sup>",
	
	// 钢之炼金术师
	"霍恩海姆·艾尔利克（Hohenheim Elric）<sup>钢炼：光之霍恩海姆/行走的贤者之石</sup>",
	"温莉·洛克贝尔（Winry Rockbell）<sup>钢制炼金术师</sup>",
	"阿尔冯斯·艾尔利克（Alphonse Elric）<sup>钢制炼金术师</sup>",
	"爱德华·艾尔利克（Edward Elric）<sup>钢制炼金术师</sup>",
	
	// 神话 - 中国文化
	"杜康<sup>万酒之源</sup>",
	
	// 历史 - 中国文化
	"李白<sup>酒仙</sup>",
	"孔子",
	"庄周",
	"鬼谷子",
	
	// 神话 - 国外文化
	"忒希斯（Thesis）<sup>起源创造女神</sup>",
	"赫玛墨涅（Heimarmene）<sup>创力命运女神/因果</sup>",
	"阿南刻（Anance）<sup>定数女神/超神</sup>",
	"塔那托斯 (Thanatos)<sup>死神</sup>",
	"潘<sup>象征：万物/所有</sup>",
	"卡俄斯（Chaos）<sup>无边混沌</sup>",
	"阿刻戎（Akheron）<sup>冥河：痛苦</sup>",
	"科基托斯（Cocytus）<sup>冥河：哀叹</sup>",
	"里忒（Lethe）<sup>冥河：遗忘</sup>",
	"皮里佛勒戈同（Phlegethon）<sup>冥河：火焰</sup>",
	"赫尔墨斯（Hermes）<sup>奥林匹斯十二神：众神使者</sup>",
	"福柏（Phobe）<sup>泰坦十二神：光辉/神示</sup>",
	"忒弥斯（Themis）<sup>泰坦十二神：法律/正义</sup>",
	"谟涅摩绪涅（Mnemosyne）<sup>泰坦十二神：记忆</sup>",
	"许珀里翁（Hyperion）<sup>泰坦十二神：光明</sup>",
	"忒希斯（Thesis）<sup>起源创造女神</sup>",
	"赫玛墨涅（Heimarmene）<sup>创力命运女神/因果</sup>",
	"阿南刻（Anance）<sup>定数女神/超神</sup>",
	"斯堤克斯（Styx）<sup>冥河：仇恨</sup>",
	"塔那托斯 (Thanatos)<sup>死神</sup>",
	"潘<sup>象征：万物/所有</sup>",
	"卡俄斯（Chaos）<sup>无边混沌</sup>",
	"柯罗诺斯<sup>永恒时间之神</sup>",
	"赫莫拉（Hemera）<sup>白昼神</sup>",
	"埃忒耳（Aether）<sup>太空神</sup>",
	"堤丰（Typhon）<sup>众魔之父</sup>",
	"乌拉诺斯（Uranus）<sup>天神</sup>",
	"蓬托斯（Pontus）<sup>海神</sup>",
	"塔耳塔洛斯 (Tartarus)<sup>地狱深渊神</sup>",
	"山神（Mountains）",
	"厄洛斯（Eros）<sup>爱神</sup>",
	"尼克斯 (Nyx)<sup>夜神</sup>",
	"厄瑞玻斯 (Erebus）<sup>黑暗神</sup>",
	"塔耳塔洛斯 (Tartarus)<sup>地狱深渊神</sup>",
	"盖亚（Gaia）<sup>大地女神</sup>",	
	"赫西俄德（Hesiod）<sup>希腊诗人：约公元前8世纪－7世纪</sup>",
	"赫多奈(Hedone)<sup>女神：快乐/享受/愉悦</sup>",
	"狄俄尼索斯（Dionysus）<sup>葡萄酒神/狂乐之神</sup>",
	
	// 我的英雄学院
	"绿谷出久<sup>我的英雄学院</sup>",
	"八木俊典·欧尔麦特<sup>我的英雄学院</sup>",
	"爆豪胜己<sup>我的英雄学院</sup>",
	"八百万百<sup>我的英雄学院</sup>",
	"叶隐透<sup>我的英雄学院</sup>",
	"轰焦冻<sup>我的英雄学院</sup>",
	"All·For·One<sup>我的英雄学院</sup>",
	"黑帮虎鲸<sup>我的英雄学院</sup>",
	"Over Hole<sup>我的英雄学院</sup>",
	"上鸣电气<sup>我的英雄学院</sup>",
	"丽日御茶子<sup>我的英雄学院</sup>",
	"饭田天哉<sup>我的英雄学院</sup>",
	"蛙吹梅雨<sup>我的英雄学院</sup>",
	"切岛锐儿郎<sup>我的英雄学院</sup>",
	"叶隐透<sup>我的英雄学院</sup>",
	
	// 小说 - 哈利波特
	"哈利·波特(Harry James Potter)<sup>JK.罗琳：哈利波特</sup>",
	"赫敏·格兰杰(Hermione Jean Granger)<sup>JK.罗琳：哈利波特</sup>",
	"阿不思·邓布利多(Albus Percival Wulfric Brian Dumbledore)<sup>JK.罗琳：哈利波特</sup>",
	"伏地魔(Lord Voldemort)<sup>JK.罗琳：哈利波特</sup>",
	"汤姆·马沃罗·里德尔(Tom Marvolo Riddle)[后称:伏地魔]<sup>JK.罗琳：哈利波特</sup>",
	
	// 理论物理学家
	"艾尔伯特·爱因斯坦",
	"史蒂芬·霍金",
	"薛定谔",
	
	// 哲学家
	"亚里士多德",	
	
	// 小说 - 盗墓笔记
	"张起灵<sup>盗墓笔记</>",	
	"吴三省<sup>盗墓笔记</>",	
	"霍玲<sup>盗墓笔记</>",	
	"陈皮阿四<sup>盗墓笔记</>",	
	"齐羽<sup>盗墓笔记</>",	
	"霍秀秀<sup>盗墓笔记</>",	
	"阿宁<sup>盗墓笔记</>",	
	"解子扬<sup>盗墓笔记</>",	
	"吴二白<sup>盗墓笔记</>",	
	"霍仙姑<sup>盗墓笔记</>",
	"吴邪<sup>盗墓笔记</>",
	"王胖子<sup>盗墓笔记</>",
	"吴三省[老九门吴家]<sup>盗墓笔记</>",
	"吴老狗[老九门吴家]<sup>盗墓笔记</>",
	"吴一穷[老九门吴家]<sup>盗墓笔记</>",
	"解雨臣[老九门解家]<sup>盗墓笔记</>",
	"陈文锦<sup>盗墓笔记</>",
	"解连环<sup>盗墓笔记</>",
	
	// 漫威宇宙
	"惊奇队长<sup>漫威宇宙</sup>",
	"钢铁侠<sup>漫威宇宙</sup>",
	"奇异博士·至尊法师<sup>漫威宇宙</sup>",
	"古一·至高法师<sup>漫威宇宙</sup>",
	"神奇女侠<sup>漫威宇宙</sup>",
	"灭霸<sup>漫威宇宙</sup>",
	"猩红女巫<sup>漫威宇宙</sup>",
	"尚气<sup>漫威宇宙</sup>",
	
	// 黑袍纠察队
	"祖国人<sup>黑袍纠察队</sup>",
	"火车头<sup>黑袍纠察队</sup>",
	"透明人<sup>黑袍纠察队</sup>",
	"奇迹女侠<sup>黑袍纠察队</sup>",
	"星光<sup>黑袍纠察队</sup>",
	
	// 游戏 - 王者荣耀
	"兰陵王<sup>王者峡谷</sup>",
	"后裔<sup>王者峡谷</sup>",
	"亚瑟<sup>王者峡谷</sup>",
	"孙尚香<sup>王者峡谷</sup>",
	"妲己<sup>王者峡谷</sup>",
	"貂蝉<sup>王者峡谷</sup>",
	"百里守约<sup>王者峡谷</sup>",
	"百里玄策<sup>王者峡谷</sup>",
	"鲁班七号<sup>王者峡谷</sup>",
	"鲁班大师<sup>王者峡谷</sup>",
	"马可波罗<sup>王者峡谷</sup>",
	"云缨<sup>王者峡谷</sup>",
	
	// 葡萄酒大师
	
	// 张裕
	"Gerard Fagnoni[哥哈迪·法格纳尼]<sup>张裕爱斐堡国际旧账首席酿酒师</sup>",
	"John Umberto Salvi[约翰·萨尔檀]<sup>世界葡萄酒大师</sup>",
	"Jiming Li[李记明]<sup>OIV等国际三大权威组织担任国际评酒委员</sup>",
	"Robert Tinlot[罗伯特·丁洛特]<sup>国际葡萄与葡萄酒组织（OIV）名誉主席</sup>",
	
	// 宗教
	
	// 武当
	"张三丰",
	
	// 道家
	"彭祖<sup>烹饪鼻祖/气功祖师/长寿始祖</sup>",
	
	// 佛
	"拘楼孙佛",
	"拘那含佛",
	"迦叶佛",
	"弥勒佛",
	"释迦摩尼<sup>觉醒者</sup>",
	"观世音<sup>菩萨</sup>",
	
	// 基督教
	"耶和华<sup>耶稣</sup>",
	"上帝<sup>God / 万能之主</sup>",
	
	// 伊斯兰教
	"阿拉<sup>真主 / Allah</sup>",
	
	// 艺人 / 日本
	"米津玄师",
	
	// 化石级元老 / IT领域
	"盖国强<sup>云和恩墨创始人 / Oracle ACED</sup>",
	"侯圣文<sup>Oracle ACED / 大数据</sup>",
	
	// 世界名人
	"鲁伯特·默多克（Rupert Murdoch）<sup>传媒之神 / 世界报业大亨</sup>",
	
	// 庆余年
	"范闲<sup>庆余年：猫腻</sup>",
	"叶轻眉<sup>庆余年：猫腻</sup>",
	"五竹<sup>庆余年：猫腻</sup>",
	"庆帝<sup>庆余年：猫腻</sup>",
	
	// 游戏：原神
	"刻晴<sup>米哈游·原神</sup>",
	"雷电将军<sup>米哈游·原神</sup>",
	"可莉<sup>米哈游·原神</sup>",
	
	// 其他
	"[and so on.]"
	
];

// 工具集合
var tools = [

	// 开发
	// -- 第三方
	// Lang: Java
	"Eclipse写程序",
	
	// Git
	"GitKraken",
	"Gitlab",
	"Github",
	
	// Lang: Python
	"PyCharm写程序",
	"JetBrains PyCharm",
	"Visual Studio COde",
	
	// Lang: golang
	"JetBrains GoLand",
	
	// -- 操作系统自带
	"记事本", 
	"写字板", 
	
	//文案
	"Microsoft Office写文档", 
	
	// 远程控制
	"灰鸽子",
	"Team Viewer",
	"花生壳",
	"Microsoft Windows / 远程桌面(RDP)",
	"AnyDesk",
	
	//操作系统 / PC
	// -------
	"Windows 8<sup>Microsoft</sup>", 
	"Windows 10<sup>Microsoft</sup>", 
	"Windows 11<sup>Microsoft</sup>", 
	// -------
	"Mac OS<sup>Apple</sup>", 
	// -------
	"Linux", 
	"Red Hat Enterprise Linux",
	"Oracle Unbrakeable Linux",
	"Oracle Enterprise Linux",
	"SUSE Enterprise Linux Server",
	"IBM AIX",
	"HP Unix",
	
	//操作系统 / 手机
	"塞班",
	"Apple iOS",
	"Android<sup>安卓</sup>",
	
	//网页浏览
	"IE",
	"Firefox",
	"QQ浏览器",
	"360安全浏览器",
	"搜狗高速浏览器",
	"夸克浏览器",
	"双核浏览器",
	
	// 输入法
	"QQ拼音输入法",
	"紫光拼音",
	"搜狗输入法",
	"谷歌输入法",
	"讯飞输入法",
	
	// 移动设备
	"Android设备", 
	"iOS设备",
	"松拓手表",
	"佳明手表",
	
	// 游戏平台 / 主机
	"Steam OS",
	"Steam",
	"Play Station",
	"Play Station Vita",
	"任天堂Switch",
	"WII",
	"Microsoft XBOX",
	"浩方对战平台",
	
	// 视频 / 影像
	"iOS看斗鱼直播",
	"iPad看#流浪地球",
	
	// 阅读
	"Kindle读亚当斯密的《道德情操论》",
	
	// 飞行器
	"大疆无人机",
	
];

// 特殊的标记 / 变量名
var varNames = [
	"numa",
	"memory",
	"jieguo",
	"huodong",
	"pay",
	"expire",
	"zhangdan",
	"every",
	"free",
	"i1",
	"a",
	"virtual",
	"ad",
	"spider",
	"mima",
	"pass",
	"ui",
	"MaYun",
	"AliPay",
	"fire",
	"hentai",
	"AV",
	"TianMao",
	"other"
];

// 你喜欢喝什么？
// 液体
var drinks = [
	
	// 酒
	
	"酒",
	
	// -- 花酒
	"且听风吟·玫瑰酒<sup>你比酒醉人</sup>",
	"桂花酒",
	
	// 苏州桥
	"苏州桥·桃花醉 / 果酒<sup>桃源只在镜湖中，影落清波十里红，自别西川海棠后，初将烂醉答春风</sup>",
	"苏州桥·杨梅酒<sup>夜潮才落清晓忙，摘来颗颗含甘浆，登盘此是杨家果，消受山中五月凉</sup>",
	
	// 鸡尾酒
	"锐澳RIO<sup>鸡尾酒</sup>",
	"百利",
	
	// 米酒
	"孝感米酒",
	
	// 黄酒
	"冰镇黄酒",
	
	// 啤酒
	"嘉士伯啤酒",
	"喜力啤酒",
	"乐堡啤酒<sup>拉开快乐</sup>",
	"青岛啤酒",
	"朝日啤酒<sup>Asahi</sup>",
	"麒麟啤酒<sup>Kirin Beer</sup>",
	
	"鹅岛印度淡色艾尔啤酒<sup>Goose Island IPA</sup>",
	
	// --- 百威
	"百威啤酒<sup>勇闯天涯</sup>",
	"百威金尊",
	
	// 白酒
	"二锅头",
	"贵州茅台酒",
	"玉冰烧",
	"高粱酒",
	
	// 清酒
	"千贺寿【舞】系列清酒<sup>15°</sup>",
	"千贺寿清酒<sup>Sake sake</sup>",
	"千贺寿梅酒<sup>Une Sake</sup>",
	"日式清酒<sup>Japanese sake</sup>",
	"大关【极上甘口】<sup>Ozcki Lady Sake</sup>",
	"花泉酒造【ROMAN】纯米吟酿酒",
	"新政【亚麻猫/白麹仕入】纯米酒",
	"【龟泉】纯米吟酿生原酒",
	"【广户川】纯米吟酿无过滤生原酒",
	"【梅锦】纯米吟酿原酒",
	"向井酒造【伊根满开】赤米",
	"饭沼铭酿【姿】纯米吟酿无过滤生原酒【雄町】",
	"村祐「黑」纯米大吟酿无过滤本生浓醇甘口<sup>清酒</sup>",
	"[鹰长]无过滤原酒<sup>清酒</sup>",
	"[獭祭]汽泡纯米大吟酿<sup>清酒</sup>",
	"塔牌[良宵]<sup>清酒</sup>",
	"[花垣]纯米浊酒<sup>清酒</sup>",
	"久保田[千寿]<sup>清酒</sup>",
	"久保田[万寿]纯米大吟酿<sup>清酒</sup>",
	"久保田[碧寿]纯米大吟酿<sup>清酒</sup>",
	"石川酒造 多满自慢 纯米无过滤<sup>清酒</sup>",
	"北鹿[北秋田]大吟酿<sup>清酒</sup>",
	"[上善如水]纯米吟酿<sup>清酒</sup>",
	"くどき上手[吟酿酒]超辛口 ばくれん<sup>清酒</sup>",
	"越乃景虎[龙]<sup>清酒</sup>",
	"[出羽樱]樱花吟酿酒<sup>清酒</sup>",
	"梵[吟撰]纯米大吟酿<sup>清酒</sup>",
	"今代司[锦鲤]纯米酒<sup>清酒</sup>",
	"[大山]特别纯米酒[十水]<sup>清酒</sup>",
	"[东光]纯米<sup>清酒</sup>",
	"[黑龙]大吟酿<sup>清酒</sup>",
	"[黑龙]纯吟纯米吟酿<sup>清酒</sup>",
	"[真澄]纯米吟酿辛口<sup>清酒</sup>",
	"[大山]燗丽辛口<sup>清酒</sup>",
	"[加茂锦]荷札酒生装原酒纯米大吟酿<sup>清酒</sup>",
	"[神龟]纯米酒辛口<sup>清酒</sup>",
	"农口尚彦研究所[山废吟酿]无过滤生原酒<sup>清酒</sup>",
	"[新政]No.6 R-type特别纯米无过滤生原酒<sup>清酒</sup>",
	"[春鹿]超辛口纯米酒黑标<sup>清酒</sup>",
	"[モダン仙禽]无垢无过滤生原酒<sup>清酒</sup>",
	"[东洋美人]纯米大吟酿一番缠<sup>清酒</sup>",
	"[十四代]特吟生贮藏纯米吟酿<sup>清酒</sup>",
	"花邑（両关酒造）<sup>清酒</sup>",
	"新政6号系列（新政酒造）<sup>清酒</sup>",
	"而今纯米大吟酿<sup>不要被过去或未来拘束，要珍惜当下努力活着</sup>",
	"花阳浴（南阳酒造）<sup>清酒</sup>",
	"十四代（山形高木酒造）<sup>清酒</sup>",
	"酒未来<sup>清酒</sup>",
	"羽州誉<sup>清酒</sup>",
	"龙の落とし子<sup>清酒</sup>",
	"信州龟龄<sup>清酒</sup>",
	"川中岛幻舞大吟醸Premium<sup>清酒</sup>",
	"新政[天蛙]<sup>清酒</sup>",
	"阳乃鸟（幼鸟）<sup>清酒</sup>",
	"ソガ·ペール·エ·フィス（长野小布施酒造）<sup>清酒</sup>",
	"凤凰美田<sup>清酒</sup>",
	"飞露喜<sup>清酒</sup>",
	"農口尚彦研究所<sup>清酒</sup>",
	"五彩（ごさい）<sup>清酒</sup>",
	"写楽（寫樂）<sup>清酒</sup>",
	"九平次<sup>清酒</sup>",
	"别誂<sup>清酒</sup>",
	"くどき上手<sup>清酒</sup>",
	"新政（color系列）<sup>清酒</sup>",
	"亀泉（かめいずみ）<sup>清酒</sup>",
	"亀泉纯米吟醸生原酒CEL-24<sup>清酒</sup>",
	"加茂錦<sup>清酒</sup>",
	"風の森<sup>清酒</sup>",
	"辛丹波<sup>清酒</sup>",
	"月桂冠<sup>清酒</sup>",
	"菊正宗<sup>清酒</sup>",
	
	// 烧酒
	"黑雾岛<sup>烧酒</sup>",
	"亦竹烧酒<sup>iichiko</sup>",
	"白波<sup>烧酒</sup>",
	"[千岁鹤]吟酿<sup>烧酒</sup>",
	
	// 梅酒
	"俏雅梅梅酒<sup>Choya</sup>",
	"菊美人梅酒<sup>清酒</sup>",
	"纪州梅酒<sup>清酒</sup>",
	"【泉桥】纯米梅酒[山田十郎]<sup>清酒</sup>",
	
	// 红葡萄酒
	"马康克洛塔奇干红葡萄酒",
	
	// 白葡萄酒
	"梵客187莫斯卡托白葡萄酒<sup>Finders and Seekers | Moscato</sup>",
	
	// 葡萄酒 - 等级 - 张裕
	"张裕冰酒·金钻级:尊崇/高贵/充满喜庆和吉祥的气氛<sup>冰葡萄压榨出来的第三、四道原汁酿造/占冰酒产量的[75%]</sup>",
	"张裕冰酒·蓝钻级:浪漫/乐于尝试新事物/追求独特的生活品味<sup>冰葡萄压榨出来的第二道原汁酿造/占冰酒产量的[20%]</sup>",
	"张裕冰酒·黑钻级:神秘/低调/身世显赫/有品位的现代奢华<sup>冰葡萄压榨出来的第一道原汁酿造/极为稀少/占冰酒产量的[5%]</sup>",
	
	// 葡萄酒 - 张裕
	"张裕·金钻级威代尔[VIDAL]·黄金冰谷冰酒[Changyu Golden, Icewine Valley Golden Diamond, Level Icewine 2015]<sup>北纬41°/海拔380米/辽宁桓仁桓龙湖畔/上等冰酒/IWSC·2017·特金奖</sup>",
	"勃艮第葡萄酒<sup>BORGHETTI</sup>",
	
	// 奔富
	"奔富酒庄·麦克斯·赤霞珠干红葡萄酒<sup>Penfolds Max's | Cabernet Sauvignon</sup>",
	
	// 威士忌
	"苏格兰威士忌利口酒<sup>DRAMBUIT</sup>",
	"占边威士忌<sup>JIM BEAM</sup>",
	"苏格兰威士忌<sup>FAMOUS GROUSE</sup>",
	"加拿大威士忌<sup>1858CAN.WHISKY</sup>",
	"顺丰威士忌<sup>CUTTY SARK</sup>",
	"威士忌&咖啡<sup>WHISKEY&COFFEE</sup>",
	
	// 白兰地
	"干邑白兰地<sup>CAMUS</sup>",
	
	// 野格
	"Jägermeister·野格/圣鹿<sup>植物利口酒的一种</sup>",
	
	// 朗姆
	"朗姆",
	"奇峰朗姆酒<sup>MOUNT GAY RUN</sup>",
	"朗姆酒&咖啡<sup>RUM&COFFEE</sup>",
	
	// 伏特加
	"绝对伏特加/Absolut Vodka",
	"丹麦柠檬伏特加<sup>DANZKA VODKA</sup>",
	"索比斯基红牌伏特加<sup>SOBIESKI VOOKA</sup>",
	
	// 洋酒 - 未分类
	"人马V.S.O.P<sup>Remy Martin</sup>",
	"法国茴香酒<sup>RICARD</sup>",
	"高卢酒<sup>GALLIANO</sup>",
	"君度力娇酒<sup>COINTREAU</sup>",
	"莫吉托<sup>MOJITO</sup>",
	"草莓得其利<sup>STRAWBERRY DAIQUIRI</sup>",
	"大都会<sup>COSMOPOLITAN</sup>",
	"玛格丽塔酒<sup>MARGARITA</sup>",
	"橙子利口酒&咖啡<sup>ORANGE LIQUEUR&COFFEE</sup>",
	
	// 龙舌兰
	"索查金龙舌兰<sup>SAUZA</sup>",
	"龙舌兰&咖啡<sup>TEQUILA&COFFEE</sup>",
	
	// 功能饮料 / 运动饮料
	"运动饮料",
	"健力宝·运动饮料<sup>Sports Drink</sup>",
	"迈速能量维生素饮料<sup>Speed up Energy</sup>",
	
	// --> 汤臣倍健·F6
	"F6葛根姜植物饮品·汤臣倍健<sup>SuperShot</sup>",
	"F6<sup>17+</sup>高膳食纤维饮品·汤臣倍健（High Dietary Floer）<sup>SuperShot</sup>",
	"F6<sup>+3</sup>胶原蛋白肽果汁饮品·汤臣倍健（Collagen Peptide Juice Drink）<sup>SuperShot</sup>",
	"F6植物能量饮料·汤臣倍健<sup>SuperShot</sup>",
	
	// --> 红牛
	"红牛·维生素功能饮料<sup>Red Bull Vitamin Functional Drink</sup>",
	
	// 乳类饮料
	
	"乳果那年（DreamDays）<sup>复合乳酸菌芒果汁饮料</sup>",
	"卡士酸奶<sup>Classy-Kiss</sup>",
	
	// 酸奶 / 乳酸菌
	"酸奶",
	"轻觉·轻酸奶<sup>芒果味</sup>",
	"味全活性乳酸菌",
	"怡宝小主菌",
	"金爵鲜酪乳·风味发酵乳<sup>Inulin[菊粉]，从菊芋根中自然提取，是水溶性膳食纤维，能够帮助调节肠道微生物菌群，改善肠道健康</sup>·甘甜桑葚<sup>Flavored Fermented Milk / Mulbery / Probiotics & Inulin(WSDF)</sup>",
	
	// 朴诚乳业
	"原味裸酸奶·Purely Yoghurting<sup>简❤爱·朴诚乳业</sup>",
	"裸百香果酸奶·Passion Fruit Yoghurting<sup>简❤爱·朴诚乳业</sup>",
	"裸柠檬酸奶·Lemon Yoghurting<sup>简❤爱·朴诚乳业</sup>",
	
	// 奶
	"鲜奶",
	"藜麦（QUINOA）/光明",
	"伊利纯牛奶",
	"蒙牛纯牛奶",
	
	// 豆奶
	"豆奶",
	"维他奶[Vitasoy]<sup>原味豆奶</sup>",
	"维维豆奶[经典豆奶]<sup>植物蛋白饮料</sup>",
	
	// 果汁类饮料 / 果味饮料
	"果汁",
	"磨谷磨谷[乐天]·椰肉草莓汁饮料<sup>enle.enle·Strawberry Juice Drinks with Nata de coco</sup>",
	
	"金桔芦荟味饮料·润之泉润心田（GoodDay! Fruit appointment this afternoon | Shake well before serving）<sup>Quality Delicious | Kumquat & Aloe Vera</sup>",
	
	// 农夫山泉
	"农夫山泉[Nongfu Spring]·天然矿泉水<sup>源自长白山莫涯泉:长白山的冬，雪舞冰封，银装素裹，猞猁最喜欢的季节到了，整片森林都是他的溜冰场</sup>",
	
	"农夫山泉·水柠檬·果味饮料<sup>Lemon</sup>",
	
	"农夫山泉·水溶C100<sup>青皮桔味复合果汁饮料·Calamansi</sup>",
	
	"尖叫SCREAM[农夫山泉荣誉出品]<sup>多肽型·西柚味</sup>",
	
	"力量帝（C维他命水）<sup>农夫山泉·出品</sup>",
	
	// 台湾红牌
	"台湾红牌·水蜜桃汁饮料<sup>Rico Peach Juice Drink[Juice Content 18%]</sup>",
	"台湾红牌·葡萄汁饮料<sup>Rico Grape Juice Drink[Juice Content 15%]</sup>",
	"台湾红牌·橙汁饮料<sup>Rico Orange Juice Drink[Juice Content 30%]</sup>",
	
	// 台湾通天下
	"台湾·通天下·番石榴汁饮料<sup>Taiwan Gourmet·Guava Juice Drink</sup>",
	
	// 咖啡
	"咖啡",
	"漫芮怡意式咖啡饮料（Mt.Rainier）",
	"太平洋<sup>咖啡</sup>",
	"浓郁咖啡玛奇朵<sup>Espresso Macchiato</sup>",
	"樱花味拿铁<sup>Cherry Blossom Flavor Latte</sup>",
	"法式香草味拿铁<sup>French Vanilla Latte</sup>",
	"咖啡拿铁<sup>CAFFE LATTE</sup>",
	"雅哈咖啡·意式醇香拿铁<sup>Aha Coffee·Caffe Latte</sup>",
	"利趣咖啡·Caffe Latte<sup>Suntory·三得利</sup>",
	
	// 星巴克
	"星巴克<sup>咖啡</sup>",
	"香草拿铁",
	"芝士奶香拿铁（Milky Cheese Latte）<sup>星巴克·星选</sup>",
	"燕麦拿铁（Oat Latte Coffee Drink·Low Fat）<sup>星巴克·星怡杯：第一道精粹咖啡原液（Starbucks Coffee）</sup>",
	"馥芮白（Flat White）<sup>星巴克（Starbucks Coffee）：传承星巴克的咖啡热爱（始于1971）</sup>",
	
	// 微笑趣泡
	"微笑趣泡-[白桃味]气泡水<sup>Bubly sparking water / 0糖 0卡 0脂</sup>",
	"微笑趣泡-[百香果]气泡水<sup>Bubly sparking water / 0糖 0卡 0脂</sup>",
	"微笑趣泡-[蜜柚味]气泡水<sup>Bubly sparking water / 0糖 0卡 0脂</sup>",
	
	// COSTA
	"焦糖风味金妃拿铁（Caramel Flavor Golden Latte）<sup>COSTA COFFEE</sup>",
	
	// 贝纳颂
	"贝纳颂·经典曼特宁风味（Bernachon | Classic mandheling Tasty）<sup>咖啡中的大师杰作 | 精选阿拉比卡咖啡豆，以精湛的工艺，中深度烘焙，精细研磨，层层滴滤，升华咖啡豆浓醇精华，只为你提炼珍贵第一道萃取液。现萃现用，全程严格工艺，成就大师杰作，回味顺滑醇香。</sup>",
	
	// 伯朗咖啡
	"伯朗咖啡·蓝山风味<sup>Mr.Brown: Blue Mountain Blend Coffee</sup>",
	"伯朗咖啡·浓咖啡饮料<sup>Mr.Brown: Blue Mountain Blend Coffee</sup>",
	
	// 茶
	"茶",
	"红茶",
	"绿茶",
	"奶茶",
	"王老吉",
	"inWe·因味茶<sup>章泽天</sup>",
	"西湖龙井",
	"黄山茗茶",
	"普洱茶",
	"三得利无糖乌龙茶<sup>Oolong Tea</sup>",
	
	// 网鱼网咖
	"冰摇柠檬红<sup>网鱼网咖</sup>",
	"大吉大利<sup>网鱼网咖</sup>",
	"无限续命<sup>网鱼网咖</sup>",
	
	// 元気森林
	"果の每日茶·柠檬绿茶饮料<sup>元気森林</sup>",
	"卡曼橘味苏打气泡水<sup>元気森林</sup>",
	
	// 苏打水
	"苏打水",
	"三得利苏打水<sup>Soda water</sup>",
	
	// 酵素
	"芦荟酵素汁",
	
	// 碳酸饮料 / 汽水
	"ColaCola",
	"波子汽水<sup>Wave of soda</sup>",
	"健力宝",
	"果味汽水",
	"汉口二厂汽水",
	"北冰洋汽水",
	"可尔必思葡萄酸乳味碳酸饮料<sup>Calpis·Calpico SODA, Grape Flavour, Fermented Milk Flavoured Carbonated Drink</sup>",
	"噢嗼·西瓜味碳酸饮料<sup>OMOR | Watermelon Soda</sup>",
	"青柠雪碧<sup>Lime Sprite</sup>",
	"青柠可乐<sup>Lime coke</sup>",
	
	// 盐汽水
	"延中盐汽水",
	
	// 可口可乐
	"可口可乐",
	
	// 百事可乐
	"百事可乐[Pepsi.Cola]",
	"百事可乐[Pepsi.Cola]·无糖<sup>intense taste·no sugar</sup>",
	
	// 矿泉水
	"百岁山<sup>Ganten</sup>",
	"芙丝天然矿泉水<sup>VOSS of Norway AS|于挪威境外全球唯一认可的矿泉水水源地，天然弱碱，口感柔软、清冽|弱碱性(pH:7.1~8.4)|</sup>",
	
	// 脉动
	"脉动·维生素饮料<sup>水蜜桃口味·Peach Flavour</sup>",
	
	// 怡宝
	"蜜水白柚<sup>怡宝·地中海柚子x进口蜂蜜</sup>",
	"蜜水百香<sup>怡宝·地中海百香果x进口蜂蜜</sup>",
	
	// 普通
	"水",
	
	// 小茗同学
	"冷泡·溜溜哒茶[乳酸菌发酵风味]<sup>小茗同学x大英博物馆</sup>",
	
	// 奶茶店 / 饮品店
	"喜茶<sup>激发一份灵感 / Inspiration of Tea</sup>",
	"乐乐茶<sup>奶茶店</sup>",
	"茶颜悦色<sup>奶茶店</sup>",
	
	// 未分类
	"[and so on.]"
	
];

// 随机最值得去看的会议与事件
var event_and_meeting = [
	
	// 技术大会
	"QCon全球软件开发大会<sup>不容错过的[技术]大会</sup>",
	"ArchSummit全球架构师峰会<sup>不容错过的[技术]大会</sup>",
	"GMTC全球大前端技术大会<sup>不容错过的[技术]大会</sup>",
	"AICon全球人工智能与机器学习技术大会<sup>不容错过的[技术]大会</sup>",
	
	// 默认
	"暂无"

];

// 随机最值得去的公司与组织
var company_and_group = [
	
	// 超市
	"沃尔玛<sup>超市</sup>",
	"好又多<sup>超市</sup>",
	
	// 便利店
	"全家<sup>便利店</sup>",
	"中百罗森<sup>便利店</sup>",
	"Today`今天<sup>便利店</sup>",
	
	// 电商
	"飞牛网<sup>电商</sup>",
	"唯品会<sup>电商</sup>",
	"当当网<sup>电商</sup>",
	"亚马逊<sup>电商</sup>",
	
	// 社交
	"小红书<sup>社交</sup>",
	
	// 技术公司
	
	// -- 阿里系
	"阿里巴巴<sup>[阿里]系</sup>",
	"淘宝网<sup>[阿里]系</sup>",
	"达摩院<sup>[阿里]系</sup>",
	"蚂蚁金服<sup>[阿里]系</sup>",
	
	// -- 头条系
	"今日头条<sup>[头条]系</sup>",
	"抖音<sup>[头条]系</sup>",
	"字节跳动<sup>[头条]系</sup>",
	
	// -- 腾讯系
	"Tencent<sup>[腾讯]系</sup>",
	"TIMI天美工作群<sup>[腾讯]系</sup>",
	
	// 数据库
	"PingCAP<sup>全球分布式关系型数据库厂商</sup>",
	"Oracle[甲骨文]<sup>数据库: 美国</sup>",
	"MongoDB<sup>数据库: 美国</sup>",
	
	// 大数据
	"TalkingData[腾云天下]<sup>大数据</sup>",
	
	// 银行
	"中国建设银行<sup>银行</sup>",
	"中国银行<sup>银行</sup>",
	"平安银行<sup>银行</sup>",
	"交通银行<sup>银行</sup>",
	"汇丰银行<sup>银行</sup>",
	"招商银行<sup>银行</sup>",
	"广发银行<sup>银行</sup>",
	"微众银行<sup>银行</sup>",
	"众邦银行<sup>银行</sup>",
	"渣打银行<sup>银行</sup>",
	
	// 餐饮
	"海底捞<sup>餐饮 | 火锅</sup>",
	
	// 教育
	"达内教育<sup>教育 | IT职业教育</sup>",
	
	// 物流
	"顺丰速运<sup>快递物流</sup>",
	"韵达<sup>快递物流</sup>",
	
	// 飞行器
	"DJI[大志无疆 / 大疆创新]<sup>全球顶尖的无人机飞行平台和影像系统</sup>",
	
	// 华为
	"华为<sup>全球领先的信息与通信技术（ICT）解决方案供应商</sup>",
	
	// 默认
	"暂无"

];

// 你喜欢吃什么
var eats = [
	
	// 有家便利店
	"招牌肉蛋三明治<sup>Fresh Sandwich</sup>",
	"全麦鸡蛋火腿三明治<sup>Fresh Sandwich</sup>",
	"香辣风味烤肠<sup></sup>",
	
	// 全家便利店
	
	// 罗森便利店
	
	// 极客时间
	"若饭液体便当v3.5: 原味<sup>极客时间</sup>",
	"若饭液体便当v3.5: 咖啡味<sup>极客时间</sup>",
	
	// 世界顶级食材
	// =================
	
	// -- 松露
	"松露",
	"法国黑松露",
	"意大利白松露",
	"松露盐",
	"松露蜂蜜",
	
	// 中国食材
	"云南文山辣椒",
	"东北大米",
	
	// 合成生物学
	"人工合成牛肉",
	
	// 肉类
	
	// 海产
	"智利腕海鞘",
	"鹅肝",
	"鱼子酱",
	
	// 素食 / 香料
	"大溪地香草",
	"蓝龙虾",
	
	// =================
	
	// 面包
	
	// 爸爸糖手工吐司 - Daddy Sweety Toast
	"招牌原味吐司[Original Toast]<sup>爸爸糖手工吐司[Daddy Sweety Toast]</sup>",
	"招牌皇冠吐司[Cheese Toast]<sup>爸爸糖手工吐司[Daddy Sweety Toast]</sup>",
	"招牌奶酥吐司[Souffle Toast]<sup>爸爸糖手工吐司[Daddy Sweety Toast]</sup>",
	"招牌红豆吐司[Red Bean Toast]<sup>爸爸糖手工吐司[Daddy Sweety Toast]</sup>",
	"招牌肉松吐司[Dried Meat Floss Toast]<sup>爸爸糖手工吐司[Daddy Sweety Toast]</sup>",
	"椰子提子吐司[Coconut Grap Toast]<sup>爸爸糖手工吐司[Daddy Sweety Toast]</sup>",
	"巧克力吐司[Black Chocolate Toast]<sup>爸爸糖手工吐司[Daddy Sweety Toast]</sup>",
	"蔓越莓吐司[Cranberry Toast]<sup>爸爸糖手工吐司[Daddy Sweety Toast]</sup>",
	"冲绳之恋吐司[Okinawa Brown Sugar Toast]<sup>爸爸糖手工吐司[Daddy Sweety Toast]</sup>",
	"北海道牛奶吐司[Hokkaido Milk Toast]<sup>爸爸糖手工吐司[Daddy Sweety Toast]</sup>",
	"皇冠蓝莓吐司[Blueberry Cheese Toast]<sup>爸爸糖手工吐司[Daddy Sweety Toast]</sup>",
	"爸爸糖吐司[Daddy Sweety Toast]<sup>爸爸糖手工吐司[Daddy Sweety Toast]</sup>",
	"经典火腿吐司[Ham Toast]<sup>爸爸糖手工吐司[Daddy Sweety Toast]</sup>",
	"无花果全麦吐司[Fig Whole-wheat Toast]<sup>爸爸糖手工吐司[Daddy Sweety Toast]</sup>",
	"胡麻籽全麦吐司[Flaxseed Whole-wheat Toast]<sup>爸爸糖手工吐司[Daddy Sweety Toast]</sup>",
	"巴里罗辣吐司[Spicy Toast]<sup>爸爸糖手工吐司[Daddy Sweety Toast]</sup>",
	"海盐芝士吐司[Salt-cheese Toast]<sup>爸爸糖手工吐司[Daddy Sweety Toast]</sup>",
	"菠萝奶酥吐司[Pineapple Souffle Toast]<sup>爸爸糖手工吐司[Daddy Sweety Toast]</sup>",
	"抹茶红豆吐司[Matcha Red Bean Toast]<sup>爸爸糖手工吐司[Daddy Sweety Toast]</sup>",
	
	// 小面包
	"达利园·法式小面包<sup>Mini French Bread</sup>",
	
	// 薯片
	
	// 乐事 Lays
	"乐事薯片[Lay's]经典美味·美国经典原味<sup>Classic Great Taste· American Classic Flavor</sup>",
	"乐事薯片[Lay's]墨西哥鸡汁番茄味<sup>Mexican Tomato Chicken Flavor</sup>",
	"乐事薯片[Lay's]德克萨斯烧烤味<sup>Texas Crilled BBQ Flavor</sup>",
	"乐事薯片[Lay's]意大利香浓红烩味<sup>Italian Red Meat Flavor</sup>",
	"乐事薯片[Lay's]黄瓜味<sup>Cucumber Flavor</sup>",
	"乐事薯片[Lay's]麻辣小龙虾味<sup>Spicy Crayfish Flavor</sup>",
	"乐事薯片[Lay's]金黄炒蟹味<sup>Fried Crab Flavor</sup>",
	"乐事薯片[Lay's]蒲烧鳗鱼味<sup>Crilled Eel Flavor</sup>",
	"乐事薯片[Lay's]飘香麻辣锅味<sup>Numb & Spicy Hot Pot Flavor</sup>",
	
	// 饼干
	"品味本铺·7种蔬菜味棒饼干·Vegetable Flavor<sup>普通型韧性饼干</sup>",
	"康元·朱古力味夹心饼干<sup>Greamy Chocolate Biscuits</sup>",
	
	// 惊奇饼干
	"Aji惊奇脆片饼干<sup>Fabulous</sup>黄金起士味",
	"Aji惊奇脆片饼干<sup>Fabulous</sup>韩式泡菜味",
	"Aji惊奇脆片饼干<sup>Fabulous</sup>优格洋葱味",
	"Aji惊奇脆片饼干<sup>Fabulous</sup>营养蔬菜味",
	"Aji惊奇脆片饼干<sup>Fabulous</sup>蜂蜜黄油味",
	"Aji惊奇脆片饼干<sup>Fabulous</sup>焦糖芥末味",
	
	// 海苔
	"韩国·海牌<sup>Cheong Jeong Co.ltd</sup>海苔<sup>Haepyo·Seasoned Laver</sup>",
	
	// 海苔 - 老板仔
	"老板仔·海苔卷·辛辣口味<sup>BigRoll·Grilled Seaweed Roll·Spicy Flavour</sup>",
	
	// 甜食
	"草莓水晶布蕾",
	
	// 豆干
	"张飞传人·手磨豆干·陈坛泡椒味<sup>Dried Bean Curd·大豆蛋白制品</sup>",
	
	// 锅巴
	"北海道·海鲜糯米锅巴<sup>Behaitor·Seafood sticky rise crust</sup>",
	
	// 虾条
	"上好佳·鲜虾条<sup>Prawn Crackers</sup>",
	
	// 冰棒 / 冰淇淋
	"香蕉冰棒",
	"绿舌头冰棒",
	
	// 爱茜茜里
	"爱茜茜里冰淇淋",
	
	// 哈根达斯
	"哈根达斯冰淇淋",
	
	// 冰雪女王
	"DQ冰雪女王",
	"黑松露榛果<sup>风味</sup>热巧克力<sup>冰雪女王：Black Truffle Chocolate</sup>",
	"榛子巧克力芭菲<sup>冰雪女王 / 暴风雪</sup>",
	"暴风雪 / 黑糖波波抹茶<sup>冰雪女王 / Brown Sugar Matcha Blizzard</sup>",
	"拌拌碗 / 牛乳芝士芒芒<sup>冰雪女王</sup>",
	"拌拌碗 / 奥利奥莓莓<sup>冰雪女王</sup>",
	"拌拌碗 / 抹茶麻薯<sup>冰雪女王</sup>",
	"拌拌碗 / 巧克力巴旦木<sup>冰雪女王</sup>",
	"杨枝甘露椰奶茶<sup>冰雪女王</sup>",
	
	// 蛋糕
	"冰淇淋蛋糕",
	
	// 蒸 / 煮
	"蒸鸡蛋 / 水蒸蛋 / 肉沫蒸蛋",
	"白煮蛋",
	"沙县美食【蒸饺】",
	
	// 饭
	"原汤泡饭",
	"青椒肉丝盖饭",
	"鳗鱼茶泡饭",
	
	// 小吃 - 武汉
	"老通城豆皮",
	
	// 面食
	"蔡林记热干面",
	"麦香园热干面",
	"热干面",
	
	// 汤圆
	"五芳斋汤圆",
	
	// 馒头 / 包子
	"四美包子",
	"巴比馒头",	
	"庆丰包子",
	"袁大头包子",
	"水晶大包",
	
	// 生煎
	"光头生煎",
	"小杨生煎",
	
	// 饺子
	"日式煎饺",
	
	// 菜品 - 豆腐
	"麻婆豆腐",
	
	// 肉
	"手枪鸡腿",
	
	// 巧克力
	"怡口莲",
	"巧克力",
	"德芙<sup>纵享丝滑</sup>",
	"爱顿博格酒心巧克力<sup>Anthon.Berg[Since 1884]</sup>",
	"天津·起士林<sup>Kiessling Chocolate / 中华老字号·经典100年 / 始于[1901]</sup>黑巧克力·代可可脂<sup>船沉的味道，百年的品牌</sup>",
	
	// 地区特产 / 天津
	"天津·味糕<sup>绿豆</sup>",
	"天津·味糕<sup>香芋</sup>",
	"天津·味糕<sup>黑芝麻</sup>",
	"天津·味糕<sup>桂圆</sup>",
	"天津·味糕<sup>板栗</sup>",
	
	// 日本糕点
	"Mini`波路梦·迷你蛋糕卷<sup>牛奶味</sup>",
	"Mini`波路梦·迷你蛋糕卷<sup>巧克力味</sup>",
	
	// 火锅
	"德庄火锅",
	"贤合庄火锅",
	
	// 鱼
	"酸菜鱼",
	"水煮鱼",
	"烤鱼",
	
	// 虾
	"油焖大虾",
	"麻辣小龙虾",
	"蒸虾",
	"小青龙",
	
	// 牛排
	"西冷牛排（Sirloin）",
	"神户牛肉(Kobe Beef)",
	"澳洲牛排",
	
	// 披萨
	"必胜客",
	"披萨",
	
	// 汉堡
	"汉堡",
	
	// 烧烤
	"烧烤",
	
	// 水果
	"香蕉",
	"葡萄",
	"西瓜",
	"苹果",
	"橘子",
	"橙子",
	"榴莲",
	"哈密瓜",
	"柿子",
	"石榴",
	"枣",
	"火龙果",
	
	// 肯德基
	"KFC·生滚牛肉粥",
	"KFC·PANINI<sup>帕尼尼</sup>",
	
	// 全球冰酒主要葡萄原料
	"霞多丽[Chardonnay]<sup>全球冰酒主要酿酒葡萄</sup>",
	"威代尔[Vidal]<sup>全球冰酒主要酿酒葡萄</sup>",
	"琼瑶浆[Gewurztraminer]<sup>全球冰酒主要酿酒葡萄</sup>",
	"雷司令[Riesling]<sup>全球冰酒主要酿酒葡萄</sup>",
	
	// 未分类
	"[and so on.]"
	
];

// 你喜欢看的电影与书籍
var books_films = [

	// 应用APP
	
	// 短视频
	"抖音<sup>应用APP / 软件</sup>",
	"火山短视频<sup>应用APP / 软件</sup>",
	"快手<sup>应用APP / 软件</sup>",
	
	// 视频
	"腾讯视频<sup>应用APP / 软件</sup>",
	"搜狐视频<sup>应用APP / 软件</sup>",
	"优酷：这世界很酷<sup>应用APP / 软件</sup>",
	"哔哩哔哩：弹幕 / 干杯``<sup>应用APP / 软件</sup>",
	"爱奇艺<sup>应用APP / 软件</sup>",
	
	// 漫画
	"腾讯动漫<sup>应用APP / 软件</sup>",
	"有妖气漫画<sup>应用APP / 软件</sup>",
	
	// 阅读 / 读书
	"QQ阅读<sup>应用APP / 软件</sup>",
	"Kindle<sup>应用APP / 软件</sup>",
	"微信读书<sup>应用APP / 软件</sup>",
	
	// 知识服务
	"知乎<sup>应用APP / 软件</sup>",
	"得到APP<sup>应用APP / 软件</sup>",
	
	// 演讲 / 课程
	"一席<sup>应用APP / 软件</sup>",
	
	// 文艺
	"西窗烛<sup>应用APP / 软件</sup>",
	
	// 市场
	"每日·珠宝杂志<sup>应用APP / 软件</sup>",
	"每日·黄金指数<sup>应用APP / 软件</sup>",
	
	// 宗教
	
	// -- 基督教
	"《圣经》",
	
	// -- 佛教
	"《西藏生死之书》<sup>佛学</sup>",
	"《大悲咒》<sup>佛学</sup>",
	"《金刚经》<sup>佛学</sup>",
	"《长阿含经》<sup>佛学</sup>",
	"《中论》<sup>佛学 / 三论</sup>",
	"《百论》<sup>佛学 / 三论</sup>",
	"《十二门论》<sup>佛学 / 三论</sup>",
	
	// 电影
	
	// 中国
	// -- 人性
	"动物世界（李易峰）<sup>电影</sup>",
	"我不是药神<sup>电影</sup>",
	"比悲伤更悲伤的故事<sup>电影</sup>",
	
	// -- 香港
	"[追龙]系列<sup>电影</sup>",
	"[扫毒II：天地对决]<sup>电影</sup>",
	"夺帅<sup>电影</sup>",
	
	// -- 战争
	"[战狼]系列<sup>电影</sup>",
	
	// 外国
	// -- 灾难
	"我是传奇<sup>电影</sup>",
	
	// -- 人工智能
	"I Robot<sup>电影</sup>",
	"智慧囚屋<sup>电影</sup>",
	"机械姬<sup>电影</sup>",
	"模拟游戏<sup>电影</sup>",
	
	// -- 战争
	"拯救大兵瑞恩<sup>电影</sup>",
	
	// -- 人性
	"肖申克的救赎<sup>电影</sup>",
	"返老还童<sup>电影</sup>",
	"美丽心灵<sup>电影</sup>",
	"阿甘正传<sup>电影</sup>",
	
	// -- 科幻
	"永无止境<sup>电影</sup>",
	"超体<sup>电影</sup>",
	"太阳日<sup>电影</sup>",
	"恐怖谷<sup>电影</sup>",
	"幽冥<sup>电影</sup>",
	
	// -- 超级英雄 / 正义联盟
	"蝙蝠侠大战超人<sup>电影</sup>",
	
	// -- 邪恶 / 反正义联盟
	"魔童<sup>美国 / 电影</sup>",
	"魔女<sup>韩国 / 电影</sup>",
	
	// 电视剧
	// 中国 - 大陆
	
	// 古董 / 古玩
	"黄金瞳<sup>电视剧</sup>",
	"古董局中局<sup>电视剧</sup>",
	
	"盗墓笔记(李易峰)<sup>电视剧</sup>",
	
	"鬼吹灯之精绝古城<sup>电视剧</sup>",
	"鬼吹灯之黄皮子坟<sup>电视剧</sup>",
	
	// 都市 - 警匪
	"痞子英雄<sup>电视剧</sup>",
	"破冰行动<sup>电视剧</sup>",
	
	// 都市
	"猎场<sup>电视剧 / 胡歌</sup>",
	"精英律师<sup>电视剧 / 靳东</sup>",
	
	// 古装 / 穿越
	"择天记<sup>电视剧</sup>",
	"神话（胡歌）<sup>电视剧</sup>",
	"秦时明月<sup>电视剧</sup>",
	"永夜<sup>电视剧</sup>",
	"花千骨<sup>电视剧</sup>",
	"媚者无疆<sup>电视剧 / 李一桐</sup>",
	"庆余年<sup>电视剧 / 李沁</sup>",
	
	// 中国 - 台湾
	"艋胛耀辉<sup>电视剧</sup>",
	
	// 韩国
	"豪杰春香<sup>电视剧</sup>",
	
	// 美国
	"黑袍纠察队<sup>电视剧</sup>",
	"双螺旋<sup>电视剧</sup>",
	"哥谭<sup>电视剧</sup>",
	"邪恶力量<sup>电视剧</sup>",
	"末日孤舰<sup>电视剧</sup>",
	"丧尸国度<sup>电视剧</sup>",
	"行尸走肉<sup>电视剧</sup>",
	"超人前传：氪星<sup>电视剧</sup>",
	"闪电侠<sup>电视剧</sup>",
	"百慕大<sup>电视剧</sup>",
	"破产姐妹<sup>电视剧</sup>",
	
	// 日本
	"最后的朋友<sup>电视剧</sup>",
	
	// 动漫
	"《Charlotte（夏洛特）》<sup>动漫</sup>",
	"一人之下<sup>动漫</sup>",
	"一拳超人<sup>动漫</sup>",
	"我的英雄学院<sup>动漫</sup>",
	"雾山五行<sup>动漫</sup>",
	"中国惊奇先生<sup>动漫</sup>",
	"狐妖小红娘<sup>动漫</sup>",
	"鬼灭之刃<sup>动漫</sup>",
	"小林家的龙女仆<sup>动漫</sup>",
	"平凡职业造就世界最强<sup>动漫</sup>",
	"炎炎消防队<sup>动漫</sup>",
	"假如历史是一群瞄<sup>动漫</sup>",
	"灵笼<sup>动漫</sup>",
	"石纪元<sup>动漫</sup>",
	"妖怪名单<sup>动漫</sup>",
	"恋如雨止<sup>动漫</sup>",
	"刺客伍六七<sup>动漫</sup>",
	"罗小黑战记<sup>动漫</sup>",
	"非人哉<sup>动漫</sup>",
	"从前有座灵剑山<sup>动漫</sup>",
	
	// 命运守护夜
	"Fate/stay night [Unlimited Blade Works] / 无限剑制<sup>动漫</sup>",
	
	// 机械类 / 重工
	"《永动机的原理与实践》<sup>书 / 读物</sup>",
	
	// IT - 技术类
	// --> 日志服务器
	"《ELK Stack权威指南（第二版）》<sup>书 / 读物</sup>",
	
	// --> 开发
	
	// --| Java
	"《Java编程思想》<sup>书 / 读物</sup>",
	"《Python机器学习》<sup>书 / 读物</sup>",
	
	// --| Python
	"Python Linux系统管理与自动化运维<sup>书 / 读物</sup>",
	"Python绝技<sup>书 / 读物</sup>",
	
	// --> 算法
	"《算法导论》<sup>书 / 读物</sup>",
	
	// --> Kubernetes
	"Kubernetes权威指南：从Docker到Kubernetes实践全接触<sup>书 / 读物</sup>",
	"Kubernetes in Action<sup>书 / 读物</sup>",
	
	// --> 大数据
	"Hadoop权威指南<sup>书 / 读物</sup>",
	
	// --> 集中配置
	"《Ansible权威指南》<sup>书 / 读物</sup>",
	
	// --> 数据库 - MongoDB
	"MongoDB权威指南<sup>书 / 读物</sup>",
	
	// --> 数据库 - MySQL
	"MySQL王者晋级之路<sup>书 / 读物</sup>",
	
	// --> 数据库 - MS SQL Server
	"SQL Server 2012深入解析与性能优化<sup>书 / 读物</sup>",
	
	// 思想
	"《自私的基因》",
	"《一想到还有95%的问题留给人类，我就放心了》（We have no idea.）<sup>书 / 读物</sup>",
	"《高手》[Being a Master: Wisdoms of the modern world]万维钢<sup>书 / 读物</sup>",
	"《原则》<sup>书 / 读物</sup>",
	"生命3.0：迈尔斯·泰格马克<sup>书 / 读物</sup>",
	"物演通论<sup>书 / 读物</sup>",
	"《格局》<sup>书 / 读物</sup>",
	"《数文明》<sup>书 / 读物</sup>",
	
	// 情商
	"《非暴力沟通》<sup>书 / 读物</sup>",
	
	// 心理学
	"《怪诞心理学》<sup>书 / 读物</sup>",
	"《梦的解析》<sup>书 / 读物</sup>",
	"《精神层次》（The Spirit Level）[威尔金森/皮克特]<sup>书 / 读物</sup>",
	"《内在层次》（The Inner Level）[威尔金森/皮克特]<sup>书 / 读物</sup>",
	"人性的弱点：卡耐基<sup>书 / 读物</sup>",
	
	// 风水学
	"易经<sup>书 / 读物</sup>",
	"青囊经<sup>书 / 读物</sup>",
	"撼龙经<sup>书 / 读物</sup>",
	"葬经<sup>书 / 读物</sup>",
	"地理正宗<sup>书 / 读物</sup>",
	"地理五诀<sup>书 / 读物</sup>",
	"发微论<sup>书 / 读物</sup>",
	"葬法倒杖<sup>书 / 读物</sup>",
	"玉尺经<sup>书 / 读物</sup>",
	"造微赋<sup>书 / 读物</sup>",
	"逐吉赋<sup>书 / 读物</sup>",
	"天机赋<sup>书 / 读物</sup>",
	"催官<sup>书 / 读物</sup>",
	
	// 预言
	"推背图<sup>书 / 读物</sup>",
	
	// 历史
	"《极简欧洲史》<sup>书 / 读物</sup>",
	
	// 自我管理
	"《把时间当朋友》<sup>书 / 读物</sup>",
	
	// 理论物理
	"《广义相对论》<sup>书 / 读物</sup>",
	"《狭义相对论》<sup>书 / 读物</sup>",
	"《时间简史》<sup>书 / 读物</sup>",
	"果壳中的宇宙：史蒂芬·霍金<sup>书 / 读物</sup>",
	
	// 英文
	"《新概念英语》<sup>书 / 读物</sup>",
	
	// 高考
	"《5年高考，3年模拟》<sup>书 / 读物</sup>",
	
	// 文学
	"《在人间》<sup>书 / 读物</sup>",
	"《我的大学》<sup>书 / 读物</sup>",
	"《茶馆》：老舍<sup>书 / 读物</sup>",
	"《神谱》：赫西俄德（Hesiod）<sup>书 / 读物</sup>",
	"《毁灭精神》<sup>书 / 读物</sup>",
	
	// 哲学
	"唯物主义辩证法<sup>书 / 读物</sup>",
	"《苏菲的世界》<sup>书 / 读物</sup>",
	"《道德情操论》<sup>书 / 读物</sup>",
	
	// 经济学
	"《货币战争》<sup>书 / 读物</sup>",
	"《颠倒的市场》<sup>书 / 读物</sup>",
	"《像欧奈尔信徒一样交易》<sup>书 / 读物</sup>",
	"资本论：马克思/恩格斯<sup>书 / 读物</sup>",
	
	// 人物传记
	"《乔布斯传》<sup>书 / 读物</sup>",
	
	// 杂志期刊
	"《商业价值》<sup>杂志</sup>",
	"《南方周末》<sup>杂志</sup>",
	"《经济学人》<sup>杂志</sup>",
	"《华尔街日报》<sup>杂志</sup>",
	"《时代周刊》<sup>杂志</sup>",
	"《纽约时报》<sup>杂志</sup>",
	"《金融时报》<sup>杂志</sup>",
	"《纽约客》<sup>杂志</sup>",
	"《译林》<sup>杂志</sup>",
	
	// 新闻网站
	"Reddit<sup>新闻网站</sup>",
	
	// 课程
	
	// 罗辑思维
	"罗辑思维<sup>[得到]课程</sup>",
	"邵衡头条<sup>[得到]课程</sup>",
	"每周新书盘点<sup>[得到]课程</sup>",
	"前沿科技·合成生物学<sup>[得到]课程</sup>",
	
	// 极客时间
	"卖桃者说<sup>极客时间</sup>",
	"极客观点<sup>极客时间</sup>",
	"每日一课<sup>极客时间</sup>",
	
	// 科幻小说 - 中国
	"《三体》<sup>书 / 读物</sup>",
	"《球状闪电》<sup>书 / 读物</sup>",
	"《流浪地球》<sup>书 / 读物</sup>",
	
	// 表演艺术
	"《演员的力量》<sup>书 / 读物</sup>",
	
	// 战争艺术 / 战略
	"论持久战：毛泽东<sup>书 / 读物</sup>",
	
	// 励志
	"《活下去》<sup>书 / 读物</sup>",
	
	// 著作
	
	// 达芬奇
	"《哈默手稿》[The Codex Hammer]<sup>书 / 读物</sup>",
	
	// 社会现实
	"《只差一个谎言》<sup>书 / 读物</sup>",
	
	// 未分类
	"《末世之城》<sup>书 / 读物</sup>",
	"《爱情和其他魔鬼》<sup>书 / 读物</sup>",
	"《历代经济变革得失》<sup>书 / 读物</sup>",
	"《20世纪思想史》<sup>书 / 读物</sup>",
	
	// 默认
	"[and so on.]"
	
];

// 你喜欢听的歌曲
var musics = [
	
	// 欢快
	"小嫦娥",
	
	// 电视剧
	
	// 择天记
	"星辰：张杰",
	
	// 古剑奇谭
	"剑心：李易峰",
	
	// 猎毒人
	"猎手 - 张赫宣",
	"沉默如海 - 金润吉",
	"一个人 - 耿斯汉",
	
	// 永夜
	"故长安 - 张靓颖",
	"红尘 - 魏晨",
	"永夜 - 石岩",
	
	// 古风
	"天府（双笙）",
	"闹元宵[SING女团]",
	"千盏[SING女团]",
	"隔烟水[玄觞]",
	"明月<sup>玄觞:曾年少轻狂流浪过远方</>",
	"叹郁孤",
	"东风第一枝",
	"云水谣[en]",
	"唐人：孙子涵",
	"谓风[流仙/双笙]",
	"妖谭:KBShinya/哦漏/三无/泠鸢yousa/祖娅纳惜/易世樊花/YUKIri",
	"青玉案",
	"轮回之境",
	
	// --> 王锌珏[音阙诗听]
	"慕夏 - 王锌珏[音阙诗听]",
	"处暑 - 王锌珏[音阙诗听]",
	
	// --> 赵方婧[音阙诗听]
	"寒露 - 赵方婧[音阙诗听]",
	
	// 感情 - 受伤
	"忽然想你的时候:周跳跳",
	"荒唐:杨梓霖",
	"不能说的秘密: 林俊杰",
	"你的酒馆对我打了烊<sup>陈雪凝</>",
	"心虚[梁君诺]",
	"陶喆：暗恋",
	"陶喆：Angel",
	"思念是一种病：张震岳",
	"情歌没告诉你：梁静茹",
	"丝路：梁静茹",
	"会呼吸的痛：梁静茹",
	"曹格：祝我情人节快乐",
	"说谎：林宥嘉",
	"Susan说：陶喆",
	"苦茶：黑涩会美眉",
	"江语晨：那不是爱",
	"灰色河堤：唐禹哲",
	"祝我生日快乐：温岚",
	"方大同：三人游",
	"不值得：梦飞船",
	"广东爱情故事：广东雨神",
	"三心两意([艋胛耀辉]插曲)：黄文星",
	"吴雨霏：水点",
	"肤浅：侧田",
	"陈奕迅：葡萄成熟时",
	"勇气：梁静茹",
	"童话：光良",
	"空白格：杨宗纬",
	"背叛：杨宗纬",
	"只是太爱你：张敬轩",
	"小半：陈粒",
	"蓝色土耳其：周传雄",
	"手放开",
	"汪苏泷：风度",
	"Baby don't cry：EXO M",
	"天空下着小雨：Young 7",
	"还是分开：张叶蕾",
	"陈奕迅：让我留在你身边",
	
	// 南拳妈妈
	"南拳妈妈 - 下雨天",
	
	// --> 李荣浩
	"模特[李荣浩]",
	
	// --> 薛之谦
	"高尚【薛之谦】",
	"演员[薛之谦]",
	"笑场[薛之谦]",
	"一半【薛之谦】",
	"初学者[薛之谦]",
	"怪咖【薛之谦】",
	"野心【薛之谦】",
	
	// 感情 - 美好
	"愿 - 艾辰",
	"天使 - 五月天",
	"静悄悄 - 曲肖冰",
	"Thinking of you：西野加奈",
	"我就是喜欢你：大嘴巴",
	"爱上爱：萧亚轩",
	"美：王力宏",
	"说爱你：刘至佳",
	"恋爱秘籍：叉子/蔡菲凡",
	"陪伴：纳豆",
	"对你青睐<sup>5Pring</sup>",
	"桃花旗袍<sup>By2</sup>",
	
	// 激烈 / 个性 / 境界
	"挂彩<sup>华晨宇</>",
	"零的领域：六甲乐队",
	"Walk thru fire：Vicetone/Meron Ryan",
	"惨绿少年：Swang多雷",
	
	// 也许还有希望，也许就算孤独，也要走下去，... 加油
	"无名之辈[陈雪燃]",
	"平凡之路[朴树]",
	"入阵曲[五月天]",
	"世界第一等[刘德华]",
	"RISE·登峰造极境",
	"涅槃：英雄联盟2019总决赛主题曲",
	"追梦赤子心 - 鹿晗",
	"勋章 - 鹿晗",
	"累觉不爱 - 柯有伦",
	"逍遥叹：胡歌",
	"给未来的自己：杨宗纬",
	"不服 - 汪苏泷",
	
	// 调子不错的
	
	"火星人来过[薛之谦]",
	"我就是静静：刘小静",
	
	// 欢快
	"蝴蝶泉边：黄雅莉",
	
	// 英文
	"me and my guitar",
	"Way Back<sup>Vicetone (副音乐团) / Cozi Zuehlsdorff</sup>",
	"Home (Blaze U Remix)<sup>Blaze U</sup>",
	"Up All Night<sup>Hinder</sup>",
	"Talk<sup>Why don't we</sup>",
	
	// 节奏 / 夜场
	"Batte Forte",
	"Fragments",
	
	// 动漫
	// 鬼灭之刃
	"紅蓮華 (《鬼灭之刃》TV动画片头曲) – LISA (織部里沙)",
	
	// 泽野弘之
	"Ninelie<sup>泽野弘之</sup>",
	"Through My Blood<AM><sup>泽野弘之</sup>",
	
	// 广播电台
	
	// 未分类
	
	"那个那个【周笔畅】",
	"一路不变[温岚]",
	"讲真的",
	"溯 （Reverse）feat.马吟吟",
	"我只代表我[双笙]",
	"五环之歌[张震岳/岳云鹏]",
	"绿色<sup>陈雪凝</sup>",
	"白山茶<sup>陈雪凝</sup>",
	"藏<sup>双笙</sup>",
	
	// 未分类
	"[and so on.]"
	
];

// 你喜欢去的地方
var wilds = [
    
    // 夜场 / 酒吧
    "Super Monkey<sup>夜场 / 酒吧</sup>",
    "I'm Han<sup>夜场 / 酒吧</sup>",
	
	// 虚构之地 / 神话
	"天堂",
	"地狱",
	
	// 虚构之地 / 小说
	"云顶天宫<sup>出自：盗墓笔记</sup>",
	"七星鲁王宫<sup>出自：盗墓笔记</sup>",
	"无尽之海",
	
	// 江河湖海
	"中国·三江源",
	"中国·黄河壶口",
	
	// 全球冰酒主要产区
	"加拿大·安大略省·尼亚加拉[Niagara]<sup>全球冰酒主要产地</sup>",
	"不列颠·哥伦比亚省·欧堪纳甘[Okanagan]<sup>全球冰酒主要产地</sup>",
	"中国·辽宁省本溪桓仁县·黄金冰谷[Golden Valley]<sup>全球冰酒主要产地</sup>",
	"德国·莱茵河支流地区·MOSEL地区<sup>全球冰酒主要产地</sup>",
	"法国·勃艮第北部·C.E.E<sup>全球冰酒主要产地</sup>",
	
	// 产业园区
	// 葡萄酒
	"张裕国际葡萄酒城[Chang yu international wine city]<sup>山东·烟台</sup>",
	
	// ==================
	// 北京
	
	// --> 景点
	
	"北京·十三陵",
	"故宫博物馆",
	"八达岭长城",
	
	// ==================
	// 武汉
	
	// 电脑城
	"武汉·前进路电脑城",
	"武汉·科技王电脑城",
	"武汉·中心电脑城",
	"武汉·第一电脑城",
	
	// 街道 / 区域
	"武汉·江汉路步行街",
	"武汉·昙华林",
	"武汉·花园道",
	"武汉·汉口里",
	"武汉·楚河汉街",
	"武汉·汉阳造",
	"武汉·江汉路",
	
	// 遗址 / 故居 / 老建筑
	"武汉·巴公房子",
	"武汉·晴川阁",
	"武汉·黄鹤楼",
	
	// 教堂
	"武汉·基督教荣光堂",
	"武汉·圣母无原罪堂",
	
	// 场馆
	"武汉·湖北省博物馆",
	"武汉科技馆",
	"武汉·403国际艺术中心",
	
	// 大型卖场
	"武汉·光谷世界城<sup>更懂你欢喜</sup>",
	"武汉·五环天地",
	"武汉·武商摩尔城",
	"武汉·新武汉天地",
	"武汉·洪山广场",
	"武汉·众圆广场",
	"武汉·西北湖广场",
	"武汉·武商里",
	"武汉·武汉国际广场",
	"武汉·恒隆广场",
	
	// 综合娱乐设施
	"武汉·极地海洋世界",
	"武汉·欢乐谷",
	"武汉·万达影视乐园",
	
	// 景点
	"武汉·东湖绿道",
	"武汉·园博园",
	"武汉·青龙山地铁小镇",
	"武汉·木兰草原",
	"武汉·天兴洲",
	"武汉·府河湿地",
	"武汉·石榴红村",
	"武汉·木兰花谷",
	"武汉·黄花涝古镇",
	"武汉·泥河水库",
	"武汉·涨渡湖",
	"武汉·绿地城欧洲风情小镇",
	
	// 公园
	"武汉·中山公园",
	"武汉·青少年宫",
	"武汉·沙湖公园",
	"武汉·王家墩公园",
	"武汉·西北湖公园",
	"武汉·月湖公园",
	"武汉·万国公园",
	"武汉·关山荷兰风情园",
	"武汉·马鞍山森林公园",
	"武汉·青山江滩公园",
	"武汉·金银湖国家湿地公园",
	"武汉·杜公湖国家湿地公园",
	"武汉·后官湖国家湿地公园",
	"武汉·汤湖公园",
	"武汉·藏龙岛国家湿地公园",
	"武汉·安山国家湿地公园",
	
	// 剧院
	"武汉·汉秀",
	"武汉·杂技厅",
	
	// 住
	"武汉·枣阳宾馆",
	"汉庭",
	"如家",
	"七天",
	"桔子酒店",
	
	// 吃
	"颐和味宴",
	
	// --> 吃 - 传统小吃
	"武汉民生甜食馆",
	"武汉老通城豆皮馆",
	
	// --> 吃 - 烧烤
	"么肆烤肉<sup>武汉</sup>",
	"牛八日式烧肉专门店<sup>武汉</sup>",
	"火石肉堂·东北人烤肉<sup>Meathall Flameston·始于[2006年]汉口宝丰街</sup>",
	
	// --> 吃 - 日料
	"武汉·一藤",
	"武汉·小仓匠心和食",
	"武汉·岚食堂",
	"武汉·仙人寿司",
	"武汉·味藏",
	"武汉·久藏",
	
	// --> 西餐
	"<b>武汉东米西面</b>",
	"必胜客",
	"王品台塑牛排",
	"灰鲸餐厅<sup>Grey Whale</sup>",
	"O'eat",
	
	// --> 动物
	"<b>武汉/楚河汉街·Cat Island（喵岛） [撸猫/茶/甜品/聚会]</b>",
	
	// --> 学习、读书、文艺
	"武汉·蔚来K书·自习室",
	
	// --> 喝
	"武汉·Zoo Coffee[动物园咖啡]",
	
	// --> Memories
	"武汉·M+广场<sup>Memories</sup>",
	
	// ==================
	// 上海
	
	// --> 景点
	
	"上海·海洋水族馆",
	
	// --> 吃 - 面食
	"上海·AORI神隐拉面 [面食]",
	"上海·一乐拉面",
	
	// --> 甜品
	"上海·LA Fantasia chef art studio（幻品） [甜品]",
	"上海·Brut Cake Cafe [甜品]",
	"上海·Lady M [甜品]",
	"上海·Pate [甜品:法式]",
	
	// --> 喝
	"上海·GAGA鲜语 [鲜果茶]",
	"上海·KUMA café（熊本熊咖啡厅） [咖啡]",
	"上海·Sober Company [咖啡/餐厅/私密酒吧]",
	
	// --> 吃 - 日料
	"上海·鸟啸炭火烧酒场 [日式]",
	"上海·寿司新语<sup>Memories</sup>",
	
	// --> 吃 - 西餐
	"上海·Homeslice [披萨]",
	
	// --> 吃 - 港式
	"上海·厨魔馆（DAIMON Gastrolounge）[港式]",
	
	// --> 吃 - 火锅 / 锅
	"上海·楼上火锅 [锅物]",
	
	// --> 吃 - 牛排
	"上海·Shanghai Beer Factory[牛排]",
	"上海·Ruth`s Chris[牛排]",
	"上海·Morton[牛排]",
	"上海·Bambino[牛排]",
	"上海·The Cut[牛排]",
	"上海·1515[牛排]",
	"上海·The Moon（好地方精选扒轩）[牛排]",
	"上海·罗斯福[牛排]",
	
	// --> 住
	"深坑酒店<sup>上海</sup>",
	
	// --> Memories
	
	// --> 景点
	"上海·迪士尼乐园<sup>Memories</sup>",
	"上海·东方明珠电视塔<sup>Memories</sup>",
	
	// --> 吃 - 烧烤
	"上海·新石器烤肉<sup>Memories</sup>",
	
	// --> 商场
	"上海·万嘉商业广场<sup>Memories</sup>",
	"上海·月星环球港<sup>Memories</sup>",
	"上海·正大广场<sup>Memories</sup>",
	
	// --> 区域 / 地点
	"上海·外高桥保税区<sup>Memories</sup>",
	"上海·南京路步行街<sup>Memories</sup>",
	
	// ==================
	// 浙江
	
	// --> 区域 / 地点
	
	"浙江·西塘",
	
	// ==================
	// 香港
	
	// --> 景点
	"香港·海洋世界",
	
	// ==================
	// 台湾
	
	// --> 区域 / 地点
	
	"台湾·垦丁",
	
	// ==================
	// 海南
	
	// --> 区域 / 地点
	"海南·三亚",
	
	// ==================
	// 泰国
	
	// --> 区域 / 地点
	"泰国·清迈",
	"苏梅岛",
	
	// ==================
	// 四川
	
	// --> 区域 / 地点
	"稻城亚丁",
	
	// ==================
	// 云南
	
	// --> 区域 / 地点
	
	"大理",
	
	// ==================
	// 湖北 - 孝感
	
	// --> Memories
	
	// --> 吃 - 传统小吃
	"孝感·米酒馆<sup>Memories</sup>",
	
	// --> 商场
	"孝感·乾坤新城<sup>Memories</sup>",
	"孝感·银泰城<sup>Memories</sup>",
	
	// ==================
	// 湖北 - 恩施
	
	// 景点
	"神农架",
	
	// ==================
	// 湖北 - 宜昌
	
	// --> Memories
	
	// 景点
	"宜昌·三峡大坝<sup>Memories</sup>",
	"宜昌·三峡人家<sup>Memories</sup>",
	
	// ==================
	// 印度尼西亚
	
	// --> 区域 / 地点
	
	"巴厘岛",
	
	// ==================
	// 北大西洋
	
	// --> 区域 / 地点
	
	"百慕大群岛",
	
	// ==================
	// 地区 - 虚构
	
	// --> 区域 / 地点
	
	"精绝古城",
	
	// ==================
	// 地区无关的
	
	// --> 喝
	"乐乐茶",
	"喜茶",
	"COCO奶茶",
	"茶颜悦色",
	"M Stand",
	
	// --> 速食
	"麦当劳（金拱门）",
	"肯德基（KFC·开封菜）",
	"汉堡王",
	
	// 零食
	"良品铺子",
	"苏州阿小",
	
	// --> 披萨
	"必胜客欢乐餐厅",
	
	// --> 面食
	"康师傅私房牛肉面馆",
	"泡面小食堂",
	"一乐拉面馆",
	
	// --> 中餐
	"宽窄巷子",
	
	// --> 西餐
	
	"绿茵阁",
	"半秋山",
	
	// --> 供应链美食
	"沙县小吃",
	"隆江猪脚饭",
	
	// ==================
	// 地区无关的 - 玩 - 地方
	
	// --> 主题公园
	"欢乐谷",
	"方特",
	"迪士尼乐园",
	
	// 日本
	"日本海洋公园",
	"富士急高原乐园",
	"环球影城",
	
	// 韩国
	"爱宝乐园",
	"乐天世界",
	
	// 中国
	"热高国际旅游渡假区",
	"鸡公山动漫园",
	"辛巴达欢乐城堡",
	"北京海洋馆",
	"PORORO主题乐园",
	"长影世纪城",
	"大连发现王国",
	"锦绣中华",
	"中国民俗文化村",
	"世界之窗",
	"长隆欢乐世界",
	"长隆水上乐园",
	"长隆海洋王国",
	"方特欢乐世界",
	"方特梦幻王国",
	"方特影视乐园",
	"大唐芙蓉园",
	"大明边城",
	"圆明新园",
	"宋城景区",
	"杭州乐园",
	"横店影视城",
	"开封清明上河园",
	"西双版纳傣族园",
	"弘阳欢乐世界",
	"中华恐龙园",
	"淹城春秋乐园",
	"环球动漫嬉戏谷",
	"宿迁嬉戏谷动漫王国",
	"中央电视台无锡影视基地",
	"苏州乐园",
	"天籁谷",
	"花鼓灯嘉年华主题乐园",
	"梦幻山主题公园",
	"香港海洋公园",
	
	// 澳门
	"澳门渔人码头",
	
	// 台湾
	"六福村主题游乐园",
	
	// 美国
	"艾波卡特",
	"布什公园",
	"黄石国家公园",
	
	// 欧洲
	"蒂沃利公园",
	"里瑟本游乐园",
	"欧洲主题公园",
	"奥尔顿塔",
	"加达云霄乐园",
	
	// 超市
	"沃尔玛<sup>超市</sup>",
	"中百超市<sup>超市</sup>",
	"悦活鲜<sup>超市</sup>",
	"武商量贩(wushang bulksale)<sup>超市</sup>",
	"美乐家Melaleuca<sup>超市</sup>",
	
	// ==================
	// 地区无关的 - 玩 - 项目
	
	// --> 项目
	"泡温泉",
	"看电影",
	"逛街",
	"压马路",
	"逛电脑城",
	"逛[失恋博物馆]",
	"来一次【跳伞】",
	"来一次【潜泳】",
	"来一次【攀岩】",
	"来一次【玻璃漂流】",
	"去【蹦床馆】",
	
	// ==================
	// 上网
	"去【网鱼网咖】上网",
	
	
	// ==================
	// 未分类
	
	"[and so on.]"
	
];

// 每天可能会发生的事情；
// 随机事件
// 随机好坏
var activities = [
	
	// ======
	// 疾病
	{name:"头痛", good:"也许能借此机会休息一下",bad:"有人问我[头痛]是什么？头痛就是，你没有曹操的命，却有曹操的病"},
	
	// ======
	// 个人管理
	{name:"写日记",good:"今天发生的事情，值得铭记",bad:"一天过去了，好像什么都没有做，更无从记录",weekend: true},
	
	// 品性 / 灵魂 / 心理
	{name:"埋怨",good:"为避免肺被气炸了，同时舒缓心中抑郁",bad:"别埋怨世界欠你一个美好的生活，它比你先到，什么都不欠你。[马克·吐温]"},
	
	{name:"正直",good:"走正直诚实的生活道路，必定会有一个问心无愧的归宿。[高尔基]"},
	
	{name:"停滞",good:"短暂的休憩是为了更好的远行",bad:"水若停滞即失其纯洁；心若停滞，便精气立消。[达·芬奇]"},
	
	// 个人护理 / 干净
	{name:"洗澡", good:"你几天没洗澡了？",bad:"会把设计方面的灵感洗掉", weekend:true},
	
	{name:"刷牙", good:"牙齿白白的，真可爱",bad:"你的牙齿甚至能泡腌菜了", weekend:true},
	
	// 理财
	{name:"借钱给别人", good:"雪中送炭，别人会对你心怀感激",bad:"良心喂了狗，不仅破了财，还是去了一个以为的朋友", weekend:true},
	{name:"找别人借钱", good:"实在抗不下去了，恰好身边都是好人",bad:"不仅没有借到钱，还被一顿冷嘲热讽", weekend:true},
	
	// 家务
	{name:"打扫房间", good:"一屋不扫何以扫天下？",bad:"你突然感到身心俱疲，连拿起扫帚的力气都没有", weekend:true},
	
	// 健康
	{name:"午休",good:"中午不睡觉，下午会崩溃",bad:"你太累了，直接从中午睡到了下午下班",weekend: true},
	
	{name:"遛弯",good:"多少天没出门了？给自己的沉闷的躯壳放放风",bad:"今天外面格外危险，也许一不小心会被车撞翻在地，或者被熊孩子扔下的花花草草砸中脑袋",weekend: true},
	
	{name:"锻炼一下身体", good:"你会感觉仿佛获得了新生",bad:"能量没消耗多少，吃得却更多", weekend:true},
	
	// 不太好的个人生活习惯 - 抽烟
	{name:"抽烟", good:"抽烟有利于提神，增加思维敏捷",bad:"除非你活够了，死得早点没关系", weekend: true},
	
	// ======
	// 想 / 愿望 / 思考 / 随意 / 等等
	{name:"愿", good:"愿你抚琴有人听，愿你心事有人叙",bad:"想什么想？是上班工作不饱和？还是家里有矿？还是，..？该干嘛干嘛去，动起来！"},
	
	// ======
	// 社交
	
	// 网络虚拟空间的个人行为与状态 / 登场方式
	{name:"白天上线", good:"今天白天上线是安全的",bad:"可能导致灾难性后果[你的老板找你很多天了，... ]",weekend: true},
	
	{name:"晚上上线", good:"晚上是程序员精神最好的时候",bad:"你白天已经筋疲力尽了",weekend: true},
	
	{name:"上[微博]", good:"今天发生的事不能错过",bad:"今天的微博充满负能量", weekend: true},
	
	{name:"逛[朋友圈<sup>腾讯·微信</sup>]", good:"大家过的很开心，有的人虽然很艰难但仍然积极向上，... 这一切都在鼓舞着你。你决定要与他们为伍，你开始更积极的努力、更有干劲得向上。你的生活在慢慢的变好。",bad:"今天的朋友圈充满了负能量与炫耀，让你在当前的平淡生活中仅有的幸福感更少了，... 你会一边羡慕别人，一边在自己枯燥的生活里无法自拔，又不知所措、无所适从。"},
	
	// 聊天
	{name:"给许久没有联系的朋友们发句问候吧",good:"感情需要用心经营与维护",bad:"那些你太久没联系的人都把你拉黑了，你发的信息他们都被拒收了，你的心情更糟了",weekend: true},
	
	// 爱情 / 异性
	{name:"给女朋友买衣服",good:"你的小可爱又在抱怨[没有衣服穿了]",bad:"已经无力承受更多",weekend: true},
	
	{name:"在妹子面前吹牛", good:"改善你矮穷挫的形象",bad:"会被识破", weekend:true},
	
	{name:"你的女朋友心情不好，在朋友圈宣泄情绪",good:"现在都宣泄掉了，晚上回去了你就会好过一点",bad:"你不知道她为什么又生气了，本来你要处理的事情也很烦了，所以，爱谁谁",weekend: true},
	
	// ======
	// 衣食住行
	
	// 出行
	{name:"乘坐[地铁]出行",good:"今天的[地上交通]将全线瘫痪",bad:"你也许会偶遇地铁中途停运，很尴尬",weekend: true},
	
	{name:"走路去上班",good:"会偶遇漂亮的小姐姐",bad:"所有的交通工具都瘫痪了，只能依靠自己的双脚",weekend: true},
	
	// 行为：吃
	{name:"吃？", good:"海南有句俗话说得好[能吃是福]",bad:"你今天不论吃什么都会拉肚子", weekend:true},
	
	// 食物 / 食材
	{name:"怒晴鸡<sup>产自:鬼吹灯</sup>",good:"外面那些平庸的鸡肉已经无法满足你的味蕾，你需要来自湘西怒晴县特产的怒晴鸡肉，来重新唤醒对生活的期待",
	bad:"凤品怒晴鸡会把你啄得连妈都认不出来，从此对吃鸡肉感到阴影",weekend: true},
	
	{name:"挂面", good:"今天吃面条，与你的气质更配",bad:"小心吃面都会噎着", weekend:true},
	
	// 喝的 / 饮料
	{name:"咖啡（Coffee Please.）",good:"你需要一杯星巴克，否则下午会崩溃 [传承星巴克<sup>®</sup>的咖啡热爱：始于1971]",bad:"咖啡因会让你上瘾",weekend: true},
	
	{name:"喝牛奶",good:"牛奶让你快乐，牛奶让你白白胖胖，牛奶让你可爱",bad:"喝得太多了，甚至有点奶里奶气的",weekend: true},
	
	// ======
	// 娱乐
	
	// -- 看综艺
	{name:"看《脱口秀大会》",good:"今天的段子都很好笑",bad:"今天的段子让人哭笑不得",weekend: true},
	{name:"上《脱口秀大会》",good:"李诞和池子看到了你都惊为天人，一致认为这一季的[脱口秀大王]就是你",bad:"你海选都没有通过，连[思文老公]陈璐都对你摇了摇头，表示无可奈何",weekend: true},
	
	// -- 看电影
	{name:"看场电影吧",good:"最近新出了几部很不错的电影，值得一看",bad:"看电影的时候，到处都能看到戚戚我我的情侣，这让你更难受了",weekend: true},
	
	// -- 上网
	{name:"去【网鱼网咖】上网",good:"今天上网的体验很好",bad:"今天上网人都喜欢抽烟，你会觉得很难受",weekend: true},
	
	
	// -- 看动漫
	
	// -- 视频网站
	{name:"上AB站", good:"还需要理由吗？",bad:"满屏兄贵亮瞎你的眼", weekend:true},
	
	{name:"逛[哔哩哔哩]", good:"[22]<sup>B站女神</sup>和[33]<sup>B站女神</sup>表示好久都没看到你了，很想你",bad:"是作业太没意思，还是工作太乏味？居然想看番剧，快滚去做正经事", weekend:true},
	
	// -- 看小说 / 网文
	{name:"读【庆余年】", good:"一时读一时爽，一直读一直爽",bad:"你喜欢的角色被虐得很惨，... 你甚至想给作者寄刀片", weekend:true},
	
	// -- 玩游戏
	// DOTA
	{name:"打DOTA", good:"你将有如神助",bad:"你会被虐的很惨", weekend: true},
	
	// 英雄联盟
	
	// 王者荣耀
	{name:"王者峡谷一日游", good:"你将斩获五杀",bad:"天美大神更青睐敌方英雄", weekend:true},
	
	// 其他的小游戏
	{name:"玩FlappyBird", good:"今天破纪录的几率很高",bad:"除非你想玩到把手机砸了", weekend: true},
	
	// -- 逛展览
	
	// 阿里 - 云栖大会
	{name:"参加阿里的[云栖大会]", good:"今年的亮点特别多，你会感觉世界观被刷新",bad:"参加的程序员大佬太多了，一片光头反射的聚光灯亮瞎了你的眼", weekend: true},
	
	// China Joy
	
	// -- 逛街
	{name:"去[步行街]买衣服", good:"今年新款的衣服都很合你的胃口",bad:"想买衣服的你，渐渐被路边摊的各种美食吸引，渐渐的嘴巴失控、体重失控，未来好长一段时间里你都无法穿得下漂亮的衣服了", weekend: true},
	
	// 皮一下很开心
	{name:"愚人",good:"你会看到真正对你好的人，别人也一样",bad:"骗你的人都打着让你开心的名义，你就开心不起来了",weekend:true},
	
	{name:"捉弄[异性]朋友",good:"你们的感情更好了，这让你们都感觉很开心",bad:"你捉弄的异性朋友，竟然以为你因为喜欢[他/她]，才捉弄[他/她]。你跳进黄河也洗不清了，... 你很长一段时间里见到[他/她]都会感觉很尴尬",weekend:true},
	
	// ======
	// 随机填充事件
	
	// -- 开发
	{name:"使用%t", good:"你看起来更有品位",bad:"别人会觉得你在装逼"},
	
	{name:"命名变量\"%v\"", good:"该变量使用得毫无违和感",bad:"太突兀了"},
	
	{name:"写超过%l行的方法", good:"你的代码组织的很好，长一点没关系",bad:"你的代码将混乱不堪，你自己都看不懂"},
	
	// ======
	// 工作
	
	// 工作变动 / HR层面的相关事宜
	{name:"跳槽", good:"该放手时就放手",bad:"鉴于当前的经济形势，你的下一份工作未必比现在强"},
	
	{name:"招人", good:"你面前这位有成为牛人的潜质",bad:"这人会写程序吗？"},
	
	{name:"面试", good:"面试官今天心情很好",bad:"面试官不爽，会拿你出气"},
	
	{name:"提交辞职申请", good:"你确实需要休息一下了",bad:"小心半年后才能找到下一份工作哦"},
	
	{name:"被炒鱿鱼",good:"青山不改绿水长流，旧的不去新的不来，... 还能说什么，下一次更努力点吧",bad:"公司找到了一个比你更能干更便宜的家伙，巴不得你赶快滚蛋"},
	
	{name:"申请加薪", good:"老板今天心情很好",bad:"公司正在考虑裁员"},
	
	// 工作周边的事情
	{name:"晚上加班", good:"晚上是程序员精神最好的时候",bad:"你的同事会看到有人梦游敲键盘的车祸现场，并用铁链捆住你那充斥着洪荒之力的手", weekend: true},
	
	{name:"扫清【任务表】", good:"有几个TODO列表的任务延期了很久，再拖下去不说别人会生气，你自己良心都过不去",bad:"一个任务会关联另一个任务，另一个任务会诞生新的任务，..."},
	
	{name:"开会", good:"说是开会，其实是一次很轻松和善的友好交流，... 大家都解开了困扰很久的隔阂与矛盾",bad:"小心被扣屎盆子背黑锅"},
	
	// 工作本身的事情 - IT类
	{name:"写单元测试", good:"写单元测试将减少出错",bad:"写单元测试会降低你的开发效率",weekend: true},
	
	{name:"重构", good:"代码质量得到提高",bad:"你很有可能会陷入泥潭"},
	
	{name:"提交代码", good:"遇到冲突的几率是最低的",bad:"你遇到的一大堆冲突会让你觉得自己是不是时间穿越了"},
	
	{name:"修复BUG", good:"你今天对BUG的嗅觉大大提高",bad:"新产生的BUG将比修复的更多"},
	
	{name:"代码复审", good:"发现重要问题的几率大大增加",bad:"你什么问题都发现不了，白白浪费时间"},
	
	{name:"设计评审", good:"会上大家激烈的讨论，思维的碰撞，诞生了新的设计稿，比之前的水平高了不少",bad:"人人筋疲力尽，评审就这么过了"},
	
	{name:"需求评审", good:"准备好的说辞一个都没用上，评审就过了",bad:"评审没有通过，反而多了很多新的需求"},
	
	{name:"新系统上线", good:"新系统平稳上线，并会取得巨大的成功",bad:"生产环境遇到了各种问题，前来技术支持的乙方也是一群小白，老板们的催促电话一个接一个，你的头都大了"},
	
	// ======
	// 学习
	
	// 考试
	{name:"认真复习功课", good:"你对接下来的考试信心满满",bad:"越复习，越觉得：这知识点就是不进脑子啊"},
	
	// ======
	// 样例
	// -- 样例
	
	// ======
	// 未分类的事件
	{name:"未知", good:"上帝也不知道该拿一些什么事或者什么人，给你[安排]一下",bad:"求神拜佛吧，虽然没什么用"}
	
];

// 每日箴言

//var words = [
//	{name:"某某",good:"这是一个样例。",weekend: true},
//	{name:"某某",good:"这是一个样例。",weekend: true},
//	{name:"某某",good:"这是一个样例。",weekend: true}
//];

// 每天一句话
var words = [
    
    // 探探
    "你还不来，我怎敢老去。【张爱玲】",
    "不乱于心，不困于情。不畏将来，不念过往。如此，安好。【丰子恺】",
    "喜欢一个人的心情是不听劝的，你以为我在遭受冷遇的时候，没有劝过自己吗？【八月未央】",
	
	// 广告词 / 悦活鲜
	"只要心灵之舟海飘荡在生活之海的那片蔚蓝里，她就会摇篮般的使我们的生命享受着生活中每一刻美妙的时光。",
	"一碗清水，一勺盐巴，几滴香油，几粒葱花，一点小小的改变，一碗天然的味道。",
	"艰难的成长，辛勤的收割，才有这个一粒粒晶莹剔透的大米，远远看着仿佛闻到了米饭的香味。",
	"金灿灿的颜色，纯天然的香味，是通过层层提炼得到的精华，是每一餐不可缺少的味道。",
	"每一口都是想念，每一口都是享受，挡不住的诱惑，源自内心的渴望，惬意生活与美食相伴。",
	"无数次的工艺碰撞，职位这一口美妙的味蕾体验，慢慢品味，仿佛每一次咀嚼都能激起内心的狂喜。",
	"多变的口味，给你多变好心情，薄薄一片，美妙滋味，咔吱一声，“薯”它最懂你。",
	"它，给予你家人一般的亲昵与温暖，穿上它，纵情享受家的舒适时光。",
	"清晨，一缕香气，萦绕在空气里，犹如春天的气息，清香怡人，像是被幸福包裹的味道。",
	
	// 生命科学
	"不同来源的脑瘤细胞，不管是原本就生在大脑中的胶质细胞瘤，还是扩散转移到大脑中的乳腺肿瘤，在生长的过程中，都会主动的让自己融入大现成的三维信号网当中。<br/>当神经细胞开始活动的时候，它们释放的化学信号或者电信号，都能够被脑瘤细胞敏锐的感受到，还可以在脑瘤内部被反复的传播和放大。这样一来，脑瘤就把自己变成了大脑当中异常活跃的“热点”区域，肿瘤细胞的各种机能被充分的动员起来，快速的生长、分裂、扩散和转移。【2019年9月18日：英国《自然》杂志】",
	
	// 有趣的
	"一看就会，一练就废。",
	
	// ======
	// Fate/Stay Night Unlimited Blade Works
	"其基为银与铁，基础为石与契约之大公，其祖先为吾先师，修拜因奥古。门开四方尽皆闭之，自王冠而出，于前往王国之岔路循环往复，满盈吧，满盈吧，满盈吧，满盈吧，满盈吧，周而复始，其为次五，然，满盈之时便是废弃之机。Set，宣告，汝身听吾号令，吾命寄于汝剑，若遵从圣杯之归宿，遵从此意、此理者，回应吧。在此起誓，吾乃成就世间一切善行之人，吾乃诛尽世间一切恶行之人，汝为身缠三大言灵之七天，于抑止之轮降临此处，天秤之守护者。[远贩凛·召唤Archer]",
	"放轻身行，调整重力，引用戒律，归重力于大地。[远贩凛]",
	
	// ======
	// 脱口秀大会
	
	// 张博洋
	"如果我们注定都要成为生活的乙方，至少我们可以选择当甲方的时候，对彼此善良一点。【脱口秀大会·第二季·张博洋】",
	
	// 呼兰
	"手里没活，要显得自己手里全是活，后来才知道这在表演里面叫做无实物表演。【脱口秀大会·第二季·呼兰】",
	
	// Rcok
	"你结婚，结婚不会让你了解一个人，结婚只会让你越来越不了解一个人，结婚的人说的最多的话就是[你怎么是这种人?]；结婚也不一定能证明，两个人就是真爱，但离婚可以。当你和一个人经历过争吵、绝望，经历过分割财产，最后把她的昵称从[宝宝]改成[孙子]，然后你们还能做朋友，这，才是真爱。<br/>我和她现在就还是朋友，至少我是这么认为的。而且我现在还知道她养了一条狗，也叫ROCK。【脱口秀大会·第二季·ROCK】",
	"如果我做了几天更好的自己，我就得做几天更差的自己。【脱口秀大会·第二季·ROCK】",
	
	// 庞博
	"虽然我失去了那个可以随时随地逗人开心的人设，但是我也获得了可以不用随时随地都逗人开心的自由。【脱口秀大会·第二季·庞博】",
	
	// 杨笠
	"你为啥不上清华，是因为不喜欢吗？【脱口秀大会·第二季·杨笠】",
	
	// ======
	// 古风
	"静坐常思己过，闲谈莫论人非。",
	"疏忽一时，痛苦一世。",
	"绵绵长飘三万尺，疑是银河降人间。",
	
	// ======
	// 磅礴
	"万丈红尘三杯酒，千秋大业一壶茶。",
	"我愿穿荆度棘不断奔跑，我愿与狼共舞一同前行。",
	"乾坤未定，你我都是黑马；乾坤已定，我便扭转乾坤。",
	
	// 各种考试 - 高考
	"昔者，高考雄狮；今者，莘莘学子；来者，独占鳌头",
	
	// ======
	// 想明白 - 大道理 / 鸡血
	// 2021年9月18日 14:02:54
	"布鲁斯·韦恩<sup>漫威宇宙·蝙蝠侠</sup>说：只有你逼迫这个世界，它才会变得合理 / Force the world",
	// 2021年9月14日 11:44:55
	"所见即我，好与坏都不反驳。",
	"世界其实是想放过你的，但世界却对你的遭遇无能为力。",
	// 2019年10月23日08:21:26
	"登高望远，不是为了被整个世界看到，而是为了看到整个世界。",
	"接受起伏，不抱怨，让生活变好，是一个成年人永远的责任。",
	"身材不好就去锻炼，没钱就努力去赚，别把窘境迁怒于别人。",
	// 2019年10月15日12:48:22
	"人生如棋，我愿为卒，举步虽慢，却不曾后退。",
	"道阻且长，行则将至。",
	// 2019年9月15日08:41:31
	"君不密失其国，臣不密失其身。",
	"哭与抱怨是弱者的表现，强者从不给自己找借口。",
	"置身事外谁都能心平气和，身处其中谁还会淡定从容。",
	"一步错，步步错。",
	"时间并不存在？不管存不存在，时间都是宝贵的。",
	"人生，不要被安逸所控制，决定成功的，是奋斗。人生，不要被他人所控制，决定命运的，是自己。没有过不去的坎，让自己跨越的姿势美一点。人生中，会发生什么都并不重要，重要的是你如何去应对它。",
	"人生中有太多的过客，不管你有多么的不舍，过客始终都是过客，总有一天会离开的，你要学会放手，别等到变成一种伤害再去后悔。记住：是你的跑不了，不是你的再怎么挽留也没用。",
	"该来的都会来，该走的全会走，别抗拒，别挽留，别贪恋。学着看淡一些事情。愿你永远像一个小孩子，每天都充满正能量，开始元气满满的一天。",
	"你的人生不会辜负你的。那转错的弯，流下的泪水，滴下的汗水，全都让你成为独一无二的自己。只是努力了一阵子，但一遇到困难就各种忧伤，好像自己努力了很久一样。",
	"勇敢做自己，不要为任何人而改变。心存希望，幸福就会降临你；心存梦想，机遇就会笼罩你；心存坚持，快乐就会常伴你；心存真诚，平安就会跟随你；一旦有了贪欲，就注定要失去。如果你简单，这个世界就对你简单。",
	"如果你今天不努力，明天也不努力，那么你的人生只是在重复而已。你要坚信每天叫醒你的不是闹钟，而是心中的梦想，新的一年开始了，你唯一应该努力去超越的人，是过去的自己。",
	"心在哪里，收获就在哪里。人这一生能力有限，但是努力无限。努力做一个善良的人，做一个心态阳光的人，做一个积极向上的人，用正能量激发自己，也感染身边的人。用最美的心情迎接每天的朝阳！你阳光，世界也会因你而光彩。",
	"别把人生想得太难。走过生命的逆旅，人世沧桑，谁都会彷徨，会忧伤，会有苦雨寒箫的幽怨，也会有月落乌啼的悲凉。但有限的生命不允许我们挥霍那份属于人生的苦辣酸甜。经历了风寒阴霾的苦砺，才会破茧在阳光明媚的日子。",
	"年轻的特性不就是要青春阳光乐观向上，整天胡思乱想不着边际，没有恐惧毫不畏惧，对未来充满希望吗？即使多少会有担忧和焦虑，那也应该能被年轻的勇气平衡掉，冲淡掉。未来是我们的，做就对了！",
	"别人越是瞧不上你，你就越要努力，别人越是打击你，你越要做出成绩来。活着的意义并不是衣食无忧，而是拿出勇气去做你不敢做的事，去尝试未曾尝试过的人生！",
	"人生如一局棋，应该多一些主动的出击，少一些消极的龟缩；人生如一幅画，应该多一些亮丽的着色，少一些灰色的基调；人生如一支歌，应该多一些昂扬的吟唱，少一些哀婉的咏叹。",
	"做人做事最好的状态就是：不刻意。不刻意自我表现，也不刻意淡泊名利；不刻意迎合，也不刻意狂狷；不刻意追逐流行，也不刻意卓尔不群。如是，则不心累，不纠结，不失望。",
	"生活，需要一点阳光，生命，需要一些勇敢，纠结过去，担心未来，都不如抓住当下，过去是梦，未来是影，现在才是真真切切的人生。",
	"眼泪不是我们的答案，拼搏才是我们的选择。让我们全心全意地收获生活的每一天，在平凡的日子里感受生命的美好，在耕耘里感受劳动的快乐和收获的期待。",
	"时间是挺公平，活一天就拥有24小时，差别只是珍惜。你若不相信努力和时光，时光一定第一个辜负你。请告诉自己：立刻行动!!因为现在过的每一天，都是余生中最年轻的一天！",
	"别人拥有的，你不必羡慕，只要努力，你也会拥有；自己拥有的，你不必炫耀，因为别人也在奋斗，也会拥有。多一点快乐，少一点烦恼，不论富或穷，地位高或低，知识浅或深。每天开心笑，累了就睡觉，醒了就微笑。",
	"把努力当成一种习惯，而不是三分钟热度。坚持才是王道，每一个你羡慕的收获，都是别人努力用心拼来的。你可以抱怨，也可以无视，但记住，不努力，连输的资格都没有！",
	"这个世界很浮华，不要走得太快，有时候需要停一停，静一静，想一想，沉淀思绪后，重新出发，你一定要相信，没有到不了的明天。",
	"不想去吃苦，注定会吃苦一辈子！永远不要为自己的懒惰找借口，自律的人生一定会慢慢跟别人拉开距离！每天进步一点点，早晚有一天会变得比别人好太多！",
	"要永远坚信这一点：一切都会变的，无论受多大创伤心情多么沉重，一贫如洗也好，都要坚持住。太阳落了还会升起，不幸的日子总会有尽头，过去是这样，将来也是这样。",
	"身健如山，心静似水，淡泊名利。这是人生的最高境界，谁能活得如此境界，谁的一生就活得自在。",
	"如果有一天，让你心动的再也感动不了你，让你愤怒的再也激怒不了你，让你悲伤的再也不能让你流泪，你便知道这时光，这生活给了你什么，你为了成长，付出了什么。",
	"有多少人以友谊的名义，爱着一个人，认为拥有，就是失去的开始。",
	"能救你脱出苦海的只有你自己。让自己变得更好，才是唯一的出路。",
	"有时候，没有下一次，没有机会重来，没有暂停继续。有时候，错过了现在，就永远永远的没机会了。",
	"真正的坚韧，应该是哭的时候要彻底，笑的时候要开怀，说的时候要淋漓尽致，做的时候要毫不犹豫。",
	"世界上最远的距离，不是爱，不是恨，而是熟悉的人，渐渐变得陌生。",
	"多数的错失，是因为不坚持，不努力，不挽留，然后催眠自己说一切都是命运。",
	"宁愿因做自己而招人厌恶，也不愿为了迎合他人而伪装自己，懂你的人会留下来，不懂你的人，你祈求不来。因为别人活得不快乐，不如为了自己活得更自由。",
	"每个人都有自己的泪要擦，每个人都有自己的路要走，只要记得：冷了，给自己加件外衣；饿了，给自己买个面包；痛了，给自己一份坚强；失败了，给自己一个目标；跌倒了，在伤痛中爬起，给自己一个宽容的微笑继续往前走，已足够！不必仰望别人，自己亦是风景。",
	"失去认认真真的第一次爱后，男人可能不会再那样对女孩子真正好了，没有心劲，没有激情，没有对浪漫爱情的信仰了！有些事，一辈子只有一次！",
	"生活就像是一盘巧克力，你永远不知道会碰到什么味道。",
	"我相信，无论今后的道路多么坎坷，只要抓住今天，迟早会在奋斗中尝到人生的甘甜。抓住人生中的一分一秒，胜过虚度中的一月一年！",
	"茶不过两种姿态，浮、沉；饮茶人不过两种姿势，拿起、放下。人生如茶，沉时坦然，浮时淡然，拿得起也需要放得下。",
	"人生寂寞是一种力量。人经得起寂寞，就能获得自由；耐不住寂寞，就会受人牵制。",
	"君子的力量永远是行动的力量，而不是语言的力量。",
	"生活有苦有甜，才叫完整。日子有阴有晴，才叫自然。心情有悲有喜，才叫体会。爱情有闹有和，才叫情趣。",
	"你坚持下来了，而别人坚持不下来，这就是你的资本。",
	"人生就像一杯茶，不会苦一辈子，但总会苦一阵子。",
	"生活不可能像你想象得那么好，但也不会像你想象得那么糟。我觉得人的脆弱和坚强都超乎自己的想象。有时，我可能脆弱得一句话就泪流满面；有时，也发现自己咬着牙走了很长的路。",
	"所谓门槛，能力够了就是门，能力不够就是槛。",
	"生活并不容易。",
	"所谓理想与现实之间的差距，就是你夹起来以为是块肉，咬下去才知道是块姜。",
	"人人都忙于自己的欢喜与忧伤，哪有空去顾你的孤独和悲凉。有这个自怨自艾的闲工夫，不如踏踏实实做好自己的事情。",
	"生活从来不会十全十美，往往鲜花和荆棘并存。你要允许生命中有些裂缝，如此阳光才能照得进来。",
	"心灵的愉悦，来自精神的富有；简单的快乐，来自心态的知足。",
	"两种朋友值得结交：能借给你钱的人，按时还给你钱的人。",
	"让梦想照进现实，才是当下最应该做的事情！",
	"朝着一个目标不停的向前，不断努力的付出，哪怕你现在的人生是从零开始，你都可以做得到。",
	"人生难免会有些遗憾，但毕竟是一场单向旅程，我们也没有从头再来的机会，与其纠结无法改变的过去，不如微笑着珍惜现在。",
	"谁的人生不是荆棘前行，你跌倒的时候，懊恼的时候，品尝眼泪的时候，都请你不要轻言放弃，因为从来没有一种坚持会被辜负。请你相信，你的坚持，终将美好。",
	"如果没能力把眼前的苟且过好，就暂时不要去想诗和远方",
	"不要借别人的眼光来审视你的人生画卷，因为他们可能是色盲",
	"吃人嘴软，拿人手短。",
	"运气的本质，是复杂系统孕育出的，超出已知经验的解决方案。系统越复杂，我们有运气的机会就越大。",
	"物种，在未来时代还有一个巨大的意义。<br />地球上至少有几百万个物种，它们能存活到今天，本质上都是特定环境下的一个成功解决方案，是一套成功应对环境的算法。那都是用漫长的时间，经过反复试错，最后被证明有效的算法。<br />所以，本质上，地球上有多少物种，就有多少基因，就有多少极端问题的解决方案。<br />在人类可以控制算法，有能力精密使用算法的时代，物种就是人类参考的对象，它们就是已经写好的解决方案。",
	"只要有目标，人生不怕如戏。",
	"你做过一次手术，就知道喝药根本算不上苦<br/>你狠狠摔倒过，就知道擦破皮不值得哭<br/>你被背叛过，就知道吵两句嘴不伤真感情<br/>希望你慢慢学会长大<br/>希望你开始不在意受伤<br/>希望你伤痕累累，但依然闪闪发光。",
	"每个人的时间都那么宝贵，每个人的生活里本来就充满了鸡毛蒜皮、柴米油盐的小时，但你若长困于不好的心态，你的生活只会围绕在异地鸡毛里，当别人跟你相处时，也会觉得特别累。<br/>人与人之间的相处其实是一门艺术，这门艺术很简单也很复杂。对于干脆的人来说，无论遇到多么复杂的事情，也会让人觉得跟他相处很简单；而对于纠结的人来说，无论遇到多简单的事，都会让人觉得处理起来特别复杂。",
	"后来发现，那些真正的狠角儿，都不是能言善辩的人，而是谨言慎行的。他们不会因为愤怒而失态，不会因为心有不满而言语中伤。他们不动声色的收起善意，沉默的给你一个下马威。",
	"一个人知道想要怎样生活，便可以忍受现在的种种心魔。",
	"最可怕的是，比你牛逼的人比你更努力。",
	"只要你相信一件事情，坚持一件事情，命运是不会辜负有心人的。",
	"不改掉这些，你会【穷】得很【稳定】：懒 / 清高 / 情商低 / 脸皮薄 / 不爱学习 / 不懂社交 / 舍不得吃亏 / 不敢闯不敢拼 / 不懂得求助别人 / 没有目标，浑浑噩噩",
	"有过很多想用省略号的话语，总觉得还有好多想法没有说明白，但最后，都觉得没有什么比突兀的句号更能平息戛然而止的期望。",
	"观念不同，经历不同，想法不同，眼光不同，.. 不必理解，相互尊重。",
	"我命由我不由天。",
	"越是害怕，越是不安的时候，就越要微笑去面对。",
	"越是努力的追求，越是发现【极致】的伟大。",
	"如果一份工作本身价值不够，钱又不多，还每天忙得要死，根本没时间成长，你就很危险了，你很可能会长期在最基层工作很难跳脱，甚至久而久之，你习惯了那状态，丧失了成长的能力。一个人不怕现状不好，怕的是习惯了，心死了，这是废掉一个人最隐蔽的方式。",	
	"成长这件事，一定是贯穿整个职业生涯的，甚至是一辈子的事，任何时候，都不能让自己忙到连成长的时间都没有，你现在再强，如果你的成长是停滞的，你也很快被别人淘汰，因为别人在成长。要有增量思维，持续有增量成长，而不是一直消耗存量。",	
	"一份好工作的标准里必须有一条：你有时间成长。",	
	"如果你每天、每周、每个月都忙到没时间成长，那么你每一天的工作，都是在消耗存量。你的存量是有限的，一定是越消耗越少。",
	"一个人在职场里持续上升，必须要有持续的增量成长。",
	"因为学习是一种习惯，成长是一种习惯，精进也是一种习惯，你若是一年两年里都忙到没时间成长，你最终也会习惯了每天不成长的状态，毕竟不成长本身也是人最舒服的状态。",	
	"你必须有时间成长，而不是无休止的工作。",
	"你一定要控制好自己的工作节奏，不用推进的太猛，每天早点下班，周末也不用这么拼。你空出来的时间，除了休息好，就是用来自我成长。比如，你的工作需要写东西，那么你必须保证每天拿出固定的时间学习、大量阅读、听课，甚至这要变成一个强制性学习任务，跟你的工作任务同样重要，甚至你上班时间做也没关系。",	
	"废掉一个人最快的方式，就是让他闲着。",
	"废掉一个人最隐蔽的方式，是让他忙到没时间成长。",
	"有哪些道理是你读了不信，听不进去，直到你亲身经历才笃信不疑的？永远不要低估你的能力，永远不要高估你的毅力。",
	"最能燃起你学习激情的一句话是什么？不能把这个世界，让给你鄙视和鄙视你的人。",
	"情商不高的例子有哪些？对陌生人毕恭毕敬，对自己人暴躁如雷。",
	"如何看待“年轻的时候需要的是朋友，而不是人脉”？沒有目的之交往，才能真正打动人心。",
	"为什么有些事对别人来说只是举手之劳，可他们却不愿帮忙？做一件事并不是因为它简单，而是因为它是否值得。",
	"哪些行为是在浪费时间？思而不学和犹豫不决。",
	"哪些行为容易得罪别人，自己却不容易察觉？太把别人当自己人。",
	"“知行合一”到底如何理解？又怎样运用到实际生活中？知道做不到，等于不知道。",
	"省钱的好办法有哪些？在买任何东西之前，请牢记九字箴言：你喜欢，你需要，你适合（适用于很多事，包括感情也一样）",
	"30岁才开始学习写作、英语、音乐靠谱吗？种一棵树最好的时间是十年前，其次是现在。",
	"前半生与后半生的分界线是在哪里？此时此刻。",
	"要怎样努力，才能成为很厉害的人？只要埋头过完自己的坎，自然有人会分心落后。最后你自然就是一个很厉害的人。",
	"人这一生为什么要努力？让自己有拒绝别人的能力，让自己对人生多一点控制力。",
	"什么样的人活得最幸福？不攀比的人。",
	"工作三年，26岁了，却将留学三年，值得吗？普通玩家选择标准配置，高端玩家选择自定义配置。",
	"怎样做到“不抱怨”？自知者不怨人，知命者不怨天。",
	"哪些技能，经过较短时间的学习，就可以给人的生活带来巨大帮助？夸奖他人。",
	"为什么看到好照片时，人们通常的反应是“真不错，你用的是什么相机”？而当看到烂照片时，则往往笑话拍摄者水平很烂？人们习惯将自己的成功归因于自身，把失败归因于环境，而将他人的成功归因于环境，失败归因于其自身。",
	"同样是别人比自己强，为什么有时会产生嫉妒，而有时会产生崇拜？近的会嫉妒，远的会崇拜；够得着的会嫉妒，够不着的会崇拜；有利益冲突的会嫉妒，没利益冲突的会崇拜。",
	"你对自由的理解是什么？说“不”的能力。",
	"如何反驳“现实点，这个社会就是这样”？你是怎样，你的世界就是怎样。",
	"怎么确定对方是能一辈子和我在一起的人？钱钟书对杨绛有这样一段评价，被视为理想婚姻的典范：“在遇到她以前，我从未想过结婚的事；和她在一起这么多年，从未后悔过娶她做妻子；也从未想过娶别的女人。”",
	"国外哪些事物让你感觉还不如呆在国内？得到了天空，失去了大地。",
	"如何让这个世界变得美好？先让你自己变得更美好。",
	"长期的异国生活，改变了你的哪些“是非观”？很多事情只是不同，并无是非。",
	"把学费拿来念书，还是环游世界更合适？在没有充分知识的前提下，即使行了万里路，也不过是邮差而已。",
	"你最希望自己年轻的时候，该知道哪些道理？内心的感受，比外面的大道理重要。",
	"做哪些事情可以提升生活品质？定期扔東西。",
	"“别让孩子输在起跑线上”有道理吗？一辈子都要和别人去比较，是人生悲剧的源头。",
	"怎么定义“想清楚了”？“想清楚了”就是以后出了什么问题，只能谴责自己，再也不能抱怨别人。",
	"你交朋友的标准是什么？出世的智者，入世的强者，或者正常阳光的普通人。",
	"什么叫见过大世面？能享受最好的，能承受最坏的。",
	"我们焦虑与人际，大多是觉得自己不够好，不够优秀，其实别人压根没觉得你应该优秀。",	
	"我坐在下面，想着自己等下要上去，特别的紧张，很担心自己到时候吼不出来，越想不紧张。但是当我真的站在上面，放开了吼的时候，我发现其实和我想的不一样，当能够专注于自己吼出来的时候，焦虑全部消退了。",	
	"焦虑来自你的想象，别人对你没有预设，预设是你自己给自己的。",
	"世界上最大的幸福莫过于我还可以经历喜怒哀惧，我现在过得就是我的生活呀！一切都是最好的选择！",	
	"我心由我，我梦由我，幸福是自己就可以掌控的！",	
	"回首往事没有一样，我觉得是过不去的坎儿，可当时都不这么觉得的。<br/>现在这个坎儿，以后又算的了什么。",	
	"我现在正是中年，大好的时光，一切看起来不如意不可改变的事物，我都有可能改变他，还有什么比这更好的呢？",	
	"九阳神功心决:他强由他强，清风拂山岗；他横由他横，明月照大江。",	
	"我无法承诺你的生活中不会有痛苦与失去，因为痛苦是生活的一部分，它成就了今天的我们，它使你成为英雄。",	
	"把每件事都看成是幸运的。",	
	"何必拿别人的行为来烦恼自己。",	
	"改变能改变的，接收不能改变的。",	
	"每件事每个人出现在你的生命中都不是偶然，都会上天安排来教会你一些东西。",
	"哪有什么岁月静好，是有人为你负重前行。",
	"越是厉害的人，就越不会在乎外界给予的头衔和标签，他们学会了真正去拥抱生活，去享受做事所获得的乐趣。",
	"胡歌是一个没有太多身份感的人，在他的心中，把戏演好，给别人传递温暖才是最重要的。",
	"胡歌的微博简介是什么？很多人可能从来没有注意过，但他的简介就是两个字：演员。",
	"人应该更注重内心的预约，而不是虚无的身份感。",
	"人活到极致，一定是素与简，当很多人还在拼命往自己身上加东西的时候，他们已经在拼命给自己减东西了",
	"刘青云不会管自己是不是影帝，出门买菜的时候被记者随机街头采访，他没有生气记者没有认出他来，反倒会认真回答记者问题。",	
	"周润发不会管自己是不是国际巨星，出行的时候就一个背包和帽子，和市民一起挤地铁。",
	"太在乎自己的身份和地位，太在乎自己的名誉和头衔，这是一个人执念最深的事情，也是很难活得通透的原因。",
	"【自我损耗】每做一个选择，每在乎一个头衔或者外在物质，就会损耗一点心理能量；每损耗一点心理能量，你就会渐渐变得麻木，渐渐变得很难快乐起来。",
	"我们活在一个巨大的名利场里面，不断攀比，不断贬踩，这或许就是我们活得不开心的原因。",
	"一个人，越缺什么，越炫耀什么。",
	"很多的烦恼源于不够狠心，做什么都要顾及别人的感受，你总顾及别人，谁来顾及你。",
	"当你学会拒绝别人，学会以牙还牙的时候，他们反而会尊重你，甚至敬畏你。你要相信一句话，有时候，无情一点，没有错。",
	"不动声色的努力，享受独处。",
	"如果你一天到晚拿着手机，刷着抖音，整日宅在家里看电视上网，做着那些80岁以后能干的事情，你要青春干什么？",
	"刺猬知道一件大事，而狐狸知道很多小事。",
	"永远不要让你的脾气比你现在的本事还大。",
	"给自己一个感动自己的人生经历。",
	"知世故而不世故，善自嘲而不嘲人。",
	"别把自己太当回事，也别把自己太不当回事，... 对任何人都是这样。",
	"认清自己吧，...",
	"当万恶的金钱站出来说话时，一切的真理都应保持沉默。",
	"当绝对的权力坐下来谈判时，万恶的金钱都要瑟瑟发抖。",
	"他记得随时校正方向，朝着自己点亮的那座灯塔前行。",
	"百因必有果。",
	
	// 危害的征兆
	"人不会重复拥有童年，手机正在毁了它。",
	
	// 亲情
	"我真的很怕，当他们彻底老去的时候，我依然是现在这个不成器的样子。怕我不仅给不了他们更好的生活，反而成为他们，最放心不下的牵挂。",
	"努力让父母过上更好的生活吧。",
	"当母亲，是不成功便成仁的高风险职业。",
	
	// 煽情
	"什么样的声音，能让你瞬间想到家？",
	"说说那些让你想起家的声音。",
	"什么样的声音，能让你瞬间想到家？<br/>7点一到，新闻联播的开场音乐准时奏响；<br/>摇晃的地铁上，飘进耳朵的一句乡音；<br/>躺在小屋里听着窗外的暴雨声，好像回到了童年的暑假；<br/>路过一所学校，听见久远又熟悉的下课铃；<br/>铁铲划过铁锅，油花噼里啪啦，似乎下一秒，妈妈就会喊你擦桌子吃饭了；<br/>……<br/>漂泊在外，想家的情绪可以被藏得很好，也可以在无意中浮出表面。无论走到哪里，听见家的声音，就是听见幸福。",
	
	// ======
	// 也许还有希望 / 积极点
	"莫道君行早，更有早行人。",
	"我们生活在阴沟里，但仍有人仰望星空。",
	"什么正经事也没干，也是一门艺术。",
	"如何像大作家一样诗意地...磨洋工？",
	"下决心要做的事情，就保持不动声色、心潮澎湃。",
	"一位CEO在癌症治愈后说：“自从经历了那次生病之后，我最大的收获就是不怕事，我一点都不怕事，什么事来我都不怕。”",	
	"人所担心的事情99%以上都不会发生。",	
	"一切都是最好的安排。",
	"此时正当修行时。",
	"去交会让你开心的朋友，去爱不会让你流泪的人，去向你自己想去的地方，去完成无论大小的梦想。生活应该是美好而温柔的，你也是。",
	"钱买不到快乐，但可以买甜点。",
	"行走江湖除了丢掉儿女情长，还需要丢点糖。",
	"你是如何走出人生的阴霾的？多走几步。",
	"退一步海阔天空。",
	"此心安处是吾乡。",
	"除了生死其他的都是小事。",	
	"你看啊，其实人生处处是惊喜。",	
	"祝你生活愉快。",	
	"苦的日子都已经过去了，再苦一点也还是会过去的。",	
	"有人的地方就有苟且，不论眼前还是远方，然而只要停一会静静听，处处都有诗。",	
	"今天是我余生中最年轻的一天。",	
	"老子天下无敌，就酱。",	
	"最好的，尚未到来。",	
	"找到自己想要什么。",
	"恭喜你啊，你是个可爱、有趣、智慧的大美人，哈哈，祝福今天的【XXX】工作顺利（聚会愉快、漫步开心等等），又是收获的一天呢。",	
	"人生如此艰难，就不要跟自己过不去了。",	
	"此生漫长，值得等待。",	
	"南风知我意，吹梦到西洲。[西洲曲:南北朝]",
	"冲破桎梏，涅槃重生。",
	"不管怎么样，我都要让自己活得开心。",
	"此生尽兴，赤诚善良。",
	"如果事与愿违，那么上天一定另有安排。",
	"希望春天能带来很多惊喜。",
	"希望夏天能带来很多惊喜。",
	"希望秋天能带来很多惊喜。",
	"希望冬天能带来很多惊喜。",
	"希望它们能引领你走进异乡温柔的良夜。",
	"人生最好的三种状态：不期而遇，不言而喻，不药而愈。",
	"外界的声音都是参考，你不开心就不要参考。",
	"不知道什么时候才是个头，突然也想有家有她。[I don't know when I will be tall and suddenly I want to have her at home.]",
	"人间忽晚，山河已秋。",
	
	// 一禅小和尚
	"不用刻意讨好谁，因为只有做自己，才配得上最棒的人生。",
	"有些爱无法说出口，却也往往最难放下。",
	"注定不能在一起，命运却要安排我们相遇，这也许是感情中最令人心酸的事。",
	
	// ======
	// 情感、感悟 - 丧 / 失望 / 不开心
	"从来都是，酿酒的人，分外清醒，独善其身。",
	"一个十几岁的女孩说想嫁给你是真的想嫁给你，她什么都不图你的。我拿整个青春跟你赌，我求你，别让我输。",
	"一个二十几岁的男孩说想娶你是真的想娶你，他什么都不图你的，他也什么都没有，他就想对你好。我拿整个青春跟你赌，我求你，别让我输。",
	"现在的我，什么都能放下，<br/>除了手机。<br/>不是我有多爱手机，<br/>而是因为除了手机，<br/>没人陪我。",
	"你有没有被喜欢的人误会过呢？",
	"真是疼得我怀疑人生了，...",
	"好白菜都被猪拱了。",
	"关于心动，我只想隔岸观火，直到熄灭。",
	"永远不被理解，永远不被珍惜。",
	"我的地狱失火，众生人间失格，我的神明却要顾众生，对我笑着说抱歉。",
	"想她了吧？",
	"过了今天，我就忘了你，好吗？",
	"我爱这哭不出来的浪漫。",
	"你什么时候有时间？",
	"想要变得成熟？<br/>很简单，... <br/>去全心全意爱一个错的人，... <br/>只要一次，<br/>就长大了。",
	"人的一生会说很多谎，其中最容易脱口而出的是【没事】<br/>是的，我没事。",
	"世界上有一种傻子，他们自己最难过的时候，却在安慰别人。有时候，我们就是手欠啊，喜欢去翻那些能影响自己心情的东西，... 医不自医，人不渡己。",
	"我每天都在笑，你猜我过得好不好。",
	"我每天都在笑，你猜我开不开心。",
	"每天都在平静的崩溃。",
	"温柔的人通常是这样诞生的：他们亲身经历许许多多的难过后，决定让其他人不再像自己这般难过。这份血淋淋的体贴，人们称它为【温柔】",
	"感情不必拿来感慨，深爱不需用来显摆。",
	"祝你岁月无波澜，敬我余生不悲欢。",
	"木兰弃剑，庄周梦蝶，情丝入骨，恩赐成劫。",	
	"以前，我是个爱仰望天空的人，苍蓝的天空总是给了我求生的勇气，而现在，我喜欢深邃的夜空，包容一切的黑暗和隐忍，留下眼泪也没人看见。",	
	"面无表情的擦肩而过，都是装的。",
	"不是你愿意翻山越岭，就会有人想见你，所爱隔山海，山海皆可平。你就算平了这山海，也无用。",
	"像极了友情。",
	"像极了爱情。",
	"如果你很喜欢很喜欢一个人，那么保持一个朋友的距离就够了，这样可以一辈子。千万不要靠近，人一旦有了贪欲，就注定要失去。",	
	"从没在一起，和最后没在一起，哪一个更遗憾。",
	"懒得再去认识一个异性了，再去问名字、问年龄，再聊天、再了解对方、再磨合，.. 一想到这些，就已经烦了。",
	"那种瞒着父母瞒着朋友，自己承受着各种委屈，晚上躲在被子里哭的泣不成声，白天还要笑着面对，你有过吗？",
	"你是我义无反顾撞过的南墙，是我黄粱一梦的空欢喜一场。",
	"总要习惯一个人。",
	"幼儿园门口两个小孩子聊天，小女孩问小男孩【有什么是你不会的吗】男孩子说【我不会离开你】，男孩子充满期待的问【那你有什么不会的吗】，女孩笑了笑【我不会喜欢你】。",
	"决定放弃他的那个晚上，她几乎花光了所有勇气。",
	"有时候，梦想只能在梦中想想。",
	"有些人真的很奇怪，明明我只是用了他对待我的方式对待他，他居然生气了。",
	"愿你出走半生，归来仍似少年。",
	"我不再回头了。",
	"上天从来不会亏待痴情的人，只会往死里整。",
	"小时候一瓶二厂的汽水就能开心，现在，.. 需要五瓶酒。",
	"听过最落寞的一句话，或诗句是什么？不如意事常八九，可与言者无二三。",
	"感情里最大的善良，若是不喜欢，就及时斩断对方所有念想。因为希望破灭后，是更深的绝望。",
	"本是青灯不归客，却因浊酒留风尘；星光不问赶路人，时光不负有心人。贪得一场曲终人散。",
	"不管你昨晚经历了怎样的撕心裂肺，早上醒来，这个城市依旧车水马龙，人语嚣喧。没有人在乎你失去了什么，也没有人关心你的不快乐。好好爱自己，加油。",
	"永远不要隔着手机屏幕对一个人产生好感，我试过，死得很惨，.. 很惨。",
	"也许，这个世界真的变了，太过温柔被称为备胎，太过热情被称为舔狗，太过真情被称为直男，太过浪漫被称为花心。",
	"其实，我也是很羡慕别的小女生收到花，收到唇膏，收到各种各样的惊喜，我嘴上说，反正我都买得起，但还是偷偷羡慕过；所以希望啊，拜托拜托，送花给我，偷偷准备热门色号的唇膏给我，摸摸我头，天冷的时候，把我的手放在你的口袋里，俗气而又热烈的喜欢我。",
	"我喜欢上TA了，对不起。",
	"哪天，你爱上别人了，记得告诉我，我会尊重你。",
	"喜欢一个人，始于颜值，陷于才华，忠于人品，痴于肉体，迷于声音，最后....，折于物质，败给现实。",
	"故事的开头都差不多，我当时怎么为你花尽心思，现在...，也怎么绞尽脑汁的去对待另一个人。",
	"若能避开猛烈的欢喜，自然也不会有悲痛来袭",
	"哪里会有人喜欢孤独，不过是不喜欢失望罢了，...",
	"I love you once, But no longer now",
	"最近我发现，<br/>我已不记得你的样子，<br/>不记得你微笑的样子。<br/>我很开心，<br/>时间<b>终是</b>救了我。",
	"人生建议：不要轻易恋爱。",
	"我这辈子放过你了，下辈子记得带我回家。",
	"在金钱的诱惑面前，人性是如此的脆弱。",
	"原来，所有的开心都是可以在一瞬间崩塌的。",
	"人过得越浑浊，就越喜欢最干净的东西。",
	"如果你手机的电量就是你现在的生活状态，它是多少？",
	"及时止损，是成年人感情中最高级的自律。",
	"周杰伦的厉害之处在于，明明你没谈过恋爱，听完他的歌后，却像是经历过一场轰轰烈烈的爱情。",
	"不是老歌突然变好听了，而是我们有故事了。",
	"所以，究竟是人心复杂了，还是社会太冷漠了？",
	"为了爱情，有多少人在前任那里学会了懂事，在现任这里变得小心翼翼。",
	"你说，世间什么最难得？徒手摘星，爱而不得。世人万千，再难遇我。",
	"你说，世间什么最难得？",
	"师傅，这首歌？<br/>嗯，不好意思我换一首。<br/>不是，放大声一点吧。",
	"不会抱怨，只会一个又一个的冷落，最后只剩自己一个人。",
	"我知道她走了，我只是舍不得。",
	"第一个让你心动的人教会了你什么？",
	"人不动情，不动人心，则天下无敌。",
	"让我教教你生存之道把，绝对不要说出自己的真心话。",
	"<s>还</s>记得<s>你第一次暗恋的那个人吗？</s>",
	"其实我存过你的照片，也研究过你的星座，你感兴趣的事我也想了解，... 我远比表面上更喜欢你，但是我没有说。",
	"也许只是因为时间，... 不是因为爱情，... 祝你幸福，即使没有我。",
	"后来，我故意把天聊死，故意听不懂任何暗示，看穿了所有套路，对任何人都没了兴趣，...",
	"像小孩子一样，...",
	"你会如何处理前任留下的东西？",
	"天道自有轮回，你给的辜负和温柔总会有一个人替我偿还。",
	"不对谁抱有期待，也是一种自我保护。",
	"你跋山涉水想要见的人不会记住你，他只会记住那个他翻山越岭要去见的人。",
	"别爱我，没结果。",
	"你有脾气吗，...？",
	"如果你连崩溃都要考虑后果，... 究竟是懂事，还是无能为力。",
	"无声爆裂",
	"爆裂无声",
	"成年人的崩溃都是安静的。",
	"原以为三十岁离自己很远，回头一看，十八岁已经留在了多年以前。",
	"当人遇到神，也许会怂，也许会干。",
	"失望攒够了，连生气都会平静。",
	"三千繁华，弹指刹那。",
	"爱情从来不是独立存在的，要落实到穿衣、吃饭、睡觉、数钱。",
	"成长，大概就是将你的哭声，调成静音的过程。",
	"深夜的每一秒都有不同的故事发生，今天的画里，或许有某一夜的你。",
	"但，不管如何，长夜漫漫，愿你好梦，晚安。",
	"流浪白领是指工作不在家所在的城市的高级打工仔，周围很多，包括我。",
	"今天下雨的原因找到了，昨天的调养被一个男人和两只狗开车偷走了。",
	"有人问我[你喜欢什么样的女孩子]，... 我又要开始形容你了。",
	"有人问我[你喜欢什么样的男孩子]，... 我又要开始形容你了。",
	"不准回头，不准偷偷想念，你要好好的往前。",
	"如果所有的人都理解你，那你得普通成什么样子。",
	"你以为你真的放弃了吗，... 呵呵。有能耐，你听她声音试试，你见她一面试试，让她拥抱你一下试试。朱茵说，如果他真的爱你，你是逃不掉的。",
	"以为此生只消兵来将挡，哪知因一人溃不能防。",
	"细节，真的会毁掉一段看上去相安无事的感情。",
	"得不到就是得不到，别总说你不想要。",
	"问所有女孩一个问题，不要撒谎【如果一个男的给你钱，对你好，不跟别人暧昧，只图你陪他安安稳稳，... 你会不会让他输】",
	"生活总是这个样子，不能叫人处处都满意，但是我们还是要热情的活下去。",
	"这个世界很病态，有人喜欢硬撑，有人喜欢浪荡，... 可是有的人，明明难过的要命，还要笑。",
	
	// 失恋博物馆
	"如果能做成一个代代相传的失恋博物馆，过上几十年后，那时的年轻人再回头看，就能从这些东西上知道，原来上一代人经历了这样的失恋故事，这感觉真好。",
	"一个朋友失恋了。她像大扫荡一样重新收拾房间里的东西，扔掉许多跟前任曾经共同拥有的东西，但也有一些昔日的纪念品，在即将扔进垃圾桶的那一瞬，又让她心软了。扔了可惜，留着伤心，这也许就是失恋后环顾身边物品的最大感受。",
	"几乎每一个失恋的人都会遇到这个困扰，也正因为这样，人们创办了失恋博物馆：在克罗地亚，一座失恋博物馆里收藏着1000多件伤心纪念物；而在北京宋庄“透•青年众创空间”，王颖和她的伙伴也经营了这样一座博物馆。",
	"王颖平时在北京一家互联网金融公司工作，在工作之外的日子里，她叫帆帆，专门收集失恋。",
	"创建失恋博物馆的时候，我从没想过世界上会有这么多奇妙的爱情故事，以及形形色色的人。从2015年11月到现在，我已经收集了100多件失恋纪念品，和与之相随的100多个爱情故事，100多种分手方式，以及100多种走出失恋的方法。",
	"有时候收到的纪念品让我感到不可思议。在我们的博物馆天花板上，挂着一张试卷。这是一个失恋的男孩寄来的纪念品，他去参加成人考试，还没答完考卷就睡着了，梦里梦到自己也在考试，坐在他后面的是个女孩，他们一见钟情。梦到这儿他醒了，扭头一看，坐在后座的居然真是一个女孩，于是他立马信命地跟女孩表了白。当然，梦里的姻缘安排可能不太准，他和女孩相处不久就发现不合适，分手了。这张定情考卷也就成了他的失恋纪念。",
	"不过这种匪夷所思的纪念物只是少数。在博物馆里，数量最多的还是戒指，各种各样的戒指，刻着LOVE字样的、画着心型的、寓意一生一世的石头做的，它们可能曾经是两个人戴的对戒，但捐到失恋博物馆的时候，大多都只剩下一只。",
	"我们把这些纪念品悬挂在博物馆里，旁边写着和它有关的失恋故事——恋爱时拍的合影，写的交换日记，送的项链和手表，长得像男友的玩偶，不想扔掉的八音盒，和恋人一起拼的拼图，一起在鼓浪屿旅行时买的纪念册，前男友喜欢打的乒乓球，还有初恋送的、舍不得吃而早已过期的巧克力，以及学生时代两个人恋爱时、天天打电话用的老式手机。",
	"这里面也有很多是昂贵的纪念，像是貂绒围巾、99K纯金戒指、奢侈品包包，我们把它悬挂在博物馆最顶上，生怕它被偷了。",
	"当然还有很多纪念品，是没有办法悬挂展示的。有个女孩每次失恋，就会在自己身上纹一个纹身，“把每一段恋情都刻在自己身上”。她身上现在有四个纹身，相处时间越长，纹身图案越大。最近一次的失恋记忆非常痛苦，她就在手腕内侧痛感最明显的地方纹上了代表“你的谎言”的图案。我看着那些纹身就在想，她大概是想通过这种切肤的疼痛，让自己记住曾经的感情吧。",
	"我收集到的另一个没法在博物馆里展示的失恋纪念品，是一首歌。这也是一个女孩分享的故事，她和她的前男友从小一起长大，大概是因为太过于熟悉，似乎总是处于“友达以上，恋人未满”的状态，他们也试着相处过，却总有矛盾。她说有次大学开学，坐火车返校，男孩在站台送她，在火车缓缓出发的时候，他追着她所在的车厢，隔着车窗，为她唱了光良的《童话》，“你要相信，相信我们会像童话故事里，幸福和快乐是结局”。<br/>她寄给我这个故事的时候说，后来他们没有在一起，现在她已经结婚了，对方也有了自己的家庭，也有了孩子。这首歌是她对那段恋情最珍惜的一段回忆，可既然现在大家都已经有了各自生活，她只是想找个地方，把这个故事放下。",
	"每次捐出纪念品之前，我都会认真地问他们：你们真的决定要把这样东西捐出来了吗？大多数的人都会立刻毫不犹豫地回答，不要了，再也不要了。<br/>但不少人也会在这种决绝之后，犹豫着追问一句：如果有一天我后悔了，还能把纪念品取回来吗？<br/>他们当然可以把失恋纪念品取回去，我还会幻想，也许失恋的情侣复合了，他们会一起出现，把当初的失恋纪念品取回去。只是直到今天为止，这样的故事还从来没有发生过。",
	"鼓起勇气面对失恋，发现当时多搞笑。",
	"刚开始办活动的时候，我的心里也有点打鼓，让别人拿出美好回忆的纪念品很容易，但是失恋毕竟是一件伤心的事，真的有人会有扎心的纪念品吗？于是那段时间我总问别人，你分手后还留着前任的东西吗？<br/>结果，回答扔掉和留下的人几乎一样多。扔掉派的主要理由是：分手那天生气全扔了；搬家的时候嫌碍事扔了；我都结婚了，不扔掉是准备留着给老公碍眼吗？<br/>还有务实派的人特别认真地反问我，你怎么能留着这种东西呢？要是值钱，得赶紧卖了换钱啊！<br/>而留下的人也有自己的道理：这个Prada包包虽然是他买的，但是这么好看怎么能扔呢？我平时自己还得用呢！",
	"我倒是觉得，虽然他们给我的答案五花八门，可很多失恋的人的心境是相似的。我们多多少少都不愿意把过去完全抹掉。失恋大概是我们大多数人成长的必经过程，很多人试图刻意忘记，就好像从来都没有发生过一样，这并不是真的走出来了。每次我都会让他们留下和失恋纪念品有关的故事，这并不是想让他们再次伤心，而是希望用这种分享的方式，让自己能够真正地放下。",
	"在失恋博物馆，除了固定的失恋纪念物品展示，我们还会组织失恋分享会。在这里，每次有12个人坐在一起，男生女生大概一半一半，分享各自的失恋故事。因为我觉得在失恋这件事上，每个人需要的是不同的鸡汤。大家可以从不同的分享中，得到自己想要的那碗鸡汤。",
	"这是失恋者难得的讨论机会，他们还常常在谈到相似话题的时候产生强烈共鸣，特别是谈到渣男、劈腿、相亲、AA制、凤凰男的时候，场面异常热烈。几乎每个人都能讲得出一两个渣男的无耻故事，劈腿闺蜜啦，控制欲强啦，暴力打人啦，吃软饭骗钱啦，自私小气没担当啦……",
	"有次我自己静下来算了下，好像大多数时候大家吐槽的都是“渣男”，却几乎没怎么听说过“渣女”。就连在场的男人都会积极地参与“渣男讨论”，义愤填膺地指责另一个男人。他们甚至还会以“内行人”的身份，教育在场的女生，“你们不懂，男朋友一般跟你提出分手，都是已经找好了下家了，做足了万全准备才分的”。",
	"每次听他们这样分享，我觉得挺逗的。虽然分享的是失恋，但也许因为能够坦然面对了，反而能够用调侃的心情一笑而过。",
	"有个男生分享自己的分手经历，是在回家过年的时候，在路边遇到了自己的女朋友跟陌生男人牵手走在一起。他特冷静打电话质问她，结果对方说，既然你都碰上了，咱们就借着这个机会分手吧，反正年也过完了。现在讲起这段的时候，他笑着总结说，原来自己就是那种“女朋友留着过年的人”啊。",
	"我遇到过一个女孩，她的失恋纪念是手绘漫画。她每次谈恋爱，都要求男朋友为她画一幅漫画，记录他们相处的日常生活细节。我当时还想，万一男生不会画画，那她是不是就不跟他谈恋爱了？结果还真是，她的男朋友们都会画画，画风还各不相同。所以对她来说，虽然恋爱失败了，但得到了不少漫画，所幸每一张画得都还不错。",
	"还有个女孩说，她跟男友分手后一直不肯放弃，想要挽回，坐火车千里迢迢追去前男友家里找他。好不容易两个人见了面，一起吃饭，可就在啃鸡脖的时候，她突然觉得自己不想跟他在一起了。没有任何其他原因，真的就是在啃鸡脖的一瞬间感到了乏味。于是，不好吃的鸡脖子就成了她对那段恋情的最后一个纪念品。",
	"重新面对这些纪念品的时候，真的能够清晰地看到一段感情的源起和消失。有个人的纪念品是两封明信片，第一封是刚开始热恋的时候男友寄的，上面甜蜜地写着To my baby，而另一封是分手的时候寄的，上面写收信人，规规矩矩地写上了她的全名。",
	"博物馆展览过的最特别的纪念品，是一个人的离婚证。直到见到实物我才知道，离婚证和结婚证长得几乎一样，都是紫红色的封皮，唯一的不同是，结婚证烫金字，离婚证烫银字。",
	"失恋纪念品的分享故事，让我学到了很多技巧，虽然有些是我一辈子也不想使用的技巧。比如，当你看到恋人查看新消息的时候总是侧着脸躲着你，那么要小心，他可能要离开你了。",
	"更多时候，我其实很佩服这些失恋的人，特别是他们面对现实的果决和勇气。我遇到一个女孩，她飞去美国，想要挽回自己的男朋友，一路自驾追到了加州，可最终并没有成功。回来的路上，她报名参加了一次一万五千英尺的高空跳伞，用这种方式告别了上一段恋情。后来，她从美国带回来了一块纪念车牌，捐到了博物馆。对她来说，这块车牌见证了她坚守感情的决心，而纵身一跃的那一瞬间，她已经获得了重生。",
	"在最近一次的失恋分享里，有一段分享者的领悟给我感触很深。她说，虽然失恋留给自己的是伤心的回忆，可是她并不怨恨这个人。如果没有经历这个人，她可能也会遇到其他人，未见得能够走得更远。恋爱的时候总是容易深陷其中，一切都以对方为中心运转，但失恋更多是一种成长，让自己面对恋情更理性，学着拿捏和恋人相处的尺度，也要有属于自己的那部分生活天地。",
	"博物馆收到的唯一一份同性恋人的失恋纪念品，是一套精心制作的相册，里面用照片记录了她们从相识到分手的全过程。捐相册的女孩说，因为家里强烈的反对，她们不得不分开，这段感情不被祝福，但如果这本相册能留得下，对自己也是一种安慰，至少在世界的这个角落，她们的故事依然存在着。",
	"这大概就是我的初衷。我希望失恋博物馆能成为一个大家安置过往的地方。有时候我在想，要是这件事能一直做下去就好了。如果能做成个代代相传的失恋博物馆，过上几十年后，那时的年轻人再回头看，就能从这些东西上知道，原来上一代人经历了这样的失恋故事，这感觉真好。",
	"看着那些寄托了往日美好感情的纪念物，读着那些人分享的过往瞬间，我有时候会突然很好奇，那个分手的另一方、这件物品曾经的另一个主人，如果再次看到它，会是什么样的心情？他会怎么面对这件事？如果他们因为这个纪念物重逢，那又会是什么样的故事？",
	"我总不能耗尽一生等你一句有可能。",
	"我忘记了你，但输入法却记得。",
	"可是没有假如。",
	"我淋过最大的雨，是你深夜里的不回头。",
	"若能避开猛烈的喜欢 自然不会有悲痛来袭，仅一夜之隔 我心竞判若两人。",
	"你把青涩和挚爱都给了我，最后把生活给了另外一个她。",
	"昨天梦见他，给我擦眼泪，说没好好爱我，他很惭愧。",
	"你爱我的样子我见过，所以你后来不爱我了的时候我一眼就看出来了。",
	"我曾用最干净的眼睛，最干净的心，在最干净的时光，爱过你。",
	"爱过你，但现在不爱了。",
	"黄钻到期了，也不想续费了，你空间我不去了。",
	"有多少黑名单曾互道晚安！",
	"他说喜欢你，又没说只喜欢你一个。",
	"先生啊，好想成为你的例外和最爱。",
	"等你音讯全无，我再去爱这世间万物。",
	"人们都说失去后才懂得珍惜，可珍惜后的失去比什么都痛。",
	"如果有一天我消失不见了，会不会有个人拼了命去找我。",
	"有些人，明明知道爱上会受伤，偏偏要爱，我们一直如此，一边深爱，一边伤害。细细想来，很多的爱，谁不是一边受伤、一边成长！",
	"最无情的不是人，是时间；最珍贵的不是金钱，是情感；最可怕的不是失恋，是心身不全；最舒适的不是酒店，是家里；最难听的不是脏话，是无言；最美好的不是未来，是今天。",
	"也许，伤得彻底，才会放得彻底。",
	"有时候，没有下一次，没有机会重来，没有暂停继续。",
	"生活坏到一定程度就会好起来，因为它无法更坏。所以我们心中应该总是充满阳光。",
	"人生的路，靠的是自己一步步取走，真正能保护你的，是你自己的选择。而真正能伤害你的，也是一样，自己的选择。决定人生的，不是命运，而是你自己的每一次抉择。",
	"看到里面很多话和物品，还是挺有感触的，在别人的故事里，留着自己的泪。<sup>失恋博物馆</sup>",
	"仔细看了看别人写的，有的是谩骂，有的是不甘，有的是伤感，有的是希望。突然有一瞬间觉得，试炼有什么大不了的，你看着密密麻麻的心碎，这就是人生常态啊。<sup>失恋博物馆</sup>",
	"你放心敷衍吧，借口我帮你找。<sup>失恋博物馆</sup>",
	"让我再看你一遍，从南到北。<sup>失恋博物馆</sup>",
	"以后啊，你不喜欢的女孩子就不要逗她笑。<sup>失恋博物馆</sup>",
	"反正你从来不害怕失去我。<sup>失恋博物馆</sup>",
	"想到你不爱我就什么底气都没了。<sup>失恋博物馆</sup>",
	"她是我遥不可及的梦。<sup>失恋博物馆</sup>",
	"暗恋是一个人的兵荒马乱<sup>失恋博物馆</sup>",
	"以前多好，想得少，睡得早，也喜欢笑。<sup>失恋博物馆</sup>",
	"我喜欢你啊，却用友情开错了头。<sup>失恋博物馆</sup>",
	"灯熄了，我可以哭了吗。<sup>失恋博物馆</sup>",
	"世界有个遗忘的角落，我的心永远执着。<sup>失恋博物馆</sup>",
	"我曾也为她戒过烟！<sup>失恋博物馆</sup>",
	"后来，终于不异地了，我在离她几百米的地方工作。但是，我们却分开了。<sup>失恋博物馆</sup>",
	"你要好好爱我！<sup>失恋博物馆</sup>",
	"希望所有走散的人们啊，在很久以后的某个拐角遇见，都能释怀的说一句：好久不见。<sup>失恋博物馆</sup>",
	
	// ======
	// 看起来在恋爱
	"和喜欢的人说话，声音也会偷偷的变温柔。",
	"想对你说的，都藏在假装没看你的余光里。",
	"喜欢一切温柔的事物。",
	"因为你，我想要变成一个更好的人，不想成为你的负担，因此发奋，只是想证明我足以与你相配。",
	"来不，一起游戏呀，臭哥哥们。",
	"我这不叫菜，叫可爱。",
	"纵山海万里，也要来寻你。",
	"来@一个喜欢的人，让[ta]把你接走吧。",
	"马上要恋爱啦，和谁还不知道，不过先替他高兴一下！",
	"爱有很多种，愿意为你做任何事，包括尊严和性命，却不会说给你听。",
	"但愿我和你，是一支唱不完的歌。",
	"谁家的傻白甜小媳妇，快过来认领了。",
	"大家好我是女的，以后大家都是朋友，你们可以叫我女朋友。",
	"说白了，我也不是好人，见一个爱一个。但是，只要你不离开我，我就不会遇到下一个。",
	"近我者甜。",
	"男孩说【我是做底层架构的】女孩问【什么时候升到中高层？】",
	"或许更让我庆幸的，不是遇到了爱情，而是遇到了你。",
	"找到那个一直宠你的，就在一起吧。",
	"翩翩少年，丰神俊朗，鲜衣怒马，恣意风流。",
	"一眼见你，万物不及。",
	"（姐姐）弟弟，你觉得我这个衣服好看嘛？（弟弟）哇哦，这么好看的衣服，你不去整个容搭配一下嘛？",
	"你心中的完美爱情是怎么样的？可以有不完美。",
	"你是谁的白衣少年，为何留恋人世间。",
	"我把你当朋友，你居然想睡我。",
	"越长大就越明白，你需要的不再是疯狂的爱情，而是一个不会离开你的人。",
	"但愿日子清静，抬头遇见的都是柔情。",
	"心理学上说，对一个人的好感最多存在4个月，一旦超过，那可能就是爱了；真正的爱不是一时的好感，而是，我知道遇到你不容易，错过了会很可惜。",
	"只要能遇见你，我愿花光所有运气。",
	"被男生朋友拉出来一起看电影。<br />检票时才知道我俩已经迟到了半个小时。边检票我边催朋友赶紧走。<br />检票阿姨说:“不要着急，一般好戏都在后面。”",
	"我的小可爱们，你们都出来，我想你们了。",
	"女孩子一旦耍帅起来，真的没男孩子什么事了。",
	"你喜欢的人，都叫你什么？",
	"又惹她生气了，你们猜我是用什么哄好她的？",
	"星河滚烫，你是人间理想.",
	"皓月清凉，你是人间曙光.",
	"人海冷漠，你是人间炽热.",
	"满眼星河，你是清风满月.",
	"万事沉浮，你是人间归途.",
	"众生平庸，你是人间星光.",
	"世间无常，你是人间琳琅.",
	"满树繁华，你是心之所往.",
	"明月黯淡，你是最后曙光.",
	"山花烂漫，你是昨夜晓凤.",
	"人间苦咸，你是甜中透糖.",
	"浩瀚银河，你是华星秋月.",
	"你眸海温涟,藏山高水远,我的人间.",
	"海似心诚,似瞳眸,似思念,似回忆,似情,似你.",
	"海棠花又盛开了.",
	"眉宇间藏山海，眼眸里含星辰。",
	"海有舟可渡，山有路可行。此爱翻山海，山海皆可平",
	"平生一顾至此终年.",
	"我一生渴望被人收藏好，妥善安放，细心保存，免我惊，免我苦，免我四下流离，免我无枝可依。",
	"也落俗套，也说爱你。",
	"古往今来的盛世，赠予你。",
	"不论你身在何处，哪怕远隔万里，我都会跨越山海去找你。",
	"我<s>不</s>喜欢你",
	"以前觉得自己是手控，后来又觉得自己是腿控，然后又怀疑自己是锁骨控或者是足控，... 到今天我才终于觉悟了，我就是单纯的好色而已，跟控不控的没啥关系。",
	"一花一世界，一叶一追寻，一曲一场叹，一生为一人。",
	"你是我见过最好的，如果还有比你好的，我就当没看见。",
	"流言蜚语传得再凶，你说没有，就没有。",
	"这辈子最骄傲的事，就是能一辈子吃你做的饭。",
	"刚刚亲了一下风，待会它会吹到你的脸上。",
	"你觉得，女生最撩人的地方是哪里。",
	
	// 女生是这么认识世界的
	"20出头的男生，别说有责任心了，你要是让他不开心不高兴，放心吧，姐妹，连良心都不带有的啊。",
	"发一个素颜视频，别说化妆了区别大什么的。不是为了区别大，谁会辛辛苦苦的在镜子面前折腾一个小时？",
	"想要找一个男闺蜜，信息可以秒回的，最好不在一个城市，以后伤心了可以去他的城市呆一段时间，反正没人认识我。",
	"我拽归我拽，你拽就拜拜。",
	"我还是喜欢穷的男孩子，毕竟我也穷得势均力敌。",
	"男生可以接受比自己大的女生吗？",
	"你们男孩子都喜欢多高的女孩子呀？我175。",
	"我不会随便谈恋爱，我想一谈谈到结婚，并且我对待感情专一，不是我传统，而是我要对爱我的人和自己负责。",
	
	// 双十一
	"如今的双思议已经变味了，失去了传统节日的内涵。希望大家不忘初心，不要因为狂买东西，而忘记了自己是单身狗的事实。",
	
	// IT
	"我有个愿望，从今以后，中关村没有秃头。<sup>爆肝工程师的狂想</sup>",
	
	// ======
	// 游戏
	
	// *************************************
	// --- 英雄联盟
	
	// 盖伦
	"守护与我同在。<sup>英雄联盟·盖伦</sup>",
	
	// 易大师
	"我记得，有种温暖，叫做，希望。<sup>英雄联盟·易大师</sup>",
	"真正的大师，永远怀有一颗学徒的心。<sup>英雄联盟·易大师</sup>",
	"绝不要坐等胜利的到来。<sup>英雄联盟·易大师</sup>",
	
	// *************************************
	// --- 王者荣耀
	
	// 老夫子
	"天不生夫子，万古如长夜，说的就是老夫。[老夫子·王者荣耀]",
	"灰（孔）派气功。[老夫子·王者荣耀]",
	"有朋友自远方来，不亦乐乎。[老夫子·王者荣耀]",
	"手滑了一下下。[老夫子·王者荣耀]",
	"收集三千弟子，召唤多少神龙，都小菜一碟。[老夫子·王者荣耀]",
	"人生如此艰难，对会输这事，就不好拆穿了。[老夫子·王者荣耀]",
	"不努力的人，应该像好色那样好学。[老夫子·王者荣耀]",
	"好好教导你，什么是尊师重道。[老夫子·王者荣耀]",
	"严师棒下出高徒。[老夫子·王者荣耀]",
	"哎，闪到腰了，先撤了。[老夫子·王者荣耀]",
	
	// 刘禅
	"蓉城是我家，老爹最伟大。[刘禅·王者荣耀]",
	"小小少年，没有烦恼，万事都有老爹罩。[刘禅·王者荣耀]",
	"什么，那里是禁区。[刘禅·王者荣耀]",
	"路边草丛开，不踩白不踩。[刘禅·王者荣耀]",
	"你颤抖的样子好好玩呀。[刘禅·王者荣耀]",
	"聒噪的老头子们，闭嘴。[刘禅·王者荣耀]",
	"被追着轰的滋味，爽么。[刘禅·王者荣耀]",
	"坐稳了，初号机开启暴走状态。[刘禅·王者荣耀]",
	"蓉城小霸王，威力无穷。[刘禅·王者荣耀]",
	"少爷我从不坑爹。[刘禅·王者荣耀]",
	"打脸啪啪啪。[刘禅·王者荣耀]",
	"我老爹都没打过我。[刘禅·王者荣耀]",
	
	// 安琪拉
	"知识就是力量。[安琪拉·王者荣耀]",
	"萝莉身，御姐心。[安琪拉·王者荣耀]",
	"一不小心就造出了个大家伙。[安琪拉·王者荣耀]",
	"吊车尾的家伙们，羞羞羞。[安琪拉·王者荣耀]",
	"魔法，为我而存在。[安琪拉·王者荣耀]",
	"哦，火烧屁屁咯。[安琪拉·王者荣耀]",
	"Binggo，人家就是来砸场子的。[安琪拉·王者荣耀]",
	"生命就像人家的玩偶，修修补补又是一年。[安琪拉·王者荣耀]",
	"神秘，屈从于更高的神秘。[安琪拉·王者荣耀]",
	"我很生气，后果很严重。[安琪拉·王者荣耀]",
	"玩火，自焚。[安琪拉·王者荣耀]",
	"炸裂吧，宝贝儿。[安琪拉·王者荣耀]",
	
	// 吕布
	"放心吧貂蝉，我的心永远属于你。[吕布·王者荣耀]",
	"叮叮当叮叮当铃儿响叮当，呵，作为酷男牺牲很大。[吕布·王者荣耀]",
	"嗯~这颗圣诞树很称手！。[吕布·王者荣耀]",
	"哟~又是一个没收到圣诞卡片的可怜家伙。[吕布·王者荣耀]",
	"嘿！对面的电灯泡们，好好羡慕嫉妒恨吧！。[吕布·王者荣耀]",
	"看你孤单寂寞冷，就勉强陪你过个节。[吕布·王者荣耀]",
	"将我摧毁在黑暗中。[吕布·王者荣耀]",
	"心中的黑暗在不断膨胀。[吕布·王者荣耀]",
	"无法得到那就将他彻底毁掉。[吕布·王者荣耀]",
	"从此刻开始，战场由我一人主宰。[吕布·王者荣耀]",
	"我的貂蝉在哪里？[吕布·王者荣耀]",
	"放马过来吧，哈哈哈～～。[吕布·王者荣耀]",
	"杀戮的冲动，再也无法驾驭。[吕布·王者荣耀]",
	"神挡杀神。[吕布·王者荣耀]",
	"战场，由我一人主宰。[吕布·王者荣耀]",
	
	// 达摩
	"健实的身材来自持久不懈的锻炼。[达摩·王者荣耀]",
	"贫僧自东土大唐而来，要去往西方取经之地。[达摩·王者荣耀]",
	"肩挑凡事，拳握初心。[达摩·王者荣耀]",
	"阿弥陀佛，贫僧这就超度施主。[达摩·王者荣耀]",
	"走不通的路就用拳头来打开。[达摩·王者荣耀]",
	"道路很远，脚步更长。[达摩·王者荣耀]",
	"死亡面前，众生平等。[达摩·王者荣耀]",
	"人生是场穷游，偶尔也需要暴走。[达摩·王者荣耀]",
	"苦海无边，回头是岸。[达摩·王者荣耀]",
	
	// 嬴政
	"天上天下，唯朕独尊。[嬴政·王者荣耀]",
	"朕会用宽广的心胸包容美女们的大不敬。[嬴政·王者荣耀]",
	"做爱做的事，身为君主就是这么任性。[嬴政·王者荣耀]",
	"充满愉悦的被朕粉碎吧。[嬴政·王者荣耀]",
	"诛你九族。[嬴政·王者荣耀]",
	"趴在朕脚下的蝼蚁，除了默默死去，没有第二条路。[嬴政·王者荣耀]",
	"蝼蚁们和朕的实力之间隔着一座万里长城。[嬴政·王者荣耀]",
	"蝼蚁们和朕的实力之间隔着一座万里长城。[嬴政·王者荣耀]",
	"出乎意料的有趣。[嬴政·王者荣耀]",
	
	// 赵云
	"赵子龙，参见。[赵云·王者荣耀]",
	"抱歉，你挡路了。[赵云·王者荣耀]",
	"阁下的首级，我收下了。[赵云·王者荣耀]",
	"枪尖在燃烧。[赵云·王者荣耀]",
	"勇者之誓，胜于生死。[赵云·王者荣耀]",
	"心怀不惧，方能翱翔于天际。[赵云·王者荣耀]",
	
	// 王昭君
	"凛冬已至，故乡的梅花开了吗。[王昭君·王者荣耀]",
	"心已经融化。[王昭君·王者荣耀]",
	"身躯已然冰封，灵魂仍旧火热。[王昭君·王者荣耀]",
	"寒梅，无处不在。[王昭君·王者荣耀]",
	"替你们消消火。[王昭君·王者荣耀]",
	"百梅落下之日，归去故里之时。[王昭君·王者荣耀]",
	"美貌是种罪孽，暴雪也无法掩埋。[王昭君·王者荣耀]",
	"看见了.....故乡的.......春天。[王昭君·王者荣耀]",
	
	// 鲁班七号
	"啦哈哈哈哈，不得了了。[鲁班七号·王者荣耀]",
	"有人需要技术支持吗。[鲁班七号·王者荣耀]",
	"鲁班大师，智商二百五，膜拜，极度膜拜。[鲁班七号·王者荣耀]",
	"正在思考，如何攻克地心引力。[鲁班七号·王者荣耀]",
	"请你们绕行，见识新发明的威力。[鲁班七号·王者荣耀]",
	"不得不承认，有时候肌肉比头脑管用。[鲁班七号·王者荣耀]",
	"检测了对面的智商，嘿嘿嘿，看来无法发挥全部实力啦。[鲁班七号·王者荣耀]",
	"漏漏漏漏漏漏油啦。[鲁班七号·王者荣耀]",
	"看，天上的飞机。[鲁班七号·王者荣耀]",
	"相信科学。[鲁班七号·王者荣耀]",
	"刮风了，吓到了。[鲁班七号·王者荣耀]",
	"我想静～静～～。[鲁班七号·王者荣耀]",
	
	// 孙膑
	"人家这么可爱，当然是男孩子。[孙膑·王者荣耀]",
	"你很眼熟嘛，咱们一定在2355年遇见过！[孙膑·王者荣耀]",
	"这身造型是在2355年后发过来的，帅不。[孙膑·王者荣耀]",
	"失去双脚得到穿越时间的力量，这就是等价交换。[孙膑·王者荣耀]",
	"时间与波浪，变幻无常。[孙膑·王者荣耀]",
	"我在寻找一个迷路的人，我要指引他回家。[孙膑·王者荣耀]",
	"嘀嗒～嘀嗒～嘀嗒～嘀嗒～。[孙膑·王者荣耀]",
	"我知道这个故事的结局，想不想知道剧透呢？。[孙膑·王者荣耀]",
	"我的时间到此为止！。[孙膑·王者荣耀]",
	"哈！争分夺秒！[孙膑·王者荣耀]",
	
	// 孙尚香
	"大小姐驾到，通通闪开。[孙尚香·王者荣耀]",
	"来一发吗？满足你！。[孙尚香·王者荣耀]",
	"纳里，你也是本小姐粉丝吗。[孙尚香·王者荣耀]",
	"淑女什么的，才不屑呢。[孙尚香·王者荣耀]",
	"没人气的家伙，不值得浪费炮火。[孙尚香·王者荣耀]",
	"送你一个轰轰烈烈的排场，感谢本小姐大恩大德吧。[孙尚香·王者荣耀]",
	"除了炮弹，本小姐没别的跟你们交流了。[孙尚香·王者荣耀]",
	"你，也是本小姐的粉丝吗。[孙尚香·王者荣耀]",
	"百发百中。[孙尚香·王者荣耀]",
	"哈～～～，轰得不要太爽。[孙尚香·王者荣耀]",
	"野外徘徊的可怜家伙，能够收获的只有炮火。[孙尚香·王者荣耀]",
	
	// 韩信
	"不做无法实现的梦。[韩信·王者荣耀]",
	"必将百倍奉还。[韩信·王者荣耀]",
	"到达胜利之前，无法回头。[韩信·王者荣耀]",
	"你的脑袋里好像少了些什么。[韩信·王者荣耀]",
	"不当赢家就只有死路一条。[韩信·王者荣耀]",
	"人总得有个活着的理由。[韩信·王者荣耀]",
	"各取所需而已。[韩信·王者荣耀]",
	"正义，不过是胜利的又一个别称。[韩信·王者荣耀]",
	"垫背的，怎么都不嫌多。[韩信·王者荣耀]",
	"啊，好难受。[韩信·王者荣耀]",
	"我没有输。[韩信·王者荣耀]",
	
	// 扁鹊
	"人人都是行尸走肉。[扁鹊·王者荣耀]",
	"死亡是第二次生命。[扁鹊·王者荣耀]",
	"操纵生死啊？哼，愚不可及。[扁鹊·王者荣耀]",
	"命长的是赢家。[扁鹊·王者荣耀]",
	"该吃药了，良药苦口。[扁鹊·王者荣耀]",
	"命不是廉价品，治疗很昂贵。[扁鹊·王者荣耀]",
	"生存还是死亡，这是个问题。[扁鹊·王者荣耀]",
	"别放弃治疗。[扁鹊·王者荣耀]",
	"善良的只有死人。[扁鹊·王者荣耀]",
	"哈哈，上吧，行尸走肉。[扁鹊·王者荣耀]",
	"无可避免地…腐朽了…。[扁鹊·王者荣耀]",
	"切，一群病入膏肓的家伙。[扁鹊·王者荣耀]",
	
	// 荆轲
	"不是记忆中的荆轲。[荆轲·王者荣耀]",
	"但致命的程度，没两样。[荆轲·王者荣耀]",
	"我，是你惹不起的。[荆轲·王者荣耀]",
	"非死不可。[荆轲·王者荣耀]",
	"不知道你的名字，但清楚你的死期。[荆轲·王者荣耀]",
	"你已经死了。[荆轲·王者荣耀]",
	"没我快。[荆轲·王者荣耀]",
	"只相信本能。[荆轲·王者荣耀]",
	"想叫就叫吧，反正是最后一声了。[荆轲·王者荣耀]",
	
	// 妲己
	"请尽情吩咐妲己，主人。[妲己·王者荣耀]",
	"为什么会痛苦，一直微笑就好了。[妲己·王者荣耀]",
	"努力做主人喜欢的事。[妲己·王者荣耀]",
	"主人的命令是绝对的。[妲己·王者荣耀]",
	"主人的命令是绝对的。[妲己·王者荣耀]",
	"妲己陪你玩。[妲己·王者荣耀]",
	"来和妲己玩耍吧。[妲己·王者荣耀]",
	"啊，被玩坏了。[妲己·王者荣耀]",
	"羁绊是什么意思。[妲己·王者荣耀]",
	"主人的敌人就是妲己的敌人。[妲己·王者荣耀]",
	"妲己会一直爱主人，因为这是设定好的。[妲己·王者荣耀]",
	
	// 亚瑟
	"永不背叛。[亚瑟·王者荣耀]",
	"为王者的信念，连睡觉也穿着铠甲。[亚瑟·王者荣耀]",
	"圣光，你有看到那个敌人吗。[亚瑟·王者荣耀]",
	"王者背负，王者审判，王者不可阻挡。[亚瑟·王者荣耀]",
	"命运所在，别无选择。[亚瑟·王者荣耀]",
	"理想乡呼唤着我。[亚瑟·王者荣耀]",
	"不要被欲望玷污。[亚瑟·王者荣耀]",
	"因剑而亡。[亚瑟·王者荣耀]",
	"理想乡在呼唤着我。[亚瑟·王者荣耀]",
	"亡灵们，执行我的意志。[亚瑟·王者荣耀]",
	"没错，这是黑化后的亚瑟，现在最流行的设定。[亚瑟·王者荣耀]",
	"向我乞求怜悯吧，我会狠狠拒绝你。[亚瑟·王者荣耀]",
	"和我一样有名的只有一个，就是巫妖王。[亚瑟·王者荣耀]",
	"不负此生，誓死征服世界。[亚瑟·王者荣耀]",
	"黑暗死亡骑士并非死掉的骑士。[亚瑟·王者荣耀]",
	"你们前进的动力真的是正义吗，哈哈哈～～～。[亚瑟·王者荣耀]",
	"上吧，行尸走肉们。[亚瑟·王者荣耀]",
	"特别疯狂。[亚瑟·王者荣耀]",
	
	// 白起
	"血浓于血。[白起·王者荣耀]",
	"我会做你所向披靡的利剑！身在黑暗，心向光明！[白起·王者荣耀]",
	"见一个杀一个，活到最后的就是无敌。[白起·王者荣耀]",
	"想过武器也有自己的意识吗。[白起·王者荣耀]",
	"黑暗，造就了我。[白起·王者荣耀]",
	"最犀利的剑只为最强大的手所挥动。[白起·王者荣耀]",
	"罪孽，沾上了就无法洗净。[白起·王者荣耀]",
	"曾经，我也是个普通人。[白起·王者荣耀]",
	"废物。[白起·王者荣耀]",
	
	// 项羽
	"我命由我。[项羽·王者荣耀]",
	"破釜沉舟。[项羽·王者荣耀]",
	"天不容我，我必逆天。[项羽·王者荣耀]",
	"霸王本色。[项羽·王者荣耀]",
	"灭了他们。[项羽·王者荣耀]",
	"哎，做个了断吧。[项羽·王者荣耀]",
	"将这混乱的时代拉回正轨。[项羽·王者荣耀]",
	"谁与争锋，大杀四方。[项羽·王者荣耀]",
	"命运，不配做我的对手。[项羽·王者荣耀]",
	"来，灭了他们。[项羽·王者荣耀]",
	"死，无悔。[项羽·王者荣耀]",
	
	// 程咬金
	"一个字：干。[程咬金·王者荣耀]",
	"爱心之斧的正义冲击。[程咬金·王者荣耀]",
	"就算失败也要摆出豪迈的姿态。[程咬金·王者荣耀]",
	"打架，能拉近感情，哈，让我们亲热亲热。[程咬金·王者荣耀]",
	"人类，必须有强壮的身体，肌肉和精神。[程咬金·王者荣耀]",
	"业余的爱好，呃，变装算吗。[程咬金·王者荣耀]",
	"进攻是最好的防守。[程咬金·王者荣耀]",
	
	// 露娜
	"今天是对面的坏日子。[露娜·王者荣耀]",
	"见过我家那只可爱的宠物吗，它的名字叫大白。[露娜·王者荣耀]",
	"曾经与我的兄长较量过了吗。[露娜·王者荣耀]",
	"血红的月光映照着我的生命以及你的死期。[露娜·王者荣耀]",
	"燃烧的剑，燃烧的心。[露娜·王者荣耀]",
	"别在来不及的时候后悔。[露娜·王者荣耀]",
	"意志很犀利嘛，可惜比不过我的剑刃。[露娜·王者荣耀]",
	"厚土的光辉。[露娜·王者荣耀]",
	"替月行道。[露娜·王者荣耀]",
	"心伤。[露娜·王者荣耀]",
	
	// 高渐离
	"该我上场表演啦。[高渐离·王者荣耀]",
	"来，听离哥，替对面奏响离歌。[高渐离·王者荣耀]",
	"原谅我一生放浪不羁爱自由，checkit~~~now~。[高渐离·王者荣耀]",
	"狂热节拍。[高渐离·王者荣耀]",
	"小姐，有没有兴趣来场直达天堂的交往。[高渐离·王者荣耀]",
	"我们的灵魂总算起共鸣了，虽说偶尔还是有些跑调。[高渐离·王者荣耀]",
	"加点尖叫和哀嚎。[高渐离·王者荣耀]",
	"动起来，鲜花会为你开。[高渐离·王者荣耀]",
	"新曲子会为你泪流满面。[高渐离·王者荣耀]",
	
	// 甄姬
	"真的，为你选择阿宓。[甄姬·王者荣耀]",
	"悲伤，逆流成河。[甄姬·王者荣耀]",
	"果然，先爱上的那个人，是输家。[甄姬·王者荣耀]",
	"明明说好的，要永远在一起。[甄姬·王者荣耀]",
	"别靠近我，阿宓不想带来不幸。[甄姬·王者荣耀]",
	"若轻云之蔽日，若流风之回雪。[甄姬·王者荣耀]",
	"女人，是水做的。[甄姬·王者荣耀]",
	"波涛汹涌。[甄姬·王者荣耀]",
	
	// 后羿
	"苏醒了，猎杀时刻。[后羿·王者荣耀]",
	"周日被我射熄火了，所以今天是周一。[后羿·王者荣耀]",
	"走，最后的太阳。[后羿·王者荣耀]",
	"要变天了。[后羿·王者荣耀]",
	"光明制造黑暗。[后羿·王者荣耀]",
	"发光的，一个就够了。[后羿·王者荣耀]",
	"我的猎场。[后羿·王者荣耀]",
	"最了解你的，往往是对手。[后羿·王者荣耀]",
	"别了，太阳。[后羿·王者荣耀]",
	
	// 狄仁杰
	"这是来自时空管理局的通缉。[狄仁杰·王者荣耀]",
	"跨时空追捕出动。[狄仁杰·王者荣耀]",
	"代码什么的，也很擅长。[狄仁杰·王者荣耀]",
	"终极大招，断掉对面的wifi。[狄仁杰·王者荣耀]",
	"前方高能预警。[狄仁杰·王者荣耀]",
	"对面的破铜烂铁该升级了。[狄仁杰·王者荣耀]",
	"罪犯们，你们已经被时代抛弃。[狄仁杰·王者荣耀]",
	"能量，源自内心的小宇宙。[狄仁杰·王者荣耀]",
	"现在是逮捕时间。[狄仁杰·王者荣耀]",
	"代表法律制裁你。[狄仁杰·王者荣耀]",
	"死者也会开口说话吗。[狄仁杰·王者荣耀]",
	"以陛下的名义，你被捕了。[狄仁杰·王者荣耀]",
	"我就是法律的化身，为无辜者代言。[狄仁杰·王者荣耀]",
	"想知道自己怎么死的吗，来，马上告诉你。[狄仁杰·王者荣耀]",
	"斩～立～决。[狄仁杰·王者荣耀]",
	
	// 典韦
	"身体沉睡的野兽，觉醒吧。[典韦·王者荣耀]",
	"要么毁灭你，要么毁灭自己。[典韦·王者荣耀]",
	"求求你阻止我。[典韦·王者荣耀]",
	"嘿嘿，不是故意要伤害你的。[典韦·王者荣耀]",
	"给我点血，让我忘记疯狂。[典韦·王者荣耀]",
	"不疯魔，不成活。[典韦·王者荣耀]",
	"你一个人的血是不够偿还债务的。[典韦·王者荣耀]",
	
	// 艾琳
	"令人好期待吗。[艾琳·王者荣耀]",
	"优雅的一箭。[艾琳·王者荣耀]",
	"遵从心的轨迹。[艾琳·王者荣耀]",
	"随风而去。[艾琳·王者荣耀]",
	"记住，你的未来只能属于我。[艾琳·王者荣耀]",
	"爱情，迷失了弓箭的方向。[艾琳·王者荣耀]",
	"拿起弓箭，因为受不了，男人把国家搞得乱七八糟。[艾琳·王者荣耀]",
	"精确的瞄准。[艾琳·王者荣耀]",
	
	// 宫本武藏
	"天下无双。[宫本武藏·王者荣耀]",
	"告诉你个秘密，我是无敌的。[宫本武藏·王者荣耀]",
	"世间之寂寞，莫过于无敌。[宫本武藏·王者荣耀]",
	"无敌的我又迷路了。[宫本武藏·王者荣耀]",
	"太无敌而找不到对手也是种无敌的忧伤。[宫本武藏·王者荣耀]",
	"想挑战的人排好队，一个一个来。[宫本武藏·王者荣耀]",
	"在非人的领域也同样无敌。[宫本武藏·王者荣耀]",
	"人生就是不断的战斗。[宫本武藏·王者荣耀]",
	"纳尼。[宫本武藏·王者荣耀]",
	
	// 墨子
	"变形，出发。[墨子·王者荣耀]",
	"我来组成头部！[墨子·王者荣耀]",
	"会让你印象深刻的。[墨子·王者荣耀]",
	"生存就是最谨慎的战斗。[墨子·王者荣耀]",
	"保持敬老的美德，能让你们避免被碾压。[墨子·王者荣耀]",
	"太吵了，需要一个和平。[墨子·王者荣耀]",
	"净化的终点是自我毁灭。[墨子·王者荣耀]",
	"心怀不惧方能无畏。[墨子·王者荣耀]",
	"为了永久的和平，偶尔的战争是必要的。[墨子·王者荣耀]",
	"啊，这是什么黑科技。[墨子·王者荣耀]",
	
	// 钟无艳
	"给你的麻烦开个价吧。[钟无艳·王者荣耀]",
	"俗说说得好，有钱男子汉，无钱汉子难。[钟无艳·王者荣耀]",
	"光有想法不行动是不够的，还得有钱。[钟无艳·王者荣耀]",
	"有人为你的头颅出了个好价钱。[钟无艳·王者荣耀]",
	"让姐找点乐子吧。[钟无艳·王者荣耀]",
	"霸占，摧毁，破坏。[钟无艳·王者荣耀]",
	"再来一次给力的掠夺。[钟无艳·王者荣耀]",
	"姐的威力，试一次让你记一辈子。[钟无艳·王者荣耀]",
	"火爆了。[钟无艳·王者荣耀]",
	
	// 庄周
	"蝴蝶是我，我就是蝴蝶。[庄周·王者荣耀]",
	"呃，梦到了传奇的世界，还和波霸打了声招呼。[庄周·王者荣耀]",
	"一群人在人家梦里打来打去，有意思吗。[庄周·王者荣耀]",
	"天地与我并生，万物与我为宜。[庄周·王者荣耀]",
	"我的坐骑可是纯天然无污染。[庄周·王者荣耀]",
	"死亡，美妙的长眠，值得高歌一曲，啦～～～。[庄周·王者荣耀]",
	"其实刚才说的全是梦话。[庄周·王者荣耀]",
	"梦里花落知多少。[庄周·王者荣耀]",
	
	// 小乔
	"恋爱和战斗都要勇往直前。[小乔·王者荣耀]",
	"花会枯萎爱永不凋零。[小乔·王者荣耀]",
	"小乔，要努力变强。[小乔·王者荣耀]",
	"你不是孤单一个人。[小乔·王者荣耀]",
	"希望和奇迹是存在的。[小乔·王者荣耀]",
	"恋爱可是门高深莫测的学问。[小乔·王者荣耀]",
	"赶快胜利，接下来就是两个人的时间。[小乔·王者荣耀]",
	"一个人孤单的蹲在草丛里，是失恋了吗。[小乔·王者荣耀]",
	"今天也要打起精神来。[小乔·王者荣耀]",
	"体验一下飞升的感觉。[小乔·王者荣耀]",
	"风，听从我的呼唤。[小乔·王者荣耀]",
	"快向流星许愿吧。[小乔·王者荣耀]",
	
	// 廉颇
	"我可是重量级的，看我无敌铁拳。[廉颇·王者荣耀]",
	"团战输掉的话，就接受鞭挞来请罪吧。[廉颇·王者荣耀]",
	"伤痕，是男子汉的勋章。[廉颇·王者荣耀]",
	"竟然遇到我，看来你今天的运势为负数。[廉颇·王者荣耀]",
	"名副其实的力量。[廉颇·王者荣耀]",
	"要硬上吗，正合我意。[廉颇·王者荣耀]",
	"哼，真的，不是人人都有个苦逼的身世。[廉颇·王者荣耀]",
	"俺的拳头，突破天际。[廉颇·王者荣耀]",
	
	// 张良
	"好奇心会害死猫。[张良·王者荣耀]",
	"我思故我在。[张良·王者荣耀]",
	"最强大的魔法是语言。[张良·王者荣耀]",
	"为什么人和人的头脑结构会有这么大差异，哼，值得思索。[张良·王者荣耀]",
	"伤心不是哭的理由，傻才是。[张良·王者荣耀]",
	"你和神交谈，是信仰；神和你说话，哎，脑子坏掉了吧。[张良·王者荣耀]",
	"预知即将降临的风暴，无人能说置身事外。[张良·王者荣耀]",
	"如果世上还有我不懂的学问，那就是女孩子。[张良·王者荣耀]",
	"连愚昧的心灵一同摧毁。[张良·王者荣耀]",
	
	// 周瑜
	"玩弄乾坤是很有成就感的事。[周瑜·王者荣耀]",
	"可以死亡，但不能侮辱我的造型。[周瑜·王者荣耀]",
	"没有欲望何来胜利。[周瑜·王者荣耀]",
	"多么精确完美的打击！[周瑜·王者荣耀]",
	"掌控全局。[周瑜·王者荣耀]",
	"这种前赴后继送死的勇气值得让人钦佩。[周瑜·王者荣耀]",
	"作为男人，绝不让步的只有胜利和小乔。[周瑜·王者荣耀]",
	"用头脑而不是武力。[周瑜·王者荣耀]",
	
	// 貂蝉
	"这么直白的盯着妾身，好羞涩哦。[貂蝉·王者荣耀]",
	"你要爱上妾身哦。[貂蝉·王者荣耀]",
	"想欣赏妾身的舞姿吗。[貂蝉·王者荣耀]",
	"收到的情书太多也是一种烦恼呢。[貂蝉·王者荣耀]",
	"华丽又漂亮的生存到最后。[貂蝉·王者荣耀]",
	"无尽的舞蹈何日方休。[貂蝉·王者荣耀]",
	"幸福不属于妾身。[貂蝉·王者荣耀]",
	"飘呀飘，花开了，怒放了，去吧。[貂蝉·王者荣耀]",
	"花有再开的那套，人有重逢的时候吗。[貂蝉·王者荣耀]",
	"喂，你的脑袋里在想什么低级趣味的事吗。[貂蝉·王者荣耀]",
	"非礼呀。[貂蝉·王者荣耀]",
	
	// 牛魔
	"牛气冲天，纯爷们。[牛魔·王者荣耀]",
	"铁打的都不敢在俺眼前晃。[牛魔·王者荣耀]",
	"很好，你已经成功引起了我的注意。[牛魔·王者荣耀]",
	"哈～～，屠尽的野兽之道。[牛魔·王者荣耀]",
	"你们这帮蛊惑人的小妖精。[牛魔·王者荣耀]",
	"嘿嘿，牛角上跳舞的滋味如何。[牛魔·王者荣耀]",
	"不是山大王，不是山寨大王，尊称俺酋长好吧。[牛魔·王者荣耀]",
	"哈哈，牛大发了。[牛魔·王者荣耀]",
	
	// 芈月
	"征服了男人也就征服了世界。[芈月·王者荣耀]",
	"我的调教是不是别有乐趣。[芈月·王者荣耀]",
	"服从我，满足我，最后成为我的一部分。[芈月·王者荣耀]",
	"完美的皮肤来自鲜血的沐浴。[芈月·王者荣耀]",
	"整容手术都是骗人的，青春美貌全靠把你吸干。[芈月·王者荣耀]",
	"嗯，你很可口。[芈月·王者荣耀]",
	
	// 花木兰
	"姐可是传说。[花木兰·王者荣耀]",
	"姐来展示下高端操作。[花木兰·王者荣耀]",
	"谁说女子不如男。[花木兰·王者荣耀]",
	"永不放弃。[花木兰·王者荣耀]",
	"逃避不能解决战争，只会解决你自己。[花木兰·王者荣耀]",
	"抱歉，刚见面就得说再见。[花木兰·王者荣耀]",
	"离家太远会忘掉故乡，杀人太多会忘掉自己。[花木兰·王者荣耀]",
	"干嘛这么想不开，要在脸上写个输字。[花木兰·王者荣耀]",
	"想活命吗，请跟着我。[花木兰·王者荣耀]",
	
	// 张飞
	"心有猛虎。[张飞·王者荣耀]",
	"没有无辜者。[张飞·王者荣耀]",
	"独自生存，才是最高的惩戒。[张飞·王者荣耀]",
	"修生养性。[张飞·王者荣耀]",
	"邂逅让我们回忆起最后的太阳。[张飞·王者荣耀]",
	"英雄就是比普通人更变态的变态。[张飞·王者荣耀]",
	"有些罪，不会消失；有些事，非做不可。[张飞·王者荣耀]",
	"独自生存才是最好的境界。[张飞·王者荣耀]",
	"最凶残的野兽不是你我的吗，哈哈～～～。[张飞·王者荣耀]",
	"百万军中取人首级犹如探囊取物。[张飞·王者荣耀]",
	"现实，总是很残酷。[张飞·王者荣耀]",
	
	// 孙悟空
	"俺老孙来也。[孙悟空·王者荣耀]",
	"你有妖气。[孙悟空·王者荣耀]",
	"取经之路，就在脚下。[孙悟空·王者荣耀]",
	"一个跟头十万八千里，俺老孙也是风一般的男子。[孙悟空·王者荣耀]",
	"道行太浅，老实回家做宅男。[孙悟空·王者荣耀]",
	"超出三界之外，不在五行之中。[孙悟空·王者荣耀]",
	"俺的火眼晶晶已经看到了胜利。[孙悟空·王者荣耀]",
	"吃俺老孙一棒。[孙悟空·王者荣耀]",
	"打斗了一场。[孙悟空·王者荣耀]",
	"师父～～。[孙悟空·王者荣耀]",
	
	// 刘备
	"出来混，重要的是讲义气。[刘备·王者荣耀]",
	"深刻而不深沉 平淡而不平庸。[刘备·王者荣耀]",
	"暖男主要看气质。[刘备·王者荣耀]",
	"命运什么的，哎，逃避的借口。[刘备·王者荣耀]",
	"除暴安良是责任，行善积德是兴趣。[刘备·王者荣耀]",
	"破坏能力也是重要的家庭教育。[刘备·王者荣耀]",
	"虚伪和无能是两回事，适应时代方可生存。[刘备·王者荣耀]",
	"比教育小孩更艰苦的是早睡早起。[刘备·王者荣耀]",
	
	// 兰陵王
	"跟马上会挂掉的人争夺粉丝，真的很没有成就感。[兰陵王·王者荣耀]",
	"好奇心的代价很昂贵。[兰陵王·王者荣耀]",
	"我为黑暗服务。[兰陵王·王者荣耀]",
	"不逃就不会死。[兰陵王·王者荣耀]",
	"一个人，没有同类。[兰陵王·王者荣耀]",
	"斩草除根。[兰陵王·王者荣耀]",
	
	// 娜可露露
	"玛玛哈哈。（ありがとう、ママハハ）[娜可露露·王者荣耀]",
	"大自然的惩罚。（大自然のお仕置きです！）[娜可露露·王者荣耀]",
	"那，站起来吧（さあ、立ちなさい）[娜可露露·王者荣耀]",
	
	// 李白
	"我和我的剑到此一游。[李白·王者荣耀]",
	"哈哈～～～，但愿长醉不复醒。[李白·王者荣耀]",
	"情怀，懂不懂。[李白·王者荣耀]",
	"你的血让我诗兴大发。[李白·王者荣耀]",
	"十步杀一人，千里不留行。[李白·王者荣耀]",
	"努力有用的话还要天才干什么。[李白·王者荣耀]",
	"一篇诗，一斗酒，一曲长歌，一剑天涯。[李白·王者荣耀]",
	"将进酒，杯莫停。[李白·王者荣耀]",
	"来干～～，来干～～。[李白·王者荣耀]",
	"今朝有酒今朝醉。[李白·王者荣耀]",
	"若无人间月，谁可比光辉。[李白·王者荣耀]",
	"大河之剑天上来。[李白·王者荣耀]",
	"骝马新跨白玉鞍，战罢沙场月色寒。[李白·王者荣耀]",
	"天山三丈雪，岂是远行时。[李白·王者荣耀]",
	"来～干～。[李白·王者荣耀]",
	
	// 钟馗
	"对付魑魅魍魉，乃强迫症最佳疗法。[钟馗·王者荣耀]",
	"这是什么鬼。[钟馗·王者荣耀]",
	"无敌身躯 无欲则刚！[钟馗·王者荣耀]",
	"垃圾就该呆在垃圾桶里。[钟馗·王者荣耀]",
	"废物。[钟馗·王者荣耀]",
	"维持秩序。[钟馗·王者荣耀]",
	
	// 李元芳
	"刀刀致命~。[李元芳·王者荣耀]",
	"秘密的密，探案的探。[李元芳·王者荣耀]",
	"做坏蛋要有结局会悲剧的觉悟。[李元芳·王者荣耀]",
	"狄大人下月的工资评定请对我温柔一点~。[李元芳·王者荣耀]",
	"给予破坏者正确的绝望。[李元芳·王者荣耀]",
	"暗夜才是密探的主场。[李元芳·王者荣耀]",
	"在看你~一直在看你~。[李元芳·王者荣耀]",
	"你有权保持沉默，但所说的都将成为呈堂证供。[李元芳·王者荣耀]",
	
	// 武则天
	"恩赐你们喜欢的死法。[武则天·王者荣耀]",
	"权力是最棒的迷药。[武则天·王者荣耀]",
	"叫我女王陛下。[武则天·王者荣耀]",
	"朕偶尔也想任性一把。[武则天·王者荣耀]",
	"奉我为主。[武则天·王者荣耀]",
	"朕很中意你。[武则天·王者荣耀]",
	"对面的美男子们，恭敬等待朕的收割吧。[武则天·王者荣耀]",
	"普天之下莫非王土。[武则天·王者荣耀]",
	"做女人难做女帝更难。[武则天·王者荣耀]",
	
	// 不知火舞
	"ほら、顽张（がんば）って！  嗨！加油呀。[不知火舞·王者荣耀]",
	"はどうけん（波动拳）。[不知火舞·王者荣耀]",
	
	// 刘邦
	"不客观的说，我是个好人。[刘邦·王者荣耀]",
	"良心是什么？能吃么？[刘邦·王者荣耀]",
	"有时候想活命就得以毒攻毒。[刘邦·王者荣耀]",
	"个子矮？就别怪我多踩两脚。[刘邦·王者荣耀]",
	"早死早超生，希望在来生。[刘邦·王者荣耀]",
	"我心情好今日送你一程。[刘邦·王者荣耀]",
	"春风吹又生，斩草要除根。[刘邦·王者荣耀]",
	"能群殴又何必单挑呢。[刘邦·王者荣耀]",
	"唉，太无情。[刘邦·王者荣耀]",
	
	// 虞姬
	"刻骨铭心~霸王！。[虞姬·王者荣耀]",
	"明媚如风，轻盈似箭。[虞姬·王者荣耀]",
	"啊~已经放弃了做个淑女~。[虞姬·王者荣耀]",
	"净化森林，净化污秽，净化心灵，净化自己。[虞姬·王者荣耀]",
	"风会带走你曾经存在过的证明。[虞姬·王者荣耀]",
	"一点疼痛能让偷窥者牢记我的魅力。[虞姬·王者荣耀]",
	"不为所爱之人哭泣，只因从未离去。[虞姬·王者荣耀]",
	"想和风比赛脚力吗。[虞姬·王者荣耀]",
	"弱小，并非服从恐惧的理由。[虞姬·王者荣耀]",
	
	// 关羽
	"胜利与信念，都交托阁下。[关羽·王者荣耀]",
	"把眼光，从二爷的绿帽子上移开。[关羽·王者荣耀]",
	"血战到底。[关羽·王者荣耀]",
	"全力以赴推倒对面，是战争的基本礼仪。[关羽·王者荣耀]",
	"自己选择的路，再荒谬也要走完。[关羽·王者荣耀]",
	"确定了内心的正道，并绝不动摇。[关羽·王者荣耀]",
	"聪明，就该跟我的大刀保持安全距离。[关羽·王者荣耀]",
	"不要手下留情。[关羽·王者荣耀]",
	"屈辱，比失败更难忍受。[关羽·王者荣耀]",
	"鞍刀咆哮。[关羽·王者荣耀]",
	"一骑当千。[关羽·王者荣耀]",
	"回到，桃园。[关羽·王者荣耀]",
	
	// 蔡文姬
	"出发咯！蹂躏脑筋不好的老年人~。[蔡文姬·王者荣耀]",
	"左三圈~右三圈~扭一扭转一转~人家也作萝莉控~。[蔡文姬·王者荣耀]",
	"穿越战场的美少女~。[蔡文姬·王者荣耀]",
	"男神是孟德大人，喜欢宠物是阿典，梦想是养只羊驼~。[蔡文姬·王者荣耀]",
	"心有多大！舞台就有多刺激~。[蔡文姬·王者荣耀]",
	"不要欺负我，我会把你弄哭的哟。[蔡文姬·王者荣耀]",
	"大人，始终邪恶可怕爱说谎的生物~。[蔡文姬·王者荣耀]",
	"做个狂热又任性的魔女，把帅气的男朋友诱拐回家吧。[蔡文姬·王者荣耀]",
	
	// 夏侯惇
	"眼是男人的浪漫。[夏侯惇·王者荣耀]",
	"死在我的刀下是你的荣幸。[夏侯惇·王者荣耀]",
	"没错，我就是呼唤胜利的男神。[夏侯惇·王者荣耀]",
	
	// 雅典娜
	"冲锋 ！！！[雅典娜·王者荣耀]",
	"祈祷无用，战争有理！[雅典娜·王者荣耀]",
	"正视你的邪恶。[雅典娜·王者荣耀]",
	"五小强，曾经是她五名斗士你合称。[雅典娜·王者荣耀]",
	"畏惧信仰，畏惧力量。[雅典娜·王者荣耀]",
	"使用过的招数，第二次就不灵了。[雅典娜·王者荣耀]",
	"止步吧！罪人！[雅典娜·王者荣耀]",
	"信仰的敌人！[雅典娜·王者荣耀]",
	"追赶胜利。[雅典娜·王者荣耀]",
	
	// 马可波罗
	"Are you ready。[马可波罗·王者荣耀]",
	"show time。[马可波罗·王者荣耀]",
	"Lets go baby。[马可波罗·王者荣耀]",
	"世界那么大，我想来看看。[马可波罗·王者荣耀]",
	"行动和欲望 决定未来。[马可波罗·王者荣耀]",
	"高风险和高回报。[马可波罗·王者荣耀]",
	"摩擦摩擦似魔鬼的步伐。[马可波罗·王者荣耀]",
	"送你离开 千里之外。[马可波罗·王者荣耀]",
	"让子弹快乐的飞一会儿。[马可波罗·王者荣耀]",
	"世界和平。[马可波罗·王者荣耀]",
	
	// 成吉思汗
	"驰骋草原 碎裂星辰。[成吉思汗·王者荣耀]",
	"哈哈哈哈哈 与狼共舞。[成吉思汗·王者荣耀]",
	"选择堕落为野兽吗。[成吉思汗·王者荣耀]",
	"哼 强者 或者自以为强者。[成吉思汗·王者荣耀]",
	"当你凝视深渊的时候 深渊也在凝视你。[成吉思汗·王者荣耀]",
	"雄鹰不畏暴风吹 狼群不为长夜畏惧。[成吉思汗·王者荣耀]",
	"没什么是一发利箭不能解决 如果有那就两发。[成吉思汗·王者荣耀]",
	
	// 杨戬
	"跟马上会挂掉的人争夺粉丝 真的很没有成就感。[杨戬·王者荣耀]",
	"好奇心的代价很昂贵。[杨戬·王者荣耀]",
	"我为黑暗死。[杨戬·王者荣耀]",
	"不逃就不会死 一个人。[杨戬·王者荣耀]",
	"没有同类。[杨戬·王者荣耀]",
	"斩草除根。[杨戬·王者荣耀]",
	"刀锋所划之地 便是疆土。[杨戬·王者荣耀]",
	
	// 橘右京
	"ググケシギク。[橘右京·王者荣耀]",
	"ァゾソシザジズジシ。[橘右京·王者荣耀]",
	"エナニナ。[橘右京·王者荣耀]",
	"ジタザシジズシギグゲグスシ。[橘右京·王者荣耀]",
	"嘿，哈!![橘右京·王者荣耀]",
	
	// 女娲
	"当历史只剩罪恶 只有推倒重来。[女娲·王者荣耀]",
	"如知造物主在此。[女娲·王者荣耀]",
	"自以为穿越黑暗森林。[女娲·王者荣耀]",
	"渺小的虫子也配仰望星空。[女娲·王者荣耀]",
	"毁灭你们 与你何干。[女娲·王者荣耀]",
	"我，世界的法则。[女娲·王者荣耀]",
	"活着就是看身边的人不断离去。[女娲·王者荣耀]",
	
	// 哪吒
	"谁是敌人 由我决定。[哪吒·王者荣耀]",
	"嘿 有兴趣去搞点大事了。[哪吒·王者荣耀]",
	"我可是突破常理的存在。[哪吒·王者荣耀]",
	"不能击败我的 会让我更强大。[哪吒·王者荣耀]",
	"你的空手接不住我的白刃。[哪吒·王者荣耀]",
	"我自由 我选择。[哪吒·王者荣耀]",
	"我只站在我这边。[哪吒·王者荣耀]",
	"舍弃我能舍弃的 改变我要改变的。[哪吒·王者荣耀]",
	
	// 太乙真人
	"真人：你走过最长的路。<br/>炉子：都是我们的套路。[太乙真人·王者荣耀]",
	"真人：道生一，一生二! <br/>炉子：二生二组合。[太乙真人·王者荣耀]",
	"真人：皇家认证，特级炼金术师是也! <br/>炉子：炉子也有资格证书~。[太乙真人·王者荣耀]",
	"真人：有爱心的师父，必须一定对徒儿只有百分百的信任! <br/>炉子：有点感动了怎么办。[太乙真人·王者荣耀]",
	"真人：做人吗最重要的是开心~ <br/>炉子：打到你这种事，大家都不想的嘛~。[太乙真人·王者荣耀]",
	"真人：碧藕为骨，荷叶为衣，辅以三昧真火。<br/>炉子：少拿我炖汤啦~咕噜咕噜咕噜~。[太乙真人·王者荣耀]",
	"炉子：你是高人，可我是巨人，记住你站在巨人的肩膀上哟~。[太乙真人·王者荣耀]",
	"真人：等价交换，炼金术不变的原则。<br/>炉子：一时脑抽才更这家伙交换了人生。[太乙真人·王者荣耀]",
	
	// 黄忠
	"（登场音效）强者恒强！[黄忠·王者荣耀]",
	"（登场音效）是时候来发炸裂的开场了！[黄忠·王者荣耀]",
	"（登场音效）一把年纪都活在了拆迁对面这件事上。[黄忠·王者荣耀]",
	"彪悍的人生不需要解释。[黄忠·王者荣耀]",
	"优秀的机关只得有优秀的炮灰擦拭。[黄忠·王者荣耀]",
	"来自长者的慈爱关怀已进了炮槽！好好感受下温暖！[黄忠·王者荣耀]",
	"正义或许会迟到，但绝不会忘记砸到你的头顶！[黄忠·王者荣耀]",
	"老兵不死，只会逐渐凋零。[黄忠·王者荣耀]",
	"（大招音效）一击入坟[黄忠·王者荣耀]",
	"（死亡音效）不服老~！[黄忠·王者荣耀]",
	
	// 诸葛亮
	"智商太低会传染 离我远点！[诸葛亮·王者荣耀]",
	"人生如棋 一步三算。[诸葛亮·王者荣耀]",
	"不做没有绝对胜算的事。[诸葛亮·王者荣耀]",
	"哼哼~（轻笑）一切都在计算中。[诸葛亮·王者荣耀]",
	"运筹帷幄之中 决胜千里之外。[诸葛亮·王者荣耀]",
	"（死亡音效）起风了~。[诸葛亮·王者荣耀]",
	
	// 大乔
	"破碎的奇迹好过没有，苦恼的希望胜于迷惘。[大乔·王者荣耀]",
	"点亮的星，不会轻易熄灭。[大乔·王者荣耀]",
	"映照潮汐的起伏，以免迷失战场的道路。[大乔·王者荣耀]",
	"潮水中，沉默着被遗忘的名字，他们隶属于自作多情的泡沫。[大乔·王者荣耀]",
	"空洞和孤独，是依靠温暖的灯光填补。[大乔·王者荣耀]",
	"完美，是最无情的禁锢。[大乔·王者荣耀]",
	"看不见的那只眼里，有你不该看见的过去。[大乔·王者荣耀]",
	"魔道的天才们属于同一种流派，偶像派。[大乔·王者荣耀]",
	"守望着天空，大海，和你的回忆。[大乔·王者荣耀]",
	
	// 东皇太一
	"展现净化的可能性。[东皇太一·王者荣耀]",
	"要么孤独，要么庸俗。[东皇太一·王者荣耀]",
	"听，恒星的哀嚎，尽现最后的烛火。[东皇太一·王者荣耀]",
	"日蚀亲临，瞩我之神迹。[东皇太一·王者荣耀]",
	"万物皆可知。[东皇太一·王者荣耀]",
	"俯视低等种族的彷徨，循螺旋而上。[东皇太一·王者荣耀]",
	"比黑暗，更深沉的黑暗，辉映着永恒。[东皇太一·王者荣耀]",
	"舍弃怜悯，能让你蜕变为冷血的蜈蚣，丑陋又强大。[东皇太一·王者荣耀]",
	
	// 鬼谷子
	"啊啊~随地乱扔，砸到花花草草也是会疼的。[鬼谷子·王者荣耀]",
	"自然不会忽悠你，我可不一定。[鬼谷子·王者荣耀]",
	"来自绿色和平组织的愤怒！[鬼谷子·王者荣耀]",
	"他们曾像神的左右手，一边是创造，一边是毁灭。[鬼谷子·王者荣耀]",
	"喔哦，野性的呼唤，叫对面回家吃饭。[鬼谷子·王者荣耀]",
	"挥舞太危险的武器，小心被他吞掉人生哦！[鬼谷子·王者荣耀]",
	"沉沦的心，依旧为天空和大地跳动。[鬼谷子·王者荣耀]",
	
	// 百里守约
	"你知道我在哪里吗？我正在注视着你，可你却不知道我在哪里。[百里守约·王者荣耀]",
	"简单，但很极致；守约，言出必果。[百里守约·王者荣耀]",
	"静静观察，并在需要的时候把子弹精准送出。[百里守约·王者荣耀]",
	"你感到恐惧吗？我离你越来越近了。[百里守约·王者荣耀]",
	"我的眼镜可以看到一切，你要小心了。[百里守约·王者荣耀]",
	"奋力逃吧。[百里守约·王者荣耀]",
	
	// 百里玄策
	"百里玄策：大叔，你有过家人吗？<br/>苏烈：曾经。[百里玄策·王者荣耀]",
	"苏烈：玄策在身边的时，大家会开心；<br/>百里玄策：玄策不在身边时，大家也要开心呀！。[百里玄策·王者荣耀]",
	"成~成年人的世界才是最可怕的。[百里玄策·王者荣耀]",
	"无聊又厌烦呐，过时的成年人的世界。[百里玄策·王者荣耀]",
	"最恐怖的生物，明明是人类。[百里玄策·王者荣耀]",
	"大叔的朋友，当然也是大叔啦。[百里玄策·王者荣耀]",
	"如果拒绝队长，飞镰会瑟瑟发抖。[百里玄策·王者荣耀]",
	"好的队长，是的队长。[百里玄策·王者荣耀]",
	"多么痛恨哥哥的失约，就有多么思念他。[百里玄策·王者荣耀]",
	"没有哥哥的人群，那么孤独~。[百里玄策·王者荣耀]",
	"做守护你的链刃，撕裂暗箭。[百里玄策·王者荣耀]",
	"呃，谁偷吃了哥哥给我做的晚餐？剩下的全是草。[百里玄策·王者荣耀]",
	"即使哥哥失约，我，也只能选择原谅你。[百里玄策·王者荣耀]",
	"哥哥，如果不能深切感受到自己活着，存在有什么意义。[百里玄策·王者荣耀]",
	"饿，喝~开……开玩笑吗。[百里玄策·王者荣耀]",
	"怎么办，我开始失控了。[百里玄策·王者荣耀]",
	"讲道理，有哥哥罩的小疯子，简直不讲道理。[百里玄策·王者荣耀]",
	"哥哥不在的时候，看到了修罗场~。[百里玄策·王者荣耀]",
	"警报，开大警报。[百里玄策·王者荣耀]",
	"答应我，别在飞镰的攻击范围徘徊，它太冲动。[百里玄策·王者荣耀]",
	"快，看我真诚的眼神，在替你的生命倒计时。[百里玄策·王者荣耀]",
	"稳住，你们能赢——才怪~。[百里玄策·王者荣耀]",
	"你的遗言又长又无聊，需要来段儿利落的总结。[百里玄策·王者荣耀]",
	"经历过绝望吗。[百里玄策·王者荣耀]",
	"来玩生存游戏吧，很酷的，你来出演，生无可恋。[百里玄策·王者荣耀]",
	"飞镰很兴奋，飞镰认为自己可以一挑五。[百里玄策·王者荣耀]",
	"请开始你的表演，因为，我也要开始了！[百里玄策·王者荣耀]",
	"我有哥哥，你没有，这就是任性的理由。[百里玄策·王者荣耀]",
	"全场醒目担当。[百里玄策·王者荣耀]",
	
	// 苏烈
	"历史，书写于平凡人。[苏烈·王者荣耀]",
	"可战不可屈。[苏烈·王者荣耀]",
	"长城在，故乡就在。[苏烈·王者荣耀]",
	"你迷失了，你们什么也夺不走，反而会献上全部所有。[苏烈·王者荣耀]",
	"一起守过长城的，就叫战友。[苏烈·王者荣耀]",
	"沙漠中的花，意味着无限希望。[苏烈·王者荣耀]",
	"残余的力量，总比绝望更多。[苏烈·王者荣耀]",
	"与友人分享美酒，滋味会更加甘醇。[苏烈·王者荣耀]",
	"绵延万万里的脊梁，撑起家国傲骨。[苏烈·王者荣耀]",
	"我酒量很糟，可能爱吟诗的朋友也好不了多少。[苏烈·王者荣耀]",
	"结余(皆于)迎头痛击。[苏烈·王者荣耀]",
	"埋伏在草丛里，冷吗。[苏烈·王者荣耀]",
	"活下去，为了无可替代的人们。[苏烈·王者荣耀]",
	"犯下的错，以一生代价弥补也不为过。[苏烈·王者荣耀]",
	"横扫万军。[苏烈·王者荣耀]",
	"倒下，也要在战场。[苏烈·王者荣耀]",
	
	// 弈星
	"落子 无悔。[弈星·王者荣耀]",
	"会一直胜下去 为了父亲大人的认可。[弈星·王者荣耀]",
	"算的清每颗棋子的价值么 对你是件特别困难的事吧。[弈星·王者荣耀]",
	"舍弃 也是种取胜之道。[弈星·王者荣耀]",
	"输掉的话 会难过到哭泣吧。[弈星·王者荣耀]",
	"棋盘上熟悉的 除去输赢 还有阴阳。[弈星·王者荣耀]",
	"黑子深邃 为长夜苍茫莫测 白子耀眼 若恒星亘古不变。[弈星·王者荣耀]",
	"善弈者谋势 不善奕者 谋子。[弈星·王者荣耀]",
	"方寸棋盘 便是我的天地。[弈星·王者荣耀]",
	"一力降十会。[弈星·王者荣耀]",
	"棋子会决定 谁才是活到最后的存在。[弈星·王者荣耀]",
	"棋之道像四季和舞姿 变化万千。[弈星·王者荣耀]",
	"子弹也无法触及的 唯有星辰大海。[弈星·王者荣耀]",
	"可以投子认输辣。[弈星·王者荣耀]",
	"棋是活的 铠也是活的 狭路相逢勇者胜。[弈星·王者荣耀]",
	"让天下一心。[弈星·王者荣耀]",
	"琴声里 久久听不到落子的动静 唯有我 看不到幸福所在。[弈星·王者荣耀]",
	"胜负 半亩足已。[弈星·王者荣耀]",
	"没有对胜利的渴求 很快将百无一用。[弈星·王者荣耀]",
	"逃不开星空的辽阔 自然逃不出棋子的气场。[弈星·王者荣耀]",
	"不得贪胜 不可不胜。[弈星·王者荣耀]",
	"若世有神明 亦会胜他半子。[弈星·王者荣耀]",
	"纵横十九道内的 是无穷宇宙。[弈星·王者荣耀]",
	
	// 上官婉儿
	"言为心声，字为心画。[上官婉儿·王者荣耀]",
	"上通自然之性，下取万类之象。[上官婉儿·王者荣耀]",
	"用笔者，天也;流美者，地也。[上官婉儿·王者荣耀]",
	"笔落兴亡定三端之妙，墨写清白尽六艺之奥。[上官婉儿·王者荣耀]",
	"篆法圆奋，章草飘落，八分凶险，飞白窈窕。[上官婉儿·王者荣耀]",
	"第一用笔，第二识势，第三裹束，三者兼备，然后为书。[上官婉儿·王者荣耀]",
	"善书者自有风骨，尽一身之力而送之。[上官婉儿·王者荣耀]",
	"横如千里阵云，折如百钧弩发。[上官婉儿·王者荣耀]",
	"紫毫已折......。[上官婉儿·王者荣耀]",
	"逆锋起笔，最能得势。[上官婉儿·王者荣耀]",
	"势来不可止，势去不可遏。[上官婉儿·王者荣耀]",
	"无筋无骨，写来何用。[上官婉儿·王者荣耀]",
	"哎，这歪歪扭扭的字体，就像你歪歪扭扭的人生一样糟糕。[上官婉儿·王者荣耀]",
	
	// 李信
	"预言无用，不知道结局的人生才会刺激。[李信·王者荣耀]",
	"不是力量，是诅咒。[李信·王者荣耀]",
	"他人是地狱，再无法信任他人是轮回的地狱。[李信·王者荣耀]",
	"没有领土的王，没有故乡的人。[李信·王者荣耀]",
	"只有在梦里，才会做梦。[李信·王者荣耀]",
	"我们的共同点，是都想做第一个看到黎明的人。[李信·王者荣耀]",
	"没有欲望和执念，也无需背负欲望和执念，真好！[李信·王者荣耀]",
	"今日的星辰辉映太古的源起，过往的注视，指引明日的生死。[李信·王者荣耀]",
	"猫有九条命，那么家谱也有九倍长吧。[李信·王者荣耀]",
	"恐怕需要9倍的破坏力，才能实践独一的执着。[李信·王者荣耀]",
	"世上是否存在典籍，告诉我如何与自我和解。[李信·王者荣耀]",
	"羌笛吹落梅，让人分不清异乡和故里。[李信·王者荣耀]",
	"一无所有，至少能肆意如风。[李信·王者荣耀]",
	"投身天地这熔炉，总有些梦想和意志，会因此薪火相传。[李信·王者荣耀]",
	"渴望靠近篝火，又恐惧被温暖灼伤。[李信·王者荣耀]",
	"至少梦里不可能存在这样的土地，这样的米饭吧。[李信·王者荣耀]",
	"双面的刃，伤人又伤己。[李信·王者荣耀]",
	"异乡人，怎能容忍故土脱离自己的手掌。[李信·王者荣耀]",
	"不会为不存在的天命，去压低脊梁。[李信·王者荣耀]",
	"不知道轮回过的灵魂，是否更懂得死亡？[李信·王者荣耀]",
	"能提起沉重剑刃的手，握不住飞舞飘落的花。[李信·王者荣耀]",
	"为何卡不清故乡的模样，即使它就在心的中央。[李信·王者荣耀]",
	"崩刃的剑，依旧致命，锈蚀的盾，屹立如初！[李信·王者荣耀]",
	"开疆易而守土难。[李信·王者荣耀]",
	"失败之前，对面不会有想太多的时间。[李信·王者荣耀]",
	"无知 无用 无能 无脑 无聊，加起来就是对面的无人队。[李信·王者荣耀]",
	"死亡是当英雄的前提。[李信·王者荣耀]",
	"人生仅有一次的绝景。[李信·王者荣耀]",
	"单纯为不想死而挥剑。[李信·王者荣耀]",
	"这里是，让我忘却野心的战场。[李信·王者荣耀]",
	"听天，不会由命。[李信·王者荣耀]",
	"这里是，为我所统帅的战场。[李信·王者荣耀]",
	"人间不值得。[李信·王者荣耀]",
	"何处是吾乡。[李信·王者荣耀]",
	"屠魔的少年终究成魔，存活最后的魔做了救世主。[李信·王者荣耀]",
	"唯有燃烧在长城的篝火，让我放下野望。[李信·王者荣耀]",
	"孤独是双刃的锋芒。[李信·王者荣耀]",
	"血肉之躯，燃烧一次足矣。[李信·王者荣耀]",
	"讨厌看到他们离我而去，因为是战友吗。[李信·王者荣耀]",
	"长城和长安之间，是无尽的彷徨。[李信·王者荣耀]",
	"我们一无所有，我们巍然矗立。[李信·王者荣耀]",
	"这是最好的时代，这是最坏的时代。[李信·王者荣耀]",
	"随它陨落，随它沉沦，引它重返千年之盛。[李信·王者荣耀]",
	"侯非侯，王非王，千乘万骑走北芒。[李信·王者荣耀]",
	"我是跟那只野兽差不了多少，可这，终究是我的国土。[李信·王者荣耀]",
	"长城之上是千亿的星空，星空之上是不灭的守望。[李信·王者荣耀]",
	
	// 伽罗
	"哼，无知是恶。[伽罗·王者荣耀]",
	"千窟唯佑，太平无忧。[伽罗·王者荣耀]",
	"既归依文明 绝不轻易另其破灭。[伽罗·王者荣耀]",
	"书本，是转瞬即逝的东西，唯有文明，才能长存不灭。[伽罗·王者荣耀]",
	"你血管里流淌着的，就是黑火药吧。[伽罗·王者荣耀]",
	"不学无术的悲哀。[伽罗·王者荣耀]",
	"真正的真理不会让你因执着而狂热。[伽罗·王者荣耀]",
	"当学问走过漫漫古道，凿刻入千窟。[伽罗·王者荣耀]",
	"心，也从愚昧中苏醒。[伽罗·王者荣耀]",
	"读过六道的文字，才能安心抵达彼岸净土。[伽罗·王者荣耀]",
	"做不到自律就等于自我放弃。[伽罗·王者荣耀]",
	"典籍记载着血脉中的故里，忘不掉，抹不去。[伽罗·王者荣耀]",
	"羌笛何须怨杨柳，春风不度玉门关。[伽罗·王者荣耀]",
	"若学会文字，机关也会拥有人性吧。[伽罗·王者荣耀]",
	"千窟唯佑，万代千秋。[伽罗·王者荣耀]",
	"不知古道上的风从何处起，可它去往的是故里。[伽罗·王者荣耀]",
	"你我的姓名，将湮灭于野火，家乡的魂灵，随原上草木而复苏。[伽罗·王者荣耀]",
	"消散愚昧。[伽罗·王者荣耀]",
	"寻回典籍是我的责任，就像寻回长城是你的责任。[伽罗·王者荣耀]",
	"瓣鳞花凋零又盛开，有人却一去不再来。[伽罗·王者荣耀]",
	"何不执笔写下菜谱，千百年后，人们仍然会热爱你的味道。[伽罗·王者荣耀]",
	"古道石树，典籍和学问，就是树上的繁花。[伽罗·王者荣耀]",
	"卿一生羌笛，在长城远眺瓣鳞花，没有比这更美好的风景。[伽罗·王者荣耀]",
	"若你的心需要安放，去把它刻在长城上吧。[伽罗·王者荣耀]",
	"多多读书，你的偶像才会欣赏你呢。[伽罗·王者荣耀]",
	"也想走马看一次长安的花，要为我引路吗?。[伽罗·王者荣耀]",
	"学识告诉你，何为不可触碰。[伽罗·王者荣耀]",
	"胡乱的狂热，需要罚抄一百遍经文来冷静呢。[伽罗·王者荣耀]",
	"想挽留的，渐行渐远，犹如被抛弃的故土，每个人从出生起就走向自己的归乡路。[伽罗·王者荣耀]",
	"长安路远，遥望的恐怕不过旧梦一场。[伽罗·王者荣耀]",
	
	// 孙策
	"化为天空和大海，守护你的回忆。[孙策·王者荣耀]",
	"梦想着梦想中国家的梦想。[孙策·王者荣耀]",
	"自由是最热烈的远行。[孙策·王者荣耀]",
	"璀璨的灯 引导新的航向。[孙策·王者荣耀]",
	"极尽所能 破碎波涛吧。[孙策·王者荣耀]",
	"你那么的美好。[孙策·王者荣耀]",
	"你以为自己是谁，灾祸吗，命运吗 可终究会被我踩在脚下。[孙策·王者荣耀]",
	"七夕了 提着灯去海边许愿吧 就这么约定了。[孙策·王者荣耀]",
	"请允许我 余生都为你带来笑容吧。[孙策·王者荣耀]",
	"缺少爱人指引的家伙们 只能迷失于旋涡的怀抱。[孙策·王者荣耀]",
	"燃为灰烬 没入大海。[孙策·王者荣耀]",
	"任何时候 都要努力去感受幸福的存在。[孙策·王者荣耀]",
	"让我们无拘无束 如沧海之风 纵情闪耀如夜空之星。[孙策·王者荣耀]",
	"世人站立的旋涡 我们必会征服的航道。[孙策·王者荣耀]",
	"是你引导着我吧 是的一直都是。[孙策·王者荣耀]",
	"我的名字写在水上。[孙策·王者荣耀]",
	"一个人未完成的梦想，另一个人会代替他继续对吗。[孙策·王者荣耀]",
	"一往无前的浪。[孙策·王者荣耀]",
	"在大海中起航。[孙策·王者荣耀]",
	"支离破碎的奇迹中寻找光明，抛弃希望的苦恼扶摇而上。[孙策·王者荣耀]",
	"重要的是为谁而战。[孙策·王者荣耀]",
	"最幸福的事 我有幸懂得真正的幸福。[孙策·王者荣耀]",
	
	// 元歌
	"做个安静的美男子，无欲无求，笑口常开。[元歌·王者荣耀]",
	"哪一个才是真正的我，我自己也不太明白。[元歌·王者荣耀]",
	"幸福令人畏惧，更钟情绝望的美学。[元歌·王者荣耀]",
	"为战斗加点品味、加点恶作剧，emmm会很有趣~。[元歌·王者荣耀]",
	"人生如戏，全靠演技。[元歌·王者荣耀]",
	"认真，我就输了。[元歌·王者荣耀]",
	"法则和禁忌存在的意义，不就是为了打破吗。[元歌·王者荣耀]",
	"美，是致命的愉悦。[元歌·王者荣耀]",
	"随指尖而舞。[元歌·王者荣耀]",
	"据说文案也想不出个美妙的语言来赞美我的杰作和你的死亡。[元歌·王者荣耀]",
	"喧哗与骚动。[元歌·王者荣耀]",
	"生命绽放于战场。[元歌·王者荣耀]",
	"璀璨却仅限于你的眼中。[元歌·王者荣耀]",
	"栩栩如生的死亡。[元歌·王者荣耀]",
	"去吧~啊哈哈哈哈哈。[元歌·王者荣耀]",
	"操纵木偶和操纵心灵是同样的艺术。[元歌·王者荣耀]",
	"缺乏仪式感的决斗，有个同义词叫中二。[元歌·王者荣耀]",
	"生的渺小，死的精彩。[元歌·王者荣耀]",
	"人们最热爱歌咏的英雄，无间道的游戏，可是很有趣的哦。[元歌·王者荣耀]",
	"对面的你和手中的傀儡同样美妙，同样舞姿翩翩。[元歌·王者荣耀]",
	"傀儡师连自己也能操纵自如。[元歌·王者荣耀]",
	"世界上的另一个我，就背景音乐而言很动听。[元歌·王者荣耀]",
	"似曾相识的熟悉感，我遗忘了什么吗?[元歌·王者荣耀]",
	"愉快的游戏吧，人因游戏而完整。[元歌·王者荣耀]",
	"哎，毫无美感可言，悲剧就是把美好的东西毁灭给人看。[元歌·王者荣耀]",
	
	// 狂铁
	"对错误的事习以为常，才是真正的卑鄙。[狂铁·王者荣耀]",
	"璀璨的破灭。[狂铁·王者荣耀]",
	"放弃就等同失败。[狂铁·王者荣耀]",
	"感受到一股来自东方的神秘力量。[狂铁·王者荣耀]",
	"钢铁怪兽的咆哮，让你深刻体会脆弱和渺小。[狂铁·王者荣耀]",
	"机关与定律之上 还有着对亲人和大地的爱。[狂铁·王者荣耀]",
	"寄望审判干嘛，雷电会劈倒高塔。[狂铁·王者荣耀]",
	"铠因被遗忘的名字，我拥有记住的友人。。[狂铁·王者荣耀]",
	"迄今所有认识都大写这失败，但不妨碍我继续向前。[狂铁·王者荣耀]",
	"全力以赴 做正确的事。[狂铁·王者荣耀]",
	"十万伏特。[狂铁·王者荣耀]",
	"是你吗 妖灵。[狂铁·王者荣耀]",
	"撕裂空间，去看清本源。[狂铁·王者荣耀]",
	"为何而战的意志，胜于钢铁之躯。[狂铁·王者荣耀]",
	"以神的代理人自居，却不过是群仿冒品。[狂铁·王者荣耀]",
	"勇气是唯一的信仰。[狂铁·王者荣耀]",
	"越是恐惧 越要战胜它。[狂铁·王者荣耀]",
	"找到解除诅咒的方法了没。[狂铁·王者荣耀]",
	"真理并不是掌握在多数人手中。[狂铁·王者荣耀]",
	"做那个挑战风车的傻子，鲁莽也比怯懦更接近勇敢。[狂铁·王者荣耀]",
	
	// 公孙离
	"与崇拜的偶像共舞，仿佛做梦。[公孙离·王者荣耀]",
	"来如雷霆，大如江海。[公孙离·王者荣耀]",
	"一舞剑气动四方。[公孙离·王者荣耀]",
	"果然，想征服爱人的心，就得先征服他的胃。[公孙离·王者荣耀]",
	"阿离的热情，不会输给前辈们。[公孙离·王者荣耀]",
	"花绽放于长安的春日，温暖又幸福。[公孙离·王者荣耀]",
	"反复练习的阿离很笨吧，唯有痛苦，使人破茧成蝶。[公孙离·王者荣耀]",
	"情书里看到了，遗忘在记忆中的模样。[公孙离·王者荣耀]",
	"在迷宫般的长安城里，寻求各自认定的幸福。[公孙离·王者荣耀]",
	"初恋的心动你懂吗？哼，不懂。[公孙离·王者荣耀]",
	"要幸福。[公孙离·王者荣耀]",
	"让恐惧的人勇敢，让痛苦的人坚强，让悲伤的人充满希望。[公孙离·王者荣耀]",
	"暗夜里，似乎邂逅过的样子呢。[公孙离·王者荣耀]",
	"飘零的孤鸟，也有权力寻求幸福啊。[公孙离·王者荣耀]",
	"你有家吗？有温暖的女孩子在家里等你呢。[公孙离·王者荣耀]",
	"长...长安城鼎鼎有名的狄大人吗？阿离可是您的粉丝。[公孙离·王者荣耀]",
	"和心上人享受做饭的乐趣，会是特别的氛围吧。[公孙离·王者荣耀]",
	"别离，为了更美妙的重逢。[公孙离·王者荣耀]",
	"有缘又有聚（剧），才是阿离的舞台。[公孙离·王者荣耀]",
	"阿离，做不到旁观他人的不幸。[公孙离·王者荣耀]",
	"谁建造他，谁守望他，谁在枫叶的季节从他身畔归来。[公孙离·王者荣耀]",
	
	// 明世隐
	"福兮，祸所伏 ，祸兮，哼，福所倚。[明世隐·王者荣耀]",
	"过度渴望，招致完全绝望。[明世隐·王者荣耀]",
	"小小的推波助澜而已。[明世隐·王者荣耀]",
	"血管里，流淌着忘川之水。[明世隐·王者荣耀]",
	"用忘川的水，将你们当做牡丹浇灌。[明世隐·王者荣耀]",
	"算无遗策。[明世隐·王者荣耀]",
	"人生乏味啊，我欲令之光怪陆离。[明世隐·王者荣耀]",
	"大吉大利的卦象，抵不过栩栩如生的愚蠢。[明世隐·王者荣耀]",
	"哼哼哼哼哼，你果然太年轻。[明世隐·王者荣耀]",
	"若牵挂的人只存在于回忆中，才是彻头彻尾的失败。[明世隐·王者荣耀]",
	"长安和亲人，选哪一个。[明世隐·王者荣耀]",
	"纵万千国色，也无法与小小的瓣鳞花争艳吗。[明世隐·王者荣耀]",
	"哼，情感求入牢笼，留下的唯有，胜负心。[明世隐·王者荣耀]",
	"羌笛何须怨杨柳，春风不度玉门关。[明世隐·王者荣耀]",
	"卦象说，背叛，不会是最后一次。[明世隐·王者荣耀]",
	"卦象说，回不来的永远回不来，得不到的，永远得不到。[明世隐·王者荣耀]",
	"卦象说，既曾死而复生，亦将生而覆灭。[明世隐·王者荣耀]",
	"卦象说，以别离始，以别离终。[明世隐·王者荣耀]",
	"卦象说，你承诺的，言出必果，你恐惧的，如约而至。[明世隐·王者荣耀]",
	"哎呀，卦象说，你会被抛弃三次。[明世隐·王者荣耀]",
	"我的就是我的，终究属于我的。[明世隐·王者荣耀]",
	"利用或者被利用，人生就这么不平等。[明世隐·王者荣耀]",
	"没有绝对的吉凶，就像没有绝对的正义。[明世隐·王者荣耀]",
	"谁记得你，谁需要你，谁才不会再次离开你。[明世隐·王者荣耀]",
	"命运会否与卦象如一，哼，拭目以待吧。[明世隐·王者荣耀]",
	"哼哼哼哼哼，兄弟，可笑又可怜的谎言。[明世隐·王者荣耀]",
	"失去的便应当取回，这没有错。[明世隐·王者荣耀]",
	"冷却的心呐，早已不可能为任何人停留。[明世隐·王者荣耀]",
	"唔，真是算过的卦里最烂的八字。[明世隐·王者荣耀]",
	"什么都算不出，什么也看不清。[明世隐·王者荣耀]",
	
	// 盘古
	"神设下的桎梏，还是由神来打破。[盘古·王者荣耀]",
	"人类啊，跟我来。[盘古·王者荣耀]",
	"开天辟地，万物新生。[盘古·王者荣耀]",
	"登上方舟前，我是名军人。[盘古·王者荣耀]",
	"从此把握自己的命运吧，别浪费了我的牺牲。[盘古·王者荣耀]",
	"与其享乐，还是冲锋适合我。[盘古·王者荣耀]",
	"倒悬都市，颠倒乾坤。[盘古·王者荣耀]",
	"被控制的感觉好受吗?[盘古·王者荣耀]",
	"谁制造坐井观天的文明，谁就是文明终结者。[盘古·王者荣耀]",
	"大地之上,挡我者死。[盘古·王者荣耀]",
	"温室，它的实质是牢笼。[盘古·王者荣耀]",
	"斧头还是拳头?挑一个。[盘古·王者荣耀]",
	"王者大陆，比你们想象的更广阔。[盘古·王者荣耀]",
	
	// 瑶
	"(出场)啊过去生于未来。[瑶·王者荣耀]",
	"(出场)羁绊无影无踪 藤蔓一斩就断。[瑶·王者荣耀]",
	"(出场)神在白天做梦，太阳从西边升起。[瑶·王者荣耀]",
	"阿瑶为你痛哭。[瑶·王者荣耀]",
	"阿瑶也想成为像老师一样高大的人。[瑶·王者荣耀]",
	"别赖着人家好吗。[瑶·王者荣耀]",
	"别难过 我只是睡一觉。[瑶·王者荣耀]",
	"不是我,真的不是我。[瑶·王者荣耀]",
	"看 空气。[瑶·王者荣耀]",
	"狼来啦。[瑶·王者荣耀]",
	"你好小蛇。[瑶·王者荣耀]",
	"你为什么粘着我呀。[瑶·王者荣耀]",
	"什么小鹿女啊 一定是世界上最不可爱的孩子吧。[瑶·王者荣耀]",
	"神在白天做梦 太阳从西边升起。[瑶·王者荣耀]",
	"我读过书 我们云梦泽分成三块地方 有的擅长机关术有的擅长造船术。[瑶·王者荣耀]",
	"我们从玄微森林出来的人 一天要吃掉半个大陆呢。[瑶·王者荣耀]",
	"我已经洗过脸啦 真的。[瑶·王者荣耀]",
	"要把梦藏在树叶里 不然梦会化。[瑶·王者荣耀]",
	"有的神住在天上 有的神住在蘑菇里。[瑶·王者荣耀]",
	"这是谁的小鹿 真厉害。[瑶·王者荣耀]",
	"昨晚我偷了你的翅膀在天上玩了一圈。[瑶·王者荣耀]",
	
	// 嫦娥
	"到这来。[嫦娥·王者荣耀]",
	"不需要的东西。[嫦娥·王者荣耀]",
	"夜晚的太阳，保护属于它的人。[嫦娥·王者荣耀]",
	"月即将临。[嫦娥·王者荣耀]",
	"过强的光辉，是一种杀气。[嫦娥·王者荣耀]",
	"后羿：你在找什么?<br/>嫦娥：找我的兔子。[嫦娥·王者荣耀]",
	"光之灵，听我召唤。[嫦娥·王者荣耀]",
	"和火源、露水、在一起。[嫦娥·王者荣耀]",
	"拉拉拉拉拉，拉拉拉~~。[嫦娥·王者荣耀]",
	"男(后羿)：神造的弓箭太沉重。<br/>女(嫦娥)：那就换一把弓、换一束箭。[嫦娥·王者荣耀]",
	"女(嫦娥)：你是那位百发百中的弓箭手吗?<br/>男(后羿)：有时候也会失手。[嫦娥·王者荣耀]",
	"我们以温柔取其强者。[嫦娥·王者荣耀]",
	"以前我有一座花园。[嫦娥·王者荣耀]",
	"银色的神，他心中并不冷。[嫦娥·王者荣耀]",
	"在日之塔上祈求夜晚的神灵。[嫦娥·王者荣耀]",
	"去呀，预示的光辉。[嫦娥·王者荣耀]",
	
	// 曜
	"仰望夜空，你就知道我来自哪里。[曜·王者荣耀]",
	"剑指的方向，就是天才的故乡。[曜·王者荣耀]",
	"所有的星星眼，都在等一颗星。[曜·王者荣耀]",
	"别动，超级能量蕴藏在我体中，时辰不对劲会一碰就爆炸。[曜·王者荣耀]",
	"老师好，我是武道学院第一名天才学子。[曜·王者荣耀]",
	"信誓旦旦,直上青天揽星辰。[曜·王者荣耀]",
	"唉~别跑啊对面的，看花眼了吧，这就对了，灼灼流星剑。[曜·王者荣耀]",
	"加入星之队吧。[曜·王者荣耀]",
	"额上有疤的男人，个个都是传奇。[曜·王者荣耀]",
	"怎样才能变得平凡，求攻略，在线等~。[曜·王者荣耀]",
	"我会很多绝招，但最帅的只有这招。[曜·王者荣耀]",
	"师哥，为什么有人说我们该成立一个杂耍戏班。[曜·王者荣耀]",
	"一闪一闪亮晶晶。[曜·王者荣耀]",
	"哈，小叛徒(?)，看剑。[曜·王者荣耀]",
	"喂，对面怎么还不投降，我还以为对面已经输了。[曜·王者荣耀]",
	"听我指挥~。[曜·王者荣耀]",
	"剑如银河落九天。[曜·王者荣耀]",
	"高手也是需要休息的。[曜·王者荣耀]",
	"用不着吃饱啦，本天才带你飞。[曜·王者荣耀]",
	"老师，我错了。[曜·王者荣耀]",
	"热血是少年的原罪吗。[曜·王者荣耀]",
	"星光荡开宇宙，本人闪耀其中。[曜·王者荣耀]",
	"说，谁是世界珍宝，是不是我。[曜·王者荣耀]",
	"和我一起去征服世界吧，偶像![曜·王者荣耀]",
	"此乃绝招前的铺垫，你懂吗?我会证明给你们看的。[曜·王者荣耀]",
	"加油，各位，勇夺第二吧，祝福你们。[曜·王者荣耀]",
	"让你三招。[曜·王者荣耀]",
	"想叫我中二少年，也得把二改成一。[曜·王者荣耀]",
	"师哥，不要再毁灭知识了，改过自新前进吧。[曜·王者荣耀]",
	"天生我材必有用。[曜·王者荣耀]",
	"我没耍帅，有些东西是天生的。[曜·王者荣耀]",
	"班叔，集合了。[曜·王者荣耀]",
	"你看到这星光了吗，等着瞧。[曜·王者荣耀]",
	"这是假的吧，太不经打了。[曜·王者荣耀]",
	"加入星之队吧，师姐。[曜·王者荣耀]",
	"永恒宿命。[曜·王者荣耀]",
	"敢单挑吗。[曜·王者荣耀]",
	"来吧，师哥，加入星之队你就再也不会当第二了。[曜·王者荣耀]",
	"哼，我就知道你会当叛徒。[曜·王者荣耀]",
	"老师，弟子梦见自己拯救了王者大陆。[曜·王者荣耀]",
	"回回第一，无法摆脱的永恒宿命。[曜·王者荣耀]",
	"出风头这种事，让给你们咯。[曜·王者荣耀]",
	
	// 杨玉环
	"三千宠爱在一身。[杨玉环·王者荣耀]",
	"天生丽质，难自弃。[杨玉环·王者荣耀]",
	"人家是绿茶，你就像热水，想泡吗。[杨玉环·王者荣耀]",
	"弦动，情动，心动，尽情放纵一曲。[杨玉环·王者荣耀]",
	"令人享受的颤音，沉迷在我的胸怀。[杨玉环·王者荣耀]",
	"感受下成熟的魅力，期待着与你共赴极乐。[杨玉环·王者荣耀]",
	"不要忘了我哦。[杨玉环·王者荣耀]",
	"牵手过后是放手。[杨玉环·王者荣耀]",
	"喜欢什么都是骗人的，很傻很天真。[杨玉环·王者荣耀]",
	"不要得罪女人哟。[杨玉环·王者荣耀]",
	"你爱我关我什么事，你死了，我的故事还会继续。[杨玉环·王者荣耀]",
	"此恨绵绵。[杨玉环·王者荣耀]",
	
	// 裴擒虎
	"震惊长安第一拳。[裴擒虎·王者荣耀]",
	"会牵挂的叫亲人，会回去的是故乡。[裴擒虎·王者荣耀]",
	"等俺的拳头砸下去，有人可能会变废柴哦。[裴擒虎·王者荣耀]",
	"同情很廉价，别用可怜的眼神瞧俺。[裴擒虎·王者荣耀]",
	"哇，简直就是在违法的边缘试探嘛。[裴擒虎·王者荣耀]",
	"祖传一套。[裴擒虎·王者荣耀]",
	"超凶哒。[裴擒虎·王者荣耀]",
	"梦想什么的，不重要了。那里还有等着俺的兄弟。[裴擒虎·王者荣耀]",
	"今天输了，明天也要卷土重来。[裴擒虎·王者荣耀]",
	"打个赌，阴险的敌人，永远不敢来场堂堂正正的对决。[裴擒虎·王者荣耀]",
	"你的骄傲，不堪一击。[裴擒虎·王者荣耀]",
	"哇，堪比老姐的黑暗料理，拿俺试毒吗。[裴擒虎·王者荣耀]",
	"流浪的，伤痕累累的虎，离会照顾你的<br/>呃，可你连做饭都不会啊。[裴擒虎·王者荣耀]",
	"俺这样的废柴，也懂得有所为，有所不为。[裴擒虎·王者荣耀]",
	"打个赌，这家伙做饭贼难吃。[裴擒虎·王者荣耀]",
	"眼泪，不知不觉流下来。琴里燃烧着的，是长城的篝火。[裴擒虎·王者荣耀]",
	"输了就得认，挨打要立正。[裴擒虎·王者荣耀]",
	"比你的料理更恐怖，比明的占卜更致命，比弈星的棋盘更惊天动地，唯有俺老姐。[裴擒虎·王者荣耀]",
	"打个赌，你将后悔自己的无能，后悔无法拯救长城。[裴擒虎·王者荣耀]",
	"打个赌，小矮子通常都扮演领便当的龙套。[裴擒虎·王者荣耀]",
	"打个赌，你的人生观会被俺的拳头颠覆。[裴擒虎·王者荣耀]",
	"怕死，怕回不去，怕忘记长城下等着俺的兄弟。[裴擒虎·王者荣耀]",
	"打...打个赌，俺们从来没见过，俺不是你认识的那个人。[裴擒虎·王者荣耀]",
	"胜负心强烈的家伙。[裴擒虎·王者荣耀]",
	"有人还能理直气壮生存，因为缺少灵魂。[裴擒虎·王者荣耀]",
	"老虎不发威，当俺是病猫吗。[裴擒虎·王者荣耀]",
	"谁建造他，谁守望他，谁在他身畔长眠。[裴擒虎·王者荣耀]",
	"以恶制恶。[裴擒虎·王者荣耀]",
	"连厨子都没有，真是个冷漠的组织。[裴擒虎·王者荣耀]",
	"俺，终究太无能了。[裴擒虎·王者荣耀]",
	
	// 司马懿
	"喜欢黑色吗。[司马懿·王者荣耀]",
	"一切都在破碎中。[司马懿·王者荣耀]",
	"以毁的灵魂 绝世的威力。[司马懿·王者荣耀]",
	"此乃先祖受难之魂。[司马懿·王者荣耀]",
	"阁下 我会让你以十倍代价 偿还罪孽。[司马懿·王者荣耀]",
	"黑暗无边无际 人类却妄想光明的胜利。[司马懿·王者荣耀]",
	"傀儡长得美 你想的美。[司马懿·王者荣耀]",
	"来吧 你的噩梦。[司马懿·王者荣耀]",
	"跑吧 虫子。[司马懿·王者荣耀]",
	"求问贤者 若是一切如梦仍能何时醒来。[司马懿·王者荣耀]",
	"杀你的时候 我流了一滴泪。[司马懿·王者荣耀]",
	"所有的羁绊 转瞬即逝。[司马懿·王者荣耀]",
	"听说 你给我送了套衣服。[司马懿·王者荣耀]",
	"万物寂灭。[司马懿·王者荣耀]",
	"忘了曾经的约定吧。[司马懿·王者荣耀]",
	"我 宽恕众神。[司马懿·王者荣耀]",
	"现在轮到我说话。[司马懿·王者荣耀]",
	"小乔是你的 胜利却未必。[司马懿·王者荣耀]",
	"有的蠢货 四季都在扇扇子。[司马懿·王者荣耀]",
	"与其补鞋 不如补补脑子。[司马懿·王者荣耀]",
	"宇宙之中 从无公正。[司马懿·王者荣耀]",
	"愿儿永宁。[司马懿·王者荣耀]",
	"知识与无知都是灾难之源。[司马懿·王者荣耀]",
	"人类热爱光明，却用尽了黑暗的手段。[司马懿·王者荣耀]",
	
	// 米莱狄
	"你的幸福来自服从。[米莱狄·王者荣耀]",
	"机械也会拥有生命、成长以及自我思考的能力。[米莱狄·王者荣耀]",
	"能力越强责任越大。[米莱狄·王者荣耀]",
	"既然面对共同宿命?何不结为盟友。[米莱狄·王者荣耀]",
	"与机关共生，不是很棒的体验吗。[米莱狄·王者荣耀]",
	"成为机关试验里最棒的收藏品吧。[米莱狄·王者荣耀]",
	"站在故事尽头领悟起源的本意。[米莱狄·王者荣耀]",
	"我领先时代太远。[米莱狄·王者荣耀]",
	"绝对正确的理性。[米莱狄·王者荣耀]",
	"能源永不枯竭。[米莱狄·王者荣耀]",
	"所触及过的星空，乃吸收所有也竭力想要抵达的地方。[米莱狄·王者荣耀]",
	"留恋感情，会让人永远徘徊于神域之外。[米莱狄·王者荣耀]",
	"微笑这种表情太多余。[米莱狄·王者荣耀]",
	"热情、梦想、希望，统统转化为发电的动力。[米莱狄·王者荣耀]",
	"神的礼物附带有昂贵的价格。[米莱狄·王者荣耀]",
	"折断你的发条。[米莱狄·王者荣耀]",
	"进步的终极，是连物质与自然一并掌握。[米莱狄·王者荣耀]",
	"做为你至高无上的主人，你无权拒绝我的命令。[米莱狄·王者荣耀]",
	"世界是我的意志，机关为我的表象。[米莱狄·王者荣耀]",
	"终于连心也被污染。[米莱狄·王者荣耀]",
	"你死我活，必然的结果。[米莱狄·王者荣耀]",
	"我讨厌半途而废的家伙。[米莱狄·王者荣耀]",
	
	// 铠
	"以绝望挥剑，着逝者为铠。[铠·王者荣耀]",
	
	// ======
	// 电视剧
	"跟着剧中的人物一起成长。",
	"那些年，我们一起追过的美剧。",
	"那些年，我们一起追过的电视剧。",
	
	// 都挺好
	"我想喝手磨咖啡。【都挺好·苏大强】",
	"每个人都摆出一副谦恭的样子，却无意深交。每个人都摆出一种道德的样子，却锱铢必较。[点评：都挺好/伦敦生活]",
	
	// 鸡毛飞上天
	"陈江河找了骆玉珠八年，换来骆玉珠的一句[我这辈子只活三个字，陈江河]。可现实中谁又能等谁八年。[鸡毛飞上天：张译]",
	
	// 电影
	"那些年，我们一起追过的电影。",
	
	// 重庆森林
	"以前我觉得你很笨，现在看起来蛮可爱的。别把自己弄得那么脏嘛，以前白白的多好啊。<sup>《重庆森林》里663（梁朝伟饰）失恋后，对着前女友留下的物品自言自语</sup>",
	
	// 哪吒 - 魔童降临
	"人心中的成见是一座山。[哪吒-魔童降临]",
	
	// 中国合伙人
	"老师，您去过美国吗，您是从书本里看到的美国吧？... 老师，我，一定回去美国的。【中国合伙人 / 邓超】",
	"请大家用一个此来形容我们这代人。追赶、理想、冲动、自由，... 我们都希望有人能告诉我们，应该怎样去生活，其实呢，没有人能告诉我们应该怎样去生活，生活是自己的，我们自己提出的问题应该由我们自己来回答。所以，我认为，我们这代人最重要的是，改变。改变身边每个人，改变身边每一件事情，唯一不变的就是此时此刻的勇气。如果我们能做到这一点，我们将改变世界。【中国合伙人 / 邓超】",
	"USA, Here I come.【中国合伙人 / 邓超】",
	"我们今天来到这里，其实只想告诉你一件事，中国在改变。但很遗憾，你们一直没有变。中国是全球最大的英语教育市场，今天中国学生来美国不是为了留下，他们愿意回国。【中国合伙人 / 邓超】",
	"American Dream，就是在梦想面前，人人机会均等。【中国合伙人 / 邓超】",
	
	// 妖猫传
	"我不是那个身体已经很久了，..<br/>白龙，这也是杨玉环想跟你说的话。<br/>她不是那个身体也已经很久了。[妖猫传]",
	
	// 撼龙经
	"寻龙分金看缠山，一重缠是一重关，关门如有八重险，不出阴阳八卦形。",
	"寻龙分金看缠山，一重缠是一重关，关门如有千重锁，定有王侯居此间。",
	"一生二兮二生三，三生万物是玄关，山管山兮水管水，此是阴阳不待言。",
	
	// 青囊经
	"江南龙来江北望，江西龙去望江东。[青囊经]",
	"先看金龙动不动，次察血脉认来龙，龙分两片阴阳取，水对三叉细认踪。[青囊经]",
	
	// ======
	// 歌 / 歌词
	"不想重蹈覆辙，用回忆填补落寞，想表现坦然，却是自找难堪，两个人心酸一人遗憾。【关于我：苏晗】",
	"向着风，拥抱彩虹，勇敢的向前走，黎明的那道光，会越过黑暗，打破一切恐惧，我能找到答案。【你的答案：阿冗】",
	"哪怕要逆着光，就驱散黑暗，丢弃所有的负担，不再孤单，不再孤单，...【你的答案：阿冗】",
	"哪怕要逆着光，就驱散黑暗，有一万种的力量，淹没孤单，不再孤单，...【你的答案：阿冗】",
	"眼看着你难过，挽留的话却没有说。【感谢你曾来过：周思涵】",
	"我只是，...<br/>像个小孩，<br/>对你胡闹，因为依赖。<br/>我只是这样心态，<br/>不敢靠近，不愿离开。<br/>告诉自己不再想念，<br/>不准回头看。<br/>我爱你，<br/>只是意外。<br/>————————《不准回头》<sup>歌曲</sup>",
	"有最奇崛的峰峦，成全过你我张狂，海上清辉与明月，盛尽杯光。【十年人间】",
	"我多难忘，像秀色可餐的模样，感谢你又打赏，你用词越恰当，... 我越膨胀。<br/>我的疯狂，连我自己都看不上，阴里怪气的愿望，那屈辱的轻伤，谁能给我，发个奖章。<br/>我多向往，有个美丽的地方，我最初的模样，没痛也不会痒，...<br/>能把所有赏赐<br/>都烧光。<br/>【薛之谦·高尚】", // 添加时间：2019年8月25日15:31:48
	"我多高尚，向自尊开了枪，你异样的眼光 我特别的欣赏，让人难忘。【薛之谦·高尚】",
	"没关系幸好我很健忘 习惯对自己说谎。【薛之谦·笑场】",
	"我爱她，轰轰烈烈最疯狂，我的梦，狠狠碎过却不会忘。曾为她，相信明天就是未来。",
	"你的悲伤难过我不参破，我也会把曾经的且过，当施舍。不去计较你太多，从此你在我心里只剩绿色。[陈雪凝：绿色]",
	"若不是你突然闯进我生活，我怎会把死守的寂寞放任了，爱我的话你都说，爱我的事你不做，我却把甜言蜜语当做你爱我的躯壳。[if it hadn't been for your sudden intrusion into my life, How can i let my loneliness go? if you love me, you say it. Love me, you don't do it.] [陈雪凝：绿色]",
	"风也声寂寥，水远山高，谁在唱歌谣<br/>一曲声未了，秋叶落晚照<br/>岁月也相邀，云淡路遥，月下胭脂薄<br/>只叹昨夜今朝，相思知多少<br/>————云水谣[en]",
	"余温散尽的夕阳，天地间走了一趟，跋山涉水后落个停当，是你摊开了我手掌【云水谣】",
	"留下了咿咿呀呀的轻唱，将爱恨别离都深藏，日落晚风凉，那年并肩看夕阳【云水谣】",
	"少年的肩膀，就该这样才对嘛，什么家国仇恨，浩然正气的都不要急，先挑起清风明月、杨柳依依和草场莺飞，少年郎的箭头，本就应当满是美好的事物啊。 [烽火戏诸侯]",
	"愿你抚琴有人听，愿你心事有人叙。【愿·艾辰】",
	"天象太乱何必解读，血脉相通何须占卜，大道三千不论生死劫数。[张杰：星辰]",
	"追寻生命的长河，磨尽的卑微有恃无恐，就算胜负越难测，越要谈风云变色。[张杰：星辰]",
	"等待正邪的归属，不如招摇一段经书，奈何斗转星移我全看透，。[张杰：星辰]",
	"太执着。[张杰：星辰]",
	"谓我何求。[芒种]",
	"我自朝来我随暮去我还在追着，挽过流云留过飞花你可记得我。[谓风：双笙]",
	"山川万古作伴 一晌春秋而过，三两入夜后 一梦不舍。[谓风：双笙]",
	"当眼泪流下来，伤已超载，分开也是另一种明白。[手放开]",
	"我给你最后的疼爱是手放开。[手放开]",
	"我和你，本应该，各自好各自坏，各自生活的自在，毫无关联的存在。[出现又离开]",
	"像我这样优秀的人，本该灿烂过一生，怎么二十多年到头来，还在人海里浮沉。[像我这样的人]",
	"我是心门上了锁的一扇窗，任寒风来来去去关不上，这些年无法修补的风霜，... [关不上的窗]",
	"当记忆的线缠绕过往支离破碎，是慌乱占据了心扉。有花儿伴着蝴蝶，孤雁可以双飞，夜深人静独徘徊。[寂寞沙洲冷]",
	"有人问我你究竟是哪里好，这么多年我还忘不了。春风再美也比不上你的笑，没见过你的人不会明了。[鬼迷心窍]",
	"你说把爱渐渐放下会走更远，又何必去改变，已错过的时间。[不能说的秘密: 林俊杰]",
	"我不配站在你眼前，你的痛怎能看不见。为什么最迷人的最危险，为什么爱会让人变残缺。为什么那么痛，还敢拿胸口再挡锐利伤悲。[迷人的危险·DJ]",
	"天灰灰，会不会，让我忘了你是谁。夜越黑，梦违背，难追难回味。[世界末日：周杰伦]",
	"根本你不懂得，不懂得爱我，辛苦你日或夜，像受罚迁就我，付上几多，后悔几多，计算结果。[根本你不懂得爱我]",
	"我想忘了从前的一切，做一个凡事不问的俗人。从今天起远离人群，做一只狡猾的狐狸。[生而为人]",
	"趁着悲伤不回头，却感觉此刻你停不了的泪流，唯有爱才能永垂不朽。[不死之身]",
	"在人来人往的街头，想起她，她现在好吗？[你一定要幸福]",
	"我一路向北，离开有你的世界，你说你好累，已无法再爱上谁。[一路向北]",
	"也许此去经年忘了也罢，只不过是一场了无牵挂。咸宜观诗文候教的风雅，为谁作答？[鱼玄机]",
	"似梦非梦恰似水月镜花，长安不见常把相思念啊。为何我又偏偏遇上了她，咫尺天涯。[鱼玄机]",
	"你笑我眼泪太少，伪装的很好。我像傻瓜般在笑，眼泪却在掉。你的爱并不知道，我早就想要。闻你的味道，要你的拥抱。[徐良：友情出演]",
	"烟雨入江南，山水如墨染，宛若丹青未干，提笔然，点欲穿。[烟雨行舟]",
	"原谅我藏在心里燎燎的狂傲，去战，面对天地荡浩。[剑心:李易峰]",
	"用冷的锋刃，琴的寂寥，写往事今朝：孤剑，指尖，谈笑。[剑心:李易峰]",
	"孤独万岁，失恋无罪，谁保证，一觉醒来有人陪；我对于人性早有预备，还不算太黑。[A-Lin：失恋无罪]",
	"独身万岁，失恋无罪，爱不够，爱你的人才受罪；用过去悲伤换来自由，难道不珍贵。[A-Lin：失恋无罪]",
	
	"在那深夜酒吧，哪管它是真是假。[野狼Disco]",
	"全场动作必须跟我整齐划一，来，左边跟我一起画个龙，在你右边，画一道彩虹；来，左边，跟我一起画彩虹，在你右边 再画个龙，在你胸口比划一个郭富城，左边儿右边儿摇摇头，两个食指就像两个钻天猴，指向闪耀的灯球。[野狼Disco]",
	"时时刻刻你必须要提醒你自己，不能搭讪，搭讪你就破功了，老弟！[野狼Disco]",
	"得不到的就更加爱，太容易来的就不理睬，其实谁不想遇见真爱，爱得绝对 爱得坦白，以为遇上了就会明白，但每次它只留下惊鸿一瞥的感慨。[蔡健雅：越来越不懂]",
	"才 32岁的我，虽然一个人过 也过得够精彩，偶尔再想谈恋爱，然而爱 总是乱了节拍，我只能够瞎猜 也许能中了头彩，中了又觉得奇怪。【蔡健雅：越来越不懂】",
	"得不到的无所谓，就算是自我安慰，没必要伤悲。【蔡健雅：越来越不懂】",
	"Oh~~，越来越不懂爱，... 越来越不懂。【蔡健雅：越来越不懂】",
	"我也想能够把你照亮,在你的生命中留下阳光,陪你走过那山高水长,陪你一起生长【这一生关于你的风景】",
	"这一路经历太多伤,把最初笑容都淡忘【这一生关于你的风景】",
	"我多想能多陪你一场,把前半生的风景对你讲,在每个寂静的夜里我会想,那些关于你的爱恨情长,我也想能够把你照亮,在你的生命中留下阳光,陪你走过那山高水长,陪你一起生长【这一生关于你的风景】",
	"一想到你我就，空恨别梦久，烧去纸灰埋烟柳【芒种】",
	"一想到你我就，你眼中烟波滴落一滴墨【芒种】",
	"一想到你我就，恨情不寿,总于苦海囚【芒种】",
	"一想到你我就，新翠徒留,落花影中游【芒种】",
	"一想到你我就，相思无用,才笑山盟旧【芒种】",
	"于桥下,前世迟来者,擦肩而过【芒种】",
	"这世界的美好那么少，你一个微笑，世界没了心跳【葛雨晴：小尾巴】",
	"请你要跟着我 仰着头跟着走，最近风和日丽，我心情马上就要追上太阳，牵我的手 和我一起梦游，带你骚扰这个世界，那就是我的温柔【葛雨晴：小尾巴】",
	"麻烦你别走的太快好不好，身后的小尾巴真的跟不上【葛雨晴：小尾巴】",
	"就这样靠着你的肩，一起漫无目的的向前，来实现我们最初的小小心愿【葛雨晴：小尾巴】",
	"世界那么的大，你才那么小，走进彼此的难得我知道【葛雨晴：小尾巴】",
	"这世界的美好那么少,我一个微笑,世界天黑了【葛雨晴：小尾巴】",
	"Now I'm getting ready<br/>[现在我已经全副武装]<br/>Oh, where are my frenemies?<br/>然而我的枪到底应指向谁<br/>--[from: Through My Blood<AM><sup>泽野弘之</sup>]",
	"你已成风，幻化的雨下错了季候，明媚的眼眸里温柔化为了乌有，一层一层院墙把你的心困守，如果没法回头，这样也没不妥。[城府]",
	"如果说，音乐可以疗伤，我不愿再假装，... 【荒唐：杨梓霖】",
	"回荡故城里的小河边，思绪又清晰心难寻。【夫君：周跳跳】",
	"我总是一个人，越孤单越认真，多希望自己可以更残忍，就不怕疼。【孤身：徐秉龙】",
	"我总是一个人，从午夜到清晨，我总是一个人，对抗着一个人，不必小心确认，你虚伪的情分，落单都是成人的一部分。【孤身：徐秉龙】",
	"我总是一个人，被全世界单身。我总是一个人，越迂回越诚恳，多希望自己可以更残忍，就不怕疼。【孤身：徐秉龙】",
	
	// 文艺
	"等风来，不如追风去。",
	"我们要有最朴素的生活，与最遥远的梦想，即使明日天荒地冻，路远马亡。",
	"世上什么最难熬？徒手摘星，爱而不得，世人万千，再难遇我。",
	"秋天到了，夏天的不甘该通通放下了。",
	"山不让尘，川不辞盈。",
	"一枕清风梦绿萝，人生随处是南柯。",
	"第一次见你的时候，我的心里已经炸成了烟花，需用一生来打扫灰炉。",
	
	// ======
	// 有趣的
	"地铁里一个老外和一个中国人用英文吵架，最后中国人赢了。",
	"一哥们在背上纹了一副世界地图，一天背痛去医院，医生问【你哪里痛】他说【在伊拉克附近】。",
	"北冥有鱼，其名为鲲，鲲之大，一锅炖不下；遂化形为鹏，鹏之大，需要两个烧烤架，一翅带糖，一翅微辣。",
	"只要我跑得够快，太阳就晒不到我。",
	
	// ======
	// 你或许是被欢迎的
	"来啦？！老弟。",
	
	// ======
	// 逗比的IT技术工作者
	"一杯茶，一包烟，一个参数传一天。【某开发的日常】",
	"竟然不可以运行，为什么呢？；竟然可以运行，为什么呢？【程序员的日常天问】",
	
	// ======
	// 网文工作者的极限畅想
	"日更三千，完本必神。【一个网络文学耕耘者】",
	
	// 中秋
	"今人不见古时月，今月曾经照古人。",
	
	// ======
	// 动漫
	
	// -- 默认
	"我们一起大笑看看，可怕的东西就会跑光光了。 ——宫崎骏《龙猫》",	
	"我尽力了，.. 接下来看你的了。 [ALL Might·欧尔麦特：我的英雄学院]",
	
	// -- 一人之下
	"[你悟到了什么?][术之尽头,炁体源流.]【一人之下】",
	
	// -- 一人之下：张之维
	"像你我这等凡夫俗子，一旦走入此道，很容易就有了偏差。【张之维（号：天通）<sup>一人之下：绝顶</sup>】",
	"我张之维对全性，见一个杀一个，我倒想看看，谁能劝得住我。【张之维（号：天通）<sup>一人之下：绝顶</sup>】",
	"想走的路，不好走；想做人不好做。都说是[身不由己]？这不是废话嘛。己不由心，身又岂能由己？好自为之吧。【张之维（号：天通）<sup>一人之下：绝顶</sup>】",
	
	// -- 罗小黑
	"罗小黑，我们来啦！",
	
	// -- 天行九歌
	"即使骤雨忽至，又何所惧。【紫雨<sup>天行九歌</sup>】",
	
	// -- 一刀修罗
	"一刀修罗。",
	
	// -- 魔道祖师
	"世人只记得魏无羡血洗不夜天，却不知道是因为他的师姐死了；<br/>世人只知道魏无羡修鬼道，却不知道他没了金丹；<br/>世人只知道魏无羡以前爱笑，却不知道他只是假装开心。",
	"凭什么你的知遇之恩，要让别人付出代价。[魏无羡对化丹手吼道]",
	
	// -- Fate Stay Night
	"就让我们再次重现神话之战吧。[吉尔伽美什]",
	"区区趴在地上的爬虫，谁允许你抬起头来的？[吉尔伽美什]",
	"嗯？居然想让本王跪下。[吉尔伽美什]",
	"我一定要把你那颗制造赝品的头颅打得粉碎。[吉尔伽美什]",
	"你没有资格直视我。虫子就该有虫子的本分，乖乖地低头盯着地面，然后去死。[吉尔伽美什]",
	"就这么急着相思吗？疯狗。[吉尔伽美什]",
	"凭你的进谏，就想让本王撤退？[吉尔伽美什]",
	"这种愚昧小人怎配活在这个世上。[吉尔伽美什]",
	"既然如此，那我就赐予你最大的试炼吧。[吉尔伽美什]",
	"什么？你这家伙。[吉尔伽美什]",
	"真够卖力的。所以那时候我说了让你去死了。[吉尔伽美什]",
	"可得先从痛苦学起。[吉尔伽美什]",
	
	// ======
	// 我说 - Adamhuan
	
	// 2019年10月14日17:01:29
	"你来到这个世界的时候无欲无求，也对世间的种种毫不知情、没有防备，... 而后，当你走了一遭之后，你开始执着了，... 你有你的故事，你有你的坚持，你有自己的抗争，也有自己的安宁与渴望，... 但这一切的意义是什么？你到底要什么？你到底为什么？哎，... [Adamhuan]",
	"这个世界时而喧闹，时而寂静，... 但你喜欢哪一种，你想要什么，... [Adamhuan]",
	"很努力，却事倍功半的人不是没用，只是不得章法；一旦命运眷顾，他们爆发出来的力量，将是惊人的，且不可阻止的。[Adamhuan]",
	"用一句话让你想起自己来时的样子。[Adamhuan]",
	"你是否也有过这样的感受：不论世界多么嘈杂喧嚣，在你心底最安静的一隅，永远有一个声音在那里自顾自的发声：干净而纯粹，仿佛洞彻了所有的纷繁复杂与动摇叨扰。 [Adamhuan]",
	
	"你只需尽兴努力，淋漓生活。因为，一切自有安排。[Adamhuan]",
	"为什么你非要痛彻心扉，才开始明白。[Adamhuan]",
	"很多的事情烦恼到最后，不是暴怒，而是疲惫。[Adamhuan]",
	
	// 2019年9月15日08:39:03
	"很多时候，人们选择一件事情，并不是因为它有多正确，而是它有多少人赞同，甚至多少人围观。[Adamhuan]",
	"凶残与恶的最后一个阶段是，你知道这是恶行，但是你真的愿意去做，并可以从中获得乐趣，每多一个人赞同你，哪怕是围观你，你就多了一份安稳与确定。这种眼神狰狞，却嘴角张扬、眉开眼笑的表情，最是丑陋，最令人厌恶。[Adamhuan]",
	"以前喜欢收集地图，去过的地方都要留下记录。[Adamhuan]",
	"爱情有时候很伟大，有时候却很脆弱，.. 不是它反复无常，也不是它经不起考验，而是人心难测海水难量。[Adamhuan]",
	"形形色色的人间，什么都会发生，什么都在发生，... 哎。[Adamhuan]",
	
	// ======
	// 神话
	"诸神黄昏。",
	
	// ======
	// 名人名言
	"一切安乐，无不来自困苦。【我是猫：夏目淑右】",
	"“雪融化后会变成什么？”<br/>“是春天吧。”<br/>——高屋奈月",
	"休对故人思故国，且将新火试新茶。诗酒趁年华。——苏轼",
	"我把火花点燃在指尖，跳跃成宿命的燃烧。——田维",
	"没有不可治愈的伤痛，没有不能结束的沉沦，所有所有失去的，会以另一种方式归来。——肖尔斯",
	"家人闲坐，灯火可亲。——汪曾祺《冬天》",
	"行路难，不在山不在水，只在人情反覆间。——白居易",
	"纵使文章惊海内，纸上苍生而已。——龚自珍",
	"自童年起，我便独自一人，照顾着历代星辰。——白鹤林《孤独》",
	"万头攒动火树银花之处不必找我，如欲相见，我在各种悲喜交集处，能做的只是长途跋涉的归真返璞。——木心《我纷纷的情欲》",
	"忍把浮名，换了浅斟低唱。——柳永",
	"我肩上是风，风上是闪烁的星辰。——北岛《结局与开始》",
	"你没有如期归来，而这正是离别的意义。——北岛《白日梦》",
	"人生忽如寄，莫辜负茶、汤、好天气。——汪曾祺",
	"最是人间留不住，朱颜辞镜花辞树。——王国维",
	"宁鸣而死，不默而生。——范仲淹",
	"你再不来，我要下雪了。——木心《云雀叫了一整天》",
	"我与我周旋久，宁作我。——《世说新语》",
	"人间有味是清欢。——苏轼",
	"倘若我们当中哪一位偶尔想与人交交心或谈谈自己的感受，对方无论怎样回应，十有八九都会使他不快，因为他发现与他对话的人在顾左右而言他。他自己表达的，确实是他在日复一日的思虑和苦痛中凝结起来的东西，他想传达给对方的，也是长期经受等待和苦恋煎熬的景象。对方却相反，认为他那些感情都是俗套，他的痛苦俯仰皆是，他的惆怅人皆有之。[《鼠疫》（La Peste）：阿尔贝·加缪（Albert Camus，1913年11月7日—1960年1月4日）]",
	
	"无穷的远方，无数的人们，都和我有关。[鲁迅]",
	"鲁迅说：「楼下一个男人病得要死，那间壁的一家唱着留声机；对面是弄孩子。楼上有两人狂笑；还有打牌声。河中的船上有女人哭着她死去的母亲。<b>人类的悲欢并不相通，我只觉得他们吵闹</b>。」-《而已集·小杂感》",
	
	"白宇：自在徐行。",
	"知识早已存在，我们来到这个世界上，只是为了学习那些曾经被我们遗忘了的知识。[柏拉图]",
	"比起哈佛大学的毕业证书，读书的好习惯更加重要。【比尔盖茨】",
	"查理芒格说，我这一辈子想要的就是融入生活，而不希望自己被孤立。",
	"毕淑敏说，我们生来，不是讨好别人喜欢的，与其绞尽脑汁的讨好别人，不如开开心心的做自己喜欢的事情。她说的对，我不说了，.. 呵呵。",
	"得到你想要的东西，最保险的办法，就是让自己配得上你想要的那个东西。[查理·芒格]",
	"检验一流智力的标准，就是看你能不能在头脑中同时存在两种相反的想法，还维持正常行事的能力。[菲茨杰拉德（F.Scott Fitzgerald）]",
	"如果好人没好报，我们为什么还要做好人？我们坚持一件事情，并不是因为这样做了会有效果，而是坚信，这样做是对的。——哈维尔",
	"自叙平生志愿，荣华富贵皆在所后，惟望子孙留心正学。他年得蔚为名儒，则真使吾九泉含笑矣。[易中天的曾祖父]",
	"人一生中最重要的两天就是出生那天和发现人生目标的那天。[马克·吐温]",
	"命运可以打破，但定数必须遵守。 [阿南刻·Anance：定数女神/超神]",
	"孔夫子丹丘生，将近酒杯莫停。 [李白]",
	"他们不仅要是各自领域公认的资深专家，还需要有足够的战略眼光参与公司重大领域和项目。 [腾讯T5科学家的评定标准极其严苛]",
	"艺无止境，诚惶诚恐。 [于旸·TombKeeper：腾讯T5科学家 / 玄武实验室]",
	"做我们这一行，耐心和聪明同样重要。[张胜誉：腾讯T5科学家 / 量子实验室]",
	"我们不相信任何一个人给我们的直接结论，不管这个人过去的成就和地位。[张胜誉：腾讯T5科学家 / 量子实验室]",
	"得意之时淡然，失意之时坦然。 [丰子恺]",	
	"在开心网转型过程中，我始终没成为一个能够享受游戏巨大乐趣的玩家。 [陈炳浩：开心网创始人]",
	"逆水行舟，不进则退。 [梁启超]",
	"每个人对于他所属于的社会都负有责任，那个社会的弊病他也有一份。 [挪威戏剧家：易卜生]",
	"中国公共社会，将会进入一段漫长的、繁华喧嚣而务必平庸的中产崛起时期。 [吴晓波：财经作家]",
	"一半海水，一半火焰。 [王朔]",
	"这是最好的时代，也是最坏的时代。 [狄更斯]",
	"物来顺应，未来不迎，当时不杂，既过不恋。 [曾国藩]",	
	"如果那个人真的爱你，你走不掉的，跑不了的，除非他有意放你走，你还有什么不明白的。 [朱茵]",
	"人的一生中有大大小小的等待，渐渐忘记了自己等待的是什么。 [张爱玲]",
	"你的儿女，其实不是你的儿女；<br/>他们是生命对于自身渴望而诞生的孩子；<br/>他们借助你来这世界，却非因你而来；<br/>他们在你身旁，却并不属于你。<br/> [纪伯伦]",
	"世界上一成不变的东西，只有“任何事物都是在不断变化的”这条真理。 —— 斯里兰卡",
	"真理惟一可靠的标准就是永远自相符合。 —— 欧文",
	"土地是以它的肥沃和收获而被估价的；才能也是土地，不过它生产的不是粮食，而是真理。如果只能滋生瞑想和幻想的话，即使再大的才能也只是砂地或盐池，那上面连小草也长不出来的。 —— 别林斯基",
	"我需要三件东西：爱情友谊和图书。然而这三者之间何其相通！炽热的爱情可以充实图书的内容，图书又是人们最忠实的朋友。 —— 蒙田",
	"时间是一切财富中最宝贵的财富。 —— 德奥弗拉斯多",
	"时间只是人的错觉。【爱因斯坦】",
	"想结婚就去结婚，想单身就维持单身，反正到最后你们都会后悔。【萧伯纳】",
	
	// 马云
	"我们每个人都要走出昨天的自己。不仅要为自己着想，要为别人着想，更要为未来着想。[马云]",
	"很多人说，马云你讲话总是站得很高，但是，你笑话我们，我们也这么说，你信，我们当然更高兴。[马云]",
	"能不痛苦吗？能不纠结吗？但没有用，改变自己，不是要做大、做强，而是做好。善良是最强大的力量。[马云]",
	"过去20年，很多人跟马云说“马云你运气真好，阿里巴巴真厉害。”其实不对，阿里犯过的错，不比别人少。但是我们做了很多正确的选择。我们从来没有从商业出发，所有重要的决定都是跟钱无关。[马云]",
	"我们的思考、决定、技术、产品，目的都是是否能解决社会问题，是否源于我们的使命、价值观？[马云]",
	"阿里不愿意只做一家会赚钱的，平庸的公司。我们的目标从来不是打败对手，而是给世界带来变化。[马云]",
	"我们不想变成一家强大的公司，强大的公司很难，好公司更难。阿里巴巴拥有了最好的人才、技术、资源，但这些不是我们炫耀的资产，是社会给我们的信任，我们每个人都会说感恩，每个人都在说感谢，但我希望阿里人，感恩社会最好的办法，是给社会带来更多惊喜。[马云]",
	"未来，还有个巨大的机会，是新全球化。[马云]",
	"今天我们都很自信，世界在害怕中国，害怕强大的公司。我们希望技术是善意的，技术给人带来希望，而不是绝望。我们希望阿里巴巴参与新一轮的全球化，让全世界的货，货通天下。我们希望技术，阿里云、达摩院，用自己的能力，想象力，给世界带来机会。我们必须明白，技术不会带来很多的就业，但是技术带来服务业的机会。阿里的未来不是为了证明我们能赚102年的钱，而是我们愿意担当102年的责任。[马云]",
	"不退休，换个江湖再见。[马云]",
	"至于我自己，我把自己想得很明白。[马云]",
	"马云说，很多很多年前，他去格林威治天文台，有人问他，太阳系在哪，他没找到，又问，地球在哪，他也没找到。“我突然明白，我们这些人，在地球上，啥都不是。那一刻我明白，我们不是谁。人生不是你取得了什么，而是你经历了什么。世界这么美好，很多事我都想去体验、尝试。还有那么多不美好，不对，不敬人意的地方，我是要去折腾折腾的。”[马云]",
	"我是不会停下来的，阿里巴巴只是我很多梦想中的一个而已。我自己觉得我还很年轻，我想去玩，去折腾。教育、公益、环保，我一直在做，但是我想我能做得更好。[马云]",
	"世界那么好，机会那么多，我又那么爱热闹。我这么年轻，哪里舍得退休。[马云]",
	"我希望换个江湖，青山不改，绿水长流，后会有期！[马云]",
	
	// 技术类 - 文化
	
	// 安全
	"拥有不将就风格的人，迟早是牛人。[余弦(知道创宇,前CTO)]",
	
	// ELK / Elastic
	"Remember：if a new user has a bad time，it’ s a bug in Logstash.[Jordan Sissel,世界著名运维工程师]",
	
	// ======
	// 书
	"生命中其实是没有幸福或者不幸的，生命只是活着，静静地活着，有一丝孤零零的意味。[活着]",
	"每个灵魂都是独特的，都有各自的美德与过错，如果命运是一条孤独的河流，谁会是你灵魂的摆渡人。[摆渡人]",
	"比孤独更可悲的事情，就是根本不知道自己很孤独，或者分明很孤独，却把自己都骗得相信自己不孤独。[江南《龙族》]",
	"一个人究竟要隐藏多少秘密，才能巧妙地度过一生？[事件的真相：哈里·戈贝尔]",
	"探索因果关系的旅程，挖掘原本可能的世界。[The book of why / 为什么]",
	"切实可行的亲密关系指导方案。[亲密关系(第六版)[Intimate Relationships]<sup>百科全书式的两性心理学专著</sup>]",
	"这是最好的时代，这是最坏的时代；这是智慧的时代，这是愚蠢的时代；这是信仰的时期，这是怀疑的时期；这是光明的季节，这是黑暗的季节；这是希望之春，这是失望之冬；人们面前有着各样事物，人们面前一无所有；人们在直登天堂，人们在直下地狱。<sup>[双城记]</sup>",
	"白嘉轩后来引以为豪的是一生里娶过七房女人。【白鹿原】",
	"清晨，她走来了。[穆斯林的葬礼]",
	"话说三百四十八年零六个月十九天前，那天巴黎教堂所有大钟齐鸣，响彻老城、大学城和新城三重城垣，惊醒了全体市民。[巴黎圣母院]",
	"尽管几十万人聚集在一块不大的地方，千方百计将他们聚集的土地糟蹋得面目全非，尽管他们用石头覆盖地面，不让地上长出任何东西，尽管出土的小草都被清除，尽管煤炭和石油燃烧的浓烟四处弥漫，尽管树木被滥伐，鸟兽被驱逐，即使在这样的城市里，春天仍然是春天。《复活》",
	"洛丽塔，我生命之光，我欲念之火。我的罪恶，我的灵魂。《洛丽塔》",
	"幸福的家庭都是相似的，不幸家庭各有各的不幸。《安娜卡列尼娜》",
	"有一天，在一处公共场所的大厅里，有一个男人向我走来，他主动介绍自己，他对我说：“我认识你，永远记得你，那时候，你还很年轻，人人都说你美，现在，我是特地来告诉你，对我来说，我觉得你现在比年轻时更美，那时你是年轻女人，与你那时的容貌相比，我更爱你现在备受摧残的面容。《情人》",
	"很多年以后，奥雷连诺上校站在行刑队面前，准会想起父亲带他去参观冰块的那个遥远的下午。《百年孤独》",
	"诗曰：<br/>豪华去后行人绝，箫筝不响歌喉咽。<br/>雄剑无威光彩沉，宝琴零落金星灭。<br/>玉阶寂寞坠秋露，月照当时歌舞处。<br/>当时歌舞人不回，化为今日西陵灰。<br/>《金瓶梅》",
	
	// 三国
	"滚滚长江东逝水，浪花淘尽英雄，是非成败转头空，青山依旧在，几度夕阳红。《三国》",
	"白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。《三国》",
	
	// 霸王别姬
	"如果人人都是折子戏，只把最精华的，仔细唱一遍，该多美满啊。<霸王别姬>",
	"婊子无情，戏子无义。<霸王别姬>",
	"每一个人，有其依附之物。<霸王别姬>",
	"帝王将相、才子佳人的故事，诸位听得不少。那些情情义义，恩恩爱爱，卿卿我我，都瑰丽莫名。根本不是人间颜色。<霸王别姬>",
	"人间，只是抹去了脂粉的脸。<霸王别姬>",
	
	// 阿加莎：《无人生还》
	"十个小士兵，出门打牙祭，不幸噎住喉，十个只剩九。[<And then there were None·无人生还>:阿加莎·克里斯蒂]",
	"九个小士兵，炳烛到夜半；清早叫不醒，九个只剩八。[<And then there were None·无人生还>:阿加莎·克里斯蒂]",
	"八个小士兵，旅行到德文；流连不离去，八个只剩七。[<And then there were None·无人生还>:阿加莎·克里斯蒂]",
	"七个小士兵，举斧砍柴火；失手砍掉头，七个只剩六。[<And then there were None·无人生还>:阿加莎·克里斯蒂]",
	"六个小士兵，捅了马蜂窝；蜂来无处躲，六个只剩五。[<And then there were None·无人生还>:阿加莎·克里斯蒂]",
	"五个小士兵，同去做律师；皇庭判了死，五个只剩四。[<And then there were None·无人生还>:阿加莎·克里斯蒂]",
	"四个小士兵，结伴去海边；青鱼吞下腹，四个只剩三。[<And then there were None·无人生还>:阿加莎·克里斯蒂]",
	"三个小士兵，动物园里耍；狗熊一巴掌，三个只剩俩。[<And then there were None·无人生还>:阿加莎·克里斯蒂]",
	"两个小士兵，日头下面栖；毒日把命夺，两个只剩一。[<And then there were None·无人生还>:阿加莎·克里斯蒂]",
	"一个小士兵，落单孤零零；悬梁了此生，一个也不剩。[<And then there were None·无人生还>:阿加莎·克里斯蒂]",
	
	// 格局，吴军
	"事实上，不确定性是我们这个世界固有的特征，世界上有很多我们自己甚至整个人类都无法控制的力量。知道自己的长处，知道自己能力的边界，承认这一点，才是唯物主义的态度。[吴军：格局]",
	"要提升自己的格局，第一步是先认识到超出个人能力之外的力量——它可以是头顶的星空，也可以是心中的道德。只有敬畏这样的力量，我们才能把事情做好。[吴军：格局]",
	"不要因为小恶而忘记大善。[吴军：格局]",
	"生活中最重要的是掌握好劫走。人在忙碌的时候，很容易忘掉忙碌的目的，最后反而离目标越来越远。从忙乱中退一步，思考一下目的，能省掉多余的需求和行动，减少不必要的麻烦，让我们更快的接近目标。[吴军：格局]",
	"我们在职场上的一切行为，莫过于做事和做人。在职场上不能做事的人最终不会有长远发展，不会做人的人也会影响个人的稳定和提升。[吴军：格局]",
	"要思考，就需要慢下来。[吴军：格局]",
	"不要成为积极废人。[吴军：格局]",
	"对于智者，我总是对他们带有敬意，对他们的行事方式、一言一语格外留心，力争将他们的智慧变成自己的智慧。久而久之，我慢慢发现自己在见识和能力甚至运气上，都提升了一个等级。[吴军：格局]",
	"人最重要的是生活着，快乐着。[吴军：格局]",
	"拥有智慧，更要拥有勇气。[吴军：格局]",
	"成长首先看环境，而在环境的因素中，最重要的是家庭环境和朋友圈，其次要看自身做事的原则和方法。天天做毛线的事情，早晚有一天会付出失败的代价，相反，永远呆在舒适区，只会让人无法成长。[吴军：格局]",
	"仰望星空，脚踏实地。[吴军：格局]",
	"悲观主义的风格能减轻悲剧对我们的打击。当悲剧或者厄运真的发生时，由于在于其之中，我们会觉得打击不那么痛苦。然而，悲观主义虽然能够减轻痛苦，却不能解决问题。[吴军：格局]",
	"以正合，以奇胜[吴军：格局]",
	"了解一个民族的文明特征，是理解他们当下行为方式的钥匙。因此，只有了解欧洲近代的文明特征，我们才能了解西方世界；只有了解中华文明和西方文明的区别，我们才能了解自己。[吴军：格局]",
	"缺乏危机感的恶果。[吴军：格局]",
	"如果我们相信未来会比今天更好，坚信自己生活在一个好地方，索要做的便是认识到未来时代的特征和规律。把握住一些不便的道理，使用正确的方法，做哪些能够不断让自己活得可叠加式进步的事情，这样便能立于不败之地。[吴军：格局]",
	"优质才是稀缺的。[吴军：格局]",
	"态度（attitude）和格局（altitude）这两个词在英语里只差一个字母，但并不能互相替代。[吴军：格局]",
	"有了好的态度，再有大的格局，才能把自己上升的天花板提高一大截。[吴军：格局]",
	"不同人对于今天时代的认识就千差万别。[吴军：格局]",
	
	// ======
	// 地点 - 上海
	"上海是个不夜城，凌晨三点的我依然没有睡。但是，我要选择自己的生活，我依然要早起，我要看上海外滩的第一道光。我要为此奋斗，去完成自己的梦想。",
	
	// ======
	// 地点 - 武汉
	"武汉每天不一样。",
	
	// ======
	// 心境 / 境界
	"极兵之道。",
	"入微。",
	"兵者，诡道也。",	
	"无远弗届。",
	"创造自我，追求无我。",
	"心流。",
	
	// 料理的艺术
	"食髓知味。",
	"记录食材最初的味道。",
	
	// 天马行空
	"如果你能够隐身，你最想做什么事呢？",
	
	// 宗教
	
	// 佛
	"禅宗说，谁缚汝。",
	"好人成佛要经历九九八十一难，坏人成佛只需放下屠刀。",
	"《长阿含经》中释迦牟尼佛说：『拘楼孙佛时。人寿四万岁。拘那含佛时。人寿三万岁。迦叶佛时。人寿二万岁。我今出世。人寿百岁。』",
	"《四分律行事钞简正记》：『时中极少莫越刹那。极长即阿僧祇。谓一百二十刹那。为怛刹那。六十怛刹那为腊缚。三十腊缚为一须臾。三十须臾为一昼夜。三十昼夜为一月。十二月为年。积此年至 八万四千岁。后经百年减一年。如是减到十岁已。又百年增一年。还到八万四千岁。此名一增减。如是二十增减名一住劫。住既二十劫。成坏 空各二十。共成八十劫。如是八十劫。始为一大劫。从此至一十。一十为百。十百为千。十千为万。十万为洛叉。十洛叉为一度洛叉。十度洛叉为一俱胝。十俱胝为一末陀。十末陀为阿庾多。十阿庾多为一大阿庾多。十大阿庾多为一钵;那庾。乃至第五十二数。名阿僧祇。』",
	"一切大富贵，皆从善法出。",
	"勿以恶小而为之，勿以善小而不为。",
	"天上地下，唯我独尊。",
	"我不下地狱，谁下地狱。",
	"放下屠刀，立地成佛。",
	"八识心王。",
	"大千世界。",
	
	// 广告
	// -- 车类广告
	"阅见人生正当时。【奥迪】",
	
	// -- 酒类广告
	// 张裕
	"每一瓶张裕黄金冰谷冰酒，都打到甚至高于加拿大酒商质量联盟（VQA）和国际葡萄酒与葡萄酒组织（OIV）的标准。[加拿大籍·首席酿酒师：亚伯特·米兰]",
	
	// 朋友的每日 / 说说
	
	// -- 赵[竹子]
	"每一个没上闹钟要上班的早上，都会被惊醒。[赵竹子]",
	
	// -- 超人珊珊
	// 健身教练
	"每当听到有人说：<br/>你是健身教练，你也会生病？<br/>我都会带着我那重感冒的鼻音鸭嗓说：<br/>我不会生病，<br/>我不是普通人，<br/>我是超级英雄。<br/>[from: 超人珊珊<sup>Friend</sup>]",
	
	// -- 运维倩
	"脚下有路，眼中有景，背上有包，心中有爱。[运维倩]",
	
	// -- 麦克白
	"人的心志不能低，因为低了就会有低层次的追求。[麦克白]",
	"他们不会为蝇头小利动心，而是把目光放得更远。[麦克白]",
	
	// ======
	// 英文 - English
	// 2019年10月15日08:53:22
	"Important principles may and must be flexible. [重要的原则能够也必须是灵活的。]",
	
	// 2019年9月15日08:39:32
	"It's not what we do once in a while that shapes our lives. It's what we do consistently. 我们过着的生活，是由那些持之以恒的事情造就的；而不是一时兴起、偶尔为之的新鲜刺激的事。",
	
	"Weep no more, no sigh, nor groan. Sorrow calls no time that's gone. [别哭泣，别叹息，别呻吟；悲伤唤不回流逝的时光。]",
	
	"Our greatest glory consists not in never falling but in rising every time we fall. [我们最值得自豪的不在于从不跌倒，而在于每次跌倒之后都爬的起来]",
	"The one thing that doesn’t abide by majority rule is a person’s conscience. [有一种东西不能遵循从众原则,那就是人的良心]",
	"Begin challeging your own assumptions. Your assumptions are your windows on the world. Scrub them off every once in a while, or the light won’t come in. [挑战自己的认知。你的认知是你观望世界的窗；不时擦拭，光线才能穿透。]",
	"Heaven revolves, the gentleman to unremitting self-improvement. 天行健，君子以自强不息",
	"Wisdom in the mind is better than money in the hand.脑中有知识，胜过手中有金钱",
	"A good book is the best of friends, the same today and forever. 好书如挚友，情谊永不渝",
	"The important thing in life is to have a great aim and the determination to attain it.<br/>人生重要的事情就是确定一个伟大的目标，并决心实现它。",
	"Your Best Friend.[更亲近的伙伴]",
	"The people who get on in this world are the people who get up and look for circumstances they want, and if they cannot find them, make them.【在这个世界上取得成就的人，都努力去寻找他们想要的机会，如果找不到机会，他们便自己创造机会】",
	"The fool doth think he is wise, but the wise man knows himself to be a fool.【愚者总自以为聪明，智者则有自知之明】",
	"Just me and my guitar.",
	"You make millions of decisions that mean nothing and then one day your order takes out and it changes your life.[你每天都在做很多看起来毫无意义的决定，但某天你的某个决定就能改变你的一生]",
	"I think it’s important that we don’t all have to hold our heads high all the time saying everything’s fine./「我覺得很重要的是，我們不必總是頭抬得高高的，然後說一切都很好。」– 妮可‧基嫚 (演員)",
	"Everyone has talent.What is rare is the courage to follow the talent to the dark place where it leads. [人人都有天赋。罕见的是甘愿跟随天赋、尝尽人间甘苦的勇气]",
	"Never let life’s hardships disturb you; no one can avoid problems, not even saints or sages./绝不要让生命中的困难影响你；没有人可以避免问题，包括圣贤在内。」– 日莲大圣人 (和尚)",
	"As a rule, men worry more about what they can’t see than about what they can./「一般来说，人们担忧看不到的大于看得到的。」– 凯撒大帝 (罗马帝王)",
	"If you don’t like something, change it. If you can’t change it, change your attitude. Don’t complain./「如果你不喜欢某件事，去改变它。如果你不能改变它，改变你的态度。不要抱怨。」– 马雅‧安哲罗，诗人",
	"I would never have amounted to anything were it not for adversity. I was forced to come up the hard way./「若不是因为挫折，我今天不会有任何成就。我是被迫在因难中进步。」– 詹姆斯‧彭尼 (企业家)",
	"I always tried to turn every disaster into an opportunity./「我总是想办法把每一个灾祸转变为机会。」– 约翰‧洛克菲勒 (工业家)",	
	"When you affirm big, believe big and pray big, putting faith into action, big things happen./「當你斷言大事，相信大事，祈禱大事，執行你所相信的，大事將會發生。」– 諾曼‧文森特‧皮爾 (牧師)",
	"Sometimes we stare so long at a door that is closing that we see too late the one that is open./「我們有時候專注於消失中的機會太久，以致於太晚發現開啟的機會。」– 亞歷山大‧貝爾 (發明家)",
	"No matter how small and unimportant what we are doing may seem, if we do it well, it may soon become the step that will lead us to better things./「不管我們現在所做的事看起來有麼的微不足道或不重要，如果我們認真的做，它可能很快就會成為通往美好事物的踏石階。」– 詹寧‧布魯克 (作家)",
	"Those who cannot change their minds cannot change anything./「無法改變想法的人，無法改變任何事。」– 喬治‧蕭伯納 (劇作家)",
	"I’m a pessimist because of intelligence, but an optimist because of will./「我的智力使我成為悲觀者，但意志力使我成為樂觀者。」– 安東尼奧·葛蘭西 (馬克思主義思想家)",
	"Telling someone they’re wrong is not the same as leading and inspiring them to do what’s right./「指出一個人的錯，有別於引導並激發他去做對的事。」– 安迪．史坦利 (牧師)",
	"The price of inaction is far greater than the cost of making a mistake./「沒有行動的代價，遠超過犯錯的代價。」– 埃克哈特大師 (神學家)",
	"The foolish man seeks happiness in the distance, the wise grows it under his feet./「愚者在未來尋找快樂，智者在自己的腳下種植快樂。」– 羅伯特·歐本海默 (物理學家)",
	"Learning to fly is not pretty but flying is./學習如何飛翔不怎麼好看，但飛翔很好看 [Satya Nadella, Microsoft CEO]<sup>薩蒂亞·納德拉 (微軟公司執行長)</sup>",
	"Leadership is inspiring extraordinary people to step up and serve their country./領導是激勵傑出的人站出來為他們的國家服務 [Justin Trudeau, Prime Minister of Canada]<sup>賈斯汀·杜魯道 (加拿大總理)</sup>",
	"Sometimes it takes going through something so awful to realize the beauty that is out there in this world. [有时候就是要经历一些糟糕的事情才能意识到世间存在的美丽]",
	"The most difficult stage in life is not when no one understands you, but when you don't understand yourself. [生命中最艰难的阶段不是没有人懂你，而是你不懂你自己]",
	"There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self. [优于别人，并不高贵，真正的高贵应该是优于过去的自己]",
	"I'm only brave when I have to be. Being brave doesn't mean you go looking for trouble. [我只是在必要的时候才会勇敢，勇敢并不代表你要到处闯祸]",
	"Once you choose your way of life, be brave to stick it out and never return.[生活的道路一旦选定，就要勇敢地走到底，绝不回头]",
	"No matter what you went through last nigh. Wake up in the morning, the city is still busy. People and arrogance. No one cares what you lose. No one cares about your unhappiness. Love yourself. Come on.",
	"Repeating this kind of dull life all the time, seemingly, I really live a very hard life. [这种平平淡淡的日常生活，老是这么日复一日的话，也挺苦的吧]",
	"Letting go of sad and gloomy memories, then embracing a fresher and brighter world. [放开悲伤的回忆，才能拥抱更鲜活的世界]",
	"I choose to run towards my problems, and not away from them. Because that is what heroes do. [我选择直面问题，而不是逃避，因为英雄就是这么做的]",
	"You know some birds are not meant to be caged, their feathers are just too bright. [你知道，有些鸟儿是注定不会被关在牢笼里的，它们的每一片羽毛都闪耀着自由地光辉]",
	"Option A is not available. So let's just kick the shit out of Option B. [既然没有A选项了，那让我们尽可能地利用B选项吧]",
	"Love is not about how find out the similarities, it is about how to respect the differences. [爱情不是寻找共同点，而是学会尊重不同点]",
	"Getting rid of the fetters of fame, one can concentrate on his technique. [人若无名，便可专心练剑]",
	"When you wake up, you need to think that something great is going to happen today, and that you are going to have a great day. [在你醒来的时候，你需要想着美好的事情即将发生，这将会让你拥有非常棒的一天]",
	"What is a friend? A single soul dwelling in two bodies.  [朋友是什么？两幅躯壳拥有同一个灵魂]",
	"Counting blessings can actually increase happiness and health by reminding us of the good things in life.  [细数幸福的事情确实可以提醒我们生活中存在的美好，还能增加我们的幸福感，保持身心健康]",
	"It's always the simple things, well executed, that are memorable. [认真做好的事情，即使非常简单却总是令人难忘]",
	"Tourism doesn't care about the destination, but care about the way people and things and those wonderful memories and scenery.  [旅游不在乎终点，而是在意途中的人和事还有那些美好的记忆和景色]",
	"Everyone thinks of changing the world, but no one thinks of changing himself. [每个人都想要改变世界，却没人想过要改变自己。]",
	"Content makes poor men rich; discontent makes rich men poor. [知足使贫穷的人富有；而贪婪使富足的人贫穷。]",
	"Try to be a rainbow in someone’s cloud.  [努力成为别人乌云里的一道彩虹]",
	"Hypocritical friendship is like your shadow; when you are in the sun, it will closely follow you, but once you go into the shadow, it will leave you. [虚伪的友谊就如你的影子；当你处在阳光下时，它会紧紧地跟着你，但你一旦走到阴暗处时，它立刻就会离开你]",
	"It takes a great deal of bravery to stand up to your enemies, but a great deal more to stand up to your friends. [面对敌人需要勇气，但敢于直面朋友，需要更大的勇气]",
	"Failure is the fog through which we glimpse triumph. [失败是一团迷雾，穿过它，我们可以瞥见胜利]",
	"Don't go around saying the world owes you a living. The world owes you nothing. [别到处跟别人抱怨这个世界欠你什么，这个世界什么都不欠你的]",
	"Can a man still be brave if he's afraid? That is the only time a man can be brave.  [人在恐惧的时候还能勇敢吗？人唯有恐惧的时候方能勇敢]",
	"Not everything that counts can be counted, and not everything that's counted truly counts. [不是所有有价值的事物都可以被计算，也不是所有可计算的事物都值得去计算]",
	"Learning is like rowing upstream, not to advance is to drop back.  [学习如逆水行舟，不进则退]",
	"Affection is when you see someone's strength, love is when you accept someone's flaws [爱恋是只看到对方的好，而爱情是连对方的缺陷都包容]",
	"If you listen to the music, the world changes. It's like falling in love. Only no one gets hurt.  [当你聆听音乐时，仿佛世界都变了。这种感觉就像是陷入爱情，只不过没有人会受伤]",
	"A mother's love makes a child feel: the arrival of the world is beautiful; mother's love in the child gradually instill the love of life, and not just hope alive.  [母爱使孩子感到：降临人间是美好的；母爱在孩子身上逐渐灌输了对生命的热爱，而不仅仅希望活着就是了]",
	"Not ignorance, but the ignorance of ignorance, is the death of knowledge. [不是无知本身，而是对无知的无知，才是知识的死亡]",
	
	// ======
	// 没分类的
	"[and so on.]"
	
];

// ==============================
// 函数定义区域
// 将上面的各个变量，随机赋予前端页面

function is_someday() {
	return today.getMonth() == 5 && today.getDate() == 4;
}

function getTodayString() {
	return today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日 | 星期" + weeks[today.getDay()];
}

function star(num) {
	var result = "";
	var i = 0;
	while (i < num) {
		result += "★";
		i++;
	}
	while(i < 5) {
		result += "☆";
		i++;
	}
	return result;
} 

// 生成今日运势
function pickTodaysLuck() {
	var _activities = filter(activities);
	
	var numGood = random(iday, 98) % 3 + 2;
	var numBad = random(iday, 87) % 3 + 2;
	
	var eventArr = pickRandomActivity(_activities, numGood + numBad);
	
	var _words = filter(words);
	var numWords = random(iday, 98) % 0.5;
	var eventWords = pickRandomActivity(_words, numWords);
	
	var specialSize = pickSpecials();
	
	// 好事
	for (var i = 0; i < numGood; i++) {
		addToGood(eventArr[i]);
	}
	
	// 坏事
	for (var x = 0; x < numBad; x++) {
		addToBad(eventArr[numGood + x]);
	}
	
	// 箴言
	for (var z = 0; z < numWords; z++) {
		addToWordsSaid(eventWords[z]);
	}
}

function pickTodaysWords() {
	var _words = filter(words);
	var numWords = random(iday, 83) % 3 + 2;
	var eventWords = pickRandomActivity(_words, numWords);
	
	for (var i = 0; i < numWords; i++) {
	addToWordsSaid(eventWords[i]);
	}
}

// 去掉一些不合今日的事件
function filter(activities) {
	var result = [];
	
	// 周末的话，只留下 weekend = true 的事件
	if (isWeekend()) {
		
		for (var i = 0; i < activities.length; i++) {
			if (activities[i].weekend) {
				result.push(activities[i]);
			}
		}
		return result;
	}
	return activities;
}

function isWeekend() {
	return today.getDay() === 0 || today.getDay() == 6;
}

// 添加预定义事件
function pickSpecials() {
	var specialSize = [0,0];
	
	for (var i = 0; i < specials.length; i++) {
		var special = specials[i];
		
		//if (iday == special.date) {
		if (idate == special.date) {
			if (special.type == 'good') {
				specialSize[0]++;
				addToGood({name: special.name, good: special.description});
			} else {
				specialSize[1]++;
				addToBad({name: special.name, bad: special.description});
			}
		}
	}
	
	return specialSize;
}

// 从 activities 中随机挑选 size 个
function pickRandomActivity(activities, size) {
	var picked_events = pickRandom(activities, size);
	
	for (var i = 0; i < picked_events.length; i++) {
		picked_events[i] = parse(picked_events[i]);
	}
	
	return picked_events;
}

// 从数组中随机挑选 size 个
function pickRandom(array, size) {
	var result = [];
	var random_num = Math.floor(Math.random()*10+1);
	
	for (var i = 0; i < array.length; i++) {
		result.push(array[i]);
	}
	
	for (var j = 0; j < array.length - size; j++) {
		var index = random(iday, j) % result.length;
		result.splice(index, 1);
	}
	
	return result;
}

function pickRandomWords(array, size) {
	var result = [];
	var random_num = Math.floor(Math.random()*10+1);
	
	for (var i = 0; i < array.length; i++) {
		result.push(array[i]);
	}
	
	for (var j = 0; j < array.length - size; j++) {
		var index = random(iday*89/random_num, j) % result.length;
		result.splice(index, 1);
	}
	
	return result;
}


// 解析占位符并替换成随机内容
function parse(event) {
	var result = {name: event.name, good: event.good, bad: event.bad};  // clone
	
	if (result.name.indexOf('%v') != -1) {
		result.name = result.name.replace('%v', varNames[random(iday, 12) % varNames.length]);
	}
	
	if (result.name.indexOf('%t') != -1) {
		result.name = result.name.replace('%t', tools[random(iday, 11) % tools.length]);
	}
	
	if (result.name.indexOf('%l') != -1) {
		result.name = result.name.replace('%l', (random(iday, 12) % 247 + 30).toString());
	}
	
	return result;
}

// 添加到“宜”
function addToGood(event) {
	$('.good .content ul').append('<li><div class="name">' + event.name + '</div><div class="description">' + event.good + '</div></li>');
}

// 添加到“不宜”
function addToBad(event) {
	$('.bad .content ul').append('<li><div class="name">' + event.name + '</div><div class="description">' + event.bad + '</div></li>');
}

// 添加到“箴言”
function addToWordsSaid(event) {
	$('.peolesaid .content ul').append('<li><div class="name">' + event.name + '</div><div class="description">' + event.good + '</div></li>');
}

$(function(){
	
	for(l=0;l<1;l++){
		if(l=0){
			window.location.href = window.location.href;
		}
	}
	
	if (is_someday()) {document.body.className = 'someday'};
	// 当前日期
	$('.date').html(getTodayString());
	
	// 座位朝向
	$('.direction_value').html(directions[random(iday, 2) % directions.length]);
	
	// 喝什么
	$('.drink_value').html(pickRandom(drinks,2).join('，'));
	
	// 吃什么
	$('.eat_value').html(pickRandom(eats,3).join('，'));
	
	// 亲近指数：神
	$('.goddes_value').html(star(random(iday, 6) % 5 + 1));
	
	// 读 / 看什么
	$('.book_value').html(pickRandom(books_films,3).join('，'));
	
	// 网站
	$('.web_value').html(pickRandom(web_urls,1).join('，'));
	
	// 公司与组织
	$('.company_and_group').html(pickRandom(company_and_group,1).join('，'));
	
	// 会议与事件
	$('.event_and_meeting').html(pickRandom(event_and_meeting,1).join('，'));
	
	// 去哪里 / 去野吧
	$('.wild_value').html(pickRandom(wilds,3).join('，'));
	
	// 好听的音乐 / 听什么
	$('.music_value').html(pickRandom(musics,1).join('，'));
	
	// 轮值诸神
	$('.gods_value').html(pickRandom(god,1).join('，'));
	
	// 趋势
	$('.trend_value').html(pickRandom(trends,1).join('，'));
	
	// 言的强度 / 众灵言
	//pickTodaysWords();
	$('.words_powerful').html(star(random(iday, 2) % 5 + 1));
	
	// 人们说的具体的话
	//$('.people_say').html(pickRandom(words,2).join('，'));
	//$('.people_say').html(pickRandomWords(words,1).join('<br/><br/>'));
	
	$('.people_say').html(pickRandom(words,1).join('，'));
	
	// 凶吉数据 / 哪些事是适合做 / 哪些事不适合做
	pickTodaysLuck();

});

// Finished