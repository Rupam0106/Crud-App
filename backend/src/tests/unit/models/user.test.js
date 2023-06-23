require("dotenv").config();
const User = require("../../../models/userModel");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

describe("user.getJWTToken", () => {
  it("should return a valid JWT", () => {
    const payload = {
      _id: new mongoose.Types.ObjectId().toHexString(),
      
    };
    console.log(payload)
    const user = new User(payload);
    const token = user.getJWTToken();
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded)
    expect(decoded.id).toMatchObject(payload);
  });
});
