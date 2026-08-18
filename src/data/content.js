export const company = {
  name: "카플랜렌트카",
  phone: "1544-0000",
  fax: "02-0000-0001",
  mobile: "010-0000-0000",
  email: "carplan@example.com",
  kakaoId: "carplan0000",
  kakaoUrl: "#kakao-consult",
  naverTalkUrl: "#naver-consult",
  address: "서울시 강남구 테헤란로 123 (테스트빌딩, 5층)",
  founded: "2016-03-01",
  bizNo: "000-00-00000",
};

export const navMenu = [
  {
    label: "월납입금 조회하기",
    href: "#payment",
    sub: [{ label: "월납입금", href: "#payment" }],
  },
  {
    label: "즉시출고 실시간조회",
    href: "#quick-delivery",
    sub: [
      { label: "즉시출고", href: "#quick-delivery" },
      { label: "생산일정", href: "#" },
    ],
  },
  {
    label: "중고차 장기렌터카",
    href: "#used-car",
    sub: [{ label: "중고 렌터카(승계매물)", href: "#used-car" }],
  },
  {
    label: "상품안내",
    href: "#",
    sub: [
      { label: "손비처리기준", href: "#" },
      { label: "맞춤차량", href: "#" },
      { label: "피해사례", href: "#" },
      { label: "할부vs리스vs장기렌트", href: "#" },
      { label: "신차출고후기", href: "#reviews" },
    ],
  },
  {
    label: "회사소개",
    href: "#",
    sub: [
      { label: "회사소개", href: "#" },
      { label: "이용절차", href: "#" },
      { label: "why 카플랜렌트카?", href: "#" },
      { label: "컨설턴트소개", href: "#" },
      { label: "채용공고", href: "#" },
    ],
  },
];

export const heroSlides = [
  {
    id: 1,
    tag: "QUICK DELIVERY",
    title: "영업일 5일 내 즉시출고",
    desc: "인기 트림 재고 차량을 지금 바로 확인하세요",
    cta: "즉시출고 확인하기",
    href: "#quick-delivery",
    bg: "linear-gradient(120deg, #2c3a4e 0%, #3c4f69 60%, #506178 100%)",
  },
  {
    id: 2,
    tag: "MONTHLY PAYMENT",
    title: "전 차종 월납입금 한눈에",
    desc: "할부 · 리스 · 장기렌트 실제 월 납입금을 비교해보세요",
    cta: "월납입금 조회하기",
    href: "#payment",
    bg: "linear-gradient(120deg, #1f2a38 0%, #35455c 60%, #46587a 100%)",
  },
  {
    id: 3,
    tag: "USED RENTCAR",
    title: "믿을 수 있는 중고 장기렌터카",
    desc: "승계매물부터 반납예정 차량까지 투명하게 공개합니다",
    cta: "중고차 보러가기",
    href: "#used-car",
    bg: "linear-gradient(120deg, #26313f 0%, #3c4f69 60%, #5a6f8f 100%)",
  },
];

export const reviews = [
  {
    id: 1,
    model: "그랜XX 2.5 가솔린",
    customer: "박*수",
    text: "장기렌트 처음인데 생각보다 빠르게 진행되고 친절하게 응대해주셔서 감사했습니다. 차도 마음에 들어서 오래 잘 탈 수 있을 것 같아요!",
  },
  {
    id: 2,
    model: "투XX 하이브리드",
    customer: "에*앤",
    text: "여러 회사 견적을 비교해보니 저렴하게 잘 뽑아주셔서 만족합니다. 상담해주신 분도 참 친절했어요.",
  },
  {
    id: 3,
    model: "쏘XX 하이브리드",
    customer: "김*혜",
    text: "처음 운전이라 사고나 보험 등 불안한 게 많았는데 담당자분이 자세히 설명해 주시고 차량도 빠르게 도착했어요.",
  },
  {
    id: 4,
    model: "모델 C",
    customer: "김*형",
    text: "한 달 정도 비교 견적을 받아보고 결국 여기서 계약했습니다. 궁금한 점을 물어볼 때마다 친절하게 답해주셨어요.",
  },
  {
    id: 5,
    model: "G8X",
    customer: "카*즈",
    text: "재계약하면서 이전 차량 중고 처분까지 도와주셨어요. 생각보다 좋은 조건으로 정리가 돼서 놀랐습니다.",
  },
  {
    id: 6,
    model: "펠리XX이드",
    customer: "주*우",
    text: "옵션과 색상 고민이 많았는데 원하는 조건에 맞는 차량을 찾아주셨어요. 예상보다 빨리 출고돼서 좋았습니다.",
  },
];

export const usedCars = [
  { id: 1, name: "쏘XX토", spec: "화이트 / 가솔린 / A/T" },
  { id: 2, name: "스포XX지", spec: "그라파이트 / 디젤 / A/T" },
  { id: 3, name: "맥스XX즈", spec: "브라운 / 디젤 / A/T" },
  { id: 4, name: "GV8X", spec: "화이트 / 디젤 / A/T" },
  { id: 5, name: "BMW 320i", spec: "블랙 / 가솔린 / A/T" },
  { id: 6, name: "그랜XX", spec: "화이트 / 가솔린 / A/T" },
];

export const promoBanners = [
  {
    id: 1,
    title: "오직!! 카플랜렌트카 에서만!",
    subtitle: "즉시출고문의하기",
    desc: "< 영업일 5일내 출고 가능 >",
    href: "#quick-delivery",
  },
  {
    id: 2,
    title: "모든 과정을 투명하게 진행하기에 믿을 수 있습니다",
    subtitle: "중고차 장기렌터카",
    desc: "자세히보기",
    href: "#used-car",
  },
  {
    id: 3,
    title: "나에게 적합한 새차를 사는 방법은?",
    subtitle: "맞춤차량 상담",
    desc: "자세히보기",
    href: "#",
  },
  {
    id: 4,
    title: "카플랜렌트카가 저렴할 수밖에 없는 이유",
    subtitle: "저렴할 수밖에 없는 이유",
    desc: "자세히보기",
    href: "#",
  },
];

export const paymentModels = [
  { id: 1, name: "아반XX", price: "1,975 만원", rent: "223,800원", lease: "297,770원" },
  { id: 2, name: "더 뉴 아반XX Hybrid", price: "2,289 만원", rent: "241,900원", lease: "312,400원" },
  { id: 3, name: "신형 쏘나XX 디 엣지", price: "2,684 만원", rent: "279,300원", lease: "356,800원" },
  { id: 4, name: "쏘나XX 디 엣지 Hybrid", price: "3,053 만원", rent: "308,600원", lease: "392,100원" },
  { id: 5, name: "디 올뉴 그랜XX", price: "3,704 만원", rent: "356,700원", lease: "451,900원" },
  { id: 6, name: "그랜XX Hybrid", price: "4,192 만원", rent: "398,200원", lease: "497,300원" },
  { id: 7, name: "아이오XX6", price: "4,986 만원", rent: "452,100원", lease: "561,000원" },
  { id: 8, name: "코나 Hybrid", price: "2,847 만원", rent: "290,400원", lease: "368,500원" },
  { id: 9, name: "투XX Hybrid", price: "3,381 만원", rent: "334,600원", lease: "421,700원" },
  { id: 10, name: "싼타XX", price: "3,602 만원", rent: "349,200원", lease: "438,900원" },
  { id: 11, name: "펠리XX이드", price: "4,721 만원", rent: "431,800원", lease: "534,600원" },
];
