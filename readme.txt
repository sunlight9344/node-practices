1. node 프로젝트 만들기
    [1] 프로젝트 생성: mkdir로 디렉토리 만들기
    [2] 프로젝트 이동: cd
    [3] 프로젝트 초기화: 프로젝트 매니페스트 파일(package.json)
        [project-ex01]$ npm init -y

2. 패키지
    - 완전한 어플리케이션(babel, webpack, nodemon, Lint, ...)
    - 프로젝트에서 사용하는 라이브러리 모듈(module)
    
3. 의존성
    - 개발하는 프로젝트(애플리케이션, 라이브러리)에서 설치하는 패키지
    - 일반 의존성: 개발하고 있는 프로젝트가 런타임 때 사용하는 패키지로 꼭 빌드와 배포에 포함되어야 한다!!!
    - 개발 의존성: 개발에 필요하거나 도움이 되는 패키지로 빌드와 배포에 포함 되지 않는다.

4. 패키지 설치
    - 전역 설치
    - 지역 설치 - 내 프로젝트 안에 node_modules 안에 깔림
    - 패키지 설치
        $ npm i ejs           [지역, 일반]
        $ npm i -D nodemon    [지역, 개발]
        $ npm i -g gulp       [전역, 일반]
        $ npx gulp --version
    
    - 패키지 삭제
        $ npm un ejs
        $ npm un nodemon
        $ npm un -g gulp
      
5. node_modules
    [1] 코어 모듈: node에서 제공하는 모듈(fs, os, process, http, ...)
    [2] npm 모듈: npm을 통해서 node_modules에 설치하고 사용하는 모듈
    [3] 파일 모듈: 파일 경로로 불러온 모듈 안에 함수나 객체를 사용

6. 서버 프로그래밍 잠깐 보기맛