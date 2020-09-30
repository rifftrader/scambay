<template>
  <div>
    <app-about-header></app-about-header>
    <div class="content">
      <h1>Privacy Policy</h1>
      <h4>Another thing you'll probably never read</h4>
      <hr>
      <br>
      <p>SpamBay firmly believes that privacy is inconsequential and unimportant to you. Therefore any information that
        you share with us we will probably end up either forwarding to third parties for mass spam email marketing
        campaigns or simply just losing in a data breach.</p>

      <p>If you want to prevent us abusing your data in this way, copy and paste the following into your social media
        status. Just do it! We pretty promise that it'll work. Take careful note to not attempt to correct the spelling
        or
        the grammar in any way, as otherwise it will not work:</p>

      <div class="container">
        <div class="card shadow-sm">
          <div class="card-header">
            Copy and paste the following:
          </div>
          <div class="card-body">
            <p class="card-text" id="paragraph">Don’t forget tomorrow starts the new [INSERT SOCIAL MEDIA PLATFORM
              NAME] rule where they can use your photo Don’t forget Deadline tomorrow !!! Everything you’ve ever posted
              becomes
              public from tomorrow. Even messages that have been deleted or the photos not allowed. It costs nothing for
              a
              simple copy and paste, better safe than sorry. Channel 13 News talked about the change in [INSERT SOCIAL
              MEDIA
              PLATFORM NAME]’s privacy policy. I do not give [INSERT SOCIAL MEDIA PLATFORM NAME] or any entities
              associated
              with
              [INSERT SOCIAL MEDIA PLATFORM NAME] permission to use my pictures, information, messages or posts, both
              past
              and
              future. With this statement, I give notice to [INSERT SOCIAL MEDIA PLATFORM NAME] it is strictly forbidden
              to
              disclose, copy, distribute, or take any other action against me based on this profile and/or its contents.
              The
              content of this profile is private and confidential information. The violation of privacy can be punished
              by
              law
              (UCC 1-308- 1 1 308-103 and the Rome Statute). NOTE: [INSERT SOCIAL MEDIA PLATFORM NAME] is now a public
              entity.
              All members must post a note like this. If you prefer, you can copy and paste this version. If you do not
              publish
              a statement at least once it will be tacitly allowing the use of your photos, as well as the information
              contained
              in the profile status updates. DO NOT SHARE. Copy and paste. </p>
            <button href="#" class="btn btn-warning" @click="copyToClipboard"><i class="fas fa-copy"></i> Copy to
              Clipboard
            </button>
            <br>
            <div class="placeholder">
              <small class="text-muted">{{ textCopied }}</small>
            </div>
          </div>
        </div>
      </div>
      <br>

      <p>... and if you believe this, pigs might fly. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor
        incididunt ut
        labore et dolore
        magna aliqua. Nulla facilisi cras fermentum odio eu feugiat pretium. Nisl nunc mi ipsum faucibus. Morbi tempus
        iaculis urna id volutpat lacus laoreet non. Viverra aliquet eget sit amet tellus cras adipiscing. Dolor purus
        non
        enim praesent elementum facilisis leo. At in tellus integer feugiat scelerisque varius. Eget nullam non nisi est
        sit amet facilisis magna. Turpis tincidunt id aliquet risus. Ut consequat semper viverra nam libero justo
        laoreet
        sit amet.</p>

      <p>Sit amet massa vitae tortor condimentum. Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Nulla
        posuere
        sollicitudin aliquam ultrices. Lectus nulla at volutpat diam ut venenatis tellus in. Sollicitudin aliquam
        ultrices
        sagittis orci a. Non consectetur a erat nam at lectus. In hendrerit gravida rutrum quisque non. Feugiat vivamus
        at
        augue eget arcu dictum varius duis at. Enim sit amet venenatis urna cursus eget nunc scelerisque. Faucibus et
        molestie ac feugiat sed lectus vestibulum. Ultrices vitae auctor eu augue. In nibh mauris cursus mattis molestie
        a. Vestibulum sed arcu non odio euismod lacinia at quis risus. Ut tristique et egestas quis ipsum. Tellus
        elementum sagittis vitae et leo duis ut. Nisi porta lorem mollis aliquam ut porttitor leo a. Proin libero nunc
        consequat interdum. </p>

      <p>Arcu vitae elementum curabitur vitae. Erat imperdiet sed euismod nisi porta lorem. In aliquam sem fringilla ut
        morbi tincidunt augue interdum. Accumsan tortor posuere ac ut consequat semper viverra. In eu mi bibendum neque
        egestas congue quisque egestas diam. Amet consectetur adipiscing elit pellentesque habitant morbi tristique
        senectus et. Duis at consectetur lorem donec massa sapien faucibus et molestie. Ut lectus arcu bibendum at.
        Donec
        enim diam vulputate ut pharetra sit amet aliquam. Libero volutpat sed cras ornare arcu dui vivamus.</p>

      <p>Posuere ac ut consequat semper viverra nam. Vestibulum sed arcu non odio euismod lacinia at. Ornare aenean
        euismod
        elementum nisi quis eleifend quam adipiscing vitae. Consequat id porta nibh venenatis. Tortor consequat id porta
        nibh venenatis cras sed felis eget. Pulvinar etiam non quam lacus. Nibh tellus molestie nunc non blandit massa.
        Suscipit tellus mauris a diam maecenas sed. Congue nisi vitae suscipit tellus mauris. Libero volutpat sed cras
        ornare arcu. Urna porttitor rhoncus dolor purus non. Tellus in hac habitasse platea dictumst vestibulum rhoncus.
        Viverra aliquet eget sit amet tellus cras adipiscing. Eleifend mi in nulla posuere sollicitudin aliquam ultrices
        sagittis. Tempus egestas sed sed risus. Venenatis cras sed felis eget velit aliquet. Platea dictumst vestibulum
        rhoncus est pellentesque. Sociis natoque penatibus et magnis dis parturient. </p>

      <p>Arcu non odio euismod lacinia. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Consequat
        interdum varius sit amet mattis vulputate enim nulla aliquet. Eu tincidunt tortor aliquam nulla facilisi cras
        fermentum odio eu. Et netus et malesuada fames ac turpis egestas. Eget duis at tellus at urna condimentum
        mattis.
        Velit laoreet id donec ultrices tincidunt arcu non. Dolor sit amet consectetur adipiscing. Aliquet nibh praesent
        tristique magna sit amet purus. Vel risus commodo viverra maecenas. Feugiat nisl pretium fusce id velit ut
        tortor
        pretium viverra. Auctor urna nunc id cursus metus aliquam. </p>

      <p>Imperdiet proin fermentum leo vel. A scelerisque purus semper eget duis at tellus at. Consequat nisl vel
        pretium
        lectus quam id leo in. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Ut enim blandit volutpat
        maecenas volutpat blandit aliquam etiam. Et malesuada fames ac turpis egestas. Penatibus et magnis dis
        parturient
        montes nascetur ridiculus mus mauris. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Arcu
        dictum varius duis at. Pellentesque nec nam aliquam sem et. Congue mauris rhoncus aenean vel elit scelerisque
        mauris pellentesque pulvinar. Elit sed vulputate mi sit amet mauris commodo quis. Lobortis scelerisque fermentum
        dui faucibus. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Amet mattis vulputate enim nulla
        aliquet.</p>

      <p>Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Ut aliquam purus sit amet luctus venenatis
        lectus
        magna. Morbi non arcu risus quis varius. Est ultricies integer quis auctor elit sed vulputate mi. Et malesuada
        fames ac turpis egestas integer eget. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Ornare
        quam viverra orci sagittis eu volutpat. Etiam sit amet nisl purus in mollis nunc sed. Aliquam id diam maecenas
        ultricies mi eget mauris pharetra et. Phasellus vestibulum lorem sed risus. Natoque penatibus et magnis dis
        parturient montes nascetur. Vehicula ipsum a arcu cursus vitae. Tellus elementum sagittis vitae et leo duis.
        Iaculis at erat pellentesque adipiscing commodo. Sodales ut eu sem integer vitae. Nisl condimentum id venenatis
        a
        condimentum vitae sapien. </p>

      <p>Cras sed felis eget velit aliquet. Convallis convallis tellus id interdum velit laoreet. Tempor id eu nisl nunc
        mi
        ipsum. Dui ut ornare lectus sit. Neque laoreet suspendisse interdum consectetur libero id. Nunc vel risus
        commodo
        viverra maecenas accumsan lacus vel facilisis. Aliquet nibh praesent tristique magna sit amet purus. Massa
        sapien
        faucibus et molestie ac. Eget mauris pharetra et ultrices neque. Lobortis elementum nibh tellus molestie nunc.
        Nunc scelerisque viverra mauris in aliquam. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl.
        Congue mauris rhoncus aenean vel elit. Lobortis elementum nibh tellus molestie nunc non blandit massa enim.
        Dictum
        at tempor commodo ullamcorper. Nibh tellus molestie nunc non blandit. Quam elementum pulvinar etiam non quam
        lacus. Viverra mauris in aliquam sem fringilla ut morbi. </p>

      <p>Et netus et malesuada fames ac turpis egestas maecenas pharetra. Posuere urna nec tincidunt praesent semper
        feugiat nibh. Quis vel eros donec ac odio tempor. Turpis cursus in hac habitasse platea dictumst quisque
        sagittis
        purus. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Aenean euismod elementum nisi quis
        eleifend. Felis eget nunc lobortis mattis aliquam faucibus purus in. Ullamcorper dignissim cras tincidunt
        lobortis
        feugiat. Ante metus dictum at tempor commodo ullamcorper a. Elementum facilisis leo vel fringilla est
        ullamcorper.
        Quis blandit turpis cursus in. Sit amet nisl purus in mollis. Rhoncus urna neque viverra justo nec ultrices.
        Tellus at urna condimentum mattis pellentesque id nibh tortor id. Magna fringilla urna porttitor rhoncus dolor.
        Est sit amet facilisis magna etiam. Nisl pretium fusce id velit. Pellentesque habitant morbi tristique senectus
        et. Vitae semper quis lectus nulla at volutpat diam.</p>

      <p>Ultricies tristique nulla aliquet enim. Laoreet non curabitur gravida arcu ac tortor. Quis imperdiet massa
        tincidunt nunc pulvinar sapien et ligula ullamcorper. Egestas tellus rutrum tellus pellentesque eu tincidunt.
        Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Eu lobortis elementum nibh tellus
        molestie nunc non blandit massa. Porta nibh venenatis cras sed felis. Et malesuada fames ac turpis egestas. In
        pellentesque massa placerat duis ultricies lacus sed turpis. Curabitur gravida arcu ac tortor. Arcu non sodales
        neque sodales. Neque convallis a cras semper auctor. Nullam eget felis eget nunc lobortis mattis aliquam
        faucibus.
        Eros donec ac odio tempor orci dapibus ultrices in. Mi proin sed libero enim sed. Tristique et egestas quis
        ipsum
        suspendisse ultrices gravida dictum fusce. Vitae et leo duis ut diam quam nulla. Adipiscing vitae proin sagittis
        nisl rhoncus mattis rhoncus.</p>
      <br>
      <go-top></go-top>
    </div>
  </div>
</template>

<script>
import GoTop from '@inotom/vue-go-top'
import AboutHeader from './AboutHeader'

export default {
  name: 'Privacy',
  data () {
    return {
      textCopied: ''
    }
  },
  methods: {
    copyToClipboard () {
      const textToCopy = document.getElementById('paragraph').innerText
      const tempElement = document.createElement('textarea')
      document.body.appendChild(tempElement)
      tempElement.value = textToCopy
      tempElement.select()
      document.execCommand('copy')
      document.body.removeChild(tempElement)
      this.textCopied = 'Text copied to clipboard!'
      setTimeout(() => {
        this.textCopied = ''
      }, 1000)
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  components: {
    GoTop,
    appAboutHeader: AboutHeader
  }
}
</script>

<style scoped>

  p {
    text-align: left;
  }

  .content {
    padding: 50px;
  }

  .card-header {
    text-align: left;
  }

  .placeholder {
    height: 16px;
  }
</style>
