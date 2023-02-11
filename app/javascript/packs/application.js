// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import axios from 'axios'
import $ from 'jquery'


document.addEventListener('turbolinks:load', ()=> {
    const dataset = $('#photo-index').data()
    const photoId = dataset.photoId
    axios.get(`/photos/${photoId}/likes`)
    .then((response) => {
        const hasLiked = response.data.hasLiked
        if (hasLiked) {
            $('.photo-heart').removeClass('hidden')
        }else{
            $('.inphoto-heart').removeClass('hidden')
        }
    })
})





// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
