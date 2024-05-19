<template>

   <button class="Button">
     <span class="Button__starsCluster">
       <span class="Button__star Button__star--small"></span>
       <span class="Button__star Button__star--middle"></span>
       <span class="Button__star Button__star--big"></span>
     </span>
     Launch App
   </button>

</template>

<style scoped>

.Button {
		float: right;
    border-radius: 0.5em;
    background-color: #161627;
    color: #F5F5FD;
    border: none;
    font-size: inherit;
    padding: 0.5em 1em;
    letter-spacing: 0.257px;
    display: flex;
    gap: 0.4em;

    --color1: transparent;
    --color2: transparent;
    transition-property: --color1, --color2;
    transition-duration: var(--hover-time);

    background-image: linear-gradient(180deg, var(--color1) 0%, var(--color2) 100%);
}

.Button:hover {
    --color1: rgba(109, 109, 154, 0.20);
    --color2: rgba(0, 0, 0, 0.00);
    cursor: pointer;
}

/* STARS */

.Button__starsCluster {
    position: relative;
}

.Button__star::before,
.Button__star {
    transition-duration: var(--hover-time);
    transition-timing-function: cubic-bezier(0.49, -0.01, 0.51, 1.3);
}

.Button__star::before {
    content: "";
    display: block;
    background-color: currentColor;
    mask-image: url("https://assets.codepen.io/1682098/star.svg");
    -webkit-mask-image: url("https://assets.codepen.io/1682098/star.svg");
    transition-property: background-color, transform;
}

.Button__star--big::before {
    height: 1em;
    width: 1em;
}

.Button__star--big {
    --color1: transparent;
    --color2: transparent;
    --color3: transparent;
    --color4: transparent;

    transition-property: --color1, --color2, --color3, --color4, transform;

    filter:
            drop-shadow(2px 3px 7px var(--color1))
            drop-shadow(7px 11px 13px var(--color2))
            drop-shadow(15px 25px 17px var(--color3))
            drop-shadow(26px 44px 21px var(--color4))
}

.Button__star--big::before {
    --color1: transparent;
    --color2: transparent;
    --color3: transparent;
    --color4: transparent;

    background-image:
            radial-gradient(68% 68% at 46% 0%, var(--color1) 0%, var(--color2) 100%),
            radial-gradient(59% 59% at 11% 43%, var(--color3) 0%, var(--color4) 100%);

    transition-property: --color1, --color2, --color3, --color4, transform;
}

.Button:hover .Button__star--big {
    --color1: rgba(7, 2, 23, 0.20);
    --color2: rgba(7, 2, 23, 0.19);
    --color3: rgba(7, 2, 23, 0.15);
    --color4: rgba(7, 2, 23, 0.11);
}

.Button:hover .Button__star--big::before {
    transform: scale(1.1);

    --color1: rgba(244, 80, 118, 0.30);
    --color2: rgba(244, 80, 119, 0.08);
    --color3: rgba(248, 193, 49, 0.36);
    --color4: rgba(248, 193, 49, 0.1);
}

.Button__star--middle,
.Button__star--small {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    animation-name: hide;
    animation-duration: var(--hover-time);
    animation-fill-mode: forwards;
}

@keyframes hide {
    0%, 99% {
        display: none;
    }
    100% {
        display: block;
    }
}

.Button__star--middle::before {
    height: 0.4em;
    width: 0.4em;
}

.Button__star--middle {
    --color1: transparent;
    transition-property: --color1, color, transform;

    filter: drop-shadow(0px 0px 12px var(--color1));
}

.Button:hover .Button__star--middle  {
    color: #F8C131;
    --color1: rgba(248, 193, 49, 0.40);

    transform: translate(-0.6em, -0.5em);
}

.Button__star--small {
    --color1: transparent;
    transition-property: --color1, color, transform;

    filter: drop-shadow(0px 0px 8px var(--color1));
}

.Button__star--small::before {
    height: 0.25em;
    width: 0.25em;
}

.Button:hover .Button__star--small {
    transform: translate(-0.3em, -0.7em);
    color: #F44F77;
    --color1: rgba(255, 0, 0, 0.81);
}


@property --color1 {
    syntax: "<color>";
    inherits: true;
    initial-value: transparent;
}

@property --color2 {
    syntax: "<color>";
    inherits: true;
    initial-value: transparent;
}

@property --color3 {
    syntax: "<color>";
    inherits: true;
    initial-value: transparent;
}

@property --color4 {
    syntax: "<color>";
    inherits: true;
    initial-value: transparent;
}

.filler {
    position: absolute;
    inset: 0;
    z-index: 0;
    background-color: transparent;
    border: none;
}

</style>
