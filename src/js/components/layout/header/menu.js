import DarkLightModeItem from "./dark-light-mode";
import FullScreenItem from "./full-screen";
import SearchItem from "./search";
import UserItem from "./user";

const Menu = () => {
    const div = document.createElement('div');
    div.className = 'header__menu';

    // search
    const headerSearch = document.createElement('div');
    headerSearch.className = 'header__search';
    const searchItem = SearchItem();
    headerSearch.append(searchItem);

    // settings
    const headerSetting = document.createElement('div');
    headerSetting.className = 'header__settings';
    const itemList = document.createElement('ul');
    itemList.className = 'header__settings-list';

    const fullscreen = FullScreenItem('fullscreen.svg');
    const darkLightMode = DarkLightModeItem();
    const userItem = UserItem('Hi, Tommy');

    const list = [fullscreen, darkLightMode, userItem];
    list.forEach(item => {
        if (item) {
            itemList.append(item)
        }
    });
    headerSetting.append(itemList);
    div.append(headerSearch, headerSetting);
    return div;
}

export default Menu;