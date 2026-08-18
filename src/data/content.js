export const company = {
  name: "카플랜렌트카",
  legalName: "(주)카플랜컴퍼니",
  ceo: "홍길동",
  phone: "1661-4567",
  hours: "평일 09:00 - 18:30 (주말/공휴일 휴무)",
  kakaoId: "carplan0000",
  kakaoUrl: "#kakao-consult",
  address: "서울특별시 강남구 테헤란로 123 카플랜빌딩 12층",
  founded: "2016-03-01",
  bizNo: "123-45-67890",
  mailOrderNo: "제 2023-서울강남-1234호",
  privacyOfficer: "김철수",
};

export const navMenu = [
  {
    label: "장기렌트",
    href: "#",
    sub: [
      { label: "국산차 장기렌트", href: "#" },
      { label: "수입차 장기렌트", href: "#" },
      { label: "특판 프로모션", href: "#promo" },
    ],
  },
  {
    label: "자동차리스",
    href: "#",
    sub: [
      { label: "개인리스", href: "#" },
      { label: "법인리스", href: "#" },
    ],
  },
  { label: "중고차렌트", href: "#used-car" },
  { label: "이용후기", href: "#reviews" },
  { label: "고객센터", href: "#" },
];

// Only these 6 Unsplash photo IDs are verified to resolve (HTTP 200) — reused
// across hero/review/used-car/payment thumbnails instead of one-off IDs that
// may 404 (several originally supplied IDs did).
const PHOTO_ID = {
  bmw5: "photo-1555215695-3004980ad54e",
  g80: "photo-1583121274602-3e2820c69888",
  sclass: "photo-1549317661-bd32c8ce0db2",
  k5: "photo-1541899481282-d53bffe3c35d",
  gv70: "photo-1503376780353-7e6692767b70",
  eclass: "photo-1590362891991-f776e747a588",
};

function photoUrl(id, width) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
}

const HERO_IMG = {
  bmw5: photoUrl(PHOTO_ID.bmw5, 800),
  g80: photoUrl(PHOTO_ID.g80, 800),
  sclass: photoUrl(PHOTO_ID.sclass, 800),
};

export const heroSlides = [
  {
    id: 1,
    tag: "PREMIUM CAR LIFE",
    titleLines: ["당신의 가치를 높이는", "현명한 자동차 선택"],
    desc: "복잡한 절차 없이, 가장 합리적인 월 렌트료로 원하는 드림카를 지금 바로 만나보세요.",
    primaryCta: "간편 맞춤 상담",
    secondaryCta: "인기 차종 보기",
    secondaryHref: "#payment",
    image: HERO_IMG.bmw5,
    imageAlt: "BMW 5 Series",
    showBadge: true,
  },
  {
    id: 2,
    tag: "SEPTEMBER SPECIAL",
    titleLines: ["추석맞이 특별 한정", "즉시출고 프로모션"],
    desc: "기다림 없는 빠른 출고, 카플랜만의 특별한 혜택. 오늘 계약하면 다음 주에 내 차가 됩니다.",
    primaryCta: "특판 가격 확인",
    secondaryCta: "상담 예약하기",
    secondaryHref: "#promo",
    image: HERO_IMG.g80,
    imageAlt: "Genesis G80",
    showBadge: false,
  },
  {
    id: 3,
    tag: "BUSINESS LEASE",
    titleLines: ["성공하는 비즈니스의", "든든한 파트너"],
    desc: "법인 및 개인사업자 맞춤형 절세 전략부터 체계적인 차량 관리 시스템까지 완벽하게.",
    primaryCta: "사업자 전문 상담",
    secondaryCta: "견적 요청",
    secondaryHref: "#payment",
    image: HERO_IMG.sclass,
    imageAlt: "Mercedes S Class",
    showBadge: false,
  },
];

export const heroBadge = {
  value: "21,578",
  label: ["건의 누적 계약이", "신뢰를 증명합니다"],
};

export const stats = [
  { id: 1, value: "342건", label: "오늘의 상담신청" },
  { id: 2, value: "12,890건", label: "이달의 견적발행" },
  { id: 3, value: "21,578건", label: "누적 계약건수" },
  { id: 4, value: "84명", label: "전문 카매니저" },
];

export const tickerItems = [
  { id: 1, region: "서울 강남구", customer: "김**", model: "제네시스 G80", status: "견적 상담 완료", timeAgo: "5분 전" },
  { id: 2, region: "부산 해운대구", customer: "이**", model: "쏘렌토 하이브리드", status: "즉시출고 확정", timeAgo: "12분 전" },
  { id: 3, region: "경기 성남시", customer: "박**", model: "BMW 520d", status: "리스 승인 완료", timeAgo: "20분 전" },
  { id: 4, region: "인천 연수구", customer: "정**", model: "팰리세이드", status: "견적 상담 완료", timeAgo: "27분 전" },
  { id: 5, region: "대구 수성구", customer: "최**", model: "카니발 하이리무진", status: "즉시출고 확정", timeAgo: "33분 전" },
];

