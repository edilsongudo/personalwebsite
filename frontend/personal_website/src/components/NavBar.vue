<template>
  <div class="navbar">
    <div class="hamburger">
      <label class="bars" for="check">
        <input type="checkbox" id="check" />
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </label>
    </div>
    <div class="nav">
      <div id="colorpickersection">
        <div id="colorpickercontainer">
          <span class="fal fa-palette top-icon" id="toggle-theme-picker"></span>
          <span class="theme-picker">
            <span
              id="color3"
              class="color"
              data-color1="#93edc7"
              data-color2="#93edc7"
              style="background: linear-gradient(#93edc7, #93edc7)"
            >
            </span>
            <span
              id="color4"
              class="color"
              data-color1="#ffb88c"
              data-color2="#ffb88c"
              style="background: linear-gradient(#ffb88c, #ffb88c)"
            >
            </span>
          </span>
        </div>
      </div>
      <div id="toggledark"><i class="fal fa-moon top-icon"></i></div>
    </div>
  </div>
</template>
