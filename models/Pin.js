const { model, Schema } = require("mongoose");

const PinSchema = new Schema(
  {
    title: String,
    content: String,
    image: String,
    latitude: Number,
    longitude: Number,
    author: { type: Schema.ObjectId, ref: "User" },
    comments: [
      {
        text: String,
        createdAt: { type: Date, default: Date.now },
        author: { type: Schema.ObjectId, ref: "User" },
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("Pin", PinSchema);
