function load_exploit_mira() {
    msgs.innerHTML="<div class='processing'></div><h1 style='font-size:25px;text-align:center;'> 正在加载 Exploit + Mira ...</h1>";
    ExploitMira=document.getElementById("oneclick").value;
    setTimeout(function(){
        var script=document.createElement('script');
        script.src="./common/buildN_jailbreak.js";
        LoadedMSG= "破解成功 + Mira/Hen 已加载。请等待 左上角 跳窗结束再操作<br> 同时页面将自动刷新(出现布局混乱请手动刷新)";
        document.getElementsByTagName('head')[0].appendChild(script);
    delete window.mira_blob_2;
    delete window.mira_blob_2_len;
    delete window.mira_blob;
    }, 1500);
}
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
}
function load_script(name) {
    
    msgs.innerHTML="<div class='processing'></div><h1 style='font-size:25px;text-align:center;'> 正在加载 "+name+" ...</h1>";
    if (name == "fan"){
    degree=parent.degree.value;
    }
    LoadedMSG="已经成功载入 "+name+" 插件";
    if (name != "binLoader"){
    var script=document.createElement('script');
    script.src="./pl/pl_"+name+".js";
    document.getElementsByTagName('head')[0].appendChild(script);
    }
    var loaderjs=document.createElement('script');
    ExploitMira=document.getElementById("oneclick").value;
    loaderjs.src="./pl/"+ExploitMira+"_loader.js";
    document.getElementsByTagName('head')[0].appendChild(loaderjs);
    var binload=document.createElement('script');binload.src="./common/new_loadcode.js";
    document.getElementsByTagName('head')[0].appendChild(binload);
}