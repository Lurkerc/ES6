/**
 * 字符串尾部补全
 * 接受两个参数，第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串
 */
'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'

// 如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串
'xxx'.padEnd(2, 'ab') // 'xxx'

// 省略第二个参数，默认使用空格补全长度
'x'.padEnd(4) // 'x   '
