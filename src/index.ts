import './styles.scss';
import { App } from './app';

window.onload = () => {
  const appElement = document.getElementById('app');
  if (!appElement) throw new Error('App element is not found');
  const app = new App(appElement);
};
