import { createApp } from 'vue'
import App from './App.vue'
import '../style.css'
import {
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Image as VanImage,
  Grid,
  GridItem,
  Icon,
  Form,
  Field,
  CellGroup,
  Notify,
  Cell,
  Sidebar,
  SidebarItem,
  TreeSelect,
  List,
  Empty,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
  Badge,
  Stepper,
  ActionSheet,
  SubmitBar,
  Checkbox,
  CheckboxGroup,
  AddressList,
  AddressEdit,
  Divider,
  Tab,
  Tabs,
  ImagePreview
} from 'vant'
import router from './route/main'


createApp(App).
  use(router).
  use(Button).
  use(VanImage).
  use(Swipe).
  use(SwipeItem).
  use(NavBar).
  use(Tabbar).
  use(TabbarItem).
  use(Grid).
  use(GridItem).
  use(Icon).
  use(Form).
  use(Field).
  use(CellGroup).
  use(Notify).
  use(Cell).
  use(Sidebar).
  use(SidebarItem).
  use(TreeSelect).
  use(List).
  use(Empty).
  use(ActionBar).
  use(ActionBarButton).
  use(ActionBarIcon).
  use(Badge).
  use(Stepper).
  use(SubmitBar).
  use(Checkbox).
  use(ActionSheet).
  use(CheckboxGroup).
  use(AddressList).
  use(AddressEdit).
  use(Divider).
  use(Tab).
  use(Tabs).
  use(ImagePreview).
  mount('#app')