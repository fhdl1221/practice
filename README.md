# 클라우드 기반 AI융합 자바 풀스택 웹 개발자 실전 과정 실습 기록

## 실습 기록

- 2025-09-09: [git 프로젝트 생성](git/git-init/README.md)

# SoftDay Backend Server

SoftDay는 사용자의 스트레스를 관리하고 마음 건강을 챙겨주는 AI 기반 멘탈 케어 서비스의 백엔드 서버입니다. Spring Boot를 기반으로 구축되었으며, Google Gemini AI를 활용한 상담 및 분석 기능, Supabase(PostgreSQL) 데이터베이스 연동, 그리고 웹 푸시 알림 기능을 제공합니다.

## 🛠 Tech Stack

- **Language**: Java 17+
- **Framework**: Spring Boot 3.x
- **Security**: Spring Security, JWT (JSON Web Token)
- **Database**: PostgreSQL (via Supabase), Spring Data JPA
- **AI**: Google Gemini Pro API (`gemini-2.5-flash`)
- **Push Notification**: Web Push (VAPID)
- **Build Tool**: Gradle (권장) or Maven

## 📂 Project Structure

```text
backend/
├── config/             # Security, Gemini, CORS 설정
├── controller/         # REST API 컨트롤러 (Auth, Chat, CheckIn 등)
├── dto/                # 데이터 전송 객체 (Request/Response)
├── model/              # JPA 엔티티 (User, DailyCheckIn, ChatMessage 등)
├── repository/         # DB 접근 레포지토리 (JpaRepository)
├── scheduler/          # 스케줄러 (매일 오전 9시 스트레스 체크 및 알림)
├── security/           # JWT 인증 필터 및 프로바이더
└── service/            # 비즈니스 로직 (ChatService, AnalyticsService 등)

⚙️ Installation & Setup
1. 사전 준비 사항
Java 17 이상 설치

PostgreSQL 데이터베이스 (또는 Supabase 프로젝트 생성)

Google Gemini API Key 발급

2. 환경 변수 설정 (application.properties)
src/main/resources/application.properties 파일에 아래 설정을 추가하거나 수정해야 합니다.

```
# Server Configuration
server.port=8080

# Database Configuration (Supabase/PostgreSQL)
spring.datasource.url=jdbc:postgresql://<YOUR_SUPABASE_HOST>:5432/postgres
spring.datasource.username=<YOUR_DB_USERNAME>
spring.datasource.password=<YOUR_DB_PASSWORD>
spring.jpa.hibernate.ddl-auto=update

# Google Gemini API
gemini.api.key=<YOUR_GEMINI_API_KEY>
gemini.api.url=[https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent](https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent)

# JWT Security
app.jwtSecret=<YOUR_JWT_SECRET_KEY_AT_LEAST_32_CHARS>
app.jwtExpirationInMs=604800000

# Web Push (VAPID Keys)
vapid.public.key=<YOUR_VAPID_PUBLIC_KEY>
vapid.private.key=<YOUR_VAPID_PRIVATE_KEY>
vapid.subject=mailto:admin@softday.com

3. 실행 방법
Bash
```
# Gradle 사용 시
./gradlew bootRun

# Maven 사용 시
./mvnw spring-boot:run
```
🚀 Key Features
회원 인증: JWT 기반 로그인/회원가입, 사용자 프로필 및 선호도 관리.

데일리 체크인: 매일 스트레스 레벨과 원인을 기록하고 DB에 저장.

AI 챗봇 상담: 사용자의 대화 기록을 바탕으로 Gemini가 공감형 답변 제공 및 감정 분석 수행.

통계 대시보드: 주간/월간 스트레스 추이 및 주요 원인 분석 데이터 제공.

스마트 알림: 매일 오전 9시, 최근 스트레스 데이터를 분석하여 필요 시 푸시 알림 발송.

루틴 추천: 사용자 상태에 따른 맞춤형 회복 루틴(명상, 호흡 등) 추천.
