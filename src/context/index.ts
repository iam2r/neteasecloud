import Service from "@/services";
import EventEmitter from "@/common/EventEmitter";
import BrowsersHack from "@/common/BrowsersHack";
import device from "current-device";

const services = new Service("http://66.11.117.120:3000");
const events = new EventEmitter();
const browsers = new BrowsersHack();

const context = {
  services,
  events,
  browsers,
  device,
};

export { events, services, browsers, device };

export default context;
