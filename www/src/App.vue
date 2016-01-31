<template>
  <div id="app">
    <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
      <header class="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">Home</span>
          <div class="mdl-layout-spacer"></div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
            <label class="mdl-button mdl-js-button mdl-button--icon" for="search">
              <i class="material-icons">search</i>
            </label>
            <div class="mdl-textfield__expandable-holder">
              <input class="mdl-textfield__input" type="text" id="search">
              <label class="mdl-textfield__label" for="search">Enter your query...</label>
            </div>
          </div>
          <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
            <i class="material-icons">more_vert</i>
          </button>
          <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" for="hdrbtn">
            <li class="mdl-menu__item">About</li>
            <li class="mdl-menu__item">Contact</li>
            <li class="mdl-menu__item">Legal information</li>
          </ul>
        </div>
      </header>
      <div class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
        <header class="demo-drawer-header">
          <img src="img/user.jpg" class="demo-avatar">
          <div class="demo-avatar-dropdown">
            <span>hello@example.com</span>
            <div class="mdl-layout-spacer"></div>
            <button id="accbtn" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
              <i class="material-icons" role="presentation">arrow_drop_down</i>
              <span class="visuallyhidden">Accounts</span>
            </button>
            <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="accbtn">
              <li class="mdl-menu__item">hello@example.com</li>
              <li class="mdl-menu__item">info@example.com</li>
              <li class="mdl-menu__item"><i class="material-icons">add</i>Add another account...</li>
            </ul>
          </div>
        </header>
        <nav class="demo-navigation mdl-navigation mdl-color--blue-grey-800">
          <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>Home</a>
          <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">inbox</i>Inbox</a>
          <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">delete</i>Trash</a>
          <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">report</i>Spam</a>
          <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">forum</i>Forums</a>
          <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">flag</i>Updates</a>
          <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">local_offer</i>Promos</a>
          <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">shopping_cart</i>Purchases</a>
          <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">people</i>Social</a>
          <div class="mdl-layout-spacer"></div>
          <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">help_outline</i><span class="visuallyhidden">Help</span></a>
        </nav>
      </div>
      <main class="mdl-layout__content mdl-color--grey-100">
        <div class="mdl-grid demo-content">
          <h1>Apache Cordova AA + Vue.js</h1>
          <div class="app">
            <div id="deviceready" class="blink">
              <p class="event listening">Connecting to Device</p>
              <p class="event received">Device is Ready</p>
            </div>
          </div>

          <hello></hello>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aperiam beatae consectetur consequuntur
            laboriosam, laudantium libero magni nesciunt nisi, obcaecati porro quisquam sint suscipit voluptas. Labore
            provident ratione sint!</p>

          <p>Accusantium cum ex harum maiores perferendis sapiente voluptate voluptatem! Alias, beatae delectus et
            facilis incidunt, ipsa laboriosam laborum laudantium natus nobis provident qui? Earum illo illum inventore
            libero rerum voluptatem.</p>

          <p>Autem dignissimos excepturi fugit iusto odio praesentium quam vero. A accusantium aperiam dolorum eum ex
            facilis id incidunt minus mollitia natus non quidem quo, rerum suscipit, temporibus tenetur, totam.
            Culpa!</p>

          <p>Adipisci aperiam architecto aspernatur at dignissimos eos est et ipsum laborum mollitia, neque non numquam
            omnis quasi quidem quo sapiente tempora, velit, voluptates voluptatibus? Animi incidunt iste itaque quia
            vero.</p>

          <p>Architecto consequatur, dicta distinctio dolore excepturi ipsum iste minus provident quaerat, quibusdam
            quod rerum temporibus tenetur, vel voluptate? Asperiores fugit illo inventore ipsam totam. Doloremque earum
            facere laboriosam rem unde!</p>

          <p>Aliquam cum eaque error ipsam nobis placeat praesentium, quod ratione unde vitae! Accusantium adipisci
            corporis labore laboriosam laudantium nihil, nisi! Iste iusto laborum nesciunt quam, quas quisquam tempora
            velit voluptas?</p>

          <p>A accusamus alias consectetur cumque distinctio dolores doloribus dolorum enim, esse ex, incidunt iusto
            labore magnam necessitatibus nemo optio praesentium quaerat quas quia quos ratione saepe sapiente temporibus
            unde veritatis!</p>

          <p>Accusamus cumque debitis dignissimos explicabo, illo laudantium numquam quidem ratione saepe voluptatum! A
            ad adipisci at atque blanditiis cupiditate eveniet facere, impedit ipsam ipsum laudantium obcaecati, optio,
            possimus reprehenderit temporibus?</p>

          <p>Accusamus amet assumenda distinctio dolorem earum facere neque rem repudiandae similique sunt? A ad beatae
            commodi delectus dolores dolorum eaque facere, inventore ipsum libero, officia perferendis quaerat quia,
            veniam voluptatum.</p>

          <p>Adipisci, aspernatur aut beatae commodi dolorum eius enim eos, esse, est explicabo facilis harum ipsum iure
            molestiae obcaecati odit officiis omnis placeat possimus quidem quis quisquam rerum sunt temporibus ut.</p>

          <p>Alias animi aperiam assumenda delectus distinctio eligendi esse, ex laboriosam laudantium mollitia nam
            nesciunt optio praesentium provident quam quidem ratione reiciendis repellat saepe, ullam unde veniam,
            veritatis vero. Doloribus, et?</p>

          <p>Aperiam corporis delectus ea ex facere laborum natus omnis, pariatur perferendis possimus, quam quos rem
            rerum? Accusamus animi id laudantium nulla numquam officiis repellat sunt? Accusantium architecto blanditiis
            eius numquam.</p>

          <p>Accusantium, adipisci asperiores assumenda autem cumque dicta dolore error est illo laudantium libero
            maxime nesciunt non pariatur quam quasi, quisquam ratione recusandae rerum sequi suscipit temporibus totam
            unde vel voluptatum.</p>

          <p>Aspernatur at, atque et fugit inventore quisquam similique? Aliquam assumenda beatae corporis dignissimos
            ex facilis ipsam laboriosam magnam maiores nihil nulla quae quis similique totam veniam veritatis, vero
            voluptates voluptatum?</p>

          <p>A accusantium corporis delectus dolores dolorum ea eius fuga ipsam molestiae pariatur placeat possimus,
            saepe sequi similique suscipit tempora veritatis. Amet corporis dolorem laboriosam nam nobis odio quas sunt
            ut.</p>

          <p>Architecto aspernatur autem eligendi error exercitationem, iure minus nobis odit quaerat quo temporibus
            totam ullam. Animi beatae cupiditate iusto nam non! Deleniti explicabo impedit recusandae totam. Adipisci in
            voluptas voluptate.</p>

          <p>Amet aperiam asperiores aspernatur earum eligendi est iste molestiae officia, quam qui, soluta tenetur
            velit vitae. Ad at dignissimos ea explicabo libero modi nihil ullam? Ex placeat similique sunt tempore.</p>

          <p>Aliquid architecto commodi et exercitationem id ipsum itaque repellat repellendus tenetur? Accusamus
            asperiores esse explicabo facilis inventore nam obcaecati odit possimus quos, temporibus tenetur voluptatem
            voluptates. Architecto mollitia ratione sit?</p>

          <p>Atque dignissimos excepturi sit soluta ullam? A accusantium asperiores beatae consequatur, cupiditate
            eligendi eos eveniet ex in incidunt ipsam necessitatibus nesciunt nobis nulla obcaecati omnis praesentium
            qui quisquam ratione reiciendis!</p>

          <p>Dolor ea fuga fugiat, magnam non porro reiciendis repellendus soluta sunt velit? Accusamus accusantium
            animi architecto at autem consequuntur earum eligendi eum id iste, itaque molestias soluta suscipit, tempora
            ut.</p>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  components: {
    Hello
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
