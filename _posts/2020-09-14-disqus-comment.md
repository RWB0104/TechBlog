---
layout: post
title:  "Github를 이용해 나만의 Jekyll 블로그 만들기 - 10. Disqus 댓글 기능 사용하기"
date:   2020-09-14 21:27:56 +0900
excerpt: "흠... 어쩌면 없는 게 나을 수도?"
categories: "Jekyll"
tag:
- github
- github.io
- jekyll
- jekyll 블로그
- disqus
comments: true
background: "bg-jekyll"
---

## 개요

일반적인 게시판과 달리 블로그는 일반적으로 해당 블로그의 소유자만 글 작성이 가능하다는 특징이 있다. 이러한 특징으로 인해 블로그는 상호간의 의견 교환이나 소통이 취약하다. 댓글은 블로그의 특징을 해치지 않으면서도 방문자와의 소통을 이어주는 매우 유용한 기능이다. 단순한 안부나 소통 뿐만 아니라, 작성 중에 발생할 수 있는 오류나 문제점에 대한 피드백도 받을 수 있으므로 양질의 정보전달에 도움을 준다.

블로그나 카페같은 게시판 서비스라면 어디에나 제공되는 것이 댓글 기능이지만, 보이는 것과는 달리 댓글 기능은 그리 간단한 것이 아니다. 기본적으로 사용자가 작성한 댓글을 저장하기 위한 DB가 기본적으로 필요하며, 작성한 내용, 작성자 정보 등이 저장되어야 하며, 해당 게시글과 댓글이 올바르게 연결될 수 있도록 연결점을 보관해야한다.

문제는 이러한 성향의 서비스는 동적 블로그에 적합한 방식이다. 기존에 보관하고 있는 페이지를 URL에 맞게 보여만주는 것이 아닌, 불특정 다수가 작성, 수정, 삭제한 데이터를 올바르게 호출해서 보여주는 방식은 정적 블로그의 의의와는 전혀 어울리지 않는다. 의의를 따지기 이전에, Github 호스팅은 단순 웹 서버 호스팅만을 제공할 뿐, 별도의 DB 호스팅은 제공하지 않는다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/92674334-0a145e00-f358-11ea-9e5f-2a7e60b92c0e.png">
		<img src="https://user-images.githubusercontent.com/50317129/92674334-0a145e00-f358-11ea-9e5f-2a7e60b92c0e.png" class="w6" />
	</a>
</figure>

Disqus는 정적 블로그라는 악조건에서도 댓글 기능을 매우 쉽게 구현할 수 있도록 도와주는 서비스다. 이 장에서는 Disqus를 이용하여 댓글 서비스를 구축하는 방법에 대해 설명하고자 한다.

---
## Disqus로 댓글 기능 사용하기

Disqus를 활용하면 댓글 서비스를 쉽게 구축할 수 있다. 사용자의 Disqus 프로필을 표시해주며, 텍스트 이외의 사진, GIF 등 다양한 멀티미디어 데이터를 내용으로 작성할 수 있다. 간단한 작업만으로도 매우 고도화된 UI와 기능을 가진 댓글 기능을 구축할 수 있는 것이다.

#### 1. Disqus 가입하기

Disqus 서비스를 사용하기 위해 Disqus에 가입한다. 아래의 버튼을 클릭하여 공식 홈페이지로 접속할 수 있다.

<center>
	<a href="https://disqus.com/" class="btn btn-info">Disqus 바로가기</a>
</center>

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/92674398-329c5800-f358-11ea-87e1-7c292797a28f.png">
		<img src="https://user-images.githubusercontent.com/50317129/92674398-329c5800-f358-11ea-87e1-7c292797a28f.png" class="w6" />
	</a>
</figure>

위의 공식 홈페이지에서 <span class="color-blue">GET STARTED</span> 버튼을 클릭한다. 처음이라면 회원가입 페이지가 나온다. Google이나 Facebook 같은 소셜 로그인도 지원하니 간편하게 진행이 가능하다.

