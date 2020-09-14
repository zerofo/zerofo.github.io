function get_ver(){
    jbver = document.getElementById("jb_ver").value;
    if(jbver ==""){jbver="new";}
    let str={"new":0, "def":1, "old":2};
    localStorage.setItem("jbnum",str[jbver]);
    return jbver;
}
function load_exploit_mira() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 Exploit + Mira ...</h1>";
    ExploitMira=document.getElementById("oneclick").value;
    console.log(ExploitMira);
    jbver = document.getElementById("jb_ver").value;
    if(jbver ==""){jbver="new";}
    let str={"new":0, "def":1, "old":2};
    localStorage.setItem("jbnum",str[jbver]);

    LoadedMSG="使用"+ str[jbver] + "破解成功 + Mira/Hen 已加载。请等待 左上角, 出现2次 以上 跳窗 并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./common/"+jbver+"_jailbreak.js";
    setTimeout(function(){document.getElementsByTagName('head')[0].appendChild(script);}, 500);
}

function load_fan() {
    degree=document.getElementById('degree').value;
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 写入风扇数据 ...</h1>";
    LoadedMSG="已经成功 写入风扇数据"+degree;
    let script=document.createElement('script');
    script.src="./pl/pl_fan.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    loader=document.getElementById('loader').value=="def"? "mira": document.getElementById('loader').value;
    let loaderjs=document.createElement('script');
    loaderjs.src="./pl/"+loader+"_loader.js";
    document.getElementsByTagName('head')[0].appendChild(loaderjs);
    let binload=document.createElement('script');binload.src="./pl/"+get_ver()+"_loader.js";
    setTimeout(function(){document.getElementsByTagName('head')[0].appendChild(binload);},500);
}

function load_binloader() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 Bin Loader ...</h1>";
    LoadedMSG="发送 bin格式插件(payload) 到端口 9021, 请等待 左上角, 出现2次 以上 跳窗并等待跳窗结束再操作";
    loader=document.getElementById('loader').value=="def"? "mira": document.getElementById('loader').value;
    let script=document.createElement('script');
    script.src="./pl/"+loader+"_loader.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    let binload=document.createElement('script');binload.src="./pl/"+get_ver()+"_loader.js";
    setTimeout(function(){document.getElementsByTagName('head')[0].appendChild(binload);},500);
}

function load_ftp() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 FTP ...</h1>";

    LoadedMSG="FTP 已加载 请等待 左上角, 出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_ftp.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    loader=document.getElementById('loader').value=="def"? "mira": document.getElementById('loader').value;
    let loaderjs=document.createElement('script');
    loaderjs.src="./pl/"+loader+"_loader.js";
    document.getElementsByTagName('head')[0].appendChild(loaderjs);
    let binload=document.createElement('script');binload.src="./pl/"+get_ver()+"_loader.js";
    setTimeout(function(){document.getElementsByTagName('head')[0].appendChild(binload);},500);
}
function load_dumperBeta() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 Dumper ...</h1>";
    LoadedMSG="Dumper 已加载 请等待 左上角, 出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_dumper-beta.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    loader=document.getElementById('loader').value=="def"? "mira": document.getElementById('loader').value;
    let loaderjs=document.createElement('script');
    loaderjs.src="./pl/"+loader+"_loader.js";
    document.getElementsByTagName('head')[0].appendChild(loaderjs);
    let binload=document.createElement('script');binload.src="./pl/"+get_ver()+"_loader.js";
    setTimeout(function(){document.getElementsByTagName('head')[0].appendChild(binload);},500);
}
function load_dumper() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 Dumper ...</h1>";
    LoadedMSG="Dumper 已加载 请等待 左上角, 出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_dumper.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    loader=document.getElementById('loader').value=="def"? "mira": document.getElementById('loader').value;
    let loaderjs=document.createElement('script');
    loaderjs.src="./pl/"+loader+"_loader.js";
    document.getElementsByTagName('head')[0].appendChild(loaderjs);
    let binload=document.createElement('script');binload.src="./pl/"+get_ver()+"_loader.js";
    setTimeout(function(){document.getElementsByTagName('head')[0].appendChild(binload);},500);
}

