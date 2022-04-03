window.addEventListener('load', function () {
    var audio = document.querySelector('.body .content .music audio');
    var mu = document.querySelectorAll('.body .right .bottom li');
    var mu1 = '';
    for (let i = 0; i < mu.length; i++) {
        mu[i].addEventListener('click', function () {
            for (var l = 0; l < mu.length; l++) {
                mu[l].className = '';
            }
            this.className = 'current';
            mu1 = this.innerText;
            audio.src = "../../音乐/" + mu1 + ".mp3";

            var div = document.querySelector('.body .content .music .container ul');
            while (div.hasChildNodes()) //当div下还存在子节点时 循环继续  
            {
                div.removeChild(div.firstChild);
            }

            if (mu1 == '最美的太阳-张杰') {
                var lrc = `[00:01.00]最美的太阳 - 张杰
[00:02.00]作词：刘吉宁
[00:03.00]作曲：刘吉宁
[00:44.35]我的世界
[00:47.70]因为有你才会美
[00:50.45]我的天空
[00:53.90]因为有你不会黑
[00:56.90]给我快乐
[01:00.30]为我伤心流眼泪
[01:03.25]给我宽容
[01:06.75]让我能展翅高飞
[01:09.50]你的话你的泪
[01:12.55]你的笑你的美
[01:15.90]在我眼中胜过最美的玫瑰
[01:22.05]抱着梦往前飞
[01:24.95]不逃避不后退
[01:28.55]你是我成功路上的堡垒
[01:38.61]给我翅膀
[01:42.41]让我可以翱翔
[01:44.61]给我力量
[01:48.46]是你让我变坚强
[01:51.16]不怕受伤
[01:54.71]因为有你在身旁
[01:57.26]你的笑你的泪
[01:59.71]是我逐梦路上最美的太阳
[02:35.96]你的话你的泪
[02:38.91]你的笑你的美
[02:42.16]在我眼中胜过最美的玫瑰
[02:48.41]抱着梦往前飞
[02:51.71]不逃避不后退
[02:54.96]你是我成功路上的堡垒
[03:05.01]给我翅膀
[03:08.71]让我可以翱翔
[03:11.26]给我力量
[03:14.81]是你让我变坚强
[03:17.51]不怕受伤
[03:21.11]因为有你在身旁
[03:23.66]你的笑你的泪
[03:26.01]是我逐梦路上最美的太阳
[03:33.86]给我翅膀
[03:37.41]让我可以翱翔
[03:39.86]给我力量
[03:43.56]是你让我变坚强
[03:46.36]不怕受伤
[03:49.91]因为有你在身旁
[03:52.46]你的笑你的泪
[03:54.76]是我逐梦路上最美的太阳
[04:01.39]是我逐梦路上最美的太阳`;
            }
            else if (mu1 == 'Colors-Stella Jang (스텔라 장)') {
                var lrc = `[00:01.000]Colors - Stella Jang (스텔라 장)
[00:02.000] 作词 : Stella Jang
[00:03.000] 作曲 : Stella Jang
[00:05.230]What's your color
[00:07.580]I wanna know
[00:10.530]What's your color
[00:12.720]I wanna know
[00:15.400]What's your color
[00:17.570]I wanna know
[00:20.130]I wanna know
[00:21.240]I wanna know
[00:22.320]I wanna know
[00:23.870]I could be red
[00:25.070]or I could be yellow
[00:26.220]I could be blue
[00:27.290]or I could be purple
[00:28.470]I could be green
[00:29.380]or pink or black or white
[00:30.680]I could be every color you like
[00:33.490]I could be red
[00:34.610]or I could be yellow
[00:35.730]I could be blue
[00:36.980]or I could be purple
[00:38.170]I could be green
[00:38.960]or pink or black or white
[00:40.670]I could be every color you like
[00:43.080]I could be red
[00:43.990]or I could be yellow
[00:45.220]I could be blue
[00:46.320]or I could be purple
[00:47.590]I could be green
[00:48.600]or pink or black or white
[00:49.970]I could be every color you like
[00:53.500]What's your color
[00:56.060]I wanna know
[00:58.510]What's your color
[01:00.806]I wanna know
[01:03.365]What's your color
[01:05.605]I wanna know
[01:07.977]I wanna know
[01:09.236]I wanna know
[01:10.227]I wanna know
[01:11.914]I could be red
[01:13.215]or I could be yellow
[01:14.164]I could be blue
[01:14.215]or I could be purple
[01:16.355]I could be green
[01:17.405]or pink or black or white
[01:18.956]I could be every color you like
[01:21.337]I could be red
[01:22.325]or I could be yellow
[01:23.575]I could be blue
[01:24.494]or I could be purple
[01:25.884]I could be green
[01:26.947]or pink or black or white
[01:28.456]I could be every color you like
[01:30.956]I could be red
[01:32.006]or I could be yellow
[01:33.137]I could be blue
[01:34.316]or I could be purple
[01:35.506]I could be green
[01:36.587]or pink or black or white
[01:38.206]I could be every color you like`;
            }
            else if (mu1 == '爱丫爱丫-BY2') {
                var lrc = `[00:01.00]爱丫爱丫 - BY2
[00:02.00]作词：黄淑惠+林怡凤
[00:03.00]作曲：李志源
[00:26.04]把爱留在身边窗外有个蓝蓝的天
[00:32.03]落叶那一瞬间记得多穿一件
[00:38.33]一天过了一天我的日记却病恹恹
[00:44.63]我们隔得太远太远
[00:50.11]多喜欢你从来不会说
[00:53.26]多在乎你到底懂不懂
[00:56.46]你有没有对我一点点心动
[01:02.05]爱我的话给我回答
[01:05.75]我的爱丫爱丫没时差
[01:08.65]等待是我为你付出的代价哦唔哦
[01:14.84]爱我的话要回答
[01:18.09]我只等你等你一句话
[01:21.34]走太远你走太远你的回答听不见
[01:36.07]一天过了一天我的日记却病恹恹
[01:41.45]我们隔得太远太远
[01:46.98]多喜欢你从来不会说
[01:50.18]多在乎你到底懂不懂
[01:53.28]你有没有对我一点点心动
[01:59.02]爱我的话给我回答
[02:02.22]我的爱丫爱丫没时差
[02:05.42]等待是我为你付出的代价哦唔哦
[02:11.66]爱我的话要回答
[02:14.96]我只等你等你一句话
[02:18.06]走太远你走太远你的回答听不见
[02:50.31]爱我的话给我回答
[02:53.71]我的爱丫爱丫没时差
[02:56.91]等待是我为你付出的代价哦唔哦
[03:03.00]爱我的话要回答
[03:06.35]我只等你等你一句话
[03:09.50]走太远你走太远你的回答听不见`;
            }
            else if (mu1 == '花海-周杰伦') {
                var lrc = `[00:01.00]花海 - 周杰伦
[00:02.00]作词：古小力/黃淩嘉
[00:03.00]作曲：周杰伦
[00:19.26]编曲：黄雨勋
[00:20.01]制作人：周杰伦
[00:20.35]吉他：李庭匡
[00:20.60]录音师：杨瑞代
[00:20.90]录音室：JVR Studio 
[00:21.20]混音师：杨大纬
[00:21.55]混音室：杨大纬工作室
[00:22.40]OP：JVR Music Int'l Ltd 
[00:27.29]静止了所有的花开
[00:33.72]遥远了清晰了爱
[00:39.91]天郁闷爱却很喜欢
[00:46.35]那时候我不懂这叫爱
[00:52.78]你喜欢站在那窗台
[00:59.02]你好久都没再来
[01:05.60]彩色的时间染上空白
[01:12.64]是你流的泪晕开
[01:17.89]不要你离开
[01:20.58]距离隔不开
[01:23.87]思念变成海
[01:26.82]在窗外进不来
[01:30.21]原谅说太快
[01:33.40]爱成了阻碍
[01:36.65]手中的风筝放太快回不来
[01:43.03]不要你离开
[01:46.22]回忆划不开
[01:49.47]欠你的宠爱
[01:52.41]我在等待重来
[01:55.80]天空仍灿烂
[01:59.04]它爱着大海
[02:02.34]情歌被打败
[02:05.48]爱已不存在
[02:35.31]你喜欢站在那窗台
[02:41.50]你好久都没再来
[02:47.93]彩色的时间染上空白
[02:55.17]是你流的泪晕开
[03:00.11]不要你离开
[03:03.05]距离隔不开
[03:06.19]思念变成海
[03:09.19]在窗外进不来
[03:12.58]原谅说太快
[03:15.87]爱成了阻碍
[03:19.11]手中的风筝放太快回不来
[03:25.50]不要你离开
[03:28.64]回忆划不开
[03:31.78]欠你的宠爱
[03:34.88]我在等待重来
[03:38.32]天空仍灿烂
[03:41.46]它爱着大海
[03:44.80]情歌被打败
[03:47.95]爱已不存在`;
            }
            else if (mu1 == '晴天-周杰伦') {
                var lrc = `[00:01.00]晴天 - 周杰伦
[00:02.00]作词：周杰伦
[00:03.00]作曲：周杰伦
[00:29.41]故事的小黄花
[00:32.91]从出生那年就飘着
[00:36.41]童年的荡秋千
[00:39.93]随记忆一直晃到现在
[00:43.04]rui sou sou xi dou xi la 
[00:46.04]sou la xi xi xi xi la xi la sou 
[00:49.99]吹着前奏望着天空
[00:53.34]我想起花瓣试着掉落
[00:56.82]为你翘课的那一天
[00:58.91]花落的那一天
[01:00.66]教室的那一间
[01:02.36]我怎么看不见
[01:04.16]消失的下雨天
[01:06.03]我好想再淋一遍
[01:10.05]没想到失去的勇气我还留着
[01:16.20]好想再问一遍
[01:18.00]你会等待还是离开
[01:25.01]刮风这天我试过握着你手
[01:30.66]但偏偏雨渐渐
[01:34.16]大到我看你不见
[01:38.97]还要多久我才能在你身边
[01:45.62]等到放晴的那天
[01:48.72]也许我会比较好一点
[01:53.02]从前从前有个人爱你很久
[01:58.77]但偏偏风渐渐
[02:02.18]把距离吹得好远
[02:06.98]好不容易又能再多爱一天
[02:13.59]但故事的最后
[02:16.19]你好像还是说了拜拜
[02:34.87]为你翘课的那一天
[02:36.92]花落的那一天
[02:38.72]教室的那一间
[02:40.42]我怎么看不见
[02:42.22]消失的下雨天
[02:44.03]我好想再淋一遍
[02:48.20]没想到失去的勇气我还留着
[02:54.85]我好想再淋一遍
[02:56.10]你会等待还是离开
[03:03.01]刮风这天我试过握着你手
[03:08.71]但偏偏雨渐渐
[03:12.21]大到我看你不见
[03:17.01]还要多久我才能在你身边
[03:23.62]等到放晴的那天
[03:26.72]也许我会比较好一点
[03:31.10]从前从前有个人爱你很久
[03:37.25]偏偏风渐渐
[03:40.25]把距离吹得好远
[03:45.06]好不容易又能再多爱一天
[03:51.73]但故事的最后
[03:54.28]你好像还是说了拜拜
[03:58.74]rap 刮风这天我试过握着你手
[04:02.04]但偏偏雨渐渐
[04:03.69]大到我看你不见
[04:05.44]还要多久
[04:06.94]我才能够在你身边
[04:09.14]等到放晴那天
[04:10.69]也许我会比较好一点
[04:12.92]从前从前有个人爱你很久
[04:15.92]但偏偏雨渐渐
[04:17.62]把距离吹得好远
[04:19.49]好不容易又能再多爱一天
[04:23.00]但故事的最后
[04:24.49]你好像还是说了拜`;
            }
            else if (mu1 == '等你下课-周杰伦') {
                var lrc = `[00:01.00]等你下课 - 周杰伦
[00:02.00]作词：周杰伦
[00:03.00]作曲：周杰伦
[00:15.85]Jay：你住的巷子里
[00:18.85]我租了一间公寓
[00:22.90]为了想与你不期而遇
[00:28.65]高中三年我为什么
[00:31.80]为什么不好好读书
[00:35.80]没考上跟你一样的大学
[00:40.92]我找了份工作
[00:43.82]离你宿舍很近
[00:47.07]当我开始学会做蛋饼
[00:50.42]才发现你不吃早餐
[00:55.37]喔你又擦肩而过
[01:00.32]你耳机听什么
[01:03.42]能不能告诉我
[01:06.07]合：躺在你学校的操场看星空
[01:14.52]教室里的灯还亮着你没走
[01:21.33]记得我写给你的情书
[01:27.18]都什么年代了
[01:30.73]到现在我还在写着
[01:34.33]总有一天总有一年会发现
[01:40.43]有人默默的陪在你的身边
[01:46.99]也许我不该在你的世界
[01:53.74]当你收到情书
[01:56.94]也代表我已经走远
[02:25.34]Gary：学校旁的广场
[02:28.64]我在这等钟声响
[02:32.74]等你下课一起走好吗
[02:37.79]Jay：弹着琴唱你爱的歌
[02:41.59]暗恋一点都不痛苦
[02:44.34]Gary：一点都不痛苦
[02:45.69]Jay：痛苦的是你
[02:47.24]合：根本没看我
[02:50.34]Jay：我唱这么走心
[02:52.14]Gary：这么走心
[02:53.64]Jay：却走不进你心里
[02:55.49]Gary：进你心里
[02:56.94]Jay：在人来人往
[02:58.44]合：找寻着你守护着你
[03:01.94]不求结局
[03:04.74]合：喔
[03:07.01]Gary：你又擦肩
[03:08.11]合：而过
[03:10.08]Jay：我唱告白气球
[03:13.08]终于你回了头
[03:16.03]合：躺在你学校的操场看星空
[03:24.33]教室里的灯还亮着你没走
[03:30.99]记得我写给你的情书
[03:37.19]都什么年代了
[03:40.44]到现在我还在写着
[03:43.89]总有一天总有一年会发现
[03:49.95]有人默默的陪在你的身边
[03:57.00]也许我不该在你的世界
[04:03.50]当你收到情书
[04:06.70]也代表我已经走远`;
            }
            else if (mu1 == '稻香-周杰伦') {
                var lrc = `[00:01.00]稻香 - 周杰伦
[00:02.00]作词：周杰伦
[00:03.00]作曲：周杰伦
[00:31.17]对这个世界如果你有太多的抱怨
[00:34.46]跌倒了就不敢继续往前走
[00:37.46]为什么人要这么的脆弱堕落
[00:41.75]请你打开电视看看
[00:43.39]多少人为生命在努力勇敢的走下去
[00:47.28]我们是不是该知足
[00:49.83]珍惜一切就算没有拥有
[00:54.37]还记得你说家是唯一的城堡
[00:57.96]随着稻香河流继续奔跑
[01:00.80]微微笑小时候的梦我知道
[01:06.19]不要哭让萤火虫带着你逃跑
[01:09.58]乡间的歌谣永远的依靠
[01:12.58]回家吧回到最初的美好
[01:41.51]不要这么容易就想放弃
[01:43.46]就像我说的
[01:44.76]追不到的梦想
[01:46.15]换个梦不就得了
[01:47.85]为自己的人生鲜艳上色
[01:49.95]先把爱涂上喜欢的颜色
[01:53.05]笑一个吧功成名就不是目的
[01:55.89]让自己快乐快乐这才叫做意义
[01:58.88]童年的纸飞机
[02:00.33]现在终于飞回我手里
[02:04.47]所谓的那快乐
[02:05.62]赤脚在田里追蜻蜓追到累了
[02:08.86]偷摘水果被蜜蜂给叮到怕了
[02:12.00]谁在偷笑呢
[02:13.55]我靠着稻草人吹着风唱着歌睡着了
[02:16.93]哦哦午后吉他在虫鸣中更清脆
[02:19.82]哦哦阳光洒在路上就不怕心碎
[02:23.41]珍惜一切就算没有拥有
[02:28.05]还记得你说家是唯一的城堡
[02:31.54]随着稻香河流继续奔跑
[02:34.54]微微笑小时候的梦我知道
[02:39.63]不要哭让萤火虫带着你逃跑
[02:43.42]乡间的歌谣永远的依靠
[02:46.16]回家吧回到最初的美好
[02:51.61]还记得你说家是唯一的城堡
[02:54.95]随着稻香河流继续奔跑
[02:57.89]微微笑小时候的梦我知道
[03:03.08]不要哭让萤火虫带着你逃跑
[03:06.67]乡间的歌谣永远的依靠
[03:09.66]回家吧回到最初的美好`;
            }
            else if (mu1 == '爱的飞行日记-周杰伦') {
                var lrc = `[00:01.00]爱的飞行日记 - 周杰伦+杨瑞代
[00:02.00]作词：方文山
[00:03.00]作曲：周杰伦
[00:19.20]赤道的边境万里无云天很清
[00:23.09]爱你的事情说了千遍有回音
[00:27.35]岸边的丘陵崎岖不平浪入侵
[00:31.64]我却很专心分辨得出你的声音
[00:35.98]用南极的冰将爱结晶我用心
[00:40.08]永不融化的是爱你的这个决定
[00:44.65]透明坚硬
[00:53.08]升空对抗重力反应
[00:55.60]逐渐渺小的风景景景景景景色分明
[01:02.30]我加速引擎抛开远方的黎明
[01:08.66]升速度回应向银河逼近
[01:16.89]我对着流星祈祷时专心
[01:26.48]为爱飞行脱离地心引力的热情
[01:31.98]找一颗星只为了你命名
[01:38.29]我用光年传递爱情
[01:43.44]为爱飞行脱离地心引力的热情
[01:48.94]我在宇宙无重力的环境为你降临
[02:13.69]赤道的边境万里无云天很清
[02:17.78]爱你的事情说了千遍有回音
[02:22.02]岸边的丘陵崎岖不平浪入侵
[02:26.36]我却很专心分辨得出你的声音
[02:30.65]用南极的冰将爱结晶我用心
[02:34.74]永不融化的是爱你的这个决定
[02:39.46]透明透明坚硬坚硬
[02:47.60]升空对抗重力反应
[02:50.15]逐渐渺小的风景景景景景景色分明
[02:57.15]我加速引擎抛开远方的黎明
[03:03.38]升速度回应向银河逼近
[03:11.62]我对着流星祈祷时专心
[03:21.24]为爱飞行脱离地心引力的热情
[03:26.64]找一颗星只为了你命名
[03:33.14]我用光年传递爱情
[03:38.08]为爱飞行脱离地心引力的热情
[03:43.62]我在宇宙无重力的环境为你降临`;
            }
            else if (mu1 == '甜甜的-周杰伦') {
                var lrc = `[00:00.50]甜甜的 - 周杰伦
[00:01.20]作词：方文山
[00:01.40]作曲：周杰伦
[00:01.80]我轻轻的尝一口
[00:03.91]你说的爱我
[00:05.81]还在回味你给过的温柔
[00:09.94]我轻轻的尝一口
[00:12.20]这香浓的诱惑
[00:14.04]我喜欢的样子你都有
[00:24.92]你爱过头竟然答应我
[00:28.49]要给我蜂蜜口味的生活
[00:32.80]加一颗奶球我搅拌害羞
[00:36.56]将甜度调高后再牵手
[00:41.17]你的爱太多想随身带走
[00:45.05]想你的时候就吃上一口
[00:49.52]我温热着被呵护的感受
[00:53.07]却又担心降温了要求
[00:57.77]我尝着你话里面的
[00:59.98]奶油溜啊溜
[01:02.07]听过的每句话都很
[01:04.10]可口呦啊呦
[01:06.02]那些多余的画面全被跳过
[01:10.72]你的眼中只有我
[01:16.39]我轻轻的尝一口
[01:18.39]你说的爱我
[01:20.27]还在回味你给过的温柔
[01:24.47]我轻轻的尝一口
[01:26.74]这香浓的诱惑
[01:28.45]我喜欢的样子你都有
[01:32.71]我轻轻的尝一口
[01:34.97]你说的爱我
[01:36.84]舍不得吃会微笑的糖果
[01:41.05]我轻轻的尝一口
[01:43.35]份量虽然不多
[01:45.15]却将你的爱完全吸收
[02:08.34]我微笑着让香味停留
[02:11.75]缘份走到这也赖着不走
[02:16.20]像夹心饼干中间有甜头
[02:19.96]继续下去不需要理由
[02:24.75]我尝着你话里面的
[02:26.90]奶油溜啊溜
[02:28.70]听过的每句话都很
[02:30.97]可口呦啊呦
[02:32.95]那些多余的画面全被跳过
[02:37.67]你的眼中只有我
[02:43.12]我轻轻的尝一口
[02:45.42]你说的爱我
[02:47.26]还在回味你给过的温柔
[02:51.37]我轻轻的尝一口
[02:53.78]这香浓的诱惑
[02:55.46]我喜欢的样子你都有
[02:59.69]我轻轻的尝一口
[03:01.87]你说的爱我
[03:03.86]舍不得吃会微笑的糖果
[03:07.89]我轻轻的尝一口
[03:10.27]份量虽然不多
[03:11.94]却将你的爱完全吸收
[03:16.36]我轻轻的尝一口
[03:18.56]你说的爱我
[03:20.34]还在回味你给过的温柔
[03:24.39]我轻轻的尝一口
[03:26.88]味道香浓的说
[03:28.69]我喜欢的样子你都有
[03:32.93]我轻轻的尝一口
[03:35.06]你说的爱我
[03:36.80]舍不得吃会微笑的糖果
[03:40.96]我轻轻的尝一口
[03:43.29]份量虽然不多
[03:45.20]却将你的爱完全吸收`;
            }
            else if (mu1 == '七里香-周杰伦') {
                var lrc = `[00:01.00]七里香 - 周杰伦
[00:02.00]作词：方文山
[00:03.00]作曲：周杰伦
[00:08.86]编曲：钟兴民
[00:28.31]窗外的麻雀在电线杆上多嘴
[00:34.95]你说这一句很有夏天的感觉
[00:41.68]手中的铅笔在纸上来来回回
[00:47.97]我用几行字形容你是我的谁
[00:54.85]秋刀鱼的滋味猫跟你都想了解
[01:02.04]初恋的香味就这样被我们寻回
[01:08.17]那温暖的阳光像刚摘的鲜艳草莓
[01:15.06]你说你舍不得吃掉这一种感觉
[01:21.44]雨下整夜我的爱溢出就像雨水
[01:28.03]院子落叶跟我的思念厚厚一叠
[01:34.76]几句是非也无法将我的热情冷却
[01:42.39]你出现在我诗的每一页
[01:48.43]雨下整夜我的爱溢出就像雨水
[01:54.97]窗台蝴蝶像诗里纷飞的美丽章节
[02:01.75]我接着写
[02:04.34]把永远爱你写进诗的结尾
[02:09.48]你是我唯一想要的了解
[02:42.73]雨下整夜我的爱溢出就像雨水
[02:49.02]院子落叶跟我的思念厚厚一叠
[02:55.85]几句是非也无法将我的热情冷却
[03:03.43]你出现在我诗的每一页
[03:10.07]那饱满的稻穗幸福了这个季节
[03:17.15]而你的脸颊像田里熟透的番茄
[03:23.53]你突然对我说七里香的名字很美
[03:29.96]我此刻却只想亲吻你倔强的嘴
[03:36.44]雨下整夜我的爱溢出就像雨水
[03:43.13]院子落叶跟我的思念厚厚一叠
[03:49.81]几句是非也无法将我的热情冷却
[03:57.45]你出现在我诗的每一页
[04:03.98]整夜我的爱溢出就像雨水
[04:10.07]窗台蝴蝶像诗里纷飞的美丽章节
[04:17.20]我接着写
[04:19.45]把永远爱你写进诗的结尾
[04:24.39]你是我唯一想要的了解`;
            }
            else if (mu1 == '你听得到-周杰伦') {
                var lrc = `[00:01.00]你听得到 - 周杰伦
[00:02.00]作词：曾郁婷
[00:03.00]作曲：周杰伦
[00:19.45]有谁能比我知道
[00:23.45]你的温柔像羽毛
[00:27.40]秘密躺在我怀抱
[00:31.55]只有你能听得到
[00:35.75]还有没有人知道
[00:39.75]你的微笑像拥抱
[00:44.00]多想藏着你的好
[00:48.10]只有我看得到
[00:51.95]站在屋顶只对风说
[00:55.70]不想被左右
[00:59.45]本来讨厌下雨的天空
[01:03.50]直到听见有人说爱我
[01:08.35]坐在电影院的二楼
[01:12.30]看人群走过
[01:15.80]怎么那一天的我们
[01:19.80]都默默的微笑很久
[01:25.10]我想我是太过依赖
[01:29.35]在挂电话的刚才
[01:33.60]坚持学单纯的小孩
[01:37.75]静静看守这份爱
[01:41.70]知道不能太依赖
[01:45.80]怕你会把我宠坏
[01:49.90]你的香味一直徘徊
[01:55.15]我舍不得离开
[02:00.45]比我知道
[02:02.60]你的温柔像羽毛
[02:06.65]秘密躺在我怀抱
[02:10.80]只有你能听得到
[02:14.95]还有没有人知道
[02:19.05]你的微笑像拥抱
[02:23.15]多想藏着你的好
[02:27.35]只有我看得到
[02:31.00]坐在电影院的二楼
[02:35.05]看人群走过
[02:38.65]怎么那一天的我们
[02:42.70]都默默的微笑很久
[02:47.84]我想我是太过依赖
[02:51.64]在挂电话的刚才
[02:56.29]坚持学单纯的小孩
[03:00.44]静静看守这份爱
[03:04.59]知道不能太依赖
[03:08.74]怕你会把我宠坏
[03:13.04]你的香味一直徘徊
[03:18.44]我舍不得离开
[03:21.39]我想我是太过依赖
[03:25.09]在挂电话的刚才
[03:29.19]坚持学单纯的小孩
[03:33.99]我舍不得离开`;
            }
            else if (mu1 == '说好不哭-周杰伦') {
                var lrc = `[00:01.000]说好不哭 - 周杰伦
[00:02.000] 作曲 : 周杰伦
[00:03.000] 作词 : 方文山
[00:04.043] 编曲 : 黄雨勋
[00:05.517] With : 阿信@五月天
[00:08.474]
[00:25.677] 周杰伦：
[00:26.261] 没有了联络
[00:27.878] 后来的生活
[00:29.345] 我都是听别人说
[00:32.488] 说你怎么了 说你怎么过
[00:35.689] 放不下的人是我
[00:38.838] 人多的时候 就待在角落
[00:41.970] 就怕别人问起我
[00:45.128] 你们怎么了 你低着头
[00:48.027] 护着我 连抱怨都没有
[00:51.501] 电话开始躲 从不对我说
[00:54.640] 不习惯一个人生活
[00:57.771] 离开我以后 要我好好过
[01:00.848] 怕打扰想自由的我
[01:04.024] 都这个时候 你还在意着
[01:07.183] 别人是怎么怎么看我的
[01:10.353] 拼命解释着 不是我的错
[01:12.772] 是你要走
[01:15.228] 眼看着你难过
[01:21.881] 挽留的话却没有说
[01:27.899] 你会微笑放手
[01:34.478] 说好不哭让我走
[01:39.857]
[01:54.402] 阿信：
[01:54.841] 电话开始躲 从不对我说
[01:57.783] 不习惯一个人生活
[02:00.914] 离开我以后 要我好好过
[02:04.064] 怕打扰想自由的我
[02:07.221] 都这个时候 你还在意着
[02:08.635] （周杰伦：这个时候）
[02:10.418] 别人是怎么怎么看我的
[02:11.547] （周杰伦：还在意着）
[02:13.611] 拼命解释着 不是我的错
[02:15.997] 是你要走
[02:17.355]
[02:17.824] 合唱：
[02:18.389] 眼看着你难过
[02:24.966] 挽留的话却没有说
[02:31.266] 你会微笑放手
[02:37.655] 说好不哭让我走
[02:42.981]
[02:52.787] 周杰伦：
[02:53.356] 你什么都没有
[02:59.771] 却还为我的梦加油
[03:04.659]
[03:05.054] 阿信：
[03:05.674] 心疼过了多久
[03:09.355]
[03:09.587] 周杰伦：
[03:09.832] 过了多久
[03:12.226]
[03:12.415] 合唱：
[03:12.586] 还在找理由 等我
[03:19.511]
[03:38.071]监制 : 周杰伦`;
            }
            else if (mu1 == '空山新雨后-音阙诗听') {
                var lrc = `[00:01.00]空山新雨后 - 音阙诗听/锦零
[00:01.57]词：假寐
[00:02.05]曲：殇小谨
[00:02.66]编曲：罗洋
[00:03.26]制作人：殇小谨
[00:04.11]混音：李佳韵/殇小谨
[00:05.32]母带处理：殇小谨
[00:06.29]笛子：囚牛
[00:06.89]古筝：紫格
[00:07.50]和声：皎月
[00:08.10]和声编写：皎月
[00:08.95]文案：偏生梓归
[00:09.80]监制：李俊羽
[00:10.52]混音室：Hi Music Studio
[00:11.37]出品：音阙诗听
[00:12.22]山风轻摆尾
[00:14.95]卷下落花随流水
[00:17.21]路过 擦拭曾经
[00:19.14]用你柔情 换我的眼泪
[00:22.58]当爱恨都败退
[00:25.43]没谢幕的人啊
[00:28.01]井中月 举杯砸碎 佐一场宿醉
[00:32.73]抽签的玫瑰
[00:35.36]作熏香还能余味
[00:37.63]猜测无解答案
[00:39.51]算了满地 也是种浪费
[00:42.96]我才终于明白
[00:45.92]终于明白
[00:48.40]不能被施舍的是爱
[01:04.97]取下褪漆的钗
[01:07.15]就化作尘埃
[01:10.08]喝多少暖身的酒
[01:12.46]暖不了心口
[01:14.98]待空山新雨后
[01:17.20]放一叶小舟
[01:20.96]载上无人问津的温柔
[01:24.12]摆渡寻处去忘忧
[01:39.01]抽签的玫瑰
[01:41.65]作熏香还能余味
[01:43.98]猜测无解答案
[01:45.90]算了满地 也是种浪费
[01:49.34]我才终于明白
[01:52.27]终于明白
[01:54.79]不能被施舍的是爱
[01:58.55]取下褪漆的钗
[02:00.63]就化作尘埃
[02:03.41]喝多少暖身的酒
[02:05.99]暖不了心口
[02:08.65]待空山新雨后
[02:10.84]放一叶小舟
[02:14.60]载上无人问津的温柔
[02:17.62]摆渡寻处去忘忧
[02:24.10]取下褪漆的钗
[02:26.09]就化作尘埃
[02:28.94]喝多少暖身的酒
[02:31.55]暖不了心口
[02:34.13]待空山新雨后
[02:36.20]放一叶小舟
[02:40.05]载上无人问津的温柔
[02:43.33]摆渡寻处去忘忧`;
            }
            else if (mu1 == '99%-Jin_大柯') {
                var lrc = `[00:00.00]99% - Jin、大柯
[00:00.41]作词：Ja.V.A
[00:00.41]作曲：Jin
[00:00.41]编曲：Jin
[00:00.41]混音：Jin
[00:00.41]母带：Jin
[00:00.41]制作人：Jin
[00:00.41]想为你写这首歌
[00:02.78]爱下一秒变星河
[00:04.95]小城窗外的风车
[00:07.27]转着夕阳的颜色
[00:09.84]想牵着你的手
[00:11.70]划过流星的夜空
[00:14.18]我们做同一场梦
[00:16.41]爱在黎明升空
[00:19.08]对着手心
[00:20.19]说我爱你
[00:21.25]多像夏天来临
[00:23.60]突然安静
[00:24.71]听着蝉鸣
[00:25.93]在你耳边说秘密
[00:28.06]喜欢在你怀里感受静谧
[00:33.25]好甜蜜
[00:34.61]好熟悉
[00:35.57]好像是喜欢你
[00:37.66]手里捧着冰淇淋
[00:39.65]配奶油夹着巧克力
[00:41.91]爱九十九分关于你
[00:44.17]剩下把我当作唯一
[00:46.23]喜欢在你怀里感受静谧
[00:51.65]好甜蜜
[00:52.87]好熟悉
[00:53.88]好像是喜欢你
[00:55.53]想为你写这首歌
[00:57.58]爱下一秒变星河
[00:59.85]小城窗外的风车
[01:02.18]转着夕阳的颜色
[01:04.75]像牵着你的手
[01:06.71]划过流星的夜空
[01:09.03]我们做同一场梦
[01:11.26]爱在黎明升空
[01:32.20]斑驳树荫
[01:33.40]你的声音
[01:34.51]像是一种命运
[01:36.75]白键钢琴
[01:37.91]模糊清晰
[01:39.07]简简单单是意义
[01:41.29]喜欢在你怀里感受静谧
[01:46.44]好甜蜜
[01:47.60]好熟悉
[01:48.71]好像是喜欢你
[01:50.73]手里捧着冰淇淋
[01:52.75]配奶油夹着巧克力
[01:55.09]爱九十九分关于你
[01:57.39]剩下把我当作唯一
[01:59.34]喜欢在你怀里感受静谧
[02:04.68]好甜蜜
[02:05.89]好熟悉
[02:06.99]好像是喜欢你
[02:08.77]想为你写这首歌
[02:10.74]爱下一秒变星河
[02:13.05]小城窗外的风车
[02:15.27]转着夕阳的颜色
[02:17.85]像牵着你的手
[02:19.92]划过流星的夜空
[02:22.15]我们做同一场梦
[02:24.42]爱在黎明升空
[02:45.12]只想和你一起穿越世纪
[02:50.19]跨过时空距离拥抱你
[02:54.68]在你怀里感受静谧
[02:59.47]好甜蜜
[03:00.63]好熟悉
[03:01.79]好像是喜欢你`;
            }
            else if (mu1 == '再见-邓紫棋') {
                var lrc = `[00:01.00]再见 - G.E.M.邓紫棋
[00:03.00]作词：G.E.M.邓紫棋
[00:04.00]作曲：G.E.M.邓紫棋
[00:07.36]爱情的起点
[00:08.86]都是最美的瞬间
[00:13.44]什么铁达尼的经典
[00:15.69]罗密欧跟茱丽叶
[00:20.38]那些最煽情的电影情节
[00:23.92]都说爱能超越生死离别
[00:27.46]曾经我们都很坚决
[00:30.01]爱了就不改变
[00:34.55]不要对我说再见一句再见
[00:38.44]就结束这一切
[00:41.48]能否不要说再见
[00:43.78]你的再见说得那么明确
[00:48.46]怎么我和你之间
[00:50.86]两个世界再也没有交接
[00:56.15]如果告别
[00:58.34]能不能再见
[01:04.18]我们的照片
[01:05.33]纪录幸福到永远
[01:09.97]只是再幸福的画面
[01:12.21]只定格在一瞬间
[01:16.95]那些慢吞吞悲情的音乐
[01:20.39]早说过爱过之后就是离别
[01:23.98]早该相信那些预言
[01:26.43]我们也没有多特别
[01:31.07]不要对我说再见一句再见
[01:34.86]让爱变得表面
[01:38.05]真的不用说再见
[01:40.25]就算再见
[01:41.99]结局不能改变
[01:45.04]就算我和你之间
[01:47.33]两个世界再也没有交接
[01:52.22]不用抱歉就真的再见
[01:59.40]如果有缘
[02:00.80]我们会再遇见
[02:02.80]反正地球本来就很圆
[02:06.29]就算今天你要走得多远
[02:09.83]反正就是一条地平线
[02:13.37]反正愿望不一定会实现
[02:16.96]反正承诺不一定要兑现
[02:20.46]反正睡醒是新的一天
[02:41.72]别对我说再见一句再见
[02:45.46]让爱变得表面
[02:48.65]真的不用说再见
[02:50.85]就算再见
[02:52.69]结局不能改变
[02:55.63]就算我和你之间
[02:57.93]两个世界
[02:59.63]再也没有交接
[03:02.97]不用抱歉
[03:05.51]就真的再见
[03:11.15]爱情到终点
[03:12.40]我们只能说再见`;
            }
            else if (mu1 == '倒数-邓紫棋') {
                var lrc = `[00:01.00]倒数 - G.E.M.邓紫棋
[00:02.00]作词：G.E.M.邓紫棋
[00:03.00]作曲：G.E.M.邓紫棋/Lupo Groinig
[00:04.11]编曲：Lupo Groinig 
[00:04.81]监制：Lupo Groinig 
[00:12.49]还没到的樱花季
[00:15.46]还没用的照相机
[00:18.33]还没光临的餐厅
[00:21.18]还在期待
[00:22.23]有着你的旅行
[00:24.27]等待日落的巴黎
[00:27.06]铁塔之下牵着你
[00:30.11]等待说着我愿意
[00:33.08]等待未来
[00:33.98]每天身边有你
[00:35.47]一点一滴每一天珍惜
[00:39.66]怕突然来不及
[00:42.41]好好的爱你
[00:45.35]时针一直倒数着
[00:48.39]我们剩下的快乐
[00:51.19]此刻相拥的狂热
[00:54.18]却永远都深刻
[00:57.07]心跳一直倒数着
[00:59.97]生命剩下的温热
[01:02.91]至少用力地爱着
[01:05.85]还乌黑的头发
[01:08.85]有你就不怕白了
[01:11.24]漆黑过后是旭日
[01:13.89]泪流以后是坚持
[01:16.78]真的爱是日复日
[01:19.62]从不放弃
[01:20.62]重复说你愿意
[01:22.77]还没退化的眼睛
[01:25.51]抓紧时间看看你
[01:28.55]爱是从来不止息
[01:31.45]一个风景
[01:32.49]每天新的生命
[01:34.19]一点一滴每一天珍惜
[01:38.03]用尽每一口气
[01:40.92]好好的爱你
[01:43.77]时针一直倒数着
[01:46.81]我们剩下的快乐
[01:49.70]此刻相拥的狂热
[01:52.60]却永远都深刻
[01:55.64]心跳一直倒数着
[01:58.43]生命剩下的温热
[02:01.38]至少用力地爱着
[02:04.37]还乌黑的头发
[02:07.36]有你就不怕白了
[02:10.21]咖啡再不喝就酸了
[02:12.90]晚餐再不吃就冷了
[02:15.90]爱着为什么不说呢
[02:18.44]难道错过了才来后悔着
[02:21.88]谁梦未实现就醒了
[02:24.63]谁心没开过就灰了
[02:27.67]追逐爱的旅途曲折
[02:29.76]就算再曲折为你都值得
[02:32.76]一点一滴每一天珍惜
[02:36.50]用尽每一口气
[02:39.44]好好的爱你
[02:42.29]时针一直倒数着
[02:45.28]我们剩下的快乐
[02:48.17]此刻相拥的狂热
[02:51.21]却永远都深刻
[02:54.06]心跳一直倒数着
[02:57.00]生命剩下的温热
[02:59.85]至少痛并快乐着
[03:02.84]爱过才算活着
[03:05.78]有你别无所求了
[03:11.77]有你别无所求了
[03:17.60]有你别无所求了
[03:23.44]有你别无所求了
[03:29.23]有你别无所求了
[03:35.02]有你别无所求了`;
            }
            else if (mu1 == 'A.I.N.Y.-邓紫棋') {
                var lrc = `[00:01.00]A.I.N.Y. - 邓紫棋
[00:02.00]作词：G.E.M.
[00:03.00]作曲：G.E.M.+Lupo Groinig
[00:04.04]分开以后每个夜晚
[00:07.53]格外的寂静
[00:10.82]滴答滴答
[00:12.57]剩大钟在陪着我回忆
[00:17.81]电话里头曾经是你最温柔的声音
[00:24.24]现在只有空气
[00:26.34]冷漠地回应
[00:30.48]Oh 给你我的心
[00:33.87]能否请你别遗弃
[00:37.74]一句爱你爱你爱你爱你
[00:40.78]能否再也不分离
[00:44.12]Oh 给你我的心
[00:47.57]为什么你却给了我孤寂
[00:51.61]就算爱你爱你爱你爱你
[00:54.65]可能你也不想听
[01:06.02]你的拥抱曾经是
[01:08.32]最温暖最熟悉
[01:12.46]现在换了谁安睡在你胸口的位置
[01:19.29]你的承诺曾是一种不自觉的甜蜜
[01:25.78]现在一划一笔
[01:27.97]刺在我心里
[01:32.12]Oh 给你我的心
[01:35.41]能否请你别遗弃
[01:39.45]一句爱你爱你爱你爱你
[01:42.54]能否再也不分离
[01:45.83]Oh 给你我的心
[01:49.33]为什么你却给了我孤寂
[01:53.17]就算爱你爱你爱你爱你
[01:56.26]可能你也不想听你不想听
[02:21.40]回忆
[02:22.15]最后的回忆
[02:23.35]对你最后的回忆
[02:24.60]是你
[02:25.14]走远的身影
[02:26.29]慢慢走远的身影
[02:27.94]然后你
[02:28.84]离开
[02:29.68]离开了没有痕迹
[02:31.38]然后我哭泣
[02:33.13]崩溃了放纵哭泣
[02:34.82]恨你恨你每当我想起曾经
[02:38.26]曾经曾经曾经曾经
[02:42.90]Yeah 
[02:50.14]还是爱你爱你爱你爱你
[02:53.33]难道还不能清醒
[02:56.12]Oh 给你我的心
[02:59.52]为什么你却给了我孤寂
[03:03.51]一句爱你爱你爱你爱你
[03:06.85]难道你也不想听
[03:09.89]Oh 给你我的心
[03:13.33]为什么你却给了我孤寂
[03:17.13]就算爱你爱你爱你爱你
[03:20.37]不值得为你伤心伤心
[03:31.59]Your confession remains to be my final pleading 
[03:35.78]But the only thing that's here with me 
[03:38.38]Is tic tac tic tac tic tac tic tac `;
            }
            else if (mu1 == '天下-张杰') {
                var lrc = `[00:01.00]天下 - 张杰
[00:02.00]作词：周毅
[00:03.00]作曲：刘吉宁
[00:27.60]烽烟起寻爱似浪淘沙
[00:34.15]遇见她如春水映梨花
[00:40.90]挥剑断天涯相思轻放下
[00:47.50]梦中我痴痴牵挂
[00:54.35]顾不顾将相王侯
[00:56.05]管不管万世千秋
[00:57.70]求只求爱化解
[00:59.40]这万丈红尘纷乱永无休
[01:01.75]爱更爱天长地久
[01:03.50]要更要似水温柔
[01:05.10]谁在乎谁主春秋
[01:06.90]一生有爱何惧风飞沙
[01:10.70]悲白发留不住芳华
[01:14.45]抛去江山如画换她笑面如花
[01:17.50]抵过这一生空牵挂
[01:20.75]心若无怨爱恨也随她
[01:23.95]天地大情路永无涯
[01:27.55]只为她袖手天下
[02:01.06]顾不顾将相王侯
[02:02.66]管不管万世千秋
[02:04.31]求只求爱化解
[02:06.01]这万丈红尘纷乱永无休
[02:08.41]爱更爱天长地久
[02:10.11]要更要似水温柔
[02:11.71]谁在乎谁主春秋
[02:14.11]一生有爱何惧风飞沙
[02:17.26]悲白发留不住芳华
[02:20.96]抛去江山如画换她笑面如花
[02:24.31]抵过这一生空牵挂
[02:27.41]心若无怨爱恨也随她
[02:30.61]天地大情路永无涯
[02:34.11]只为她袖手天下
[02:40.86]一生有爱何惧风飞沙
[02:43.91]悲白发留不住芳华
[02:47.76]抛去江山如画换她笑面如花
[02:50.91]抵过这一生空牵挂
[02:54.01]心若无怨爱恨也随她
[02:57.16]天地大情路永无涯
[03:00.66]只为她袖手天下
[03:07.41]烽烟起寻爱似浪淘沙
[03:13.91]遇见她如春水映梨花
[03:20.76]挥剑断天涯相思轻放下
[03:27.36]梦中我痴痴牵挂`;
            }
            else if (mu1 == '') {
                var lrc = ``;
            }
            else {
                var lrc = `[00:01.00]暂未找到歌词`;
            }

            function $(id) {
                return document.getElementById(id);
            }//这样写以后getid方便

            function getLrcArray() {
                var parts = lrc.split("\n");
                for (let index = 0; index < parts.length; index++) {
                    parts[index] = getLrcObj(parts[index]);
                }
                return parts;

                function getLrcObj(content) {
                    var twoParts = content.split("]");
                    var time = twoParts[0].substr(1);
                    var timeParts = time.split(":");
                    var seconds = +timeParts[1];
                    var min = +timeParts[0];
                    seconds = min * 60 + seconds;
                    var words = twoParts[1];
                    return {
                        seconds: seconds,
                        words: words,
                    };
                }
            }

            var lrcArray = getLrcArray();

            function inputLrc() {
                for (let index = 0; index < lrcArray.length; index++) {
                    var li = document.createElement("li");
                    li.innerText = lrcArray[index].words;
                    $("ullrc").appendChild(li);
                }
            }

            inputLrc();

            function setPosition() {
                var index = getLrcIndex();
                if (index == -1) {
                    return;
                }
                var lrc_li_height = 35, lrc_ul_height = 450;
                var top = index * lrc_li_height + lrc_li_height / 2 - lrc_ul_height / 2;
                if (top < 0) {
                    top = 0;
                }
                $("ullrc").style.marginTop = -top + "px";
                var activeLi = $("ullrc").querySelector(".active");
                if (activeLi) {
                    activeLi.classList.remove("active");
                }
                $("ullrc").children[index].classList.add("active");
            }

            var turn = 0.5;

            function getLrcIndex() {
                var time = $("MusicPlayer").currentTime + turn;
                for (var index = 0; index < lrcArray.length; index++) {
                    if (lrcArray[index].seconds > time) {
                        return index - 1;
                    }
                }
            }

            $("MusicPlayer").ontimeupdate = setPosition;
        })
    }
})