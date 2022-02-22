import { AppManagement } from "../loader";
import path from "path";

import "./index.css";
import "./index.app";

console.log("BOOT LOADING...")
AppManagement.loadAppFile("./src/sys/apps/boot.app");