import{j as e}from"./jsx-runtime-AgcCsxC8.js";import{q as i,A as f}from"./styled-components.browser.esm-79pm2G1e.js";import{I as o,i as c}from"./icon-UDe6-waC.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";const j=i.div`
  color: #666;
  font-size: 12px;
`,k=i.h2`
    color: #666;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 24px;
`,y=i.li`
  display: flex;
  border: 1px lightgrey solid;
  border-radius: 12px;
  flex-direction: column;
  width: 96px;
  align-items: center;
  gap: 12px;
  padding: 12px;

  ${n=>n.minimal&&f`
      flex: none;
      min-width: auto;
      padding: 0;
      background: #fff;
      border: 1px solid #666;

      svg {
        display: block;
        margin-right: 0;
        width: 48px;
        height: 48px;
      }
    `};
`,I=i.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
  list-style: none;
`,v={title:"Компоненты/Icon",component:o,parameters:{status:{type:"stable"},tags:["autodocs"]}},s={render:n=>e.jsxs(e.Fragment,{children:[e.jsxs(k,{children:["There are ",Object.keys(c).length," icons"]}),e.jsx(I,{children:Object.keys(c).map(t=>e.jsxs(y,{children:[e.jsx(o,{iconName:t,...n}),e.jsx(j,{children:t})]},t))})]}),args:{size:24}},r={render:n=>e.jsxs(e.Fragment,{children:["this is an inline ",e.jsx(o,{...n})," icon (default)"]}),args:{iconName:"user","aria-label":"user",size:24}},a={render:n=>e.jsxs(e.Fragment,{children:["this is a block ",e.jsx(o,{...n})," icon"]}),args:{iconName:"chevronUp","aria-label":"Happy face",block:!0,size:24}};var l,m,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <>
            <Heading>There are {Object.keys(icons).length} icons</Heading>
            <List>
                {Object.keys(icons).map(key => <Item key={key}>
                        <Icon iconName={key} {...args} />
                        <Meta>{key}</Meta>
                    </Item>)}
            </List>
        </>,
  args: {
    size: 24
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,g,x;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <>
            this is an inline <Icon {...args} /> icon (default)
        </>,
  args: {
    iconName: 'user',
    'aria-label': 'user',
    size: 24
  }
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,u,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <>
            this is a block <Icon {...args} /> icon
        </>,
  args: {
    iconName: 'chevronUp',
    'aria-label': 'Happy face',
    block: true,
    size: 24
  }
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const P=["withNames","InlinePlacement","BlockPlacement"];export{a as BlockPlacement,r as InlinePlacement,P as __namedExportsOrder,v as default,s as withNames};
