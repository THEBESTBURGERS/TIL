# 210506 TIL - angular, typescript, sourcetree설치

### Angular 설치

---

- react, view와 같은 SPA framework
- typescript 기반

뭔지 모르지만 일단 설치해봄 ㅠㅠ 정리해서 추가

### Git 명령어

---

- git clone = 처음으로 파일을 로컬로 가져올때
- git commit = 로컬에서만 변경사항 확인
- git add = 확정 지어버리기
- git push = add 항목이 깃허브 저장소 내에 반영됨
- git pull =  깃허브에서 변경/수정된 파일을 로컬로 가져올 때

### Sourcetree 설치

---

![210506%20TIL%20-%20angular,%20typescript,%20sourcetree%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%B5%20b78b6318e3354834837daf64493da33c/Untitled.png](210506%20TIL%20-%20angular,%20typescript,%20sourcetree%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%B5%20b78b6318e3354834837daf64493da33c/Untitled.png)

- 로컬저장소 상단 Add에서 파일 가져오기
- 그래프 = 브랜치를 의미
- 스태시 = 임시 저장소를 만들어 작업가능

### 운영 보조원 환경 구축

---

**git 에서 코드 가져오기 (clone)**

```bash
# powershell 환경
git clone https://github.com/cbnusw/judge-web.git
git clone https://github.com/cbnusw/judge-api-server.git
```

**npm install**

```bash
cd .\judge-api-server\
npm i # i는 install과 같은 의미
```

- 서버 디렉토리에서 npm install 명령어를 사용해 package.json에 명시된 dependencies들을 npm을 이용해 외부에서 다운로드 후 해당 디렉토리의 node-module안에 넣어준다.

### 프로젝트 실행/종료

---

**실행**

```bash
 npm run start (= npm run 과 같은의미)
```

- 서버에서 해당 명령어 실행 시 백그라운드로 작동함

**백앤드 종료**

```bash
np run stop
```

- 프론트 종료는 ****crtl + c 로 종료