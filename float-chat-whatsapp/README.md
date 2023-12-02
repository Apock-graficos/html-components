# Float chat whatsapp
**[👉 Apock graficos](https://www.youtube.com/ApockGraficos "Canal Youtube")**

### implementation guide
Copy HTML template and implement css and js XD

```html
<!-- css -->
<link rel="stylesheet" type="text/css" href="float-chat-whatsapp.css">
<!-- js -->
<script type="text/javascript" src="float-chat-whatsapp.js"></script>
```

### Declare script

```js
const options = {
    phone: 3000000000,      /* number phone */
    phonePrefix: 10,        /* number phone prefix */
    // position: 'end',     /* optional, 'end' | 'start' -> default 'end' */
    // theme: 'pink',       /* optional, 'green' | 'red' | 'blue' | 'orange' | 'pink' | 'purple' -> default 'green' */
    // separe: 3,           /* optional, 1 ~ 3 -> default 2 */
    // ui: 'wafer'          /* optional, 'wafer' | 'waffle' | 'omelet' | 'marshmellow' -> default 'waffle' */
}

new FloatChatWhatsapp('float-chat-whatsapp', options)
```

### HTML guide
guide to apply css selectors in case of not using js

```html
<div class="ag-float-chat-whatsapp [position] [separed] [theme] [ui]" id="float-chat-whatsapp">
```

| action   | option                                              | example       |
| -------- | --------------------------------------------------- | ------------- |
| position | `start` or `end`                                    | `start`       |
| separed  | `separe-` + from 1 to 3                             | `separe-2`    |
| theme    | `theme-` + `green, red, orange, blue, pink, purple` | `theme-green` |
| ui       | `ui-` + `wafer, waffle, omelet, marshmellow`        | `ui-omele`    |



### hide and unhide chat
the class `display-none` tag allows you to hide the chat, while the chat is not visible.
use *jvascript* to manipulate visibility.

```html
<div class="ag-float-chat-whatsapp">
    ...
    <form class="chat-container display-none" autocomplete="off">
        ...
    </form>
</div>
```

#### Use avatar or icon
This goes inside the container with the `<div class="chat-header">` selector, you can be the first or last element

```html
<!-- icono -->
<div class="item-icon md">
    <i class="icon icon-whaptsapp"></i>
</div>

<!-- avatar -->
<div class="avatar offline md">
    <img src="..." alt="img-avatar">
</div>
```

adjust icon, avatar and button size with:
`sm` (small) or `md` (medium)

### Tutorial Guide to implement with:

<table>
    <tr>
        <td><img width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /></td>
        <td><img width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" /></td>
        <td><img width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" /></td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/ApockGraficos">Html and js</a></td>
        <td><a href="https://www.youtube.com/ApockGraficos">Angular</a></td>
        <td><a href="https://www.youtube.com/ApockGraficos">Vue</a></td>
    </tr>
</table>

