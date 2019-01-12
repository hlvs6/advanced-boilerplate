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
            currentIndex: 0
        }
    },
    created() {
        this.works = require('../../../data/works.json');
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex]
        }
    },
    watch: {
        currentIndex(value) {
            this.makeInfiniteSliding(value);
        }
    },
    methods: {
        makeInfiniteSliding(value) {
            const workAmountMinusOne = this.works.length - 1;
            if (value > workAmountMinusOne) {
                this.currentIndex = 0;
            }
            if (value < 0) {
                this.currentIndex = workAmountMinusOne;
            }
        },
        handleSlide(direction) {
            switch(direction) {
                case 'next' :
                    this.currentIndex = this.currentIndex + 1
                break
                case 'prev' :
                    this.currentIndex = this.currentIndex - 1
                break
            }
        }
    },
    template: '#slider',
})