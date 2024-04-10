const dynamoose = require("dynamoose");
const moment = require('moment-timezone');
const schema = new dynamoose.Schema({
    IDConversation: {
        type: String,
        hashKey: true,
    },
    IDSender: {
        type: String,
        rangeKey: true,
        index: {
            global: true,
            name: 'IDSender-lastChange-index',
            rangeKey: 'lastChange',
            project: false,
        },
    },
    isGroup: Boolean,
    groupName: String,  
    groupAvatar: String,
    IDReceiver: String,
    IDNewestMessage: String,
    groupMembers: {
        type: Array,
        schema: [String],
    },
    listImage: {
        type: Array,
        schema: [String],
    },
    listFile: {
        type: Array,
        schema: [String],
    },
    lastChange: {
        type: String,
        default: moment.tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DDTHH:mm:ss.SSS'),
    }
});

const Conversation = dynamoose.model("Conversation", schema);

module.exports = Conversation;