import Vue from 'vue'

const sliderSelectInfo = {
    template: '#slider-b-info-select',
}

const slider = {
    template: '#slider'
}

new Vue({
    el: '#slider-root',
    components: { sliderSelectInfo, slider },
    template: '#slider-wrap',
})