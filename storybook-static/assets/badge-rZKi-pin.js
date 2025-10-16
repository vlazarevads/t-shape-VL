import{j as l}from"./jsx-runtime-AgcCsxC8.js";import{q as a}from"./styled-components.browser.esm-79pm2G1e.js";const t=a.div`
display: inline-flex;
align-items: center;
justify-content: center;
border: 1px solid transparent;
height: 24px;
font-size: 12px;
line-height: 16px;
font-weight: 500;
border-radius: 4px;
padding: 2px 8px 4px;


${e=>e.mode==="emerald"&&`
    background-color: ${e.theme.colors.bg.emerald.loud.enabled};
    color: ${e.theme.colors.text.global.primaryInverted};
`}

${e=>e.mode==="orange"&&`
    background-color: ${e.theme.colors.bg.orange.loud.enabled};
    color: ${e.theme.colors.text.global.primaryInverted};
`}

/* OUTLINE */

${e=>e.outline&&e.mode==="emerald"&&`
    background-color: ${e.theme.colors.bg.emerald.calm.enabled};
    border-color: ${e.theme.colors.border.emerald.calm.enabled};
    color: ${e.theme.colors.text.global.primary};
`}

${e=>e.outline&&e.mode==="orange"&&`
    background-color: ${e.theme.colors.bg.orange.calm.enabled};
    border-color: ${e.theme.colors.border.orange.calm.enabled};
    color: ${e.theme.colors.text.global.primary};
`}

`,u=({text:e="BageText",mode:o="emerald",outline:r})=>l.jsx(t,{outline:r,mode:o,children:e});try{u.displayName="Badge",u.__docgenInfo={description:"Компонент для отображения дополнительной информации",displayName:"Badge",props:{text:{defaultValue:{value:"BageText"},description:"Текст",name:"text",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"emerald"},description:"Визуальное отображение",name:"mode",required:!1,type:{name:"enum",value:[{value:'"emerald"'},{value:'"orange"'}]}},outline:{defaultValue:null,description:"Делает компонент менее акцентным",name:"outline",required:!1,type:{name:"boolean"}}}}}catch{}export{u as B};
