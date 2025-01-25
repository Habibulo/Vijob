## Greetings

> 안녕하세요!
>
> 관심을 가지고 지원해 주셔서 진심으로 감사드립니다.  
> 저희는 여러분의 귀중한 시간을 소중히 여기며,  
> 이 과제를 통해 여러분의 멋진 실력을 확인할 수 있기를 기대하고 있습니다.  
> 과제 수행 과정이 여러분에게도 의미있는 경험이 되기를 바라며,  
> 최선을 다해 주시면 감사하겠습니다.
>
> 여러분의 노력에 감사드리며,  
> 좋은 결과로 만날 수 있기를 고대합니다!
>
> 감사합니다. ૮꒰ྀི ⸝⸝• ·̫ •⸝⸝ ꒱ྀིა  

# Vijob 클론 코딩 과제

이 저장소는 **Vijob** 웹사이트의 '홈' 페이지와 '일자리 상세' 페이지를 클론 코딩을 위한 기본 프로젝트입니다.
이 저장소를 포크하여, 아래의 요구사항에 따라 작업을 진행해 주세요.
* Vijob 웹 사이트 : https://app.vijob.net

## 프로젝트 구조

- **ReactJS/NextJS** 기반 프로젝트 생성
- **TypeScript** 사용 권장

## 세부 요구사항

### 1. 홈 페이지

- 카드 목록에 **Infinite Scroll** 기능 적용
- 상세 페이지로 이동 후 돌아왔을 때, **목록 상태 유지**

### 2. 일자리 상세 페이지

- 카드 슬라이드에 **좌우 Infinite Scroll** 적용

### 3. 다국어 지원

- **기본 언어**: 한국어
- 언어 선택 기능 포함 (번역본은 **AI** 활용)

## 추가 요구사항

- **Mock 데이터**를 사용하여 API 요청을 대체
- 제공된 **디자인**에 최대한 근접한 UI 구현
- 상태 관리가 필요하다면 **Context API** 또는 적절한 라이브러리 활용
- **Storybook**을 사용하여 UI 컴포넌트 작성 (가능한 선에서 2개 정도)
- **Jest**를 이용하여 **테스트 코드** 작성 (Given-When-Then 패턴) (가능한 선에서 2개 정도)
- 프로젝트 실행 방법이 포함된 **README 파일**

## 제공 사항

- 일부 아이콘 및 이미지 (/public/images, /public/icons, ...)
- 폰트 (/public/fonts)
- 일부 문구 (/src/data/strings.json)
- 광역시도 및 시군구 데이터 (/src/data/provinces.json, /src/data/cities.json)
- 일자리 카테고리 데이터 (/src/data/job-categories.json)
- 일자리 데이터 참고용 샘플 (/src/data/job.sample.json)
- 과제 수행 중에 필요한 수정은 얼마든지 하셔도 좋습니다 ദ്ദിㆁᴗㆁ✿)

## 제출물

- **GitHub 저장소 링크**를 **service@vijob.net** 으로 보내주세요

## 기한

- 2025년 2월 4일까지 (사정이 있으신 경우 회신 부탁드려요)

####################################################################################################################################################################################
####################################################################################################################################################################################


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
