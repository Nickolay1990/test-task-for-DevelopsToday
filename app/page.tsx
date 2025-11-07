import { Input } from "@/components/Input/Input";
import { Toast } from "@/components/Toast/Toast";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Input
        type="password"
        placeholder="Enter password"
        clearable={true}
      ></Input>
      <Input placeholder="Enter text" clearable={true} type="text"></Input>
      <Input placeholder="Enter text" clearable={true} type="number"></Input>
      <Toast type="success" time={1000}></Toast>
      <Toast type="error" time={5000}></Toast>
    </div>
  );
}
