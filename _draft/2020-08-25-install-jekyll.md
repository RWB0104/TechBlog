---
layout: post
title:  "Github를 이용해 나만의 블로그 만들기 - 3. Jekyll 개발환경 구축하기"
date:   2020-08-25 17:19:13 +0900
excerpt: "Github Jekyll 블로그 개발기"
categories: "Jekyll"
tag:
- jekyll
comments: true
background: "bg-jekyll"
---

## 개요

이 장에선 Jekyll 개발환경을 구축하는 방법에 대해 기술한다. 기본적인 환경은 아래와 같다.

* OS: Windows 10
* IDE: Visual Studio Code

사용하는 OS에 따라 세부적인 설치방법이 달라짐에 유의하자. 특히 PowerShell 같이 터미널 명령어를 사용하게 되니, 이 부분에선 각 OS에 맞는 명령어를 찾아 입력하도록 하자. 큰 골자는 동일하다. 본문은 가장 대중적인 Windows 10을 기준으로 설명한다.

<center>
	<h3 class="color-red">※ 로컬에 개발환경 구축 없이 Github에 바로 적용할 분들은 이 파트를 넘어가도 무방하다.</h3>
</center>

---
## Ruby 설치하기

Jekyll 얘기하다 뜬금없이 Ruby는 또 뭔가 생각할 수도 있을 것 같다. Jekyll은 `Ruby`를 기반의 프레임워크이다. 따라서 Jekyll을 사용하기 위해선 Ruby의 설치가 필연적이다. **JAVA의 JDK**가 그렇고, **C#의 .NET Framework**가 그렇듯이 말이다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90341585-be61e380-e03b-11ea-9c96-a97b1a14802a.png">
		<img src="https://user-images.githubusercontent.com/50317129/90341585-be61e380-e03b-11ea-9c96-a97b1a14802a.png" />
	</a>
</figure>

Ruby는 1995년 마츠모토 유키히로가 만든 인터프리터 언어로, Pythone과 대결 구도에 있는 Script 언어다. 일본에서는 로컬라이징으로 인해 Pythone 보다 훨씬 인기가 많다. 우리는 Ruby를 통해 무언가를 개발하는 것보다 Jekyll 프레임워크를 구동하는 것이 목적이므로, 우선 덮어두고 설치를 진행해보자.

<span class="color-red">Mac OS의 경우 기본적으로 설치된 Ruby로는 Jekyll 설치가 정상적으로 되지 않는 경우가 많으니, **Ruby를 따로 설치해서 진행**하는 것을 권장한다.</span>

아래의 버튼을 누르면 **Ruby 공식 홈페이지의 다운로드 페이지**로 연결된다.

<center>
	<a href="https://rubyinstaller.org/downloads/" class="btn btn-info" target="_blank">Ruby 공식 홈페이지 for Windows 10</a>
</center>

버튼을 클릭하면 아래와 같은 창이 뜨는데, `WITH DEVKIT`의 볼드처리된 텍스트를 클릭하여 다운로드를 받는다. 아마 안정화버전으로 추측되며, 사용자의 컴퓨터 환경에 따라 32비트, 64비트 중 알맞은 비트의 설치본을 하이라이팅 해준다. 현재 기준으로 버전은 2.6.6이다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90342006-92e0f800-e03f-11ea-8877-b512b194a8fb.png">
		<img src="https://user-images.githubusercontent.com/50317129/90342006-92e0f800-e03f-11ea-8877-b512b194a8fb.png" />
	</a>
</figure>

아래의 순서를 따라 설치를 진행한다.

#### 1. 약관 동의

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90351259-c1c88f80-e07a-11ea-8ce9-8bc86f6cacbc.png">
		<img src="https://user-images.githubusercontent.com/50317129/90351259-c1c88f80-e07a-11ea-8ce9-8bc86f6cacbc.png" />
	</a>
</figure>

설치파일을 실행하면, 약관 확인 과정이 처음으로 표시된다. [<span class="color-green">I accept the License</span>] 버튼을 눌러 동의하고 다음으로 넘어간다.

#### 2. 설치환경 구성

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90351270-ca20ca80-e07a-11ea-900a-4886cb0c1101.png">
		<img src="https://user-images.githubusercontent.com/50317129/90351270-ca20ca80-e07a-11ea-900a-4886cb0c1101.png" />
	</a>
</figure>

설치 기본 경로와 몇 가지 옵션이 표시된다. 설치 경로는 건드리지 않아도 무방하다. 아래의 옵션은 모두 체크한다.

* Add Ruby executables to your PATH: Ruby 실행파일을 환경변수에 추가
* Associate .rb and .rbw files with Ruby installation: 설치 과정에 .rb, .rbw 파일을 연결
* Use UTF-8 as default external encoding: UTF-8을 기본 인코딩으로 지정

#### 3. 컴포넌트 선택

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90351287-d7d65000-e07a-11ea-8734-0710d0bdb76c.png">
		<img src="https://user-images.githubusercontent.com/50317129/90351287-d7d65000-e07a-11ea-8734-0710d0bdb76c.png" />
	</a>
</figure>

