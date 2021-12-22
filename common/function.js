async function getfile(path) {
    var file = await fetch(path);
    if(file.ok){
        data = await file.arrayBuffer();
        return data;
    }
    return ''
}
const sleep = (timeountMS) => new Promise((resolve) => {
  setTimeout(resolve, timeountMS);
});

var loader_ = async function(name,jb=0,pl=0,ldr_only=0){
    let file = await getfile(name);
    let data = await new Response(file).arrayBuffer()
    let tmp=new Uint8Array(data.byteLength);
    tmp.set(new Uint8Array(data),0);
    let payload=new Uint32Array(tmp);

    if (pl) {
        //if(jb==0)
        // await sleep(150);
        //await sleep(500);
        let getlength = payload.length;
        window.pl_bin_len=getlength;
        window.pl_bin=malloc(window.pl_bin_len);
        await write_mem(window.pl_bin,payload);
    }
    else{
        // window.ldr_bin=malloc(150000);
        // write_mem(window.ldr_bin, payload);

        let getlength = payload.length;
        window.ldr_bin_len=getlength+0x10000;
        window.ldr_bin=malloc(window.ldr_bin_len);
        await write_mem(window.ldr_bin,payload);
        // await sleep(50);

    }
    // if(name.includes("goldhen2b"))
    //     await sleep(100);

    if(jb){
    // await jailbreak();

    window.timeC.addEventListener('animationend', jb_time);
    window.timeC.style.animation='moving 1s alternate 1';
    window.timeC.style.webkitanimation='moving 1s alternate 1';
    window.timeC.style.visibility='visible';
    }
    if(ldr_only){
        // loader_("./pl/hen_loader.bin",0);
    window.timeC.addEventListener('animationend', ldr_time);
    window.timeC.style.animation='moving 1s alternate 1';
    window.timeC.style.webkitanimation='moving 1s alternate 1';
    window.timeC.style.visibility='visible';
    }
    return;
}

var PLdr_ = function(name,jb=0,ld=1,ldr_only=0){

    if (ld) 
        loader_(name,0,1);
    if (ldr_only)
    loader_("./pl/hen_loader_net.bin",0);

    if (ldr_only) 
    {
        // loader_("./pl/hen_loader_net.bin",0);
    window.timeC.addEventListener('animationend', ldr_time);
    window.timeC.style.animation='moving 1s alternate 1';
    window.timeC.style.webkitanimation='moving 1s alternate 1';
    window.timeC.style.visibility='visible';
    }
    if (jb) {
    window.timeC.addEventListener('animationend', jb_time);
    window.timeC.style.animation='moving 1.5s alternate 1';
    window.timeC.style.webkitanimation='moving 1.5s alternate 1';
    window.timeC.style.visibility='visible';
    }
    return;
}

async function jb_time(func){
    await jailbreak();
    // await read_ptr_at(0);
}
async function ldr_time(func){
    await loadcode();
}

function load_exploit_mira() {

    clicktime = new Date();
    if ((clicktime.getTime()-startTime.getTime())<6500){
        alert("请等待按钮 完全显示(共5s)");
        return;
    }
    fail_times = Number(localStorage.getItem("fail_times"))||0;
    fail_times += 1
    localStorage.setItem("fail_times", fail_times);
    window.ing.style.visibility='visible';
    window.oneclick.style.visibility='hidden';
    window.pl_switch.style.visibility='hidden';
    document.getElementById("onekey").style.display='none';
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 Exploit + Hen ...<br> 时间太长请重启！！！</h1>";
    var ExploitMira=document.getElementById("oneclick").value;

//     if(ExploitMira=='zerofo'){
// // window.timeC.addEventListener('animationend', jb_time);
// //     window.timeC.style.animation='moving 1s alternate 1';
// //     window.timeC.style.webkitanimation='moving 1s alternate 1';
// //     window.timeC.style.visibility='visible';
//     }
    if(ExploitMira=='goldhen2b')loader_("./pl/goldhen2b2.bin",1);
    else if (ExploitMira == "binLoader_jb") {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 已加载 binLoader 请发送 9020端口 左上角没有提示！！！</h1>";
    window.timeC.addEventListener('animationend', jb_time);
    window.timeC.style.animation='moving 1s alternate 1';
    window.timeC.style.webkitanimation='moving 1s alternate 1';
    window.timeC.style.visibility='visible';
    }else if (ExploitMira == "binLoader_jb0") {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 已加载 binLoader 请发送 payload到9021端口 /h1>";
        loader_("./pl/hen_loader_net.bin",0);
        window.timeC.addEventListener('animationend', jb_time);
    window.timeC.style.animation='moving 1s alternate 1';
    window.timeC.style.webkitanimation='moving 1s alternate 1';
    window.timeC.style.visibility='visible';
    }
    // else{
    //     PLdr_("./pl/"+ExploitMira+"_mira.bin",1,1);
    //     //loader_("./pl/"+ExploitMira+"_mira.bin",1,1);
    // }
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
    window.pl_bin_len=null;
    window.ldr_bin=null;
    timedelay=800;
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 "+name+" ...</h1>";

    if (name == "fan"){

    loader_("./pl/hen_loader_net.bin",0);
    degree=window.degree.value;
    var pl=document.createElement('script');
    pl.src="./pl/pl_"+name+".js";
    document.getElementsByTagName('head')[0].appendChild(pl);
    setTimeout(function(){
    LoadedMSG="已经成功载入 "+name+" 插件";
    loadcode();
    return;},timedelay);
    }
    else if(name.includes("binLoader")){
        if (name == "binLoader") {
        LoadedMSG="已经成功载入 loader 插件, 请发送插件到9021";
        loader_("./pl/hen_loader_net.bin",0,0,ldr_only=1);
        }
        else{
            LoadedMSG="左上角 无提示， 请发送插件到9020";
            window.msgs.innerHTML=LoadedMSG;

            setTimeout(function(){
            loadcode();
            return;},timedelay);
        }
    }else {
        LoadedMSG="已经成功载入 "+name+" 插件";
        PLdr_("./pl/pl_"+name+".bin",0,1,ldr_only=1);
    }
    window.ing.style.visibility='hidden';
    


};
