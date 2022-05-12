function isPalin(str) {
    var half = Math.round(str.length / 2);
    var start = 0;
    var end = str.length - 1;
    var palindrome = true;
    var SPACE = 32;
    var COMMA = 44;
    var startSpace, endSpace;
  
    while (half && palindrome) {
      startSpace = str.charCodeAt(start) === SPACE || str.charCodeAt(start) === COMMA;
      endSpace = str.charCodeAt(end) === SPACE ||  str.charCodeAt(end) === COMMA;
  
      if (str[start] == str[end]) {
        start++;
        end--;
      } else if (startSpace || endSpace) {
        startSpace && start++;
        endSpace && end--;
      } else {
        palindrome = false;
      }
  
      half--;
    }
  
    return palindrome;
}


const route = {"rpresults":{"itemcnt":1,"errorcode":"0","items":[{"rpopt":"1","time":"1915","distance":"13843","fuelcost":"1800","toll":"0","vertexcnt":"522","vertex":[{"x":127.042114,"y":37.570656},{"x":127.042076,"y":37.570671},{"x":127.042076,"y":37.570671},{"x":127.042229,"y":37.570824},{"x":127.042229,"y":37.570824},{"x":127.042755,"y":37.570499},{"x":127.042755,"y":37.570499},{"x":127.042801,"y":37.570477},{"x":127.042969,"y":37.570393},{"x":127.043022,"y":37.570366},{"x":127.043129,"y":37.570313},{"x":127.043137,"y":37.570305},{"x":127.043259,"y":37.570251},{"x":127.04425,"y":37.56982},{"x":127.044586,"y":37.569668},{"x":127.044724,"y":37.569588},{"x":127.04483,"y":37.569515},{"x":127.044922,"y":37.56945},{"x":127.045021,"y":37.569359},{"x":127.045113,"y":37.569286},{"x":127.045204,"y":37.569168},{"x":127.045334,"y":37.568993},{"x":127.045403,"y":37.568886},{"x":127.045425,"y":37.568859},{"x":127.045563,"y":37.568604},{"x":127.045563,"y":37.568604},{"x":127.045853,"y":37.568077},{"x":127.045853,"y":37.568077},{"x":127.046555,"y":37.566727},{"x":127.046562,"y":37.566711},{"x":127.046562,"y":37.566711},{"x":127.046738,"y":37.566406},{"x":127.046783,"y":37.566319},{"x":127.046875,"y":37.56617},{"x":127.047264,"y":37.565498},{"x":127.047264,"y":37.565498},{"x":127.047363,"y":37.565327},{"x":127.047363,"y":37.565327},{"x":127.047569,"y":37.565018},{"x":127.047569,"y":37.565018},{"x":127.047729,"y":37.564758},{"x":127.047729,"y":37.564758},{"x":127.048111,"y":37.564121},{"x":127.048248,"y":37.563873},{"x":127.048355,"y":37.563686},{"x":127.048447,"y":37.563507},{"x":127.048691,"y":37.563011},{"x":127.048714,"y":37.562965},{"x":127.048744,"y":37.56292},{"x":127.048813,"y":37.562843},{"x":127.048912,"y":37.562752},{"x":127.04908,"y":37.56263},{"x":127.049179,"y":37.562538},{"x":127.049202,"y":37.5625},{"x":127.0495,"y":37.562038},{"x":127.049759,"y":37.561676},{"x":127.049759,"y":37.561676},{"x":127.04982,"y":37.561539},{"x":127.049965,"y":37.561226},{"x":127.049965,"y":37.561226},{"x":127.050781,"y":37.559452},{"x":127.051048,"y":37.558861},{"x":127.051178,"y":37.558594},{"x":127.051193,"y":37.558556},{"x":127.051193,"y":37.558556},{"x":127.051254,"y":37.558399},{"x":127.051308,"y":37.558235},{"x":127.051369,"y":37.558006},{"x":127.051399,"y":37.557884},{"x":127.05143,"y":37.557716},{"x":127.051453,"y":37.557461},{"x":127.05146,"y":37.557137},{"x":127.051445,"y":37.55687},{"x":127.051422,"y":37.556725},{"x":127.051308,"y":37.556366},{"x":127.051308,"y":37.556366},{"x":127.050827,"y":37.554733},{"x":127.050812,"y":37.554688},{"x":127.050804,"y":37.554665},{"x":127.050781,"y":37.554588},{"x":127.050697,"y":37.554329},{"x":127.050598,"y":37.554111},{"x":127.050507,"y":37.553947},{"x":127.050392,"y":37.553772},{"x":127.050262,"y":37.5536},{"x":127.050087,"y":37.553406},{"x":127.049973,"y":37.553322},{"x":127.049911,"y":37.553268},{"x":127.049759,"y":37.553146},{"x":127.0495,"y":37.552979},{"x":127.049332,"y":37.552895},{"x":127.049072,"y":37.55278},{"x":127.048904,"y":37.552715},{"x":127.048859,"y":37.552704},{"x":127.048767,"y":37.552673},{"x":127.048714,"y":37.552658},{"x":127.048477,"y":37.552597},{"x":127.04821,"y":37.552555},{"x":127.047989,"y":37.552521},{"x":127.047592,"y":37.552502},{"x":127.047195,"y":37.552498},{"x":127.046875,"y":37.552483},{"x":127.0466,"y":37.552475},{"x":127.046356,"y":37.552452},{"x":127.045868,"y":37.552402},{"x":127.045334,"y":37.552322},{"x":127.044853,"y":37.552254},{"x":127.044853,"y":37.552254},{"x":127.044388,"y":37.5522},{"x":127.044365,"y":37.5522},{"x":127.044365,"y":37.5522},{"x":127.043678,"y":37.552124},{"x":127.04306,"y":37.552052},{"x":127.042969,"y":37.55204},{"x":127.042519,"y":37.551979},{"x":127.042328,"y":37.551949},{"x":127.041916,"y":37.551865},{"x":127.041885,"y":37.551857},{"x":127.041573,"y":37.551781},{"x":127.04129,"y":37.551704},{"x":127.04097,"y":37.551605},{"x":127.040482,"y":37.551418},{"x":127.040405,"y":37.551388},{"x":127.040161,"y":37.551277},{"x":127.039894,"y":37.551144},{"x":127.039581,"y":37.55098},{"x":127.039352,"y":37.55085},{"x":127.039253,"y":37.550781},{"x":127.039139,"y":37.550705},{"x":127.039063,"y":37.550655},{"x":127.038864,"y":37.550514},{"x":127.038803,"y":37.550468},{"x":127.038643,"y":37.550346},{"x":127.038559,"y":37.550278},{"x":127.038445,"y":37.550186},{"x":127.038208,"y":37.549973},{"x":127.037994,"y":37.549767},{"x":127.037369,"y":37.549129},{"x":127.037369,"y":37.549129},{"x":127.037086,"y":37.548851},{"x":127.036804,"y":37.548561},{"x":127.036499,"y":37.548286},{"x":127.035294,"y":37.547268},{"x":127.035156,"y":37.547157},{"x":127.035004,"y":37.547028},{"x":127.034805,"y":37.546875},{"x":127.034386,"y":37.546539},{"x":127.034386,"y":37.546539},{"x":127.033371,"y":37.545719},{"x":127.033371,"y":37.545719},{"x":127.033348,"y":37.5457},{"x":127.033081,"y":37.545479},{"x":127.032845,"y":37.545303},{"x":127.032845,"y":37.545303},{"x":127.032829,"y":37.545296},{"x":127.032524,"y":37.545067},{"x":127.032257,"y":37.544853},{"x":127.032257,"y":37.544853},{"x":127.031509,"y":37.544228},{"x":127.031479,"y":37.544205},{"x":127.03125,"y":37.544037},{"x":127.03096,"y":37.543827},{"x":127.030624,"y":37.543594},{"x":127.030228,"y":37.54332},{"x":127.029716,"y":37.542988},{"x":127.029694,"y":37.542969},{"x":127.02919,"y":37.542633},{"x":127.029091,"y":37.542549},{"x":127.029053,"y":37.542503},{"x":127.028992,"y":37.542427},{"x":127.028946,"y":37.542336},{"x":127.028931,"y":37.542248},{"x":127.028915,"y":37.542152},{"x":127.028931,"y":37.542053},{"x":127.028954,"y":37.541985},{"x":127.029045,"y":37.541824},{"x":127.029091,"y":37.541775},{"x":127.02919,"y":37.541687},{"x":127.02919,"y":37.541687},{"x":127.029266,"y":37.541641},{"x":127.029358,"y":37.541603},{"x":127.029465,"y":37.54158},{"x":127.029564,"y":37.541573},{"x":127.029633,"y":37.541573},{"x":127.029732,"y":37.541584},{"x":127.029846,"y":37.541611},{"x":127.029915,"y":37.541634},{"x":127.030014,"y":37.541668},{"x":127.030144,"y":37.54171},{"x":127.030296,"y":37.541752},{"x":127.030441,"y":37.541786},{"x":127.030518,"y":37.541794},{"x":127.03067,"y":37.541809},{"x":127.03083,"y":37.541809},{"x":127.030968,"y":37.541798},{"x":127.031113,"y":37.541779},{"x":127.03125,"y":37.541748},{"x":127.031258,"y":37.541744},{"x":127.031395,"y":37.541698},{"x":127.031548,"y":37.541634},{"x":127.031784,"y":37.541519},{"x":127.032013,"y":37.541416},{"x":127.032242,"y":37.541321},{"x":127.032448,"y":37.541245},{"x":127.032593,"y":37.541203},{"x":127.033173,"y":37.541046},{"x":127.033188,"y":37.541046},{"x":127.033218,"y":37.541035},{"x":127.033401,"y":37.540993},{"x":127.033859,"y":37.540855},{"x":127.03437,"y":37.540665},{"x":127.034462,"y":37.540634},{"x":127.034943,"y":37.540489},{"x":127.034943,"y":37.540489},{"x":127.035156,"y":37.540413},{"x":127.035194,"y":37.540398},{"x":127.035805,"y":37.540192},{"x":127.036102,"y":37.5401},{"x":127.036171,"y":37.540077},{"x":127.037903,"y":37.539505},{"x":127.038132,"y":37.539436},{"x":127.03878,"y":37.539215},{"x":127.03878,"y":37.539215},{"x":127.038971,"y":37.539154},{"x":127.039063,"y":37.539124},{"x":127.039108,"y":37.539108},{"x":127.039246,"y":37.539063},{"x":127.039909,"y":37.538841},{"x":127.040108,"y":37.538765},{"x":127.040108,"y":37.538765},{"x":127.041161,"y":37.538368},{"x":127.041161,"y":37.538368},{"x":127.041267,"y":37.53833},{"x":127.041428,"y":37.538269},{"x":127.041786,"y":37.538147},{"x":127.041992,"y":37.538086},{"x":127.042168,"y":37.538025},{"x":127.042404,"y":37.537956},{"x":127.042854,"y":37.537834},{"x":127.042969,"y":37.537804},{"x":127.043175,"y":37.53775},{"x":127.043701,"y":37.537632},{"x":127.044632,"y":37.537399},{"x":127.044914,"y":37.537331},{"x":127.044914,"y":37.537331},{"x":127.045097,"y":37.537285},{"x":127.045181,"y":37.537262},{"x":127.045822,"y":37.537086},{"x":127.045822,"y":37.537086},{"x":127.045845,"y":37.537079},{"x":127.046875,"y":37.536789},{"x":127.047348,"y":37.536659},{"x":127.047859,"y":37.536518},{"x":127.048157,"y":37.536438},{"x":127.050026,"y":37.535912},{"x":127.050308,"y":37.535831},{"x":127.050781,"y":37.535698},{"x":127.051208,"y":37.53558},{"x":127.052567,"y":37.535198},{"x":127.052727,"y":37.535156},{"x":127.054253,"y":37.534721},{"x":127.054321,"y":37.534706},{"x":127.054527,"y":37.534645},{"x":127.054527,"y":37.534645},{"x":127.054688,"y":37.534607},{"x":127.055176,"y":37.53447},{"x":127.055176,"y":37.53447},{"x":127.055435,"y":37.534405},{"x":127.055908,"y":37.534283},{"x":127.057175,"y":37.533997},{"x":127.057175,"y":37.533997},{"x":127.057274,"y":37.53397},{"x":127.057381,"y":37.533943},{"x":127.058174,"y":37.533737},{"x":127.058594,"y":37.533615},{"x":127.058762,"y":37.533569},{"x":127.058762,"y":37.533569},{"x":127.058792,"y":37.533558},{"x":127.05896,"y":37.533508},{"x":127.05896,"y":37.533508},{"x":127.059853,"y":37.533222},{"x":127.06041,"y":37.533066},{"x":127.060745,"y":37.532967},{"x":127.060745,"y":37.532967},{"x":127.060799,"y":37.532948},{"x":127.062477,"y":37.532383},{"x":127.0625,"y":37.532379},{"x":127.062851,"y":37.532272},{"x":127.063171,"y":37.532177},{"x":127.06337,"y":37.53212},{"x":127.063591,"y":37.532055},{"x":127.063591,"y":37.532055},{"x":127.063797,"y":37.53199},{"x":127.064026,"y":37.531925},{"x":127.064186,"y":37.531879},{"x":127.064445,"y":37.531815},{"x":127.064445,"y":37.531815},{"x":127.064842,"y":37.531734},{"x":127.065033,"y":37.531708},{"x":127.065262,"y":37.531685},{"x":127.065453,"y":37.531677},{"x":127.065636,"y":37.531666},{"x":127.065742,"y":37.531654},{"x":127.065926,"y":37.531631},{"x":127.066048,"y":37.531605},{"x":127.066132,"y":37.531586},{"x":127.066399,"y":37.531517},{"x":127.06662,"y":37.53146},{"x":127.066788,"y":37.531414},{"x":127.066788,"y":37.531414},{"x":127.067268,"y":37.531288},{"x":127.067413,"y":37.53125},{"x":127.069275,"y":37.530739},{"x":127.069275,"y":37.530739},{"x":127.069687,"y":37.530628},{"x":127.069832,"y":37.53059},{"x":127.069832,"y":37.53059},{"x":127.070313,"y":37.53046},{"x":127.071304,"y":37.530193},{"x":127.071304,"y":37.530193},{"x":127.071388,"y":37.53017},{"x":127.072586,"y":37.529846},{"x":127.072586,"y":37.529846},{"x":127.072762,"y":37.529793},{"x":127.073425,"y":37.529617},{"x":127.074219,"y":37.529381},{"x":127.074432,"y":37.529312},{"x":127.074677,"y":37.529236},{"x":127.075684,"y":37.528881},{"x":127.075737,"y":37.528862},{"x":127.077118,"y":37.528351},{"x":127.077118,"y":37.528351},{"x":127.077438,"y":37.528236},{"x":127.078125,"y":37.528008},{"x":127.078186,"y":37.527985},{"x":127.078339,"y":37.527946},{"x":127.07859,"y":37.527878},{"x":127.078629,"y":37.52787},{"x":127.078629,"y":37.52787},{"x":127.078644,"y":37.527863},{"x":127.079422,"y":37.527695},{"x":127.079636,"y":37.527649},{"x":127.080231,"y":37.527546},{"x":127.080521,"y":37.527504},{"x":127.080872,"y":37.527458},{"x":127.081139,"y":37.527431},{"x":127.081139,"y":37.527431},{"x":127.081383,"y":37.527409},{"x":127.081718,"y":37.527382},{"x":127.081985,"y":37.527374},{"x":127.081985,"y":37.527374},{"x":127.082008,"y":37.527367},{"x":127.082031,"y":37.527359},{"x":127.082047,"y":37.527355},{"x":127.082085,"y":37.527344},{"x":127.082245,"y":37.527298},{"x":127.082787,"y":37.52726},{"x":127.083305,"y":37.527237},{"x":127.083305,"y":37.527237},{"x":127.084732,"y":37.527321},{"x":127.084732,"y":37.527321},{"x":127.084938,"y":37.527336},{"x":127.084991,"y":37.527336},{"x":127.08503,"y":37.527344},{"x":127.085205,"y":37.527363},{"x":127.085274,"y":37.527374},{"x":127.085503,"y":37.527428},{"x":127.085503,"y":37.527428},{"x":127.08564,"y":37.527458},{"x":127.085785,"y":37.527496},{"x":127.085938,"y":37.527534},{"x":127.086082,"y":37.527573},{"x":127.086082,"y":37.527573},{"x":127.086189,"y":37.527596},{"x":127.086479,"y":37.527649},{"x":127.086571,"y":37.527664},{"x":127.086746,"y":37.527706},{"x":127.08712,"y":37.527802},{"x":127.087395,"y":37.527885},{"x":127.087585,"y":37.527954},{"x":127.087944,"y":37.528099},{"x":127.088074,"y":37.528137},{"x":127.08812,"y":37.528141},{"x":127.088181,"y":37.528137},{"x":127.088242,"y":37.52813},{"x":127.088318,"y":37.528114},{"x":127.088432,"y":37.528053},{"x":127.088501,"y":37.528},{"x":127.089066,"y":37.527435},{"x":127.089066,"y":37.527435},{"x":127.089142,"y":37.527344},{"x":127.089401,"y":37.527031},{"x":127.089462,"y":37.526958},{"x":127.089546,"y":37.526848},{"x":127.089546,"y":37.526848},{"x":127.089661,"y":37.526711},{"x":127.089844,"y":37.526466},{"x":127.090469,"y":37.525661},{"x":127.091156,"y":37.524754},{"x":127.091446,"y":37.524376},{"x":127.091446,"y":37.524376},{"x":127.092171,"y":37.523438},{"x":127.09285,"y":37.522541},{"x":127.093559,"y":37.521622},{"x":127.093559,"y":37.521622},{"x":127.09375,"y":37.521366},{"x":127.093933,"y":37.521118},{"x":127.093933,"y":37.521118},{"x":127.094543,"y":37.520329},{"x":127.095169,"y":37.519531},{"x":127.095291,"y":37.519379},{"x":127.095596,"y":37.518974},{"x":127.095688,"y":37.518852},{"x":127.095688,"y":37.518852},{"x":127.096237,"y":37.518112},{"x":127.096664,"y":37.517555},{"x":127.096664,"y":37.517555},{"x":127.097557,"y":37.516453},{"x":127.097557,"y":37.516453},{"x":127.097656,"y":37.516319},{"x":127.097809,"y":37.516106},{"x":127.097809,"y":37.516106},{"x":127.097946,"y":37.515915},{"x":127.097984,"y":37.515869},{"x":127.097984,"y":37.515869},{"x":127.09816,"y":37.515625},{"x":127.098297,"y":37.515438},{"x":127.098297,"y":37.515438},{"x":127.099533,"y":37.513748},{"x":127.099533,"y":37.513748},{"x":127.099533,"y":37.513741},{"x":127.099602,"y":37.513664},{"x":127.099899,"y":37.513275},{"x":127.099899,"y":37.513275},{"x":127.100006,"y":37.513138},{"x":127.100006,"y":37.513138},{"x":127.100334,"y":37.512711},{"x":127.100334,"y":37.512711},{"x":127.100563,"y":37.512421},{"x":127.100563,"y":37.512421},{"x":127.101135,"y":37.511719},{"x":127.101326,"y":37.511482},{"x":127.101402,"y":37.511395},{"x":127.101402,"y":37.511395},{"x":127.101547,"y":37.511223},{"x":127.101547,"y":37.511223},{"x":127.101563,"y":37.511215},{"x":127.101593,"y":37.5112},{"x":127.101654,"y":37.511185},{"x":127.101715,"y":37.511177},{"x":127.101791,"y":37.511173},{"x":127.101898,"y":37.511185},{"x":127.101898,"y":37.511185},{"x":127.102028,"y":37.511253},{"x":127.102196,"y":37.511337},{"x":127.102196,"y":37.511337},{"x":127.102325,"y":37.51136},{"x":127.102386,"y":37.511391},{"x":127.102386,"y":37.511391},{"x":127.103065,"y":37.511719},{"x":127.103149,"y":37.511761},{"x":127.103394,"y":37.511868},{"x":127.103394,"y":37.511868},{"x":127.103874,"y":37.51207},{"x":127.103874,"y":37.51207},{"x":127.104706,"y":37.512474},{"x":127.105103,"y":37.512665},{"x":127.105103,"y":37.512665},{"x":127.105453,"y":37.512833},{"x":127.105469,"y":37.51284},{"x":127.106232,"y":37.513222},{"x":127.106232,"y":37.513222},{"x":127.106339,"y":37.513268},{"x":127.106697,"y":37.513451},{"x":127.106697,"y":37.513451},{"x":127.106987,"y":37.513557},{"x":127.106987,"y":37.513557},{"x":127.107162,"y":37.513557},{"x":127.107178,"y":37.513557},{"x":127.107208,"y":37.513557},{"x":127.107254,"y":37.51355},{"x":127.107285,"y":37.513535},{"x":127.107491,"y":37.513432},{"x":127.107491,"y":37.513432},{"x":127.107689,"y":37.512981},{"x":127.107689,"y":37.512981},{"x":127.107872,"y":37.512554},{"x":127.107872,"y":37.512554},{"x":127.108109,"y":37.511971},{"x":127.108109,"y":37.511971},{"x":127.108612,"y":37.511784},{"x":127.108612,"y":37.511784},{"x":127.108772,"y":37.511719},{"x":127.108871,"y":37.511681},{"x":127.108871,"y":37.511681},{"x":127.1092,"y":37.511543},{"x":127.109375,"y":37.511467},{"x":127.109428,"y":37.511444},{"x":127.109428,"y":37.511444},{"x":127.10952,"y":37.511406},{"x":127.10952,"y":37.511406},{"x":127.109795,"y":37.511295},{"x":127.110161,"y":37.51115},{"x":127.110161,"y":37.51115},{"x":127.111115,"y":37.510761},{"x":127.111115,"y":37.510761},{"x":127.11171,"y":37.510498},{"x":127.111832,"y":37.510448},{"x":127.111954,"y":37.510395},{"x":127.11219,"y":37.510296},{"x":127.11219,"y":37.510296},{"x":127.112511,"y":37.51012},{"x":127.113136,"y":37.509766},{"x":127.113136,"y":37.509766},{"x":127.113281,"y":37.509686},{"x":127.113518,"y":37.509548},{"x":127.113518,"y":37.509548},{"x":127.113861,"y":37.509354},{"x":127.113861,"y":37.509354},{"x":127.114441,"y":37.509029},{"x":127.114441,"y":37.509029},{"x":127.114296,"y":37.508888}],"routeSummary":{"summaryGuide":"안내경로는 사근램프진입, 내부순환로, 동부간선, 강변북로를 이용하는 경로입니다.","summaryDataCnt":5,"summaryDatas":[{"text":"사근램프","distance":388},{"text":"내부순환로","distance":53},{"text":"동부간선","distance":44},{"text":"강변북로","distance":367},{"text":"잠실대교","distance":78}]},"limitHeightCnt":0,"limitWeightCnt":0,"altitudeCnt":0,"limitCateCode":0,"linkInfoCnt":92,"linkInfoList":[{"congestion":1,"vertexStartIdx":0,"vertexEndIdx":1},{"congestion":3,"vertexStartIdx":2,"vertexEndIdx":3},{"congestion":1,"vertexStartIdx":4,"vertexEndIdx":5},{"congestion":3,"vertexStartIdx":6,"vertexEndIdx":24},{"congestion":3,"vertexStartIdx":25,"vertexEndIdx":26},{"congestion":1,"vertexStartIdx":27,"vertexEndIdx":29},{"congestion":1,"vertexStartIdx":30,"vertexEndIdx":34},{"congestion":1,"vertexStartIdx":35,"vertexEndIdx":36},{"congestion":1,"vertexStartIdx":37,"vertexEndIdx":38},{"congestion":1,"vertexStartIdx":39,"vertexEndIdx":40},{"congestion":1,"vertexStartIdx":41,"vertexEndIdx":55},{"congestion":1,"vertexStartIdx":56,"vertexEndIdx":58},{"congestion":1,"vertexStartIdx":59,"vertexEndIdx":63},{"congestion":1,"vertexStartIdx":64,"vertexEndIdx":74},{"congestion":1,"vertexStartIdx":75,"vertexEndIdx":106},{"congestion":1,"vertexStartIdx":107,"vertexEndIdx":109},{"congestion":1,"vertexStartIdx":110,"vertexEndIdx":137},{"congestion":1,"vertexStartIdx":138,"vertexEndIdx":146},{"congestion":1,"vertexStartIdx":147,"vertexEndIdx":148},{"congestion":1,"vertexStartIdx":149,"vertexEndIdx":152},{"congestion":1,"vertexStartIdx":153,"vertexEndIdx":156},{"congestion":2,"vertexStartIdx":157,"vertexEndIdx":177},{"congestion":2,"vertexStartIdx":178,"vertexEndIdx":212},{"congestion":1,"vertexStartIdx":213,"vertexEndIdx":221},{"congestion":1,"vertexStartIdx":222,"vertexEndIdx":228},{"congestion":1,"vertexStartIdx":229,"vertexEndIdx":230},{"congestion":1,"vertexStartIdx":231,"vertexEndIdx":243},{"congestion":2,"vertexStartIdx":244,"vertexEndIdx":247},{"congestion":2,"vertexStartIdx":248,"vertexEndIdx":262},{"congestion":2,"vertexStartIdx":263,"vertexEndIdx":265},{"congestion":2,"vertexStartIdx":266,"vertexEndIdx":269},{"congestion":2,"vertexStartIdx":270,"vertexEndIdx":275},{"congestion":2,"vertexStartIdx":276,"vertexEndIdx":278},{"congestion":2,"vertexStartIdx":279,"vertexEndIdx":282},{"congestion":2,"vertexStartIdx":283,"vertexEndIdx":290},{"congestion":2,"vertexStartIdx":291,"vertexEndIdx":295},{"congestion":2,"vertexStartIdx":296,"vertexEndIdx":308},{"congestion":2,"vertexStartIdx":309,"vertexEndIdx":312},{"congestion":3,"vertexStartIdx":313,"vertexEndIdx":315},{"congestion":3,"vertexStartIdx":316,"vertexEndIdx":318},{"congestion":3,"vertexStartIdx":319,"vertexEndIdx":321},{"congestion":3,"vertexStartIdx":322,"vertexEndIdx":330},{"congestion":3,"vertexStartIdx":331,"vertexEndIdx":337},{"congestion":3,"vertexStartIdx":338,"vertexEndIdx":345},{"congestion":3,"vertexStartIdx":346,"vertexEndIdx":349},{"congestion":3,"vertexStartIdx":350,"vertexEndIdx":357},{"congestion":3,"vertexStartIdx":358,"vertexEndIdx":359},{"congestion":3,"vertexStartIdx":360,"vertexEndIdx":366},{"congestion":3,"vertexStartIdx":367,"vertexEndIdx":371},{"congestion":3,"vertexStartIdx":372,"vertexEndIdx":388},{"congestion":1,"vertexStartIdx":389,"vertexEndIdx":393},{"congestion":1,"vertexStartIdx":394,"vertexEndIdx":399},{"congestion":2,"vertexStartIdx":400,"vertexEndIdx":403},{"congestion":2,"vertexStartIdx":404,"vertexEndIdx":406},{"congestion":1,"vertexStartIdx":407,"vertexEndIdx":412},{"congestion":3,"vertexStartIdx":413,"vertexEndIdx":415},{"congestion":3,"vertexStartIdx":416,"vertexEndIdx":417},{"congestion":3,"vertexStartIdx":418,"vertexEndIdx":420},{"congestion":3,"vertexStartIdx":421,"vertexEndIdx":423},{"congestion":3,"vertexStartIdx":424,"vertexEndIdx":426},{"congestion":3,"vertexStartIdx":427,"vertexEndIdx":428},{"congestion":3,"vertexStartIdx":429,"vertexEndIdx":432},{"congestion":3,"vertexStartIdx":433,"vertexEndIdx":434},{"congestion":3,"vertexStartIdx":435,"vertexEndIdx":436},{"congestion":3,"vertexStartIdx":437,"vertexEndIdx":438},{"congestion":3,"vertexStartIdx":439,"vertexEndIdx":442},{"congestion":3,"vertexStartIdx":443,"vertexEndIdx":444},{"congestion":2,"vertexStartIdx":445,"vertexEndIdx":451},{"congestion":2,"vertexStartIdx":452,"vertexEndIdx":454},{"congestion":2,"vertexStartIdx":455,"vertexEndIdx":457},{"congestion":1,"vertexStartIdx":458,"vertexEndIdx":461},{"congestion":1,"vertexStartIdx":462,"vertexEndIdx":463},{"congestion":1,"vertexStartIdx":464,"vertexEndIdx":466},{"congestion":1,"vertexStartIdx":467,"vertexEndIdx":470},{"congestion":3,"vertexStartIdx":471,"vertexEndIdx":473},{"congestion":3,"vertexStartIdx":474,"vertexEndIdx":475},{"congestion":2,"vertexStartIdx":476,"vertexEndIdx":482},{"congestion":2,"vertexStartIdx":483,"vertexEndIdx":484},{"congestion":2,"vertexStartIdx":485,"vertexEndIdx":486},{"congestion":2,"vertexStartIdx":487,"vertexEndIdx":488},{"congestion":2,"vertexStartIdx":489,"vertexEndIdx":490},{"congestion":2,"vertexStartIdx":491,"vertexEndIdx":493},{"congestion":2,"vertexStartIdx":494,"vertexEndIdx":497},{"congestion":2,"vertexStartIdx":498,"vertexEndIdx":499},{"congestion":2,"vertexStartIdx":500,"vertexEndIdx":502},{"congestion":2,"vertexStartIdx":503,"vertexEndIdx":504},{"congestion":3,"vertexStartIdx":505,"vertexEndIdx":509},{"congestion":2,"vertexStartIdx":510,"vertexEndIdx":512},{"congestion":2,"vertexStartIdx":513,"vertexEndIdx":515},{"congestion":2,"vertexStartIdx":516,"vertexEndIdx":517},{"congestion":2,"vertexStartIdx":518,"vertexEndIdx":519},{"congestion":1,"vertexStartIdx":520,"vertexEndIdx":521}],"laneInfoCnt":20,"laneInfoList":[{"linkListIdx":4,"coord":{"x":127.045853,"y":37.568077},"laneCnt":3,"laneTypes":[["0000","0002"],["0008","0008"],["0008","0228"]]},{"linkListIdx":6,"coord":{"x":127.047264,"y":37.565498},"laneCnt":2,"laneTypes":[["0008","0008"],["0008","0028"]]},{"linkListIdx":8,"coord":{"x":127.047569,"y":37.565018},"laneCnt":3,"laneTypes":[["0008","0108"],["0000","0010"],["0000","0010"]]},{"linkListIdx":16,"coord":{"x":127.037369,"y":37.549129},"laneCnt":4,"laneTypes":[["0008","0008"],["0008","0008"],["0008","0008"],["0000","0010"]]},{"linkListIdx":20,"coord":{"x":127.032257,"y":37.544853},"laneCnt":4,"laneTypes":[["0004","0004"],["0004","0004"],["0000","0010"],["0000","0010"]]},{"linkListIdx":29,"coord":{"x":127.055176,"y":37.53447},"laneCnt":6,"laneTypes":[["0008","0008"],["0008","0008"],["0008","0008"],["0008","0008"],["0008","0008"],["0000","0210"]]},{"linkListIdx":31,"coord":{"x":127.058762,"y":37.533569},"laneCnt":6,"laneTypes":[["0008","0008"],["0008","0008"],["0008","0008"],["0008","0008"],["0008","0008"],["0000","0210"]]},{"linkListIdx":33,"coord":{"x":127.060745,"y":37.532967},"laneCnt":5,"laneTypes":[["0000","0004"],["0000","0004"],["0010","0010"],["0010","0010"],["0010","0010"]]},{"linkListIdx":35,"coord":{"x":127.064445,"y":37.531815},"laneCnt":5,"laneTypes":[["0008","0008"],["0008","0008"],["0008","0008"],["0008","0008"],["0000","0210"]]},{"linkListIdx":42,"coord":{"x":127.078629,"y":37.52787},"laneCnt":5,"laneTypes":[["0008","0008"],["0008","0008"],["0008","0008"],["0008","0008"],["0000","0210"]]},{"linkListIdx":44,"coord":{"x":127.081985,"y":37.527374},"laneCnt":5,"laneTypes":[["0000","0008"],["0000","0008"],["0000","0008"],["0000","0008"],["0010","0210"]]},{"linkListIdx":48,"coord":{"x":127.086082,"y":37.527573},"laneCnt":2,"laneTypes":[["0000","0004"],["0010","0210"]]},{"linkListIdx":53,"coord":{"x":127.093933,"y":37.521118},"laneCnt":5,"laneTypes":[["0008","0008"],["0008","0008"],["0008","0008"],["0008","0008"],["0000","0210"]]},{"linkListIdx":57,"coord":{"x":127.097809,"y":37.516106},"laneCnt":6,"laneTypes":[["0000","0103"],["0000","0102"],["0008","0008"],["0008","0008"],["0008","0008"],["0008","0008"]]},{"linkListIdx":60,"coord":{"x":127.099533,"y":37.513748},"laneCnt":7,"laneTypes":[["0008","0048"],["0000","0102"],["0000","0002"],["0008","0008"],["0008","0008"],["0008","0008"],["0008","0028"]]},{"linkListIdx":66,"coord":{"x":127.101547,"y":37.511223},"laneCnt":6,"laneTypes":[["0000","0048"],["0002","0102"],["0000","0008"],["0000","0008"],["0000","0008"],["0000","0020"]]},{"linkListIdx":69,"coord":{"x":127.102386,"y":37.511391},"laneCnt":3,"laneTypes":[["0008","0008"],["0008","0008"],["0000","0010"]]},{"linkListIdx":75,"coord":{"x":127.106987,"y":37.513557},"laneCnt":3,"laneTypes":[["0000","0002"],["0000","0002"],["0020","0220"]]},{"linkListIdx":79,"coord":{"x":127.108109,"y":37.511971},"laneCnt":4,"laneTypes":[["0000","0101"],["0002","0002"],["0002","0002"],["0000","0020"]]},{"linkListIdx":86,"coord":{"x":127.11219,"y":37.510296},"laneCnt":4,"laneTypes":[["0000","0103"],["0008","000a"],["0008","0008"],["0000","0020"]]}]}]}}


const Benchmark = require('benchmark');
const palindromeC = require('bindings')('palindrome.node');
const palindromeJS = require('./palindrome')

const suite = new Benchmark.Suite;

suite.add('Javascript palindrome', function(){
    JSON.stringify(route);
}).add('C palindrome', function(){
    palindromeC.jsonStringify(route);
})
.on('cycle', cycle)
.on('complete', complete)
.run({'async' : true});

function cycle(event){
    console.log(String(event.target));
}

function complete(a, b){
    console.log('Fastest : ' + this.filter('fastest').map('name'));
    console.log('Slowest : ' + this.filter('slowest').map('name'));
}