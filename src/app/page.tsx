import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <section className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold mb-4">외국인 고용과 법적 지원, 한 번에 해결</h1>
        <p className="text-lg text-gray-700 max-w-md">
          ‘대충 그거’는 농촌 고령층 고용주와 외국인 노동자를 위한 AI 기반 고용 및 행정 지원 플랫폼입니다.
          언어 장벽, 복잡한 절차, 정보 비대칭 없이 빠르고 간편하게 고용하세요.
        </p>
      </section>
      <NavBar />
    </main>
  );
}
