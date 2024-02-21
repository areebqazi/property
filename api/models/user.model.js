import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: "Name is required",
      unique: true,
    },
    email: {
      type: String,
      required: "Email is required",
      unique: true,
    },
    password: {
      type: String,
      required: "Password is required",
    },
    avatar: {
      type: String,
      default:
        "https://imgs.search.brave.com/Tcf04M1nEL7smn0aI01rQ1Mq44QnU5NPmNRV_wuvEIc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY0LzY3LzYz/LzM2MF9GXzY0Njc2/MzgzX0xkYm1oaU5N/NllwemIzRk00UFB1/RlA5ckhlN3JpOEp1/LmpwZw",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
