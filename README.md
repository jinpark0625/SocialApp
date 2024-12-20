# Social App

## 프로젝트 개요
이 프로젝트는 페이스북이나 인스타그램과 같은 소셜미디어 앱의 기능을 구현한 모바일 애플리케이션입니다. 사용자는 로그인, 회원가입, 프로필 수정, 이미지 업로드, 게시글 업로드(화면) 등을 할 수 있으며, 다크모드와 사용자 프로필 조회, 다른 사용자 프로필 조회 등의 기능도 제공됩니다. React Native와 Expo를 사용하여 개발되었으며, Recoil과 TypeScript를 활용하여 상태 관리를 효율적으로 처리합니다.

## 목차
1. [프로젝트 구조](#프로젝트-구조)
2. [기능](#기능)
3. [미리보기](#미리보기)
4. [사용 기술](#사용기술)
5. [설치 및 실행 방법](#설치-및-실행-방법)
6. [Troubleshooting](#troubleshooting) 

<br/>

## 프로젝트 구조

```
root/
├── app/                  # 애플리케이션 화면
│   ├── (app)/            # 앱 전반적인 구조
│   ├── (tabs)/           # 탭 네비게이션
│   ├── feed/             # 피드 화면
│   ├── profile/          # 사용자 프로필 화면
├── auth/                 # 로그인, 회원가입 로직
├── api/                  # API 관련 로직
├── atoms/                # Recoil 상태 관리
├── assets/               # 이미지, 폰트 등 리소스
├── components/           # 재사용 가능한 컴포넌트
├── common/               # 공통 컴포넌트
├── icons/                # 아이콘
├── layout/               # 레이아웃 관련 컴포넌트
├── sections/             # 화면 구성용 섹션 컴포넌트
├── constants/            # 상수 및 설정값
├── data/                 # Mock 데이터
├── hooks/                # 커스텀 훅
├── screens/              # 화면 컴포넌트
├── styles/               # 스타일 관련 파일
├── types/                # TypeScript 타입 정의
```

<br/>

## 기능

### 1. 로그인 및 회원가입
사용자는 이메일과 비밀번호를 이용하여 로그인 및 회원가입이 가능합니다.
프로필 수정 스크린에서, 프로필 사진 업로드와 사용자 이름 설정 기능 제공.

### 2. 다크모드
앱 전반에 걸쳐 다크모드 및 라이트모드를 지원합니다.

### 3. 프로필 수정 및 이미지 업로드
사용자는 자신의 프로필을 수정할 수 있으며, 프로필 사진을 업로드할 수 있습니다.

### 4. 리스트 보기
사용자 피드에서 다른 사용자들의 게시글을 리스트 형태로 볼 수 있습니다.

### 5. 댓글 보기 및 댓글 작성
현재 화면만 구성된 상태입니다. 기능은 미구현

### 6. 게시글 업로드
현재 화면만 구성된 상태입니다. 기능은 미구현

### 7. 사용자 프로필 조회
자신의 프로필뿐만 아니라 다른 사용자의 프로필도 조회할 수 있습니다.

### 8. 스플래쉬 이미지 및 앱아이콘 적용
스플래쉬 스크린과 앱아이콘을 적용했습니다.

<br/>

## 미리보기

<table width="100%">
  <thead>
    <tr>
      <th width="20%">Login Screen</th>
      <th width="20%">Register Screen</th>
      <th width="20%">Main Screen</th>
      <th width="20%">Main Screen(Dark)</th>
      <th width="20%">Feed Detail Screen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="20%"><img src="https://github.com/user-attachments/assets/074ee495-e7b6-4212-a0f2-a0b4f335acd6"/></td>
      <td width="20%"><img src="https://github.com/user-attachments/assets/2fb254a2-6ba4-4b17-8905-582f9e6a3a16"/></td>
      <td width="20%"><img src="https://github.com/user-attachments/assets/93ee3218-05f1-494c-95a0-9e61611f281e"/></td>
      <td width="20%"><img src="https://github.com/user-attachments/assets/f152b3b1-4aca-4c7e-aef1-b28a8b93e7a1"/></td>
      <td width="20%"><img src="https://github.com/user-attachments/assets/e7a75d28-40c4-4625-8584-2c9d86e8f433"/></td>
    </tr>
  </tbody>
    <thead>
    <tr>
      <th width="20%">Comment Modal Screen</th>
      <th width="20%">Create Feed Screen</th>
      <th width="20%">User Feed Screen</th>
      <th width="20%">Edit User Profile Screen</th>
      <th width="20%">Modal Screen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="20%"><img src="https://github.com/user-attachments/assets/9d9cba8c-8b92-4334-93a5-0bd4e863c8dd"/></td>
      <td width="20%"><img src="https://github.com/user-attachments/assets/20135f34-96ff-48e4-bf82-76e9bd1109f0"/></td>
      <td width="20%"><img src="https://github.com/user-attachments/assets/50a25963-d141-4ab4-b8eb-7d38d663f768"/></td>
      <td width="20%"><img src="https://github.com/user-attachments/assets/e735909a-ac5d-47ea-b107-64e951822cc8"/></td>
      <td width="20%"><img src="https://github.com/user-attachments/assets/2dffb331-26d6-46d5-bab1-f3ca8ccf6211"/></td>
    </tr>
  </tbody>
</table>

<br/>

## 사용기술
React Native, Expo, Recoil, React Hook Form, TypeScript

<br/>

## 설치 및 실행 방법

### 설치
```
git clone https://github.com/jinpark0625/KrononLabs
cd KrononLabs
npm install
```

### 실행
```
npx expo start
```

<br/>

## Troubleshooting

### Android 특정 이슈
- ~~기본 헤더의 left 버튼이 화면 전환 시 자동으로 변경됨.~~
- ~~inputAccessoryView가 페이지 이동 시 사라지는 문제.~~
- ~~안드로이드에서 버튼이 키보드를 가리는 문제.~~

### iOS 특정 이슈
- ~~제스처 핸들링 개선~~
- ~~SearchBar 다크모드 미적용~~
- ~~슬라이드 터치 안되는 이슈~~

