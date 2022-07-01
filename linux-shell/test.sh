
###
 # @Author: TerryMin
 # @Date: 2022-06-26 08:45:26
 # @LastEditors: TerryMin
 # @LastEditTime: 2022-06-29 10:10:04
 # @Description: shell脚本执行 sh shellFileName.sh
### 

#!/bin/bash

source ./test2.sh
echo "另一个文件地址：$url"


# demoFun(){
#   echo "这是我的第一个 shell 函数"
# }
# echo "---函数开始执行---"
# demoFun
# echo "---函数执行完毕---"

# a=10
# b=20
# c=`expr ${a} + ${b}`
# c2=$[`expr 10 + 20`]
# c3=$[10 + 20]
# echo $c $c2 $c3

# a=10
# b=10
# if [ $a == $b ]
# then 
#   echo "a 等于 b"
# elif [ $a -gt $b ]
# then
#    echo "a 大于 b"
# elif [ $a -lt $b ]
# then 
#    echo "a 小于 b"
# else
#    echo "没有符合的条件"
# fi

# num1=$[2*3]
# num2=$[1+5]
# if test $[num1] -eq $[num2]
# then 
#   echo '两个数相等'
# else
#   echo '两个数不相等'
# fi