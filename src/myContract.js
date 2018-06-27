"use strict";


var Records = function(){
   LocalContractStorage.defineMapProperty(this, "data");
   LocalContractStorage.defineProperty(this, "size");
}


var Record = function(_id,srcs,time,address = '',extend){
    this._id = _id;
    this.address = address;
    this.srcs = srcs;
    this.time = time;
    this.extend = extend;
}


Record.prototype.toString = function(){
    return JSON.stringify(this);
};


Records.prototype = {
    init: function () {
        this.size = 1;
    },
    set: function (srcs,time,address = '',extend = '') {
        var index= this.size;
        var value = new Record(index,srcs,time,address,extend);
        this.data.set(index,value);
        this.size += 1;
        // var value = new ConfessionItem(this.size,from,to,content,pubTime);
        // var index = this.size;
        // this.data.set(index, value);
        // this.size +=1;
    },
    get: function (index) {
        return this.data.get(index);
    },
    len:function(){
      return this.size;
    },
    forEach: function(limit, offset){
        limit = parseInt(limit);
        offset = parseInt(offset);
        if(offset>this.size){
           throw new Error("offset is not valid");
        }
        var number = offset+limit;
        if(number > this.size){
          number = this.size;
        }
        var result  = [];
        for(var i=offset;i<number;i++){
            var val = this.data.get(i);
            val && result.push(val);
        }
        return result;
    },
    getAll:function(){
        return this.forEach(this.size,0);
    },
    getSize:function(){
        return this.size;
    },
    del:function(index){
        return this.data.del(index);
    }
};



module.exports = Records;
