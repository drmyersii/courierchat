	/**
	* User.js
	*
	* @description :: TODO: You might write a short summary of how this model works and what it represents here.
	* @docs        :: http://sailsjs.org/#!documentation/models
	*/

module.exports = {

	attributes: {
		id: {
			type: 'integer',
			required: true,
			primaryKey: true
		},
		name: {
			type: 'string',
			required: true
		},
		room: {
			model: 'Room'
		},
		creator: {
			type: 'bool',
			required: true
		},
		messages: {
			collection: 'message',
			via: 'user'
		}
	}
};

