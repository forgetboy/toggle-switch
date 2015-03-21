# Toggle-switch

A light weight and simple toggle switch/button addon. 

##INSTALLATION:

ember install:addon toggle-switch

##HOW TO USE:

1. Display barebones

  {{toggle-switch}}

2. Display with default Yes/No text

 {{toggle-switch displayToggleMessage=true}}

3. Display with custom messages

 {{toggle-switch displayToggleMessage=true toggleMessageWhenOn="Good" toggleMessageWhenOff="Bad"}}

  Note: You may need to adjust the width using css to accommodate custom messages

4. Listen to toggle action. A 'isOn' value is passed to the listener
  {{toggle-switch action="myToggleAction"}}