const REVIEW_IMG = {
  suv: photoUrl(PHOTO_ID.bmw5, 200),
  van: photoUrl(PHOTO_ID.gv70, 200),
  ev: photoUrl(PHOTO_ID.eclass, 200),
};

export const reviews = [
  {
    id: 1,
    model: "현대 팰리세이드",
    customer: "이** 고객님 (서울)",
    image: REVIEW_IMG.suv,
    deliveryDays: "7일",
    monthlyPayment: "68만원",
    point: "신속한 인도",
    text: "처음 이용해보는 장기렌트였는데, 상담사분이 너무 친절하게 설명해주셔서 믿음이 갔습니다. 특히 빠른 인도가 제일 맘에 들었어요!",
  },
  {
    id: 2,
    model: "기아 카니발",
    customer: "정** 고객님 (인천)",
    image: REVIEW_IMG.van,
    deliveryDays: "14일",
    monthlyPayment: "52만원",
    point: "합리적 가격",
    text: "여러 업체 비교해봤는데 카플랜이 제일 저렴하더라고요. 가족들이랑 타려고 계약했는데 실내도 깔끔하고 서비스도 대만족입니다.",
  },
  {
    id: 3,
    model: "테슬라 모델3",
    customer: "최** 고객님 (광주)",
    image: REVIEW_IMG.ev,
    deliveryDays: "5일",
    monthlyPayment: "74만원",
    point: "전기차 전문",
    text: "전기차는 보조금 때문에 복잡할 줄 알았는데 상담부터 출고까지 일사천리로 진행해주셨습니다. 기름값 아끼니까 너무 좋네요.",
  },
  {
    id: 4,
    model: "현대 그랜저",
    customer: "박** 고객님 (대전)",
    image: REVIEW_IMG.suv,
    deliveryDays: "10일",
    monthlyPayment: "58만원",
    point: "친절한 응대",
    text: "장기렌트가 처음이라 걱정이 많았는데 계약부터 출고까지 담당자분이 꼼꼼히 챙겨주셔서 편하게 진행했습니다.",
  },
  {
    id: 5,
    model: "기아 쏘렌토 하이브리드",
    customer: "한** 고객님 (수원)",
    image: REVIEW_IMG.van,
    deliveryDays: "9일",
    monthlyPayment: "61만원",
    point: "연비 만족",
    text: "하이브리드라 유지비 걱정을 덜었어요. 견적도 타사보다 확실히 합리적이었습니다.",
  },
  {
    id: 6,
    model: "BMW 520d",
    customer: "장** 고객님 (성남)",
    image: REVIEW_IMG.ev,
    deliveryDays: "16일",
    monthlyPayment: "89만원",
    point: "수입차 전문 상담",
    text: "수입차 리스 조건을 이렇게 쉽게 설명해주시는 곳은 처음이었어요. 서류 처리도 빨라서 좋았습니다.",
  },
];

export const usedCars = [
  {
    id: 1,
    name: "기아 더 뉴 K5",
    spec: "2.0 가솔린 노블레스 | 2021년식",
    image: photoUrl(PHOTO_ID.k5, 600),
    mileage: "2.4만 km",
    remaining: "잔여 24개월",
    monthlyPayment: "34",
  },
  {
    id: 2,
    name: "제네시스 GV70",
    spec: "2.5 터보 AWD | 2022년식",
    image: photoUrl(PHOTO_ID.gv70, 600),
    mileage: "1.8만 km",
    remaining: "잔여 36개월",
    monthlyPayment: "78",
  },
  {
    id: 3,
    name: "현대 아반떼 CN7",
    spec: "1.6 가솔린 인스퍼레이션 | 2020년식",
    image: photoUrl(PHOTO_ID.sclass, 600),
    mileage: "4.2만 km",
    remaining: "잔여 18개월",
    monthlyPayment: "29",
  },
  {
    id: 4,
    name: "기아 카니발 4세대",
    spec: "2.2 디젤 9인승 | 2023년식",
    image: photoUrl(PHOTO_ID.g80, 600),
    mileage: "1.2만 km",
    remaining: "잔여 48개월",
    monthlyPayment: "58",
  },
  {
    id: 5,
    name: "벤츠 E-클래스",
    spec: "E300 4MATIC 익스클루시브 | 2019년식",
    image: photoUrl(PHOTO_ID.eclass, 600),
    mileage: "3.1만 km",
    remaining: "잔여 12개월",
    monthlyPayment: "92",
  },
  {
    id: 6,
    name: "현대 쏘나타 DN8",
    spec: "2.0 가솔린 프리미엄 | 2024년식",
    image: photoUrl(PHOTO_ID.k5, 600),
    mileage: "0.5만 km",
    remaining: "잔여 58개월",
    monthlyPayment: "41",
  },
];

