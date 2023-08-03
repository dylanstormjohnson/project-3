import bcrypt from "bcrypt"
import {Schema, model} from "mongoose"

const storySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    backgroundImage: {
      type: String,
      required: true,
    },
    numberOfPossibleEndings: {
      type: Number,
      required: true,
    },
    firstStorySlide: {
      type: Schema.Types.ObjectId,
      ref: "StorySlide",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

const Story = model("Story", storySchema);

export default Story;
