import NavBar from '@/components/NavBar';

export default function WorkerPage() {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <section className="flex-grow px-4 py-6">
        <h1 className="text-2xl font-bold mb-4 text-center">노동자 전용 기능</h1>
        <ul className="space-y-4">
          <FeatureItem
            title="모국어 지원 프로필 등록"
            description="경력, 희망 직종, 언어 능력 등을 입력해 개인 프로필을 완성하세요."
          />
          <FeatureItem
            title="위치 기반 일자리 추천"
            description="현재 위치와 조건에 맞는 일자리를 쉽게 찾고 간편하게 지원할 수 있습니다."
          />
          <FeatureItem
            title="전자 계약 확인 및 서명"
            description="모국어 번역본과 원문 계약서를 함께 보고 전자 서명을 완료하세요."
          />
          <FeatureItem
            title="생활 및 법률 정보"
            description="한국의 주거, 교통, 병원, 문화 등 실생활에 필요한 정보를 제공합니다."
          />
        </ul>
      </section>
      <NavBar />
    </main>
  );
}

function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <li className="border p-4 rounded-xl shadow-sm hover:shadow-md transition">
      <h2 className="font-semibold text-lg">{title}</h2>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </li>
  );
}
