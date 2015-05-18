

function get(url,data,callback){
  if (!callback && typeof data == 'function'){
    callback = data;
    data = null;
  }
  var request = new XMLHttpRequest();
  request.onreadystatechange = callback;
  request.open("GET",url,true);
  request.send(data);
  return request;
}

function post(url,data,callback){
  if (!callback && typeof data == 'function'){
    callback = data;
    data = null;
  }
  var request = new XMLHttpRequest();
  request.onreadystatechange = callback;
  request.open("POST",url,true);
  request.send(data);
  return request;
}

function find(selector){
  return document.querySelector(selector);
}

function all(selector){
  return document.querySelectorAll(selector);
}

function create(type,options){
  var element = document.createElement(type);
  for (var key in options){
    element[key] = options[key];
  }
  return element;
}

Element.prototype.find = function(selector){
  return document.querySelector(selector);
};

Element.prototype.all = function(selector){
  return document.querySelectorAll(selector);
};

Element.prototype.create = function(type,options){
  var element = document.createElement(type);
  for (var key in options){
    element[key] = options[key];
  }
  this.appendChild(element);
  return this;
};

Element.prototype.hasClass = function(string){
  return this.className.indexOf(string) > -1;
};

Element.prototype.addClass = function(string){
  this.className = this.className.split(' ').push(string).join(' ');
};

Element.prototype.removeClass = function(string){
  var classList = this.className.split(' ');
  this.className = classList.splice(classList.indexOf(string),1).join(' ');  
};

Element.prototype.toggleClass = function(string){
  if (this.hasClass(string)){
    this.removeClass(string);
  } else {
    this.addClass(string);
  }
};

Element.prototype.append = function(element){
  this.appendChild(element);
};

Element.prototype.prepend = function(element){
  this.insertBefore(element,this.firstChild);
};


String.prototype.include = function(string){
  return this.indexOf(string) > -1;
};

Array.prototype.include = function(){
  return this.indexOf(string) > -1;
};

Array.prototype.first = function(){
  return this[0];
};

Array.prototype.last = function(){
  return this[this.length - 1];
};

Array.prototype.each = function(callback){
  for (var i in this){
    callback(this[i]);
  }
};

Array.prototype.select = function(callback){
  var array = [];
  for (var i in this){
    if (callback(this[i])){
      array.push(this[i]);
    }
  }
  return array;
};



