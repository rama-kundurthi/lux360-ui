// assets
import { IconDashboard } from '@tabler/icons-react';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'fatures',
  title: '',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Features',
      type: 'item',
      url: '/features',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
