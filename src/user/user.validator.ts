import { z } from "zod";

const userSchema = z
  .object({
    username: z
      .string({
        required_error: "Username is required",
      })
      .max(25, {
        message: "Username should be less than 25 characters.",
      })
      .refine(
        (val) => {
          let regex = /^[A-Za-z0-9]*$/;
          return regex.test(val);
        },
        {
          message: "Username must only be letter and numbers.",
        }
      ),
    password: z.string({
      required_error: "Password is required",
    }),
    role: z.enum(["user", "admin"]),
    media: z.string()
  })


export default userSchema;