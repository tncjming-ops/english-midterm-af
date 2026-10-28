/* A 卷：依 IMG_8535、IMG_8536 轉錄；聽力為新編補充。 */
(function(){
const base=typeof module!=='undefined'?require('./data.js'):{lexicon,check,normalize};
const add=(en,zh,pos,example_en,example_zh)=>({en,zh,pos,example_en,example_zh});
const additions=[
add('pork','豬肉','n.','I like pork.','我喜歡豬肉。'),
add('cane','手杖','n.','He has a cane.','他有一根手杖。'),
add('rater','評分者','n.','The rater gives a score.','評分者給予分數。'),
add('Tuesday','星期二','n.','It is Tuesday.','今天是星期二。'),
add('tail','尾巴','n.','The dog has a tail.','這隻狗有一條尾巴。'),
add('soup','湯','n.','Would you like some soup?','你想喝一些湯嗎？'),
add('sandwiches','三明治（複數）','n.','Would you like some sandwiches?','你想吃一些三明治嗎？'),
add('stomachache','肚子痛','n.','I have a stomachache.','我肚子痛。'),
add('soda','汽水','n.','Whose soda is that?','那是誰的汽水？')
];
const all=[...base.lexicon,...additions];
const words=(...keys)=>keys.map(k=>all.find(w=>w.en===k));
const tf=(visual,label,correct,explain)=>({visual,prompt:`圖片與「${label}」相符嗎？`,options:['T · 相符','F · 不相符'],correct,explain});
const aSections=[
{id:'A',title:'發音偵探',english:'Listen and Circle',desc:'六組辨音，聽完圈出正確單字。',source:'Starter p.4–5；U1 p.16–17；U2 p.30–31。cane、rater、Tuesday 為原卷辨音選項，中文與例句為補充。',note:'未提供原卷音檔；這裡依原選項新編聽音練習。第 4 題原卷印為 rater（評分者），保留字樣，不列為課本核心生字。',words:words('park','pork','corn','cane','short','shirt','river','rater','Tuesday','Thursday','tail','tailor'),questions:[
{prompt:'聽單字，圈出你聽到的字。',speak:'park',options:['park','pork'],correct:0,explain:'park＝公園，含 ar；pork＝豬肉，含 or。'},
{prompt:'聽單字，圈出你聽到的字。',speak:'corn',options:['corn','cane'],correct:0,explain:'corn＝玉米；cane＝手杖。'},
{prompt:'聽單字，圈出你聽到的字。',speak:'shirt',options:['short','shirt'],correct:1,explain:'shirt＝襯衫，含 ir；short＝短的／矮的，含 or。'},
{prompt:'聽單字，圈出你聽到的字。',speak:'river',options:['river','rater'],correct:0,explain:'river＝河流。原卷另一選項為 rater，意為評分者；這裡朗讀的是 river。'},
{prompt:'聽單字，圈出你聽到的字。',speak:'Thursday',options:['Tuesday','Thursday'],correct:1,explain:'Thursday＝星期四；Tuesday＝星期二。注意 Thursday 的 th 與 ur。'},
{prompt:'聽單字，圈出你聽到的字。',speak:'tailor',options:['tail','tailor'],correct:1,explain:'tailor＝裁縫師；tail＝尾巴。tailor 多了字尾 -or。'}]},
{id:'B',title:'聽力旅行家',english:'Listen and Check',desc:'聽五段句子，從每題三個圖意中選答案。',source:'Starter p.2–3 飲食；U1 p.12–13 國家；U2 p.26–27 交通。',note:'沒有原卷音檔。以下為依照片圖意新編的句子，自製圖示另附中文，練習聽懂句意；不代表原卷聽力答案。',words:words('soup','noodles','sandwiches','Japan','Taiwan','Spain','by scooter','on foot','by bus','by car','by bike','by metro','Australia','India','the UK'),questions:[
{prompt:'聽句子，選出對應的圖意。',speak:'Would you like some sandwiches?',options:['湯','麵','三明治'],optionVisuals:['soup','noodles','sandwiches'],correct:2,explain:'sandwiches＝三明治；Would you like some ...? 用來詢問對方想不想吃或喝。'},
{prompt:'聽句子，選出對應的國家。',speak:'He is from Taiwan.',options:['日本','臺灣','西班牙'],optionVisuals:['Japan','Taiwan','Spain'],correct:1,explain:'Taiwan＝臺灣。He is from Taiwan.＝他來自臺灣。'},
{prompt:'聽句子，選出對應的交通方式。',speak:'She goes to school on foot.',options:['騎機車','步行','搭公車'],optionVisuals:['scooter','foot','bus'],correct:1,explain:'on foot＝步行，不使用 by foot。'},
{prompt:'聽句子，選出對應的交通方式。',speak:'He goes to school by metro.',options:['搭汽車','騎腳踏車','搭捷運'],optionVisuals:['car','bike','metro'],correct:2,explain:'by metro＝搭捷運；課本也用 by MRT。'},
{prompt:'聽句子，選出對應的國家。',speak:'She is from India.',options:['澳洲','印度','英國'],optionVisuals:['Australia','India','the UK'],correct:1,explain:'India＝印度；Australia＝澳洲；the UK＝英國。'}]},
{id:'C',title:'圖文判斷家',english:'Look and Write T or F',desc:'看國旗與生活圖示，判斷圖文是否相符。',source:'U1 p.12–13；U2 p.26–27。stomachache 為原卷出現的複習詞，兩份指定 U1/U2 課本未列為核心字。',note:'T 表示相符，F 表示不相符。第 6 圖以孩子雙手抱腹重繪；第 7 圖辨認人物正在步行，旁邊雖有汽車，不代表搭計程車。',words:words('Taiwan','by bike','by bus','by scooter','Spain','India','the USA','stomachache','on foot','by taxi'),questions:[
tf('Taiwan','Taiwan',0,'臺灣國旗與 Taiwan 相符，填 T。'),
tf('bike','by bus',1,'圖中騎腳踏車，應是 by bike，不是 by bus。'),
tf('scooter','by bike',1,'圖中是機車，應是 by scooter，不是 by bike。'),
tf('Spain','India',1,'圖中的國旗是西班牙，應是 Spain，不是 India。'),
tf('the USA','The USA',0,'圖中是美國國旗，與 the USA 相符。原卷 The 的大寫不影響判斷。'),
tf('stomachache','stomachache',0,'孩子抱著肚子，表示肚子痛，與 stomachache 相符。'),
tf('walking-road','by taxi',1,'人物正在步行，應是 on foot；不能只因旁邊有汽車就選 by taxi。')]},
{id:'D',title:'看圖拼字家',english:'Look and Write',desc:'六張圖，練習寫出國家與交通方式。',source:'U1 p.12–13 國家；U2 p.26–27 交通。',words:words('Spain','by metro','Singapore','on foot','Japan','by scooter'),questions:[
{visual:'Spain',prompt:'寫出這個國家的英文。',answer:['Spain'],explain:'Spain＝西班牙。'},
{visual:'metro',prompt:'寫出交通工具或交通方式。',answer:['metro','MRT','by metro','by MRT'],explain:'metro／MRT＝捷運；by metro／by MRT＝搭捷運。'},
{visual:'Singapore',prompt:'寫出這個國家的英文。',answer:['Singapore'],explain:'Singapore＝新加坡。'},
{visual:'foot',prompt:'寫出「步行」的英文片語。',answer:['on foot'],explain:'步行的固定用法是 on foot。'},
{visual:'Japan',prompt:'寫出這個國家的英文。',answer:['Japan'],explain:'Japan＝日本。'},
{visual:'scooter',prompt:'寫出交通工具或交通方式。',answer:['scooter','by scooter'],explain:'scooter＝機車；by scooter＝騎機車。'}]},
{id:'E',title:'文法小偵探',english:'Read and Choose',desc:'讀懂句子，選對疑問詞、動詞和代名詞。',source:'U1 p.15 國家句型；U2 p.29 交通句型；Starter p.3 Whose ...?。',words:words('from','Australia','how','school','by train','the UK','where','whose','soda'),questions:[
{prompt:'_____ from Australia.',options:['He',"I’m",'My'],correct:1,explain:'I’m＝I am，I’m from Australia. 是完整句子；He 後面還需要 is。'},
{prompt:'_____ do you go to school?',options:['How','Where','What'],correct:0,explain:'How 詢問方式：How do you go to school?＝你如何上學？'},
{prompt:'She _____ to school by train.',options:['go','walk','goes'],correct:2,explain:'主詞 She 是第三人稱單數，go 變成 goes。'},
{prompt:'_____ she from the UK?',options:['Is','Does','Do'],correct:0,explain:'來自哪裡用 be from；She 搭配 Is。'},
{prompt:'Where _____ you from?',options:['is','are','do'],correct:1,explain:'You 搭配 are：Where are you from?'},
{prompt:'_____ soda is that on the chair?',options:['What','Where','Whose'],correct:2,explain:'Whose＝誰的，詢問汽水的主人。'}]},
{id:'F',title:'句子拼裝師',english:'Unscramble',desc:'點選詞塊，重組四個完整句子。',source:'U1 p.15 Is he from ...?；U2 p.29 Does ...?、I go ...、She goes ...。詞塊依原題順序。',words:words('Spain','from','school','by bike','by metro','by scooter'),questions:[
{prompt:'點選詞塊，排成「他來自西班牙嗎？」',tokens:['Spain','?','Is','from','he'],answer:['Is he from Spain?'],explain:'Is 放句首，接 he from Spain，最後放問號。'},
{prompt:'點選詞塊，排成「他騎腳踏車上學嗎？」',tokens:['school','he','go','Does','to','by','?','bike'],answer:['Does he go to school by bike?'],explain:'Does he 後面用原形 go，不用 goes；by bike 放在句尾。'},
{prompt:'點選詞塊，排成「我搭捷運上學。」',tokens:['go','I','to','school','metro','by','.'],answer:['I go to school by metro.'],explain:'I go to school by metro. 主詞 I 搭配 go。'},
{prompt:'點選詞塊，排成「她騎機車上學。」',tokens:['to','She','goes','school','.','scooter','by'],answer:['She goes to school by scooter.'],explain:'She 是第三人稱單數，搭配 goes；by scooter 表示騎機車。'}]}
];
if(typeof module!=='undefined')module.exports={sections:aSections,lexicon:all,normalize:base.normalize,check:base.check};
else sections.splice(0,sections.length,...aSections);
})();
