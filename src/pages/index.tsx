import { api } from "~/utils/api";
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { ConversationChain } from "langchain/chains";
import { env } from "../env.mjs";

const template = "What is a good name for a company that makes {product}?";
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ["product"],
});

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const model = new OpenAI({
    openAIApiKey: env.NEXT_PUBLIC_OPENAI_API_KEY,
    temperature: 0.9,
  });
  const chain = new ConversationChain({ llm: model, prompt: prompt });

  return (
    <>
      <div
        onClick={async () => {
          console.log("here");
          const res = await chain.call({ product: "black socks" });

          console.log(res);
        }}
      >
        hello {hello.data?.greeting}
      </div>
    </>
  );
}
