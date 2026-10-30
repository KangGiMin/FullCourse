const regions = [
  { name: "서면", area: "전포 · 부전" },
  { name: "광안리", area: "민락 · 남천" },
  { name: "해운대", area: "중동 · 우동" },
  { name: "남포동", area: "자갈치 · 광복" },
  { name: "동래", area: "온천 · 명륜" },
];

const picks = [
  {
    name: "스시 하루",
    detail: "전포동 · 초밥 · 데이트",
    rating: "4.8",
    emoji: "🍣",
    color: "foodRose",
  },
  {
    name: "바다집 돼지국밥",
    detail: "광안리 · 국밥 · 혼밥",
    rating: "4.7",
    emoji: "🍲",
    color: "foodSage",
  },
];

const reviews = [
  {
    initial: "민",
    author: "민지의 한입기록",
    place: "오늘 · 전포동",
    restaurant: "스시 하루",
    rating: "4.8",
    quote: "국물이 깔끔하고 면이 쫄깃해요. 점심시간 지나니 웨이팅도 금방 줄었어요.",
    emoji: "🍜",
    color: "reviewWarm",
    likes: 24,
    comments: 6,
  },
  {
    initial: "도",
    author: "도윤이의 부산 산책",
    place: "어제 · 광안리",
    restaurant: "바다집",
    rating: "4.7",
    quote: "혼자 먹기 편하고 반찬이 정갈했어요.",
    emoji: "🥘",
    color: "reviewGreen",
    likes: 12,
    comments: 3,
  },
  {
    initial: "하",
    author: "하루한끼",
    place: "어제 · 해운대",
    restaurant: "오후의 식탁",
    rating: "4.6",
    quote: "창가 자리가 좋아서 천천히 식사하기 좋았습니다.",
    emoji: "🍝",
    color: "reviewBlue",
    likes: 9,
    comments: 2,
  },
];

export default function HomePage() {
  return (
    <>
      

      <div className="page">
        <header className="header">
          <a className="brand" href="/" aria-label="FullCourse 홈">
            <span className="brandMark">F</span>
            FullCourse
          </a>

          <nav className="nav" aria-label="주 메뉴">
            <a href="#discover">오늘의 발견</a>
            <a href="#districts">맛집 찾기</a>
            <a href="#reviews">리뷰 라운지</a>
            <a href="#curation">저장 목록</a>
          </nav>

          <div className="headerRight">
            <span className="location">⌖　부산 전체</span>
            <button className="login" type="button">로그인</button>
          </div>
        </header>

        <main className="content" id="discover">
          <section className="hero" aria-labelledby="hero-title">
            <div>
              <div className="kicker">BUSAN FOOD JOURNAL</div>
              <h1 id="hero-title">부산의 맛집을 찾고,<br />사람들의 이야기를 만나다.</h1>
              <p className="lede">동네의 작은 발견부터 솔직한 리뷰까지.<br />다음 부산 코스를 함께 골라봐요.</p>

              <div className="search" role="search">
                <span className="searchIcon" aria-hidden="true">⌕</span>
                <input aria-label="식당, 메뉴, 지역 검색" placeholder="식당 이름, 메뉴, 동네를 검색해 보세요" />
                <button className="primaryButton" type="button">맛집 찾기</button>
              </div>

              <div className="quickLinks" aria-label="빠른 검색">
                <a href="#districts">서면</a>
                <a href="#districts">광안리</a>
                <a href="#districts">해운대</a>
                <a href="#reviews">혼밥</a>
                <a href="#reviews">데이트</a>
              </div>
            </div>

            <a className="feature" href="#curation" aria-label="이번 주 에디터 픽, 서면 코스 보기">
              <span className="featureStamp">이번 주 에디터 픽</span>
              <span className="featureFood" aria-hidden="true">🍜</span>
              <span className="featureCopy">
                <small>오늘의 부산 한 코스 · 서면</small>
                <strong>오래 걷고, 따뜻하게 한 그릇</strong>
                <span>골목 안 작은 식당과 단골들의 이야기　→</span>
              </span>
            </a>
          </section>

          <section className="section" id="districts" aria-labelledby="district-title">
            <div className="sectionHead">
              <div>
                <h2 id="district-title">동네부터 골라볼까요?</h2>
                <p>오늘 가고 싶은 부산의 분위기를 골라보세요.</p>
              </div>
              <a className="sectionLink" href="#districts">지역 전체 보기　→</a>
            </div>

            <div className="districts">
              {regions.map((region) => (
                <a className="district" href="#curation" key={region.name}>
                  <span><strong>{region.name}</strong><small>{region.area}</small></span>
                  <em aria-hidden="true">↗</em>
                </a>
              ))}
            </div>
          </section>

          <section className="section" id="curation" aria-labelledby="curation-title">
            <div className="sectionHead">
              <div>
                <h2 id="curation-title">이번 주의 부산 코스</h2>
                <p>에디터의 큐레이션과 동네 사람들이 추천한 식당</p>
              </div>
              <a className="sectionLink" href="#curation">코스 더 보기　→</a>
            </div>

            <div className="curation">
              <article className="route">
                <div className="routeLabel">NEIGHBORHOOD PICK · 전포</div>
                <h3>전포 골목에서<br />천천히 즐기는 저녁</h3>
                <p>리뷰어 18명이 남긴 추천 코스</p>
                <div className="routeTags"><span>식당 4곳</span><span>도보 35분</span><span>데이트</span></div>
              </article>

              <div className="picks">
                {picks.map((pick) => (
                  <article className="pick" key={pick.name}>
                    <div className={`food ${pick.color}`} role="img" aria-label={pick.name}>
                      <span className="foodEmoji" aria-hidden="true">{pick.emoji}</span>
                    </div>
                    <div className="pickBody">
                      <div className="pickTop"><strong>{pick.name}</strong><span className="stars">★ {pick.rating}</span></div>
                      <small>{pick.detail}</small>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="reviews" aria-labelledby="reviews-title">
            <div className="sectionHead">
              <div>
                <h2 id="reviews-title">동네 사람들이 남긴 한 입</h2>
                <p>먼저 다녀온 사람들의 리뷰로 다음 장소를 발견해요.</p>
              </div>
              <a className="sectionLink" href="#reviews">리뷰 라운지　→</a>
            </div>

            <div className="social">
              {reviews.map((review, index) => (
                <article className={index === 0 ? "review reviewFeatured" : "review"} key={review.author}>
                  <div className={`reviewArt ${review.color}`} role="img" aria-label={review.restaurant + " 메뉴 사진"}>
                    <span aria-hidden="true">{review.emoji}</span>
                  </div>
                  <div className="reviewMain">
                    <div className="reviewer">
                      <span className="avatar" aria-hidden="true">{review.initial}</span>
                      <span><strong>{review.author}</strong><small>{review.place}</small></span>
                    </div>
                    <blockquote>“{review.quote}”</blockquote>
                    <div className="reviewMeta">
                      <span>{review.restaurant}　★ {review.rating}</span>
                      <span>♡ {review.likes}　댓글 {review.comments}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <nav className="mobileNav" aria-label="모바일 메뉴">
          <a href="#discover">⌂ 발견</a><a href="#districts">⌕ 검색</a><a href="#reviews">＋ 리뷰</a><a href="#curation">♡ 저장</a>
        </nav>
      </div>
    </>
  );
}