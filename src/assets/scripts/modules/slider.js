import Vue from 'vue'

const sliderSelectInfo = {
    template: '#slider-select-info',
}

const selectSlide = {
    template: '#selectSlide'
}

const sliderBtns = {
    template: '#sliderBtns'
}

new Vue({
    el: '#slider-root',
    components: { sliderSelectInfo, selectSlide, sliderBtns },
    template: '#slider',
})