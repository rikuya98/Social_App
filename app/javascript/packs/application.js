// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import $ from 'jquery'
import axios from 'axios'

import { csrfToken } from 'rails-ujs'
axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

document.addEventListener('turbolinks:load', ()=> {
    const dataset = $('#photo-index').data()
    const photoId = dataset.photoId
    axios.get(`/photos/${photoId}/likes`)
    .then((response) => {
        const hasLiked = response.data.hasLiked
        if (hasLiked) {
            $('.like_btn').removeClass('hidden')
        }else{
            $('.like_del_btn').removeClass('hidden')
        }
    })



    $(`#like-del-btn-zone_${photoId}`).on('click', () => {
        axios.post(`/photos/${photoId}/likes`)
        .then((response) => {
            console.log(response)
        })
        .catch((e) => {
            window.alert('Error')
            console.log(e)

        })
    })


    $(`#like-btn-zone_${photoId}`).on('click', () => {
        axios.delete(`/photos/${photoId}/likes`)
        .then((response) => {
            console.log(response)
        })
        .catch((e) => {
            window.alert('Error')
            console.log(e)
        })
    })
})





// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)