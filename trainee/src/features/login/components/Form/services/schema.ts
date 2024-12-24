import {z} from "zod";

const user = z.object({
  username:z.string().min(5,{message:"Too Short"}).max(32,{message:"Too Long"}),
  password:z.string().min(5,{message:"Too Short"}).max(32,{message:"Too Long"})
})
user.shape.username
user.shape.password
const requiredUsername=user.required();