function load_linux() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 Linux ...</h1>";

    LoadedMSG="Linux 已加载 请等待 左上角, 出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_linux.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    loader=document.getElementById('loader').value=="def"? "mira": document.getElementById('loader').value;
    let loaderjs=document.createElement('script');
    loaderjs.src="./pl/"+loader+"_loader.js";
    document.getElementsByTagName('head')[0].appendChild(loaderjs);
    let binload=document.createElement('script');binload.src="./pl/"+get_ver()+"_loader.js";
    setTimeout(function(){document.getElementsByTagName('head')[0].appendChild(binload);},500);
}

function load_app2usb() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 AppToUSB ...</h1>";

    LoadedMSG="AppToUSB 已加载 请等待 左上角, 出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_app2usb.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    loader=document.getElementById('loader').value=="def"? "mira": document.getElementById('loader').value;
    let loaderjs=document.createElement('script');
    loaderjs.src="./pl/"+loader+"_loader.js";
    document.getElementsByTagName('head')[0].appendChild(loaderjs);
    let binload=document.createElement('script');binload.src="./pl/"+get_ver()+"_loader.js";
    setTimeout(function(){document.getElementsByTagName('head')[0].appendChild(binload);},500);
}

function load_kerneldump() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 内核 Dumper ...</h1>";
    LoadedMSG="内核 Dumper 已加载 请等待 左上角, 出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_kernelDumper.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    loader=document.getElementById('loader').value=="def"? "mira": document.getElementById('loader').value;
    let loaderjs=document.createElement('script');
    loaderjs.src="./pl/"+loader+"_loader.js";
    document.getElementsByTagName('head')[0].appendChild(loaderjs);
    let binload=document.createElement('script');binload.src="./pl/"+get_ver()+"_loader.js";
    setTimeout(function(){document.getElementsByTagName('head')[0].appendChild(binload);},500);
}

function load_kernelclock() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 内核时间修复 ...</h1>";
    LoadedMSG="内核时间修复 已加载 请等待 左上角, 出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_kernelclock.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    loader=document.getElementById('loader').value=="def"? "mira": document.getElementById('loader').value;
    let loaderjs=document.createElement('script');
    loaderjs.src="./pl/"+loader+"_loader.js";
    document.getElementsByTagName('head')[0].appendChild(loaderjs);
    let binload=document.createElement('script');binload.src="./pl/"+get_ver()+"_loader.js";
    setTimeout(function(){document.getElementsByTagName('head')[0].appendChild(binload);},500);
}

function load_todex() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 toDEX ...</h1>";
    LoadedMSG="toDEX 已加载 请等待 左上角, 出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_todex.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    loader=document.getElementById('loader').value=="def"? "mira": document.getElementById('loader').value;
    let loaderjs=document.createElement('script');
    loaderjs.src="./pl/"+loader+"_loader.js";
    document.getElementsByTagName('head')[0].appendChild(loaderjs);
    let binload=document.createElement('script');binload.src="./pl/"+get_ver()+"_loader.js";
    setTimeout(function(){document.getElementsByTagName('head')[0].appendChild(binload);},500);
}

function load_webrte() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 WebRTE ...</h1>";
    LoadedMSG="WebRTE 已加载 请等待 左上角, 出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_webrte.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    loader=document.getElementById('loader').value=="def"? "mira": document.getElementById('loader').value;
    let loaderjs=document.createElement('script');
    loaderjs.src="./pl/"+loader+"_loader.js";
    document.getElementsByTagName('head')[0].appendChild(loaderjs);
    let binload=document.createElement('script');binload.src="./pl/"+get_ver()+"_loader.js";
    setTimeout(function(){document.getElementsByTagName('head')[0].appendChild(binload);},500);
}

