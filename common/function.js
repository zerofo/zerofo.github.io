var jbscript=document.createElement('script');
jbscript.src="./common/buildN2_jailbreak.js";
var loadbin = document.createElement('script');
loadbin.src = "./common/buildN_loadcode.js";
var loader_ = function(name,jb=0){
    var req=new XMLHttpRequest();
    req.responseType="arraybuffer";
    req.open("GET",name,true);
    req.send();
    req.onreadystatechange=function(){
        if(req.readyState==4)
        {
            var tmp=new Uint8Array(req.response.byteLength);
            tmp.set(new Uint8Array(req.response),0);
            var payload=new Uint32Array(tmp);
            
            //setTimeout(function(){

            window.mira_blob=malloc(65536);
            write_mem(window.mira_blob, payload);
            //}, 400);

            if(jb){
            setTimeout(function(){

                LoadedMSG= "破解成功 + Mira/Hen 已加载。请等待 左上角 跳窗结束再操作";
                //setTimeout(function(){

                document.getElementsByTagName('head')[0].appendChild(jbscript);
                //}, 800);

    		parent.oneclick2.style.display="none";
	        parent.oneclick.style.display="block";
            }, 5600);
            }
        }};
};
var PLdr_ = function(name,jb=0,ld=1){
    var plreq=new XMLHttpRequest();
    plreq.responseType="arraybuffer";
    plreq.open("GET",name,true);
    plreq.send();
    
    plreq.onreadystatechange=function(){
        if(plreq.readyState==4)
        {
            var pltmp=new Uint8Array(plreq.response.byteLength);
            pltmp.set(new Uint8Array(plreq.response),0);
            var payload_data=new Uint32Array(pltmp);
            for (var i = 0; i < payload_data.length; i++)var getlength = "0x" + plreq.response.byteLength.toString(16);
            //setTimeout(function(){
                if (ld)loader_("./pl/hen_loader.bin",0);
                window.mira_blob_2_len=getlength;
                window.mira_blob_2=malloc(window.mira_blob_2_len);
                write_mem(window.mira_blob_2,payload_data);
                //}, 400);
            if(jb){
            //setTimeout(function(){
                LoadedMSG= "破解成功 + Mira/Hen 已加载。请等待 左上角 跳窗结束再操作";
                document.getElementsByTagName('head')[0].appendChild(jbscript);
    		parent.oneclick2.style.display="none";
	        parent.oneclick.style.display="block";
            //}, 600);
            }
        }};
};
function load_exploit_mira() {
    msgs.innerHTML="<div class='processing'></div><h1 style='font-size:25px;text-align:center;'> 正在加载 Exploit + Mira ...</h1>";
    var ExploitMira=document.getElementById("oneclick").value;
    parent.oneclick.style.display="none";
    parent.oneclick2.style.display="block";

    if((ExploitMira=='zerofo') || (ExploitMira=='zerofo2'))loader_("./pl/"+ExploitMira+"_loader.bin",1);
    else{
        PLdr_("./pl/"+ExploitMira+"_mira.bin",1);
    }

};
function auto_jb(show) {
    var sw = Number(localStorage.getItem("auto_jb"));
    if(show)sw=!sw;
    if(sw){
        localStorage.setItem("auto_jb", "0");
        document.getElementById("autojb").innerHTML="OFF";
    }
    else{
        localStorage.setItem("auto_jb", "1");
        document.getElementById("autojb").innerHTML=" ON ";
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
    if (localStorage.getItem("Usetheme"))parent.fixedLayer.style.display="none";
    
    if (btns != null)themeVal = Number(themeVal)+1;
    if (themeVal > 2)themeVal=0;
    document.documentElement.setAttribute('theme', cmap[themeVal]);
    localStorage.setItem('themeVal',themeVal);
};
function load_script(name) {
    msgs.innerHTML="<div class='processing'></div><h1 style='font-size:25px;text-align:center;'> 正在加载 "+name+" ...</h1>";
    var binload=document.createElement('script');binload.src="./common/buildN_loadcode.js";

    if (name == "fan"){
    degree=parent.degree.value;
    var pl=document.createElement('script');
    pl.src="./pl/pl_"+name+".js";
    document.getElementsByTagName('head')[0].appendChild(pl);
    }
    else if (name != "binLoader") PLdr_("./pl/pl_"+name+".bin",0,0);
    loader_("./pl/hen_loader.bin",0);
    LoadedMSG="已经成功载入 "+name+" 插件";
    setTimeout(function(){
    document.getElementsByTagName('head')[0].appendChild(binload);
    }, 1300);

};
