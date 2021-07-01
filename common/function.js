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
        //await sleep(100);
        getlength = payload.length;
        window.pl_bin_len=getlength;
        window.pl_bin=malloc(window.pl_bin_len);
        write_mem(window.pl_bin,payload);
    }
    else{
        window.ldr_bin=malloc(65536);
        write_mem(window.ldr_bin, payload);
    }
    if(jb){
    window.timeC.addEventListener('animationend', timedely);
    window.timeC.style.animation='moving 1s alternate 1';
    window.timeC.style.webkitanimation='moving 1s alternate 1';

    window.timeC.style.visibility='visible';
    }
    return;
}

var PLdr_ = function(name,jb=0,ld=1,timedelay=50/*,movetime='1.5'*/){
    if (ld)loader_("./pl/hen_loader.bin",0);
    setTimeout(function(){
    loader_(name,0,1);
    if(jb){
    window.timeC.addEventListener('animationend', timedely);
    window.timeC.style.animation='moving 1s alternate 1';
    window.timeC.style.webkitanimation='moving 1s alternate 1';

    window.timeC.style.visibility='visible';

    }
    }, timedelay);
    return;
}

function timedely(func){
    LoadedMSG= "破解成功 已加载。\n请等待 左上角 跳窗结束再操作";
    var clicktime2=new Date();
    jailbreak();


    
}

function load_exploit_mira() {
    clicktime = new Date();

    if ((clicktime.getTime()-startTime.getTime())<5000){
        alert("请等待按钮 完全显示(共5s)");
        return;
    }
    window.ing.style.visibility='visible';
    window.oneclick.style.visibility='hidden';
    window.pl_switch.style.visibility='hidden';
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 Exploit + Hen ...<br>完成但  没有跳窗 请重启！！！<br> 时间太长请重启！！！</h1>";
    var ExploitMira=document.getElementById("oneclick").value;
    fail_times = Number(localStorage.getItem("fail_times"))||0;
    localStorage.setItem("fail_times", fail_times+1);
    
    if(ExploitMira=='zerofo') loader_("./pl/"+ExploitMira+"_loader.bin",1);
    else if (ExploitMira == "binLoader_jb") {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 已加载 binLoader 请发送 9020端口 左上角没有提示！！！</h1>";
        
    window.timeC.addEventListener('animationend', timedely);
    window.timeC.style.animation='moving 1s alternate 1';
    window.timeC.style.webkitanimation='moving 1s alternate 1';
    window.timeC.style.visibility='visible';
    }
    else{
        PLdr_("./pl/"+ExploitMira+"_mira.bin",1,timedelay=100);
    }
    startTime = new Date();

    return;
};
function change_oneclick(idx,name,val){
    document.getElementById(idx).innerHTML=name;
    document.getElementById(idx).value=val;
    localStorage.setItem(idx+"Name", name);
    localStorage.setItem(idx+"VAL", val);
    return;
};

function load_script(name) {

    window.ing.style.visibility='visible';
    window.pl_bin=null;
    window.pl_len=null;
    window.ldr_bin=null;
    timedelay=800;
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 "+name+" ...</h1>";
    if (name == "fan"){
    degree=window.degree.value;
    var pl=document.createElement('script');
    pl.src="./pl/pl_"+name+".js";
    document.getElementsByTagName('head')[0].appendChild(pl);
    }
    else if (name != "binLoader") {
	    //PLdr_("./pl/pl_"+name+".bin",0,1);
    setTimeout(function(){

        loader_("./pl/pl_"+name+".bin",0,1);
        loader_("./pl/hen_loader.bin",0);
    },300);

	    //PLdr_("./pl/pl_"+name+".bin",0,1,300);
	}
    else{
        loader_("./pl/hen_loader.bin",0,0);
    }
    setTimeout(function(){
    LoadedMSG="已经成功载入 "+name+" 插件";
    loadcode();
    window.ing.style.visibility='hidden';
    return;},timedelay);
};