#### 2. Disqus에 사이트 추가하기

로그인 후 다시 <span class="color-blue">GET STARTED</span> 버튼을 클릭한다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/92674867-2f559c00-f359-11ea-9f37-d47d860948cc.png">
		<img src="https://user-images.githubusercontent.com/50317129/92674867-2f559c00-f359-11ea-9f37-d47d860948cc.png" class="w4" />
	</a>
</figure>

위와 같은 화면이 나온다. [**<span class="color-blue">I want to install Disqus on my site</span>**]를 클릭한다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/92988000-a9755480-f502-11ea-8ec1-59d69145d162.png">
		<img src="https://user-images.githubusercontent.com/50317129/92988000-a9755480-f502-11ea-8ec1-59d69145d162.png" class="w4" />
	</a>
</figure>

**Website Name**에 username을 입력한다. Category는 원하는 대로 선택하면 된다.

예를 들어, Jekyll 블로그의 URL이 https://<u>test</u>.github.io라면, test를 입력한다.
{: .notice}

필요한 사항을 입력하고 <span class="color-blue">Create Site</span> 버튼을 클릭하면 관리 사이트가 추가된다.

#### 3. Disqus 플랜 선택하기

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/92988702-dfb5d280-f508-11ea-9c5d-c91359eb1d54.png">
		<img src="https://user-images.githubusercontent.com/50317129/92988702-dfb5d280-f508-11ea-9c5d-c91359eb1d54.png" class="w4" />
	</a>
</figure>

과금 여부 및 금액에 다른 등급제를 생각하면 된다. 유료 플랜으론 **<span class="color-blue">Plus</span>** 플랜, **<span class="color-orange">Pro</span>** 플랜, **<span class="color-purered">Business</span>** 플랜과 무료 플랜인 **Basic** 플랜이 존재한다. 각 플랜의 기능은 아래와 같다.

<center>
	<h3 class="color-red">※ 잘 알려지지 않은 Disqus 고유 기능이나 설명이 명확하지 않은 이유로 잘못된 내용이 존재할 수 있습니다.</h3>
</center>

**Basic** 플랜

* 무료 (Free)
* 광고 포함됨 (Ads Supported)
* Disqus 코드 기능 (Disqus Code Features)

**<span class="color-blue">Plus</span>** 플랜

* 월 9$ (한화 약 10,000원) (9$ / month)
* 광고 제거 (Ads Free)
* 3개 웹사이트 지원 (Supports up to 3 Websites)
* Disqus 코드 기능 (Disqus Code Features)

**<span class="color-orange">Pro</span>** 플랜

* 월 89$ (한화 약 90,000원) (89$ / month)
* 광고 제거 (Ads Free)
* 20개 웹사이트 지원 (Supports up to 20 Websites)
* 고급 관리 도구 (Advanced Moderation Tools)
* 쉐도우 밴 기능 (Shadow Banning)

>> Shadow Banning: 특정 사용자 혹은 자신만 게시글을 볼 수 있도록 컨텐츠의 노출을 제한하는 기능

**<span class="color-purered">Business</span>** 플랜

* 옵션에 따른 가격 조정 (Custom pricing)
* SSO 기능 지원 (SSO Integration)
* 무제한 웹사이트 지원 (Supports Unlimited Websites)
* 화이트 라벨링 기능 (White Labeling)
* 이메일 자동알림 (Branded Email Notifications)
* Lightbox 팝업 기능 (Targeted Lightboxes)
* 계정 관리 기능 (Direct Account Manager)

>> White Labeling: 다른 회사들이 자신의 브랜드를 이용하여 고객에게 해당 회사의 상품 혹은 서비스를 제공하는 것. 여기서 브랜드는 블로그가 된다.

