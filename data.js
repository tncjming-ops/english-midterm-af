/* 題目依使用者提供兩張照片轉錄；中文、例句與聽力為補充練習。 */
const word=(en,zh,pos,example_en,example_zh)=>({en,zh,pos,example_en,example_zh});
const countries=[['Australia','澳洲'],['India','印度'],['Japan','日本'],['Singapore','新加坡'],['Spain','西班牙'],['Taiwan','臺灣'],['the UK','英國'],['the USA','美國']].map(([e,z])=>word(e,z,e.includes(' ')?'phr.':'n.',`I am from ${e}.`,`我來自${z}。`));
const transport=[['by bike','騎腳踏車'],['by bus','搭公車'],['by car','搭汽車'],['by metro','搭捷運'],['by MRT','搭捷運'],['by scooter','騎機車'],['by taxi','搭計程車'],['by train','搭火車'],['on foot','步行']].map(([e,z])=>word(e,z,'phr.',`I go to school ${e}.`,`我${z}上學。`));
const phonics=[
['cheeseburger','起司漢堡','n.','I like this cheeseburger.','我喜歡這個起司漢堡。'],['river','河流','n.','The river is beautiful.','這條河很美。'],['summer','夏天','n.','It is summer.','現在是夏天。'],['teacher','老師','n.','She is a teacher.','她是一位老師。'],
['doctor','醫生','n.','He is a doctor.','他是一位醫生。'],['actor','演員','n.','He is an actor.','他是一位演員。'],['sailor','水手','n.','The sailor is on a boat.','水手在船上。'],['tailor','裁縫師','n.','She is a tailor.','她是一位裁縫師。'],
['bird','鳥','n.','I see a bird.','我看到一隻鳥。'],['circle','圓形','n.','Draw a circle.','畫一個圓。'],['dirty','髒的','a.','My shirt is dirty.','我的襯衫髒了。'],['shirt','襯衫','n.','This is my shirt.','這是我的襯衫。'],
['nurse','護理師','n.','She is a nurse.','她是一位護理師。'],['curry','咖哩','n.','I like curry.','我喜歡咖哩。'],['purple','紫色的','a.','My cap is purple.','我的帽子是紫色的。'],['Thursday','星期四','n.','It is Thursday.','今天是星期四。'],
['dark','黑暗的','a.','It is dark.','這裡很暗。'],['farm','農場','n.','He has a farm.','他有一座農場。'],['park','公園','n.','We go to the park.','我們去公園。'],['shark','鯊魚','n.','I see a shark.','我看到一條鯊魚。'],
['fork','叉子','n.','This is a fork.','這是一支叉子。'],['corn','玉米','n.','I like corn.','我喜歡玉米。'],['short','矮的；短的','a.','The pencil is short.','這支鉛筆很短。'],['horse','馬','n.','He rides a horse.','他騎一匹馬。']
].map(x=>word(...x));
const extra=[word('where','在哪裡','ad.','Where are you from?','你來自哪裡？'),word('from','來自','prep.','I am from Taiwan.','我來自臺灣。'),word('school','學校','n.','I go to school.','我去上學。'),word('noodles','麵','n.','Would you like some noodles?','你想吃一些麵嗎？'),word('how','如何','ad.','How do you go to school?','你如何上學？'),word('whose','誰的','a.','Whose cap is this?','這是誰的帽子？'),word('cap','帽子','n.','This is my cap.','這是我的帽子。'),word('her','她的','a.','It is her cap.','這是她的帽子。')];
const lexicon=[...phonics,...countries,...transport,...extra];
const find=(...keys)=>keys.map(k=>lexicon.find(w=>w.en===k));
const sections=[
{id:'A',title:'發音偵探',english:'Listen and Check',desc:'聽清楚，再選出字母組合。',source:'Starter 課本 p.4–5；U1 p.16–17；U2 p.30–31。a_e、i、ue、ee 為原卷比較選項，例字另作補充。',note:'未提供原卷音檔。本區是依原題選項新編的聽音練習，不是原卷聽力答案。單字依 Starter → U1 → U2 的發音欄順序。',words:phonics,
questions:[
{prompt:'聽單字，選出聽到的字母組合。',speak:'cake',options:['a_e','ar'],correct:0,explain:'cake 的 a_e 發長母音；補充例字「蛋糕」。'},
{prompt:'聽單字，選出聽到的字母組合。',speak:'park',options:['ar','or'],correct:0,explain:'park（公園）含 ar。課本 p.30。'},
{prompt:'聽單字，選出聽到的字母組合。',speak:'shirt',options:['i','ir'],correct:1,explain:'shirt（襯衫）含 ir。課本 p.16。'},
{prompt:'聽單字，選出聽到的字母組合。',speak:'doctor',options:['ue','-or'],correct:1,explain:'doctor（醫生）的字尾是 -or。Starter p.4。'},
{prompt:'聽單字，選出聽到的字母組合。',speak:'purple',options:['ur','or'],correct:0,explain:'purple（紫色的）含 ur。課本 p.16。'},
{prompt:'聽單字，選出聽到的字母組合。',speak:'teacher',options:['-er','ee'],correct:0,explain:'teacher（老師）的字尾是 -er。Starter p.4。'}]},
{id:'B',title:'聽力旅行家',english:'Listen and Number',desc:'聽五段新編句子，把圖意排好。',source:'U1 p.12–13 國家；U2 p.26–27 交通；Starter p.3 Whose 句型。',note:'未提供原卷音檔；本區重新編寫五段句子與順序。圖卡依照片 a → e 排列。',words:find('Singapore','by train','by bike','Taiwan','whose','cap'),
audio:['I am from Taiwan.','I go to school by train. I do not go by bike.','I am from Singapore.','Whose cap is this? It is her cap.','I go to school by bike.'],
questions:[{label:'a',visual:'Singapore',prompt:'新加坡',number:3},{label:'b',visual:'train-choice',prompt:'搭火車，不騎腳踏車',number:2},{label:'c',visual:'bike',prompt:'騎腳踏車',number:5},{label:'d',visual:'Taiwan',prompt:'臺灣',number:1},{label:'e',visual:'cap',prompt:'詢問帽子是誰的',number:4}]},
{id:'C',title:'看圖拼字家',english:'Look and Write',desc:'國旗與交通圖示，寫出對應的英文。',source:'U1 p.12–13 國家；U2 p.26–27 交通方式。',note:'第 6 圖依使用者補充及放大核對：兩位孩子拿著臺灣國旗，答案為 Taiwan。',words:find('Japan','by scooter','by metro','Australia','on foot','Taiwan','India'),
questions:[{visual:'Japan',prompt:'寫出這個國家的英文。',answer:['Japan'],explain:'Japan＝日本。'}, {visual:'scooter',prompt:'寫出交通工具或交通方式。',answer:['scooter','by scooter'],explain:'scooter＝機車；by scooter＝騎機車。'}, {visual:'metro',prompt:'寫出交通工具或交通方式。',answer:['metro','MRT','by metro','by MRT'],explain:'metro／MRT＝捷運。'}, {visual:'Australia',prompt:'寫出這個國家的英文。',answer:['Australia'],explain:'Australia＝澳洲。'}, {visual:'foot',prompt:'寫出「步行」的英文片語。',answer:['on foot'],explain:'步行用 on foot。'}, {visual:'Taiwan',prompt:'兩位孩子拿著這面國旗，是哪個國家？',answer:['Taiwan'],explain:'Taiwan＝臺灣；辨認的是國旗。'}, {visual:'India',prompt:'寫出這個國家的英文。',answer:['India'],explain:'India＝印度。'}]},
{id:'D',title:'對話接力賽',english:'Read and Choose',desc:'讀懂問句，找出接得上的回答。',source:'U1 p.12–15 國家問答；U2 p.26–29 交通問答；Starter p.3 邀請句。',words:find('where','from','Singapore','the UK','by taxi','by bike','by metro','noodles','the USA','by train','how','by bus'),questions:[
{prompt:'A: Peter, where are you from?\nB: ______',options:["He’s from Singapore.",'Yes, I am.',"I’m from the UK."],correct:2,explain:'Where are you from? 問「你來自哪裡」，用 I’m from ... 回答。'},
{prompt:'A: Does he go to school by taxi?\nB: ______',options:['No. He goes to school by bike.','No. He goes to school by taxi.','No. She goes to school by bike.'],correct:0,explain:'問 he，回答也要對應 he；否定搭計程車後，改說騎腳踏車。'},
{prompt:'A: ______\nB: No, he isn’t.',options:['Does he go to school by metro?','Would you like some noodles?','Is he from the USA?'],correct:2,explain:'No, he isn’t. 對應 Is he ...?；Does 問句要用 does／doesn’t 回答。'},
{prompt:'A: ______\nB: Yes, she does.',options:['Does she go to school by train?','How do you go to school?','Does he go to school by bus?'],correct:0,explain:'Yes, she does. 對應 Does she ...?，代名詞與助動詞都要一致。'}]},
{id:'E',title:'句子修復師',english:'Look, Read, and Write',desc:'觀察提示，補完整個問答。',source:'U1 p.15 Are you from ...?；U2 p.29 How ...?；Starter p.3 Whose ...?。',words:find('the USA','how','school','by car','whose','cap','her'),questions:[
{visual:'the USA',prompt:'A: Are you from ____?\nB: Yes, I ____.',blanks:[['the USA','USA','the United States','the United States of America'],['am']],explain:'Are you from the USA? → Yes, I am. 注意 I 搭配 am。'},
{visual:'car',prompt:'A: ____ do you go to school?\nB: I go to school ____.',blanks:[['How'],['by car']],explain:'How 問交通方式；圖中是搭汽車，因此填 by car。'},
{visual:'her-cap',prompt:'A: ____ cap is this?\nB: It’s ____ cap.',blanks:[['Whose'],['her']],explain:'Whose＝誰的；圖示帽子屬於女孩，所以用 her cap。'}]},
{id:'F',title:'閱讀小領航',english:'Read and Choose',desc:'查閱人物表格，找出國家與上學方式。',source:'U1 p.12–15；U2 p.26–29。人物及表格依考卷 F 題。',words:find('Australia','by metro','India','on foot','Spain','by scooter','Singapore','where','from','school','by bike','by MRT'),people:[['Kevin','Australia','by metro'],['Gina','India','on foot'],['Kate','Spain','by scooter'],['Tom','Singapore','by metro']],questions:[
{prompt:'Where is Gina from?',options:["She’s from India.","She’s from Spain.","She’s from Singapore."],correct:0,explain:'表格 Gina 的 Country 是 India。'},
{prompt:'Does Kate go to school by scooter?',options:['Yes, she does.',"No, she doesn’t. She goes to school by metro.","No, she doesn’t. She goes to school by car."],correct:0,explain:'Kate 的交通方式為 by scooter，因此肯定回答。'},
{prompt:'How do Kevin and Tom go to school?',options:['They go to school on foot.','They go to school by scooter.','They go to school by MRT.'],correct:2,explain:'兩人都搭捷運；本課 by metro／by MRT 均可表達。'},
{prompt:'Is Tom from Singapore?',options:["No, he isn’t.",'Yes, he is.',"No. He’s from Australia."],correct:1,explain:'Tom 的 Country 是 Singapore，用 Yes, he is.。'},
{prompt:'Does Gina go to school by bike?',options:['Yes, she does.',"No, she doesn’t. She goes to school by bike.","No, she doesn’t. She goes to school on foot."],correct:2,explain:'Gina 步行上學，on foot；不是 by bike。'}]}
];
function normalize(s){return String(s).trim().toLowerCase().replace(/[’‘]/g,"'").replace(/doesn't/g,'does not').replace(/[.!?]+$/,'').replace(/\s+/g,' ');}
function check(value,answers){return answers.some(a=>normalize(a)===normalize(value));}
if(typeof module!=='undefined')module.exports={sections,lexicon,normalize,check};
