(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{39:function(e,t,n){e.exports=n(85)},44:function(e,t,n){},45:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(7),r=n.n(c),l=(n(44),n(3)),i=n(38),d=n(32),s=n(33),u=[{projectName:"Programming",todos:[{content:"Learn Hooks",isCompleted:!0},{content:"Style the app",isCompleted:!0},{content:"Migrate to TypeScript",isCompleted:!1},{content:"Create tests",isCompleted:!0}]},{projectName:"Chores",todos:[{content:"Clean Keyboard",isCompleted:!0},{content:"Walk Dog",isCompleted:!1},{content:"Do dishes",isCompleted:!1}]},{projectName:"Groceries",todos:[{content:"1kg Carrots",isCompleted:!1},{content:"2 Cauliflowers",isCompleted:!1},{content:"1kg Button Mushrooms",isCompleted:!1}]}],m=function(){function e(){Object(d.a)(this,e),null===localStorage.getItem("todosData")?this.todos=u:this.todos=JSON.parse(localStorage.getItem("todosData"))}return Object(s.a)(e,[{key:"getTodos",value:function(){return this.todos}},{key:"updateTodos",value:function(e){this.todos=e,this.updateLocalStorage()}},{key:"updateLocalStorage",value:function(){localStorage.setItem("todosData",JSON.stringify(this.todos))}},{key:"clearLocalStorage",value:function(){localStorage.clear()}}]),e}(),p=(n(45),n(10));function f(e){var t=e.todo,n=e.projectIndex,o=e.todoIndex,c=e.setCloseButton,r=e.handleInputChange,l=e.handleInputKeyDown,i=e.toggleTodoCompleteAtIndex,d=e.handleRemoveCommand;return a.a.createElement("div",{className:"todo ".concat(t.isCompleted&&"todo-is-completed"),onMouseEnter:function(){return c(!0,n,o)},onMouseLeave:function(){return c(!1,n,o)}},a.a.createElement("div",{className:"checkbox",onClick:function(){return i(n,o)}},t.isCompleted&&a.a.createElement("span",null,"\u2714")),a.a.createElement("input",{id:"".concat(n,"-").concat(o),type:"text",value:t.content,onChange:function(e){return r(e,n,o)},onKeyDown:function(e){return l(e,n,o)}}),a.a.createElement("button",{type:"button",className:"close",onClick:function(){return d(n,o)}},"X"))}function g(e){var t=e.projectIndex,n=e.provided,o=e.project,c=e.handleInputChange,r=e.handleInputKeyDown,l=e.setCloseButton,i=e.toggleTodoCompleteAtIndex,d=e.handleRemoveCommand;return a.a.createElement("div",Object.assign({className:"todo-category",key:t},n.draggableProps,{ref:n.innerRef}),a.a.createElement("span",Object.assign({className:"drag-handle"},n.dragHandleProps),"\u2261"),a.a.createElement("input",{className:"category-header",type:"text",value:o.projectName,onChange:function(e){return c(e,t)},onKeyDown:function(e){return r(e,t)}}),a.a.createElement("ul",null,o.todos.map((function(e,n){return a.a.createElement("li",{key:n},a.a.createElement(f,{todo:e,projectIndex:t,todoIndex:n,setCloseButton:l,handleInputChange:c,handleInputKeyDown:r,toggleTodoCompleteAtIndex:i,handleRemoveCommand:d}))}))))}var h=new m;var C=function(){var e=Object(o.useState)((function(){return h.getTodos()})),t=Object(i.a)(e,2),n=t[0],c=t[1];function r(e){h.updateTodos(e),c(e)}function d(e,t,o){var a=Object(l.a)(n);"undefined"!==typeof o?a[t].todos[o].content=e.target.value:a[t].projectName=e.target.value,r(a)}function s(e,t,o){if("Enter"===e.key){var a=Object(l.a)(n);"undefined"!==typeof o?(a[t].todos.splice(o+1,0,{content:"",isCompleted:!1}),setTimeout((function(){document.getElementById("".concat(t,"-").concat(o+1)).focus()}),0)):(a[t].todos.splice(0,0,{content:"",isCompleted:!1}),setTimeout((function(){document.getElementById("".concat(t,"-0")).focus()}),0)),r(a)}}function u(e,t){var o=Object(l.a)(n);o[e].todos.splice(t,1),r(o)}function m(e,t){var o=Object(l.a)(n);o[e].todos[t].isCompleted=!o[e].todos[t].isCompleted,r(o)}function f(e,t,n){document.getElementById("".concat(t,"-").concat(n)).nextSibling.style.display=e?"block":"none"}function C(e){var t=document.getElementById("trash");t.style.opacity=e?"1":"0"}return a.a.createElement("div",{className:"app"},a.a.createElement("div",{className:"header"},a.a.createElement("h2",null,"React Todo App"),a.a.createElement("div",{className:"buttons"},a.a.createElement("button",{onClick:function(){return function(){var e=Object(l.a)(n);n.forEach((function(e){e.todos=e.todos.filter((function(e){return!e.isCompleted}))})),r(e)}()}},"Remove Completed"),a.a.createElement("button",{onClick:function(){return function(){var e=Object(l.a)(n);e.splice(0,0,{projectName:"",todos:[{content:"",isCompleted:!1}]}),r(e)}()}},"Add new project"),a.a.createElement("button",{onClick:function(){return h.clearLocalStorage(),void window.location.reload()}},"Clear Local Storage"))),a.a.createElement(p.a,{onDragEnd:function(e){var t=e.destination,o=e.source,a=Object(l.a)(n);if(C(!1),t)return"trash"===t.droppableId?(a.splice(parseInt(o.index.toString()),1),void r(a)):void(t.index!==o.index&&(a.splice(parseInt(o.index.toString()),1),a.splice(t.index,0,n[o.index]),r(a)))},onDragStart:function(){return C(!0)}},a.a.createElement(p.c,{droppableId:"trash"},(function(e,t){return a.a.createElement("div",Object.assign({className:"trash ".concat(t.isDraggingOver?"active":""),ref:e.innerRef},e.droppableProps,{id:"trash"}),"DELETE",a.a.createElement("div",{style:{display:"none"}},e.placeholder))})),a.a.createElement(p.c,{droppableId:"todo-list"},(function(e){return a.a.createElement("form",Object.assign({className:"todo-list",ref:e.innerRef},e.droppableProps),a.a.createElement("ul",null,n.map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement(p.b,{draggableId:t.toString(),index:t},(function(n){return a.a.createElement(g,{projectIndex:t,provided:n,project:e,handleInputChange:d,handleInputKeyDown:s,setCloseButton:f,toggleTodoCompleteAtIndex:m,handleRemoveCommand:u})})))}))))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.fcf4fa13.chunk.js.map