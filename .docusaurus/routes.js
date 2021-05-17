
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','999'),
  
  routes: [
{
  path: '/',
  component: ComponentCreator('/','346'),
  exact: true,
},
{
  path: '/architecture',
  component: ComponentCreator('/architecture','3e3'),
  exact: true,
},
{
  path: '/faq',
  component: ComponentCreator('/faq','155'),
  exact: true,
},
{
  path: '/faucet',
  component: ComponentCreator('/faucet','77a'),
  exact: true,
},
{
  path: '/governance',
  component: ComponentCreator('/governance','6aa'),
  exact: true,
},
{
  path: '/node-operator',
  component: ComponentCreator('/node-operator','b14'),
  exact: true,
},
{
  path: '/roadmap',
  component: ComponentCreator('/roadmap','f45'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
