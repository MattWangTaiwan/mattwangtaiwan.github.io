var e,t,n,r=$protobuf.Reader,c=$protobuf.Writer,o=$protobuf.util,i=$protobuf.roots.default||($protobuf.roots.default={}),u=((n={}).Internet=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.protocol=0,e.prototype.natAddr="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.protocol&&Object.hasOwnProperty.call(e,"protocol")&&t.uint32(8).uint32(e.protocol),null!=e.natAddr&&Object.hasOwnProperty.call(e,"natAddr")&&t.uint32(18).string(e.natAddr),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.Internet;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.protocol=e.uint32();break;case 2:c.natAddr=e.string();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),n.AccountInfoECls=function(){function e(e){if(this.portal=[],this.contact=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.name="",e.prototype.portal=o.emptyArray,e.prototype.contact=o.emptyArray,e.prototype.country="",e.prototype.city="",e.prototype.address="",e.prototype.desc="",e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=c.create()),null!=e.name&&Object.hasOwnProperty.call(e,"name")&&t.uint32(10).string(e.name),null!=e.portal&&e.portal.length)for(var n=0;n<e.portal.length;++n)t.uint32(18).string(e.portal[n]);if(null!=e.contact&&e.contact.length)for(n=0;n<e.contact.length;++n)i.sr.Contact.encode(e.contact[n],t.uint32(26).fork()).ldelim();return null!=e.country&&Object.hasOwnProperty.call(e,"country")&&t.uint32(34).string(e.country),null!=e.city&&Object.hasOwnProperty.call(e,"city")&&t.uint32(42).string(e.city),null!=e.address&&Object.hasOwnProperty.call(e,"address")&&t.uint32(50).string(e.address),null!=e.desc&&Object.hasOwnProperty.call(e,"desc")&&t.uint32(58).string(e.desc),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.AccountInfoECls;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.name=e.string();break;case 2:c.portal&&c.portal.length||(c.portal=[]),c.portal.push(e.string());break;case 3:c.contact&&c.contact.length||(c.contact=[]),c.contact.push(i.sr.Contact.decode(e,e.uint32()));break;case 4:c.country=e.string();break;case 5:c.city=e.string();break;case 6:c.address=e.string();break;case 7:c.desc=e.string();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),n.AisDeviceECls=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.nvrPort=0,e.prototype.odct0Port=0,e.prototype.odct1Port=0,e.prototype.odct2Port=0,e.prototype.odct3Port=0,e.prototype.nastPort=0,e.prototype.pssSvrId=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.nvrPort&&Object.hasOwnProperty.call(e,"nvrPort")&&t.uint32(8).uint32(e.nvrPort),null!=e.odct0Port&&Object.hasOwnProperty.call(e,"odct0Port")&&t.uint32(16).uint32(e.odct0Port),null!=e.odct1Port&&Object.hasOwnProperty.call(e,"odct1Port")&&t.uint32(24).uint32(e.odct1Port),null!=e.odct2Port&&Object.hasOwnProperty.call(e,"odct2Port")&&t.uint32(32).uint32(e.odct2Port),null!=e.odct3Port&&Object.hasOwnProperty.call(e,"odct3Port")&&t.uint32(40).uint32(e.odct3Port),null!=e.nastPort&&Object.hasOwnProperty.call(e,"nastPort")&&t.uint32(48).uint32(e.nastPort),null!=e.pssSvrId&&Object.hasOwnProperty.call(e,"pssSvrId")&&t.uint32(800).uint32(e.pssSvrId),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.AisDeviceECls;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.nvrPort=e.uint32();break;case 2:c.odct0Port=e.uint32();break;case 3:c.odct1Port=e.uint32();break;case 4:c.odct2Port=e.uint32();break;case 5:c.odct3Port=e.uint32();break;case 6:c.nastPort=e.uint32();break;case 100:c.pssSvrId=e.uint32();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),n.SiteInfoECls=function(){function e(e){if(this.contact=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.name="",e.prototype.internet=null,e.prototype.contact=o.emptyArray,e.prototype.country="",e.prototype.city="",e.prototype.address="",e.prototype.desc="",e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=c.create()),null!=e.name&&Object.hasOwnProperty.call(e,"name")&&t.uint32(10).string(e.name),null!=e.internet&&Object.hasOwnProperty.call(e,"internet")&&i.sr.Internet.encode(e.internet,t.uint32(18).fork()).ldelim(),null!=e.contact&&e.contact.length)for(var n=0;n<e.contact.length;++n)i.sr.Contact.encode(e.contact[n],t.uint32(26).fork()).ldelim();return null!=e.country&&Object.hasOwnProperty.call(e,"country")&&t.uint32(58).string(e.country),null!=e.city&&Object.hasOwnProperty.call(e,"city")&&t.uint32(66).string(e.city),null!=e.address&&Object.hasOwnProperty.call(e,"address")&&t.uint32(74).string(e.address),null!=e.desc&&Object.hasOwnProperty.call(e,"desc")&&t.uint32(98).string(e.desc),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.SiteInfoECls;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.name=e.string();break;case 2:c.internet=i.sr.Internet.decode(e,e.uint32());break;case 3:c.contact&&c.contact.length||(c.contact=[]),c.contact.push(i.sr.Contact.decode(e,e.uint32()));break;case 7:c.country=e.string();break;case 8:c.city=e.string();break;case 9:c.address=e.string();break;case 12:c.desc=e.string();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),n.ServerInfoECls=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.device=null,e.prototype.license=null,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.device&&Object.hasOwnProperty.call(e,"device")&&i.sr.AisDeviceECls.encode(e.device,t.uint32(10).fork()).ldelim(),null!=e.license&&Object.hasOwnProperty.call(e,"license")&&i.sr.LicCertificate.encode(e.license,t.uint32(18).fork()).ldelim(),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.ServerInfoECls;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.device=i.sr.AisDeviceECls.decode(e,e.uint32());break;case 2:c.license=i.sr.LicCertificate.decode(e,e.uint32());break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),n.UserInfoECls=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.name="",e.prototype.company="",e.prototype.icon="",e.prototype.desc="",e.prototype.preference=null,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.name&&Object.hasOwnProperty.call(e,"name")&&t.uint32(10).string(e.name),null!=e.company&&Object.hasOwnProperty.call(e,"company")&&t.uint32(18).string(e.company),null!=e.icon&&Object.hasOwnProperty.call(e,"icon")&&t.uint32(26).string(e.icon),null!=e.desc&&Object.hasOwnProperty.call(e,"desc")&&t.uint32(66).string(e.desc),null!=e.preference&&Object.hasOwnProperty.call(e,"preference")&&i.sr.UserInfoECls.Preference.encode(e.preference,t.uint32(98).fork()).ldelim(),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.UserInfoECls;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.name=e.string();break;case 2:c.company=e.string();break;case 3:c.icon=e.string();break;case 8:c.desc=e.string();break;case 12:c.preference=i.sr.UserInfoECls.Preference.decode(e,e.uint32());break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.Preference=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.viewMode=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.viewMode&&Object.hasOwnProperty.call(e,"viewMode")&&t.uint32(8).uint32(e.viewMode),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.UserInfoECls.Preference;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.viewMode=e.uint32();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),e}(),n.UserAppAcl=function(){function e(e){if(this.acl=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}var t,n;return e.prototype.acl=o.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=c.create()),null!=e.acl&&e.acl.length){t.uint32(10).fork();for(var n=0;n<e.acl.length;++n)t.int32(e.acl[n]);t.ldelim()}return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.UserAppAcl;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:if(c.acl&&c.acl.length||(c.acl=[]),2==(7&o))for(var u=e.uint32()+e.pos;e.pos<u;)c.acl.push(e.int32());else c.acl.push(e.int32());break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.AclItem=(t={},(n=Object.create(t))[t[0]="UNKNOWN"]=0,n[t[1]="ALL_APP"]=1,n[t[11]="VMS_VIDEO_FOCUS"]=11,n[t[12]="VMS_BOOKMARK"]=12,n[t[13]="VMS_VIDEO_TOUR"]=13,n[t[14]="VMS_MAP_BOOK"]=14,n[t[101]="AI_SMART_SEARCH"]=101,n[t[102]="AI_LIVE_FOCUS"]=102,n[t[103]="AI_OBJECT_SEARCH"]=103,n[t[104]="AI_OBJECT_PLAYBACK"]=104,n[t[105]="AI_FACIAL_REKO"]=105,n[t[106]="AI_APPAREL_REKO"]=106,n[t[107]="AI_VEHICLE_REKO"]=107,n[t[108]="AI_HEADWEAR_REKO"]=108,n[t[201]="BI_TREND_INSIGHT"]=201,n[t[202]="BI_STAT_INSIGHT"]=202,n[t[251]="BI_STORE_DASHBOARD"]=251,n[t[252]="BI_TRAFFIC_COUNTER"]=252,n[t[253]="BI_FLOOR_ANALYSIS"]=253,n[t[254]="BI_FITTING_ANALYSIS"]=254,n[t[255]="BI_CHECKOUT_ANALYSIS"]=255,n[t[256]="BI_WINDOW_DISPLAY"]=256,n[t[257]="BI_SCENE_ANALYSIS"]=257,n[t[258]="BI_CUSTOMER_CLUSTER"]=258,n[t[259]="BI_TRASACT_ANALYSIS"]=259,n[t[260]="BI_OPERATION_PREDICTION"]=260,n[t[261]="BI_SHOPPER_STRANDED"]=261,n[t[301]="CFG_CAMERA_DISCOVERY"]=301,n[t[302]="CFG_CAMERA_MANAGER"]=302,n[t[303]="CFG_HDD_FORMATTER"]=303,n[t[304]="CFG_STORAGE_MANAGER"]=304,n[t[305]="CFG_RULE_MANAGER"]=305,n[t[306]="CFG_VIDEO_TOUR"]=306,n[t[307]="CFG_FACIAL_DB_BUILDER"]=307,n[t[308]="CFG_APPAREL_DB_BUILDER"]=308,n[t[309]="CFG_VEHICLE_DB_BUILDER"]=309,n[t[310]="CFG_LICENSE_MANAGER"]=310,n[t[311]="CFG_AI_DESIGNER"]=311,n),e}(),n.MediaProtocol=(e={},(t=Object.create(e))[e[0]="MediaProtocol0"]=0,t[e[1]="WSMP"]=1,t[e[2]="PPMP"]=2,t[e[3]="RTSP"]=3,t),n.SerialFormat=function(){var e={},t=Object.create(e);return t[e[0]="ANY"]=0,t[e[1]="PB_BINARY"]=1,t[e[2]="PB_JSON"]=2,t}(),n.SRMPStandardRequest=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.uri="",e.prototype.format=0,e.prototype.bcontent=o.newBuffer([]),e.prototype.scontent="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.uri&&Object.hasOwnProperty.call(e,"uri")&&t.uint32(10).string(e.uri),null!=e.format&&Object.hasOwnProperty.call(e,"format")&&t.uint32(16).int32(e.format),null!=e.bcontent&&Object.hasOwnProperty.call(e,"bcontent")&&t.uint32(26).bytes(e.bcontent),null!=e.scontent&&Object.hasOwnProperty.call(e,"scontent")&&t.uint32(34).string(e.scontent),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.SRMPStandardRequest;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.uri=e.string();break;case 2:c.format=e.int32();break;case 3:c.bcontent=e.bytes();break;case 4:c.scontent=e.string();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),n.SRMPStandardResponse=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.result=!1,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.result&&Object.hasOwnProperty.call(e,"result")&&t.uint32(8).bool(e.result),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.SRMPStandardResponse;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.result=e.bool();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),n.SRMPSubscribeRequest=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.uri="",e.prototype.format=0,e.prototype.bcontent=o.newBuffer([]),e.prototype.scontent="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.uri&&Object.hasOwnProperty.call(e,"uri")&&t.uint32(10).string(e.uri),null!=e.format&&Object.hasOwnProperty.call(e,"format")&&t.uint32(16).int32(e.format),null!=e.bcontent&&Object.hasOwnProperty.call(e,"bcontent")&&t.uint32(26).bytes(e.bcontent),null!=e.scontent&&Object.hasOwnProperty.call(e,"scontent")&&t.uint32(34).string(e.scontent),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.SRMPSubscribeRequest;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.uri=e.string();break;case 2:c.format=e.int32();break;case 3:c.bcontent=e.bytes();break;case 4:c.scontent=e.string();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),n.SRMPSubscribeResponse=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.result=!1,e.prototype.subId=o.Long?o.Long.fromBits(0,0,!0):0,e.prototype.actId=o.Long?o.Long.fromBits(0,0,!0):0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.result&&Object.hasOwnProperty.call(e,"result")&&t.uint32(8).bool(e.result),null!=e.subId&&Object.hasOwnProperty.call(e,"subId")&&t.uint32(16).uint64(e.subId),null!=e.actId&&Object.hasOwnProperty.call(e,"actId")&&t.uint32(24).uint64(e.actId),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.SRMPSubscribeResponse;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.result=e.bool();break;case 2:c.subId=e.uint64();break;case 3:c.actId=e.uint64();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),n.SRMPCancelRequest=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.uri="",e.prototype.subId=o.Long?o.Long.fromBits(0,0,!0):0,e.prototype.actId=o.Long?o.Long.fromBits(0,0,!0):0,e.prototype.format=0,e.prototype.bcontent=o.newBuffer([]),e.prototype.scontent="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.uri&&Object.hasOwnProperty.call(e,"uri")&&t.uint32(10).string(e.uri),null!=e.subId&&Object.hasOwnProperty.call(e,"subId")&&t.uint32(16).uint64(e.subId),null!=e.actId&&Object.hasOwnProperty.call(e,"actId")&&t.uint32(24).uint64(e.actId),null!=e.format&&Object.hasOwnProperty.call(e,"format")&&t.uint32(32).int32(e.format),null!=e.bcontent&&Object.hasOwnProperty.call(e,"bcontent")&&t.uint32(42).bytes(e.bcontent),null!=e.scontent&&Object.hasOwnProperty.call(e,"scontent")&&t.uint32(50).string(e.scontent),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.SRMPCancelRequest;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.uri=e.string();break;case 2:c.subId=e.uint64();break;case 3:c.actId=e.uint64();break;case 4:c.format=e.int32();break;case 5:c.bcontent=e.bytes();break;case 6:c.scontent=e.string();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),n.SRMPCancelResponse=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.result=!1,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.result&&Object.hasOwnProperty.call(e,"result")&&t.uint32(8).bool(e.result),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.SRMPCancelResponse;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.result=e.bool();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),n.SRMPHeartbeatResponse=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.result=!1,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.result&&Object.hasOwnProperty.call(e,"result")&&t.uint32(8).bool(e.result),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.SRMPHeartbeatResponse;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.result=e.bool();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),n.Contact=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.name="",e.prototype.email="",e.prototype.phone="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.name&&Object.hasOwnProperty.call(e,"name")&&t.uint32(10).string(e.name),null!=e.email&&Object.hasOwnProperty.call(e,"email")&&t.uint32(18).string(e.email),null!=e.phone&&Object.hasOwnProperty.call(e,"phone")&&t.uint32(26).string(e.phone),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.Contact;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.name=e.string();break;case 2:c.email=e.string();break;case 3:c.phone=e.string();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),n.LicAuthType=function(){var e={},t=Object.create(e);return t[e[0]="UNKNOWN"]=0,t[e[1]="RENTAL"]=1,t[e[2]="TURNKEY"]=2,t}(),n.LicHwSpec=function(){function e(e){if(this.gpu=[],this.cpu=[],this.net=[],this.disk=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.system=null,e.prototype.board=null,e.prototype.gpu=o.emptyArray,e.prototype.cpu=o.emptyArray,e.prototype.net=o.emptyArray,e.prototype.disk=o.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=c.create()),null!=e.system&&Object.hasOwnProperty.call(e,"system")&&i.sr.LicHwSpec.System.encode(e.system,t.uint32(10).fork()).ldelim(),null!=e.board&&Object.hasOwnProperty.call(e,"board")&&i.sr.LicHwSpec.Board.encode(e.board,t.uint32(18).fork()).ldelim(),null!=e.gpu&&e.gpu.length)for(var n=0;n<e.gpu.length;++n)i.sr.LicHwSpec.Gpu.encode(e.gpu[n],t.uint32(50).fork()).ldelim();if(null!=e.cpu&&e.cpu.length)for(n=0;n<e.cpu.length;++n)i.sr.LicHwSpec.Cpu.encode(e.cpu[n],t.uint32(58).fork()).ldelim();if(null!=e.net&&e.net.length)for(n=0;n<e.net.length;++n)i.sr.LicHwSpec.Network.encode(e.net[n],t.uint32(66).fork()).ldelim();if(null!=e.disk&&e.disk.length)for(n=0;n<e.disk.length;++n)i.sr.LicHwSpec.Disk.encode(e.disk[n],t.uint32(74).fork()).ldelim();return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.LicHwSpec;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.system=i.sr.LicHwSpec.System.decode(e,e.uint32());break;case 2:c.board=i.sr.LicHwSpec.Board.decode(e,e.uint32());break;case 6:c.gpu&&c.gpu.length||(c.gpu=[]),c.gpu.push(i.sr.LicHwSpec.Gpu.decode(e,e.uint32()));break;case 7:c.cpu&&c.cpu.length||(c.cpu=[]),c.cpu.push(i.sr.LicHwSpec.Cpu.decode(e,e.uint32()));break;case 8:c.net&&c.net.length||(c.net=[]),c.net.push(i.sr.LicHwSpec.Network.decode(e,e.uint32()));break;case 9:c.disk&&c.disk.length||(c.disk=[]),c.disk.push(i.sr.LicHwSpec.Disk.decode(e,e.uint32()));break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.System=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.serial="",e.prototype.product="",e.prototype.vendor="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.serial&&Object.hasOwnProperty.call(e,"serial")&&t.uint32(10).string(e.serial),null!=e.product&&Object.hasOwnProperty.call(e,"product")&&t.uint32(18).string(e.product),null!=e.vendor&&Object.hasOwnProperty.call(e,"vendor")&&t.uint32(26).string(e.vendor),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.LicHwSpec.System;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.serial=e.string();break;case 2:c.product=e.string();break;case 3:c.vendor=e.string();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),e.Board=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.serial="",e.prototype.product="",e.prototype.vendor="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.serial&&Object.hasOwnProperty.call(e,"serial")&&t.uint32(10).string(e.serial),null!=e.product&&Object.hasOwnProperty.call(e,"product")&&t.uint32(18).string(e.product),null!=e.vendor&&Object.hasOwnProperty.call(e,"vendor")&&t.uint32(26).string(e.vendor),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.LicHwSpec.Board;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.serial=e.string();break;case 2:c.product=e.string();break;case 3:c.vendor=e.string();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),e.Gpu=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.serial="",e.prototype.model="",e.prototype.memory=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.serial&&Object.hasOwnProperty.call(e,"serial")&&t.uint32(10).string(e.serial),null!=e.model&&Object.hasOwnProperty.call(e,"model")&&t.uint32(18).string(e.model),null!=e.memory&&Object.hasOwnProperty.call(e,"memory")&&t.uint32(24).uint32(e.memory),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.LicHwSpec.Gpu;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.serial=e.string();break;case 2:c.model=e.string();break;case 3:c.memory=e.uint32();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),e.Cpu=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.model="",e.prototype.core=0,e.prototype.thread=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.model&&Object.hasOwnProperty.call(e,"model")&&t.uint32(10).string(e.model),null!=e.core&&Object.hasOwnProperty.call(e,"core")&&t.uint32(16).uint32(e.core),null!=e.thread&&Object.hasOwnProperty.call(e,"thread")&&t.uint32(24).uint32(e.thread),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.LicHwSpec.Cpu;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.model=e.string();break;case 2:c.core=e.uint32();break;case 3:c.thread=e.uint32();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),e.Network=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.serial="",e.prototype.name="",e.prototype.ip="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.serial&&Object.hasOwnProperty.call(e,"serial")&&t.uint32(10).string(e.serial),null!=e.name&&Object.hasOwnProperty.call(e,"name")&&t.uint32(18).string(e.name),null!=e.ip&&Object.hasOwnProperty.call(e,"ip")&&t.uint32(26).string(e.ip),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.LicHwSpec.Network;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.serial=e.string();break;case 2:c.name=e.string();break;case 3:c.ip=e.string();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),e.Disk=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.serial="",e.prototype.product="",e.prototype.name="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.serial&&Object.hasOwnProperty.call(e,"serial")&&t.uint32(10).string(e.serial),null!=e.product&&Object.hasOwnProperty.call(e,"product")&&t.uint32(18).string(e.product),null!=e.name&&Object.hasOwnProperty.call(e,"name")&&t.uint32(26).string(e.name),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.LicHwSpec.Disk;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.serial=e.string();break;case 2:c.product=e.string();break;case 3:c.name=e.string();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),e}(),n.LicHwID=function(){function e(e){if(this.gpuSerial=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.sysSerial="",e.prototype.gpuSerial=o.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=c.create()),null!=e.sysSerial&&Object.hasOwnProperty.call(e,"sysSerial")&&t.uint32(10).string(e.sysSerial),null!=e.gpuSerial&&e.gpuSerial.length)for(var n=0;n<e.gpuSerial.length;++n)t.uint32(18).string(e.gpuSerial[n]);return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.LicHwID;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.sysSerial=e.string();break;case 2:c.gpuSerial&&c.gpuSerial.length||(c.gpuSerial=[]),c.gpuSerial.push(e.string());break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),n.LicGroup=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.type=0,e.prototype.beginYmd="",e.prototype.endYmd="",e.prototype.number=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.type&&Object.hasOwnProperty.call(e,"type")&&t.uint32(8).uint32(e.type),null!=e.beginYmd&&Object.hasOwnProperty.call(e,"beginYmd")&&t.uint32(18).string(e.beginYmd),null!=e.endYmd&&Object.hasOwnProperty.call(e,"endYmd")&&t.uint32(26).string(e.endYmd),null!=e.number&&Object.hasOwnProperty.call(e,"number")&&t.uint32(32).uint32(e.number),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.LicGroup;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.type=e.uint32();break;case 2:c.beginYmd=e.string();break;case 3:c.endYmd=e.string();break;case 4:c.number=e.uint32();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),n.LicBatch=function(){function e(e){if(this.licGroup=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.licGroup=o.emptyArray,e.prototype.createTime=o.Long?o.Long.fromBits(0,0,!0):0,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=c.create()),null!=e.licGroup&&e.licGroup.length)for(var n=0;n<e.licGroup.length;++n)i.sr.LicGroup.encode(e.licGroup[n],t.uint32(10).fork()).ldelim();return null!=e.createTime&&Object.hasOwnProperty.call(e,"createTime")&&t.uint32(48).uint64(e.createTime),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.LicBatch;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.licGroup&&c.licGroup.length||(c.licGroup=[]),c.licGroup.push(i.sr.LicGroup.decode(e,e.uint32()));break;case 6:c.createTime=e.uint64();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),n.LicRequest=function(){function e(e){if(this.licGroup=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.accountId=0,e.prototype.siteId=0,e.prototype.serverId=0,e.prototype.hwSpec=null,e.prototype.licGroup=o.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=c.create()),null!=e.accountId&&Object.hasOwnProperty.call(e,"accountId")&&t.uint32(8).uint32(e.accountId),null!=e.siteId&&Object.hasOwnProperty.call(e,"siteId")&&t.uint32(16).uint32(e.siteId),null!=e.serverId&&Object.hasOwnProperty.call(e,"serverId")&&t.uint32(24).uint32(e.serverId),null!=e.hwSpec&&Object.hasOwnProperty.call(e,"hwSpec")&&i.sr.LicHwSpec.encode(e.hwSpec,t.uint32(58).fork()).ldelim(),null!=e.licGroup&&e.licGroup.length)for(var n=0;n<e.licGroup.length;++n)i.sr.LicGroup.encode(e.licGroup[n],t.uint32(90).fork()).ldelim();return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.LicRequest;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.accountId=e.uint32();break;case 2:c.siteId=e.uint32();break;case 3:c.serverId=e.uint32();break;case 7:c.hwSpec=i.sr.LicHwSpec.decode(e,e.uint32());break;case 11:c.licGroup&&c.licGroup.length||(c.licGroup=[]),c.licGroup.push(i.sr.LicGroup.decode(e,e.uint32()));break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),n.LicCertificate=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.content=null,e.prototype.signature=o.newBuffer([]),e.prototype.signTime=o.Long?o.Long.fromBits(0,0,!0):0,e.prototype.hwSpec=null,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.content&&Object.hasOwnProperty.call(e,"content")&&i.sr.LicCertificate.Content.encode(e.content,t.uint32(10).fork()).ldelim(),null!=e.signature&&Object.hasOwnProperty.call(e,"signature")&&t.uint32(42).bytes(e.signature),null!=e.signTime&&Object.hasOwnProperty.call(e,"signTime")&&t.uint32(48).uint64(e.signTime),null!=e.hwSpec&&Object.hasOwnProperty.call(e,"hwSpec")&&i.sr.LicHwSpec.encode(e.hwSpec,t.uint32(82).fork()).ldelim(),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.LicCertificate;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.content=i.sr.LicCertificate.Content.decode(e,e.uint32());break;case 5:c.signature=e.bytes();break;case 6:c.signTime=e.uint64();break;case 10:c.hwSpec=i.sr.LicHwSpec.decode(e,e.uint32());break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.Content=function(){function e(e){if(this.licBatch=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.accountId=0,e.prototype.siteId=0,e.prototype.serverId=0,e.prototype.authType=0,e.prototype.hwHash=o.newBuffer([]),e.prototype.licBatch=o.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=c.create()),null!=e.accountId&&Object.hasOwnProperty.call(e,"accountId")&&t.uint32(8).uint32(e.accountId),null!=e.siteId&&Object.hasOwnProperty.call(e,"siteId")&&t.uint32(16).uint32(e.siteId),null!=e.serverId&&Object.hasOwnProperty.call(e,"serverId")&&t.uint32(24).uint32(e.serverId),null!=e.authType&&Object.hasOwnProperty.call(e,"authType")&&t.uint32(32).int32(e.authType),null!=e.hwHash&&Object.hasOwnProperty.call(e,"hwHash")&&t.uint32(58).bytes(e.hwHash),null!=e.licBatch&&e.licBatch.length)for(var n=0;n<e.licBatch.length;++n)i.sr.LicBatch.encode(e.licBatch[n],t.uint32(90).fork()).ldelim();return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.LicCertificate.Content;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.accountId=e.uint32();break;case 2:c.siteId=e.uint32();break;case 3:c.serverId=e.uint32();break;case 4:c.authType=e.int32();break;case 7:c.hwHash=e.bytes();break;case 11:c.licBatch&&c.licBatch.length||(c.licBatch=[]),c.licBatch.push(i.sr.LicBatch.decode(e,e.uint32()));break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),e}(),n.LicServerKey=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.content=null,e.prototype.signature=o.newBuffer([]),e.prototype.signTime=o.Long?o.Long.fromBits(0,0,!0):0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.content&&Object.hasOwnProperty.call(e,"content")&&i.sr.LicServerKey.Content.encode(e.content,t.uint32(10).fork()).ldelim(),null!=e.signature&&Object.hasOwnProperty.call(e,"signature")&&t.uint32(42).bytes(e.signature),null!=e.signTime&&Object.hasOwnProperty.call(e,"signTime")&&t.uint32(48).uint64(e.signTime),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.LicServerKey;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.content=i.sr.LicServerKey.Content.decode(e,e.uint32());break;case 5:c.signature=e.bytes();break;case 6:c.signTime=e.uint64();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e.Content=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.accountId=0,e.prototype.siteId=0,e.prototype.serverId=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=c.create()),null!=e.accountId&&Object.hasOwnProperty.call(e,"accountId")&&t.uint32(8).uint32(e.accountId),null!=e.siteId&&Object.hasOwnProperty.call(e,"siteId")&&t.uint32(16).uint32(e.siteId),null!=e.serverId&&Object.hasOwnProperty.call(e,"serverId")&&t.uint32(24).uint32(e.serverId),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof r||(e=r.create(e));for(var n=void 0===t?e.len:e.pos+t,c=new i.sr.LicServerKey.Content;e.pos<n;){var o=e.uint32();switch(o>>>3){case 1:c.accountId=e.uint32();break;case 2:c.siteId=e.uint32();break;case 3:c.serverId=e.uint32();break;default:e.skipType(7&o)}}return c},e.decodeDelimited=function(e){return e instanceof r||(e=new r(e)),this.decode(e,e.uint32())},e}(),e}(),n);!function e(t,n,r){var c=Object.keys(n);if(!(r>2||0===c.length))for(var o of c){if(t[o])return e(t[o],n[o],r+1);t[o]=n[o]}}(i.sr,u,1);
