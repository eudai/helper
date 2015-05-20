
function get(url,data,options){
  var request = new XMLHttpRequest();
  var callback;
  if (typeof data == 'function'){ callback = data; data = null; }
  if (typeof options == 'function'){ callback = options; options = null; }
  if (callback){
    request.onreadystatechange = function(event){
      var request = event.currentTarget;
      if (request.status == 200 && request.readyState == 4){
        callback(request.response);
      }
    };
  }
  for (var key in options){
    request[key] = options[key];
  }
  request.open("GET",url,true);
  request.send(data);
  return request;
}

function post(url,data,options){
  var request = new XMLHttpRequest();
  var callback;
  if (typeof data == 'function'){ callback = data; data = null; }
  if (typeof options == 'function'){ callback = options; options = null; }
  if (callback){
    request.onreadystatechange = function(event){
      var request = event.currentTarget;
      if (request.status == 200 && request.readyState == 4){
        callback(request.response);
      }
    };
  }
  for (var key in options){
    request[key] = options[key];
  }
  request.open("POST",url,true);
  request.send(data);
  return request;
}

function ws(url,protocol,options){
  if (!options && protocol.constructor == 'object'){ 
    options = protocol; 
    protocol = null; 
  }
  var socket = new WebSocket(url, protocol);
  for (var key in options){
    socket[key] = options[key];
  }
  return socket;
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
    if (element[key] !== null){
      element[key] = options[key];
    } else {
      element.setAttribute(key,options[key]);
    }
  }
  return element;
}

Element.prototype.find = function(selector){
  return this.querySelector(selector);
};

Element.prototype.all = function(selector){
  return this.querySelectorAll(selector);
};

Element.prototype.create = function(type,options){
  var element = document.createElement(type);
  for (var key in options){
    if (element[key] !== null){
      element[key] = options[key];  
    } else {
      element.setAttribute(key,options[key]);
    }
  }
  this.appendChild(element);
  return element;
};

Element.prototype.hasClass = function(string){
  return this.className.indexOf(string) > -1;
};

Element.prototype.addClass = function(string){
  if (!this.hasClass(string)){
    this.className = (this.className + ' ' + string).trim();
  }
  return this;
};

Element.prototype.removeClass = function(string){
  this.className = this.className.replace(string,'').trim();
  return this;
};

Element.prototype.toggleClass = function(string){
  if (this.hasClass(string)){
    this.removeClass(string);
  } else {
    this.addClass(string);
  }
  return this;
};

Element.prototype.append = function(element){
  this.appendChild(element);
  return this;
};

Element.prototype.prepend = function(element){
  this.insertBefore(element,this.firstChild);
  return this;
};

Element.prototype.replaceWith = function(element){
  this.parentNode.replaceChild(element,this);
  return element;
};

Element.prototype.empty = function(){
  while (this.hasChildNodes()){
    this.removeChild(this.lastChild);
  }
  return this;
};

NodeList.prototype.forEach = function(callback){
  for (var i in this){
    if (this[i].nodeName){
      callback(this[i]);
    }
  }
  return this;
};

NodeList.prototype.select = function(callback){
  var matches = [];
  for (var i in this){
    if (this[i].nodeName){
      if (callback(this[i])){
        matches.push(this[i]);
      }
    }
  }
  return matches;
};


