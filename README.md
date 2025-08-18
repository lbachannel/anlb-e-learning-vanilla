# WELCOME TO MY BOOK-STORE VANILLA PROJECT

## HOW TO BASE VANILLA PROJECT WITH VITE
```
npm create vite@latest
    =>  project name
    => select a framework
    => select a variant
    => done

$ cd <project_dir>
$ npm install
$ npm run dev
```
## PROJECT STRUCTURE
```
project/
│── public/                       # chứa file HTML chính
│    └── index.html
│
│── src/
│    ├── assets/                  # tài nguyên tĩnh (css build, img, fonts, js lib)
│    │    ├── css/                # file CSS build từ SASS
│    │    ├── fonts/
│    │    ├── img/
│    │    └── js/                 # nếu có JS library ngoài
│    │
│    ├── js/                      # code JavaScript chính
│    │    ├── main.js             # entry point, import các module
│    │    ├── utils/              # hàm helper, validator, DOM utils
│    │    └── components/         # chia nhỏ JS components (Modal, Tabs, Slide…)
│    │        ├── modal/
│    │        │   ├── modal.js
│    │        │   └── modal.scss
│    │        ├── tabs/
│    │        │   ├── tabs.js
│    │        │   └── tabs.scss
│    │        └── slide/
│    │            ├── slide.js
│    │            └── slide.scss
│    │
│    ├── scss/                    # Sass source code
│    │    ├── abstracts/          # variables, mixins, functions
│    │    ├── base/               # reset, typography, helpers
│    │    ├── components/         # style cho component nhỏ (button, card…)
│    │    ├── layout/             # header, footer, grid, nav, sidebar…
│    │    ├── page/               # style cho từng page riêng
│    │    ├── templates/          # section HTML + style đi kèm (nếu có)
│    │    └── main.scss           # file root import toàn bộ SCSS
│    │
│    └── templates/               # HTML template tái sử dụng (header.html, footer.html…)
│         ├── header.html
│         └── footer.html
│
│── package.json
│── README.md
```
#### © 2025 lbachannel
