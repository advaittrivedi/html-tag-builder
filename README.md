html-tag-builder
================

A lightweight js object with functions to build any html tag in js, support method chaining.

Usage
I will explain usage using an example.
for e.g. you want to created below HTML structure using this html-tag-builder:

<tr>
  <td class="question">Do you love sublime text editor?</td>
  <td>
    <input type="radio" value="Yes" id="BS003.0" name="BS003.0"> Yes &nbsp;&nbsp;
    <input type="radio" value="No" id="BS003.0" name="BS003.0"> No
  </td>
  <td class="description">
    <textarea maxlength="20" class=""></textarea>
  </td>
</tr>

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
