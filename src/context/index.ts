import NetEaseServices from "@/services";
import EventEmitter from "@/common/EventEmitter";
import BrowsersHack from "@/common/BrowsersHack";
import device, { CurrentDeviceInterface } from "current-device";

export enum Events {
  Loaded = "loaded",
}

export interface Context {
  events: EventEmitter;
  browsers: BrowsersHack;
  device: CurrentDeviceInterface;
  state: State;
  services?: NetEaseServices;
}

export interface State {
  transitions: { [key: string]: string; pages: string };
  resizeCount: number;
}

const events = new EventEmitter();
const browsers = new BrowsersHack();

const state: State = {
  resizeCount: 0,
  transitions: {
    pages: "fade",
  },
};

const context: Context = {
  events,
  browsers,
  device,
  state,
};
export default context;
