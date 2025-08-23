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
│── public/                       # public ra ngoài internet, ai củng có thể truy cập
│    └── image/css/js
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
│    │    │
│    │    ├── core/               # "xương sống" của app
│    │    │    ├── router.js      # Router library
│    │    │    └── store.js       # (tùy chọn) state management đơn giản
│    │    │
│    │    ├── pages/
│    │    |   ├── home.js
│    │    |   └── contact.js
│    │    |
│    │    └── components/         # chia nhỏ JS components (Modal, Tabs, Slide…)
│    │        ├── layout/
│    │        │   ├── header.js
│    │        │   └── footer.js
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
│    └── scss/                     # Sass source (7–1 pattern)
│        ├── abstracts/            # variables, mixins, functions, placeholders
│        ├── base/                 # reset/normalize, base, typography
│        ├── components/           # button, card, modal, tabs...
│        ├── layout/               # header, footer, grid, nav, sidebar...
│        ├── pages/                # style theo trang
│        ├── themes/               # light, dark...
│        ├── utilities/            # helper classes
│        ├── vendors/              # scss/css của thư viện ngoài (nếu có)
│        └── style.scss            # file root import tất cả phần trên
│    
│── .gitignore
│── index.html
│── package-lock.json
│── package.json
│── README.md
└── vite.config.js
```
#### © 2025 lbachannel
