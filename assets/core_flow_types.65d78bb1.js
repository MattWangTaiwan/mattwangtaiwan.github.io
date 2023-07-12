var e,t=$protobuf.Reader,n=$protobuf.Writer,r=$protobuf.util,o=$protobuf.roots.default||($protobuf.roots.default={}),a=((e={}).CheckPointParam=function(){function e(e){if(this.object=[],this.line=[],this.polygon=[],this.circle=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}var a,l;return e.prototype.type=0,e.prototype.object=r.emptyArray,e.prototype.line=r.emptyArray,e.prototype.polygon=r.emptyArray,e.prototype.circle=r.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=n.create()),null!=e.type&&Object.hasOwnProperty.call(e,"type")&&t.uint32(8).int32(e.type),null!=e.object&&e.object.length){t.uint32(18).fork();for(var r=0;r<e.object.length;++r)t.uint32(e.object[r]);t.ldelim()}if(null!=e.line&&e.line.length)for(r=0;r<e.line.length;++r)o.sr.CheckPointParam.Line.encode(e.line[r],t.uint32(26).fork()).ldelim();if(null!=e.polygon&&e.polygon.length)for(r=0;r<e.polygon.length;++r)o.sr.CheckPointParam.Polygon.encode(e.polygon[r],t.uint32(34).fork()).ldelim();if(null!=e.circle&&e.circle.length)for(r=0;r<e.circle.length;++r)o.sr.CheckPointParam.Circle.encode(e.circle[r],t.uint32(42).fork()).ldelim();return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,n){e instanceof t||(e=t.create(e));for(var r=void 0===n?e.len:e.pos+n,a=new o.sr.CheckPointParam;e.pos<r;){var l=e.uint32();switch(l>>>3){case 1:a.type=e.int32();break;case 2:if(a.object&&a.object.length||(a.object=[]),2==(7&l))for(var i=e.uint32()+e.pos;e.pos<i;)a.object.push(e.uint32());else a.object.push(e.uint32());break;case 3:a.line&&a.line.length||(a.line=[]),a.line.push(o.sr.CheckPointParam.Line.decode(e,e.uint32()));break;case 4:a.polygon&&a.polygon.length||(a.polygon=[]),a.polygon.push(o.sr.CheckPointParam.Polygon.decode(e,e.uint32()));break;case 5:a.circle&&a.circle.length||(a.circle=[]),a.circle.push(o.sr.CheckPointParam.Circle.decode(e,e.uint32()));break;default:e.skipType(7&l)}}return a},e.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},e.Type=(a={},(l=Object.create(a))[a[0]="UNKNOWN"]=0,l[a[1]="LINE"]=1,l[a[2]="POLYGON"]=2,l[a[3]="CIRCLE"]=3,l),e.Line=function(){function e(e){if(this.point=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.label=0,e.prototype.point=r.emptyArray,e.prototype.l2r=!1,e.prototype.r2l=!1,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=n.create()),null!=e.label&&Object.hasOwnProperty.call(e,"label")&&t.uint32(8).uint32(e.label),null!=e.point&&e.point.length){t.uint32(18).fork();for(var r=0;r<e.point.length;++r)t.float(e.point[r]);t.ldelim()}return null!=e.l2r&&Object.hasOwnProperty.call(e,"l2r")&&t.uint32(24).bool(e.l2r),null!=e.r2l&&Object.hasOwnProperty.call(e,"r2l")&&t.uint32(32).bool(e.r2l),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,n){e instanceof t||(e=t.create(e));for(var r=void 0===n?e.len:e.pos+n,a=new o.sr.CheckPointParam.Line;e.pos<r;){var l=e.uint32();switch(l>>>3){case 1:a.label=e.uint32();break;case 2:if(a.point&&a.point.length||(a.point=[]),2==(7&l))for(var i=e.uint32()+e.pos;e.pos<i;)a.point.push(e.float());else a.point.push(e.float());break;case 3:a.l2r=e.bool();break;case 4:a.r2l=e.bool();break;default:e.skipType(7&l)}}return a},e.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},e}(),e.Polygon=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.label=0,e.prototype.point="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=n.create()),null!=e.label&&Object.hasOwnProperty.call(e,"label")&&t.uint32(8).uint32(e.label),null!=e.point&&Object.hasOwnProperty.call(e,"point")&&t.uint32(18).string(e.point),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,n){e instanceof t||(e=t.create(e));for(var r=void 0===n?e.len:e.pos+n,a=new o.sr.CheckPointParam.Polygon;e.pos<r;){var l=e.uint32();switch(l>>>3){case 1:a.label=e.uint32();break;case 2:a.point=e.string();break;default:e.skipType(7&l)}}return a},e.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},e}(),e.Circle=function(){function e(e){if(this.centroid=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.label=0,e.prototype.radius=0,e.prototype.centroid=r.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=n.create()),null!=e.label&&Object.hasOwnProperty.call(e,"label")&&t.uint32(8).uint32(e.label),null!=e.radius&&Object.hasOwnProperty.call(e,"radius")&&t.uint32(21).float(e.radius),null!=e.centroid&&e.centroid.length){t.uint32(26).fork();for(var r=0;r<e.centroid.length;++r)t.float(e.centroid[r]);t.ldelim()}return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,n){e instanceof t||(e=t.create(e));for(var r=void 0===n?e.len:e.pos+n,a=new o.sr.CheckPointParam.Circle;e.pos<r;){var l=e.uint32();switch(l>>>3){case 1:a.label=e.uint32();break;case 2:a.radius=e.float();break;case 3:if(a.centroid&&a.centroid.length||(a.centroid=[]),2==(7&l))for(var i=e.uint32()+e.pos;e.pos<i;)a.centroid.push(e.float());else a.centroid.push(e.float());break;default:e.skipType(7&l)}}return a},e.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},e}(),e}(),e.FlowAiParam=function(){function e(e){if(this.sceneArea=[],this.inferArea=[],this.objectArea=[],this.objectMask=[],this.maskMargin=[],this.statLabelCkpt=[],this.statTrackCkpt=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.option=null,e.prototype.basic=null,e.prototype.source=null,e.prototype.objSizeLevel=0,e.prototype.objDwellLevel=0,e.prototype.sceneArea=r.emptyArray,e.prototype.inferArea=r.emptyArray,e.prototype.objectArea=r.emptyArray,e.prototype.objectMask=r.emptyArray,e.prototype.maskMargin=r.emptyArray,e.prototype.statLabelCkpt=r.emptyArray,e.prototype.statTrackCkpt=r.emptyArray,e.prototype.archive=null,e.prototype.face=null,e.prototype.person=null,e.prototype.vehicle=null,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=n.create()),null!=e.option&&Object.hasOwnProperty.call(e,"option")&&o.sr.FlowAiParam.OptionParam.encode(e.option,t.uint32(10).fork()).ldelim(),null!=e.basic&&Object.hasOwnProperty.call(e,"basic")&&o.sr.FlowAiParam.BasicParam.encode(e.basic,t.uint32(18).fork()).ldelim(),null!=e.source&&Object.hasOwnProperty.call(e,"source")&&o.sr.FlowAiParam.SourceParam.encode(e.source,t.uint32(26).fork()).ldelim(),null!=e.objSizeLevel&&Object.hasOwnProperty.call(e,"objSizeLevel")&&t.uint32(56).uint32(e.objSizeLevel),null!=e.objDwellLevel&&Object.hasOwnProperty.call(e,"objDwellLevel")&&t.uint32(64).uint32(e.objDwellLevel),null!=e.sceneArea&&e.sceneArea.length){t.uint32(130).fork();for(var r=0;r<e.sceneArea.length;++r)t.float(e.sceneArea[r]);t.ldelim()}if(null!=e.inferArea&&e.inferArea.length){for(t.uint32(138).fork(),r=0;r<e.inferArea.length;++r)t.float(e.inferArea[r]);t.ldelim()}if(null!=e.objectArea&&e.objectArea.length)for(r=0;r<e.objectArea.length;++r)o.sr.FlowAiParam.ObjectAreaParam.encode(e.objectArea[r],t.uint32(146).fork()).ldelim();if(null!=e.objectMask&&e.objectMask.length)for(r=0;r<e.objectMask.length;++r)o.sr.FlowAiParam.ObjectMaskParam.encode(e.objectMask[r],t.uint32(154).fork()).ldelim();if(null!=e.maskMargin&&e.maskMargin.length){for(t.uint32(162).fork(),r=0;r<e.maskMargin.length;++r)t.float(e.maskMargin[r]);t.ldelim()}if(null!=e.statLabelCkpt&&e.statLabelCkpt.length)for(r=0;r<e.statLabelCkpt.length;++r)o.sr.CheckPointParam.encode(e.statLabelCkpt[r],t.uint32(250).fork()).ldelim();if(null!=e.statTrackCkpt&&e.statTrackCkpt.length)for(r=0;r<e.statTrackCkpt.length;++r)o.sr.CheckPointParam.encode(e.statTrackCkpt[r],t.uint32(258).fork()).ldelim();return null!=e.archive&&Object.hasOwnProperty.call(e,"archive")&&o.sr.FlowAiParam.ArchiveParam.encode(e.archive,t.uint32(330).fork()).ldelim(),null!=e.face&&Object.hasOwnProperty.call(e,"face")&&o.sr.FlowAiParam.FaceParam.encode(e.face,t.uint32(410).fork()).ldelim(),null!=e.person&&Object.hasOwnProperty.call(e,"person")&&o.sr.FlowAiParam.PersonParam.encode(e.person,t.uint32(418).fork()).ldelim(),null!=e.vehicle&&Object.hasOwnProperty.call(e,"vehicle")&&o.sr.FlowAiParam.VehicleParam.encode(e.vehicle,t.uint32(426).fork()).ldelim(),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,n){e instanceof t||(e=t.create(e));for(var r=void 0===n?e.len:e.pos+n,a=new o.sr.FlowAiParam;e.pos<r;){var l=e.uint32();switch(l>>>3){case 1:a.option=o.sr.FlowAiParam.OptionParam.decode(e,e.uint32());break;case 2:a.basic=o.sr.FlowAiParam.BasicParam.decode(e,e.uint32());break;case 3:a.source=o.sr.FlowAiParam.SourceParam.decode(e,e.uint32());break;case 7:a.objSizeLevel=e.uint32();break;case 8:a.objDwellLevel=e.uint32();break;case 16:if(a.sceneArea&&a.sceneArea.length||(a.sceneArea=[]),2==(7&l))for(var i=e.uint32()+e.pos;e.pos<i;)a.sceneArea.push(e.float());else a.sceneArea.push(e.float());break;case 17:if(a.inferArea&&a.inferArea.length||(a.inferArea=[]),2==(7&l))for(i=e.uint32()+e.pos;e.pos<i;)a.inferArea.push(e.float());else a.inferArea.push(e.float());break;case 18:a.objectArea&&a.objectArea.length||(a.objectArea=[]),a.objectArea.push(o.sr.FlowAiParam.ObjectAreaParam.decode(e,e.uint32()));break;case 19:a.objectMask&&a.objectMask.length||(a.objectMask=[]),a.objectMask.push(o.sr.FlowAiParam.ObjectMaskParam.decode(e,e.uint32()));break;case 20:if(a.maskMargin&&a.maskMargin.length||(a.maskMargin=[]),2==(7&l))for(i=e.uint32()+e.pos;e.pos<i;)a.maskMargin.push(e.float());else a.maskMargin.push(e.float());break;case 31:a.statLabelCkpt&&a.statLabelCkpt.length||(a.statLabelCkpt=[]),a.statLabelCkpt.push(o.sr.CheckPointParam.decode(e,e.uint32()));break;case 32:a.statTrackCkpt&&a.statTrackCkpt.length||(a.statTrackCkpt=[]),a.statTrackCkpt.push(o.sr.CheckPointParam.decode(e,e.uint32()));break;case 41:a.archive=o.sr.FlowAiParam.ArchiveParam.decode(e,e.uint32());break;case 51:a.face=o.sr.FlowAiParam.FaceParam.decode(e,e.uint32());break;case 52:a.person=o.sr.FlowAiParam.PersonParam.decode(e,e.uint32());break;case 53:a.vehicle=o.sr.FlowAiParam.VehicleParam.decode(e,e.uint32());break;default:e.skipType(7&l)}}return a},e.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},e.OptionParam=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.sceneCrop=!1,e.prototype.filterStatic=!1,e.prototype.rekoSpcFace=!1,e.prototype.rekoSimFace=!1,e.prototype.rekoPerson=!1,e.prototype.rekoVehicle=!1,e.prototype.clsFaceGender=!1,e.prototype.clsFaceAge=!1,e.prototype.clsFaceRace=!1,e.prototype.clsFaceGlasses=!1,e.prototype.clsPersonGender=!1,e.prototype.clsPersonAge=!1,e.prototype.clsPersonApparel=!1,e.prototype.clsPersonColor=!1,e.prototype.clsPersonBag=!1,e.prototype.clsHeadHeadwear=!1,e.prototype.clsVehicleCategory=!1,e.prototype.clsVehicleColor=!1,e.prototype.statLabel=!1,e.prototype.statTrack=!1,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=n.create()),null!=e.sceneCrop&&Object.hasOwnProperty.call(e,"sceneCrop")&&t.uint32(8).bool(e.sceneCrop),null!=e.filterStatic&&Object.hasOwnProperty.call(e,"filterStatic")&&t.uint32(16).bool(e.filterStatic),null!=e.rekoSpcFace&&Object.hasOwnProperty.call(e,"rekoSpcFace")&&t.uint32(88).bool(e.rekoSpcFace),null!=e.rekoSimFace&&Object.hasOwnProperty.call(e,"rekoSimFace")&&t.uint32(96).bool(e.rekoSimFace),null!=e.rekoPerson&&Object.hasOwnProperty.call(e,"rekoPerson")&&t.uint32(104).bool(e.rekoPerson),null!=e.rekoVehicle&&Object.hasOwnProperty.call(e,"rekoVehicle")&&t.uint32(112).bool(e.rekoVehicle),null!=e.clsFaceGender&&Object.hasOwnProperty.call(e,"clsFaceGender")&&t.uint32(168).bool(e.clsFaceGender),null!=e.clsFaceAge&&Object.hasOwnProperty.call(e,"clsFaceAge")&&t.uint32(176).bool(e.clsFaceAge),null!=e.clsFaceRace&&Object.hasOwnProperty.call(e,"clsFaceRace")&&t.uint32(184).bool(e.clsFaceRace),null!=e.clsFaceGlasses&&Object.hasOwnProperty.call(e,"clsFaceGlasses")&&t.uint32(192).bool(e.clsFaceGlasses),null!=e.clsPersonGender&&Object.hasOwnProperty.call(e,"clsPersonGender")&&t.uint32(248).bool(e.clsPersonGender),null!=e.clsPersonAge&&Object.hasOwnProperty.call(e,"clsPersonAge")&&t.uint32(256).bool(e.clsPersonAge),null!=e.clsPersonApparel&&Object.hasOwnProperty.call(e,"clsPersonApparel")&&t.uint32(264).bool(e.clsPersonApparel),null!=e.clsPersonColor&&Object.hasOwnProperty.call(e,"clsPersonColor")&&t.uint32(272).bool(e.clsPersonColor),null!=e.clsPersonBag&&Object.hasOwnProperty.call(e,"clsPersonBag")&&t.uint32(288).bool(e.clsPersonBag),null!=e.clsHeadHeadwear&&Object.hasOwnProperty.call(e,"clsHeadHeadwear")&&t.uint32(328).bool(e.clsHeadHeadwear),null!=e.clsVehicleCategory&&Object.hasOwnProperty.call(e,"clsVehicleCategory")&&t.uint32(408).bool(e.clsVehicleCategory),null!=e.clsVehicleColor&&Object.hasOwnProperty.call(e,"clsVehicleColor")&&t.uint32(416).bool(e.clsVehicleColor),null!=e.statLabel&&Object.hasOwnProperty.call(e,"statLabel")&&t.uint32(488).bool(e.statLabel),null!=e.statTrack&&Object.hasOwnProperty.call(e,"statTrack")&&t.uint32(496).bool(e.statTrack),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,n){e instanceof t||(e=t.create(e));for(var r=void 0===n?e.len:e.pos+n,a=new o.sr.FlowAiParam.OptionParam;e.pos<r;){var l=e.uint32();switch(l>>>3){case 1:a.sceneCrop=e.bool();break;case 2:a.filterStatic=e.bool();break;case 11:a.rekoSpcFace=e.bool();break;case 12:a.rekoSimFace=e.bool();break;case 13:a.rekoPerson=e.bool();break;case 14:a.rekoVehicle=e.bool();break;case 21:a.clsFaceGender=e.bool();break;case 22:a.clsFaceAge=e.bool();break;case 23:a.clsFaceRace=e.bool();break;case 24:a.clsFaceGlasses=e.bool();break;case 31:a.clsPersonGender=e.bool();break;case 32:a.clsPersonAge=e.bool();break;case 33:a.clsPersonApparel=e.bool();break;case 34:a.clsPersonColor=e.bool();break;case 36:a.clsPersonBag=e.bool();break;case 41:a.clsHeadHeadwear=e.bool();break;case 51:a.clsVehicleCategory=e.bool();break;case 52:a.clsVehicleColor=e.bool();break;case 61:a.statLabel=e.bool();break;case 62:a.statTrack=e.bool();break;default:e.skipType(7&l)}}return a},e.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},e}(),e.BasicParam=function(){function e(e){if(this.object=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.version=0,e.prototype.type=0,e.prototype.object=r.emptyArray,e.prototype.flowId=0,e.prototype.strategy=0,e.prototype.enable=!1,e.prototype.gpu=0,e.prototype.interval=0,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=n.create()),null!=e.version&&Object.hasOwnProperty.call(e,"version")&&t.uint32(8).uint32(e.version),null!=e.type&&Object.hasOwnProperty.call(e,"type")&&t.uint32(16).uint32(e.type),null!=e.object&&e.object.length){t.uint32(26).fork();for(var r=0;r<e.object.length;++r)t.uint32(e.object[r]);t.ldelim()}return null!=e.flowId&&Object.hasOwnProperty.call(e,"flowId")&&t.uint32(64).uint32(e.flowId),null!=e.strategy&&Object.hasOwnProperty.call(e,"strategy")&&t.uint32(72).uint32(e.strategy),null!=e.enable&&Object.hasOwnProperty.call(e,"enable")&&t.uint32(80).bool(e.enable),null!=e.gpu&&Object.hasOwnProperty.call(e,"gpu")&&t.uint32(88).int32(e.gpu),null!=e.interval&&Object.hasOwnProperty.call(e,"interval")&&t.uint32(96).uint32(e.interval),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,n){e instanceof t||(e=t.create(e));for(var r=void 0===n?e.len:e.pos+n,a=new o.sr.FlowAiParam.BasicParam;e.pos<r;){var l=e.uint32();switch(l>>>3){case 1:a.version=e.uint32();break;case 2:a.type=e.uint32();break;case 3:if(a.object&&a.object.length||(a.object=[]),2==(7&l))for(var i=e.uint32()+e.pos;e.pos<i;)a.object.push(e.uint32());else a.object.push(e.uint32());break;case 8:a.flowId=e.uint32();break;case 9:a.strategy=e.uint32();break;case 10:a.enable=e.bool();break;case 11:a.gpu=e.int32();break;case 12:a.interval=e.uint32();break;default:e.skipType(7&l)}}return a},e.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},e}(),e.SourceParam=function(){function e(e){if(this.normal=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.streamId=0,e.prototype.rtsp="",e.prototype.vangle=0,e.prototype.normal=r.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=n.create()),null!=e.streamId&&Object.hasOwnProperty.call(e,"streamId")&&t.uint32(8).uint32(e.streamId),null!=e.rtsp&&Object.hasOwnProperty.call(e,"rtsp")&&t.uint32(18).string(e.rtsp),null!=e.vangle&&Object.hasOwnProperty.call(e,"vangle")&&t.uint32(24).uint32(e.vangle),null!=e.normal&&e.normal.length){t.uint32(34).fork();for(var r=0;r<e.normal.length;++r)t.float(e.normal[r]);t.ldelim()}return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,n){e instanceof t||(e=t.create(e));for(var r=void 0===n?e.len:e.pos+n,a=new o.sr.FlowAiParam.SourceParam;e.pos<r;){var l=e.uint32();switch(l>>>3){case 1:a.streamId=e.uint32();break;case 2:a.rtsp=e.string();break;case 3:a.vangle=e.uint32();break;case 4:if(a.normal&&a.normal.length||(a.normal=[]),2==(7&l))for(var i=e.uint32()+e.pos;e.pos<i;)a.normal.push(e.float());else a.normal.push(e.float());break;default:e.skipType(7&l)}}return a},e.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},e}(),e.ObjectAreaParam=function(){function e(e){if(this.object=[],this.analyzeArea=[],this.snapshotArea=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.object=r.emptyArray,e.prototype.analyzeArea=r.emptyArray,e.prototype.snapshotArea=r.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=n.create()),null!=e.object&&e.object.length){t.uint32(10).fork();for(var r=0;r<e.object.length;++r)t.uint32(e.object[r]);t.ldelim()}if(null!=e.analyzeArea&&e.analyzeArea.length)for(r=0;r<e.analyzeArea.length;++r)t.uint32(18).string(e.analyzeArea[r]);if(null!=e.snapshotArea&&e.snapshotArea.length)for(r=0;r<e.snapshotArea.length;++r)t.uint32(26).string(e.snapshotArea[r]);return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,n){e instanceof t||(e=t.create(e));for(var r=void 0===n?e.len:e.pos+n,a=new o.sr.FlowAiParam.ObjectAreaParam;e.pos<r;){var l=e.uint32();switch(l>>>3){case 1:if(a.object&&a.object.length||(a.object=[]),2==(7&l))for(var i=e.uint32()+e.pos;e.pos<i;)a.object.push(e.uint32());else a.object.push(e.uint32());break;case 2:a.analyzeArea&&a.analyzeArea.length||(a.analyzeArea=[]),a.analyzeArea.push(e.string());break;case 3:a.snapshotArea&&a.snapshotArea.length||(a.snapshotArea=[]),a.snapshotArea.push(e.string());break;default:e.skipType(7&l)}}return a},e.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},e}(),e.ObjectMaskParam=function(){function e(e){if(this.object=[],this.region=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.object=r.emptyArray,e.prototype.region=r.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=n.create()),null!=e.object&&e.object.length){t.uint32(10).fork();for(var r=0;r<e.object.length;++r)t.uint32(e.object[r]);t.ldelim()}if(null!=e.region&&e.region.length)for(r=0;r<e.region.length;++r)t.uint32(18).string(e.region[r]);return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,n){e instanceof t||(e=t.create(e));for(var r=void 0===n?e.len:e.pos+n,a=new o.sr.FlowAiParam.ObjectMaskParam;e.pos<r;){var l=e.uint32();switch(l>>>3){case 1:if(a.object&&a.object.length||(a.object=[]),2==(7&l))for(var i=e.uint32()+e.pos;e.pos<i;)a.object.push(e.uint32());else a.object.push(e.uint32());break;case 2:a.region&&a.region.length||(a.region=[]),a.region.push(e.string());break;default:e.skipType(7&l)}}return a},e.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},e}(),e.ArchiveParam=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.synopsis=!1,e.prototype.dnnDet=!1,e.prototype.dnnCls=!1,e.prototype.dnnClu=!1,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=n.create()),null!=e.synopsis&&Object.hasOwnProperty.call(e,"synopsis")&&t.uint32(8).bool(e.synopsis),null!=e.dnnDet&&Object.hasOwnProperty.call(e,"dnnDet")&&t.uint32(16).bool(e.dnnDet),null!=e.dnnCls&&Object.hasOwnProperty.call(e,"dnnCls")&&t.uint32(24).bool(e.dnnCls),null!=e.dnnClu&&Object.hasOwnProperty.call(e,"dnnClu")&&t.uint32(32).bool(e.dnnClu),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,n){e instanceof t||(e=t.create(e));for(var r=void 0===n?e.len:e.pos+n,a=new o.sr.FlowAiParam.ArchiveParam;e.pos<r;){var l=e.uint32();switch(l>>>3){case 1:a.synopsis=e.bool();break;case 2:a.dnnDet=e.bool();break;case 3:a.dnnCls=e.bool();break;case 4:a.dnnClu=e.bool();break;default:e.skipType(7&l)}}return a},e.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},e}(),e.FaceParam=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.swingLevel=0,e.prototype.spcRekoLevel=0,e.prototype.simRekoLevel=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=n.create()),null!=e.swingLevel&&Object.hasOwnProperty.call(e,"swingLevel")&&t.uint32(8).uint32(e.swingLevel),null!=e.spcRekoLevel&&Object.hasOwnProperty.call(e,"spcRekoLevel")&&t.uint32(16).uint32(e.spcRekoLevel),null!=e.simRekoLevel&&Object.hasOwnProperty.call(e,"simRekoLevel")&&t.uint32(24).uint32(e.simRekoLevel),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,n){e instanceof t||(e=t.create(e));for(var r=void 0===n?e.len:e.pos+n,a=new o.sr.FlowAiParam.FaceParam;e.pos<r;){var l=e.uint32();switch(l>>>3){case 1:a.swingLevel=e.uint32();break;case 2:a.spcRekoLevel=e.uint32();break;case 3:a.simRekoLevel=e.uint32();break;default:e.skipType(7&l)}}return a},e.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},e}(),e.PersonParam=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.rekoLevel=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=n.create()),null!=e.rekoLevel&&Object.hasOwnProperty.call(e,"rekoLevel")&&t.uint32(8).uint32(e.rekoLevel),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,n){e instanceof t||(e=t.create(e));for(var r=void 0===n?e.len:e.pos+n,a=new o.sr.FlowAiParam.PersonParam;e.pos<r;){var l=e.uint32();switch(l>>>3){case 1:a.rekoLevel=e.uint32();break;default:e.skipType(7&l)}}return a},e.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},e}(),e.VehicleParam=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.rekoLevel=0,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=n.create()),null!=e.rekoLevel&&Object.hasOwnProperty.call(e,"rekoLevel")&&t.uint32(8).uint32(e.rekoLevel),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,n){e instanceof t||(e=t.create(e));for(var r=void 0===n?e.len:e.pos+n,a=new o.sr.FlowAiParam.VehicleParam;e.pos<r;){var l=e.uint32();switch(l>>>3){case 1:a.rekoLevel=e.uint32();break;default:e.skipType(7&l)}}return a},e.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},e}(),e}(),e.FlowUiParam=function(){function e(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.normal=null,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=n.create()),null!=e.normal&&Object.hasOwnProperty.call(e,"normal")&&o.sr.FlowUiParam.NormalParam.encode(e.normal,t.uint32(26).fork()).ldelim(),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,n){e instanceof t||(e=t.create(e));for(var r=void 0===n?e.len:e.pos+n,a=new o.sr.FlowUiParam;e.pos<r;){var l=e.uint32();switch(l>>>3){case 3:a.normal=o.sr.FlowUiParam.NormalParam.decode(e,e.uint32());break;default:e.skipType(7&l)}}return a},e.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},e.NormalParam=function(){function e(e){if(this.point=[],e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return e.prototype.type=0,e.prototype.line1="",e.prototype.line2="",e.prototype.point=r.emptyArray,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=n.create()),null!=e.type&&Object.hasOwnProperty.call(e,"type")&&t.uint32(8).uint32(e.type),null!=e.line1&&Object.hasOwnProperty.call(e,"line1")&&t.uint32(18).string(e.line1),null!=e.line2&&Object.hasOwnProperty.call(e,"line2")&&t.uint32(26).string(e.line2),null!=e.point&&e.point.length){t.uint32(34).fork();for(var r=0;r<e.point.length;++r)t.float(e.point[r]);t.ldelim()}return t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,n){e instanceof t||(e=t.create(e));for(var r=void 0===n?e.len:e.pos+n,a=new o.sr.FlowUiParam.NormalParam;e.pos<r;){var l=e.uint32();switch(l>>>3){case 1:a.type=e.uint32();break;case 2:a.line1=e.string();break;case 3:a.line2=e.string();break;case 4:if(a.point&&a.point.length||(a.point=[]),2==(7&l))for(var i=e.uint32()+e.pos;e.pos<i;)a.point.push(e.float());else a.point.push(e.float());break;default:e.skipType(7&l)}}return a},e.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},e}(),e}(),e);!function e(t,n,r){var o=Object.keys(n);if(!(r>2||0===o.length))for(var a of o){if(t[a])return e(t[a],n[a],r+1);t[a]=n[a]}}(o.sr,a,1);