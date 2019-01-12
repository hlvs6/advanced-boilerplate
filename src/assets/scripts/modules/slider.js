import Vue from 'vue'

const sliderSelectInfo = {
    props: {
        work: Object
    },
    template: '#slider-select-info',
}

const selectSlide = {
    props: {
        work: Object
    },
    template: '#selectSlide'
}

const sliderBtns = {
    template: '#sliderBtns',
    methods: {
        slide(direction) {
            this.$emit('slide', direction);
        }
    }
}

new Vue({
    el: '#slider-root',
    components: { sliderSelectInfo, selectSlide, sliderBtns },
    data() {
        return {
            works: [],
            currentWork: {}
        }
    },
    created() {
        this.works = require('../../../data/works.json');
        this.currentWork = this.works[0];
    },
    methods: {
        handleSlide(direction) {
            console.log(direction);
        }
    },
    template: '#slider',
})