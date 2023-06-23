// const { User } = require("../../models/userModel");
// const request = require("supertest");

// let server;
// describe("auth middleware", () => {
//   beforeEach(() => {
//     server = require("../../index");
//   });
//   afterEach(async () => {
//     await server.close();
//   });

//   let token;

//   const exec = () => {
//     return request(server).set("x-auth-token", token);
//   };

//   beforeEach(() => {
//     token = new User().getJWTToken();
//   });

//   it("should return 401 if no token is provided", async () => {
//     token = "";

//     const res = await exec();

//     expect(res.status).toBe(401);
//   });

//   it("should return 400 if token is invalid", async () => {
//     token = "a";

//     const res = await exec();

//     expect(res.status).toBe(400);
//   });

//   it("should return 200 if token is valid", async () => {
//     const res = await exec();

//     expect(res.status).toBe(200);
//   });
// });
