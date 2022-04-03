window.addEventListener('load', function () {
    // 获取元素
    var banner = document.querySelector('.banner')
    var audio = document.querySelector('.body .content .music audio')
    var gaomu = document.querySelector('.body .content .gaomu')
    var music = document.querySelector('.body .content .music')
    var index = document.querySelector('.body .content .index')
    var hobby = document.querySelector('.body .content .hobby')
    var right = document.querySelector('body .right')
    var xuanzhong = document.querySelectorAll('.head .myItem li')
    // 点击切换导航栏样式
    for (var i = 0; i < xuanzhong.length - 1; i++) {
        xuanzhong[i].addEventListener('click', function () {
            for (var j = 0; j < xuanzhong.length - 1; j++) {
                xuanzhong[j].className = '';
            }
            this.className = 'xuanzhong';
        })
    }
    // 点击banner图加载高木动漫
    banner.addEventListener('click', function () {
        for (var j = 0; j < xuanzhong.length - 1; j++) {
            xuanzhong[j].className = '';
        }
        xuanzhong[1].className = 'xuanzhong';
        music.style.display = 'none';
        hobby.style.display = 'none';
        index.style.display = 'none';
        right.style.display = 'none';
        gaomu.style.display = 'flex';
        bo[0].className = 'current';
        window.scrollTo(0, document.documentElement.clientHeight);
        audio.src = '#';
    })
    // 点击首页返回主页面
    var shouye = document.querySelector('.head .myItem li:nth-child(1)')
    shouye.addEventListener('click', function () {
        gaomu.style.display = 'none';
        music.style.display = 'none';
        hobby.style.display = 'none';
        right.style.display = 'block';
        index.style.display = 'flex';
    })
    // 点击动漫相当于点击banner
    var dongman = document.querySelector('.head .myItem li:nth-child(2)')
    dongman.addEventListener('click', function () {
        banner.click();
    })
    // 点击音乐后只显示音乐
    var yinyue = document.querySelector('.head .myItem li:nth-child(3)')
    yinyue.addEventListener('click', function () {
        gaomu.style.display = 'none';
        index.style.display = 'none';
        hobby.style.display = 'none';
        right.style.display = 'block';
        music.style.display = 'block';
        window.scrollTo(0, document.documentElement.clientHeight);
    })
    // 点击喜好后只显示喜好
    var xihao = document.querySelector('.head .myItem li:nth-child(4)')
    xihao.addEventListener('click', function () {
        music.style.display = 'none';
        index.style.display = 'none';
        right.style.display = 'none';
        gaomu.style.display = 'none';
        hobby.style.display = 'flex';
        window.scrollTo(0, document.documentElement.clientHeight);
        audio.src = '#';
    })

    // 获取选季选集
    var bu = document.querySelectorAll('.body .content .gaomu .select .bu li')
    var ji = document.querySelectorAll('.body .content .gaomu .select .ji li')
    var bo = document.querySelectorAll('.body>.side .bottom li');
    var video = document.querySelector('.body .content .gaomu video')
    var img = document.querySelector('.body .content .gaomu .select .bu');
    var bu1 = '第一季';
    var ji1 = '第1集';
    var bo1 = '擅长捉弄的高木同学';
    for (let i = 0; i < bo.length; i++) {
        bo[i].addEventListener('click', function () {
            for (var j = 0; j < xuanzhong.length - 1; j++) {
                xuanzhong[j].className = '';
            }
            xuanzhong[1].className = 'xuanzhong';
            music.style.display = 'none';
            index.style.display = 'none';
            hobby.style.display = 'none';
            right.style.display = 'none';
            gaomu.style.display = 'flex';
            window.scrollTo(0, document.documentElement.clientHeight);
            audio.src = '#';
            for (var l = 0; l < bo.length; l++) {
                bo[l].className = '';
            }
            this.className = 'current';
            for (var j = 0; j < bu.length; j++) {
                bu[j].className = '';
            }
            bu[0].className = 'current';
            for (var k = 0; k < ji.length; k++) {
                ji[k].className = '';
            }
            ji[0].className = 'current';
            bo1 = this.innerText;
            bu1 = '第一季';
            ji1 = '第1集';
            video.src = '../../动漫/' + bo1 + '/' + bu1 + '/' + ji1 + '.mp4';
            img.style.background = 'url(./img/' + bo1 + '.png) no-repeat';
            img.style.backgroundSize = 'cover';
        })
    }
    for (let i = 0; i < bu.length; i++) {
        bu[i].addEventListener('click', function () {
            for (var j = 0; j < bu.length; j++) {
                bu[j].className = '';
            }
            this.className = 'current';
            for (var k = 0; k < ji.length; k++) {
                ji[k].className = '';
            }
            ji[0].className = 'current';
            bu1 = this.innerText;
            ji1 = '第1集';
            video.src = '../../动漫/' + bo1 + '/' + bu1 + '/' + ji1 + '.mp4';
        })
    }
    for (let i = 0; i < ji.length; i++) {
        ji[i].addEventListener('click', function () {
            for (var j = 0; j < ji.length; j++) {
                ji[j].className = '';
            }
            this.className = 'current';
            ji1 = this.innerText;
            video.src = '../../动漫/' + bo1 + '/' + bu1 + '/' + ji1 + '.mp4';
        })
    }

    var hu = document.querySelectorAll('.body .content .hobby .select .bu li')
    var hi = document.querySelectorAll('.body .content .hobby .select .ji li')
    var video1 = document.querySelector('.body .content .hobby video')
    var hu1 = '未命名';
    var hi1 = 'YOU&IDOL-嘉然';
    for (let i = 0; i < hu.length; i++) {
        hu[i].addEventListener('click', function () {
            for (var j = 0; j < hu.length; j++) {
                hu[j].className = '';
            }
            this.className = 'current';
            for (var k = 0; k < hi.length; k++) {
                hi[k].className = '';
            }
            hi[0].className = 'current';
            hu1 = this.innerText;
            hi1 = 'YOU&IDOL-嘉然';
            video1.src = './video/' + hu1 + '/' + hi1 + '.mp4';
        })
    }
    for (let i = 0; i < hi.length; i++) {
        hi[i].addEventListener('click', function () {
            for (var j = 0; j < hi.length; j++) {
                hi[j].className = '';
            }
            this.className = 'current';
            hi1 = this.innerText;
            video1.src = './video/' + hu1 + '/' + hi1 + '.mp4';
        })
    }
})