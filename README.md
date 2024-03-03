# jc-survey (Google Forms Clone)

## Features

- Admin Page: the page that creates forms
  - Creating forms with sections and questions
- Client Page: what fill out forms
  - Server-Driven UI: UI from survey data
  - real-time answer sync

## Built With

- Build System: Monorepo (w/Turborepo)
- Bundler: Vite
- UI Library: React
- CSS: Vanilla-Extract
- Validation: Zod
- Back-End & Database: Supabase

## 모노레포 의존성 설치

```bash
pnpm install
```

이후 아래 커맨드들로 실행 가능

## 전체 실행 방법

```bash
pnpm dev
```

## admin 실행 방법

```bash
pnpm dev:admin
```

## web 실행 방법

```bash
pnpm dev:web
```
