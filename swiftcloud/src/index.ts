import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { createHandler } from "graphql-http/lib/use/express";
import expressPlayground from "graphql-playground-middleware-express"
import { schema } from "./schema";
import cors from "cors";

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend's URL
}))
app.use(express.json());

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

app.get("/", async (req: Request, res: Response) => {
  const songs = await prisma.song.findMany();

  return res.status(200).json({ success: true, songs });
});
const port = process.env.PORT ? process.env.PORT: 4000
app.listen( port, () => {
  console.log(`Listening to ${port}`);
});