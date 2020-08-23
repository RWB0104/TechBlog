---
layout: post
title:  "Github를 이용해 나만의 Jekyll 블로그 만들기 - 5. Jekyll 개발환경 구축하기"
date:   2020-08-24 00:15:11 +0900
excerpt: "Github Jekyll 블로그 개발기"
categories: "Jekyll"
tag:
- github
- github.io
- jekyll
comments: true
background: "bg-jekyll"
---

## 개요

Jekyll 블로그는 호스팅의 주체가 Github이므로, 해당하는 Github Repository에 소스를 업로드해야 실제 블로그에 적용된다. 만약 적용 전에 작성한 글이나 디자인 등을 테스트하고 싶다면? Github에 바로 적용하여 보는 방법도 있지만, 이 경우 모든 사람들이 볼 수 있기 때문에, 디자인 실수나 오타까지 노출된다. 더군다나 블로그에 어떤 기능을 추가할 때, 잘 못 설계할 경우 블로그가 제대로 동작하지 않을 수 있다. 최악의 경우 블로그의 정상적인 사용 자체가 불가능해지는 것이다. 이러한 실수를 미연에 방지하고 싶을 경우, 로컬 PC에 개발환경을 구축해서 나만 접속해서 블로그를 테스트할 수 있다.

<center>
	<h3 class="color-red">※ 로컬에 개발환경을 구축하지 않으실 분들은 해당 과정은 건너뛰어도 무방합니다.</h3>
</center>

---
## Ruby 설치하기

앞에서 살짝 언급했는데, Jekyll은 **Ruby**언어 기반으로 제작된 프레임워크다. Github는 Ruby의 Full-Stack 프레임워크인 Ruby on Rails로 설계된 페이지다. Jekyll 또한 Ruby로 설계함으로써 Github 자체적으로 블로그를 컴파일 및 호스팅이 가능하다. Jekyll는 Ruby의 모듈이므로, Jekyll를 설치하기 위해선 반드시 Ruby 설치가 선행되어야 한다.

개발서버 구축을 위해 설치되어야 할 프로그램은 총 3가지다.

* Ruby: 개발 언어
* Jekyll: Jekyll 프레임워크
* bundler: Ruby 의존성 관리 모듈

위 세 가지가 모두 설치되어야 정상적인 Jekyll 개발서버 구동이 가능하다. 이 모든 구성의 가장 기본이 되는 Ruby 설치에 대해 알아보자.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90341585-be61e380-e03b-11ea-9c96-a97b1a14802a.png">
		<img src="https://user-images.githubusercontent.com/50317129/90341585-be61e380-e03b-11ea-9c96-a97b1a14802a.png" class="w3" />
	</a>
</figure>

Ruby는 일본의 마츠모토 유키히로가 개발한 인터프리터 언어다. 특히 Python과는 자주 비교되며 서로에게 영향을 주는 라이벌 관계에 있다. Python과 비슷하게 배우기 쉬워 초보 개발자도 비교적 쉽게 다룰 수 있는 언어라는 평을 받는다. Ruby의 다운로드는 아래의 버튼을 눌러 접근할 수 있다. 아래의 버튼은 Ruby 공식 홈페이지의 다운로드 메뉴로 연결된다. 아래의 홈페이지는 Windows 전용으로 컴파일된 설치파일이며, 다른 OS는 공식 홈페이지에서 알맞는 설치파일을 받을 수 있다.

<center>
<a href="https://rubyinstaller.org" class="btn btn-danger" target="_blank">Ruby 공식 홈페이지</a>
	<a href="https://rubyinstaller.org/downloads/" class="btn btn-danger" target="_blank">Ruby 공식 다운로드 페이지 for Windows</a>
</center>

다운로드 페이지로 접속하면, 아래와 같은 화면이 뜬다. Windows의 경우 Ruby 홈페이지에서 사용자 OS환경을 자동으로 인식하여 가장 최적화된 버전을 굵은 글씨로 하이라이팅 해주니, 해당 파일을 받아서 설치하면된다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90342006-92e0f800-e03f-11ea-8877-b512b194a8fb.png">
		<img src="https://user-images.githubusercontent.com/50317129/90342006-92e0f800-e03f-11ea-8877-b512b194a8fb.png" class="w5" />
	</a>
</figure>

작성일 기준 최적화 버전은 2.6.6 버전이다. 설치파일을 다운로드받고 실행한다.

