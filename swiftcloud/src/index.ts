import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import expressPlayground from "graphql-playground-middleware-express"
import { schema } from "./schema";
import cors from "cors";

const app = express();
// Allow requests from your React app's domain
const allowedOrigins = ['http://157.245.203.195', 'http://localhost'];
app.use(cors({
  origin: allowedOrigins,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(express.json());


app.all(
  "/graphql",
  createHandler({
    schema: schema,
  })
);

app.get('/playground', expressPlayground({endpoint: '/graphql'}))

const port = process.env.PORT ? process.env.PORT: 4000
app.listen( port, () => {
  console.log(`Listening to ${port}`);
});