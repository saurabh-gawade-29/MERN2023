const { z } = require("zod");

//! Creating Object Scehma for validation
const signupSchema = z.object({
  username: z
    .string({
      required_error: "Name is Required",
    })
    .trim()
    .min(3, { message: "Username must be at least 3 Charachter" })
    .max(255, {
      message: "Username must not be more than 255 Charachter",
    }),
  email: z
    .string({
      required_error: "Email is Required",
    })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "Email must be at least 3 Chars" })
    .max(255, {
      message: "Email must not be more than 255 Charachter",
    }),
  phone: z
    .string({
      required_error: "Phone is Required",
    })
    .trim()
    .min(10, { message: "Phone must be at least 10 Charachter" })
    .max(20, {
      message: "Phone must not be more than 20 Charachter",
    }),
  password: z
    .string({
      required_error: "Password is Required",
    })
    .trim()
    .min(5, { message: "Password must be at least 5 Charachter" }),
  isAdmin: z.boolean({
    required_error: "isAdmin is Required",
  }),
});

//! Creating Object Scehma for validation
const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is Required",
    })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "Email must be at least 3 Chars" })
    .max(255, {
      message: "Email must not be more than 255 Charachter",
    }),
  password: z
    .string({
      required_error: "Password is Required",
    })
    .trim()
    .min(5, { message: "Password must be at least 5 Charachter" }),
});

module.exports = { signupSchema, loginSchema };