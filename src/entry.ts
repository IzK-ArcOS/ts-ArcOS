const path = "./sys/main.ts";

console.log(`[ENTRYPOINT] Loading '${path}'...`);

import {ArcOSMain} from "./sys/main";

ArcOSMain.boot()