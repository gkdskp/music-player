import { EventEmitter } from "electron";

const eventEmitter = new EventEmitter();

const playing = () => {
	eventEmitter.emit('playing');
}

const 