import{j as r}from"./jsx-runtime-AgcCsxC8.js";import{q as c}from"./styled-components.browser.esm-79pm2G1e.js";import{I as n}from"./icon-UDe6-waC.js";import{B as m}from"./badge-rZKi-pin.js";const x=c.button`
    display: inline-flex;
    flex-direction: row;
    border: 1px solid transparent;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    gap: 8px;
    cursor: pointer;
    &:focus-visible{
    box-shadow: 0px 0px 0px 4px rgba(79, 96, 255, 0.25);
    }


${e=>e.mode==="primary"&&`
    background-color: ${e.theme.colors.bg.brend.loud.enabled};
    color: ${e.theme.colors.text.global.primaryOnDark};

    &:hover{ 
    background-color: ${e.theme.colors.bg.brend.loud.hover};
    color: ${e.theme.colors.text.global.primaryOnDark};
    }

    &:active{
    background-color: ${e.theme.colors.bg.brend.loud.active};
    color: ${e.theme.colors.text.global.primaryOnDark};
    }

    &:disabled {
        background-color: ${e.theme.colors.bg.disabled};
        border-color: transparent;
        color: ${e.theme.colors.text.disabled};
        cursor: not-allowed;
    }


`}


${e=>e.mode==="secondary"&&`
    background-color: transparent;
    border-color: ${e.theme.colors.border.brend.enabled};
    color: ${e.theme.colors.text.brend.enabled};
    

    &:hover{ 
    border-color: ${e.theme.colors.border.brend.hover};
    color: ${e.theme.colors.text.brend.hover};
    }

    &:active{
    border-color: ${e.theme.colors.border.brend.active};
    color: ${e.theme.colors.text.brend.active};
    }

    &:disabled {
        background-color: transparent;
        border-color: ${e.theme.colors.border.disabled};
        color: ${e.theme.colors.text.disabled};
        cursor: not-allowed;
    }

`}

${e=>e.size==="small"&&`
    height: 40px;
    padding: 12px;
    font-size: 14px;
    font-height: 24px;
    font-weight: 400;
`}
${e=>e.size==="medium"&&`
    height: 48px;
    padding: 20px;
    font-size: 16px;
    font-height: 24px;
    font-weight: 400;
`}


`,d=({text:e="Button",disabled:o,mode:l="primary",size:a="small",iconAfter:u,iconBefore:t})=>r.jsxs(x,{disabled:o,mode:l,size:a,children:[t?r.jsx(n,{iconName:t,size:a==="medium"?20:16}):null,e,t?r.jsx(n,{iconName:u,size:a==="medium"?20:16}):null]});try{d.displayName="Button",d.__docgenInfo={description:"",displayName:"Button",props:{mode:{defaultValue:{value:"primary"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},text:{defaultValue:{value:"Button"},description:"",name:"text",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'}]}},iconBefore:{defaultValue:null,description:"",name:"iconBefore",required:!1,type:{name:"enum",value:[{value:'"chevronDown"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"chevronUp"'},{value:'"user"'}]}},iconAfter:{defaultValue:null,description:"",name:"iconAfter",required:!1,type:{name:"enum",value:[{value:'"chevronDown"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"chevronUp"'},{value:'"user"'}]}}}}}catch{}const b=c.div`
    display: inline-flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    border: 1px solid black;
    min-width: 420px;
    max-width: 600px;
    background-color: wheat;

    .card-content{
        display: inherit;
        flex-direction: inherit;
        gap: inherit;
    }

    .card-header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .card-body {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .card-newsData{
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
    }

    .card-body-text{
        ${e=>e.textSize==="medium"&&`
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
        `}

        ${e=>e.textSize==="large"&&`
            font-size: 32px;
            line-height: 40px;
            font-weight: 600;
        `}
    }

    ${e=>e.mode==="emerald"&&`
        color: ${e.theme.colors.text.global.primaryInverted};
        background-color:  ${e.theme.colors.bg.emerald.loud.enabled};
        border-color: ${e.theme.colors.border.emerald.loud.enabled};
    `}

        ${e=>e.mode==="orange"&&`
        color: ${e.theme.colors.text.global.primaryInverted};
        background-color:  ${e.theme.colors.bg.orange.loud.enabled};
        border-color: ${e.theme.colors.border.orange.loud.enabled};
    `}


`,i=({mode:e,textSize:o="medium",text:l="Hello text",newsData:a="10.10",badgeText:u="Bage Text",buttonText:t="CTA",children:s})=>r.jsxs(b,{mode:e,textSize:o,children:[r.jsxs("div",{className:"card-content",children:[r.jsxs("div",{className:"card-header",children:[r.jsx("div",{className:"card-newsData",children:a}),r.jsx(m,{text:u,mode:e,outline:!0})]}),r.jsxs("div",{className:"card-body",children:[r.jsx("p",{className:"card-body-text",children:l}),s]})]}),r.jsx("div",{children:r.jsx(d,{text:t,size:"small"})})]});try{i.displayName="Card",i.__docgenInfo={description:"Коспонент карточки",displayName:"Card",props:{mode:{defaultValue:null,description:"Визуальное отображение",name:"mode",required:!1,type:{name:"enum",value:[{value:'"emerald"'},{value:'"orange"'}]}},textSize:{defaultValue:{value:"medium"},description:"Размер основного текста",name:"textSize",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'}]}},text:{defaultValue:{value:"Hello text"},description:"Текст",name:"text",required:!1,type:{name:"string"}},newsData:{defaultValue:{value:"10.10"},description:"Календарная дата",name:"newsData",required:!1,type:{name:"string"}},buttonText:{defaultValue:{value:"CTA"},description:"",name:"buttonText",required:!1,type:{name:"string"}},badgeText:{defaultValue:{value:"Bage Text"},description:"",name:"badgeText",required:!1,type:{name:"string"}}}}}catch{}export{i as C};
