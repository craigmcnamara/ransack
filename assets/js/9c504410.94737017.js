"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5600],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5777:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:1,title:"Associations"},c=void 0,l={unversionedId:"going-further/associations",id:"going-further/associations",title:"Associations",description:"Associations",source:"@site/docs/going-further/associations.md",sourceDirName:"going-further",slug:"/going-further/associations",permalink:"/ransack/going-further/associations",editUrl:"https://github.com/activerecord-hackery/ransack/edit/main/docs/docs/going-further/associations.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Associations"},sidebar:"tutorialSidebar",previous:{title:"Using Predicates",permalink:"/ransack/getting-started/using-predicates"},next:{title:"Custom predicates",permalink:"/ransack/going-further/custom-predicates"}},p={},u=[{value:"Associations",id:"associations",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"associations"},"Associations"),(0,o.kt)("p",null,"You can easily use Ransack to search for objects in ",(0,o.kt)("inlineCode",{parentName:"p"},"has_many")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"belongs_to"),"\nassociations."),(0,o.kt)("p",null,"Given these associations..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"class Employee < ActiveRecord::Base\n  belongs_to :supervisor\n\n  # has attributes first_name:string and last_name:string\nend\n\nclass Department < ActiveRecord::Base\n  has_many :supervisors\n\n  # has attribute title:string\nend\n\nclass Supervisor < ActiveRecord::Base\n  belongs_to :department\n  has_many :employees\n\n  # has attribute last_name:string\nend\n")),(0,o.kt)("p",null,"... and a controller..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"class SupervisorsController < ApplicationController\n  def index\n    @q = Supervisor.ransack(params[:q])\n    @supervisors = @q.result.includes(:department, :employees)\n  end\nend\n")),(0,o.kt)("p",null,"... you might set up your form like this..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-erb"},'<%= search_form_for @q do |f| %>\n  <%= f.label :last_name_cont %>\n  <%= f.search_field :last_name_cont %>\n\n  <%= f.label :department_title_cont %>\n  <%= f.search_field :department_title_cont %>\n\n  <%= f.label :employees_first_name_or_employees_last_name_cont %>\n  <%= f.search_field :employees_first_name_or_employees_last_name_cont %>\n\n  <%= f.submit "search" %>\n<% end %>\n...\n<%= content_tag :table do %>\n  <%= content_tag :th, sort_link(@q, :last_name) %>\n  <%= content_tag :th, sort_link(@q, :department_title) %>\n  <%= content_tag :th, sort_link(@q, :employees_last_name) %>\n<% end %>\n')),(0,o.kt)("p",null,"If you have trouble sorting on associations, try using an SQL string with the\npluralized table (",(0,o.kt)("inlineCode",{parentName:"p"},"'departments.title'"),",",(0,o.kt)("inlineCode",{parentName:"p"},"'employees.last_name'"),") instead of the\nsymbolized association (",(0,o.kt)("inlineCode",{parentName:"p"},":department_title)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},":employees_last_name"),")."))}d.isMDXComponent=!0}}]);