import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { OpenAI } from "langchain/llms/openai";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <div>hello {hello.data?.greeting}</div>
    </>
  );
}
