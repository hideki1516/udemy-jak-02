import { About } from '../About';
import { Corporate } from '../Corporate';
import { Access } from '../Access';
import { AboutId } from '../AboutId';

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
  {
    path: '/about-id/:id',
    exact: false,
    children: <AboutId />
  }
];