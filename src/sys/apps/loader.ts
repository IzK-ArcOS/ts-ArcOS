import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
import { Environment } from '../ts/env';
// App TS imports // these will handle the rest

class AM {
    async loadAppFile(fileName: string) {
        console.log(fileName)
        if (existsSync(fileName)) {
          const data = await readFile(fileName, { encoding: 'utf-8' });
      
          const temp = document.getElementById('temp')!;
      
          if (temp) {
            temp.innerHTML = data;
      
            if (temp.children[0].id) {
              this.registerApp(temp.children[0].id);
            }
          }
          return;
        } else console.error("h");
      }
      
      registerApp(id: string) {
        const appList = Environment.get('applist')! as string[];
      
        if (appList) {
          appList.push(id);
      
          Environment.set('applist', appList);
      
          console.log(Environment.get("applist")!);
        }
      }
      
}

export const AppManagement = new AM();

import './boot/index.ts';