유료 플랜에는 위와 같은 여러 유용한 기능이 포함되어 있어 빠르고 쉬운 적용이 가능하니 관심이 있다면 참고하기 바란다. 위의 **Billed**를 선택하면 연간구독으로 결제할 수 있는데, 이 경우 10%를 할인해준다. 단순히 댓글 기능을 원하는 거라면 **Basic** 플랜만으로 충분하다.

#### 4. Disqus 적용하기

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/92988923-0aa12600-f50b-11ea-91fa-7ed5ee6b5337.png">
		<img src="https://user-images.githubusercontent.com/50317129/92988923-0aa12600-f50b-11ea-91fa-7ed5ee6b5337.png" class="w4" />
	</a>
</figure>

원하는 플랫폼을 선택한다. 아래의 [**I dont's see my platform listed, install manually with Universial Code**]를 클릭한다. 범용 HTML 소스를 확인하고 적용할 수 있다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/92989437-5b1a8280-f50f-11ea-8fa8-71ee5707774f.png">
		<img src="https://user-images.githubusercontent.com/50317129/92989437-5b1a8280-f50f-11ea-8fa8-71ee5707774f.png" class="w6" />
	</a>
</figure>

위 HTML 태그를 복사하여 댓글 코드 조각을 작성한다. Jekyll 변수로 쉽게 관리하기 위해 `_includes/disqus_comments.html` 파일을 생성하고, 해당 내용을 기록한 뒤 저장한다. 이제 HTML에서 {% raw %}**{% include meta.html %}**{% endraw %}를 입력하여 해당 코드조각을 사용할 수 있다.

코드조각 생성을 완료했다면, <span class="color-blue">Configure</span>를 클릭한다.

#### 5. Disqus 설정하기

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/93008221-442a6d80-f5ad-11ea-93da-8f28e6e1ce98.png">
		<img src="https://user-images.githubusercontent.com/50317129/93008221-442a6d80-f5ad-11ea-93da-8f28e6e1ce98.png" class="w6" />
	</a>
</figure>

설정 항목을 알맞게 기입한다. **Website URL**엔 자신의 Jekyll 블로그 URL을 입력하면 되며, 나머지는 입력하지 않거나, 원하는 값을 입력하면 된다.

<span class="color-blue">Complete Setup</span>을 누르면 설정이 저장된다.

#### 6. 설정파일 수정하기

설정파일에서 관련사항을 추가해야한다. 테마별로 이미 비슷한 설정이 기본적으로 지정되어있을 수 있으니 설정파일을 잘 살펴보고, 추가하거나 수정한다.

{% highlight markdown %}
---
disqus:
  shortname: {Website Name}
---
{% endhighlight %}

Disqus를 설정할 때 입력했던 **Website Name**을 입력한다.

#### 7. 댓글 HTML 추가하기

모든 설정이 완료되었으므로, `_includes`에 만들었던 HTML 조각을 통해 댓글 HTML을 추가하자. 보통 게시글에서 사용될 것이므로 게시물 표시 관련 HTML에 추가하면 된다. 해당 테마의 경우 `_layouts/post.html`이 게시글 템플릿이다. 적절한 위치에 아래의 코드를 추가한다.

{% highlight markdown %}
{% if page.comments != false %}
    {% include disqus_comments.html %}
{% endif %}
{% endhighlight %}

page의 comments 변수가 true일 경우에만 댓글을 달 수 있도록 disqus_comments.html을 삽입하는 Liquid 코드다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/93007969-3de6c200-f5aa-11ea-9691-73742c61d6cb.png">
		<img src="https://user-images.githubusercontent.com/50317129/93007969-3de6c200-f5aa-11ea-9691-73742c61d6cb.png" class="w7" />
	</a>
</figure>

게시글을 들어가면, 위와 같이 댓글이 적용된걸 확인할 수 있다.

#### 8. 한글 적용하기

번외로, 위 사진과 달리 실제로 확인하면 댓글이 영어로 된걸 확인할 수 있다. 이는 Disqus가 한글을 지원하지만, 지원하지 않기 때문에(?) 생기는 문제이기도 하다.

실제로 Disqus는 한글을 지원한다. 설정에서 원하는 언어를 설정해주면 된다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/93008288-fbbf7f80-f5ad-11ea-8f4c-4c80fe6e1afe.png">
		<img src="https://user-images.githubusercontent.com/50317129/93008288-fbbf7f80-f5ad-11ea-8f4c-4c80fe6e1afe.png" class="w6" />
	</a>
</figure>

위 사진의 **Language**에서 언어를 한글로 바꿔주면 되는데, 여기서 Disqus가 한국어를 지원하면서 지원하지 않는 이유가 나온다. Language에 한글을 지정하면 한글로 동작하는데, 해당 select에는 한국어가 없다. select의 HTML을 수정해서 option 하나를 한국어로 수정하여 강제로 지정해주면 한국어가 적용되는 다소 허술한 버그를 이용해야 한다.

Disqus가 다국어를 지원할 때, 번역 알고리즘을 이용하는 과정에서 알맞는 국가코드를 입력하면 해당 국가의 언어로 번역해주는 것으로 보인다. Disqus는 모든 언어를 확인하고 제공하는 것보단, 자신들의 서비스를 주로 이용할만한 주요 언어만 선택지로 제공하는 방법을 선택한 것으로 보인다.

브라우저의 개발자 도구를 이용해서 HTML을 수정하면 되는데, 개발자 도구 사용법과 HTML DOM에 대한 기초적인 지식만 있어도 별다른 설명 없이 진행할 수 있을 정도로 쉽다. 크로미움 엔진 기반 브라우저를 기본으로 설명한다.

우선 위 사진과 같이 설정 페이지에서 [F12]를 누르면, 개발자 도구가 표시된다. 개발자 도구의 [요소] 탭을 클릭하고 위 버튼을 클릭하면 HTML DOM을 선택할 수 있다. 단축키 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd>를 눌러 사용할 수도 있다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/93080026-08d09180-f6c8-11ea-92d9-9a57572f3059.png">
		<img src="https://user-images.githubusercontent.com/50317129/93080026-08d09180-f6c8-11ea-92d9-9a57572f3059.png" class="w6" />
	</a>
</figure>

[요소] 버튼을 클릭하고 마우스로 페이지 위를 움직여보자. 해당하는 DOM이 하이라이팅 된다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/93084875-b3987e00-f6cf-11ea-805e-3307a00786dc.png">
		<img src="https://user-images.githubusercontent.com/50317129/93084875-b3987e00-f6cf-11ea-805e-3307a00786dc.png" class="w6" />
	</a>
</figure>

이 상태에서 언어를 선택하는 select를 클릭한다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/93085017-e5114980-f6cf-11ea-9799-0dd9cdb41f51.png">
		<img src="https://user-images.githubusercontent.com/50317129/93085017-e5114980-f6cf-11ea-9799-0dd9cdb41f51.png" class="w6" />
	</a>
</figure>

해당 태그를 클릭하면, 개발자 도구에서 해당하는 소스로 이동시켜준다. select를 열면 하위 태그에 option 태그들이 있는 것을 확인할 수 있다. 각 **option들이 select의 요소로 동작**한다. 해당 option 중 아무 옵션이나 선택하여 대한민국 국가코드로 수정하고 적용하면 된다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/93085290-55b86600-f6d0-11ea-8d30-49175e044c4e.png">
		<img src="https://user-images.githubusercontent.com/50317129/93085290-55b86600-f6d0-11ea-8d30-49175e044c4e.png" class="w6" />
	</a>
</figure>

option 하나를 선택하여 값을 수정하자. value를 **ko**로 수정하고, option 내용은 아무렇게나 입력해도 된다. 여기선 Korean으로 수정했다. <span class="color-red">value값을 국가코드로 인식하여 동작하므로, **value는 반드시 ko**로 입력해야함에 유의</span>하자.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/93085675-e1ca8d80-f6d0-11ea-80a4-d1bb6830c5b1.png">
		<img src="https://user-images.githubusercontent.com/50317129/93085675-e1ca8d80-f6d0-11ea-80a4-d1bb6830c5b1.png" class="w6" />
	</a>
</figure>

정상적으로 수정했다면, 위 그림과 같이 수정한 내용이 select에 적용됨을 확인할 수 있다. 변경된 option을 선택하고, 설정을 저장하자. 이후 Jekyll 블로그로 접속하면 한국어로 변경된 것을 확인할 수 있다.

#### 9. 댓글 카운터 만들기

여러 게시판은 해당 글 뿐만 아니라, 글에 달린 댓글의 갯수를 보여주기도 한다. DB가 있다면, 해당 게시글과 연관된 댓글 데이터의 수를 계산해서 보여주면 되지만, Disqus는 DB를 직접 다루기 어렵다. 그렇다면 댓글 카운터를 달 수 없는 걸까?

다행히도 Disqus는 이러한 요구를 충족시켜줄만한 서비스를 제공해준다. 댓글 카운팅을 위한 각 사이트별 고유 JavaScript와 HTML 태그만 넣어주면 된다.

{% highlight html %}
<script id="dsq-count-scr" src="//{Website Name}.disqus.com/count.js" async></script>
{% endhighlight %}

우선, 카운터를 사용하려는 페이지에 위의 스크립트가 삽입되어야 한다. 이 스크립트는 **<a href="#4-disqus-적용하기">이 과정</a>**에서 [**I dont's see my platform listed, install manually with Universial Code**]를 클릭하고 맨 아래를 보면 고유 스크립트를 확인할 수 있다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/93090269-7fc15680-f6d7-11ea-8d56-265b640c49c6.png">
		<img src="https://user-images.githubusercontent.com/50317129/93090269-7fc15680-f6d7-11ea-8d56-265b640c49c6.png" class="w6" />
	</a>
</figure>

위와 같이 고유 스크립트를 알려준다. 보통 **//{Website Name}.disqus.com/count.js**의 형태를 띄고 있지만, 반드시 통용되지는 않다. 만약 username이 중복될 경우 Website Name이 중복될 경우 이를 구분하기 위해 Website Name 뒤에 임의의 난수가 붙기 때문이다. 따라서 Disqus에서 스크립트를 직접 확인하고 삽입하는 것이 좋다.

{% highlight html %}
{% raw %}
<a href="{{ site.url }}{{ post.url }}#disqus_thread" data-disqus-identifier="{{ page.id }}" class="comment">Comment</a>
{% endraw %}
{% endhighlight %}

스크립트를 삽입한 HTML에서 위와 같은 태그를 입력하면 댓글 카운터를 구현할 수 있다. a 태그의 href를 활용하여 해당 게시글의 댓글 창으로 즉시 리다이렉트 되도록 구현한 소스이다. **data-disqus-identifier**는 각 게시글을 구분하기 위한 변수이니 그대로 둔다. class는 CSS를 적용하기 위해 필자가 직접 지정한 클래스니 빼고 입력해도 동작엔 문제가 없다.

<figure>
	<a href="https://user-images.githubusercontent.com/50317129/93090759-358ca500-f6d8-11ea-9eaa-2e9b7fbf5b06.png">
		<img src="https://user-images.githubusercontent.com/50317129/93090759-358ca500-f6d8-11ea-9eaa-2e9b7fbf5b06.png" class="w6" />
	</a>
</figure>

필자는 게시글 리스트에 댓글 수를 표시하도록 테마를 수정했다. 댓글 수는 반영에 약간의 딜레이가 발생하니 참고하기 바란다.