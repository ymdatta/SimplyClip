
<!-- ![icon](https://github.com/umagnanasundaram2128/SimplyClip/blob/main/images/paper-clip_32.png)
# SimplyClip -->

![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m789313708-ea25af592e8a7a84c009055e)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub issues](https://img.shields.io/github/issues/umagnanasundaram2128/SimplyClip)
![Test Cases](https://img.shields.io/badge/tests-passing-green)
![GitHub contributors](https://img.shields.io/github/contributors/umagnanasundaram2128/SimplyClip)
![GitHub pull requests](https://img.shields.io/github/issues-pr/umagnanasundaram2128/SimplyClip)
[![Build Status](https://app.travis-ci.com/umagnanasundaram2128/SimplyClip.svg?branch=main)](https://app.travis-ci.com/umagnanasundaram2128/SimplyClip)
[![Coverage Status](https://coveralls.io/repos/github/umagnanasundaram2128/SimplyClip/badge.svg?branch=main)](https://coveralls.io/github/umagnanasundaram2128/SimplyClip?branch=main)
<!--[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.5542732.svg)](https://doi.org/10.5281/zenodo.5542732)-->
[![DOI](https://zenodo.org/badge/418303486.svg)](https://zenodo.org/badge/latestdoi/418303486)

### &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  :paperclips: &emsp;  Clipboard Made Easy For Research &emsp; :paperclips:

<placeholder builds>
<placeholder doi>
<placeholder tests>
 
 <!-- As T. S. Eliot once famously said

> Distracted from distraction by distraction. -->
 
---

 
&emsp; &emsp; &emsp; &emsp; &emsp;  ![](https://github.com/umagnanasundaram2128/SimplyClip/blob/main/images/SimplyClip.gif)

---
<!-- ![](https://github.com/umagnanasundaram2128/SimplyClip/tree/main/images/SimplyClip.gif) -->

SimplyClip :paperclips: is a google chrome extension which enables singular shared clipboard for research students and power users.


- Ability to recognise multiple text selections
- Works across all tabs in the browser
- Works like a charm for research work
- Unlimited focus!
- Lets you combine all the copied into a file
 
<p align="center">
  <a href="#rocket-installation">Installation</a>
  ::
  <a href="#golf-flags-and-command-line-arguments">Flags & Args</a>
  ::
  <a href="#card_index_dividers-some-examples">Examples</a>
  ::
  <a href="#thought_balloon-use-case">Use Case</a>
  ::
  <a href="#page_facing_up-why">Why</a>
  ::
  <a href="#sparkles-contributors">Contributors</a>
    ::
  <a href="#email-support">Support</a>
  
</p>

Watch this fun video about the extension:
 
[![Watch the video](https://img.youtube.com/vi/MYr_7qhdeLo/hqdefault.jpg)](https://youtu.be/MYr_7qhdeLo)


##  :white_check_mark: What Simply Clip Can Do?

- Select multiple text snippets from a single tab (or more!) and magically paste all off them!
- Ability to manage what slection you want to keep or get rid of
- Chrome Extension popup to manage all your snippets in one streamlined window
- No more switching tabs, say no to all distractions!!

## :gear: Add SimplyClip to Google Chrome

1.  Get the repsitory using any of the below two methords :
    - Download :arrow_down: the ***[repository](https://github.com/umagnanasundaram2128/SimplyClip)*** using Code > Download Zip on our project github page.
    - Clone the reporitory using  ***[GIT](https://git-scm.com)*** 
    ```
    git clone https://github.com/lalit10/SimplyClip
    ```
1. Manually install Entension using below steps.
    - Enable the developer mode from Chrome > Settings > extension.
    - Click on ***load Unpacked*** button and select the root folder of this repository.
    - Enable the chrome extension. 
![Extension](https://github.com/umagnanasundaram2128/SimplyClip/blob/main/Docs/images/Extensions.png)

## :computer: Languages and Requirement
- JavaScript
- HTML
- CSS
- Node.js
- NPM

## IDE 
- IDE : [VSCode](https://code.visualstudio.com/)

- Code Style Formatter Extension: [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)

- Code Syntax Checker Extension : [Eslint](https://https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for Vscode plugin.

VS Code uses js-beautify internally, but it lacks the ability to modify the style you wish to use. This extension enables running js-beautify in VS Code, AND honouring any .jsbeautifyrc file in the open file's path tree to load your code styling. Run with F1 Beautify (to beautify a selection) or F1 Beautify file.

## Style Checker and Analyzer 

- Javascript Standard Style is style guide, linter, and formatter for Javascript and styling means ranking the importance of code clarity.
- `npx standard --fix ` is used to fix the the style 

## Code Formatter 

### Prettier 
- Prettier is an opinionated code formatter which will format your code in structured way.
- `npx prettier --write .` to check the errors in code formating
- `npx prettier --check .` to check the errors in code formatting but only checks that files are already formatted, rather than overwriting them.
prettier --write and prettier --check are the most common ways to run Prettier

## Syntax Checker 

### Lint
- Linting is the automated checking of your source code for programmatic and syntax errors.
- `npm run lint` to check the linter to check errors in code formatting in the code.


## Use Case 
* ***Students***: Students and Research grads can take out snippets from text for easy reference later. We as grad students recently found ourselves in a position where we had to reference a lot of text snippets while recognizing reuses in research papers, SimplyClip does wonders for speeding up similar workflows.

* ***Professionals/ Casual Users:***: It’s one issue to fill a repetitive and boring form. It’s an entirely another when we fill multiple of such forms with questions with repeating answers. SimplyClip fits really well in such a case where simple text clips can be saved and reused saving time and effort.

## :question: Why
While working on finding reuse we spent significant amount of time searching and saving text snippets for further evaluation.Such a repetitive workflow sparked an idea of a clipboard workspace to manage all the recent snippets we have collected while researching.This in turn lead to the development of SimplyClip, in which not only clipboard text is saved, but can also be edited and deleted.Future development pipeline includes cross browser compatibility, exporting and cloud functionalities.

## :desktop_computer: Functional Descriptions
#### 1. Copying to the extension clipboard :
Any text copied from the browser page automatically gets copied to the extension's clipboard (given the URL has access to the system clipboard).
#### 2. Copying to the system clipboard :
User can select the text chunk to copy from the extension clipboard by simply clicking on the text entry. The entry automatically gets copied into the system clipboard.
#### 3. Editing the extension clipboard :
User is even allowed to edit the text entry copied to the extension clipboard. The user can edit the entry by clicking on the pencil icon and edit the text entry. Once edited, the entry gets saved automatically on clicking anywhere outside the focus of the text entry.

## :interrobang: Troubleshooting
1) If the text doesn't get copied, please make sure that the page has the permission to access and modify the system clipboard.
2) When loading the extension for the first time, reload the pages in order to allow the URLs to prompt for permissions to access the system clipboard.
3) If none of the above steps work, consider reloading the extension and all the browser pages.
4) If the issue still persists, please consider writing us at simplyclipcedev@gmail.com and we will get back to you as soon as possible.
5) You're also free to report a bug in our repository and clearly stating the issue that you're facing. Please make sure to follow the guidelines mentioned in CONTRIBUTING.md

## :railway_track: Roadmap
 
 ![SimplyClip Project Pipeline](https://github.com/umagnanasundaram2128/SimplyClip/blob/main/images/RoadMap2.png)


## :handshake: Contributors

<table>
  <tr>
    <td align="center"><a href="https://github.com/niveditalodha"><img src="https://avatars.githubusercontent.com/u/40229663?v=4" width="75px;" alt=""/><br /><sub><b>Nivedita Lodha</b></sub></a></td>
    <td align="center"><a href="https://github.com/akhilkumarmengani"><img src="https://avatars.githubusercontent.com/u/70975566?v=4" width="75px;" alt=""/><br /><sub><b>Akhil Kumar Mengani</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/umagnanasundaram2128"><img src="https://avatars.githubusercontent.com/u/8946692?v=4" width="75px;" alt=""/><br /><sub><b>Uma Gnanasundaram</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/vamshi-chidara"><img src="https://avatars.githubusercontent.com/u/66715000?v=4" width="75px;" alt=""/><br /><sub><b>Vamshi Chidara</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/nehajaideep"><img src="https://avatars.githubusercontent.com/u/46373273?v=4" width="75px;" alt=""/><br /><sub><b>Neha</b></sub></a><br /></td>
  </tr>
</table>

***Enjoy using SimplyClip. Make sure to follow the page for any new updates!*** 