function load_debug() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 Debug...</h1>";
    LoadedMSG="Ps4 Debug 已加载 请等待 左上角, 出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_ps4debug.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    loader=document.getElementById('loader').value=="def"? "mira": document.getElementById('loader').value;
    let loaderjs=document.createElement('script');
    loaderjs.src="./pl/"+loader+"_loader.js";
    document.getElementsByTagName('head')[0].appendChild(loaderjs);
    let binload=document.createElement('script');binload.src="./pl/"+get_ver()+"_loader.js";
    setTimeout(function(){document.getElementsByTagName('head')[0].appendChild(binload);},500);
}

function load_historyblock() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载禁用历史记录...</h1>";

    LoadedMSG="禁用历史记录已加载 请等待 左上角, 出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_historyBlocker.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    loader=document.getElementById('loader').value=="def"? "mira": document.getElementById('loader').value;
    let loaderjs=document.createElement('script');
    loaderjs.src="./pl/"+loader+"_loader.js";
    document.getElementsByTagName('head')[0].appendChild(loaderjs);
    let binload=document.createElement('script');binload.src="./pl/"+get_ver()+"_loader.js";
    setTimeout(function(){document.getElementsByTagName('head')[0].appendChild(binload);},500);
}

function load_updatesdisable() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载  屏蔽更新...</h1>";

    LoadedMSG="  屏蔽更新已加载 请等待 左上角, 出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_updatesDisable.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    loader=document.getElementById('loader').value=="def"? "mira": document.getElementById('loader').value;
    let loaderjs=document.createElement('script');
    loaderjs.src="./pl/"+loader+"_loader.js";
    document.getElementsByTagName('head')[0].appendChild(loaderjs);
    let binload=document.createElement('script');binload.src="./pl/"+get_ver()+"_loader.js";
    setTimeout(function(){document.getElementsByTagName('head')[0].appendChild(binload);},500);
}

function load_updatesenable() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 开启更新...</h1>";

    LoadedMSG=" 开启更新已加载 请等待 左上角, 出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_updatesEnable.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    loader=document.getElementById('loader').value=="def"? "mira": document.getElementById('loader').value;
    let loaderjs=document.createElement('script');
    loaderjs.src="./pl/"+loader+"_loader.js";
    document.getElementsByTagName('head')[0].appendChild(loaderjs);
    let binload=document.createElement('script');binload.src="./pl/"+get_ver()+"_loader.js";
    setTimeout(function(){document.getElementsByTagName('head')[0].appendChild(binload);},500);
}

function load_dbbackup() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 存档备份 ...</h1>";

    LoadedMSG=" 存档备份 已加载 请等待 左上角, 出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./pl/pl_dbBackup.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    loader=document.getElementById('loader').value=="def"? "mira": document.getElementById('loader').value;
    let loaderjs=document.createElement('script');
    loaderjs.src="./pl/"+loader+"_loader.js";
    document.getElementsByTagName('head')[0].appendChild(loaderjs);
    let binload=document.createElement('script');binload.src="./pl/"+get_ver()+"_loader.js";
    setTimeout(function(){document.getElementsByTagName('head')[0].appendChild(binload);},500);
}

function load_dbrestore() {
    msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'> 正在加载 存档恢复 ...</h1>";

    LoadedMSG=" 存档恢复 已加载 请等待 左上角, 出现2次 以上 跳窗并等待跳窗结束再操作";
    let script=document.createElement('script');
    script.src="./payloadspl_dbRestore.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    loader=document.getElementById('loader').value=="def"? "mira": document.getElementById('loader').value;
    let loaderjs=document.createElement('script');
    loaderjs.src="./pl/"+loader+"_loader.js";
    document.getElementsByTagName('head')[0].appendChild(loaderjs);
    let binload=document.createElement('script');binload.src="./pl/"+get_ver()+"_loader.js";
    setTimeout(function(){document.getElementsByTagName('head')[0].appendChild(binload);},500);
}

