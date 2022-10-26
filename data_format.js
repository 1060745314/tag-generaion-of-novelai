// 这是data.js的模板，感兴趣的可以自己添加，使用此模板会覆盖从云端下载的数据，推荐先从html文件中的链接下载在线data.js，在此基础上进行添加
data={
    'preset':{
        '东海帝王':'{{masterpiece}},illustration,{{tokai teio (umamusume)}},blue eyes,brown hair,bangs,hair between eyes,two-tone hair,small breast,long hair,ponytail,horse ears,horse tail,horse girl,tail,smile,gloves,white boots,pink ascot,white jacket,epaulettes,pink bowtie,white skirt,child',

    },
    'optimizer':{
        '基础':'{{masterpiece}},{{best quality}}',
        '增强':'{{masterpiece}},{{best quality}},4k,illustration'
    },
    'modification':{
        '颜色':['white','black','pink','brown','red','purple',' blue','yellow','green','golden','grey','blonde'],
        '形容':['detailed','beautiful','highly'],
        '纹理':['highres','absurdres','translucent#半透明','transparent#透明','wet'],
    },
    'composition':{
        '人数':['1girl','solo','2girls','3girls','everyone#集合绘','absolutely everyone#成人的集合绘','snuggled#分身','snuggled up selfie#粘在一起自拍','in a crowd of people#背景是人群'],

    },
    'feature':{
        '类型':['minigirl','loli','child','cute','little girl','teenage','office lady','mature female#成人女性','mecha_musume#机娘','aged down#老化','old woman#老年女性'],

    },
    'negative':{
        '基础':'lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, bad feet',
    }
}