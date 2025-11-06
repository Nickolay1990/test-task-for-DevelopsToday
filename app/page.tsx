import { Input } from "@/components/Input/Input";

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
    </div>
  );
}