#### 1. 라이센스 동의

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90351259-c1c88f80-e07a-11ea-8ce9-8bc86f6cacbc.png">
		<img src="https://user-images.githubusercontent.com/50317129/90351259-c1c88f80-e07a-11ea-8ce9-8bc86f6cacbc.png" class="w4" />
	</a>
</figure>

라이센스 동의 과정이다. [<span class="color-green">I accept the License</span>] 라디오박스를 선택하고 [<span class="color-green">Next</span>]를 누른다.

#### 2. 설치 옵션

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90351270-ca20ca80-e07a-11ea-900a-4886cb0c1101.png">
		<img src="https://user-images.githubusercontent.com/50317129/90351270-ca20ca80-e07a-11ea-900a-4886cb0c1101.png" class="w4" />
	</a>
</figure>

설치 경로 및 옵션을 지정한다. 특별한 이유가 아니라면 설치 경로는 건드리지 않는다. 각 옵션의 의미는 아래와 같다.

* Add Ruby executables to your PATH: PATH 환경변수에 Ruby 실행파일 추가
* Associate .rb and .rbw files with this Ruby Installation: Ruby 설치 시 .rb, .rbw 파일 연결
* Use UTF-8 as default external encoding: 기본 인코딩 UTF-8 지정

위 **세 가지 옵션은 전부 체크**하고 [<span class="color-green">Next</span>]를 누른다.

#### 3. 설치 모듈 선택

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90351287-d7d65000-e07a-11ea-8734-0710d0bdb76c.png">
		<img src="https://user-images.githubusercontent.com/50317129/90351287-d7d65000-e07a-11ea-8734-0710d0bdb76c.png" class="w4" />
	</a>
</figure>

설치할 모듈을 선택한다.

* Ruby-2.6.6 base files: 해당하는 버전의 Ruby Core 파일 (필수)
* MSYS2 development toolchain: 윈도우 터미널에서 Ruby 명령어를 사용할 수 있게 해주는 개발도구

**두 모듈 전부 체크**하고 [<span class="color-green">Next</span>]를 누른다.

#### 3. Ruby 설치 완료

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90351429-37346000-e07b-11ea-9234-081d282f5657.png">
		<img src="https://user-images.githubusercontent.com/50317129/90351429-37346000-e07b-11ea-9234-081d282f5657.png" class="w4" />
	</a>
</figure>

설치 과정은 컴퓨터 사양에 따라 약간의 시간이 소요될 수 있다. 설치가 끝나면 아래와 같이 완료 창이 출력된다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90351500-61861d80-e07b-11ea-850d-d4fba1010fb4.png">
		<img src="https://user-images.githubusercontent.com/50317129/90351500-61861d80-e07b-11ea-850d-d4fba1010fb4.png" class="w4" />
	</a>
</figure>

[Run 'rdisk install' to setup MSYS2...]를 체크하고 [<span class="color-green">Finish</span>]를 누른다. Ruby 설치 이후 자동으로 MSYS2를 설치하는 프로세스를 실행하는 옵션이다. 이 옵션을 체크하지 않으면 추후 'rdisk install' 명렁어를 실행하여 별도로 설치해야하니, 한꺼번에 하는 것이 좋다. 창이 종료되면 곧바로 터미널이 실행된다.

#### 4. MSYS2 설치

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90351514-6a76ef00-e07b-11ea-8185-681aedd8675f.png">
		<img src="https://user-images.githubusercontent.com/50317129/90351514-6a76ef00-e07b-11ea-8185-681aedd8675f.png" class="w4" />
	</a>
</figure>

메뉴를 선택하여 MSYS2를 설치할 수 있다.

* MSYS2 base installation: MSYS2 기본 설치
* MSYS2 system update: MSYS2 업데이트
* MSYS2 and MINGW development toolchain: MSYS2, MINGW 개발도구 설치

[1]번을 입력하여 기본설치를 진행한다.

#### 5. MSYS2 설치 완료

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90351531-75ca1a80-e07b-11ea-946b-090d25fffb2e.png">
		<img src="https://user-images.githubusercontent.com/50317129/90351531-75ca1a80-e07b-11ea-946b-090d25fffb2e.png" class="w4" />
	</a>
</figure>

설치가 시작되면 위와 같이 여러 모듈들이 자동으로 설치된다. 따로 사용자가 신경써야할 부분은 없다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90351553-89758100-e07b-11ea-82b2-27cc5581ded8.png">
		<img src="https://user-images.githubusercontent.com/50317129/90351553-89758100-e07b-11ea-82b2-27cc5581ded8.png" class="w4" />
	</a>
</figure>

