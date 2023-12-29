###
 # @Author: TerryMin
 # @Date: 2022-06-26 08:45:26
 # @LastEditors: TerryMin
 # @LastEditTime: 2023-06-14 09:44:53
 # @Description: file not
### 

address='shanghai'
echo $address
echo $1
array_name=(1 2 3)
demoFun(){
    echo "这是我的第一个 shell 函数!"
}
echo "-----函数开始执行-----"
demoFun
echo "-----函数执行完毕-----"