/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import Header from "../islands/Header.tsx";

export default function Home() {
    return (
        <div class={tw`m-0`}>
            <Header />
            <div class={tw`m-10`}>
                <img
                    src="/logo.svg"
                    height="50px"
                    width="50px"
                    alt="dgorp logo: two different personalities"
                />
                <p class={tw`my-6`}>
                    Welcome to `fresh`. Try update this message in the
                    ./routes/index.tsx file, and refresh.
                </p>
                <Counter start={0} />
            </div>
        </div>
    );
}
