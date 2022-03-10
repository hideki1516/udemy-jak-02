import { About } from '../About';
import { Corporate } from '../Corporate';
import { Access } from '../Access';

export const aboutRouters = [
  {
    path: '/',
    exact: true,
    children: <About />
  },
  {
    path: '/corporate',
    exact: false,
    children: <Corporate />
  },
  {
    path: '/access',
    exact: false,
    children: <Access />
  },
];