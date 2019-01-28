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
    props: {
        works: Array,
        index: Number
    },
    data() {
        return {
            prevButtonWorks: [],
            nextButtonWorks: []
        };
    },
    created() {
        this.prevButtonWorks = this.transformWorksArrForBtn('prev');
        this.nextButtonWorks = this.transformWorksArrForBtn('next');
    },
    methods: {
        slide(direction) {
            this.$emit('slide', direction);
        },
        transformWorksArrForBtn(btnDirection) {

            //Копирование массива при помощи spread оператора
            const worksArray = [...this.works];

            const lastItem = worksArray[worksArray.length - 1];

            switch(btnDirection) {
                case 'next':
                    worksArray.push(worksArray[0]);
                    worksArray.shift();
                break;
                case 'prev':
                    worksArray.unshift(lastItem);
                    worksArray.pop();
                break;
            }

            return worksArray;
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
    created() {
        this.works = require('../../../data/works.json');
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