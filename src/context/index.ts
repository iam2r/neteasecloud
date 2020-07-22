import Service from "@/services";
import EventEmitter from '@/common/EventEmitter';
import BrowsersHack from '@/common/BrowsersHack';
import device, { DeviceOrientation } from "current-device";
const services = new Service('http://66.11.117.120:3000');
const events = new EventEmitter();
const browsersHack = new BrowsersHack();




device.onChangeOrientation((newOrientation: DeviceOrientation) => {
    console.log(`New orientation is ${newOrientation}`);
    browsersHack.checkHtmlScroll(newOrientation);
});

browsersHack.initPushNavBar();



const context = {
    services,
    events,
    browsersHack,
    device
}


export {
    events,
    services,
    browsersHack,
    device
}

export default context;






