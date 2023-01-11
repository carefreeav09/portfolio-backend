import { z } from "zod";

const postSchema = z
  .object({
    name: z.string({
      required_error: "Name is required",
    }),
    description: z.string({
      required_error: "Description is required",
    }),
    technologiesUsed: z.array(z.string()),
    projectStatus: z.enum(["in-progress", "completed", "on-hold", "cancelled"]),
    role: z.string({
      required_error: "Role is required",
    }),
    isApp: z.boolean({
      required_error: "isApp is required",
    }),
    appleLink: z.string().optional(),
    androidLink: z.string().optional(),
    link: z.string().optional(),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
    image: z.string().optional(),
  })


export default postSchema;