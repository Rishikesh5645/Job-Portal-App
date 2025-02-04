import mongoose from "mongoose";
// for validation of email
import validator from "validator";
// for password hashing
import bcrypt from "bcryptjs";
// used for authentication
import JWT from "jsonwebtoken";

const userSchema=new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Name Is Require"],
      },
      lastName: {
        type: String,
      },
      email: {
        type: String,
        required: [true, " Email is Require"],
        unique: true,
        validate: validator.isEmail,
      },
      password: {
        type: String,
        required: [true, "password is require"],
        minlength: [6, "Password length should be greater than 6 character"],
        select: true,
      }, 
      location: {
        type: String,
        default: "India",
      },
    },
    { timestamps: true }
);

// middelwares for password hashing
userSchema.pre("save", async function () {
  if (!this.isModified) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//compare password
userSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

//JSON WEBTOKEN
userSchema.methods.createJWT = function () {
  return JWT.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};
export default mongoose.model("user",userSchema);