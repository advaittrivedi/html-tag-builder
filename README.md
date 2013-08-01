html-tag-builder
================

A lightweight js object with functions to build any html tag in js, support method chaining.

Usage
I will explain usage using an example.
for e.g. you want to created below HTML structure using this html-tag-builder:

&lt;tr&gt;
  &lt;td class="question"&gt;Do you love sublime text editor?&lt;/td&gt;
  &lt;td&gt;
    &lt;input type="radio" value="Yes" id="BS003.0" name="BS003.0"&gt; Yes &nbsp;&nbsp;
    &lt;input type="radio" value="No" id="BS003.0" name="BS003.0"&gt; No
  &lt;/td&gt;
  &lt;td class="description"&gt;
    &lt;textarea maxlength="20" class=""&gt;&lt;/textarea&gt;
  &lt;/td&gt;
&lt;/tr&gt;

You can build above structure with html-tag-builder:

var answerElId = 'BS003.0';
var radioButtonTd = new element('td');
var radioYes = new element('input');
radioYes.addName(answerElId).addId(answerElId).addValue('Yes').addAttrib("type", "radio").close();
radioButtonTd.addInnerHtml(radioYes.yield()+" Yes &nbsp;&nbsp;");

var radioNo = new element('input');
radioNo.addName(answerElId).addId(answerElId).addValue('No').addAttrib("type", "radio").close();
radioButtonTd.addInnerHtml(radioNo.yield() +" No");
radioButtonTd.close();
