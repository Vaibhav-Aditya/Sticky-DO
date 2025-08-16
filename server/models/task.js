const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const task=new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: String,
    description: String,
    dueDate: Date,
    completed: {
        type: Boolean,
        default: false
    },
    x: {
        type: Number,
        default: 0
    },
    y: {
        type: Number,
        default: 0
    },
    color: {
        type: String,
        default: '#ffa930'
    }
});
const Task=mongoose.model('Task',task);
module.exports=Task;