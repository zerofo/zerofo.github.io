function load_exploit_mira() {
    msgs.innerHTML="<div class='processing'></div><h1 style='font-size:25px;text-align:center;'> 正在加载 Exploit + Mira ...</h1>";
    var ExploitMira=parent.oneclick.value;
    jbver = parent.jb_ver.value;
    if(jbver ==""){return false;}
    LoadedMSG="使用"+ jbver + "破解成功 + Mira/Hen 已加载。<br>请等待 左上角, 跳窗结束再操作";
    if (ExploitMira != null){

        setTimeout(function(){
        var mirajs = document.createElement('script');mirajs.src = "./pl/"+ExploitMira+"_mira.js";document.getElementsByTagName('head')[0].appendChild(mirajs); 
        },500);
        var Loader=parent.loader.value;
        if (Loader == "def"){
            Loader = ExploitMira;}  

        var loaderjs = document.createElement('script');loaderjs.src = "./pl/"+Loader+"_loader.js";
        document.getElementsByTagName('head')[0].appendChild(loaderjs);
        setTimeout(function(){
            var script=document.createElement('script');
            script.src="./common/"+jbver+"_jailbreak.js";
            document.getElementsByTagName('head')[0].appendChild(script);}, 500);
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
    loaderjs.src="./pl/mira_loader.js";
    document.getElementsByTagName('head')[0].appendChild(loaderjs);
    var binload=document.createElement('script');binload.src="./common/new_loadcode.js";
    document.getElementsByTagName('head')[0].appendChild(binload);
}
