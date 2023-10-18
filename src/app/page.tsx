import { Login } from "./login/page";

export default function Home() {
  return (
    <main className="flex justify-center items-center bg-[url(../assets/smas.svg)] bg-cover min-h-screen">
      <div>
        <Login />
      </div>
    </main>
  )
}
