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
        slide(type) {
            if (type === 'next') {
                console.log('Следующая страница')
            }
            if (type === 'prev') {
                console.log('Предыдущая страница страница')
            }
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
    template: '#slider',
})