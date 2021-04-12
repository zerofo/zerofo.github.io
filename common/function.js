function getfile(path) {
  return fetch(path)
    .then(function(response) {
      return response.blob();
    })
    .then(function(data) {
      return data;
    })
}
var loader_ = async function(name,jb=0,pl=0){
    file = await getfile(name);
    data = await new Response(file).arrayBuffer()
    var tmp=new Uint8Array(data.byteLength);
    tmp.set(new Uint8Array(data),0);
    var payload=new Uint32Array(tmp);

    if (pl) {
        var getlength = payload.length;
        window.pl_bin_len=getlength;
        window.pl_bin=malloc(window.pl_bin_len);
        write_mem(window.pl_bin,payload);
    }
    else{
        window.ldr_bin=malloc(65536);
        write_mem(window.ldr_bin, payload);
    }
    if(jb){
        setTimeout(function(){
            LoadedMSG = "破解成功 + Mira/Hen 已加载。\n请等待 左上角 跳窗结束再操作";
            jailbreak();
        }, 800);
    }
}

var PLdr_ = function(name,jb=0,ld=1){
    if (ld)loader_("./pl/hen_loader.bin",0);
    setTimeout(function(){

    loader_(name,0,1);
    }, 300);
    if(jb){
        setTimeout(function(){
            LoadedMSG= "破解成功 + Mira/Hen 已加载。\n请等待 左上角 跳窗结束再操作";
            jailbreak();
        }, 800);
    }
}

function load_exploit_mira() {
    msgs.innerHTML="<div class='processing'></div><h1 style='font-size:25px;text-align:center;'> 正在加载 Exploit + Mira ...</h1>";
    var ExploitMira=document.getElementById("oneclick").value;
    fail_times = Number(localStorage.getItem("fail_times"))||0;
    localStorage.setItem("fail_times", fail_times+1);
    
    if(ExploitMira=='zerofo') loader_("./pl/"+ExploitMira+"_loader.bin",1);
    else if (ExploitMira == "binLoader_jb") {
        setTimeout(function(){
        LoadedMSG= "破解成功 已加载。\n请等待 左上角 跳窗结束再操作";
        jailbreak();
        }, 1300);
    }
    else{
        PLdr_("./pl/"+ExploitMira+"_mira.bin",1);
    }

};
function change_oneclick(idx,name,val){
    document.getElementById(idx).innerHTML=name;
    document.getElementById(idx).value=val;
    localStorage.setItem(idx+"Name", name);
    localStorage.setItem(idx+"VAL", val);
};
function colorSwitch(btns){
    var cmap=["BW","BG","WX"];
    themeVal=localStorage.getItem("themeVal")
    if(typeof(themeVal)=="undefined" || themeVal == null){
        themeVal=0;
        localStorage.setItem('themeVal',themeVal);
    }
    if (btns)localStorage.setItem('Usetheme',1);
    if (localStorage.getItem("Usetheme"))window.fixedLayer.style.display="none";
    
    if (btns != null)themeVal = Number(themeVal)+1;
    if (themeVal > 2)themeVal=0;
    document.documentElement.setAttribute('theme', cmap[themeVal]);
    localStorage.setItem('themeVal',themeVal);
};
function load_script(name) {
    msgs.innerHTML="<div class='processing'></div><h1 style='font-size:25px;text-align:center;'> 正在加载 "+name+" ...</h1>";
    if (name == "fan"){
    degree=window.degree.value;
    var pl=document.createElement('script');
    pl.src="./pl/pl_"+name+".js";
    document.getElementsByTagName('head')[0].appendChild(pl);
    }
    else if (name != "binLoader") loader_("./pl/pl_"+name+".bin",0,0);
    LoadedMSG="已经成功载入 "+name+" 插件";
    setTimeout(function(){
    loadcode();
    }, 1300);
    
};