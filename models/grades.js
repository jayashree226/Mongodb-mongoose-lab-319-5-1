import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema({
  class_id: {
    type: Number,
    required: true,
  },
  learner_id: { type: Number, required: true },
  scores: [{ score_type: String, score: Number }],
});

export default mongoose.model("grades", gradeSchema);

//===========================================================================================

// import mongoose from 'mongoose';

// const gradeSchema = new mongoose.Schema({
//     class_id: {
//         type: Number,
//         required: true,
//     },

//     learner_id: {
//         type: Number,
//         required: true,
//     },

//     scores:[
//         {
//             type:{
//                 type: String,
//             },

//             score:{
//                 score: Number,
//             },
//         }
     
           
//     ]

// });

//     export default new mongoose.model('Grades', gradeSchema);