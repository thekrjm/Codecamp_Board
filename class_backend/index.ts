import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { startStandaloneServer } from "@apollo/server/standalone";
import express from "express";
import cors from "cors";
import http from "http";
import bodyParser from "body-parser";

// API docs 만들기
const typeDefs = `#graphql
    input CreateBoardInput{
        writer:String
        title:String
        contents:String
    }

    type MyBoard{
        number:Int
        writer:String
        title:String
        contents:String
    }

  type Query {
    fetchBoard:[MyBoard] #리턴타입 기재
  }

  type Mutation {
    #방법 1
    createBoard(writer:String, title:String, contents:String): String

    #방법 2
    createBoard(createBoardInput: CreateBoardInput!): String
  }
`;

// API 만들기
const resolvers = {
  Query: {
    fetchBoard: async () => {
      const result = Board.find();
      console.log(result);

      return result;
    },
  },
  Mutation: {
    createBoard: async (parents: any, args: any, context: any, info: any) => {
      await Board.insert({
        ...args.CreateBoardInput,

        // writer: args.CreateBoardInput.writer,
        // title: args.CreateBoardInput.title,
        // contents: args.CreateBoardInput.contents,
      });
    },
  },
};

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  "/graphql",
  cors({ origin: ["허용할 주소"] }),
  bodyParser.json(),
  expressMiddleware(server)
);

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34,64,244,122",
  port: 5001,
  username: "test",
  password: "test",
  database: "test",
  entities: [Board],
  logging: true, //새로 바뀐 코드가 어떻게 바뀌는지 확인
  synchronize: true, //DB와 동기화
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB접속 성공");
    //24시간 서버 운영
    startStandaloneServer(server).then(() => {
      console.log("graphql 서버가 실행되었습니다.");
    });
  })
  .then((error) => {
    console.log("DB접속 실패: ", error);
  });

//https://www.npmjs.com/package/@apollo/server 참고
