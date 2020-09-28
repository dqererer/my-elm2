//符串abcdABCD   怎么转换为 ABCDabcd

var fn = function(str){
  var arr = str.split('');
  arr.forEach((item)=>{
    item.toUperCase();
  })
}

//字符串顺序反转

var fn =  function(str){
  var arr = str.split('');
  arr.reverse();
  arr.join('');
}

//['a', 'b'], [1, 2, 3] => ['a', 1, 'b', 2, 3]

var a = [1, 5];
var b = [2, 5, 6, 8];
a.concat(b).sort((a,b))

var fn =  function(arr1,arr2){
  var arr3 = [...arr1,...arr2];
  arr.sort(function(a,b){
    return a-b;
  });
  return arr3;
}
// 一堆数字字符串组成最大数是多少[50, 2, 5, 9] => 95502


var fn = function(arr){
  // var num;
  arr.sort(); //9,5,50,2
  arr.sort((a,b)=>{
    if()
    return b-a
  })
  arr.reverse();
  var str = arr.join('');
  console.log(str);
  // return num;
}
// 49 4
//494、449
//40 4

//404 440

//对一个数组去重 [1,2,32,3,2,3,23,2,3]，多写几种方法
  var fn =  function(arr){
    var arr_new = [];
    arr.forEach((item)=>{
      if(arr_new.indexOf(item) == -1){
        arr_new.push(item);
      }
    })
    return arr_new;  
  }
  var fn =  function(arr){
    var arr_new = new Set(arr);
    return [...arr_new];  
  }

  var fn = function(arr){
    arr.sort((a,b)=>{
      return a-b;
    })   //[1,2,2,2,3,3,3,23,32]
    arr.filter(function(item){})
  }

  //0.  数组中所有值进行求和 [1,2,3,4]
  var fn = function(arr){
    var sum = 0;
    arr.forEach(item=>{
      sum += item;
    })
    return sum;
  }

  arr = [1,2,3,4];
  arr.reduce(function(tt, current, index, array){
    return tt + current;
  }, 0)

 // 0.  对一个对象深拷贝，多写几种方法
  var obj = {
    a: {
      a11:{
        a22:"a22"
      },
      a12:'a12',
    },
    b: {
      b1:"b1",
      b2:{
        b21:{
          b211:"b211",
        }
      }
    }
  }
  
  var fn = function(obj){
    var obj_new = {};

    function fn2(obj){
      for(let key in obj){
        if(obj[key] != 'object'){
          obj_new[key] = obj[key];
        }else{
          return fn2(obj[key]);
        }
      }
    }   
    fn2(obj); 
    return obj_new
  }

  
  var fn = function(obj){
    var obj_new = {};
    for(let key in obj){
      if(obj[key] != 'object'){
        obj_new[key] = obj[key];
      }else{
        obj_new[key] = fn(obj[key]);
      }
    }
    return obj_new; 
  }



var fn =  function(obj){
  var str = JSON.stringify(obj);
  var obj_new = JSON.parse(str);
  return obj_new;
}


 // 0.  写一个函数parseQueryString，把一个url的参数解析为一个对象
 
var fn = function(str){
  //http://baidu.com?a=a&b=b#sdfsdf
  var obj = {};
  var arr = str.split('://');
  obj.xieyi = arr[0];
  // arr_url[1]:baidu.com?a='a'&b='b'
  var arr_url = arr[1].split('?');
  obj.domain = arr_url[0];
  var arr_param = arr_url[1].split('&'); //[a='a'][b='b'] 
  arr_param.forEach(item=>{
    var param = item.split("=");
    obj.params[param[0]] = param[1];
  }) 
  return obj; 
}


//[2,3,2,2,34,1];
var fn = function(arr){
  var obj = {};
  var max = 0;
  var max_num = 0
  arr.forEach((item,index,array)=>{
    if(!obj[item]){
      obj[item] = 1;
    }else{
      obj[item]++;
    }
  })
  for(var key in obj){
    if(obj[key] > max){
      max = obj[key];
      max_mum  = key;
    }
  } 
  return "chux"+max+""+max_num; 
}