두 가지 컴포넌트가 표시된다. 하나는 코어 파일이고, 다른 하나는 개발도구다. 둘 다 체크하고 진행한다.

#### 4. 설치

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90351429-37346000-e07b-11ea-9234-081d282f5657.png">
		<img src="https://user-images.githubusercontent.com/50317129/90351429-37346000-e07b-11ea-9234-081d282f5657.png" />
	</a>
</figure>

설치가 진행된다.

#### 5. Ruby 설치 완료

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90351500-61861d80-e07b-11ea-850d-d4fba1010fb4.png">
		<img src="https://user-images.githubusercontent.com/50317129/90351500-61861d80-e07b-11ea-850d-d4fba1010fb4.png" />
	</a>
</figure>

Ruby 설치가 완료됐다. 아래의 옵션을 체크하고 설치를 완료하자. 체크한 옵션은 **3. 컴포넌트 선택** 과정에서 체크한 개발도구 설치 명령어를 자동으로 실행한다는 뜻이다.

이를 체크하지 않으면 아래의 명령어를 이용하여 후에 직접 설치할 수도 있다.

{% highlight html %}
ridk install
{% endhighlight %}

#### 6. MSYS2 설치 옵션 선택

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90351531-75ca1a80-e07b-11ea-946b-090d25fffb2e.png">
		<img src="https://user-images.githubusercontent.com/50317129/90351531-75ca1a80-e07b-11ea-946b-090d25fffb2e.png" />
	</a>
</figure>

위 과정을 동일하게 진행하면 Ruby 설치 프로세스 이후 아래와 같은 콘솔창이 뜬다. MSYS2를 설치하는 과정으로, 1번 [<span class="color-green">MSYS2 base installation</span>]을 선택하여 설치한다.
해당 메뉴는 MSYS2를 설치하는 기본 메뉴다.

#### 7. MSYS2 설치

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90351531-75ca1a80-e07b-11ea-946b-090d25fffb2e.png">
		<img src="https://user-images.githubusercontent.com/50317129/90351531-75ca1a80-e07b-11ea-946b-090d25fffb2e.png" />
	</a>
</figure>

위 그림과 같이 설치과정이 진행된다.

#### 8. MSYS2 설치 완료

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90351553-89758100-e07b-11ea-82b2-27cc5581ded8.png">
		<img src="https://user-images.githubusercontent.com/50317129/90351553-89758100-e07b-11ea-82b2-27cc5581ded8.png" />
	</a>
</figure>

설치가 완료되면 위와 같이 안내 메시지와 함께 초기 메뉴로 돌아간다.
안내 메시지의 뜻은 MSYS2를 처음 구동하므로 PowerShell 혹은 cmd를 껐다가 다시 켜서 사용하라는 의미이다. 이러한 과정이 필요한 이유는, 설치과정에서 PATH라는 환경변수가 변경됐기 때문이다. **쉘 프로그램에서 변경된 환경변수를 반영하려면 쉘 프로그램을 재시작**해야한다. 어차피 따로 쉘 프로그램을 킬 것이므로, 그냥 알아만 두자. 해당 창은 종료해도 된다.

#### 9. Ruby 설치확인

새로운 PowerShell 혹은 cmd를 실행하고, 아래의 명령어를 입력하자

{% highlight html %}
ruby -v
{% endhighlight %}

아래와 같이 버전정보가 정상적으로 출력되면 Ruby 설치가 완료된 것이다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90352697-0f46fb80-e07f-11ea-9818-54c2045859c2.png">
		<img src="https://user-images.githubusercontent.com/50317129/90352697-0f46fb80-e07f-11ea-9818-54c2045859c2.png" />
	</a>
</figure>

이러한 과정을 완료하면 Ruby를 실행할 수 있다. [시작]에서 [Start Command Prompt with Ruby]를 실행한다. Ruby 전용 명령어를 입력할 수 있는 콘솔창이 뜬다. 물론 아직 많이 남았으니, 계속해서 Jekyll를 설치해보자.

---
## Jekyll 설치하기

Ruby 설치가 완료됐다면, Ruby 콘솔에서 명령어를 입력하여 Jekyll을 설치하자. 명령어는 아래와 같다.

{% highlight html %}
gem install jekyll bundler
{% endhighlight %}

* Jekyll: Jekyll 프레임워크
* Bundler: Ruby 의존성 관리도구 (node.js의 npm같은 역할)

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/90351661-d9ecde80-e07b-11ea-9877-34e263d4852b.png">
		<img src="https://user-images.githubusercontent.com/50317129/90351661-d9ecde80-e07b-11ea-9877-34e263d4852b.png" />
	</a>
</figure>

위 두 패키지를 설치한다. 이 두 패키지는 Jekyll 블로그 개발환경을 위한 **최소한**의 패키지로, 차후 블로그에 여러 기능(ex. 댓글)을 붙인다면 위 명령어로 해당하는 패키지를 설치하면 된다.

이렇게 Jekyll와 Bundler까지 설치하면 로컬 환경에서 Jekyll 테스트서버를 구동할 수 있는 환경이 구축됐다. 다음 장에선 원하는 Jekyll 테마를 선택하고 Github에 올리는 방법에 대해 다루고자 한다.