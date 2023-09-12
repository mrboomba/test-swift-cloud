import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { createHandler } from "graphql-http/lib/use/express";
import expressPlayground from "graphql-playground-middleware-express"
import { schema } from "./schema";

const app = express();
// instance of prisma client
const prisma = new PrismaClient()


app.all(
  "/graphql",
  createHandler({
    schema: schema,
  })
);

app.get('/playground', expressPlayground({endpoint: '/graphql'}))

// middlewares
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  const songs = await prisma.song.findMany();

  return res.status(200).json({ success: true, songs });
});

// app.post("/", async (req: Request, res: Response) => {
//   const { text, userId } = req.body;

//   const song = await prisma.song.create({
//     data: {
//       text,
//       userId,
//     },
//   });

//   return res.status(201).json({ success: true, song });
// });

app.listen(3000, () => {
  console.log(`Listening to 3000`);
});