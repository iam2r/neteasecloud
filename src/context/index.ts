import Service from "@/services";
import EventEmitter from '@/common/EventEmitter';

const services = new Service('http://localhost:3000');
const events = new EventEmitter();

const context = {
    services,
    events
}


export {
    services,
    events
}

export default context;






