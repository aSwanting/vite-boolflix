import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faStar as fasStar,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

library.add(fasStar, farStar, faMagnifyingGlass);

createApp(App).component("fa-icon", FontAwesomeIcon).mount("#app");
