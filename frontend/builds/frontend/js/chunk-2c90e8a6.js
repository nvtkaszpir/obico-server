(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c90e8a6"],{"5d97":function(t,i,e){"use strict";e("6b22")},6018:function(t,i,e){"use strict";e("f955")},"652d":function(t,i,e){},"6b22":function(t,i,e){},9897:function(t,i,e){"use strict";var n=function(){var t=this,i=t._self._c;return i("section",[i("h2",{staticClass:"section-title"},[t._v(t._s(t.notificationChannel.title))]),0===t.envVarsToSet.length?i("div",[t._t("header"),t._t("configuration",(function(){return[t.configVariableName?i("div",{staticClass:"form-group row my-4"},[i("label",{staticClass:"col-12 col-form-label",attrs:{for:"id_"+t.settingKey(t.configVariableName)}},[t._v(" "+t._s(t.configVariableTitle)+" ")]),i("div",{staticClass:"col-12 col-form-label"},[i("saving-animation",{attrs:{errors:t.errorMessages[t.settingKey("config")],saving:t.saving[t.settingKey("config")]}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.configVariable,expression:"configVariable"}],staticClass:"form-control",attrs:{id:"id_"+t.settingKey(t.configVariableName),type:"text",placeholder:t.configVariablePlaceholder},domProps:{value:t.configVariable},on:{input:function(i){i.target.composing||(t.configVariable=i.target.value)}}})])],1)]):t._e()]})),t.channelCreated&&t.showSettings?i("div",[i("notification-setting-switch",{attrs:{"setting-id":"enabled","setting-title":"Enable notification","is-header":!0,"error-messages":t.errorMessages,saving:t.saving,"notification-channel":t.notificationChannel,"bottom-divider":!0},on:{updateNotificationChannel:function(i){return t.$emit("updateNotificationChannel",i)}}}),i("div",{class:{inactive:!t.notificationsEnabled}},[t._t("custom-settings"),t._l(t.notificationSettings,(function(e){return i("div",{key:e.id},["print_job"===e.id?["web"===t.theme?i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-form-label"},[i("saving-animation",{attrs:{errors:[],saving:!1}},[i("div",{staticClass:"custom-control custom-checkbox form-check-inline"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.printerStatusChangeNotifications,expression:"printerStatusChangeNotifications"}],staticClass:"custom-control-input",attrs:{id:"id_"+t.settingKey(e.id),type:"checkbox",disabled:!t.notificationsEnabled},domProps:{checked:Array.isArray(t.printerStatusChangeNotifications)?t._i(t.printerStatusChangeNotifications,null)>-1:t.printerStatusChangeNotifications},on:{change:function(i){var e=t.printerStatusChangeNotifications,n=i.target,a=!!n.checked;if(Array.isArray(e)){var o=null,s=t._i(e,o);n.checked?s<0&&(t.printerStatusChangeNotifications=e.concat([o])):s>-1&&(t.printerStatusChangeNotifications=e.slice(0,s).concat(e.slice(s+1)))}else t.printerStatusChangeNotifications=a}}}),i("label",{staticClass:"custom-control-label",attrs:{for:"id_"+t.settingKey(e.id)}},[t._v(" "+t._s(e.title)+" "),e.description?i("span",{staticClass:"text-muted setting-description"},[i("br"),t._v(t._s(e.description))]):t._e()])])])],1)]):i("div",[i("saving-animation",{attrs:{errors:[],saving:!1}},[i("div",{staticClass:"mobile-setting-item-wrapper"},[i("div",{staticClass:"setting-item-text"},[i("label",{attrs:{for:"id_"+t.settingKey(e.id)}},[t._v(" "+t._s(e.title)+" "),e.description?i("span",{staticClass:"text-muted setting-description"},[i("br"),t._v(t._s(e.description))]):t._e()])]),i("div",{staticClass:"setting-item-switch"},[i("onoff-toggle",{staticClass:"mb-0",attrs:{theme:t.theme,width:"ios"===t.theme?48:30,height:"ios"===t.theme?24:12,"on-color":"ios"===t.theme?"var(--color-primary)":"var(--color-primary-muted)","off-color":"var(--color-divider)","border-color":"var(--color-divider)","thumb-color":"ios"===t.theme?"#fff":"var(--color-primary)",disabled:!t.notificationsEnabled},model:{value:t.printerStatusChangeNotifications,callback:function(i){t.printerStatusChangeNotifications=i},expression:"printerStatusChangeNotifications"}})],1)])])],1)]:[i("notification-setting-switch",{attrs:{"setting-id":e.id,"setting-title":e.title,"setting-description":e.description,disabled:!t.notificationsEnabled,"error-messages":t.errorMessages,saving:t.saving,"notification-channel":t.notificationChannel},on:{updateNotificationChannel:function(i){return t.$emit("updateNotificationChannel",i)}}})],e.subcategories?i("div",t._l(e.subcategories,(function(e){return i("notification-setting-switch",{key:t.getKey(e),attrs:{"setting-id":e.id,"setting-title":e.title,"setting-description":e.description,"is-subcategory":!0,disabled:!t.notificationsEnabled,"error-messages":t.errorMessages,saving:t.saving,"notification-channel":t.notificationChannel},on:{updateNotificationChannel:function(i){return t.$emit("updateNotificationChannel",i)}}})})),1):t._e()],2)}))],2)],1):t._e(),t._t("footer")],2):i("div",[i("p",{staticClass:"text-warning"},[t._v('Please configure the following variables in the ".env" file:')]),i("ul",{staticClass:"text-warning"},t._l(t.envVarsToSet,(function(e){return i("li",{key:e},[t._v(t._s(e))])})),0)])])},a=[],o=(e("14d9"),e("847e")),s=function(){var t=this,i=t._self._c;return"web"===t.theme?i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-form-label",class:{"pl-5":t.isSubcategory}},[i("saving-animation",{attrs:{errors:t.errorMessages?t.errorMessages[t.settingKey(t.settingId)]:[],saving:!!t.saving&&t.saving[t.settingKey(t.settingId)]}},[i("div",{staticClass:"custom-control custom-checkbox form-check-inline"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"custom-control-input",attrs:{id:"id_"+t.settingKey(t.settingId),type:"checkbox",disabled:t.disabled},domProps:{checked:Array.isArray(t.value)?t._i(t.value,null)>-1:t.value},on:{change:function(i){var e=t.value,n=i.target,a=!!n.checked;if(Array.isArray(e)){var o=null,s=t._i(e,o);n.checked?s<0&&(t.value=e.concat([o])):s>-1&&(t.value=e.slice(0,s).concat(e.slice(s+1)))}else t.value=a}}}),i("label",{class:["custom-control-label",t.labelClass],attrs:{for:"id_"+t.settingKey(t.settingId)}},[t._v(" "+t._s(t.settingTitle)+" "),t.settingDescription?i("span",{staticClass:"text-muted setting-description"},[i("br"),t._v(t._s(t.settingDescription))]):t._e()])])])],1),t.bottomDivider?i("div",{staticClass:"col-12"},[i("hr",{staticClass:"my-1"})]):t._e()]):i("div",[i("saving-animation",{attrs:{errors:t.errorMessages?t.errorMessages[t.settingKey(t.settingId)]:[],saving:!!t.saving&&t.saving[t.settingKey(t.settingId)]}},[i("div",{staticClass:"mobile-setting-item-wrapper",class:{"is-subcategory":t.isSubcategory}},[i("div",{staticClass:"setting-item-text"},[i("label",{class:t.labelClass,attrs:{for:"id_"+t.settingKey(t.settingId)}},[t._v(" "+t._s(t.settingTitle)+" "),t.settingDescription?i("span",{staticClass:"text-muted setting-description"},[i("br"),t._v(t._s(t.settingDescription))]):t._e()])]),i("div",{staticClass:"setting-item-switch"},[i("onoff-toggle",{staticClass:"mb-0",attrs:{theme:t.theme,width:"ios"===t.theme?48:30,height:"ios"===t.theme?24:12,"on-color":"ios"===t.theme?"var(--color-primary)":"var(--color-primary-muted)","off-color":"var(--color-divider)","border-color":"var(--color-divider)","thumb-color":"ios"===t.theme?"#fff":"var(--color-primary)",disabled:t.disabled},model:{value:t.value,callback:function(i){t.value=i},expression:"value"}})],1)])])],1)},r=[],c=e("b279"),l=e("1c9d"),d={name:"NotificationSettingSwitch",components:{SavingAnimation:o["a"]},props:{errorMessages:{type:Object||null,default:null},saving:{type:Object||null,default:null},notificationChannel:{type:Object,required:!0},settingId:{type:String,required:!0},settingTitle:{type:String,required:!0},settingDescription:{type:String,default:""},isSubcategory:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},bottomDivider:{type:Boolean,default:!1},isHeader:{type:Boolean,default:!1}},data(){return{value:this.notificationChannel.channelInfo[this.settingId]}},computed:{theme(){const t=Object(l["b"])();return t?"ios"===t?"ios":"material":"web"},labelClass(){return this.isHeader?"lg":""}},watch:{value:function(t,i){this.$emit("updateNotificationChannel",{section:this.notificationChannel,propNames:[this.settingId],propValues:[t]})}},methods:{settingKey(t){return Object(c["f"])(this.notificationChannel,t)}}},f=d,u=(e("edc1"),e("2877")),h=Object(u["a"])(f,s,r,!1,null,"260ae3fa",null),g=h.exports,m=[{id:"notify_on_failure_alert",title:"Failure alerts",description:"When possible failures are detected"},{id:"print_job",title:"Print job events",description:"Upon start/end/cancellation of a print job",subcategories:[{id:"notify_on_print_done",title:"When print is done",enabledByDefault:!0},{id:"notify_on_print_cancelled",title:"When print is cancelled",enabledByDefault:!1},{id:"notify_on_filament_change",title:"When printer needs attention",description:"Such as filament change or run-out",enabledByDefault:!0},{id:"notify_on_other_print_events",title:"When other event happens",description:"Such as start, pause, and resume",enabledByDefault:!1}]},{id:"notify_on_heater_status",title:"Heater status change",description:"Heater reached target or cooled down"}],p={name:"NotificationChannelTemplate",components:{SavingAnimation:o["a"],NotificationSettingSwitch:g},props:{errorMessages:{type:Object,required:!0},saving:{type:Object,required:!0},notificationChannel:{type:Object,required:!0},notificationSettings:{type:Array,default:()=>m},showSettings:{type:Boolean,default:!0},configVariableTitle:{type:String,default:""},configVariablePlaceholder:{type:String,default:""},configVariableName:{type:String,default:""}},data(){return{configVariable:null,configUpdateTimeout:null}},computed:{channelCreated(){return!!this.notificationChannel.channelInfo},notificationsEnabled(){return!!this.notificationChannel.channelInfo&&this.notificationChannel.channelInfo.enabled},envVarsToSet(){var t;const i=(null===(t=this.notificationChannel.pluginInfo)||void 0===t?void 0:t.env_vars)||{};let e=[];for(const[n,a]of Object.entries(i))a.is_required&&!a.is_set&&e.push(n);return e},printerStatusChangeNotifications:{get:function(){if(!this.notificationChannel.channelInfo)return null;const t=this.notificationSettings.find(t=>"print_job"===t.id).subcategories;for(const i of t)if(this.notificationChannel.channelInfo[i.id])return!0;return!1},set:function(t){if(t){const t=this.notificationSettings.find(t=>"print_job"===t.id).subcategories;let i=[],e=[];for(const n of t)n.enabledByDefault&&(i.push(n.id),e.push(!0));i.length&&this.$emit("updateNotificationChannel",{section:this.notificationChannel,propNames:i,propValues:e})}else{const t=this.notificationSettings.find(t=>"print_job"===t.id).subcategories;let i=[],e=[];for(const n of t)this.notificationChannel.channelInfo[n.id]&&(i.push(n.id),e.push(!1));i.length&&this.$emit("updateNotificationChannel",{section:this.notificationChannel,propNames:i,propValues:e})}}},theme(){const t=Object(l["b"])();return t?"ios"===t?"ios":"material":"web"}},watch:{configVariable(t,i){null!==i&&(this.$emit("clearErrorMessages",this.settingKey("config")),this.updateConfig())}},created(){this.notificationChannel.channelInfo&&this.notificationChannel.channelInfo.config&&this.configVariableName?this.configVariable=this.notificationChannel.channelInfo.config[this.configVariableName]:this.configVariable=""},methods:{getKey(t){return`${t.id}_${this.notificationChannel.channelInfo[t.id]}`},settingKey(t){return Object(c["f"])(this.notificationChannel,t)},updateConfig(){this.configUpdateTimeout&&clearTimeout(this.configUpdateTimeout);const t={[this.configVariableName]:this.configVariable};this.channelCreated?this.configUpdateTimeout=setTimeout(()=>{this.configVariable?this.$emit("updateNotificationChannel",{section:this.notificationChannel,propNames:["config"],propValues:[t]}):this.$emit("deleteNotificationChannel",this.notificationChannel)},1e3):this.configVariable&&(this.configUpdateTimeout=setTimeout(()=>this.$emit("createNotificationChannel",{section:this.notificationChannel,config:t}),1e3))}}},v=p,b=(e("5d97"),Object(u["a"])(v,n,a,!1,null,"4931a549",null));i["a"]=b.exports},c308:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t._self._c;return i("notification-channel-template",{ref:"notificationChannelTemplate",attrs:{"error-messages":t.errorMessages,saving:t.saving,"notification-channel":t.notificationChannel},on:{createNotificationChannel:function(i){return t.$emit("createNotificationChannel",i)},updateNotificationChannel:function(i){return t.$emit("updateNotificationChannel",i)},deleteNotificationChannel:i=>t.$emit("deleteNotificationChannel",i),clearErrorMessages:i=>t.$emit("clearErrorMessages",i)},scopedSlots:t._u([{key:"header",fn:function(){return[i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("p",{staticClass:"text-muted mb-1"},[t._v("Notifications are sent to verified email addresses only.")]),i("p",{staticClass:"mb-4"},[i("a",{attrs:{href:"/accounts/email"}},[t._v("Manage email addresses")])])])])]},proxy:!0},{key:"custom-settings",fn:function(){return["web"===t.theme?i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-form-label"},[i("saving-animation",{attrs:{errors:[],saving:!1}},[i("div",{staticClass:"custom-control custom-checkbox form-check-inline"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.accountNotificationByEmail,expression:"accountNotificationByEmail"}],staticClass:"custom-control-input",attrs:{id:"id_account_notification_by_email",type:"checkbox",disabled:!!t.$refs.notificationChannelTemplate&&!t.$refs.notificationChannelTemplate.notificationsEnabled},domProps:{checked:Array.isArray(t.accountNotificationByEmail)?t._i(t.accountNotificationByEmail,null)>-1:t.accountNotificationByEmail},on:{change:function(i){var e=t.accountNotificationByEmail,n=i.target,a=!!n.checked;if(Array.isArray(e)){var o=null,s=t._i(e,o);n.checked?s<0&&(t.accountNotificationByEmail=e.concat([o])):s>-1&&(t.accountNotificationByEmail=e.slice(0,s).concat(e.slice(s+1)))}else t.accountNotificationByEmail=a}}}),i("label",{staticClass:"custom-control-label",attrs:{for:"id_account_notification_by_email"}},[t._v(" Account events "),i("span",{staticClass:"text-muted setting-description"},[i("br"),t._v("Plan changed; AI Detection Hours running low; etc.")])])])])],1)]):i("div",[i("saving-animation",{attrs:{errors:[],saving:!1}},[i("div",{staticClass:"mobile-setting-item-wrapper"},[i("div",{staticClass:"setting-item-text"},[i("label",{attrs:{for:"id_account_notification_by_email"}},[t._v(" Account events "),i("span",{staticClass:"text-muted setting-description"},[i("br"),t._v("Plan changed; AI Detection Hours running low; etc.")])])]),i("div",{staticClass:"setting-item-switch"},[i("onoff-toggle",{staticClass:"mb-0",attrs:{theme:t.theme,width:"ios"===t.theme?48:30,height:"ios"===t.theme?24:12,"on-color":"ios"===t.theme?"var(--color-primary)":"var(--color-primary-muted)","off-color":"var(--color-divider)","border-color":"var(--color-divider)","thumb-color":"ios"===t.theme?"#fff":"var(--color-primary)",disabled:!!t.$refs.notificationChannelTemplate&&!t.$refs.notificationChannelTemplate.notificationsEnabled},model:{value:t.accountNotificationByEmail,callback:function(i){t.accountNotificationByEmail=i},expression:"accountNotificationByEmail"}})],1)])])],1)]},proxy:!0}])})},a=[],o=e("847e"),s=e("9897"),r=e("1c9d"),c={name:"EmailPlugin",components:{SavingAnimation:o["a"],NotificationChannelTemplate:s["a"]},props:{errorMessages:{type:Object,required:!0},saving:{type:Object,required:!0},user:{type:Object,required:!0},notificationChannel:{type:Object,required:!0}},data(){return{accountNotificationByEmail:this.user.account_notification_by_email}},computed:{theme(){const t=Object(r["b"])();return t?"ios"===t?"ios":"material":"web"}},watch:{accountNotificationByEmail:function(t,i){this.$emit("updateNotificationChannel",{section:this.notificationChannel,propNames:[this.settingId],propValues:[t]}),this.$emit("updateSetting","account_notification_by_email",t)}}},l=c,d=(e("6018"),e("2877")),f=Object(d["a"])(l,n,a,!1,null,"13a9f24a",null);i["default"]=f.exports},edc1:function(t,i,e){"use strict";e("652d")},f955:function(t,i,e){}}]);
//# sourceMappingURL=chunk-2c90e8a6.js.map