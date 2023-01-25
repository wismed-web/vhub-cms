import App from "@/App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faPhone,
    faPlus,
    faMinus,
    faCirclePlus,
    faCircleMinus,
    faThumbsUp,
    faCheck,
    faSearch,
    faBookmark,
    faPen,
    faChevronUp,
    faChevronDown,
    faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
    faPhone,
    faPlus,
    faMinus,
    faCirclePlus,
    faCircleMinus,
    faThumbsUp,
    faCheck,
    faSearch,
    faBookmark,
    faPen,
    faChevronUp,
    faChevronDown,
    faRightFromBracket
);

// createApp(App).mount('#app')
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");