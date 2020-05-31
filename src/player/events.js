import { EventEmitter } from "events";

const PlayerEvents = new EventEmitter();

const emitPlayingEvent = () => {
	PlayerEvents.emit('player:playing');
}

const emitLoadStartEvent = () => {
	console.log('Emitting')
	PlayerEvents.emit('player:loading');
}

const emitLoadEndEvent = () => {
	PlayerEvents.emit('player:loaded');
}


const emitStateChangeEvent = () => {
	PlayerEvents.emit('player:toggle');
}

export {
	PlayerEvents,
	emitPlayingEvent,
	emitLoadStartEvent,
	emitLoadEndEvent,
	emitStateChangeEvent
};