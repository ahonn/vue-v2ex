<template>
  <header id="navbar">
    <span>V2EX</span>
  </header>
</template>

<style lang="sass">
  #navbar {
    height: 44px;
    width: 100%;
    border-bottom: 1px solid #e8e8e8;
    position: fixed;
    top: 0;
    left: 0;
    transition: all .3s ease-out;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    z-index: 5;

    span {
      display: block;
      font-size: 18px;
      text-align: center;
      line-height: 44px;
    }
  }
</style>
