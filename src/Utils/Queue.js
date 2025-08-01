export class Queue {
        
    constructor(){
        this.items = [];
    }
    //初始化队列（使用数组实现）

    //向队列（尾部）中插入元素
    Enqueue (element) {
        this.items.push(element);
    }

    //从队列（头部）中弹出一个元素，并返回该元素
    Dequeue () {
        return this.items.shift();
    }

    //查看队列最前面的元素（数组中索引为0的元素）
    GetFront() {
        return this.items[0];
    }

    //查看队列是否为空，如果为空，返回true；否则返回false
    IsEmpty() {
        return this.items.length == 0;
    }

    //查看队列的长度
    GetSize() {
        return this.items.length;
    }

    //查看队列
    Traversing() {
        //以字符串形势返回
        return this.items.toString();
    }
}
