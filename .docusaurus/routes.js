
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
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
