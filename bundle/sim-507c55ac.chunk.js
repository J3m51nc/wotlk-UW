import{A as e,aC as a,aD as t,c1 as s,T as l,eu as i,a7 as n,ev as o,ew as r,S as d,bV as p,N as c,D as m,a as h,ex as u,F as g,dI as f,dL as I,dN as v,a1 as S,ac as T,G as y,aA as b,bb as A,x as O,E as R,aB as w,dz as P,dv as k,L as E,dA as C,bo as x,g as F,u as L,aQ as M,bf as W}from"./detailed_results-7d650246.chunk.js";import{m as B,a as D,i as N,G,H,J as U,b as j,c as $,K as V,r as z,L as J,z as _,O as q,T as K,s as Q,I as X}from"./preset_utils-01473194.chunk.js";import{P as Y}from"./suggest_gems_action-29ef1751.chunk.js";import{s as Z}from"./apl_utils-e7dbb527.chunk.js";B({fieldName:"innervateTarget",id:e.fromSpellId(29166),extraCssClasses:["within-raid-sim-hide"],getValue:e=>e.getSpecOptions().innervateTarget?.type==a.Player,setValue:(e,s,l)=>{const i=s.getSpecOptions();i.innervateTarget=t.create({type:l?a.Player:a.Unknown,index:0}),s.setSpecOptions(e,i)}});const ee=D({fieldName:"latencyMs",label:"Latency",labelTooltip:"Player latency, in milliseconds. Adds a delay to actions that cannot be spell queued."}),ae=N({fieldName:"assumeBleedActive",label:"Assume Bleed Always Active",labelTooltip:"Assume bleed always exists for 'Rend and Tear' calculations. Otherwise will only calculate based on own rip/rake/lacerate.",extraCssClasses:["within-raid-sim-hide"]});function te(e){let a=e.getSimpleRotation();return a.manualParams&&a.rotationType==s.SingleTarget}function se(e){let a=e.getSimpleRotation();return a.manualParams&&a.rotationType==s.Aoe}const le={inputs:[G({fieldName:"rotationType",label:"Type",values:[{name:"Single Target",value:s.SingleTarget},{name:"AOE",value:s.Aoe}]}),H({fieldName:"prePopOoc",label:"Pre-pop Clearcasting",labelTooltip:"Start fight with clearcasting",showWhen:e=>e.getTalents().omenOfClarity,changeEmitter:e=>l.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])}),H({fieldName:"prePopBerserk",label:"Pre-pop Berserk",labelTooltip:"Pre pop berserk 1 sec before fight",showWhen:e=>e.getTalents().berserk,changeEmitter:e=>l.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])}),H({fieldName:"manualParams",label:"Manual Advanced Parameters",labelTooltip:"Manually specify advanced parameters, otherwise will use preset defaults"}),U({fieldName:"maxFfDelay",label:"Max FF Delay",labelTooltip:"Max allowed delay to wait for ff to come off CD in seconds",float:!0,positive:!0,showWhen:e=>e.getSimpleRotation().manualParams}),U({fieldName:"minRoarOffset",label:"Roar Offset",labelTooltip:"Targeted offset in Rip/Roar timings",showWhen:te}),U({fieldName:"ripLeeway",label:"Rip Leeway",labelTooltip:"Rip leeway when determining roar clips",showWhen:te}),H({fieldName:"useRake",label:"Use Rake",labelTooltip:"Use rake during rotation",showWhen:te}),H({fieldName:"useBite",label:"Bite during rotation",labelTooltip:"Use bite during rotation rather than just at end",showWhen:te}),U({fieldName:"biteTime",label:"Bite Time",labelTooltip:"Min seconds on Rip/Roar to bite",showWhen:e=>te(e)&&1==e.getSimpleRotation().useBite&&e.getSimpleRotation().biteModeType==i.Emperical}),H({fieldName:"flowerWeave",label:"Flower Weave",labelTooltip:"Fish for clearcasting during rotation with gotw",showWhen:se}),U({extraCssClasses:["used-in-apl"],fieldName:"raidTargets",label:"GotW Raid Targets",labelTooltip:"Raid size to assume for clearcast proc chance (can include pets as well, so 25 man raid potentically can be ~30)",showWhen:e=>e.aplRotation.type!=n.TypeSimple||se(e)&&1==e.getSimpleRotation().flowerWeave}),U({fieldName:"hotUptime",label:"Revitalize Hot Uptime",labelTooltip:"Hot uptime percentage to assume when theorizing energy gains",percent:!0,showWhen:e=>1==e.getSimpleRotation().useBite&&e.getSimpleRotation().biteModeType==i.Analytical})]},ie={items:[{id:40473,enchant:3817,gems:[41398,39996]},{id:44664,gems:[39996]},{id:40494,enchant:3808,gems:[39996]},{id:40403,enchant:3605},{id:40539,enchant:3832,gems:[39996]},{id:39765,enchant:3845,gems:[39996,0]},{id:40541,enchant:3604,gems:[0]},{id:40205,gems:[39996]},{id:44011,enchant:3823,gems:[39996,49110]},{id:40243,enchant:3606,gems:[40014]},{id:40474},{id:40717},{id:42987},{id:40256},{id:40388,enchant:3789},{},{id:39757}]},ne={items:[{id:46161,enchant:3817,gems:[41398,40002]},{id:45517,gems:[40002]},{id:45245,enchant:3808,gems:[40002,40002]},{id:46032,enchant:3605,gems:[40002,40058]},{id:45473,enchant:3832,gems:[40002,40002,40002]},{id:45869,enchant:3845,gems:[40037]},{id:46158,enchant:3604,gems:[40002]},{id:46095,gems:[40002,40002,40002]},{id:45536,enchant:3823,gems:[39996,39996,39996]},{id:45564,enchant:3606,gems:[39996,39996]},{id:46048,gems:[45862]},{id:45608,gems:[39996]},{id:45931},{id:46038},{id:45613,enchant:3789,gems:[40037,42702]},{},{id:40713}]},oe={items:[{id:48204,enchant:3817,gems:[41398,40146]},{id:47060,gems:[40117]},{id:48207,enchant:3808,gems:[40146]},{id:47545,enchant:3605,gems:[40117]},{id:48206,enchant:3832,gems:[40117,40146]},{id:45611,enchant:3845,gems:[40146,0]},{id:47945,enchant:3604,gems:[40112,40117,0]},{id:47112,gems:[40146,40117,40117]},{id:48205,enchant:3823,gems:[40117,49110]},{id:47077,enchant:3606,gems:[40146,40117]},{id:47075,gems:[40117]},{id:45608,gems:[40117]},{id:45931},{id:47131},{id:47239,enchant:3789,gems:[40146,40117]},{},{id:47668}]},re={items:[{id:51296,enchant:3817,gems:[41398,40117]},{id:50633,gems:[40117]},{id:51299,enchant:3808,gems:[40117]},{id:47545,enchant:3605,gems:[40117]},{id:51298,enchant:3832,gems:[40117,40125]},{id:50670,enchant:3845,gems:[40125,0]},{id:50675,enchant:3604,gems:[40162,40117,0]},{id:50707,gems:[40117,40117,40117]},{id:51297,enchant:3823,gems:[40117,40162]},{id:50607,enchant:3606,gems:[40143,40143]},{id:50604,gems:[40143]},{id:50402,gems:[40143]},{id:50363},{id:50343},{id:50735,enchant:3789,gems:[40117,49110,40143]},{},{id:50456}]},de={type:"TypeAPL",prepullActions:[{action:{activateAura:{auraId:{spellId:16870}}},doAtValue:{const:{val:"-1s"}}},{action:{castSpell:{spellId:{spellId:50334}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{const:{val:"false"}},castSpell:{spellId:{spellId:50334}}}},{action:{catOptimalRotationAction:{manualParams:!1,maxFfDelay:.1,minRoarOffset:25,ripLeeway:4,useRake:!0,useBite:!0,biteTime:4}}}]},pe={type:"TypeAPL",prepullActions:[{action:{activateAura:{auraId:{spellId:16870}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentEnergy:{}},rhs:{const:{val:"30"}}}},castSpell:{spellId:{spellId:50213}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:16870}}}}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{not:{val:{dotIsActive:{spellId:{spellId:49800}}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10s"}}}}]}},castSpell:{spellId:{spellId:49800}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:16870}}}}},{or:{vals:[{and:{vals:[{auraIsActive:{auraId:{spellId:50334}}},{cmp:{op:"OpLt",lhs:{currentEnergy:{}},rhs:{const:{val:"15"}}}}]}},{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:50334}}}}},{cmp:{op:"OpLt",lhs:{currentEnergy:{}},rhs:{const:{val:"87"}}}}]}}]}}]}},castSpell:{spellId:{spellId:16857}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{spellTimeToReady:{spellId:{spellId:50213}}},rhs:{const:{val:"15s"}}}},{dotIsActive:{spellId:{spellId:49800}}},{not:{val:{auraIsActive:{auraId:{spellId:16870}}}}}]}},castSpell:{spellId:{spellId:50334}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"1"}}}},{or:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:52610}}}}},{and:{vals:[{dotIsActive:{spellId:{spellId:49800}}},{cmp:{op:"OpGt",lhs:{math:{op:"OpSub",lhs:{remainingTime:{}},rhs:{dotRemainingTime:{spellId:{spellId:49800}}}}},rhs:{const:{val:"10s"}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:52610}}},rhs:{math:{op:"OpAdd",lhs:{dotRemainingTime:{spellId:{spellId:49800}}},rhs:{const:{val:"4s"}}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:52610}}},rhs:{remainingTime:{}}}},{cmp:{op:"OpGe",lhs:{catNewSavageRoarDuration:{}},rhs:{math:{op:"OpAdd",lhs:{dotRemainingTime:{spellId:{spellId:49800}}},rhs:{const:{val:"25s"}}}}}}]}}]}}]}},castSpell:{spellId:{spellId:52610}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{not:{val:{auraIsActive:{auraId:{spellId:16870}}}}},{or:{vals:[{and:{vals:[{auraIsActive:{auraId:{spellId:50334}}},{cmp:{op:"OpLe",lhs:{currentEnergy:{}},rhs:{const:{val:"25"}}}}]}},{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:50334}}}}},{cmp:{op:"OpLt",lhs:{currentEnergy:{}},rhs:{const:{val:"67"}}}}]}}]}},{or:{vals:[{and:{vals:[{dotIsActive:{spellId:{spellId:49800}}},{auraIsActive:{auraId:{spellId:52610}}},{cmp:{op:"OpGe",lhs:{dotRemainingTime:{spellId:{spellId:49800}}},rhs:{const:{val:"4s"}}}},{cmp:{op:"OpGe",lhs:{auraRemainingTime:{auraId:{spellId:52610}}},rhs:{const:{val:"4s"}}}}]}},{and:{vals:[{dotIsActive:{spellId:{spellId:49800}}},{cmp:{op:"OpLt",lhs:{math:{op:"OpSub",lhs:{remainingTime:{}},rhs:{dotRemainingTime:{spellId:{spellId:49800}}}}},rhs:{const:{val:"10s"}}}}]}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"10s"}}}}]}}]}},castSpell:{spellId:{spellId:48577}}}},{action:{condition:{and:{vals:[{auraShouldRefresh:{auraId:{spellId:48566},maxOverlap:{const:{val:"1s"}}}},{not:{val:{auraIsActive:{auraId:{spellId:16870}}}}}]}},castSpell:{spellId:{spellId:48566}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:16870}}}}},{not:{val:{dotIsActive:{spellId:{spellId:48574}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"9s"}}}}]}},castSpell:{spellId:{spellId:48574}}}},{action:{condition:{and:{vals:[{or:{vals:[{auraIsActive:{auraId:{spellId:16870}}},{cmp:{op:"OpGe",lhs:{catExcessEnergy:{}},rhs:{const:{val:"120"}}}}]}},{cmp:{op:"OpEq",lhs:{const:{val:"1"}},rhs:{const:{val:"0"}}}}]}},castSpell:{spellId:{spellId:48566}}}},{action:{condition:{and:{vals:[{or:{vals:[{auraIsActive:{auraId:{spellId:16870}}},{cmp:{op:"OpGe",lhs:{catExcessEnergy:{}},rhs:{const:{val:"42s"}}}}]}}]}},castSpell:{spellId:{spellId:48572}}}}]},ce=j("Preraid Preset",{items:[{id:42550,enchant:3817,gems:[41398,39996]},{id:40678},{id:37139,enchant:3808,gems:[39996]},{id:37840,enchant:3605},{id:37219,enchant:3832},{id:44203,enchant:3845,gems:[0]},{id:37409,enchant:3604,gems:[0]},{id:40694,gems:[49110,39996]},{id:37644,enchant:3823},{id:44297,enchant:3606},{id:37642},{id:37624},{id:40684},{id:37166},{id:37883,enchant:3827},{},{id:40713}]}),me=j("P1 Preset",ie),he=j("P2 Preset",ne),ue=j("P3 Preset",oe),ge=j("P4 Preset",re),fe=$("APL Default",de),Ie=$("Custom APL Example",pe),ve=o.create({rotationType:s.SingleTarget,bearWeaveType:r.None,minCombosForRip:5,minCombosForBite:5,useRake:!0,useBite:!0,mangleSpam:!1,biteModeType:i.Emperical,biteTime:4,berserkBiteThresh:25,berserkFfThresh:15,powerbear:!1,minRoarOffset:12,ripLeeway:3,maintainFaerieFire:!0,hotUptime:0,snekWeave:!1,flowerWeave:!1,raidTargets:30,maxFfDelay:.1,prePopOoc:!0}),Se=V("Simple Default",d.SpecFeralDruid,ve),Te={name:"Standard",data:p.create({talentsString:"-543202132322010053120030310511-203503012",glyphs:c.create({major1:m.GlyphOfOmenOfClarity,major2:m.GlyphOfSavageRoar,major3:m.GlyphOfShred,minor1:h.GlyphOfDash,minor2:h.GlyphOfTheWild,minor3:h.GlyphOfUnburdenedRebirth})})},ye=u.create({latencyMs:100,assumeBleedActive:!0}),be=g.create({flask:f.FlaskOfEndlessRage,food:I.FoodDragonfinFilet,defaultPotion:v.PotionOfSpeed}),Ae=z(d.SpecFeralDruid,{cssClass:"feral-druid-sim-ui",cssScheme:"druid",knownIssues:[],warnings:[],epStats:[S.StatStrength,S.StatAgility,S.StatAttackPower,S.StatMeleeHit,S.StatMeleeCrit,S.StatMeleeHaste,S.StatArmorPenetration,S.StatExpertise],epPseudoStats:[T.PseudoStatMainHandDps],epReferenceStat:S.StatAttackPower,displayStats:[S.StatHealth,S.StatStrength,S.StatAgility,S.StatAttackPower,S.StatMeleeHit,S.StatMeleeCrit,S.StatMeleeHaste,S.StatArmorPenetration,S.StatExpertise,S.StatMana],defaults:{gear:ge.gear,epWeights:y.fromMap({[S.StatStrength]:2.4,[S.StatAgility]:2.39,[S.StatAttackPower]:1,[S.StatMeleeHit]:2.51,[S.StatMeleeCrit]:2.23,[S.StatMeleeHaste]:1.83,[S.StatArmorPenetration]:2.08,[S.StatExpertise]:2.44},{[T.PseudoStatMainHandDps]:16.5}),consumes:be,talents:Te.data,specOptions:ye,raidBuffs:b.create({arcaneBrilliance:!0,giftOfTheWild:A.TristateEffectImproved,bloodlust:!0,manaSpringTotem:A.TristateEffectRegular,strengthOfEarthTotem:A.TristateEffectImproved,battleShout:A.TristateEffectImproved,unleashedRage:!0,icyTalons:!0,swiftRetribution:!0,sanctifiedRetribution:!0}),partyBuffs:O.create({heroicPresence:!0}),individualBuffs:R.create({blessingOfKings:!0,blessingOfMight:A.TristateEffectImproved}),debuffs:w.create({judgementOfWisdom:!0,bloodFrenzy:!0,giftOfArthas:!0,exposeArmor:!0,faerieFire:A.TristateEffectImproved,sunderArmor:!0,curseOfWeakness:A.TristateEffectRegular,heartOfTheCrusader:!0})},playerIconInputs:[],rotationInputs:le,includeBuffDebuffInputs:[J,_,q],excludeBuffDebuffInputs:[],otherInputs:{inputs:[ee,ae,K,Q]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[Te],rotations:[Se,fe,Ie],gear:[ce,me,he,ue,ge]},autoRotation:e=>fe.rotation.rotation,simpleRotation:(e,a,t)=>{let[s,l]=Z(t);const i=P.fromJsonString('{"action":{"activateAura":{"auraId":{"spellId":16870}}},"doAtValue":{"const":{"val":"-1s"}}}'),n=P.fromJsonString('{"action":{"castSpell":{"spellId":{"spellId":50334}}},"doAtValue":{"const":{"val":"-1s"}}}'),o=k.fromJsonString('{"condition":{"const":{"val":"false"}},"castSpell":{"spellId":{"spellId":50334}}}'),r=k.fromJsonString(`{"catOptimalRotationAction":{"rotationType":${a.rotationType},"manualParams":${a.manualParams},"maxFfDelay":${a.maxFfDelay.toFixed(2)},"minRoarOffset":${a.minRoarOffset.toFixed(2)},"ripLeeway":${a.ripLeeway.toFixed(0)},"useRake":${a.useRake},"useBite":${a.useBite},"biteTime":${a.biteTime.toFixed(2)},"flowerWeave":${a.flowerWeave}}}`);return s.push(...[a.prePopOoc?i:null,a.prePopBerserk?n:null].filter((e=>e))),l.push(...[o,r].filter((e=>e))),E.create({prepullActions:s,priorityList:l.map((e=>C.create({action:e})))})},raidSimPresets:[{spec:d.SpecFeralDruid,tooltip:x[d.SpecFeralDruid],defaultName:"Cat",iconUrl:F(L.ClassDruid,3),talents:Te.data,specOptions:ye,consumes:be,defaultFactionRaces:{[M.Unknown]:W.RaceUnknown,[M.Alliance]:W.RaceNightElf,[M.Horde]:W.RaceTauren},defaultGear:{[M.Unknown]:{},[M.Alliance]:{1:me.gear,2:he.gear,3:ue.gear,4:ge.gear},[M.Horde]:{1:me.gear,2:he.gear,3:ue.gear,4:ge.gear}}}]});class Oe extends X{constructor(e,a){super(e,a,Ae),new Re(this)}}class Re extends Y{constructor(e){super(e,!0,!0,!0,!0)}calcCritCap(e){let a=0;return e.hasRelic(47668)&&(a+=200),e.hasRelic(50456)&&(a+=220),(e.hasTrinket(47131)||e.hasTrinket(47464))&&(a+=510),(e.hasTrinket(47115)||e.hasTrinket(47303))&&(a+=450),(e.hasTrinket(44253)||e.hasTrinket(42987))&&(a+=300),(new y).withStat(S.StatMeleeCrit,45.91*(77.8-1.1*a*1.06*1.02/83.33))}}export{Oe as F};
//# sourceMappingURL=sim-507c55ac.chunk.js.map
