import{eB as e,eC as t,bV as a,P as n,d as i,eD as s,F as d,dN as r,dI as m,dL as o,a1 as c,G as l,aA as g,bb as h,x as u,E as f,aB as p,L as S,S as P,g as O,u as b,aQ as y,bf as v}from"./detailed_results-7d650246.chunk.js";import{x as I,b as T,r as E,T as R,$ as w,I as A}from"./preset_utils-01473194.chunk.js";const H=I({fieldName:"aura",label:"Aura",values:[{name:"None",value:e.NoPaladinAura},{name:"Devotion Aura",value:e.DevotionAura},{name:"Retribution Aura",value:e.RetributionAura}]}),k=I({fieldName:"judgement",label:"Judgement",labelTooltip:"Judgement debuff you will use on the target during the encounter.",values:[{name:"None",value:t.NoJudgement},{name:"Wisdom",value:t.JudgementOfWisdom},{name:"Light",value:t.JudgementOfLight}]}),B={items:[{id:40298,enchant:3819,gems:[41401,40012]},{id:44662,gems:[40012]},{id:40573,enchant:3809,gems:[40012]},{id:44005,enchant:3831,gems:[40012]},{id:40569,enchant:3832,gems:[40012,40012]},{id:40332,enchant:1119,gems:[40012,0]},{id:40570,enchant:3604,gems:[40012,0]},{id:40259,gems:[40012]},{id:40572,enchant:3721,gems:[40027,40012]},{id:40592,enchant:3606},{id:40399},{id:40375},{id:44255},{id:37111},{id:40395,enchant:2666},{id:40401,enchant:1128},{id:40705}]},W={items:[{id:46180,enchant:3820,gems:[41401,40094]},{id:45443,gems:[40012]},{id:46182,enchant:3810,gems:[40012]},{id:45486,enchant:3831,gems:[40012]},{id:45445,enchant:3832,gems:[42148,42148,42148]},{id:45460,enchant:1119,gems:[40012,0]},{id:46179,enchant:3604,gems:[40047,0]},{id:45616,gems:[40012,40012,40012]},{id:46181,enchant:3721,gems:[40012,40012]},{id:45537,enchant:3606,gems:[40012,40012]},{id:45614,gems:[45882]},{id:45946,gems:[40012]},{id:46051},{id:37111},{id:46017,enchant:2666},{id:45470,enchant:1128,gems:[40012]},{id:40705}]},F={items:[{id:46180,enchant:3820,gems:[41401,40123]},{id:47468,gems:[40123]},{id:46182,enchant:3810,gems:[40123]},{id:47551,enchant:3831,gems:[40123]},{id:47471,enchant:3832,gems:[42148,42148,42148]},{id:45460,enchant:1119,gems:[40123,0]},{id:46179,enchant:3604,gems:[40151,0]},{id:47997,gems:[40175,40123]},{id:46181,enchant:3721,gems:[40123,40123]},{id:47424,enchant:3606,gems:[40123,40123]},{id:47439,gems:[40123]},{id:45614,gems:[40123]},{id:46051},{id:37111},{id:46017,enchant:2666},{id:47448,enchant:1128,gems:[40123]},{id:40705}]},j={items:[{id:51272,enchant:3820,gems:[41401,49110]},{id:51871,gems:[40123]},{id:51273,enchant:3810,gems:[40123]},{id:51826,enchant:3831,gems:[40123]},{id:50680,enchant:3832,gems:[42148,42148,42148]},{id:50687,enchant:1119,gems:[40123,0]},{id:50703,enchant:3604,gems:[40123,40123,0]},{id:51919,gems:[40123,40123,40123]},{id:49891,enchant:3721,gems:[40123,40123,40123]},{id:51920,enchant:3606,gems:[40123,40123]},{id:50610,gems:[40123]},{id:50400,gems:[40123]},{id:46051},{id:37111},{id:46017,enchant:2666},{id:50616,enchant:1128,gems:[40123]},{id:40705}]},N=T("PreRaid",{items:[{id:44949,enchant:3819,gems:[41401,40012]},{id:42647,gems:[42702]},{id:37673,enchant:3809,gems:[40012]},{id:41609,enchant:3831},{id:39629,enchant:3832,gems:[40012,40012]},{id:37788,enchant:1119,gems:[0]},{id:39632,enchant:3604,gems:[40012,0]},{id:40691,gems:[40012,40012]},{id:37362,enchant:3721,gems:[40012,40012]},{id:44202,enchant:3606,gems:[40094]},{id:44283},{id:37694},{id:44255},{id:37111},{id:37169,enchant:2666},{id:40700,enchant:1128},{id:40705}]}),G=T("P1 Preset",B),L=T("P2 Preset",W),M=T("P3 Preset",F),x=T("P4 Preset",j),C={name:"Standard",data:a.create({talentsString:"50350151020013053100515221-50023131203",glyphs:{major1:n.GlyphOfHolyLight,major2:n.GlyphOfSealOfWisdom,major3:n.GlyphOfBeaconOfLight,minor2:i.GlyphOfLayOnHands,minor1:i.GlyphOfSenseUndead,minor3:i.GlyphOfBlessingOfKings}})},D=s.create({aura:e.DevotionAura,judgement:t.NoJudgement}),J=d.create({defaultPotion:r.RunicManaPotion,flask:m.FlaskOfTheFrostWyrm,food:o.FoodFishFeast}),U=E(P.SpecHolyPaladin,{cssClass:"holy-paladin-sim-ui",cssScheme:"paladin",knownIssues:[],epStats:[c.StatIntellect,c.StatSpirit,c.StatSpellPower,c.StatSpellCrit,c.StatSpellHaste,c.StatMP5],epReferenceStat:c.StatSpellPower,displayStats:[c.StatHealth,c.StatMana,c.StatStamina,c.StatIntellect,c.StatSpirit,c.StatSpellPower,c.StatSpellCrit,c.StatSpellHaste,c.StatMP5],defaults:{gear:G.gear,epWeights:l.fromMap({[c.StatIntellect]:.38,[c.StatSpirit]:.34,[c.StatSpellPower]:1,[c.StatSpellCrit]:.69,[c.StatSpellHaste]:.77,[c.StatMP5]:0}),consumes:J,talents:C.data,specOptions:D,raidBuffs:g.create({giftOfTheWild:h.TristateEffectImproved,powerWordFortitude:h.TristateEffectImproved,strengthOfEarthTotem:h.TristateEffectImproved,arcaneBrilliance:!0,unleashedRage:!0,leaderOfThePack:h.TristateEffectRegular,icyTalons:!0,totemOfWrath:!0,demonicPactSp:500,swiftRetribution:!0,moonkinAura:h.TristateEffectRegular,sanctifiedRetribution:!0,manaSpringTotem:h.TristateEffectRegular,bloodlust:!0,thorns:h.TristateEffectImproved,devotionAura:h.TristateEffectImproved,shadowProtection:!0}),partyBuffs:u.create({}),individualBuffs:f.create({blessingOfKings:!0,blessingOfSanctuary:!0,blessingOfWisdom:h.TristateEffectImproved,blessingOfMight:h.TristateEffectImproved}),debuffs:p.create({judgementOfWisdom:!0,judgementOfLight:!0,misery:!0,faerieFire:h.TristateEffectImproved,ebonPlaguebringer:!0,totemOfWrath:!0,shadowMastery:!0,bloodFrenzy:!0,mangle:!0,exposeArmor:!0,sunderArmor:!0,vindication:!0,thunderClap:h.TristateEffectImproved,insectSwarm:!0})},playerIconInputs:[],includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[R,w,H,k]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[C],rotations:[],gear:[N,G,L,M,x]},autoRotation:e=>S.create(),raidSimPresets:[{spec:P.SpecHolyPaladin,tooltip:"Holy Paladin",defaultName:"Holy",iconUrl:O(b.ClassPaladin,0),talents:C.data,specOptions:D,consumes:J,defaultFactionRaces:{[y.Unknown]:v.RaceUnknown,[y.Alliance]:v.RaceHuman,[y.Horde]:v.RaceBloodElf},defaultGear:{[y.Unknown]:{},[y.Alliance]:{1:G.gear,2:L.gear,3:M.gear,4:x.gear},[y.Horde]:{1:G.gear,2:L.gear,3:M.gear,4:x.gear}}}]});class K extends A{constructor(e,t){super(e,t,U)}}export{K as H};
//# sourceMappingURL=sim-2f4b627a.chunk.js.map