설치가 완료되면 위와 같이 CAUTION 메시지가 출력되며, 처음에 본 설치 메뉴가 다시 출력된다. CAUTION의 내용은, MSYS2를 처음 실행하는 것이니 터미널을 재시작하라는 뜻이다. 재부팅은 필요없고 Powershell이나 cmd만 새로 켜주면 적용된다. 이러한 이유는 환경변수가 변경되었을 경우 터미널을 재시작해야 반영되기 때문이다.

#### 6. Ruby 설치 확인

이 모든 과정을 완료하면 Jekyll 개발환경 구축에 필요한 세 가지 요소 중 하나를 설치한 것이다. 시작 프로그램을 확인하면 [Start Command Prompt with Ruby]를 확인할 수 있다. 해당 프로그램을 실행하면 Ruby 전용 쉘 프로그램이 실행된다.

또한 PowerShell 혹은 cmd같은 윈도우 터미널을 실행해서 아래의 명령어를 입력해보자.

ruby -v
{: .notice}

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90352697-0f46fb80-e07f-11ea-9818-54c2045859c2.png">
		<img src="https://user-images.githubusercontent.com/50317129/90352697-0f46fb80-e07f-11ea-9818-54c2045859c2.png" class="w5" />
	</a>
</figure>

위와 같이 버전이 출력되면 정상적으로 설치가 완료된 것이다.

---
## Jekyll 설치하기

이제 jekyll 엔진과 bundler를 설치하면 모든 준비가 끝난다. 명령어 한 줄로 한꺼번에 설치가 가능하다. 시작 프로그램에서 [Start Command Prompt with Ruby]를 실행하고 아래의 명령어를 입력하자.

gem install jekyll bundler
{: .notice}

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90351661-d9ecde80-e07b-11ea-9877-34e263d4852b.png">
		<img src="https://user-images.githubusercontent.com/50317129/90351661-d9ecde80-e07b-11ea-9877-34e263d4852b.png" class="w5" />
	</a>
</figure>

명령어를 실행하면 위과 같이 명령어가 필요한 모듈을 설치한다. 모든 설치가 끝나면 Jekyll과 bundler의 설치가 끝난 것이다. 이제 Jekyll 개발서버를 구동해보자.

---
## Jekyll 개발서버 구동하기

PowerShell 혹은 cmd를 구동하여 Theme를 clone한 폴더로 이동한다. 예를 들어, C:\Users\Administrator\source\test.github.io이 경로라면 아래와 같이 입력할 수 있다.

cd C:\Users\Administrator\source\test.github.io
{: .notice}

해당 경로에서 아래의 명령어를 입력한다.

bundle install
{: .notice}

위 명령어를 실행하면 Jekyll 구동에 필요한 모듈들을 자동으로 다운로드 받는다. 이후 설치가 완료되면 아래의 명령어를 입력하여 개발서버를 구동할 수 있다.

bundle exec jekyll serve
{: .notice}

위 명령어를 실행하면 Jekyll 소스를 컴파일하고 해당 소스를 접근할 수 있게 웹서버 엔진 기능을 수행한다.

* http://localhost:4000

위 페이지로 접속하여 확인해보자. 내가 골랐던 테마가 그대로 뜨는 것을 확인할 수 있다.

bundle exec jekyll serve -host {IP} -port {PORT}
{: .notice}

위처럼 host 혹은 port 인수를 입력하여 원하는 IP나 포트 번호로 구동할 수도 있다. 이를 지정하지 않았을 경우 기본 host는 localhost이며, 포트는 4000이다. 이제 로컬에서 소스를 변경하면, 위 주소를 통해 실서버 적용 없이도 즉시 결과물을 확인할 수 있다.

### <span class="color-red">[ERROR] bundle install이 제대로 실행되지 않아요!</span>

어떠한 이유에서든 bundle install이 제대로 실행되지 않는다면, 아래와 같은 방법을 시도해본다.

1. 임시 폴더 하나를 만든다. (ex: C:\Users\Administrator\source\test)
2. PowerShell 혹은 cmd를 실행하고, 임시 폴더로 접근한다.
3. `bundle install` 명령어를 실행한다. Gemfile, Gemfile-lock 및 여러 기본 파일이 생성되는 것을 확인할 수 있다.
4. 생성된 파일 중 Gemfile, Gemfile-lock을 복사한다.
5. 내 테마의 폴더 안에 덮어씌우고 `bundle exec jekyll serve`를 다시 실행해본다.

다음 장에선 Jekyll의 개발서버를 구축하는 방법에 대해 다뤄본다.