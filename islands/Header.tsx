/** @jsx h */
import { h, link } from "preact";
import { tw } from "@twind";

export default function Header() {
    return (
        <div class={tw`flex-row h-auto m-0 bg-black`}>
            <div class={tw`inline-block p-10 pl-20 text-white`}>
                <a href="/">Logo</a>
            </div>
            <p class={tw`inline-block pl-80 text-white`}>
                <a href="#About-me">About me</a>
            </p>
            <p class={tw`inline-block pl-10 text-white`}>
                <a href="#Knowledge">Knowledge</a>
            </p>
            <p class={tw`inline-block pl-10 text-white`}>
                <a href="#My-projects">My projects</a>
            </p>
        </div>
    );
}