export const promoBanners = [
  {
    id: 1,
    title: ["전국 최저가", "보장제 실시"],
    desc: "타사보다 비쌀 경우 100% 보상",
    href: "#payment",
    gradient: "linear-gradient(135deg, #2c3a4e, #3c4f69)",
    icon: "warning",
  },
  {
    id: 2,
    title: ["무심사", "장기렌트 프로그램"],
    desc: "신용도 관계없이 누구나 승인",
    href: "#",
    gradient: "linear-gradient(135deg, #cf0a2c, #8b041b)",
    icon: "clock",
  },
  {
    id: 3,
    title: ["맞춤형", "절세 컨설팅"],
    desc: "개인/법인 사업자 전문 세무 지원",
    href: "#",
    gradient: "linear-gradient(135deg, #515d6d, #2c3a4e)",
    icon: "chart",
  },
  {
    id: 4,
    title: ["신차급", "사후 관리 패키지"],
    desc: "계약 종료까지 책임지는 케어 서비스",
    href: "#",
    gradient: "linear-gradient(135deg, #1a1a1a, #444444)",
    icon: "cube",
  },
];

const PAYMENT_IMG = [
  photoUrl(PHOTO_ID.g80, 800),
  photoUrl(PHOTO_ID.bmw5, 800),
  photoUrl(PHOTO_ID.sclass, 800),
  photoUrl(PHOTO_ID.k5, 800),
  photoUrl(PHOTO_ID.gv70, 800),
  photoUrl(PHOTO_ID.eclass, 800),
];

export const paymentModels = [
  { id: 1, name: "제네시스 G80", year: "2024년형", price: "5,890만원~", rent: "845,000원", lease: "792,000원", downPayment: "30% 기준 / 48개월" },
  { id: 2, name: "그랜저", year: "2024년형", price: "3,704만원~", rent: "398,200원", lease: "356,700원", downPayment: "20% 기준 / 48개월" },
  { id: 3, name: "쏘렌토", year: "2024년형", price: "3,381만원~", rent: "421,700원", lease: "334,600원", downPayment: "20% 기준 / 48개월" },
  { id: 4, name: "싼타페", year: "2024년형", price: "3,602만원~", rent: "438,900원", lease: "349,200원", downPayment: "20% 기준 / 48개월" },
  { id: 5, name: "카니발", year: "2024년형", price: "4,721만원~", rent: "534,600원", lease: "431,800원", downPayment: "25% 기준 / 48개월" },
  { id: 6, name: "K8", year: "2024년형", price: "3,986만원~", rent: "459,300원", lease: "372,400원", downPayment: "20% 기준 / 48개월" },
  { id: 7, name: "GV80", year: "2024년형", price: "7,210만원~", rent: "912,000원", lease: "845,000원", downPayment: "30% 기준 / 48개월" },
  { id: 8, name: "E-Class", year: "2024년형", price: "8,340만원~", rent: "1,050,000원", lease: "978,000원", downPayment: "35% 기준 / 48개월" },
  { id: 9, name: "5-Series", year: "2024년형", price: "7,680만원~", rent: "965,000원", lease: "901,000원", downPayment: "35% 기준 / 48개월" },
  { id: 10, name: "Model 3", year: "2024년형", price: "5,199만원~", rent: "612,000원", lease: "568,000원", downPayment: "20% 기준 / 48개월" },
  { id: 11, name: "Model Y", year: "2024년형", price: "6,490만원~", rent: "748,000원", lease: "695,000원", downPayment: "20% 기준 / 48개월" },
].map((m, i) => ({ ...m, image: PAYMENT_IMG[i % PAYMENT_IMG.length] }));

export const footerColumns = [
  {
    title: "장기렌트",
    links: ["국산차 장기렌트", "수입차 장기렌트", "사업자 맞춤 렌트", "전기차 특판"],
  },
  {
    title: "자동차리스",
    links: ["개인 오토리스", "법인 운용리스", "이용자 명의리스"],
  },
  {
    title: "커뮤니티",
    links: ["출고 후기", "이벤트 안내", "차량 뉴스"],
  },
  {
    title: "고객지원",
    links: ["자주 묻는 질문", "1:1 문의하기", "오시는 길"],
  },
];
