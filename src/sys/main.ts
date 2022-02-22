import "./apps/loader";

class Main {
    boot() {
        const windowStore = document.getElementById("windowStore")!;
        const windowTemp = document.getElementById("windowTemp")!;

        if (windowStore && windowTemp) {
            windowStore.innerText = "";
            windowTemp.innerText = "";
        }
    }
}

export const ArcOSMain = new Main();